import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  // Get all blog posts, sorted by publication date
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );

  // Format the date for the feed items
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toUTCString();
  };

  // Create the RSS feed
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: formatDate(post.data.pubDate),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      // Optional: include categories/tags if your blog posts have them
      categories: post.data.tags || [],
      // Optional: include custom content if needed
      content: post.data.excerpt || '',
    })),
    // Customize the XML output with optional settings
    customData: `<language>en-us</language>
                 <lastBuildDate>${formatDate(new Date())}</lastBuildDate>
                 <managingEditor>gracearlayna@gmail.com (Grace Giebel)</managingEditor>
                 <webMaster>gracearlayna@gmail.com (Grace Giebel)</webMaster>
                 <image>
                   <url>${context.site}favicon.svg</url>
                   <title>${SITE_TITLE}</title>
                   <link>${context.site}</link>
                 </image>`,
  });
}


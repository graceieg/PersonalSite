// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Grace Giebel - Software Engineer & UX Designer';
export const SITE_DESCRIPTION = 'Personal portfolio showcasing software engineering and UX design work';

export const SOCIAL_LINKS = {
  github: 'https://github.com/graceieg',
  linkedin: 'https://www.linkedin.com/in/grace-giebel-ab512427b/',
  email: 'mailto:gracearlayna@gmail.com'
};

export function formattedDate(date: Date | string): string {
  // Create a new Date object if a string is passed
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Options for formatting the date with proper types
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  // Return formatted date
  return dateObj.toLocaleDateString('en-US', options);
}
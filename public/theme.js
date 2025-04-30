document.addEventListener('DOMContentLoaded', () => {
  // ✅ Declare this FIRST
  const root = document.documentElement;

  // ✅ Function to update --gray-lighter based on time
  function updateGrayLighter() {
    const hour = new Date().getHours();
    let value;

    if (hour >= 6 && hour < 12) {
      value = '#faeaad'; // Morning
    } else if (hour >= 12 && hour < 18) {
      value = '#feffca'; // Afternoon
    } else {
      value = '#504dffa8'; // Evening/Night
    }

    root.style.setProperty('--gray-lighter', value);
    
    // Debug line
    console.log('Updated --gray-lighter to', value, 'at hour', hour);
  }

  // ✅ Function to update the time-of-day image
  function updateTimeOfDayImage() {
    const hour = new Date().getHours();
    const image = document.getElementById('timeOfDayImage');

    if (!image) {
      console.warn('timeOfDayImage element not found');
      return;
    }

    if (hour >= 6 && hour < 12) {
      image.src = '/time-morning.png';
      image.alt = 'Morning Sun';
    } else if (hour >= 12 && hour < 18) {
      image.src = '/time-afternoon.png';
      image.alt = 'Afternoon Sun with Clouds';
    } else if (hour >= 18 && hour < 21) {
      image.src = '/time-evening.png';
      image.alt = 'Evening Orangey Sun with Clouds';
    } else {
      image.src = '/time-night.png';
      image.alt = 'Night Moon';
    }
    
    // Debug line
    console.log('Updated time image for hour', hour);
  }

  // ✅ Function to update the text under the image
  function updateDateTimeDisplay() {
    const dateTimeDiv = document.getElementById('dateTimeDisplay');
    if (!dateTimeDiv) {
      console.warn('dateTimeDisplay element not found');
      return;
    }

    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const date = now.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    dateTimeDiv.textContent = `${date} • ${time}`;
    
    // Debug line
    console.log('Updated date/time display');
  }

  // Run all updates immediately
  updateGrayLighter();
  updateTimeOfDayImage();
  updateDateTimeDisplay();
  
  // Set up intervals to update regularly
  setInterval(updateGrayLighter, 60000); // Check every minute
  setInterval(updateTimeOfDayImage, 60000); // Check every minute
  setInterval(updateDateTimeDisplay, 60000); // Update time every minute
});
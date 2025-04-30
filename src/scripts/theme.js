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
}

// ✅ Function to update the time-of-day image
function updateTimeOfDayImage() {
  const hour = new Date().getHours();
  const image = document.getElementById('timeOfDayImage');

  if (!image) return;

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
}

// ✅ Function to update the text under the image
function updateDateTimeDisplay() {
  const dateTimeDiv = document.getElementById('dateTimeDisplay');
  if (!dateTimeDiv) return;

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
}

// ✅ Call the functions after they're all defined
updateGrayLighter();
updateTimeOfDayImage();
updateDateTimeDisplay();
setInterval(updateDateTimeDisplay, 60000);

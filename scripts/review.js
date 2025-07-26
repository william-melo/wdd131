// Function to get URL parameters
function getUrlParams() {
  const params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  for (const [key, value] of urlParams.entries()) {
    // Handle multiple values for the same key (like checkboxes)
    if (params[key]) {
      if (!Array.isArray(params[key])) {
        params[key] = [params[key]];
      }
      params[key].push(value);
    } else {
      params[key] = value;
    }
  }
  
  return params;
}

// Function to display review summary
function displayReviewSummary() {
  const params = getUrlParams();
  const summaryContainer = document.getElementById('review-summary');
  
  // Create HTML for the summary
  let summaryHTML = '<dl>';
  
  // Product Name
  if (params.product) {
    summaryHTML += `<dt>Product:</dt><dd>${params.product}</dd>`;
  }
  
  // Rating
  if (params.rating) {
    const stars = '★'.repeat(parseInt(params.rating)) + '☆'.repeat(5 - parseInt(params.rating));
    summaryHTML += `<dt>Rating:</dt><dd>${stars} (${params.rating}/5)</dd>`;
  }
  
  // Installation Date
  if (params['installation-date']) {
    const date = new Date(params['installation-date']);
    const formattedDate = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    summaryHTML += `<dt>Installation Date:</dt><dd>${formattedDate}</dd>`;
  }
  
  // Features
  if (params.feature) {
    const features = Array.isArray(params.feature) ? params.feature : [params.feature];
    summaryHTML += `<dt>Useful Features:</dt><dd>${features.join(', ')}</dd>`;
  } else {
    summaryHTML += `<dt>Useful Features:</dt><dd>None selected</dd>`;
  }
  
  // Written Review
  if (params.review && params.review.trim() !== '') {
    summaryHTML += `<dt>Your Review:</dt><dd>"${params.review}"</dd>`;
  }
  
  // User Name
  if (params.username && params.username.trim() !== '') {
    summaryHTML += `<dt>Submitted by:</dt><dd>${params.username}</dd>`;
  }
  
  summaryHTML += '</dl>';
  
  // Add the summary to the page
  summaryContainer.innerHTML = summaryHTML;
}

// Function to update the review counter
function updateReviewCounter() {
  // Get current count from localStorage or initialize to 0
  let reviewCount = localStorage.getItem('reviewCount');
  
  if (reviewCount === null) {
    reviewCount = 0;
  } else {
    reviewCount = parseInt(reviewCount);
  }
  
  // Increment the count
  reviewCount++;
  
  // Save back to localStorage
  localStorage.setItem('reviewCount', reviewCount);
  
  // Update the display
  document.getElementById('review-count').textContent = reviewCount;
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  displayReviewSummary();
  updateReviewCounter();
});
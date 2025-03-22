const year = new Date().getFullYear();
const copyright = document.querySelector("#copyright");
copyright.innerHTML = `&copy;${year}`;

const lastUpdated = document.querySelector("#lastUpdated");
lastUpdated.innerHTML = document.lastModified;


/**
 * Calculates the windchill factor based on temperature and wind speed
 * @param {number} temp - Temperature in °C or °F
 * @param {number} speed - Wind speed in km/h or mph
 * @param {boolean} isMetric - Whether using metric units (true) or imperial units (false)
 * @returns {number|string} - The windchill factor or "N/A" if conditions aren't met
 */
function calculateWindChill(temp, speed, isMetric = true) {
  // Check if conditions are met for valid windchill calculation
  if ((isMetric && temp <= 10 && speed > 4.8) || (!isMetric && temp <= 50 && speed > 3)) {
    // One-line formula that works for both metric and imperial units
    return isMetric ? 
      13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16) : 
      35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  }
  
  // If conditions aren't met, return "N/A"
  return "N/A";
}
// Product array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Function to populate product dropdown
function populateProductDropdown() {
  const productSelect = document.getElementById('product');
  
  // Add each product to the dropdown
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1); // Capitalize first letter
    productSelect.appendChild(option);
  });
}

// Initialize the form when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  populateProductDropdown();
});
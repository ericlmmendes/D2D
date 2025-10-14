// bd.js
// Simulated database for admin password management

// Configuration object to store multiple admin passwords
const config = {
  adminPasswords: [
    "Evo@@0101",       // Existing password
    "Admin@@Admin2025",     // New password 1
    "CDCBarueri@@123"   // New password 2
  ]
};

// Function to validate the provided password
function validateAdminPassword(password) {
  return config.adminPasswords.includes(password);
}

// Export the validation function
export { validateAdminPassword };

// Get name from localStorage
const name = localStorage.getItem('internName');

// Show the name on dashboard
document.getElementById('internName').innerText = name || 'Intern';

// Generate referral code
const referralCode = name ? name.toLowerCase().replace(/\s/g, '') + '2025' : 'demo2025';
document.getElementById('refCode').innerText = referralCode;

// Get donation data from backend (optional)
fetch('http://localhost:3000/user')
  .then(res => res.json())
  .then(data => {
    // You can replace this line if you want dynamic name/referralCode from backend
    document.getElementById('donationAmount').innerText = data.totalDonations;
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

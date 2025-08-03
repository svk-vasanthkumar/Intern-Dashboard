# 🎯 Intern Dashboard Portal

A simple intern dashboard web app that displays:

- Intern's name
- Referral code (auto-generated from name)
- Total donations raised (from backend)
- Static rewards list (unlockables)

---

---

## 🧩 Project Structure

intern-dashboard/
├── backend/ ← Node.js + Express API
│ └── index.js
├── frontend/ ← HTML + CSS + JS
│ ├── index.html
│ ├── dashboard.html
│ ├── dashboard.js
│ └── style.css



---

## ⚙️ Features

| Page             | Description                              |
|------------------|------------------------------------------|
| `index.html`     | Dummy login page (name only)             |
| `dashboard.html` | Dashboard with intern info & rewards     |
| `style.css`      | Clean modern design                      |
| `dashboard.js`   | Connects to backend & displays data      |
| `index.js`       | Express.js backend API (returns JSON)    |

---

## 🚀 Setup Instructions (Frontend + Backend)

### 📁 1. Clone the Project


git clone https://github.com/svk-vasanthkumar/Intern-Dashboard.git
cd Intern-Dashboard
🖥️ 2. Run Backend (Local API)
bash
Copy
Edit
cd backend
npm install
node index.js
✅ Backend will run at:
http://localhost:3000/user

Sample JSON output:


{
  "name": "Vasanthkumar",
  "referralCode": "vasanth2025",
  "totalDonations": 7800
}
🌐 3. Open Frontend (Dashboard)
bash
Copy
Edit
cd ../frontend
Open index.html in your browser

Enter name and click Login

Dashboard loads name, referral code, and donations






🔗 Live working demo (frontend + backend)

📁 GitHub repo with:

All project files

This README.md





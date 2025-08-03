const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/user', (req, res) => {
  res.json({
    name: "Vasanth Kumar",
    referralCode: "vasanth2025",
    totalDonations: 7800
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});

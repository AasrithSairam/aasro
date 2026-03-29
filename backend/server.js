const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory array for inquiries (pending MongoDB integration)
const inquiries = [];

// Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  const newInquiry = { id: Date.now(), name, email, message, date: new Date().toISOString() };
  inquiries.push(newInquiry);
  
  console.log(`[New Inquiry Received]: ${name} (${email})`);
  console.log(`Message: ${message}`);
  
  // Return success response
  res.status(200).json({ success: true, message: 'Inquiry received successfully.' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('API is ready to receive requests.');
});

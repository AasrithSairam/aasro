const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory inquiries list
const inquiries = [];

// Department/Module to target email mapping
const emailMapping = {
  mechanical: 'mech@aasrosolutions.com',
  it: 'it@aasrosolutions.com',
  education: 'edu@aasrosolutions.com',
  general: 'info@aasrosolutions.com' // Fallback
};

// Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message, module } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  // Determine target email based on selected module
  const selectedModule = module ? module.toLowerCase() : 'general';
  const targetEmail = emailMapping[selectedModule] || emailMapping['general'];

  const newInquiry = { 
    id: Date.now(), 
    name, 
    email, 
    message, 
    module: selectedModule,
    targetEmail,
    date: new Date().toISOString() 
  };
  inquiries.push(newInquiry);
  
  console.log(`\n==================================================`);
  console.log(`[New Inquiry Received] Module: ${selectedModule.toUpperCase()} -> Routing to: ${targetEmail}`);
  console.log(`From: ${name} (${email})`);
  console.log(`Message: ${message}`);
  console.log(`==================================================\n`);

  // Send email via nodemailer if SMTP credentials are configured in .env
  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: targetEmail,
        subject: `New Inquiry for AASRO Solutions - ${selectedModule.toUpperCase()}`,
        text: `Name: ${name}\nEmail: ${email}\nDepartment: ${selectedModule}\nMessage: ${message}`
      });
      console.log(`[Email Sent Successfully to ${targetEmail}]`);
    } else {
      console.log(`[Email Send Simulated (No SMTP credentials configured in .env)]`);
    }
    res.status(200).json({ success: true, message: 'Inquiry routed and sent successfully.' });
  } catch (error) {
    console.error(`[Error sending email]:`, error);
    res.status(200).json({ success: true, warning: 'Inquiry logged but email delivery failed.', message: 'Inquiry received.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('API is ready to receive requests.');
});

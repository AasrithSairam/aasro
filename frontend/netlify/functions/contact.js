const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Handle CORS preflight options
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  try {
    const { name, email, message, module } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type"
        },
        body: JSON.stringify({ success: false, error: "All fields are required." })
      };
    }

    const emailMapping = {
      mechanical: 'mech@aasrosolutions.com',
      it: 'it@aasrosolutions.com',
      education: 'edu@aasrosolutions.com',
      general: 'info@aasrosolutions.com'
    };

    const selectedModule = module ? module.toLowerCase() : 'general';
    const targetEmail = emailMapping[selectedModule] || emailMapping['general'];

    console.log(`[Netlify Function - contact] Routing inquiry from ${name} to ${targetEmail}`);

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials not configured. Email sending skipped.");
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type"
        },
        body: JSON.stringify({ 
          success: true, 
          message: "Inquiry received (Simulation Mode).", 
          warning: "SMTP_USER/SMTP_PASS environment variables are not configured in Netlify." 
        })
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: targetEmail,
      subject: `New Inquiry for AASRO Solutions - ${selectedModule.toUpperCase()}`,
      text: `Name: ${name}\nEmail: ${email}\nDepartment: ${selectedModule}\nMessage: ${message}`
    });

    console.log(`Email successfully sent to ${targetEmail}`);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      body: JSON.stringify({ success: true, message: "Email routed and sent successfully." })
    };
  } catch (error) {
    console.error("Error in contact function:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};

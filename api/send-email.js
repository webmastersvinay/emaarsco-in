const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, mobile, project } = req.body;

    // Validation
    if (!name || !email || !mobile || !project) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Mobile validation (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({ error: 'Mobile number must be 10 digits' });
    }

    // Create transporter using Gmail SMTP (you'll need to set up app password)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS  // Your Gmail app password
      }
    });

    // Email content
    const subject = `DM - ${project} enquiry`;
    const text = `Results from form:

name:           ${name}
email:          ${email}
mobile:         ${mobile}
project:        ${project}

Enquiry received at: ${new Date().toLocaleString()}`;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'query@aadharhomes.com',
      subject: subject,
      text: text
    });

    res.status(200).json({ 
      success: true, 
      message: 'Thank You! Details Have Been Sent. We will get in touch with you at the earliest.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}

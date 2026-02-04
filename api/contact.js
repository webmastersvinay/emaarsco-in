export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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

    // For now, just return success - we'll use EmailJS on frontend
    res.status(200).json({ 
      success: true, 
      message: 'Thank You! Details Have Been Sent. We will get in touch with you at the earliest.' 
    });

  } catch (error) {
    console.error('Error processing form:', error);
    res.status(500).json({ error: 'Failed to process form. Please try again later.' });
  }
}

# Emaar SCO Website - Vercel Deployment Guide

## 🚀 Quick Setup (100% FREE)

### Step 1: Set up EmailJS (FREE Email Service)

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Customer name
   - `{{from_email}}` - Customer email  
   - `{{mobile}}` - Customer mobile
   - `{{project}}` - Project name
   - `{{to_email}}` - Your email (query@aadharhomes.com)

4. Get your credentials:
   - Service ID
   - Template ID  
   - Public Keyy

### Step 2: Update EmailJS Configuration

Edit `assets/js/form-handler.js` and replace these lines:
```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID  
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your public key
```

### Step 3: Deploy to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy your site:**
   ```bash
   vercel --prod
   ```

4. **Your site will be live at:** `https://your-project-name.vercel.app`

## 🔧 Alternative: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel at [vercel.com](https://vercel.com)
3. Vercel will automatically deploy on every push

## 📧 How Email Works

- **Current Setup:** Forms send emails directly to `query@aadharhomes.com`
- **No Database:** No MySQL database needed
- **No Server:** Everything runs on Vercel's free tier
- **Free Forever:** EmailJS allows 200 emails/month for free

## 🎯 What Changed

✅ **Removed:** All PHP files (form.php, email.php)  
✅ **Added:** JavaScript form handling  
✅ **Added:** EmailJS integration  
✅ **Added:** Vercel configuration  
✅ **Updated:** All form actions to use JavaScript  

## 🚨 Important Notes

1. **EmailJS Setup Required:** You MUST set up EmailJS for emails to work
2. **Free Tier Limits:** 200 emails/month on EmailJS free plan
3. **No Database:** Form data is only sent via email (no storage)
4. **Mobile Responsive:** All forms work on mobile devices

## 🆘 Troubleshooting

**Forms not working?**
- Check EmailJS configuration in `form-handler.js`
- Verify EmailJS service is active
- Check browser console for errors

**Emails not received?**
- Check spam folder
- Verify EmailJS template is correct
- Test with a simple email first

## 📞 Support

If you need help:
1. Check EmailJS documentation
2. Verify all form fields are properly named
3. Test forms on different browsers

---

**Total Cost: $0**  
**Setup Time: 15 minutes**  
**Maintenance: None required**

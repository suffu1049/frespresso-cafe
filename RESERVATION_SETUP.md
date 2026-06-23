# Reservation Email Setup Guide

## Overview
Your reservation system will now:
1. ✅ Collect booking details from the form
2. 📧 Send a detailed email to your cafe (suffu0051@gmail.com)
3. 📧 Send a confirmation email to customers (if they provide email)
4. 🔔 Ready for SMS integration (optional)

---

## Step 1: Set Up Gmail App Password

### Why App Password?
Gmail requires an "App Password" for third-party apps to send emails for security reasons.

### How to Generate App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left menu
3. Make sure **2-Step Verification** is enabled (you may need to set this up first)
4. Scroll down and find **App passwords**
5. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your device)
6. Google will generate a 16-character password (looks like: `abcd efgh ijkl mnop`)
7. Copy this password (without spaces)

---

## Step 2: Create .env.local File

1. In your project root (same level as package.json), create a new file: `.env.local`
2. Copy this template and fill in your values:

```
EMAIL_USER=suffu0051@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
CAFE_EMAIL=suffu0051@gmail.com
```

Replace `abcdefghijklmnop` with the App Password you generated (without spaces).

⚠️ **IMPORTANT**: Never commit `.env.local` to git. It's already in `.gitignore`.

---

## Step 3: Install Dependencies

Run this command in your terminal:

```bash
npm install
```

This will install `nodemailer` which handles sending emails.

---

## Step 4: Test the Setup

1. Start your development server:
```bash
npm run dev
```

2. Go to http://localhost:3000
3. Scroll to "Book a Table" section
4. Fill in the form with test data
5. Click "Submit Reservation"
6. Check your inbox (suffu0051@gmail.com) for the email

---

## What Happens When Someone Books:

### Email 1: Cafe Notification
You receive an email with:
- Guest name & phone
- Reservation date & time
- Number of guests
- Occasion
- Special requests
- Action reminder to contact the guest

### Email 2: Customer Confirmation (if email provided)
Customer receives:
- Confirmation message
- Their reservation details
- Cafe location & hours
- Friendly reminder that you'll call them

---

## Email Preview

### Format for Cafe:
```
🎉 New Reservation Request

Guest Information
├─ Name: John Doe
├─ Phone: +91 XXXXX XXXXX
└─ Email: john@example.com

Reservation Details
├─ Date: Monday, July 1, 2024
├─ Time: 18:30
├─ Guests: 4
└─ Occasion: Birthday

Special Requests
└─ Window seat requested

Action Required:
Please contact the guest to confirm their reservation.
```

---

## Troubleshooting

### Emails not sending?
1. Check `.env.local` has correct credentials
2. Verify App Password has no spaces
3. Check Gmail is allowing less secure apps (if using regular password)
4. Check spam/promotions folder

### "Failed to submit reservation" error?
1. Open browser console (F12) to see detailed error
2. Check server logs in terminal
3. Verify environment variables are set

### For SMS (Optional - Coming Soon)
We can add WhatsApp/SMS notifications using Twilio. Let me know if you want to set that up!

---

## Next Steps

1. ✅ Generate Gmail App Password (Step 1)
2. ✅ Create `.env.local` file (Step 2)
3. ✅ Run `npm install` (Step 3)
4. ✅ Test with `npm run dev` (Step 4)
5. 🎉 Your reservation system is ready!

**Need help?** The API code is in `src/app/api/reservations/route.ts` - all well-commented!

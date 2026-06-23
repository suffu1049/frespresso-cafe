import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Format reservation details for email
function formatReservationEmail(data: any) {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #8B4513; text-align: center; margin-bottom: 30px;">🎉 New Reservation Request</h1>
        
        <div style="background-color: #f9f3f0; padding: 20px; border-left: 4px solid #D4AF37; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0;">Guest Information</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email || "Not provided"}</p>
        </div>

        <div style="background-color: #f9f3f0; padding: 20px; border-left: 4px solid #D4AF37; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0;">Reservation Details</h2>
          <p><strong>Date:</strong> ${new Date(data.date).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          <p><strong>Time:</strong> ${data.time}</p>
          <p><strong>Number of Guests:</strong> ${data.guests}</p>
          <p><strong>Occasion:</strong> ${data.occasion}</p>
        </div>

        ${data.notes ? `<div style="background-color: #f9f3f0; padding: 20px; border-left: 4px solid #D4AF37; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0;">Special Requests</h2>
          <p style="color: #555; white-space: pre-wrap;">${data.notes}</p>
        </div>` : ""}

        <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <p style="color: #666; font-size: 12px; margin: 0;">
            <strong>Action Required:</strong> Please contact the guest to confirm their reservation.
          </p>
          <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">
            Reservation submitted on: ${new Date().toLocaleString("en-IN")}
          </p>
        </div>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="text-align: center; color: #999; font-size: 12px;">
          Frespresso Cafe • Vapi, Gujarat
        </p>
      </div>
    </div>
  `;
}

// Format customer confirmation email
function formatConfirmationEmail(data: any) {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #8B4513; text-align: center; margin-bottom: 30px;">☕ Reservation Confirmed!</h1>
        
        <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
          Hi <strong>${data.name}</strong>,
        </p>

        <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
          Thank you for booking with <strong>Frespresso Cafe</strong>! We're excited to have you visit us.
        </p>

        <div style="background-color: #f9f3f0; padding: 20px; border-left: 4px solid #D4AF37; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0;">Your Reservation</h2>
          <p><strong>📅 Date:</strong> ${new Date(data.date).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          <p><strong>⏰ Time:</strong> ${data.time}</p>
          <p><strong>👥 Guests:</strong> ${data.guests}</p>
          <p><strong>🎊 Occasion:</strong> ${data.occasion}</p>
        </div>

        <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 0; color: #2e7d32;">
            ✓ We will contact you shortly on <strong>${data.phone}</strong> to confirm your booking.
          </p>
        </div>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #333; margin-top: 0;">📍 Find Us</h3>
          <p style="color: #555; margin: 5px 0;">
            1008, Laddak, Vapi East, Sonorous,<br />
            Vapi, Gujarat 396191
          </p>
          <p style="color: #555; margin: 5px 0;">
            <strong>🕐 Hours:</strong> 10:00 AM – 10:30 PM (Daily)
          </p>
        </div>

        <p style="color: #999; font-size: 14px; text-align: center; margin-top: 20px;">
          If you need to make changes, please contact us at your earliest convenience.
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="text-align: center; color: #999; font-size: 12px; margin: 0;">
          Frespresso Cafe • Vapi, Gujarat<br />
          We're looking forward to serving you!
        </p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, guests, date, time, occasion, notes, email } = body;

    // Validation
    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const cafeEmail = process.env.CAFE_EMAIL || "suffu0051@gmail.com";

    // Send email to cafe
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: cafeEmail,
      subject: `🎉 New Reservation Request - ${name} - ${date}`,
      html: formatReservationEmail({ name, phone, email, guests, date, time, occasion, notes }),
    });

    // Send confirmation email to customer (if email provided)
    if (email) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "✓ Reservation Confirmed - Frespresso Cafe",
        html: formatConfirmationEmail({ name, phone, guests, date, time, occasion }),
      });
    }

    // TODO: Add SMS notification here using Twilio or similar service
    // if (phone) {
    //   await sendSMS(phone, reservationMessage);
    // }

    return NextResponse.json(
      {
        success: true,
        message: "Reservation received! We'll contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json(
      { error: "Failed to process reservation" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    // IMPORTANT: Setup environment variables EMAIL_USER and EMAIL_PASS (App Password)
    // for this to work in production.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com",
        pass: process.env.EMAIL_PASS || "your-app-password",
      },
    });

    const mailOptions = {
      from: `"Quantum Portfolio" <${process.env.EMAIL_USER}>`,
      to: "sohailbrohi93@gmail.com",
      subject: `New Project Inquiry: ${service} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Inter', sans-serif; background-color: #030014; color: #ffffff; padding: 40px; }
            .container { max-width: 600px; margin: 0 auto; background: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 24px; padding: 40px; box-shadow: 0 10px 30px rgba(0,242,255,0.05); }
            .header { border-bottom: 2px solid #1a1a1a; padding-bottom: 30px; margin-bottom: 30px; text-align: center; }
            .logo { font-size: 24px; font-weight: 900; letter-spacing: 5px; color: #00f2ff; }
            .label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #666; margin-bottom: 5px; font-weight: 900; }
            .value { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 25px; }
            .message-box { background: #111; padding: 25px; border-radius: 16px; border-left: 4px solid #00f2ff; }
            .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #444; letter-spacing: 1px; }
            .highlight { color: #00f2ff; }
          </style>
        </head>
        <body>
          <div className="container">
            <div className="header">
              <div className="logo">QUANTUM<span style="color: #bc00ff">.</span></div>
              <p style="color: #666; font-size: 14px; margin-top: 10px;">PROPOSAL RECEIVED</p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                <div className="label">Sender Name</div>
                <div className="value">${name}</div>
              </div>
              <div>
                <div className="label">Email Address</div>
                <div className="value text-primary">${email}</div>
              </div>
              <div>
                <div className="label">Contact Number</div>
                <div className="value">${phone || "Not Provided"}</div>
              </div>
              <div>
                <div className="label">Company</div>
                <div className="value">${company || "N/A"}</div>
              </div>
              <div>
                <div className="label">Requested Service</div>
                <div className="value"><span style="color: #7000ff">${service}</span></div>
              </div>
              <div>
                <div className="label">Est. Budget</div>
                <div className="value"><span style="color: #bc00ff">${budget}</span></div>
              </div>
            </div>

            <div className="label">Project Vision</div>
            <div className="message-box">
              <p style="margin: 0; line-height: 1.6; color: #ccc;">${message}</p>
            </div>

            <div className="footer">
              © 2026 MUHAMMAD SOHAIL • QUANTUM STUDIO SYSTEM
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}

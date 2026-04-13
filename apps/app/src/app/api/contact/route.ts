import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

type ContactRequest = {
  interestedIn?: string;
  firstName?: string;
  lastName?: string;
  faithCommunityName?: string;
  email?: string;
  phone?: string;
  address?: string;
  message?: string;
  hearAboutUs?: string;
  recaptchaToken?: string;
};

type RecaptchaResponse = {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

async function verifyRecaptcha(
  token: string
): Promise<{ valid: boolean; score?: number }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY not configured, skipping verification");
    return { valid: true };
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data: RecaptchaResponse = await response.json();

    const isValid =
      data.success && (data.score === undefined || data.score >= 0.5);

    return { valid: isValid, score: data.score };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { valid: false };
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function emailSectionRow(label: string, value: string, preWrap = false): string {
  const style = preWrap
    ? "margin: 0; color: #333; font-size: 15px; line-height: 1.7; white-space: pre-wrap;"
    : "margin: 0; color: #1a1a1a; font-size: 16px;";
  return `
                <tr>
                  <td style="padding: 20px 0; border-bottom: 1px solid #eee;">
                    <p style="margin: 0 0 5px 0; color: #FF5722; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">
                      ${escapeHtml(label)}
                    </p>
                    <p style="${style}">${escapeHtml(value)}</p>
                  </td>
                </tr>`;
}

function generateEmailHTML(params: {
  name: string;
  email: string;
  phone: string;
  interestedIn: string;
  faithCommunityName: string;
  address: string;
  hearAboutUs: string;
  message: string;
}): string {
  const rows: string[] = [
    `
                <tr>
                  <td style="padding-bottom: 20px; border-bottom: 1px solid #eee;">
                    <p style="margin: 0 0 5px 0; color: #FF5722; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">
                      From
                    </p>
                    <p style="margin: 0; color: #1a1a1a; font-size: 18px; font-weight: 600;">
                      ${escapeHtml(params.name)}
                    </p>
                  </td>
                </tr>`,
    `
                <tr>
                  <td style="padding: 20px 0; border-bottom: 1px solid #eee;">
                    <p style="margin: 0 0 5px 0; color: #FF5722; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">
                      Email
                    </p>
                    <p style="margin: 0;">
                      <a href="mailto:${encodeURIComponent(params.email)}" style="color: #1a1a1a; font-size: 16px; text-decoration: none;">
                        ${escapeHtml(params.email)}
                      </a>
                    </p>
                  </td>
                </tr>`,
    emailSectionRow("Phone", params.phone),
    emailSectionRow("Interested in", params.interestedIn),
  ];

  if (params.faithCommunityName) {
    rows.push(emailSectionRow("Faith community", params.faithCommunityName));
  }
  if (params.address) {
    rows.push(emailSectionRow("Address", params.address, true));
  }
  if (params.hearAboutUs) {
    rows.push(emailSectionRow("How they heard about us", params.hearAboutUs));
  }
  if (params.message) {
    rows.push(`
                <tr>
                  <td style="padding-top: 20px;">
                    <p style="margin: 0 0 10px 0; color: #FF5722; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">
                      Message
                    </p>
                    <div style="background-color: #f9f9f9; border-left: 4px solid #FF5722; padding: 20px; border-radius: 0 4px 4px 0;">
                      <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
${escapeHtml(params.message)}
                      </p>
                    </div>
                  </td>
                </tr>`);
  }

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="background: #FF5722; padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
                Contact Inquiry
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
${rows.join("")}
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #1a1a1a; padding: 25px 30px; text-align: center;">
              <p style="margin: 10px 0 0 0; color: #444; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">
                © ${new Date().getFullYear()} Faith In Motion
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json();
    const {
      interestedIn = "",
      firstName = "",
      lastName = "",
      faithCommunityName = "",
      email = "",
      phone = "",
      address = "",
      message = "",
      hearAboutUs = "",
      recaptchaToken,
    } = body;

    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);

      if (!recaptchaResult.valid) {
        console.warn("reCAPTCHA verification failed", {
          score: recaptchaResult.score,
        });
        return NextResponse.json(
          { error: "Security verification failed. Please try again." },
          { status: 403 }
        );
      }
    }

    const first = firstName.trim();
    const last = lastName.trim();
    const name = `${first} ${last}`.trim();
    const emailTrim = email.trim();
    const phoneTrim = phone.trim();
    const interestedTrim = interestedIn.trim();

    if (!first) {
      return NextResponse.json(
        { error: "First name is required" },
        { status: 400 }
      );
    }
    if (!last) {
      return NextResponse.json(
        { error: "Last name is required" },
        { status: 400 }
      );
    }
    if (!emailTrim || !isValidEmail(emailTrim)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }
    if (!phoneTrim) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }
    if (!interestedTrim) {
      return NextResponse.json(
        { error: "Please select what you are interested in" },
        { status: 400 }
      );
    }

    const payload = await getPayload({ config });

    await payload.sendEmail({
      to: process.env.CONTACT_EMAIL || "admin@example.com",
      from: process.env.FROM_EMAIL || "noreply@example.com",
      replyTo: emailTrim,
      subject: `New Contact: ${name}`,
      html: generateEmailHTML({
        name,
        email: emailTrim,
        phone: phoneTrim,
        interestedIn: interestedTrim,
        faithCommunityName: faithCommunityName.trim(),
        address: address.trim(),
        hearAboutUs: hearAboutUs.trim(),
        message: message.trim(),
      }),
    });

    return NextResponse.json({
      success: true,
      message: "We'll be in touch with you as soon as possible!",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

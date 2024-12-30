import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { recipientEmail, name, phone, service, note } = await req.json();

        if (!recipientEmail) {
            return NextResponse.json(
                { success: false, error: "Recipient email is required" },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "onboarding@resend.dev", // Replace with your verified email address
            to: recipientEmail, 
            subject: `Contact Form Submission from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Note:</strong> ${note || "No additional note"}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, error: "Failed to send email" },
            { status: 500 }
        );
    }
}

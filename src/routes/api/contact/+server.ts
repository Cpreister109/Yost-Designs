import { json } from '@sveltejs/kit';
import * as nodemailer from 'nodemailer';

export async function POST({ request }) {
    const formData = await request.json();
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'cadepreister@gmail.com',
            pass: ' ',
        },
    });

    const mailOptions = {
        from: 'cadepreister@gmail.com',
        to: 'cadepreister@gmail.com',
        subject: `New Customer Inquiry ${formData.firstName} ${formData.lastName}`,
        text: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n ${formData.description}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
import { CaptchaVerify } from '@/utils/captcha-verify';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest,) {
    try {
        if (!process.env.RESEND_KEY) {
            return NextResponse.json({ success: false, error: "Unathorized" }, { status: 403 })
        }
        const resend = new Resend(process.env.RESEND_KEY);

        const formData = await req.json()
        const { name, email, message, } = formData.data
        console.log("formData ", formData)

        if (!name || !email || !message) {

            return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
        }

        const verifyCaptcha = await CaptchaVerify(formData.token)

        if (!verifyCaptcha.success) {
            return NextResponse.json({ success: false, error: verifyCaptcha.message }, { status: 400 })
        }

        // const emailProps = { name,  email,  message }

        const emailData = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['info@lizardprojects.com'],
            subject: 'New message from website',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        })

        if (emailData.error) {
            console.log("error ", emailData.error)
            return NextResponse.json({ succes: false, error: emailData.error }, { status: 400 })
        }

        return NextResponse.json({ success: true }, { status: 200 })


    } catch (err) {
        console.log(err)
        return NextResponse.json({ success: false, error: err }, { status: 500 })
    }

};
export async function CaptchaVerify(token: string) {

    const secret = process.env.CAPTCHA_SECRET_KEY

    if (!secret) {
        return {
            success: false,
            message: "reCAPTCHA secret key is not set"
        }
    }

    try {

        const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const data = await res.json()

        if (!data.success) {
            return {
                success: false,
                message: "reCAPTCHA failed"

            }
        } else {
            if (data.score > 0.5) {
                return {
                    success: true,
                    message: "reCAPTCHA "
                }

            } else {
                return {
                    success: false,
                    message: "reCAPTCHA failed"
                }
            }

        }

    } catch (err) {
        console.log(err)
        return {
            error: "internal server error"
        }
    }
}
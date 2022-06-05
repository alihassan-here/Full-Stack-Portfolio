import { createTransport } from "nodemailer";


export const sendMail = async (text) => {

    const transporter = createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        },
    });



    await transporter.sendMail({
        subject: "CONCTACT REQUEST FROM PORTFOLIO",
        from: process.env.MYMAIL,
        to: process.env.MYMAIL,
        text: text
    });
}
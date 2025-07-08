// emailService.js
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_jvalr9p";
const TEMPLATE_ID = "your_template_id"; // replace with your actual template ID
const PUBLIC_KEY = "8HKypWeN1u5yJKqPt";

export const buildMessage = (data) => {
    const {
        name, email, number, company, country, province, message,
    } = data;

    if (country.trim()) {
        return `
🚀 New Contact Submission

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${number}
🏢 Company: ${company}
🌍 Country: ${country}
🏙️ Province: ${province}

📝 Message:
${message}
    `.trim();
    } else {
        return `
🚀 New Contact Submission

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${number}
🏢 Company: ${company}
🏙️ Province: ${province}

📝 Message:
${message}
    `.trim();
    }
};

export const sendEmail = async (formRef, customMessage) => {
    return emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            message: customMessage,
        },
        PUBLIC_KEY
    );
};

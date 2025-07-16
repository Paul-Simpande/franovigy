import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_wn2o6gc';
const TEMPLATE_ID_HOST = 'template_9ix3zqp';
const TEMPLATE_ID_USER = 'template_v8mw6ih';
const PUBLIC_KEY = 'T9kzTJmvnv-JX8n7j';

const sendEventMail = async ({ firstName, lastName, email, phone, event }) => {
    const fullMessage = `${firstName} ${lastName} is requesting to register for the ${event.title} event coming up on ${event.date} at ${event.location}. You can reach them at ${phone} or ${email}.`;

    try {
        // Send to host (you)
        await emailjs.send(SERVICE_ID, TEMPLATE_ID_HOST, {
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            phone,
            event_title: event.title,
            event_date: event.date,
            event_location: event.location,
            message: fullMessage,
        }, PUBLIC_KEY);

        // Send confirmation to user
        await emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, {
            to_name: firstName,
            to_email: email,
            event_title: event.title,
            event_date: event.date,
            event_location: event.location,
        }, PUBLIC_KEY);

        return { success: true };
    } catch (error) {
        console.error("Email sending failed:", error);
        return { success: false, error };
    }
};

export default sendEventMail;

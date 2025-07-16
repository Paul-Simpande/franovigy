// src/pages/EventsPage/eventContent.js
import banner_1 from "./imgs/banner-1.avif"
import banner_2 from "./imgs/banner-2.avif"
import banner_3 from "./imgs/banner-3.avif"

export const EVENT_LIST = [
    {
        id: "soul-concert",
        date: "Tue, 09 Jan",
        title: "Soul Concert",
        location: "Mountain View",
        time: "09 Jan 2035, 11:30 am",
        address: "500 Terry Francine Street, San Francisco",
        moto: "This is a great place to get your guests excited by telling them a little more about this event.",
        banner: banner_1,
        description: `Use this space to tell guests more about this event, e.g., event schedule, speakers, important info & more. To customize this text head to Manage Event > Event Details.

This is a paragraph about your event. You can tell guests about the event history, background, types of participants and more. This is a great place to give guests plenty of additional information to get them excited to register. To customize this text head to Manage Event > Event Details.

This is a paragraph about your event. You can tell guests about the event history, background, types of participants and more. This is a great place to give guests plenty of additional information to get them excited to register. To customize this text head to Manage Event > Event Details.`,
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d881.6508191921199!2d28.310697420677727!3d-15.429724786030285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408d7eb42738ab%3A0x224e776df2f67273!2sMinistry%20of%20Green%20Economy%20And%20Environment!5e1!3m2!1sen!2szm!4v1752502468746!5m2!1sen!2szm"
    },
    {

        id: "tech-expo",
        date: "Wed, 10 Jan",
        title: "Tech Expo",
        location: "Silicon Valley",
        time: "10 Jan 2035, 1:00 pm",
        address: "Silicon Valley Convention Center",
        moto: "Explore the future of innovation at the Tech Expo.",
        banner: banner_2,
        description: `Tech Expo is your gateway into the innovations of tomorrow. Attendees can explore AI, robotics, Web 5.0, and other frontier technologies from top minds and startups.

You’ll experience keynotes from world-leading engineers, hands-on demos of cutting-edge tools, and networking with investors and developers pushing the boundaries of tech.

Join us in shaping the future, from ideation to impact.`,
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.4824905352885!2d-121.9764211846926!3d37.38747437983317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb7d3c88e9e1%3A0x19eaa8d086a1a51f!2sSilicon%20Valley%20Convention%20Center!5e0!3m2!1sen!2sus!4v1710463000000!5m2!1sen!2sus",
    },
    {
        id: "art-gala",
        date: "Thu, 11 Jan",
        title: "Art Gala",
        location: "Downtown LA",
        time: "11 Jan 2035, 6:00 pm",
        address: "LA Art Gallery, Main Street",
        moto: "An evening celebrating the finest contemporary art.",
        banner: banner_3,
        description: `The Art Gala is an immersive experience bringing together emerging and established artists in a celebration of color, concept, and creativity.

Wander through stunning exhibitions, live performances, and curated installations that spark conversation and emotion. A fusion of music, sculpture, photography, and spoken word awaits.

Dress to impress and prepare for an elegant night of artistic expression.`,
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.925010675451!2d-118.24700348478522!3d34.04892858060571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b8f11e5555%3A0x3df99872c470d1ec!2sDowntown%20Los%20Angeles%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1710463200000!5m2!1sen!2sus",
    },
];

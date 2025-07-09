import { LuConstruction } from "react-icons/lu";
import { MdAgriculture, MdEmojiTransportation, MdFactory } from "react-icons/md";

export const servicesData = [
    {
        id: 1,
        name: "Construction",
        description: "We provide comprehensive construction services tailored to meet the needs of residential, commercial, and industrial clients. Our expertise spans from project planning and architectural design to execution and post-construction support, ensuring quality, compliance, and long-term structural integrity.",
        icon: LuConstruction
    },
    {
        id: 2,
        name: "Agriculture",
        description: "Our agricultural division is committed to advancing modern, sustainable farming practices. We collaborate with stakeholders across the agricultural value chain to improve productivity, ensure food security, and promote environmentally responsible cultivation through the adoption of innovative technologies.",
        icon: MdAgriculture
    },
    {
        id: 3,
        name: "Food Processing",
        description: "We provide innovative food processing solutions that ensure quality, safety, and efficiency from raw materials to finished products. Our services cover sorting, cleaning, packaging, and preservation using modern technologies that meet industry standards. We help businesses add value, extend shelf life, and comply with regulatory requirements while maintaining nutritional integrity.",
        icon: MdFactory
    },
    {
        id: 4,
        name: "Transport and Logistics",
        description: "Our transport and logistics services deliver efficient, reliable, and scalable solutions across local and regional markets. We specialize in supply chain management, fleet operations, and cargo handling, ensuring seamless coordination and timely delivery for businesses across various sectors.",
        icon: MdEmojiTransportation
    }
];

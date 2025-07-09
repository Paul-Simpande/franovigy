// constants/portfolioConstants/projects.js

import banner1 from './project_01/banner_01.webp';
import img1 from './project_01/img_01.webp';
import img2 from './project_01/img_02.webp';
import img3 from './project_01/img_03.webp';
import img4 from './project_01/img_04.webp';
import img5 from './project_01/img_05.webp';
import img6 from './project_01/img_06.webp';

import banner2 from './project_02/banner_01.webp';
import img2_1 from './project_02/img_01.webp';
import img2_2 from './project_02/img_02.webp';
import img2_3 from './project_02/img_03.webp';
import img2_4 from './project_02/img_04.webp';
import img2_5 from './project_02/img_05.webp';
import img2_6 from './project_02/img_06.webp';

import banner3 from './project_03/banner_01.webp';
import img3_1 from './project_03/img_01.webp';
import img3_2 from './project_03/img_02.webp';
import img3_3 from './project_03/img_03.webp';
import img3_4 from './project_03/img_04.webp';
import img3_5 from './project_03/img_05.webp';
import img3_6 from './project_03/img_06.webp';

export const PROJECTS = [
    {
        title: "Project Title",
        description: "This is where the project description goes...",
        type: "Branding & Web Design",
        dateCompleted: "2024-11-01",
        customer: "Skyline Group Ltd.",
        banner: banner1,
        images: [img1, img2, img3, img4, img5, img6],
    },
    {
        title: "Project Title",
        description: "This is where the project description goes...",
        type: "E-Commerce Development",
        dateCompleted: "2025-03-15",
        customer: "Moda International",
        banner: banner2,
        images: [img2_1, img2_2, img2_3, img2_4, img2_5, img2_6],
    },
    {
        title: "Project Title",
        description: "This is where the project description goes...",
        type: "Web App Development",
        dateCompleted: "2025-06-10",
        customer: "TechSummit Events",
        banner: banner3,
        images: [img3_1, img3_2, img3_3, img3_4, img3_5, img3_6],
    }
];

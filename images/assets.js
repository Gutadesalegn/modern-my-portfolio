import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Maid finder',
        description: 'Platform connecting households with maids, featuring profile verification and job matching.',
        bgImage: '/work-1.png',
        link: 'https://github.com/kenaolb/MaidFinder-Backend',
    },
    {
        title: 'Reunited Us',
        description: 'Web app for managing and verifying missing person reports with role-based access.',
        bgImage: '/work-2.png',
        link: 'https://github.com/ewenet-communication/Reunite-Us-Frontend', // Add GitHub link here
    },
    {
        title: 'Employee Management System',
        description: 'System for managing employee profiles, roles, and attendance with streamlined HR workflows.',
        bgImage: '/work-3.png',
    },
    
    {
        title: 'Smart Irrigation System',
        description: 'Automated irrigation solution using embedded systems to optimize water usage based on soil moisture and weather data.',
        bgImage: '/work-5.jpg',
    },
    {
        title: 'Smart Blind Stick by Embedded',
        description: 'Embedded system-based smart stick for visually impaired individuals, featuring obstacle detection and navigation assistance.',
        bgImage: '/work-6.jpeg',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Full-stack Web Development', description: 'Building robust web applications using Laravel, Nuxt.js, React, and REST APIs.', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile App Development', description: 'Creating cross-platform mobile apps with Flutter.', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX Design', description: 'Designing user-friendly interfaces with Figma.', link: '' },
    { icon: assets.graphics_icon, title: 'Data Analysis', description: 'Analyzing data with Python and tools from Udacity Nanodegree.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Programming Languages/Frameworks', description: 'Python, PHP, JavaScript, Java, Flutter, React, Laravel, Nuxt.js,node.js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Sc. in Software Engineering, CGPA 3.01' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 3 projects' }
];

export const toolsData = [
    assets.git, assets.figma, assets.vscode, assets.mongodb
];
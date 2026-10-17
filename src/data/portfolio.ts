/**
 * ============================================================
 *  THIS IS THE ONLY FILE YOU NEED TO EDIT TO FILL IN YOUR INFO
 * ============================================================
 *  Replace each Lorem ipsum text with your real information.
 *  Add or remove items inside the [ ] lists as you need.
 *  Images go in /public/images (see README.md).
 */

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const portfolio = {
  // ---------- HERO + GENERAL INFO ----------
  profile: {
    name: "Ivan Martinez", // <- Your full name
    role: "Full-Stack Developer", // <- What you are / want to be
    tagline: "I build fast, full-stack web apps with Next.js and TypeScript, from the UI to the API. Computer Systems Engineering student, open to internships and junior roles.", // <- One-line pitch
    location: "Hermosillo, Mexico", // <- Where you live
    email: "ivanmartinezaguilar08@gmail.com", // <- Used by the contact form
    available: true, // <- true shows the "Open to opportunities" badge
    availableText: "Open to internships and junior roles · Remote or Hermosillo",
    avatar: "/images/ivan.svg", // <- Replace the file in /public/images
    resumeUrl: "/resume.pdf", // <- Put your CV in /public/resume.pdf
    resumeURL: "/resume.pdf", // <- Put your CV in /public/resume.pdf
    siteUrl: "https://navidev-portfolio.vercel.app", // <- Your domain (no trailing slash)
  },

  // ---------- NAVIGATION ----------
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  // ---------- SOCIAL LINKS ----------
socials: [
  { label: "GitHub", url: "https://github.com/valastar" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/iv%C3%A1n-martinez-aguilar-4a4218373/",
  },
],

// en contact:
channels: [
  {
    label: "Email",
    value: "ivanmartinezaguilar08@gmail.com",
    url: "mailto:ivanmartinezaguilar08@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Ivan Martinez",
    url: "https://www.linkedin.com/in/iv%C3%A1n-martinez-aguilar-4a4218373/",
  },
  { label: "GitHub", value: "valastar", url: "https://github.com/valastar" },
],

  // ---------- ABOUT ME ----------
  about: {
    title: "About me",
    paragraphs: [
      "I'm a passionate 18-year-old full-stack developer with a love for creating innovative web applications. I‘ve been constantly learning and building projects that challenge me to grow.",
      "I believe in writing clean, efficient code and creating user experiences that are both beautiful and functional.",
    ],
    // Quick facts shown next to the text
    highlights: [
      { label: "Years coding", value: "2+" },
      { label: "Projects built", value: "5" },
      { label: "Languages", value: "2" },
    ],
  },

  // ---------- SKILLS ----------
  skills: {
  title: "Skills",
  groups: [
    {
      title: "Frontend",
      items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML & CSS"],
    },
    {
      title: "Backend & APIs",
      items: ["Next.js API Routes", "REST APIs", "Nodemailer", "Python", "Java"],
    },
    { title: "Mobile & Games", items: ["React Native", "Godot Engine"] },
    {
      title: "Tools & Workflow",
      items: ["Git & GitHub", "Vercel (deploy)", "Figma", "VS Code"],
    },
    {
      title: "Currently learning",
      items: ["Node.js", "PostgreSQL", "Supabase", "Authentication"],
    },
  ],
},

  // ---------- PROJECTS ----------
  projects: {
    title: "Projects",
    items: [
      {
        title: "QuickGrowth",
        description:
          "A   Landing page about a businesses navigate the evolving digital landscape with strategic marketing, software solutions, and innovative technology. ",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        image: "/images/project-1.svg",
        liveUrl: "https://qg-page.vercel.app/", // <- Live demo (delete the line if none)
        repoUrl: "https://github.com/valastar/qg-page", // <- Code
      },
      {
        title: "Blue Keys",
        description: "Blue Keys is a premier consultancy firm specializing in the comprehensive design, architecture, and implementation of cloud solutions. Our expertise spans across the leading cloud platforms Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft and Azure.",
        tags: ["React", "JavaScript", "NextJS"],
        image: "/images/project-2.svg",
        liveUrl: "https://blue-keys.vercel.app/",
        repoUrl: "https://github.com/valastar/blue-keys",
      },
      {
        title: "Programming Fundamentals Guide (Java)",
        description:
          "Educational website that teaches Java to first-semester students, with theory, code examples, and practice exercises. Built with Next.js, React, TypeScript, and Tailwind CSS.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        image: "/images/project-3.svg",
        liveUrl: "https://school-java.vercel.app/",
        repoUrl: "https://github.com/valastar/School-Programming-Fundamentals",
      },
    ] as {
      title: string;
      description: string;
      tags: string[];
      image: string;
      liveUrl?: string;
      repoUrl?: string;
    }[],
  },

  // ---------- EXPERIENCE (jobs, internships, volunteering, freelance) ----------
  experience: {
    title: "Experience",
    items: [
      {
        role: "Learning and Development",
        company: "Self-employed",
        period: "Jan 2026 - Present",
        bullets: [
          "Make Mobile development with React Native.",
          "Participate in conferences and workshops to stay updated with the latest trends in web development and software engineering.",
          "Started college in Institute of Technology of Hermosillo, studying Computer Systems Engineering.",
          "Creating my own web applications for personal and professional use.",
        ],
      },
      {
        role: "Freelance Web Developer",
        company: "Self-employed",
        period: "2024 - 2025",
        bullets: [
          "Started with creating videogames with Godot Engine.",
          "Started learning web development and building small projects.",
        ],
      },
    ],
  },

  // ---------- EDUCATION + CERTIFICATIONS ----------
  education: {
    title: "Education",
    items: [
      {
        school: "Institute of Technology of Hermosillo",
        degree: "B.Sc. in Computer Systems Engineering",
        period: "2025 - 2029",
        description:
          "Currently Studying Computer Systems Engineering at the Institute of Technology of Hermosillo, focusing on software development and web technologies.",
      },
      {
        school: "Colegio Muñoz",
        degree: "High School Diploma",
        period: "2023 - 2026",
        description: "Graduated from Colegio Muñoz.",
      },
    ],
    certifications: [
      { name: "Python", issuer: "Santander Academy", year: "2026" },
      { name: "Python", issuer: "DigitalHouse", year: "2026" },
    ],
  },

  // ---------- CONTACT ----------
  contact: {
    title: "Contact",
    text: "Have a project, an internship opportunity, or just want to say hi? Pick whichever channel you prefer, or send me a message below and I'll get back to you soon.",
    // Delete any channel you don't use. `url` is what opens on click.
    channels: [
      {
        label: "Email",
        value: "ivanmartinezaguilar08@gmail.com",
        url: "mailto:ivanmartinezaguilar08@gmail.com",
      },
      {
        label: "WhatsApp",
        value: "+52 662 205 0077",
        url: "https://wa.me/526622050077",
      },
      { label: "Phone", value: "+52 662 205 0077", url: "tel:+526622050077" },
      {
        label: "LinkedIn",
        value: "Ivan Martinez",
        url: "https://www.linkedin.com/in/iv%C3%A1n-martinez-aguilar-4a4218373/",
      },
      {
        label: "GitHub",
        value: "valastar",
        url: "https://github.com/valastar",
      },
    ],
  },
};

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Learning & Building" },
  { value: 10, suffix: "+", label: "Personal Projects Completed" },
  { value: 5, suffix: "+", label: "Technologies Mastered" },
  { value: 100, suffix: "%", label: "Commitment to Growth" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Nextjs Developer",
    imgPath: "/images/logos/Nextjs.png",
  },
  {
    name: "Webflow Developer",
    imgPath: "/images/logos/webflow.png",
  },
  {
    name: "Figma UI/UX Designer",
    imgPath: "/images/logos/figma.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "I began my web development journey with HTML, discovering how structure shapes the web. Learning CSS soon followed, opening my eyes to styling and layout.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "HTML Developer",
    date: "January 2021 - 1 January 2022",
    responsibilities: [
      "Learned to build HTML website structures alongside my aunty.",
      "then explored CSS to bring layouts and designs to life.",
      "eventually built static web apps that combined both skills.",
    ],
  },
  {
    review:
      "Learning JavaScript helped me bring interactivity to websites. Exploring frameworks like React made building dynamic apps faster and easier.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "React Developer",
    date: "5 January 2022 - 6 October 2022",
    responsibilities: [
      "Started with JavaScript to understand the basics of logic and interaction.",
      "then moved on to React to build components and manage UI state.",
      "eventually began building full React apps with real-world features.",
    ],
  },
  {
    review:
      "Got curious about how the web works behind the scenes, so I learned Node.js and Express to handle server-side logic and routing.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "NodeJS Developer",
    date: "12 October 2022 -  5 March 2023",
    responsibilities: [
      "Learned Node.js to write JavaScript outside the browser. Followed by learning Express.js to create server-side applications.",
      "explored HTTP methods like GET and PUT to handle client requests.",
      "then studied MongoDB to manage and store data for apps.",
    ],
  },
  {
    review:
      "I wanted a faster, all-in-one solution than the MERN stack, so I learned Next.js to build full-stack apps with routing, APIs, and SSR out of the box.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Next.js Developer",
    date: "10 March 2023 - 15 August 2023",
    responsibilities: [
      "Started learning Next.js to streamline frontend and backend development.",
      "used file-based routing and built-in API routes for efficiency.",
      "then built full-stack projects with fast load times and SEO support.",
    ],
  },
  {
    review:
      "I wasn’t satisfied with how my websites looked, so I turned to Figma to learn UI/UX design and create cleaner, more user-friendly interfaces.",
    imgPath: "/images/exp5.png",
    logoPath: "/images/logo5.png",
    title: "UI/UX Designer",
    date: "20 August 2023 - 5 November 2023",
    responsibilities: [
      "Started using Figma to design layouts, wireframes, and prototypes.",
      "learned UI principles to improve visual hierarchy and usability.",
      "then applied UX practices to create intuitive user experiences.",
    ],
  },
  {
    review:
      "I got interested in 3D development and started exploring Spline to bring interactive 3D elements into my websites and designs.",
    imgPath: "/images/exp6.png",
    logoPath: "/images/logo6.png",
    title: "3D Web Designer",
    date: "10 November 2023 - 10 January 2024",
    responsibilities: [
      "Started learning Spline to create and animate 3D objects for the web.",
      "explored lighting, materials, and camera controls for interactive scenes.",
      "then integrated 3D assets into websites to enhance visual engagement.",
    ],
  },

  {
    review:
      "To extend my Figma design skills, I learned Webflow to turn static mockups into responsive, functional websites with no-code tools.",
    imgPath: "/images/exp7.png",
    logoPath: "/images/logo7.png",
    title: "Webflow Developer",
    date: "12 January 2024 - 15 March 2024",
    responsibilities: [
      "Started using Webflow to transform Figma designs into live websites.",
      "learned responsive layout techniques and CMS integration features.",
      "then built pixel-perfect sites while speeding up the design-to-deploy flow.",
    ],
  },
];
{
  /* <a target="_blank" href="https://icons8.com/icon/r2OarXWQc7B6/nextjs">Nextjs</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}
/* <a target="_blank" href="https://icons8.com/icon/20909/html-5">Html 5</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
{
  /* <a target="_blank" href="https://icons8.com/icon/ktrJ12qa5f65/webflow">WebFlow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}
{
  /* <a target="_blank" href="https://icons8.com/icon/ktrJ12qa5f65/webflow">WebFlow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "x",
    url: "https://x.com/orliyah130687",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/orliyah-kotelo-0046b6346/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

export type Project = {
  title: string;
  category: "Mobile apps" | "Web platforms";
  type: string;
  description: string;
  tags: string[];
  image?: string;
  theme: string;
  links: { label: string; url: string }[];
};
const github = "https://github.com/mahadihasandev/";
const play = (id: string) =>
  "https://play.google.com/store/apps/details?id=" + id;
export const projects: Project[] = [
  {
    title: "HRM + ERP",
    category: "Mobile apps",
    type: "SMART SOFTWARE LTD · ANDROID & IOS",
    description:
      "Contributed to a business application that brings HR and ERP workflows to mobile. Built as part of the team at Smart Software Ltd.",
    tags: ["React Native", "Android", "iOS", "Company work"],
    theme: "green",
    links: [
      { label: "Google Play", url: play("com.smartsoftware.mamungroup") },
    ],
  },
  {
    title: "Human resource management",
    category: "Web platforms",
    type: "FULL-STACK WEB APPLICATION",
    description:
      "An HRM web application pairing a Next.js frontend with a dedicated PHP backend. Explore the live application and both sides of the codebase.",
    tags: ["Next.js", "PHP", "Full-stack"],
    theme: "purple",
    links: [
      {
        label: "Live website",
        url: "https://hrm-next-js-frontend.vercel.app/",
      },
      { label: "Frontend", url: github + "HRM-Next.js-Frontend" },
      { label: "Backend", url: github + "HRM-PHP-Backend" },
    ],
  },
  {
    title: "Point of sale",
    category: "Web platforms",
    type: "FULL-STACK WEB APPLICATION",
    description:
      "A point-of-sale web project with separate frontend and backend repositories, built around the everyday needs of a retail business.",
    tags: ["Web application", "Frontend", "Backend"],
    theme: "peach",
    links: [
      { label: "Frontend", url: github + "POS-Fontend" },
      { label: "Backend", url: github + "POS-Backend" },
    ],
  },
  {
    title: "CloudSpace",
    category: "Mobile apps",
    type: "PERSONAL MOBILE PROJECT",
    description:
      "A React Native storage manager with storage insights, usage cards, and a clean mobile interface.",
    tags: ["React Native", "Expo", "TypeScript"],
    image: "/assets/react-native-cloudspace.png",
    theme: "blue",
    links: [
      { label: "Source code", url: github + "expo-clude-strage" },
      {
        label: "View APK",
        url: "https://drive.google.com/file/d/1uodngEDF1Gn7Vul1rmRUoOSV4-paJ139/view",
      },
    ],
  },
  {
    title: "Shop — serverless commerce",
    category: "Web platforms",
    type: "E-COMMERCE APPLICATION",
    description:
      "A full-stack storefront with authentication, Stripe checkout, and a Sanity CMS for managing product content.",
    tags: ["Next.js", "TypeScript", "Stripe", "Sanity"],
    image: "/assets/shop-next.png",
    theme: "peach",
    links: [
      {
        label: "Live website",
        url: "https://shop-nextjs-full-stack.vercel.app/",
      },
      { label: "Source code", url: github + "shop-nextjs-fullStack" },
    ],
  },
  {
    title: "BD Jobs Live",
    category: "Mobile apps",
    type: "SMART SOFTWARE LTD · COMPANY WORK",
    description:
      "Contributed to recruitment applications at Smart Software Ltd, including the job-seeker and employer experiences.",
    tags: ["React Native", "Recruitment", "Company work"],
    theme: "blue",
    links: [
      {
        label: "Job-seeker app",
        url: "https://play.google.com/store/search?q=bd%20jobs%20live&c=apps",
      },
      { label: "Employer app", url: play("employer.bdjobslive.com") },
    ],
  },
  {
    title: "Multi-vendor commerce",
    category: "Web platforms",
    type: "COMMERCE PLATFORM",
    description:
      "A Next.js storefront backed by an Express API and MongoDB, with administration for categories, products, and variants.",
    tags: ["Next.js", "Express", "MongoDB"],
    image: "/assets/node-frontend.png",
    theme: "green",
    links: [
      {
        label: "Live website",
        url: "https://next-frontend-express-project-saii.vercel.app/",
      },
      { label: "Source code", url: github + "next-frontend-express-project" },
    ],
  },
  {
    title: "FireChat",
    category: "Web platforms",
    type: "REAL-TIME APPLICATION",
    description:
      "Real-time conversations, friend requests, and group chat with Firebase integrations.",
    tags: ["React", "Redux", "Firebase"],
    image: "/assets/firechat.png",
    theme: "purple",
    links: [
      { label: "Live website", url: "https://fire-chat-orpin.vercel.app/" },
      { label: "Source code", url: github + "FireChat" },
    ],
  },
  {
    title: "Smart Banking",
    category: "Web platforms",
    type: "BANKING PROTOTYPE",
    description:
      "A banking prototype exploring account flows, transaction history, and fund transfers.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: "/assets/smart-bank.png",
    theme: "blue",
    links: [
      { label: "Live website", url: "https://smart-bank-frontend.vercel.app/" },
      { label: "Source code", url: github + "smart-bank-frontend" },
    ],
  },
  {
    title: "Commerce dashboard",
    category: "Web platforms",
    type: "ADMINISTRATION INTERFACE",
    description:
      "A React administration dashboard with authentication and controls for store operations.",
    tags: ["React", "Redux", "Ant Design"],
    image: "/assets/React-dashboard.png",
    theme: "purple",
    links: [
      {
        label: "Live website",
        url: "https://e-commerce-dashboard-multivandor-zm.vercel.app/",
      },
      { label: "Source code", url: github + "eCommerce-Dashboard-multivandor" },
    ],
  },
  {
    title: "Sanity content studio",
    category: "Web platforms",
    type: "CONTENT MANAGEMENT",
    description:
      "A dedicated studio for managing catalog content, media, and structured commerce data.",
    tags: ["Sanity", "GROQ", "CMS"],
    image: "/assets/sanity.png",
    theme: "peach",
    links: [
      {
        label: "View studio",
        url: "https://shop-nextjs-full-stack.vercel.app/studio",
      },
      {
        label: "Source code",
        url: github + "shop-nextjs-fullStack/tree/main/sanity",
      },
    ],
  },
];
export const companyApps = [
  { title: "BPC app", id: "com.bpcapp" },
  { title: "Weather app", id: "com.smartsoftware.weather" },
  { title: "Hotel app", id: "com.smartsoftware.hotel" },
];

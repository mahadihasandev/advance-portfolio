export type Project = {
  title: string;
  category: "Mobile apps" | "Web platforms";
  type: string;
  description: string;
  tags: string[];
  image?: string;
  gallery?: string[];
  highlights?: string[];
  imageNote?: string;
  theme: string;
  links: { label: string; url: string }[];
};

const github = "https://github.com/mahadihasandev/";
const play = (id: string) =>
  "https://play.google.com/store/apps/details?id=" + id;

export const projects: Project[] = [
  {
    title: "HRM + ERP",
    image: "/assets/hrm-1.webp",
    gallery: ["/assets/hrm-1.webp", "/assets/hrm-2.webp", "/assets/hrm-0.webp"],
    highlights: [
      "Mobile HRM and ERP experience",
      "Attendance and workday overview",
      "Company team contribution · Android & iOS",
    ],
    category: "Mobile apps",
    type: "SMART SOFTWARE LTD · PROFESSIONAL WORK",
    description:
      "Contributed to a business application that brings HR and ERP workflows to mobile. Built as part of the team at Smart Software Ltd.",
    tags: ["React Native", "Android", "iOS", "Professional work"],
    theme: "green",
    links: [
      { label: "Google Play", url: play("com.smartsoftware.mamungroup") },
    ],
  },
  {
    title: "Human resource management",
    image: "/assets/hrm-dashboard.png",
    gallery: [
      "/assets/hrm-dashboard.png",
      "/assets/hrm-directory.png",
      "/assets/hrm-leave.png",
      "/assets/hrm-probation.png",
      "/assets/hrm-archive.png",
    ],
    imageNote:
      "HRM web application · People Overview Dashboard, Master Employee Directory, Leave Management, Probation Reviews, and Deactive Archive",
    highlights: [
      "People Overview dashboard with real-time biometric punch-in & attendance status",
      "Master Employee Directory with role & department filters, bank verification, and access controls",
      "Statutory probation confirmation & review tracking (BLA 2006 compliance)",
      "Multi-tier leave management and approval workflows (Casual, Short, Compensatory, Earned, Sick)",
      "Deactivated staff archive with separation audit logs and one-click reactivation",
      "Next.js frontend with dedicated PHP backend architecture",
    ],
    category: "Web platforms",
    type: "FULL-STACK WEB APPLICATION",
    description:
      "A complete People & Factory Operations HRM web platform featuring biometric punch-in, master workforce directory, statutory probation reviews, leave workflows, and personnel archives. Built with Next.js and PHP.",
    tags: ["Next.js", "PHP", "Full-stack", "Factory Operations", "HRM"],
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
    title: "Point of sale (Prime Account)",
    image: "/assets/pos-checkout.png",
    gallery: [
      "/assets/pos-checkout.png",
      "/assets/pos-sales-register.png",
      "/assets/pos-purchase.png",
      "/assets/pos-due-collection.png",
      "/assets/pos-supplier-collection.png",
    ],
    imageNote:
      "Prime Account Retail Workspace · Barcode POS Checkout, Sales Register & Ledger, Chalan Intake, Customer Due Collection, and Supplier Settlements",
    highlights: [
      "High-speed barcode scanner intake [F2] with quick product lookup & hotkey settlement [F8/F10]",
      "Multi-channel payment handling (Bank, Cash), change calculation, and thermal POS receipt printing",
      "Sales Register & Ledger with invoice tracking, customer credit breakdown, and CSV data export",
      "Purchase & Chalan intake with supplier tracking, free quantity bonuses, and warehouse allocations",
      "Customer and supplier due collection workspaces with advance balances and ledger settlement",
      "Engineered with Next.js, Redux Toolkit, RTK Query, and a Laravel backend",
    ],
    category: "Web platforms",
    type: "FULL-STACK WEB APPLICATION",
    description:
      "Prime Account brings retail and wholesale operations into one seamless workspace: hotkey barcode checkout, inventory chalan intake, sales ledger auditing, customer due collection, and supplier receivables.",
    tags: ["Next.js", "Redux Toolkit", "RTK Query", "Laravel", "POS System"],
    theme: "peach",
    links: [
      { label: "Frontend", url: github + "POS-Fontend" },
      { label: "Backend", url: github + "POS-Backend" },
      { label: "Live website", url: "https://pos-fontend-kappa.vercel.app/" },
    ],
  },
  {
    title: "BD Jobs Live",
    image: "/assets/jobs-0.webp",
    gallery: [
      "/assets/jobs-0.webp",
      "/assets/jobs-1.webp",
      "/assets/jobs-2.webp",
    ],
    highlights: [
      "Job-seeker mobile employment platform",
      "Resume submission and alert notifications",
      "Published on Google Play · Smart Software Ltd",
    ],
    category: "Mobile apps",
    type: "SMART SOFTWARE LTD · PROFESSIONAL WORK",
    description:
      "Contributed to recruitment applications at Smart Software Ltd, including the job-seeker and employer experiences.",
    tags: ["React Native", "Recruitment", "Professional work"],
    theme: "blue",
    links: [
      {
        label: "Job-seeker app",
        url: play("com.smartsoftware.bdjobslive"),
      },
      { label: "Employer app", url: play("employer.bdjobslive.com") },
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
    title: "BPC — field inspections",
    category: "Mobile apps",
    type: "SMART SOFTWARE LTD · PROFESSIONAL WORK",
    description:
      "A mobile workspace for filling-station inspections, surveys, compliance assessments, and reporting for authorized BPC personnel.",
    tags: ["React Native", "Android", "Professional work"],
    theme: "purple",
    image: "/assets/bpc-0.webp",
    gallery: ["/assets/bpc-0.webp", "/assets/bpc-1.webp", "/assets/bpc-2.webp"],
    highlights: [
      "Digital inspections and photo evidence",
      "Compliance scoring and PDF reports",
      "Bengali and English support",
    ],
    links: [{ label: "Google Play", url: play("com.bpcapp") }],
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
    title: "BDJobs Live Employer",
    category: "Mobile apps",
    type: "SMART SOFTWARE LTD · PROFESSIONAL WORK",
    description:
      "The employer side of BDJobs Live: a dedicated recruitment application developed as part of the Smart Software team.",
    tags: ["React Native", "Android", "Professional work"],
    theme: "blue",
    image: "/assets/employer-0.webp",
    gallery: [
      "/assets/employer-0.webp",
      "/assets/employer-1.webp",
      "/assets/employer-2.webp",
    ],
    highlights: [
      "Employer-focused recruitment experience",
      "Companion to the BD Jobs Live job-seeker app",
      "React Native · company team contribution",
    ],
    links: [{ label: "Google Play", url: play("employer.bdjobslive.com") }],
  },
  {
    title: "Smart Hotel",
    category: "Mobile apps",
    type: "SMART SOFTWARE LTD · PROFESSIONAL WORK",
    description:
      "A mobile ERP application bringing hotel, restaurant, and hospitality operations into a connected business workspace.",
    tags: ["React Native", "Android", "Professional work"],
    theme: "peach",
    image: "/assets/hotel-0.webp",
    gallery: [
      "/assets/hotel-0.webp",
      "/assets/hotel-1.webp",
      "/assets/hotel-2.webp",
    ],
    highlights: [
      "Hotel ERP and business management",
      "Mobile access to hospitality operations",
      "React Native · company team contribution",
    ],
    links: [{ label: "Google Play", url: play("com.smartsoftware.hotel") }],
  },
  {
    title: "Weather Update",
    category: "Mobile apps",
    type: "SMART SOFTWARE LTD · PROFESSIONAL WORK",
    description:
      "A weather application from Smart Software Ltd, included among my company mobile development and interface contributions.",
    tags: ["React Native", "Android", "Professional work"],
    theme: "green",
    image: "/assets/weather-0.webp",
    gallery: [
      "/assets/weather-0.webp",
      "/assets/weather-1.webp",
      "/assets/weather-2.webp",
    ],
    highlights: [
      "Weather information on mobile",
      "Published on Google Play",
      "React Native · company team contribution",
    ],
    links: [{ label: "Google Play", url: play("com.smartsoftware.weather") }],
  },
  // Bottom projects as requested: CloudSpace, FireChat, Smart Banking, Commerce dashboard, Sanity content studio
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

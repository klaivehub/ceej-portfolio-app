export const NAV_LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const EXPERIENCES_DATA = [
    {
        title: "Junior Software Developer",
        status: null,
        company: "Stratedia",
        location: "Remote (Mystic, Connecticut, USA)",
        dateRange: "Feb 2025 - Oct 2025",
        description:
            "Developed full-cycle application modernization using Laravel and React, boosting backend efficiency by 12% through optimized API design and use of AJAX principles.",
        techStack: [
            "React",
            "Laravel",
            "TypeScript",
            "Redux",
            "jQuery",
            "JavaScript",
            "Github",
            "Monday.com",
            "AI Integration",
            "Perplexity AI",
            "OpenAI",
            "API Integration",
            "Bootstrap",
            "Agile Scrum",
            "cPanel",
            "MVC Architecture",
        ],
    },
    {
        title: "Junior Software Engineer",
        status: null,
        company: "Exocoder, Inc.",
        location: "On-site (Kabankalan City, Philippines)",
        dateRange: "Jul 2024 - Jan 2025",
        description:
            "Architected and delivered responsive, high-performance user interfaces for a city-wide delivery application using React and Laravel.",
        techStack: [
            "React",
            "Laravel",
            "React Native",
            "MySQL",
            "SQLite",
            "Laravel Filament",
            "Docker",
            "Figma",
            "Express.js",
            "Slack",
            "GitHub",
            "Tailwind CSS",
            "Bootstrap",
            "Postman",
            "Agile Scrum",
        ],
    },
    {
        title: "QA Tester Intern",
        status: "Internship",
        company: "NOAH Business Applications",
        location: "Remote (Makati City, Philippines)",
        dateRange: "Mar 2024 - Jun 2024",
        description:
            "Conducted comprehensive QA testing across multiple platforms, enabling the early identification of defects and ensuring the seamless integration of new features. Executed detailed test plans and maintained strict documentation (test cases, results, and bug reports) using Google Sheets and Docs, ensuring 99% accuracy in tracking and reporting.",
        techStack: ["Google Sheets", "Google Docs", "Zoom"],
    },
];

export const SKILLS_FILTERS = [
  "All",
  "Frontend Development",
  "Backend Development",
  "Database",
  "Tools",
];

export const SKILLS_DATA = [
  // Frontend Development
  {
    name: "React",
    category: "Frontend Development",
    description: "Building interactive UIs with hooks and components",
    icon: (
      <img
        src="assets/svg/react-icon.svg"
        alt="React"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: "JavaScript",
    category: "Frontend Development",
    description: "ES6+ features and modern JavaScript patterns",
    icon: (
      <img
        src="public/svg/javascript-icon.svg"
        alt="JavaScript"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: "HTML5",
    category: "Frontend Development",
    description: "Semantic markup and modern styling techniques",
    icon: (
      <img
        src="public/svg/html-icon.svg"
        alt="HTML5"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Frontend Development",
    description: "Utility-first CSS framework for rapid styling",
    icon: (
      <img
        src="public/svg/tailwind-icon.svg"
        alt="Tailwind CSS"
        className="w-10 h-10 object-contain"
      />
    ),
  },

  // Backend Development
  {
    name: "Laravel",
    category: "Backend Development",
    description: "Full-stack PHP framework with elegant syntax",
    icon: (
      <img
        src="public/svg/laravel-icon.svg"
        alt="Laravel"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: "Node.js",
    category: "Backend Development",
    description: "JavaScript runtime for server-side development",
    icon: (
      <img
        src="public/svg/nodejs-icon.svg"
        alt="Node.js"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: "Express.js",
    category: "Backend Development",
    description: "Minimal and flexible Node.js web framework",
    icon: (
      <img
        src="public/svg/express-icon.svg"
        alt="Express.js"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: "RESTful APIs",
    category: "Backend Development",
    description: "Building scalable and maintainable API services",
    icon: (
      <img
        src="public/svg/restful-api-icon.svg"
        alt="RESTful APIs"
        className="w-10 h-10 object-contain"
      />
    ),
  },

  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Powerful open-source relational database system",
    icon: (
      <img
        src="public/svg/postgresql-icon.svg"
        alt="PostgreSQL"
        className="w-10 h-10 object-contain"
      />
    ),
  },

  // Tools
  {
    name: "GitHub",
    category: "Tools",
    description: "Version control and collaborative development",
    icon: (
      <img
        src="public/svg/github-icon.svg"
        alt="GitHub"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: "Docker",
    category: "Tools",
    description: "Containerization for consistent deployments",
    icon: (
      <img
        src="public/svg/docker-icon.svg"
        alt="Docker"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: "VS Code",
    category: "Tools",
    description: "Lightweight and powerful code editor",
    icon: (
      <img
        src="public/svg/vscode-icon.svg"
        alt="VS Code"
        className="w-10 h-10 object-contain"
      />
    ),
  },
];

export const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", icon: "Github", href: "https://github.com/klaivehub" },
  {
    label: "LinkedIn",
    icon: "LinkedIn",
    href: "https://linkedin.com/in/chrisjohnlaxa",
  },
  {
    icon: "Facebook",
    href: "https://www.facebook.com/kaiong35/",
    label: "Facebook",
  },
];

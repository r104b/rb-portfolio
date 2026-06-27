import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";

function CIcon({ className }: { className?: string }) {
  return (
    <img
      src="/Screenshot 2026-06-26 105811.png"
      alt="C"
      className={className}
    />
  );
}

function JavaScriptIcon({ className }: { className?: string }) {
  return (
    <img
      src="/Screenshot 2026-06-26 105730.png"
      alt="JavaScript"
      className={className}
    />
  );
}

export const DATA = {
  name: "Rhea Braich - Portfolio",
  initials: "RB",
  url: "https://rheabraich.io",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Software Engineering student, current BA Intern @ BMO. Interested in Full-Stack Development.",
  summary:
    "I love building, designing, and making random personal projects. My interests lie in full‑stack web/app development and exploring cloud engineering. ",
  avatarUrl: "/IMG_3416.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
    { name: "C", icon: CIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "rh.braich@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/r104b",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rhea-braich06/",
        icon: Icons.linkedin,

        navbar: true,

      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bank of Montreal",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Business Analyst Intern",
      logoUrl: "/Screenshot 2026-06-26 105906.png",
      start: "May 2026",
      end: "Current",
      description:
        "Created onboarding and process documentation in Confluence used across multiple T&O teams supporting Amazon Connect applications. Supported an AI call intelligence project by preparing HLRD documentation and organizing data from SharePoint, Power BI, and Confluence. Collaborated with QA and development teams to streamline testing workflows. Worked with AI-assisted development tools, including Claude Opus and GitHub Copilot agents, to analyze error logs. Supported Amazon Connect POC workflows by creating calls, processing call data through AWS Bedrock and feeding results into Power BI to produce and review analytics.",
    },
    {
      company: "TMUWave",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Software Lead",
      logoUrl: "/Screenshot 2026-06-26 111000.png",
      start: "Jan 2026",
      end: "Current",
      description:
        "Lead AUV software development using Raspberry Pi, Pixhawk 6X, and Python. Manage GitHub repositories, pull requests, branching, and documentation across a 6-member team. Develop a Docker-based simulation environment that uses QGroundControl, ArduSub, MAVLink, and PyMAVLink. Prototype PWM motor control, telemetry systems, and Pixhawk-Raspberry Pi communication for operations.",
    },
    {
      company: "TMURBC",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Corporate Relations Associate",
      logoUrl: "/Screenshot 2026-06-26 121953.png",
      start: "Aug 2025",
      end: "Current",
      description:
        "Managed budgets, inventory, and external communications using Excel to support club operations. Successfully obtained sponsor relations with Red Bull, Yonex, 19 Feet, and the Ontario Badminton Association.",
    },
    {
      company: "Biomedical Engineering Society (BMES TMU)",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Director of Events",
      logoUrl: "/Screenshot 2026-06-26 121858.png",
      start: "Sept 2025",
      end: "Current",
      description:
        "Coordinate room booking, materials, and budgeting. Successfully assisted in the setup of a major bionics conference featuring guest speakers and over 80 attendees.",
    },
  ],
  volunteering: [
    {
      company: "TMU Eng Frosh",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Committee Member",
      logoUrl: "/tmuengfrosh.png",
      start: "May 2025",
      end: "Current",
      description:
        "Helped integrate new university engineering students to TMU through weeklong campus tours, activities, and networking.",
    },
    {
      company: "Nottinghill Family Wellness Centre",
      href: "",
      badges: [],
      location: "Oakville, ON",
      title: "Clinic Assistant",
      logoUrl: "/nottinghill.png",
      start: "Sept 2022",
      end: "June 2024",
      description:
        "Helped organize patient files and prepare rooms before and after appointments.",
    },
  ],
  education: [
    {
      school: "Toronto Metropolitan University",
      href: "https://www.torontomu.ca/",
      degree: "Software Engineering (Honors)",
      logoUrl: "/Screenshot 2026-06-26 111541.png",
      start: "2024",
      end: "2029",
    },
  ],
  projects: [
    {
      title: "Desktop Pocket Player",
      href: "https://github.com/r104b/desktop-pocket-player",
      dates: "",
      active: true,
      description:
        "Built an Adventure Time-themed desktop music widget that connects to Spotify to display the current song, artist, playback progress, playlist/song selection, and quick playback controls. Implemented Spotify login with PKCE, OAuth state validation, reusable React components, and a pixel-style desktop widget interface.",
      technologies: [
        "Tauri",
        "React",
        "TypeScript",
        "Rust",
        "Spotify Web API",
        "CSS",
        "pnpm",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/r104b/desktop-pocket-player",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pocketplayer.png",
      video: "",
    },
    {
      title: "LevelUp",
      href: "https://github.com/r104b/vc-hackathon-2026-LevelUp",
      dates: "",
      active: true,
      description:
        "Built a gamified career-planning platform that turns a user's resume or profile into 5-7 personalized career timelines, then converts a selected path into a level-based roadmap with milestones, skills, and progress goals. Developed the Python/FastAPI backend for resume parsing, AI-assisted roadmap generation, job-data research, and persistence with Supabase.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "OpenAI API",
        "Supabase",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/r104b/vc-hackathon-2026-LevelUp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/levelup.png",
      video: "",
    },
    {
      title: "Adaptive Campus Safety App",
      href: "https://github.com/r104b/Campus-Safety-App",
      dates: "",
      active: true,
      description:
        "Built an adaptive campus safety routing app that helps students find safer walking routes around urban campuses. The app accepts real start and destination inputs, generates walking routes, detects high-risk zones, reroutes around hazards, applies night-mode risk weighting, displays live alerts, and calculates a dynamic safety score.",
      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "React Leaflet",
        "Leaflet.js",
        "OpenStreetMap",
        "OSRM API",
        "Nominatim API",
        "CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/r104b/Campus-Safety-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/walksafe.png",
      video: "",
    },
    {
      title: "TMU Wave AUV Operations",
      href: "https://github.com/TMUWave-Operations/WAUV-Ops",
      dates: "Currently Developing",
      active: true,
      description:
        "Currently managing and developing the software side of TMU Wave's AUV operations repo in prep for the 2027 RoboSub competition in Florida. The project is still early-stage. It uses Docker, QGroundControl/PyMavLink/ROS2/ArduPilot SW stack, and integration plans for OpenCV, Raspberry Pi, and Pixhawk for sim and controls.",
      technologies: [
        "Docker",
        "OpenCV",
        "Raspberry Pi",
        "Pixhawk 6x",
        "Python",
        "AUV",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/TMUWave-Operations/WAUV-Ops",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wave.png",
      video: "",
    },

  ],
  hackathons: [
    {
      title: "MEC (Metropolitan Engineering Competition)",
      placement: "3rd Place",
      dates: "",
      location: "Toronto, ON",
      description:
        "Consulting engineering category. Created an autonomous, AI-powered solution for wastewater systems in urban cities like Toronto and rural Indigenous areas. The solution used decentralized water systems with AI installations and data collection connected to power consumption systems to save power. Placed 3rd out of 13 teams.",
      image: "",
      technologies: ["AI", "Data Collection", "Power Systems"],
      links: [],
    },
    {
      title: "AI VC Hackathon",
      platform: "Devpost",
      placement: "2nd Place",
      dates: "",
      location: "",
      description:
        "Built LevelUp, a gamified career-planning platform using React and Node.js that uses Generative AI to transform resumes into 5-7 personalized career timelines. Helped engineer Python backend logic with the Siray.ai API to analyze skills, identify gaps against job market data, and generate career roadmaps. Placed 2nd in the Career Development competition category and reduced AI token usage through prompt optimization.",
      image: "",
      technologies: ["Python", "React", "Node.js", "Generative AI"],
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/r104b/vc-hackathon-2026-LevelUp",
        },
      ],
    },
    {
      title: "Learn It Global Hackathon V2",
      platform: "Devpost",
      dates: "",
      location: "",
      description:
        "Built Walk Safe, a campus safety app inspired by improving nighttime safety for TMU students. The project rethinks navigation for urban campuses by prioritizing safer routes around poorly lit streets, construction zones, and higher-risk areas instead of optimizing only for speed. Built with JavaScript, HTML, CSS, and Leaflet.",
      image: "",
      technologies: ["JavaScript", "HTML", "CSS", "Leaflet"],
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/r104b/Campus-Safety-App",
        },
      ],
    },
    {
      title: "Women in Engineering Competition",
      placement: "2nd Place",
      dates: "",
      location: "Toronto, ON",
      description:
        "Participated in a case competition focused on improving on- and off-campus travel safety for students, especially after dark. Proposed TMUAssist, an app designed to generate the safest route to a student's destination using live updates and AI-assisted tracking. Placed 2nd.",
      image: "",
      technologies: ["AI", "Safety", "Live Updates"],
      links: [],
    },
    {
      title: "TMU BMES Case Competition",
      placement: "1st Place",
      dates: "",
      location: "Toronto, ON",
      description:
        "Participated in a Biomedical Engineering Society case competition and presented an innovative dressing designed to monitor and treat chronic wounds for diabetic and elderly patients. Placed 1st.",
      image: "",
      technologies: ["Biomedical", "Healthcare", "Product Design"],
      links: [],
    },
  ],
} as const;

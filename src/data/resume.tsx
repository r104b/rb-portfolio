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
    "Software Engineering student, current Tech Analyst Intern @ BMO. Interested in Full-Stack Development.",
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
      logoUrl: "/Screenshot 2026-06-26 105906.png",
      positions: [
        {
          title: "Technical Analyst Intern",
          start: "September 2026",
          end: "Present",
          description:
            "Support Solution Architecture governance meetings by facilitating discussions and tracking documentation and outcomes in Confluence and Jira. Manage solution architecture documentation, models, and objects within iServer, including license management and model promotions. Automate Jira and Outlook/Teams workflows to streamline cross-team communication, reducing manual updates by 80%.",
        },
        {
          title: "Business Analyst Intern",
          start: "May 2026",
          end: "Aug 2026",
          description:
            "Created onboarding and process documentation in Confluence for Technology & Operations (T&O) teams supporting Amazon Connect projects, covering AWS services, file organization, and data preparation for Power BI dashboards. Supported an AI call intelligence project by preparing DRS and HLRD documentation and organizing data across SharePoint, Power BI, and Confluence. Collaborated with QA and development teams to streamline testing workflows using GitHub Copilot agents to analyze error logs and support automated issue investigation. Also supported Amazon Connect prod workflows by creating test calls and feeding results into Power BI for call analytics.",
        },
      ],
    },
    {
      company: "BYTE",
      href: "",
      badges: [],
      location: "Toronto, ON",
      logoUrl: "/byte_logo.png",
      logoClassName: "bg-black",
      positions: [
        {
          title: "AI/ML Engineer",
          start: "October 2026",
          end: "Present",
          description: "",
        },
        {
          title: "Full-stack developer",
          start: "June 2026",
          end: "October 2026",
          description:
            "- Developed React, TypeScript, and Tailwind CSS features, including a scrolling sponsor marquee, client-side debug logging for user interactions, and fixes for UI interaction bugs for the company website.\n- Built cloud infrastructure for a containerized CTF platform on a DigitalOcean Ubuntu Droplet using Docker Compose, Caddy, CTFd, MariaDB, Redis, Python, DNS, and HTTPS to deploy and route cybersecurity challenges.",
        },
      ],
    },
    {
      company: "AWS Student Builder Group TMU",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Tech Team Member",
      logoUrl: "/aws-sbg.png",
      start: "August 2026",
      end: "Present",
      description:
        "Create and facilitate workshops and events for AWS learning. Collaborate with the AWS Student Builder Group organization to complete and teach AWS courses, tools, services, and how to build projects in the AWS builder center.",
    },
    {
      company: "TMUWave",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Software Lead",
      logoUrl: "/Screenshot 2026-06-26 111000.png",
      start: "Jan 2026",
      end: "Sept 2026",
      description:
        "Lead AUV software development using Raspberry Pi, Pixhawk 6X, and Python. Manage GitHub repositories, pull requests, branching, and documentation across a 6-member team. Develop a Docker-based simulation environment that uses QGroundControl, ArduSub, MAVLink, and PyMAVLink. Prototype PWM motor control, telemetry systems, and Pixhawk-Raspberry Pi communication for operations.",
    },
  ],
  volunteering: [
    {
      company: "TMURBC",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Corporate Relations Associate",
      logoUrl: "/Screenshot 2026-06-26 121953.png",
      start: "Aug 2025",
      end: "Present",
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
      end: "Sept 2026",
      description:
        "Coordinate room booking, materials, and budgeting. Successfully assisted in the setup of a major bionics conference featuring guest speakers and over 80 attendees.",
    },
    {
      company: "TMU Eng Frosh",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Committee Member",
      logoUrl: "/tmuengfrosh.png",
      start: "May 2025",
      end: "Present",
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
      title: "BYTE Website",
      href: "https://tmubyte.com/",
      dates: "",
      active: true,
      description:
        "Contributed as a frontend developer to the BYTE website using React, TypeScript, and Tailwind CSS. Implemented a scrolling marquee for sponsor logos, improved chatbot visibility, added event and error logging for UI interactions, and continuously debugged frontend issues. Also updated hero typography, section styling, slideshow controls, and mobile/desktop hover and touch effects.",
      technologies: ["TypeScript", "JavaScript", "CSS", "HTML"],
      links: [
        {
          type: "Website",
          href: "https://tmubyte.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/BYTE-TMU/BYTE_site",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/byte-website.png",
      video: "",
    },
    {
      title: "Cyber Summit CTF",
      href: "https://ctfd.tmubyte.com/",
      dates: "",
      active: true,
      description:
        "Built and deployed the infrastructure for a student-run cybersecurity CTF supporting 100+ participants. Set up a DigitalOcean Ubuntu server, containerized challenges with Docker Compose, routed traffic with Caddy, and hosted the competition through CTFd, MariaDB, and Redis. Configured DNS, HTTPS, IP-based testing restrictions, container resource limits, and direct-port services for reverse-engineering challenges.",
      technologies: [
        "DigitalOcean",
        "Ubuntu",
        "Docker Compose",
        "Caddy",
        "CTFd",
        "MariaDB",
        "Redis",
      ],
      links: [
        {
          type: "Website",
          href: "https://ctfd.tmubyte.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ctf.png",
      video: "",
    },
    {
      title: "Campus Safety App",
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
        "Built LevelUp, a gamified career-planning platform using React and Node.js that uses Generative AI to transform resumes into 5-7 personalized career timelines. Helped engineer Python backend logic with the Siray.ai API to analyze skills, identify gaps against job market data, and generate career roadmaps. Placed 2nd in the Career Development competition category.",
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
      technologies: ["AI", "Safety"],
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

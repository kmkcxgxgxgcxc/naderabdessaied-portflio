import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Nader Abdessaied",
  initials: "RF",
  url: "https://naderabdessaied-portflio.vercel.app",
  location: "Tunis, TN",
  locationLink: "https://www.google.com/maps/place/tunis",
  description:
    "Développeur Full-Stack ",
  summary:
    "Développeur full-stack titulaire d'un diplôme d'ingénieur logiciel et doté d'une expertise reconnue dans la création d'applications web hautes performances. Maîtrisant Python, ReactJS, je maitrise aussi  dans l'extraction de données avancées et les systèmes d'intégration sécurisés. Mon expérience couvre tout ce qui est JavaScript ou TypeScript, l'optimisation de bases de données et le déploiement évolutif à l'aide d'outils modernes. Passionné et rigoureux, je m'épanouis dans des environnements dynamiques et stimulants et m'engage à promouvoir l'innovation numérique.",
  avatarUrl: "/DSC_1271.jpg",
  skills: [
    "Python",
    "ReactJS",
    "NodeJS",
    "VueJS",
    "Java",
    "JEE",
    "Spring Boot",
    "MongoDB",
    "RESTful API",
    "NextJS",
    "NestJS",
    "MySQL", 
    "Angular",
    "JavaScript", 
    "Typescript", 
    "HTML5", 
    "CSS3", 
    "Bootstrap", 
    "Wordpress",
    "Php",
    "Git&GitHub", 
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "naderabdessaied8@gmail.com",
    tel: "+216 50 409 085",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nader2356",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nader-abdessaied-952bb9177/",
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
      company: "GPRO Consulting",
      href: "",
      badges: [],
      location: "On-site",
      title: "Développeur Full-Stack",
      logoUrl: "GPRO Consulting",
      start: "Juillet 2024",
      end: "En Cours",
    },

     {
      company: "Billcom Consulting",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Développeur  Java",
      logoUrl: "/Biilcom Consulting.jpg",
      start: "Juin 2024",
      end: "Mai 2023",
      
    },

    {
      company: "Devokt",
      href: "",
      badges: [],
      location: "On-site",
      title: " Développeur Full-Stack JS/TS",
      logoUrl: "/Devokt.png",
      start: "Avril 2023",
      end: "Juillet 2022",
    },

   

   
  ],


  education: [
    {
      school: "École Pluridisciplinaire de Sousse (EPI)",
      href: "https://www.episup.com/fr",
      degree: "Licence applique en développement web et multimédia",
      logoUrl: "/téléchargement.jpeg",
      start: "2019",
      end: "2022",
    },
    {
      school: "Institut Supérieur des Études Technologiques de Sousse (IsetSo)",
      href: "https://isetso.rnu.tn/",
      degree: "Ingénierie logicielle",
      logoUrl: "/1280px-Logo_EPI_Sousse.png",
      start: "2016",
      end: "2019",
    },

  ],



  projects: [

    {
      title: "site eskooly",
      href: "https://eskooly.com/",
      dates: "Novembre 2025 - Février 2026",
      active: true,
      description: "Nous avons conçu une solution robuste qui sert à gérer d'un système des établissements d'enseignement. Doté d'une interface de configuration basée sur Angular, d'une automatisation des tâches cron nocturnes.",    
      technologies: [
        "React",
        "Typescript",
        "Material UI",
        "Tailwind CSS",
        "React Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://eskooly.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "Captureeskooly.png",
      video:"",
    },

     {
      title: "site ecommerce",
      href: "https://www.leboncoin.fr/",
      dates: "Juillet 2025 - Octobre 2025",
      description:"",
      active: true,
      technologies: [
        "React",
        "Typescript",
        "Material UI",
        "Tailwind CSS",
        "React Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.leboncoin.fr/",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/Captureleboncoin.png",
      video:"",
    },

    {
      title: "site workly",
      href: "https://workly.io/en",
       description: "Nous avons conçu une solution robuste qui sert à gérer  les heures des employés dans la sociéte.",    
      dates: "Mars 2025 - Juin 2025",
      active: true,
      technologies: [
        "React",
        "Typescript",
        "Material UI",
        "Tailwind CSS",
        "React Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://workly.io/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/CaptureWorkly.png",
      video: "",
    },

     {
      title: "site de livraison de repas sous abonnement",
      href: "https://www.lyveat.com",
      dates: "Novembre 2024 - Février 2025",
      active: true,
      technologies: [
        "React",
        "Typescript",
        "Material UI",
        "Tailwind CSS",
        "React Redux",
      ],
      description:"",
      links: [
        {
          type: "Website",
          href: "https://www.lyveat.com",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/lyveatcapture.png",
      video:"",
    },

{
      title: "site ehs",
      href: "https://www.ehs.com",
      dates: "Juillet 2024 - Octobre 2024",
      active: true,
      description:"",
      technologies: [
      "React",
        "Typescript",
        "Material UI",
        "Tailwind CSS",
        "React Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.ehs.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Captureehs.png",
      video: "",
    },
    
    

  


    

  


    

    

    
    



    





   

    


  


  ],





  clubs: [

    {
      name: "ARSII  - EPI Sousse",
      description: "",
      logoUrl: "/ARSII.jpg",
      start: "2020",
      end: "2022",
      role: "Member",
      
    },

    {
      name: "Google Developer Student Clubs - ISSET Sousse",
      description: "",
      logoUrl: "/gdsc.png",
      start: "2017",
      end: "2018",
      role: "Member",
      
    },

  ],
} as const;


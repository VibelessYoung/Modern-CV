import anime from "@/assets/images/anime.webp";
import search from "@/assets/images/search.webp";
import twitter from "@/assets/images/twitter.webp";
import text from "@/assets/images/text.webp";
import job1 from "@/assets/images/job-1.webp";
import job2 from "@/assets/images/job-2.webp";
import ocr1 from "@/assets/images/ocr-1.webp";
import ocr2 from "@/assets/images/ocr-2.webp";
import anime1 from "@/assets/images/anime-1.webp";
import anime2 from "@/assets/images/anime-2.webp";
import anime3 from "@/assets/images/anime-3.webp";
import anime4 from "@/assets/images/anime-4.webp";
import anime5 from "@/assets/images/anime-5.webp";
import twitter1 from "@/assets/images/twitter-1.webp";
import twitter2 from "@/assets/images/twitter-2.webp";
import socialx from "@/assets/images/socialx.webp";
import socialxbanner from "@/assets/images/socialx-banner.webp";
import socialx1 from "@/assets/images/social-1.webp";
import socialx2 from "@/assets/images/social-2.webp";
import socialx3 from "@/assets/images/social-3.webp";
import socialx4 from "@/assets/images/social-4.webp";
import socialx5 from "@/assets/images/social-5.webp";
import resbanner from "@/assets/images/res-banner.webp";
import res1 from "@/assets/images/res1.webp";
import res2 from "@/assets/images/res2.webp";
import res3 from "@/assets/images/res3.webp";
import res4 from "@/assets/images/res4.webp";
import res5 from "@/assets/images/res5.webp";
import res6 from "@/assets/images/res6.webp";
import music from "@/assets/images/music.webp";
import maxilla1 from "@/assets/images/Maxilla-1.webp";
import maxilla2 from "@/assets/images/Maxilla-2.webp";
import blog1 from "@/assets/images/blog-1.webp";
import blog2 from "@/assets/images/blog-2.webp";
import blog from "@/assets/images/blog.webp";
import blog3 from "@/assets/images/blog-3.webp";
import blog4 from "@/assets/images/blog-4.webp";
import blog5 from "@/assets/images/blog-5.webp";
import blog6 from "@/assets/images/blog-6.webp";
import blog7 from "@/assets/images/blog-7.webp";
import arduino from "@/assets/images/arduino.webp";
import arduino1 from "@/assets/images/arduino-1.webp";
import arduino2 from "@/assets/images/arduino-2.webp";
import task from "@/assets/images/task.webp";
import task1 from "@/assets/images/task-1.webp";
import task2 from "@/assets/images/task-2.webp";
import task3 from "@/assets/images/task-3.webp";
import task4 from "@/assets/images/task-4.webp";
import task5 from "@/assets/images/task-5.webp";
import task6 from "@/assets/images/task-6.webp";
import task7 from "@/assets/images/task-7.webp";
import task8 from "@/assets/images/task-8.webp";
import movie from "@/assets/images/movie.webp";
import movie1 from "@/assets/images/movie-1.webp";
import movie2 from "@/assets/images/movie-2.webp";
import movie3 from "@/assets/images/movie-3.webp";
import movie4 from "@/assets/images/movie-4.webp";
import movie5 from "@/assets/images/movie-5.webp";
import movie6 from "@/assets/images/movie-6.webp";
import movie7 from "@/assets/images/movie-7.webp";
import movie8 from "@/assets/images/movie-8.webp";
import movie9 from "@/assets/images/movie-9.webp";
import map1 from "@/assets/images/map-1.webp";
import map2 from "@/assets/images/map-2.webp";
import map3 from "@/assets/images/map-3.webp";
import map from "@/assets/images/map.webp";
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  tags: string[];
  overview: string;
  technologies: string[];
  gallery: { url: string; alt: string }[];
  results: string;
}

export const projects: Project[] = [
  {
    id: "blog-website",
    title: "Blog Website",
    description: "Modern full-stack blog platform",
    image: blog,
    imageAlt: "Blog Website homepage",
    category: "web",
    tags: ["React", "Laravel", "Tailwind CSS"],
    overview:
      "A modern full-stack blogging platform featuring authentication, user registration, comment system, responsive design, and a clean user experience.",
    technologies: ["React", "Laravel", "Tailwind CSS"],
    gallery: [
      { url: blog1, alt: "Home page" },
      { url: blog2, alt: "Blog listing" },
      { url: blog3, alt: "Blog details" },
      { url: blog4, alt: "Authentication page" },
      { url: blog5, alt: "User dashboard" },
      { url: blog6, alt: "Comments section" },
      { url: blog7, alt: "Responsive layout" },
    ],
    results: "https://github.com/VibelessYoung/Blog-WebSite",
  },

  {
    id: "task-manager",
    title: "Task Manager",
    description: "Modern productivity web application",
    image: task,
    imageAlt: "Task Manager dashboard",
    category: "web",
    tags: ["Next.js", "React", "Tailwind CSS"],
    overview:
      "A productivity application featuring task management, Pomodoro timer, search, filtering, local storage, and a responsive user interface.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    gallery: [
      { url: task1, alt: "Dashboard" },
      { url: task2, alt: "Task list" },
      { url: task3, alt: "Search feature" },
      { url: task4, alt: "Pomodoro timer" },
      { url: task5, alt: "Task details" },
      { url: task6, alt: "Dark mode" },
      { url: task7, alt: "Responsive layout" },
      { url: task8, alt: "Settings" },
    ],
    results: "https://github.com/VibelessYoung/TaskManager",
  },

  {
    id: "movie-app",
    title: "Movie App",
    description: "Modern movie discovery platform",
    image: movie,
    imageAlt: "Movie App homepage",
    category: "web",
    tags: ["Next.js", "React", "Tailwind CSS"],
    overview:
      "A movie discovery platform where users can browse trending movies, search titles, explore details, and save their favorite movies.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    gallery: [
      { url: movie1, alt: "Home page" },
      { url: movie2, alt: "Movie listing" },
      { url: movie3, alt: "Movie details" },
      { url: movie4, alt: "Search page" },
      { url: movie5, alt: "Favorites" },
      { url: movie6, alt: "Categories" },
      { url: movie7, alt: "Responsive layout" },
      { url: movie8, alt: "Dark mode" },
      { url: movie9, alt: "Movie overview" },
    ],
    results: "https://github.com/VibelessYoung/Movie-App",
  },

  {
    id: "next-map",
    title: "Next Map",
    description: "Interactive mapping application",
    image: map,
    imageAlt: "Next Map homepage",
    category: "web",
    tags: ["Next.js", "React", "Tailwind CSS", "Leaflet"],
    overview:
      "An interactive mapping application with geolocation, place search, routing, reverse geocoding, and an intuitive modern interface.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Leaflet"],
    gallery: [
      { url: map1, alt: "Interactive map" },
      { url: map2, alt: "Location search" },
      { url: map3, alt: "Route navigation" },
    ],
    results: "https://github.com/VibelessYoung/Next-Map",
  },

  {
    id: "saturn-anime",
    title: "Saturn Anime",
    description: "Modern anime streaming interface",
    image: anime,
    imageAlt: "Saturn Anime homepage",
    category: "web",
    tags: ["React", "Tailwind CSS"],
    overview:
      "A modern anime platform where users can browse anime titles, search content, explore detailed information, and enjoy a responsive interface.",
    technologies: ["React", "Tailwind CSS"],
    gallery: [
      { url: anime1, alt: "Home page" },
      { url: anime2, alt: "Anime details" },
      { url: anime4, alt: "Search page" },
      { url: anime5, alt: "Responsive layout" },
    ],
    results: "https://github.com/VibelessYoung/Saturn-Anime",
  },

  {
    id: "job-remote",
    title: "Job Remote",
    description: "Remote job finder",
    image: search,
    imageAlt: "Job Remote homepage",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    overview:
      "A job search platform that allows users to browse remote opportunities using a public API with search and filtering capabilities.",
    technologies: ["HTML", "CSS", "JavaScript"],
    gallery: [
      { url: job1, alt: "Job listing" },
      { url: job2, alt: "Search results" },
    ],
    results: "https://github.com/VibelessYoung/JobsRemote",
  },

  {
    id: "twitter-clone",
    title: "Twitter Clone",
    description: "Twitter-inspired social feed",
    image: twitter,
    imageAlt: "Twitter Clone homepage",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    overview:
      "A Twitter-inspired interface where users can publish posts, browse timelines, and filter tweets in a responsive environment.",
    technologies: ["HTML", "CSS", "JavaScript"],
    gallery: [
      { url: twitter1, alt: "Timeline" },
      { url: twitter2, alt: "Tweet page" },
    ],
    results: "https://github.com/VibelessYoung/Twitter-Clone",
  },

  {
    id: "ocr-extractor",
    title: "OCR Extractor",
    description: "Image text recognition tool",
    image: text,
    imageAlt: "OCR Extractor homepage",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript", "Tesseract.js"],
    overview:
      "A lightweight OCR application capable of extracting text from images using Tesseract.js with a fast and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Tesseract.js"],
    gallery: [
      { url: ocr1, alt: "Upload image" },
      { url: ocr2, alt: "Extracted text" },
    ],
    results: "https://github.com/VibelessYoung/OCR-Extractor",
  },

  {
    id: "maxilla-music",
    title: "Maxilla Music",
    description: "Minimal music player",
    image: music,
    imageAlt: "Maxilla Music homepage",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    overview:
      "A lightweight music player featuring playlist management, playback controls, and a clean responsive interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    gallery: [
      { url: maxilla1, alt: "Music player" },
      { url: maxilla2, alt: "Playlist" },
    ],
    results: "https://github.com/VibelessYoung/Maxilla-Music",
  },

  {
    id: "socialx-ui",
    title: "SocialX UI",
    description: "Modern social media interface",
    image: socialxbanner,
    imageAlt: "SocialX UI homepage",
    category: "design",
    tags: ["React", "Tailwind CSS"],
    overview:
      "A modern social media user interface focused on clean layouts, responsive design, and reusable React components.",
    technologies: ["React", "Tailwind CSS"],
    gallery: [
      { url: socialx1, alt: "Feed page" },
      { url: socialx2, alt: "Profile page" },
      { url: socialx3, alt: "Messages" },
      { url: socialx4, alt: "Responsive layout" },
      { url: socialx5, alt: "Responsive layout" },
    ],
    results: "https://github.com/VibelessYoung/SocialX-UI",
  },

  {
    id: "resume-ui",
    title: "Resume UI",
    description: "Minimal portfolio interface",
    image: resbanner,
    imageAlt: "Resume UI homepage",
    category: "design",
    tags: [
      "Astro",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "ScrollReveal",
      "Iconify",
    ],
    overview:
      "A modern portfolio and resume interface built with Astro, focusing on performance, clean design, animations, and responsive layouts.",
    technologies: [
      "Astro",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "ScrollReveal",
      "Iconify",
    ],
    gallery: [
      { url: res1, alt: "Hero section" },
      { url: res2, alt: "About section" },
      { url: res3, alt: "Projects section" },
      { url: res4, alt: "Skills section" },
      { url: res5, alt: "Contact section" },
      { url: res6, alt: "Responsive layout" },
    ],
    results: "https://github.com/VibelessYoung/Minimal-CV",
  },

  {
    id: "arduino-web",
    title: "Arduino Web",
    description: "Arduino monitoring dashboard",
    image: arduino,
    imageAlt: "Arduino Web homepage",
    category: "arduino",
    tags: ["React", "Tailwind CSS", "Web Serial API", "Recharts"],
    overview:
      "A web dashboard that communicates with Arduino through the Web Serial API to visualize real-time LDR sensor data using interactive charts.",
    technologies: ["React", "Tailwind CSS", "Web Serial API", "Recharts"],
    gallery: [
      { url: arduino1, alt: "Real-time chart" },
      { url: arduino2, alt: "Arduino dashboard" },
    ],
    results: "https://github.com/VibelessYoung/Arduino-LDR",
  },
];

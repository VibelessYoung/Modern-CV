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
    id: "Blog-WebSite",
    title: "Blog-WebSite",
    description: "modern full-stack website",
    image: blog,
    imageAlt: "website banner",
    category: "web",
    tags: ["React", "Laravel", "TailwindCSS"],
    overview:
      "This is a modern full-stack project for registration, login and sending blog comments and....",
    technologies: ["React", "Laravel", "TailwindCSS"],
    gallery: [
      { url: blog1, alt: "website interface" },
      { url: blog2, alt: "website interface" },
      { url: blog3, alt: "website interface" },
      { url: blog4, alt: "website interface" },
      { url: blog5, alt: "website interface" },
      { url: blog6, alt: "website interface" },
      { url: blog7, alt: "website interface" },
    ],
    results: "https://github.com/VibelessYoung/Blog-WebSite",
  },
  {
    id: "Task-Manager",
    title: "Task-Manager",
    description: "modern task-manager web-app",
    image: task,
    imageAlt: "website banner",
    category: "web",
    tags: ["NextJS", "React", "Tailwind CSS"],
    overview: "this website have tasks section and search and focus and more",
    technologies: ["NextJS", "React", "Tailwind CSS"],
    gallery: [
      { url: task1, alt: "website interface" },
      { url: task2, alt: "website interface" },
      { url: task3, alt: "website interface" },
      { url: task4, alt: "website interface" },
      { url: task5, alt: "website interface" },
      { url: task6, alt: "website interface" },
      { url: task7, alt: "website interface" },
      { url: task8, alt: "website interface" },
    ],
    results: "https://github.com/VibelessYoung/TaskManager",
  },
  {
    id: "Movie-App",
    title: "Movie-App",
    description: "modern movie-app",
    image: movie,
    imageAlt: "website banner",
    category: "web",
    tags: ["NextJS", "React", "Tailwind CSS"],
    overview:
      "this website show movies and you can search and save your fav and more",
    technologies: ["NextJS", "React", "Tailwind CSS"],
    gallery: [
      { url: movie1, alt: "website interface" },
      { url: movie2, alt: "website interface" },
      { url: movie3, alt: "website interface" },
      { url: movie4, alt: "website interface" },
      { url: movie5, alt: "website interface" },
      { url: movie6, alt: "website interface" },
      { url: movie7, alt: "website interface" },
      { url: movie8, alt: "website interface" },
      { url: movie9, alt: "website interface" },
    ],
    results: "https://github.com/VibelessYoung/Movie-App",
  },
  {
    id: "saturn-anime",
    title: "Saturn-Anime",
    description: "modern anime website",
    image: anime,
    imageAlt: "website banner",
    category: "web",
    tags: ["React", "TailwindCSS"],
    overview:
      "This project modern anime website so you can see animes and their information and it support routing and more features.",
    technologies: ["React", "TailwindCSS"],
    gallery: [
      { url: anime1, alt: "website interface" },
      { url: anime2, alt: "website interface" },
      { url: anime4, alt: "website interface" },
      { url: anime5, alt: "website interface" },
    ],
    results: "https://github.com/VibelessYoung/Saturn-Anime",
  },
  {
    id: "job-remote",
    title: "JobRemote",
    description: "full-function web-page",
    image: search,
    imageAlt: "website banner",
    category: "web",
    tags: ["HTML/CSS", "JavaScript"],
    overview:
      "This is a simple website but have a feature for find jobs and its a good train for js and work with fake apis.",
    technologies: ["HTML/CSS", "JavaScript"],
    gallery: [
      { url: job1, alt: "website interface" },
      { url: job2, alt: "website interface" },
    ],
    results: "https://github.com/VibelessYoung/JobsRemote",
  },
  {
    id: "twitter-clone",
    title: "Twitter-Clone",
    description: "clone of twitter",
    image: twitter,
    imageAlt: "website banner",
    category: "web",
    tags: ["HTML/CSS", "JavaScript"],
    overview:
      "This is a simple clone of twitter and have a feature for read, post and filter twits.",
    technologies: ["HTML/CSS", "JavaScript"],
    gallery: [
      { url: twitter1, alt: "website interface" },
      { url: twitter2, alt: "website interface" },
    ],
    results: "https://github.com/VibelessYoung/Twitter-Clone",
  },
  {
    id: "ocr-extractor",
    title: "OCR-Extractor",
    description: "simple ocr-extractor",
    image: text,
    imageAlt: "website banner",
    category: "web",
    tags: ["HTML/CSS", "JavaScript", "Tesseract"],
    overview:
      "This is a simple ocr-extractor and it can extract texts from images in a second!",
    technologies: ["HTML/CSS", "JavaScript", "Tesseract"],
    gallery: [
      { url: ocr1, alt: "website interface" },
      { url: ocr2, alt: "website interface" },
    ],
    results: "https://github.com/VibelessYoung/OCR-Extractor",
  },
  {
    id: "MaxillaMusic",
    title: "Maxilla-Music",
    description: "minimal music-player",
    image: music,
    imageAlt: "website banner",
    category: "web",
    tags: ["HTML/CSS", "JavaScript"],
    overview: "This is a minimal web-music-player.",
    technologies: ["HTML/CSS", "JavaScript"],
    gallery: [
      { url: maxilla1, alt: "website interface" },
      { url: maxilla2, alt: "website interface" },
    ],
    results: "https://github.com/VibelessYoung/Maxilla-Music",
  },
  {
    id: "socilx-ui",
    title: "SocilaX-UI",
    description: "minimal web interface",
    image: socialxbanner,
    imageAlt: "website banner",
    category: "design",
    tags: ["React", "TailwindCSS"],
    overview: "This is a minimal web interface.",
    technologies: ["React", "TailwindCSS"],
    gallery: [
      { url: socialx1, alt: "website interface" },
      { url: socialx2, alt: "website interface" },
      { url: socialx3, alt: "website interface" },
      { url: socialx4, alt: "website interface" },
    ],
    results: "https://github.com/VibelessYoung/SocialX-UI",
  },
  {
    id: "resume-ui",
    title: "Resume-UI",
    description: "minimal web-resume",
    image: resbanner,
    imageAlt: "website banner",
    category: "design",
    tags: [
      "Astro",
      "TailwindCSS",
      "JavaScript",
      "HTML/CSS",
      "scrollreveal",
      "unpkg",
      "iconify",
    ],
    overview: "This is a minimal web-resume interface.",
    technologies: [
      "Astro",
      "TailwindCSS",
      "JavaScript",
      "HTML/CSS",
      "scrollreveal",
      "unpkg",
      "iconify",
    ],
    gallery: [
      { url: res1, alt: "website interface" },
      { url: res2, alt: "website interface" },
      { url: res3, alt: "website interface" },
      { url: res4, alt: "website interface" },
      { url: res5, alt: "website interface" },
      { url: res6, alt: "website interface" },
    ],
    results: "https://github.com/VibelessYoung/Minimal-CV",
  },
  {
    id: "arduino-web",
    title: "Arduino-Web",
    description: "A website that connects to Arduino hardware",
    image: arduino,
    imageAlt: "website banner",
    category: "arduino",
    tags: ["React", "TailwindCSS", "Web-Serial-API", "recharts"],
    overview:
      "This website connects to Arduino hardware and is used for the LDR project.",
    technologies: ["React", "TailwindCSS", "Web-Serial-API", "recharts"],
    gallery: [
      { url: arduino1, alt: "website interface" },
      { url: arduino2, alt: "website interface" },
    ],
    results: "https://github.com/VibelessYoung/Arduino-LDR",
  },
];

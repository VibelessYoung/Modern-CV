import anime from "@/assets/images/anime.jpg";
import search from "@/assets/images/search.jpg";
import twitter from "@/assets/images/twitter.jpg";
import text from "@/assets/images/text.jpg";
import job1 from "@/assets/images/job-1.png";
import job2 from "@/assets/images/job-2.png";
import ocr1 from "@/assets/images/ocr-1.png";
import ocr2 from "@/assets/images/ocr-2.png";
import anime1 from "@/assets/images/anime-1.png";
import anime2 from "@/assets/images/anime-2.png";
import anime3 from "@/assets/images/anime-3.png";
import anime4 from "@/assets/images/anime-4.png";
import anime5 from "@/assets/images/anime-5.png";
import twitter1 from "@/assets/images/twitter-1.png";
import twitter2 from "@/assets/images/twitter-2.png";
import socialx from "@/assets/images/socialx.png";
import socialxbanner from "@/assets/images/socialx-banner.png";
import socialx1 from "@/assets/images/social-1.png";
import socialx2 from "@/assets/images/social-2.png";
import socialx3 from "@/assets/images/social-3.png";
import socialx4 from "@/assets/images/social-4.png";
import resbanner from "@/assets/images/res-banner.jpg";
import res1 from "@/assets/images/res1.png";
import res2 from "@/assets/images/res2.png";
import res3 from "@/assets/images/res3.png";
import res4 from "@/assets/images/res4.png";
import res5 from "@/assets/images/res5.png";
import res6 from "@/assets/images/res6.png";
import music from "@/assets/images/music.jpg";
import maxilla1 from "@/assets/images/Maxilla-1.png";
import maxilla2 from "@/assets/images/Maxilla-2.png";
import blog1 from "@/assets/images/blog-1.png";
import blog2 from "@/assets/images/blog-2.png";
import blog from "@/assets/images/blog.jpg";
import blog3 from "@/assets/images/blog-3.png";
import blog4 from "@/assets/images/blog-4.png";
import blog5 from "@/assets/images/blog-5.png";
import blog6 from "@/assets/images/blog-6.png";
import blog7 from "@/assets/images/blog-7.png";
import arduino from "@/assets/images/arduino.jpg";
import arduino1 from "@/assets/images/arduino-1.png";
import arduino2 from "@/assets/images/arduino-2.png";
import task from "@/assets/images/task.jpg";
import task1 from "@/assets/images/task-1.png";
import task2 from "@/assets/images/task-2.png";
import task3 from "@/assets/images/task-3.png";
import task4 from "@/assets/images/task-4.png";
import task5 from "@/assets/images/task-5.png";
import task6 from "@/assets/images/task-6.png";
import task7 from "@/assets/images/task-7.png";
import task8 from "@/assets/images/task-8.png";
import movie from "@/assets/images/movie.jpg";
import movie1 from "@/assets/images/movie-1.png";
import movie2 from "@/assets/images/movie-2.png";
import movie3 from "@/assets/images/movie-3.png";
import movie4 from "@/assets/images/movie-4.png";
import movie5 from "@/assets/images/movie-5.png";
import movie6 from "@/assets/images/movie-6.png";
import movie7 from "@/assets/images/movie-7.png";
import movie8 from "@/assets/images/movie-8.png";
import movie9 from "@/assets/images/movie-9.png";
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
    results: "work successfully and get good feedbacks from others.",
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
    results: "work successfully and get good feedbacks from others.",
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
    results: "work successfully and get good feedbacks from others.",
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
      { url: anime2, alt: "website interface" },
      { url: anime4, alt: "website interface" },
      { url: anime5, alt: "website interface" },
    ],
    results: "work successfully and get good feedbacks from others",
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
    results:
      "i guess its not work correct on host but it works on my machine:)",
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
    results: "work successfully and get good feedbacks from others.",
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
    results: "work successfully and have perfect speed for extract",
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
    results:
      "have a scroll-animations and responsive elements and modern view and you can add your projects , your info and more...",
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
    results:
      "have a scroll-animations and responsive elements and modern view.",
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
    results:
      "have a scroll-animations and responsive elements and modern view and you can add your projects , your info and more...",
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
    results: "work successfully",
  },
];

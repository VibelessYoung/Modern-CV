import scarlet from "@/assets/images/scarlet.jpg";
import search from "@/assets/images/search.jpg";
import twitter from "@/assets/images/twitter.jpg";
import text from "@/assets/images/text.jpg";
import job1 from "@/assets/images/job-1.png";
import job2 from "@/assets/images/job-2.png";
import ocr1 from "@/assets/images/ocr-1.png";
import ocr2 from "@/assets/images/ocr-2.png";
import anime1 from "@/assets/images/anime-1.png";
import anime2 from "@/assets/images/anime-2.png";
import twitter1 from "@/assets/images/twitter-1.png";
import twitter2 from "@/assets/images/twitter-2.png";
import socialx from "@/assets/images/socialx.png";
import socialxbanner from "@/assets/images/socialx-banner.png";
import socialx1 from "@/assets/images/socialx.png";
import socialx2 from "@/assets/images/social-2.png";

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
    id: "saturn-anime",
    title: "Saturn-Anime",
    description:
      "modern anime website so you can see animes and their information.",
    image: scarlet,
    imageAlt: "website banner",
    category: "web",
    tags: ["React", "JavaScript", "Tailwind"],
    overview:
      "This project modern anime website so you can see animes and their information and it support routing and more features.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    gallery: [
      { url: anime1, alt: "website interface" },
      { url: anime2, alt: "website interface" },
    ],
    results: "work successfully and get good feedbacks from others.",
  },
  {
    id: "job-remote",
    title: "JobRemote",
    description: "simple website for find jobs.",
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
    description: "simple clone of twitter.",
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
    description: "simple ocr-extractor.",
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
    id: "socialx-ui",
    title: "SocilaX-UI",
    description: "modern web interface.",
    image: socialxbanner,
    imageAlt: "website banner",
    category: "design",
    tags: ["React", "TailwindCSS"],
    overview: "This is a modern web interface.",
    technologies: ["React", "TailwindCSS"],
    gallery: [
      { url: socialx1, alt: "website interface" },
      { url: socialx2, alt: "website interface" },
    ],
    results:
      "have a scroll-animations and responsive elements and modern view.",
  },
];

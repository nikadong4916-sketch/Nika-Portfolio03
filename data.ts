/**
 * 🎨 个人作品集数据配置文件
 * ---------------------------------------
 * 你可以在这里修改所有的文案和图片链接。
 */

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  gallery: string[];
  tags: string[];
  year: string;
}

export const personalInfo = {
  name: "Nika",
  role: "UXUI Designer",
  bio: "Crafting digital experiences at the intersection of human intuition and artificial intelligence. Specialized in minimal interfaces and immersive spatial design.",
  skills: ["设计创新", "AI工作流", "产品体验", "Builder", "Vibe Coding", "设计驱动"],
  profileImage: "https://i.imgur.com/D7xeahM.jpeg",
  social: {
    email: "525572505@qq.com",
    wechat: "Nikadiyiming",
    phone: "123-4567-8901",
    github: "github.com/alexsterling",
  }
};

export const projects: Project[] = [
  {
    id: "C端项目",
    title: "C端项目",
    shortDescription: "体验创新驱动",
    fullDescription: "设计师如何从0到1搭建完整的体验链路，通过设计驱动提升产品核心表现。",
    coverImage: "https://i.imgur.com/JskITyV.png",
    gallery: [
      "https://i.imgur.com/JskITyV.png",
      "https://i.imgur.com/JskITyV.png",
      "https://i.imgur.com/JskITyV.png"
    ],
    tags: ["设计驱动", "AI", "体验创新n"],
    year: "2025.01-2025.06"
  },
  {
    id: "视觉项目",
    title: "视觉项目",
    shortDescription: "AIGC体验提效",
    fullDescription: "AIGC在视觉运营项目中的提效应用",
    coverImage: "https://i.imgur.com/JskITyV.png",
    gallery: [
      "https://i.imgur.com/JskITyV.png",
      "https://i.imgur.com/JskITyV.png",
      "https://i.imgur.com/JskITyV.png",
      "https://i.imgur.com/JskITyV.png",
      "https://i.imgur.com/JskITyV.png"
    ],
    tags: ["Product Design", "AI", "System"],
    year: "2025.06-2025.12"
  },
  {
    id: "AI工作流",
    title: "AI工作流创新",
    shortDescription: "结合AI工具为设计提效",
    fullDescription: " AI工作在设计工作流程中的实战应用",
    coverImage: "https://i.imgur.com/JskITyV.png",
    gallery: [
      "https://i.imgur.com/JskITyV.png",
      "https://i.imgur.com/JskITyV.png",
      "https://i.imgur.com/JskITyV.png",
      "https://i.imgur.com/JskITyV.png"
    ],
    tags: ["Audio", "AI", "React"],
    year: "2026.01-2026.06"
  }
];

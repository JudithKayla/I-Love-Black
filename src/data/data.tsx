import {
  Award,
  Building,
  Github,
  Hourglass,
  Linkedin,
  Mail,
  MapPin,
  User2
} from "lucide-react";
import { ReactNode } from "react";

export const navlinks: { name: string; to: string }[] = [
  {
    name: "RESUME",
    to: "https://drive.google.com/file/d/1_R_7NvO517Q2s_WJ2OAo4Rams1poIuBp/view?usp=drive_link"
  },
  { name: "PORTFOLIO", to: "/portfolio" },
  { name: "CONTACT ME", to: "/contact" }
];

export const contactIcons: { element: React.ReactNode; link: string }[] = [
  { element: <Linkedin />, link: "https://www.linkedin.com/in/kayla-jc/" },
  {
    element: <Award />,
    link: "https://certificates.aipmm.com/3228916f-bd41-42c1-9ce0-9439f8d9318a#gs.0ylz8s"
  },
  { element: <Github />, link: "https://github.com/JudithKayla" }
];

export const projects: {
  name: string;
  description: string;
  image: string;
  link: string;
  job: { icon: ReactNode; detail: string }[];
}[] = [
  {
    name: "Work Bunny",
    description:
      "In leading the development of Work Bunny, I am overseeing an innovative software solution aimed at revolutionizing the job search process for job seekers. Work Bunny serves as a dynamic platform that connects job seekers, helping them share and receive valuable insights to enhance their job search experience.\n\nMy role encompasses overseeing the entire product lifecycle of Work Bunny. From conceptualization to market launch, I define and execute product strategies, ensuring alignment with user needs and market trends. Utilising agile methodologies, I facilitate seamless collaboration among cross-functional teams to drive efficient product development.\n\nMoreover, I prioritize communication and transparency, providing regular updates to stakeholders and ensuring that the product meets and exceeds expectations. I also oversee the implementation of thorough and rigorous testing and quality assurance measures.\n\nWork Bunny stands as a testament to my commitment to delivering innovative solutions that address real-world challenges. It embodies effective product management, cross-functional collaboration, and a dedication to solving real-world problems. ",
    image: "././workbunny.png",
    link: "https://workbunny.co",
    job: [
      {
        icon: <User2 size="18px" />,
        detail: "Product Manager"
      },
      {
        icon: <Building size="18px" />,
        detail: "Work Bunny"
      },
      {
        icon: <MapPin size="18px" />,
        detail: "Nottingham, United Kingdom"
      },
      {
        icon: <Hourglass size="18px" />,
        detail: "11/2023 - Present"
      }
    ]
  },
  {
    name: "SettleQuick",
    description:
      "As a seasoned Product Manager, I spearheaded the conception and management of SettleQuick, a cutting-edge web application designed to facilitate seamless migration for Nigerians aspiring to relocate to Canada. The platform extends its services to the UK in subsequent phases.\n\n Navigating the intricate journey of migration can be overwhelming, and SettleQuick addresses this challenge comprehensively. From the initial stages of inquiry, where individuals seek information about migration (supported by informative blog posts on the website), to the critical juncture of engaging verified vendors, SettleQuick establishes itself as a secure, protected, and trustworthy environment.\n\n My role encompassed the meticulous curation and management of the product life cycle. From the conceptualization phase through to the market launch, I defined and developed product requirements and specifications. This involved crafting user stories, setting milestones, and closely monitoring progress to ensure a successful market entry.\n\n In adopting an agile approach, I hosted essential Scrum events such as sprint planning, sprint reviews, retrospectives, estimation, and backlog grooming/management. This dynamic methodology allowed for adaptability and efficient decision-making throughout the development process. Furthermore, my responsibilities extended to the coordination of cross-functional teams, ensuring seamless collaboration for successful product delivery. This involved liaising with verified vendors offering migration-related services, conducting individual verification services like identity checks, account verification, criminal background checks, and credit/financial assessments — all conducted within Nigeria.\n\n In addition to these services, SettleQuick goes above and beyond by providing carefully vetted hosts for accommodation in the destination country and collaborating with trusted automobile agents who offer vehicles for new and verified immigrants in Canada and, subsequently, the UK.\n\n SettleQuick stands as a testament to my commitment to delivering innovative solutions that address real-world challenges. It represents a culmination of strategic planning, meticulous execution, and effective cross-functional collaboration, ultimately offering a holistic and secure migration experience for users. ",
    image: "././settlequick.png",
    link: "https://settlequick.ca",
    job: [
      {
        icon: <User2 size="18px" />,
        detail: "Product Manager"
      },
      {
        icon: <Building size="18px" />,
        detail: "Settle Quick"
      },
      {
        icon: <MapPin size="18px" />,
        detail: "Ontario, Canada"
      },
      {
        icon: <Hourglass size="18px" />,
        detail: "01/2023 - 11/2023"
      }
    ]
  },
  {
    name: "Startpoint Africa",
    description:
      "As the architect and overseer of Startpoint Africa, I proudly present a product born out of a commitment to curating reputable NGOs in Africa, mitigating the risk of fund loss, and providing a secure avenue for investors eager to support authentic African causes. Our platform acts as a vital link, connecting conscientious donors with credible, African-led organizations that are effecting positive change.\n\n In the realm of product management, I executed a comprehensive workflow for Startpoint Africa. This involved meticulous backlog prioritization and management, ensuring that our development efforts aligned with strategic objectives. The adoption of agile methodologies was paramount, as evidenced by the seamless execution of Scrum events — from Sprint Planning to Sprint Reviews, Retrospectives, and estimation.\n\n A key facet of my role was the orchestration of cross-functional teams comprising software developers and designers. This collaborative effort was instrumental in overseeing the entire software development life cycle. By fostering an environment of innovation and collaboration, we ensured the seamless integration of technology and design to bring Startpoint Africa to life.\n\n Communication and transparency were cornerstones of my approach. I maintained regular updates for clients, keeping them well-informed about project status. Periodic presentations to management highlighted project progress, ensuring alignment with strategic goals and timely product launches.\n\n To guarantee the robustness and reliability of the product, I spearheaded rigorous testing protocols. Load, stress, stability, and reliability testing were conducted assiduously to uphold predefined standards for code style, software functionality, and user experience. This commitment to quality assurance ensures that Startpoint Africa not only meets but exceeds expectations.\n\n In essence, Startpoint Africa epitomizes my dedication to leveraging technology for social impact. It stands as a testament to effective product management, cross-functional collaboration, and unwavering commitment to delivering a solution that addresses the unique challenges faced by NGOs and investors in the African landscape. ",
    image: "././startpoint.png",
    link: "https://startpointafrica.org/",
    job: [
      {
        icon: <User2 size="18px" />,
        detail: "Junior Product Manager"
      },
      {
        icon: <Building size="18px" />,
        detail: "Check DC"
      },
      {
        icon: <MapPin size="18px" />,
        detail: "Lagos, Nigeria"
      },
      {
        icon: <Hourglass size="18px" />,
        detail: "02/2023 – 10/2023"
      }
    ]
  },
  {
    name: "Retna",
    description:
      "As a collaborative force alongside a senior product manager, I played a pivotal role in crafting Retna, a dynamic web platform that elevates the portrayal of Africa through captivating Mockups and Stock photos. With a focus on showcasing the continent's beauty, Retna not only serves as a repository for striking visuals but also encourages African photographers to contribute their unique perspectives. The platform is designed not only for users to view and download these images but also to recognize and reward photographers with both acclaim and royalties for the frequent use of their submissions.\n\n My role in executing the product management workflow for Retna was multifaceted. I meticulously managed backlog prioritization, ensuring alignment with strategic objectives. The adoption of agile methodologies was evident in the seamless execution of Scrum events, including Sprint Planning, Sprint Reviews, Retrospectives, and estimation.\n\n Overseeing cross-functional teams of software developers and designers, I played a key role in steering the software development life cycle. By fostering collaboration and innovation, we ensured the seamless integration of technology and design to bring Retna to life.\n\n Communication and transparency were paramount throughout the project. Regular updates kept clients well-informed about project status, with periodic presentations to management highlighting progress and ensuring products were launched on schedule.\n\n In my commitment to delivering a robust and reliable product, I spearheaded comprehensive testing protocols. Load, stress, stability, and reliability testing were conducted rigorously to uphold predefined standards for code style, software functionality, and user experience. This dedication to quality assurance ensures that Retna not only meets but exceeds expectations.\n\n Retna is not just a platform; it is a testament to my dedication to leveraging technology to celebrate and promote the richness of Africa's visual narrative. It stands as a showcase of effective product management, cross-functional collaboration, and a commitment to delivering a solution that not only meets but surpasses the expectations of both users and contributors. ",
    image: "././retna.png",
    link: "https://retna.io",
    job: [
      {
        icon: <User2 size="18px" />,
        detail: "Junior Product Manager"
      },
      {
        icon: <Building size="18px" />,
        detail: "Check DC"
      },
      {
        icon: <MapPin size="18px" />,
        detail: "Lagos, Nigeria"
      },
      {
        icon: <Hourglass size="18px" />,
        detail: "02/2023 – 10/2023"
      }
    ]
  }
];

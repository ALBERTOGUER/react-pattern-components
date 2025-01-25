import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Alberto",
  lastName: "Pérez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Sofware Developer",
  avatar: "/images/alberto.jpeg",
  location: "America/Mexico_City", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ALBERTOGUER",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alberto-jorge-perez-2a9614180/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Front end Developer</>,
  subline: (
    <>
      I'm Alberto, a Front end developer at <InlineCode>NTT Data</InlineCode>, where I develop
      <br /> user interfaces. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Alberto is a software developer with extensive experience in front-end  and back-end development. He is passionate about tackling new challenges, coding innovative solutions, and continously expanding his knowledge of software development. His work focuses on crafting digital interfaces, building interactive experiences, and seamlessly blending design with technology
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "NTT Data",
        timeframe: "2024 - Present",
        role: "Digital Engineering Lead Engineer",
        achievements: [
          <>
            Worked for clients like SIE.
            <ul>
              <li>
                Contributed to the refactoring of the Dockerfile and DockerCompose configuration to resolve issues related to setting up the environment on Windows.
              </li>
              <li>
                Developed new functionalities from scratch using React
              </li>
              <li>
                Developed mockup´s usingFigma
              </li>
              <li>
                Developed API’s using GraphQl.
              </li>
            </ul>
          </>,

        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/sie.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Globant",
        timeframe: "2021 - 2023",
        role: "Web UI Developer",
        achievements: [
          <>
            Worked for clients like BHD.
            <ul>
              <li>
                Contributed to the development of the system design in Storybook, where the components were published to a private npm design library, allowing them to be easily consumed across our projects.
              </li>
              <li>
                Participated in the development of all the functionality for
                sign in to the mobile app using features like Face ID and
                Touch ID for React Native.
              </li>
              <li>
                Observed and optimized the pipeline after each
                development iteration, ensuring smooth integration and
                deployment processes (CI & CD).

              </li>
            </ul>
          </>,
          <>
            Blackboard
            <ul>
              <li>
                Conducted performance profiling using Chrome DevTools to analyze rendering, painting and scripting times. Ensuring optimized performance by testing fixes for recently resolved bugs.
              </li>
              <li>
                Developed new functionalities from scratch using React
              </li>
              <li>
                Developed mockup´s usingFigma
              </li>
              <li>
                Developed API’s using GraphQl.
              </li>
            </ul>
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universidad Politécnica de Aguascalientes",
        description: <>Studied mechatronics engineering.</>,
      },
      {
        name: "IEXETEC",
        description: <>Master of Engineering in Information Technology.(not completed)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

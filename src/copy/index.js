import theme from "theme";
const { githubIcon, linkedinIcon, codepenIcon } = theme.images;

export default {
  about:
    "I'm a software engineer currently working at Jigsaw XYZ. I've had a wide range of work experiences from designing wallpaper to copywriting for television to marketing. As a software engineer, I continually try to use my array of technical and creative skills to solve problems in more efficient ways and become a better overall developer.",
  social: [
    {
      icon: githubIcon,
      link: "https://github.com/warrend",
    },
    { icon: linkedinIcon, link: "https://codepen.io/danielwarren" },
    { icon: codepenIcon, link: "https://www.linkedin.com/in/warrendl" },
  ],

  projects: [
    {
      name: "Ninety-Nine Times",
      description:
        "An infographic application of my grandfather’s world travels. Built with React on the front end using local JSON travel data created from his old journals to populate graphics and CSS. Implemented layout with CSS grid.",
      github: "https://github.com/warrend/ninety-nine",
      demo: "https://warrend.github.io/ninety-nine/",
    },
    {
      name: "My Mom's Beatles",
      description:
        "A catalogue of my mom's Beatles newspaper clippings she collected in the 1960s.",
      github: "https://github.com/warrend/ninety-nine",
      demo: "https://warrend.github.io/ninety-nine/",
    },
  ],
  publications: [
    {
      name: "Painting with CSS",
      author: "Daniel Warren",
      publication: "LogRocket",
      link: "https://blog.logrocket.com/painting-with-css-644cd4e67fad/",
      date: "January 18, 2019",
    },
    {
      name: "A Tutorial on Creating Coding Tutorials",
      author: "Daniel Warren",
      publication: "LogRocket",
      link:
        "https://blog.logrocket.com/a-tutorial-on-creating-front-end-tutorials-2b13d8e94df9/",
      date: "April 17, 2018",
    },
    {
      name: "My Grandfather's Travel Logs and Other Repetitive Tasks",
      author: "Daniel Warren",
      publication: "A List Apart",
      link:
        "https://alistapart.com/article/my-grandfathers-travel-logs-and-other-repetitive-tasks/",
      date: "December 14, 2017",
    },
  ],
};

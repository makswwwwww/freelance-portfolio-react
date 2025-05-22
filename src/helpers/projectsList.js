import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";

import project05 from "./../img/projects/05.jpg";
import project05Big from "./../img/projects/05-big.jpg";

import project06 from "./../img/projects/06.jpg";
import project06Big from "./../img/projects/06-big.jpg";

const projects = [
  {
    title: 'Криптоплатформа',
    skills: 'React, Node.js, MongoDB',
    img: project01,
    imgBig: project01Big,
    gitHubLink: 'https://github.com',
    figmaLink: 'https://www.figma.com/proto/6Bwtt0t0pksoQgDMXtGzav/криптоплатформа?node-id=1-141&p=f&t=5CPCLbRA6i8CPPCZ-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2', // добавлена ссылка на Figma
  },
  {
    title: 'Сайт бойцовского клуба',
    img: project02,
    imgBig: project02Big,
    skills: 'React, PHP, MySql',
    gitHubLink: 'https://github.com',
    figmaLink: 'https://www.figma.com/proto/h5CIVkxm5zj6KujpQs7mPB/бойцовский-клуб?node-id=309-7&p=f&t=QXMhJ5I71JyVGQfw-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', // добавлена ссылка на Figma
  },
  {
    title: 'Метавселенная',
    img: project03,
    imgBig: project03Big,
    skills: 'Vue JS, Node.js, MongoDB',
    gitHubLink: 'https://github.com',
    figmaLink: 'https://www.figma.com/proto/CWkXzuHvzzsTNBSZjey9Yd/метавселенная?node-id=1-4&p=f&t=ZYPkJjn2HfPQg5HD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', // добавлена ссылка на Figma
  },
  {
    title: 'Сайт компании, занимающейся продажей и доставкой нерудных материалов',
    img: project04,
    imgBig: project04Big,
    skills: 'React Native',
    figmaLink: 'https://www.figma.com/proto/69ERwzA1paGGjpxsrSGyfm/нерудные-материалы?node-id=998-798&p=f&t=GgElc8df8SkRu44I-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', // добавлена ссылка на Figma
  },
  {
    title: 'Центр развития для детей',
    img: project05,
    imgBig: project05Big,
    skills: 'HTML, SCSS, JS',
    figmaLink: 'https://www.figma.com/proto/4mmR4xOSLVKRoT2E8kkLMV/центр-для-детей?node-id=4-3&p=f&t=PQXtCeTCImo6sbJO-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', // добавлена ссылка на Figma
  },
  {
    title: 'Сайт онлайн школы',
    img: project06,
    imgBig: project06Big,
    skills: 'React, PHP, MySql',
    figmaLink: 'https://www.figma.com/proto/oFVcWfWTba30sliHyxPf1y/онлайн-школа?node-id=177-1685&p=f&t=BmPuL2NEZisUT3Hp-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', // добавлена ссылка на Figma
  },
];

// Рендерим картинки с ссылками на Figma
const renderProjects = () => {
  return projects.map((project, index) => (
    <div key={index}>
      <h2>{project.title}</h2>
      <p>{project.skills}</p>
      <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
        <img src={project.img} alt={project.title} />
      </a>
    </div>
  ));
};


export {projects}
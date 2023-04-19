import { covers } from "../assets/project-covers/covers";
import { page_header } from "../types/PageHeader.type";
import { PortfolioProject } from "../types/PortfolioProject.type";


export const projects: PortfolioProject[] = [
    {
        id: 1,
        cover: {path: covers.markdown, alt: "Markdown Previewer Cover"},
        title: "Markdown Previewer",
        description: "useful tool for developers with cool UI",
        tags: [{title: "React"}, {title: "Markdown"} ],
        source: "https://github.com/saidafzalkh/markdown-previewer",
        view: "https://saidafzalkh.github.io/markdown-previewer/"
    },
    {
        id: 2,
        cover: {path: covers.tweet, alt: "Random Quote Machine Cover"},
        title: "Random Quote Machine",
        description: "random quotes which you can tweet",
        tags: [{title: "jQuery"}, {title: "Twitter"}, {title: "Bootstrap"}],
        source: "https://github.com/saidafzalkh/random-quote-machine",
        view: "https://saidafzalkh.github.io/random-quote-machine"
    },
    {
        id: 3,
        cover: {path: covers.pomodoro, alt: "Pomodoro App Cover"},
        title: "Pomodoro App",
        description: "Stay focused with Pomodoro technique",
        tags: [{title: "react"}, {title: "bootstrap"}],
        source: "https://github.com/saidafzalkh/pomodoro-app",
        view: "https://saidafzalkh.github.io/pomodoro-app/"
    },
    {
        id: 4,
        cover: {path: covers.website, alt: "Personal Website Cover"},
        title: "Portfolio Website",
        description: "You are here now",
        tags: [{title: "React"}, {title: "Sass"}, {title: "Typescript"}, {title: "React Router V6"}],
        source: "https://github.com/saidafzalkh/saidafzal.github.io",
    }
]
export const projects_header: page_header = {
    title: "Projects",
    description: "Here some of my works",
    count: projects.length
}
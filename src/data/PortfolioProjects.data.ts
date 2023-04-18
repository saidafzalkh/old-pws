import { covers } from "../assets/project-covers/covers";
import { PortfolioProject } from "../types/PortfolioProject.type";

export const projects: PortfolioProject[] = [
    {
        id: 1,
        cover: {path: covers.markdown, alt: "Markdown Previewer Cover"},
        title: "Markdown Previewer",
        description: "useful tool for developers with cool UI",
        tags: [{title: "react"}, {title: "markdown"}],
        source: "https://github.com/saidafzalkh/markdown-previewer",
        view: "https://saidafzalkh.github.io/markdown-previewer/"
    },
    {
        id: 2,
        cover: {path: covers.tweet, alt: "Random Quote Machine Cover"},
        title: "Random Quote Machine",
        description: "random quotes which you can tweet",
        tags: [{title: "jQuery"}, {title: "twitter"}],
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
    }
]
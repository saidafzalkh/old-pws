import { Github, Linkedin, Telegram } from "react-bootstrap-icons";
import Avatar from "../components/specific/Avatar";
import { ProfileType } from "../types/ProfileData.type";
import { links } from "./SocialLinks.data";

export const profile: ProfileType = {
    image: Avatar,
    name: {
        first_name: "Saidafzal",
        second_name: "Kholkhujaev"
    },
    tags: [{title: "Frontend Dev.", alt: "Frontend Developer"}, {title: "Mentor", alt: "Mentor"}],
    social_links: [
        {title: "Telegram", url: links.telegram, icon: Telegram, alt: "Telegram"}, 
        {title: "LinkedIn", url: links.linkedin, icon: Linkedin, alt: "Linkedin"},
        {title: "GitHub", url: links.github, icon: Github, alt: "Github"}
    ],
    location: {
        country: "Uzbekistan",
        city: "Fergana"
    },
}
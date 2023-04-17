import { FC } from "react"
import { InterLinkType } from "./Link.type"
import { Tags } from "./Tags.type"

export type ProfileType = {
    image: FC,
    name: {
        first_name: string,
        second_name: string,
        nickname?: string
    },
    tags: Tags,
    location: {
        country: "Uzbekistan" | string,
        city: "Fergana" | "Tashkent" | string
    }
    social_links: InterLinkType[]
}
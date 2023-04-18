import { TagType } from "./Tags.type"

export type PortfolioProject = {
    id: number,
    cover: {path: string, alt: string},
    title: string,
    description: string,
    tags: TagType[],
    view?: string,
    source: string
}
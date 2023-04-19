import { FC } from "react"

export type page_header = {
    title: string,
    description: string,
    count?: number
    icon?: {el: FC, alt: string}
}
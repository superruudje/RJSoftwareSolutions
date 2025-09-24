export interface Project {
    id: string
    title: string
    summary: string
    description: string
    hasSinglePage: boolean
    imageUrl: string
    spotlight?: boolean
    demo?: string
    tags?: string[]
}
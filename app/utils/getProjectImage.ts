export function getProjectImage(fileName: string): string {
    return `/images/projects/${fileName || 'default.png'}`
}
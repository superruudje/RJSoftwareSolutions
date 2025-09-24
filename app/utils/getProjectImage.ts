export function getProjectImage(fileName: string): string {
    try {
        return new URL(`../assets/images/projects/${fileName}`, import.meta.url).href
    } catch (e) {
        // fallback image if file is missing
        return new URL(`../assets/images/projects/default.png`, import.meta.url).href
    }
}
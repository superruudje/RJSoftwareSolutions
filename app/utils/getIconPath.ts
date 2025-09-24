export function getIconPath(fileName: string): string {
    try {
        // Try SVG first
        return new URL(`../assets/images/tech-icons/${fileName}.svg`, import.meta.url).href
    } catch (e) {
        // Fallback to PNG
        return new URL(`../assets/images/tech-icons/${fileName}.png`, import.meta.url).href
    }
}
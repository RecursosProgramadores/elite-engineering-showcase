/**
 * Utility for centralized asset management.
 * 
 * Assets are divided into two main categories:
 * 1. Public Assets: Located in the /public directory.
 * 2. Source Assets: Imported via Vite (processed at build time).
 * 
 * This utility primarily focuses on absolute paths used for 
 * images and videos to make them easily movable.
 */

/**
 * Base path for all assets. 
 * If you move your public/assets folder to public/media, 
 * change this to "/media".
 * 
 * Setting it to empty string means assets are relative to public root.
 */
export const ASSET_BASE = "assets";

/**
 * Prepends the base path to an asset route.
 * 
 * @param path The relative path to the asset (e.g., "assets/video.mp4")
 * @returns The fully qualified path for use in src attributes.
 */
export function getAssetPath(path: string | any): string {
    if (typeof path !== 'string') return path;

    // Skip external URLs and data URIs
    if (
        path.startsWith('http://') ||
        path.startsWith('https://') ||
        path.startsWith('//') ||
        path.startsWith('data:') ||
        path.startsWith('blob:')
    ) {
        return path;
    }

    // Normalize base path
    const base = ASSET_BASE.replace(/\/+$/, ""); // Remove trailing slashes

    // Normalize provided path (remove leading slash)
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;

    // Combine and ensure leading slash
    const combined = base ? `/${base}/${cleanPath}` : `/${cleanPath}`;

    return combined.replace(/\/+/g, '/'); // Final cleanup of double slashes
}

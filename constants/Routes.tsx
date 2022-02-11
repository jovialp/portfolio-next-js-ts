// Import
import { capitalizeFirstLetter } from "../utils/helper";

// Nav Drawer Width
export const drawerWidth = 240;

// Nav Routes
export const HOME = "home";
export const ABOUT = "about";
export const PROJECTS = "projects";
export const RESUME = "resume";

/**
 * Generate Nav Item Object
 * @param path 
 * 
 * @returns {object}
 */
const generateNavItem = (path: string) => {
    return {
        url: `/${path}`,
        label: capitalizeFirstLetter(path),
    }
};

/**
 * Returns Nav List
 * 
 * @returns {Array}
 */
export const getNavList = () => {
    const navList = [];

    // navList.push(generateNavItem(HOME));
    navList.push(generateNavItem(ABOUT));
    navList.push(generateNavItem(PROJECTS));
    navList.push(generateNavItem(RESUME));

    return navList;
}
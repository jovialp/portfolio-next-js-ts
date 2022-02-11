/**
 * Capitalize First Letter of a String
 * @param {string} str - A String
 * 
 * @returns {string}
*/
export const capitalizeFirstLetter = (str: string) => {
    const string = str.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
};
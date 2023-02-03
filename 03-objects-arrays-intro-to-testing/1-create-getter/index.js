/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const keys = path.split('.')

    return (object) => {
        const valueInObj = keys.reduce((acc, item) => (acc === undefined) ? acc : acc[item], object);
        return valueInObj
    }
}
/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const field = [...fields];
    const arr = Object.entries(obj);
    const arrAfterEnumeration = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === field[i]) {
            arrAfterEnumeration.push(arr[i])
        }
    }
    const newObj = Object.fromEntries(arrAfterEnumeration);
    return newObj;
};
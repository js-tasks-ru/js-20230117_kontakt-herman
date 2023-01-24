/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    const field = [...fields];
    const arr = Object.entries(obj);
    const arrAfterEnumeration = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] !== field[i]) {
            arrAfterEnumeration.push(arr[i])
        }
    }
    const newObj = Object.fromEntries(arrAfterEnumeration);
    return newObj;
};

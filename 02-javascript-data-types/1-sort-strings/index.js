/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const compare = (string1, string2) => string1.localeCompare(string2, ['ru', 'en'], { caseFirst: 'upper' })

    if (typeof param === 'undefined') {
        throw new Error('parameter does not match')
    }

    return [...arr].sort((a, b) => {
        if (param === 'asc') {
            return compare(a, b);
        }
        if (param === 'desc') {
            return compare(b, a)
        }
    })
}

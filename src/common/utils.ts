
// Converts object to query string
export function queryString(object: {}): string {
    return new URLSearchParams(object).toString();
}

export function isPostiveNumber(number: number) {
    return !isNaN(number) && +number > 0;
}
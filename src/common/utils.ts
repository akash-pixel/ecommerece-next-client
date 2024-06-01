
// Converts object to query string
export function queryString(object: {}): string {
    return new URLSearchParams(object).toString();
}
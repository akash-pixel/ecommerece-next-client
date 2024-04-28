export class WebRefService {

    public static get(key: string) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : {};
    }

    public static set(key: string, data: Object) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}
export class WebRefService {

    private static IsServer() {
        return typeof window === "undefined";
    }

    public static get(key: string) {

        if (this.IsServer()) {
            return;
        }

        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : {};
    }

    public static set(key: string, data: Object) {

        if (this.IsServer()) {
            return;
        }

        localStorage.setItem(key, JSON.stringify(data));
    }
}
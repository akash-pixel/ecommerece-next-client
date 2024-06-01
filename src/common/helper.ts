import { TOAST_TYPE } from "@/constant";
import toast from "react-hot-toast";
export const makeToast = (text: string, type: TOAST_TYPE = TOAST_TYPE.SUCCESS) => {

    switch (type) {

        case TOAST_TYPE.SUCCESS: {
            toast.success(text, {
                style: {
                    borderRadius: "4px",
                    background: "#5cb85c",
                    color: "#fff"
                },
            });
            break;
        }
        case TOAST_TYPE.ERROR: {
            toast.error(text, {
                style: {
                    borderRadius: "4px",
                    background: "#f00",
                    color: "#fff"
                },
            });
            break;
        }
        case TOAST_TYPE.LOADING: {
            toast.loading(text, {
                style: {
                    borderRadius: "4px",
                    background: "#333",
                    color: "#fff"
                },
            });
            break;
        }
        default: {

        }
    }
};
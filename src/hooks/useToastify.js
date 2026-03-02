import { toast } from "react-toastify";

export const useToastify = () => {
    const success = (message) => { toast.success(message); };
    return { success };
};
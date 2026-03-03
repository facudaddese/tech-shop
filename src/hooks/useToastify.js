import { toast } from "react-toastify";

export const useToastify = () => {
    const success = (message) => toast.success(message);
    const warning = (message) => toast.warning(message);
    return { success, warning };
};
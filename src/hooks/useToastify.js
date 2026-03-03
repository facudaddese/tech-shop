import { toast } from "react-toastify";

export const useToastify = () => {
    const success = (message) => toast.success(message);
    const warning = (message) => toast.warning(message);
    const error = (message) => toast.error(message);
    return { success, warning, error };
};
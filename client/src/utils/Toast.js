
import { toast } from 'react-toastify';

export const Toast = (message,mode='default') => {
  const toastOptions = {
    position: "top-left",
    autoClose: 5000,
    newestOnTop:false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  switch (mode) {
    case "error":
      toast.error(message, toastOptions);
      break;
    case "success":
      toast.success(message, toastOptions);
      break;
    case "warning":
      toast.success(message, toastOptions);
      break;
    case "info":
      toast.success(message, toastOptions);
      break;
  default:
    toast(message, toastOptions);
  }
};

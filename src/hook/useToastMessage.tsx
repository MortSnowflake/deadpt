import { useState } from "react";

function useToastMessage() {
  const [toastMessage, setToastMessage] = useState({
    bg: "",
    message: "",
    isLoading: false,
  });

  const handleToastMessage = (bg: string, message: string, isLoading: boolean, timeout: number) => {
    setToastMessage({
      bg,
      message,
      isLoading,
    });

    setTimeout(() => {
      setToastMessage({
        ...toastMessage,
        isLoading: false,
      });
    }, timeout);
  };

  return { toastMessage, handleToastMessage };
}
export default useToastMessage;

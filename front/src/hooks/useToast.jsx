import { useCallback, useState } from "react";

export function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = useCallback(
    ({ type = "success", title, message, duration = 3500 }) => {
      setToast({ id: Date.now(), type, title, message, duration });
    },
    []
  );

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  return { toast, showToast, hideToast };
}

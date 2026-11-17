import { useEffect } from "react";
import { CheckCircle2, Trash2, X } from "lucide-react";
import style from "./style.module.css";

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, toast.duration ?? 3500);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const ehExclusao = toast.type === "delete";
  const Icon = ehExclusao ? Trash2 : CheckCircle2;

  return (
    <div className={style.toastContainer}>
      <div
        className={`${style.toast} ${ehExclusao ? style.delete : style.success}`}
        role="status"
        aria-live="polite"
      >
        <span className={style.barra} aria-hidden="true" />

        <div className={style.icone}>
          <Icon size={20} />
        </div>

        <div className={style.texto}>
          <strong>{toast.title}</strong>
          {toast.message && <p>{toast.message}</p>}
        </div>

        <button
          type="button"
          className={style.fechar}
          onClick={onClose}
          aria-label="Fechar notificação"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

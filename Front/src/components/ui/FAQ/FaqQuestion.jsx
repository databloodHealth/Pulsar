import { X } from "lucide-react";
import style from "@/components/ui/FAQ/FAQCard.module.css";

export function FaqQuestion({ question, isActive = false, onToggle }) {
  return (
    <div className={style.questionHead}>
      <h2 className={style.question}>{question}</h2>
      <button
        type="button"
        className={style.colapse}
        onClick={() => onToggle?.()}
        style={{
          transform: isActive ? "rotate(-45deg)" : "",
          backgroundColor: isActive ? "var(--primary)" : "",
          color: isActive ? "var(--branco)" : "",
        }}
      >
        <X size={20}/>
      </button>
    </div>
  );
}
import { X } from "lucide-react";
import style from "@/components/ui/FAQ/FAQCard.module.css";

export function FaqQuestion({ question, isActive = false, onToggle }) {
  return (
    <div className={style.questionHead} onClick={() => onToggle?.()}>
      <h2 className={style.question}>{question}</h2>
      <button
        type="button"
        style={{
          transform: isActive ? "" : "rotate(-45deg)",
          backgroundColor: isActive ? "var(--primary)" : "transparent",
          color: isActive ?  "var(--branco)" : "var(--preto)",
          border: isActive ? "none": "none",
        }}
      >
        <X size={16}/>
      </button>
    </div>
  );
}
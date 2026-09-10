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
          backgroundColor: isActive ? "transparent" : "var(--primary)",
          color: isActive ?  "var(--preto)" : "var(--branco)",
          border: isActive ? "1px solid var(--cinza-500)": "none",
        }}
      >
        <X size={20}/>
      </button>
    </div>
  );
}
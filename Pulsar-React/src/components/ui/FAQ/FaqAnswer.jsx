import style from "@/components/ui/FAQ/FAQCard.module.css";

export function FaqAnswer({ answer, isActive = false }) {
  return (
    <div className={`${style.questionContent} ${isActive ? style.open : ""}`}>
      <div>
        <p>{answer}</p>
      </div>
    </div>
  );
}

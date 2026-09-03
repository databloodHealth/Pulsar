import { Children, cloneElement, isValidElement, useState } from "react";
import style from "@/components/ui/FAQ/FAQCard.module.css";

export function FaqRoot({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${style.questionCard} ${isOpen ? style.active : ""}`}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        return cloneElement(child, {
          isActive: isOpen,
          onToggle: toggle,
        });
      })}
    </div>
  );
}

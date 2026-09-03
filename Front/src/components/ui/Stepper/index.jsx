import React from 'react'
import styles from "./style.module.css";

const steps = [
  { id: 1, label: "Dados pessoais" },
  { id: 2, label: "Senha" },
];

export default function Stepper({ currentStep }) {
  return (
    <div className={styles.etapas}>
      {steps.map((step, index) => {
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;

        return (
          <React.Fragment key={step.id}>
            <div
              className={`${styles.etapa} ${isActive ? styles.active : ""} ${
                isCompleted ? styles.completed : ""
              }`}
            >
              <h1>{step.id}</h1>
              <h2>{step.label}</h2>
            </div>

            {/* Renderiza o traço separador entre as etapas, exceto na última */}
            {index < steps.length - 1 && (
              <div
                className={`${styles.traco} ${
                  isCompleted ? styles.tracoActive : ""
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
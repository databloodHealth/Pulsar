import React, { useState } from "react";
import styles from "@/styles/Auth/stepDados.module.css"
import HeaderAuth from "@/components/ui/HeaderAuth/index";
import Stepper from "@/components/ui/Stepper/index";

export default function StepDados({formData, setFormData, onNext}) {


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext()
  };

  return (
    <>

      <main className={styles.main}>
        <div className={styles.content}>

          {/* Card Principal */}
          <div className={styles.container}>
            <div className={styles.containerTitle}>
              <h1>Criar sua conta</h1>
              <h2>
                Comece sua jornada salvando vidas. Informe seus dados básicos para
                continuarmos.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className={styles.containerForm}>
              <div className={styles.campoForm}>
                <label htmlFor="nome">Nome completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  placeholder="Ex: João da Silva Santos"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.campoForm}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="nome@exemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.blocoForm}>
                <div className={styles.campoForm}>
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                    placeholder="Monte Alto-SP"
                    value={formData.cidade}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.campoForm}>
                  <label htmlFor="celular">Celular</label>
                  <input
                    type="tel"
                    id="celular"
                    name="celular"
                    required
                    placeholder="(00) 0000-0000"
                    value={formData.celular}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.blocoForm}>
                <div className={styles.campoForm}>
                  <label htmlFor="dataNascimento">Data de nascimento</label>
                  <input
                    type="date"
                    id="dataNascimento"
                    name="dataNascimento"
                    required
                    value={formData.dataNascimento}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.campoForm}>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    required
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.botForm}>
                <a href="/login">Já tenho conta</a>
                <button type="submit">Próximo</button>
              </div>
            </form>
          </div>

          {/* Rodapé / Informações legais */}
          <div className={styles.info}>
            <div className={styles.lgpd}>
              <p>Seus dados estão protegidos pela LGPD</p>
            </div>
            <div className={styles.termos}>
              <a href="/termos">Termos de uso</a>
              <a href="/privacidade">Privacidade</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
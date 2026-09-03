import { useState } from "react"
import Stepper from "@/components/ui/Stepper/index"
import HeaderAuth from "@/components/ui/HeaderAuth/index"
import StepDados from "./stepDados"
import StepSenha from "./stepSenha";

export default function Cadastro(){
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cidade: '',
        celular: '',
        dataNascimento: '',
        cpf: '',
        senha: '',
        verificarSenha: ''
    })

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 2));
    const backStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.senha ==! formData.verificarSenha){
            alert('As senhas não coincidem');
            return
        }
        console.log(formData)
    } 
    return (
        <>
        <HeaderAuth/>
        {currentStep === 1 && (
            <StepDados formData={formData} setFormData={setFormData} onNext={nextStep} />
        )}

        {currentStep === 2 && (
            <StepSenha formData={formData} setFormData={setFormData} onSubmit={handleSubmit} onPrev={backStep} />
        )}
        </>

        
    )
}
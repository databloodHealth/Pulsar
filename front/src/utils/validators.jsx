export function validateCPF(value){
    const cpf = value.replace(/\D/g, "");

    return /^\d{11}$/.test(cpf);
}

export function validatePhone(value){
    const phone = value.replace(/\D/g, "");
 
    return /^\d{10,11}$/.test(phone);
}

export function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateRequired(value) {
    return value.trim() !== '';
}
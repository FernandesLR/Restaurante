export default function usuarioValida(email, password, CPF, setErrors) {
    const errors = {};

    // Validação de email
    const emailValido = /@(gmail\.com|outlook\.com|hotmail\.com)$/.test(email);
    if (!emailValido) {
        errors.email = "O e-mail é inválido.";
    }

    // Validação de senha
    if (password.length < 8) {
        errors.password = "A senha deve ter pelo menos 8 caracteres.";
    }

    // Validação de CPF
    const cpfLimpo = CPF.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (!/^\d{11}$/.test(cpfLimpo) || !validaCPF(cpfLimpo)) {
        errors.CPF = "CPF inválido.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
}

// Função para validar CPF
function validaCPF(cpf) {
    let soma = 0;
    let resto;
    
    if (cpf === "00000000000") return false;

    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    
    return resto === parseInt(cpf.charAt(10));
}

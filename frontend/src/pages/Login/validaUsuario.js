export default function usuarioValida(email, senha, cpf, setErrors) {
  const errors = {};

  // Validação de email
  const emailValido = /@(gmail\.com|outlook\.com|hotmail\.com)$/.test(email);
  if (!emailValido) {
    errors.email = "O e-mail é inválido.";
  }

  // Validação de senha
  if (senha.length < 8) {
    errors.senha = "A senha deve ter pelo menos 8 caracteres.";
  }

  // Validação de CPF
  const cpfLimpo = cpf.replace(/\D/g, "");
  if (!/^\d{11}$/.test(cpfLimpo) || !validaCPF(cpfLimpo)) {
    errors.cpf = "CPF inválido.";
  }

  setErrors(errors);
  return Object.keys(errors).length === 0;
}

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

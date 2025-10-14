export function checkAdminPassword() {
  const btnVerRegistros = document.getElementById('btnVerRegistros');
  const senha = prompt("Digite a senha de administrador para acesso total:");
  console.log("Senha digitada:", senha);
  if (senha === "Evo@0101") {
    console.log("Senha correta, mostrando botão Ver Registros");
    btnVerRegistros.classList.remove("hidden");
  } else {
    console.log("Senha incorreta");
  }
}
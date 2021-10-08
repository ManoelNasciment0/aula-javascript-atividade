function validar_login() {
  var usuario = login.usuario.value;
  var password = login.password.value;

if (usuario == ""){
    alert("Usuário e/ou Senha estão inválidos.");
    return false;
  if (password == ""){
    alert("Usuário e/ou Senha estão inválidos.");
    return false;
  }
  } else{
    alert("Você será direcionado para nossa página principal.");
  }
}
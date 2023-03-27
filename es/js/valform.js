const submitBtn = document.getElementById('bidali');

const validate = (e) => {
  e.preventDefault();
  const izena = document.getElementById('izenaa');
  const abizena = document.getElementById('abizenaa');
  const email = document.getElementById('emaill');
  const mezua = document.getElementById('mezuaa');

  if (izena.value === "") {
    alert("Mesedez, idatzi zure izena.");
    izena.focus();
    return false;
  }
  if (abizena.value === "") {
    alert("Mesedez, idatzi zure abizena.");
    abizena.focus();
    return false;
  }
  if (!emailVálido(email.value)) {
    alert("Mesedez, idatzi baliozko mezu elektroniko bat");
    email.focus();
    return false;
  }

  if (mezua.value === "" ) {
    alert("Mesedez, idatzi zure mezua.");
    mezua.focus();
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', validate);

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
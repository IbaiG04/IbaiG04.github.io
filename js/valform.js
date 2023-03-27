const form = document.querySelector('#formularioa');

const validate = (e) => {
  e.preventDefault();
  const izena = document.getElementById('izenaa');
  const abizena = document.getElementById('abizenaa');
  const email = document.getElementById('emaill');
  const mezua = document.getElementById('mezuasartu');

  if (izena.value === "" || izena.value.length > 15) {
    alert("Mesedez, idatzi zure izena. (15 karaktere gehienez)");
    izena.focus();
    return false;
  }
  if (abizena.value === "" || abizena.value.length > 40) {
    alert("Mesedez, idatzi zure abizena. (40 karaktere gehienez)");
    abizena.focus();
    return false;
  }
  if (!emailValido(email.value)) {
    alert("Mesedez, idatzi baliozko mezu elektroniko bat");
    email.focus();
    return false;
  }

  if (mezua.value === "" || mezua.value.length > 500 || mezua.value.length < 5) {
    alert("Mesedez, idatzi zure mezua. (5 karaktere gutxienez)");
    mezua.focus();
    return false;
  }

  // Construct the URL with the form data
  const url = `/nireweb.php?izena=${izena.value}&abizena=${abizena.value}&email=${email.value}&mezua=${mezua.value}`;

  // Navigate to the URL using a GET request
  window.location = url;
};

form.addEventListener('submit', validate);

const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

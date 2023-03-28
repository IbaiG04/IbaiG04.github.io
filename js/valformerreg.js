const form = document.querySelector('#formularioa2');

const validate = (e) => {
  e.preventDefault();
  const izena = document.getElementById('inpuizena');
  const abizena = document.getElementById('inputabizena');
  const email = document.getElementById('inputemail');
  const pasahitza = document.getElementById('inputpasa');

  if (!izenaondo(izena.value)) {
    alert("Mesedez, idatzi zure izena. (15 karaktere gehienez)");
    izena.focus();
    return false;
  }
  if (!abizenaondo(abizena.value)) {
    alert("Mesedez, idatzi zure abizena. (40 karaktere gehienez)");
    abizena.focus();
    return false;
  }
  if (!emailValido(email.value)) {
    alert("Mesedez, idatzi baliozko mezu elektroniko bat");
    email.focus();
    return false;
  }

  if (!pasahitzaondo(pasahitza.value)) {
    alert("Mesedez, idatzi zure pasahitza. (5 karaktere gutxienez eta 20 karaktere gehienez)");
    pasahitza.focus();
    return false;
  }

  // Construct the URL with the form data
  const url = `/nireweb.php?izena=${izena.value}&abizena=${abizena.value}&email=${email.value}&pasahitza=${pasahitza.value}`;

  // Navigate to the URL using a GET request
  window.location = url;
};

form.addEventListener('submit', validate);

const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const izenaondo = izena => {
    return /^[a-zA-Z]{1,15}$/.test(izena);
};

const abizenaondo = abizena => {
    return /^[a-z-A-Z]{1,40}$/.test(abizena); 
};

const pasahitzaondo = pasahitza => {
    return /^[A-Za-z0-9]{5,40}$/.test(pasahitza);
};
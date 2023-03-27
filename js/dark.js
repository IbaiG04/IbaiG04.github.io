const darkModeCheckbox = document.querySelector('#darkModeCheckbox');
const elements = document.querySelectorAll(".dark_mode_class");

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var mode = getCookie("mode");
if (mode === "dark") {
    document.body.classList.add("dark-mode");
    elements.forEach(e => {
        e.classList.add("nav-dark-mode");
    })
    darkModeCheckbox.checked = true
} else {
    document.body.classList.remove("dark-mode");
    elements.forEach(e => {
        e.classList.remove("nav-dark-mode");
    })
    darkModeCheckbox.checked = false
}

function toggleDarkMode() {
    if (darkModeCheckbox.checked) {
        setCookie("mode", "dark", 365)
        document.body.classList.add('dark-mode');
        elements.forEach(e => {
            e.classList.add("nav-dark-mode");
        })
    } else {
        setCookie("mode", "light", 365)
        document.body.classList.remove('dark-mode');
        elements.forEach(e => {
            e.classList.remove("nav-dark-mode");
        })
    }
}

darkModeCheckbox.addEventListener('change', toggleDarkMode);
const lang_checkbox = document.querySelector('#lang-checkbox');

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

var mode = getCookie("lang");
if (mode === "es") {

    if (!document.location.pathname.includes("/es")) {
        document.location.pathname = '/es' + document.location.pathname;
    }
    lang_checkbox.checked = false;
} else {
    if (document.location.pathname.includes("/es")){
        document.location.pathname = document.location.pathname.substring(0, document.location.pathname.indexOf("/es"));
    }
    lang_checkbox.checked = true;
}
// alert("changed to spanish: " + document.location.href);


console.log("changed lang to " + (lang_checkbox.checked ? "eu" : "es"));
lang_checkbox.addEventListener('change', function(e) {

    if (lang_checkbox.checked){
        setCookie("lang", "eu", 365)
    }
    else {
        setCookie("lang", "es", 365)
    }

    console.log("changed lang to " + (lang_checkbox.checked ? "eu" : "es"));

     location.reload();
});
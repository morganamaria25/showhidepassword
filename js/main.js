var show = false;

function toggle() {
    if (show == true) {
        document.querySelector("#pass").type = "password";
        document.querySelector("#icon").className = "fa fa-eye";
        show = false;
    } else {
        document.querySelector("#pass").type = "text";
        document.querySelector("#icon").className = "fa fa-eye-slash";
        show = true;
    }
}

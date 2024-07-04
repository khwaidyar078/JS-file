
function displaymsg(msg, idname, colorname) {
    document.getElementById(idname).innerHTML = msg
    document.getElementById(idname).style.color = colorname

}

function fnamevalidate() {
    let input = document.getElementById('fname').value
    if (input == ' ') {
        displaymsg('first name is mandatory', 'fnameMsg', 'red')
        return false
    }
    else if (!input.match(/^[a-zA-Z]+$/)) {
        displaymsg('first name nust contain alphabets', 'fnameMsg', 'red')
        return false
    }
    
    else {
        displaymsg('first name is valid', 'fnameMsg', 'green')
        return true
    }
}
function lnamevalidate() {
    let input = document.getElementById('lname').value
    if (input == ' ') {
        displaymsg('Last name is mandatory', 'lnameMsg', 'red')
    }
    else if (!input.match(/^[a-zA-Z]+$/)) {
        displaymsg('Last name Must start with alphabets', 'lnameMsg', 'red')
        return false
    }

    else {
        displaymsg('Last name is valid', 'lnameMsg', 'green')
        return true
    }
}
function enamevalidate() {
    let input = document.getElementById('ename').value
    if (input == ' ') {
        displaymsg('email is mandatory', 'fnameMsg', 'red')
        return false
    }
    else if (!input.match(/^([a-zA-Z])[a-zA-Z0-9\.\_\-]+\@+([A-Za-z])+\.+([a-z])/)) {
        displaymsg('email must match the condition', 'enameMsg', 'red')
        return false
    }
    
    else {
        displaymsg('email is valid', 'enameMsg', 'green')
        return true
    }
}
function pnamevalidate() {
    let input = document.getElementById('pname').value
    if (input == ' ') {
        displaymsg('Password is mandatory', 'pnameMsg', 'red')
        return false
    }
    else if (!input.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/)) {
        displaymsg('Password must match the conditon', 'pnameMsg', 'red')
    }
    
    else {
        displaymsg('Password is valid', 'pnameMsg', 'green')
        return true
    }
}
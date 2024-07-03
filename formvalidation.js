
function displaymsg(msg, idname, colorname) {
    document.getElementById(idname).innerHTML = msg
    document.getElementById(idname).style.color = colorname

}

function fnamevalidate(){
    let input = document.getElementById('fname').value
    if (input == ' ') {
        displaymsg('first name is mandatory', 'fnameMsg', 'red')
    }
    else if (input.length < 3) {
        displaymsg('first name should be more than 3 characters', 'fnameMsg', 'red')
        return false
    }
    else {
        displaymsg('first name is valid', 'fnameMsg', 'green')
        return true
    }
}
function lnamevalidate(){
    let input = document.getElementById('lname').value
    if (input == ' ') {
        displaymsg('Last name is mandatory', 'lnameMsg', 'red')
    }
    else if (input.length < 3) {
        displaymsg('Last name should be more than 3 characters', 'lnameMsg', 'red')
        return false
    }
    else {
        displaymsg('Last name is valid', 'lnameMsg', 'green')
        return true
    }
}
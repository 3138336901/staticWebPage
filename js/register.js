
let btn = document.getElementById('registerbtn');
btn.onclick = function () {
    let email = document.getElementById('email').value;
    let useName = document.getElementById('useName').value;
    let myPassword = document.getElementById('myPassword').value;
    let myName = document.getElementById('myName').value;

    check.innerHTML = '';
    if (checkUseName()&&checkMyName()&&checkEmail()
    &&checkPassword()&&checkRePassword()
    &&sessionStorage.getItem(useName)==null) {
        myPassword = escape(myPassword);
        let user = new userman(useName, myPassword, myName, email);
        sessionStorage.setItem(useName, JSON.stringify(user));
        window.location.href = '../html/logon.html';
    }
}
function checkEmail() {
    let email = document.getElementById('email').value;
    let reg = /^[\w-]+@[\w-]+\.com$/;
    if (!reg.test(email)) {
        check.innerHTML = '× 请输入正确的邮箱';
        return false;
    } else {
        return true;
    }
}
function checkUseName() {
    let useName = document.getElementById('useName').value;
    let reg = /^\w{3,15}$/;
    if (!reg.test(useName)) {
        check.innerHTML = '× 用户名为3-15位的字母或数字';
        return false;
    } else {
        return true;
    }
}
function checkMyName() {
    let myName = document.getElementById('myName').value;
    let reg = /^([\u4e00-\u9fa5\w]{3,20})$/
    if (!reg.test(myName)) {
        check.innerHTML = '× 昵称为3-20位的中文，字母或数字';
        return false;
    } else {
        return true;
    }
}
function checkPassword() {
    let myPassword = document.getElementById('myPassword').value;
    let reg = /^([\u4e00-\u9fa5\w]{6,20})$/
    if (!reg.test(myPassword)) {
        check.innerHTML = '× 密码为6-20位的字母或数字';
        return false;
    } else {
        return true;
    }
}
function checkRePassword() {
    let rePassword = document.getElementById('rePassword').value;
    let myPassword = document.getElementById('myPassword').value;
    if (rePassword != myPassword) {
        check.innerHTML = '× 两次输入的密码不一致';
        return false;
    } else {
        return true;
    }
}
function userman(useName, myPassword, myName, email) {
    this.useName = useName;
    this.myPassword = myPassword;
    this.myName = myName;
    this.email = email;
    
}


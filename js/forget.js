let btn = document.getElementById('forgetbtn');
btn.onclick = function() {
    check.innerHTML = '';
    if(isEmpty()&&checkUseName()&&checkMyName()&&checkRePasswrod()) {
        let useName = document.getElementById('useName').value;
        let myName = document.getElementById('myName').value;
        let email = document.getElementById('email').value;
        let changePassword = document.getElementById('changePassword').value;
        changePassword = escape(changePassword);
        let user = new userman(useName, changePassword, myName, email);
        sessionStorage.removeItem(useName);
        sessionStorage.setItem(useName, JSON.stringify(user));
        window.location.href = '../html/logon.html'
    }
}
function checkUseName() {
    let useName = document.getElementById('useName').value;
    if (sessionStorage.getItem(useName) == null) {
        check.innerHTML = '× 账号不存在';
        return false;
    } else {
        return true;
    }
}
function isEmpty() {
    let useName = document.getElementById('useName').value;
    if (useName.length == 0) {
        check.innerHTML = '× 账号不能为空';
        return false;
    } else {
        return true;
    }
}
function checkMyName() {
    let myname = document.getElementById('myName').value;
    let user = takeOut();
    if(myname != user.myName) {
        check.innerHTML = '× 昵称错误'
        return false;
    } else{
        return true;
    }
}
function checkEmail() {
    let email = document.getElementById('email').value;
    let user = takeOut();
    if(email != user.email){
        check.innerHTML = '× 邮箱错误'
    }
}
function checkRePasswrod() {
    let rePassword = document.getElementById('rePassword').value;
    let changePassword = document.getElementById('changePassword').value;
    if (rePassword != changePassword) {
        check.innerHTML = '× 两次输入的密码不一致';
        return false;
    } else {
        return true;
    }
}
function takeOut() {
    let useName = document.getElementById('useName').value;
    let user = sessionStorage.getItem(useName);
    user = JSON.parse(user);
    return user;
}
function userman(useName, myPassword, myName, email, usedLogon) {
    this.useName = useName;
    this.myPassword = myPassword;
    this.myName = myName;
    this.email = email;
}
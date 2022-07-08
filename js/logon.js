let btnRegister = document.getElementById('logonbtn');
btnRegister.onclick = function() {
    if(checkUserName()&&checkPassword()) {
        sessionStorage.setItem('islogon', true);
        window.location.href = '../html/index.html'
    }
}
function checkUserName() {
    let useName = document.getElementById('useName').value;
    if(sessionStorage.getItem(useName)==null){
        check.innerHTML = '× 账号不存在';
        return false;
    } else {
        return true;
    }
}
function checkPassword() {
    let useName = document.getElementById('useName').value;
    let myPassword = document.getElementById('myPassword').value;
    let user = sessionStorage.getItem(useName);
    user = JSON.parse(user);
    trueWord = unescape(user.myPassword);
    if(trueWord != myPassword) {
        check.innerHTML = '× 密码错误';
        return false;
    } else {
        return true;
    }
}
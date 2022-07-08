if(sessionStorage.getItem('islogon')!='true') {
    window.location.href = '../html/logon.html';
    alert('您未登录\n已为您返回登录界面');
}
let exit = document.getElementById('exit');
exit.onclick = function() {
    sessionStorage.removeItem('islogon');
} 
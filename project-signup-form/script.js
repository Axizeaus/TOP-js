function validate(){
    let pw = document.getElementById('pw');
    let confirm_pw = document.getElementById('confirm-pw');
    if(pw.value === confirm_pw.value){
        return;
    } else {
        alert('password not same')
    }
}
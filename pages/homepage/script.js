var today = new Date();
var time = today.getHours();
console.log(time);
if(time >= 12 && time <=17){
    document.getElementById('greeting').innerText = "Good Afternoon";
}
else if(time <=12){
    document.getElementById('greeting').innerText = "Good Morning";
}
else{
    document.getElementById('greeting').innerText = "Good Evening";
}
function closePopup(){
    event.preventDefault();
    document.getElementById("login-signup-popup").style.display = 'none';
}
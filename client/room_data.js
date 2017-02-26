var correctRoom = global.localStorage.getItem("roomNum");
var pwd = global.localSorage.getItem("roomPwd");

var myRoom = document.getElementById("roomVerify").value;
var myPwd  = document.getElementById("pwdVerify").value;

function Verify () {    
            if ((myRoom == correctRoom) && (myPwd == pwd)) {
                return true;
            }
            else {
                alert("your room number and password do not match");
            }
}  
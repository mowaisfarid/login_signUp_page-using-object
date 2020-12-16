var usersData=[];
function signup(){
    var name=document.getElementById("userName").value;
    var email=document.getElementById('userEmail').value;
    var password=document.getElementById('userpassword').value;
    var gender=document.getElementById('gender').value;
    var nationality=document.getElementById('Nationality').value;

    var getUser= localStorage.getItem('currentusers');
    if(getUser==null){
        userDetails=[];

    }
    else{
        userDetails=JSON.parse(getUser)
    }

        userDetails.push({
            userName:name,
            userEmail:email,
            userPassword:password,
            userGender:gender,
         userNationality:nationality})


        localStorage.setItem('currentusers',JSON.stringify(userDetails));
        location.href = "index.html";

        return false;
    }

    function loginUser() {
        var uEmail = document.getElementById('userName').value;
        var uPassword = document.getElementById('userpassword').value;
        uEmail = uEmail.toLowerCase();
        var isFound = false;
        for (var i = 0; i < usersData.length; i++) {
            if (usersData[i].userEmail === uEmail) {
                isFound = i
                localStorage.setItem('cIndex', JSON.stringify(isFound))
                break;
            }
        }
        if (isFound === false) {
            alert("user not found")
        }
        else if (usersData[isFound].userPassword === uPassword) {
            alert("login")
            location.href = "dashboard.html";
        }
        else {
            alert("email or password is incorrect")
        }
        return false
    }
    function loginSuccess() {
        var cIndex = JSON.parse(localStorage.getItem("cIndex"));
        document.getElementById('userName').innerHTML = "Name: " + usersData[cIndex].userName;
        document.getElementById('email').innerHTML = "Natioality: " + usersData[cIndex].userNation;
        document.getElementById('userpassword').innerHTML = "Phone No: " + usersData[cIndex].userEmail;
        document.getElementById('gender').innerHTML = "Gender: " + usersData[cIndex].userGender;
    }
   
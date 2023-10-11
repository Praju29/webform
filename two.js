document.getElementById("serveyform").addEventListener("submit", function(event) {
    event.preventDefault();
var firstName = document.getElementById("fname").value;
var lastName = document.getElementById("lname").value;
var dob = document.getElementById("birthday").value;
var country = document.getElementById("country").value;
var gender = document.querySelectorAll('input[name="gender"]:checked');
var profession = document.getElementById("prof").value;
var email = document.getElementById("email").value;
var mobile = document.getElementById("number").value;

var genderValues = [];
for (var i = 0; i < gender.length; i++) {
  genderValues.push(gender[i].value);
}
var genderString = genderValues.join(", ");

document.getElementById("popupFirstName").textContent = firstName;
document.getElementById("popupLastName").textContent = lastName;
document.getElementById("popupDob").textContent = dob;
document.getElementById("popupCountry").textContent = country;
document.getElementById("popupGender").textContent = genderString;
document.getElementById("popupProfession").textContent = profession;
document.getElementById("popupEmail").textContent = email;
document.getElementById("popupMobile").textContent = mobile;
document.getElementById("popup").style.display = "block";
});

 document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("serveyform").reset();
  });

  document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("serveyform").reset();
  });
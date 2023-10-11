document.getElementById("serveyform").addEventListener("submit", function(event) {
  event.preventDefault();

  var firstName = document.getElementById("fname");
  var lastName = document.getElementById("lname");
  var dob = document.getElementById("birthday");
  var country = document.getElementById("country");
  var gender = document.querySelectorAll('input[name="gender"]:checked');
  var profession = document.getElementById("prof");
  var email = document.getElementById("email");
  var mobile = document.getElementById("number");

  var isValid = true;

  if (firstName.value.trim() === "") {
    firstName.style.borderColor = "red";
    isValid = false;
  } else {
    firstName.style.borderColor = "";
  }

  if (lastName.value.trim() === "") {
    lastName.style.borderColor = "red";
    isValid = false;
  } else {
    lastName.style.borderColor = "";
  }

  if (dob.value.trim() === "") {
    dob.style.borderColor = "red";
    isValid = false;
  } else {
    dob.style.borderColor = "";
  }

  if (country.value.trim() === "") {
    country.style.borderColor = "red";
    isValid = false;
  } else {
    country.style.borderColor = "";
  }

  if (profession.value.trim() === "") {
    profession.style.borderColor = "red";
    isValid = false;
  } else {
    profession.style.borderColor = "";
  }

  if (email.value.trim() === "") {
    email.style.borderColor = "red";
    isValid = false;
  } else {
    email.style.borderColor = "";
  }

  if (mobile.value.trim() === "") {
    mobile.style.borderColor = "red";
    isValid = false;
  } else {
    mobile.style.borderColor = "";
  }

  if (!isValid) {
    return;
  }

  var genderValues = [];
  for (var i = 0; i < gender.length; i++) {
    genderValues.push(gender[i].value);
  }
  var genderString = genderValues.join(", ");

  document.getElementById("popupFirstName").textContent = firstName.value;
  document.getElementById("popupLastName").textContent = lastName.value;
  document.getElementById("popupDob").textContent = dob.value;
  document.getElementById("popupCountry").textContent = country.value;
  document.getElementById("popupGender").textContent = genderString;
  document.getElementById("popupProfession").textContent = profession.value;
  document.getElementById("popupEmail").textContent = email.value;
  document.getElementById("popupMobile").textContent = mobile.value;
  
  var form = document.getElementById("serveyform");
  form.classList.add("blurred");
  
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
   var form = document.getElementById("serveyform");
   form.classList.remove("blurred");
  document.getElementById("popup").style.display = "none";
  document.getElementById("serveyform").reset();
});

document.getElementById("resetButton").addEventListener("click", function() {
  document.getElementById("serveyform").reset();
});

function show(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
let currentUser = null;

function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if (user === "" || pass === "") {
    document.getElementById("loginStatus").innerText = "Fill all fields";
    return;
  }

  if (user === "admin" && pass === "1234") {
    currentUser = { name: user, role: "admin", token: "jwt-token" };
    document.getElementById("loginStatus").innerText = "Login Success";
  } else {
    currentUser = { name: user, role: "user", token: "jwt-token" };
    document.getElementById("loginStatus").innerText = "Logged as user";
  }
}
function accessRoute() {
  if (currentUser && currentUser.token) {
    document.getElementById("routeStatus").innerText = "Access Granted";
  } else {
    document.getElementById("routeStatus").innerText = "Redirect to Login (401)";
  }
}
function adminPage() {
  if (currentUser && currentUser.role === "admin") {
    document.getElementById("roleStatus").innerText = "Welcome Admin";
  } else {
    document.getElementById("roleStatus").innerText = "Access Denied";
  }
}

function userPage() {
  if (currentUser) {
    document.getElementById("roleStatus").innerText = "Welcome User";
  } else {
    document.getElementById("roleStatus").innerText = "Login required";
  }
}
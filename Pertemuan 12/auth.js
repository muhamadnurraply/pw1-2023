function login(event) {
    event.preventDefault();

    let username = document.getElementById("Username").value;
    let password = document.getElementById("loginPassword").value;

    if (username === "nur-rafly" && password === "student-nf23") {
        alert("Login successful!");
       
    } else {
        document.getElementById("loginError").innerText = "Invalid username or password";
    }
}

function register(event) {
    event.preventDefault();

    let newUsername = document.getElementById("newUsername").value;
    let newPassword = document.getElementById("newPassword").value;

    alert("Registration successful!");
}

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function showRegisterForm() {
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}
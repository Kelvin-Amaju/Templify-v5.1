// Open off-canvas menu
document.getElementById('menu-btn').onclick = function() {
    document.getElementById('offcanvas-menu').classList.remove('hidden');
}

// Close off-canvas menu
document.getElementById('close-menu').onclick = function() {
    document.getElementById('offcanvas-menu').classList.add('hidden');
}



// Modal functionality
const signupModal = document.getElementById("signup-modal");
const loginModal = document.getElementById("login-modal");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn")
const closeSignup = document.getElementById("close-signup");
const closeLogin = document.getElementById("close-login");

// Open login modal
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Open login modal
signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

// Close modals
closeSignup.onclick = function() {
    signupModal.style.display = "none";
}
closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Handle signup form submission
$('#signup-form').on('submit', function(event) {
    event.preventDefault();
    // Handle signup logic here (e.g., send data to server)
    alert("Signup successful!");
    signupModal.style.display = "none"; // Close modal
});

// Handle login form submission
$('#login-form').on('submit', function(event) {
    event.preventDefault();
    // Handle login logic here (e.g., send data to server)
    alert("Login successful!");
    loginModal.style.display = "none"; // Close modal
});





// JavaScript for toggling the mobile menu

    document.getElementById('menu-btn').addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });
        
    document.getElementById('user-menu-button').addEventListener('click', function() {
        const userMenu = document.getElementById('user-menu');
        userMenu.classList.toggle('hidden');
    });



//Drawer

document.getElementById('open-drawer-btn').addEventListener('click', () => {
    document.getElementById('drawer').classList.remove('translate-y-full');
  });
  
  document.getElementById('close-drawer-btn').addEventListener('click', () => {
    document.getElementById('drawer').classList.add('translate-y-full');
  });
  
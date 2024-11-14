// Open off-canvas menu
document.getElementById('menu-btn').onclick = function() {
    document.getElementById('offcanvas-menu').classList.remove('hidden');
}

// Close off-canvas menu
document.getElementById('close-menu').onclick = function() {
    document.getElementById('offcanvas-menu').classList.add('hidden');
}



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
  
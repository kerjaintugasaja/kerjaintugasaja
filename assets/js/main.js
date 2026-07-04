// ================= HAMBURGER MENU (MOBILE) =================
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Tutup menu otomatis saat salah satu link diklik
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});
;(function () {
    'use strict';

    // ── Mobile Navigation ──────────────────────────────────
    function mobileNav() {
        const toggle = document.getElementById('navToggle');
        const links  = document.getElementById('navLinks');
        if (!toggle || !links) return;

        toggle.addEventListener('click', function () {
            links.classList.toggle('active');
            const open = links.classList.contains('active');
            toggle.setAttribute('aria-expanded', open);
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (!toggle.contains(e.target) && !links.contains(e.target)) {
                links.classList.remove('active');
            }
        });
    }

    // ── Smooth Scroll ──────────────────────────────────────
    function smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                e.preventDefault();
                const target = document.querySelector(href);
                if (!target) return;
                const navHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20,
                    behavior: 'smooth'
                });
            });
        });
    }

    // ── Navbar scroll shadow ───────────────────────────────
    function navbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        window.addEventListener('scroll', function () {
            navbar.style.boxShadow = window.pageYOffset > 40
                ? '0 1px 16px rgba(0, 0, 0, 0.07)'
                : 'none';
        }, { passive: true });
    }

    // ── Active nav link on scroll ──────────────────────────
    function activeNavHighlight() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        if (!sections.length || !navLinks.length) return;

        const navH = document.querySelector('.navbar').offsetHeight + 30;

        window.addEventListener('scroll', function () {
            let current = '';
            sections.forEach(section => {
                if (window.pageYOffset >= section.offsetTop - navH) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        }, { passive: true });
    }

    // ── Photo gallery lightbox ─────────────────────────────
    function initPhotoGallery() {
        document.querySelectorAll('.photo-item').forEach(item => {
            item.addEventListener('click', function () {
                const img = this.querySelector('img');
                if (img) window.open(img.src, '_blank');
            });
        });
    }

    // ── Footer year ────────────────────────────────────────
    function setCurrentYear() {
        const el = document.getElementById('current-year');
        if (el) el.textContent = new Date().getFullYear();
    }

    // ── Init ───────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', function () {
        mobileNav();
        smoothScroll();
        navbarScroll();
        activeNavHighlight();
        initPhotoGallery();
        setCurrentYear();
    });

})();

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

    // ── Scroll Indicator Fade ───────────────────────────────
    function scrollIndicatorFade() {
        var indicator = document.querySelector('.scroll-indicator');
        if (!indicator) return;
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                indicator.classList.add('faded');
            } else {
                indicator.classList.remove('faded');
            }
        }, { passive: true });
    }

    // ── Scroll-Triggered Animations ───────────────────────
    function scrollAnimations() {
        var elements = document.querySelectorAll('.animate-on-scroll');
        if (!elements.length || !('IntersectionObserver' in window)) {
            // Fallback: just show everything
            elements.forEach(function (el) { el.classList.add('visible'); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(function (el, i) {
            // Stagger siblings in grids
            var parent = el.parentElement;
            if (parent && (parent.classList.contains('featured-grid') ||
                           parent.classList.contains('publications-list') ||
                           parent.classList.contains('exp-timeline') ||
                           parent.classList.contains('photo-gallery'))) {
                var siblings = Array.prototype.slice.call(parent.querySelectorAll('.animate-on-scroll'));
                var idx = siblings.indexOf(el);
                el.style.transitionDelay = (idx * 0.08) + 's';
            }
            observer.observe(el);
        });
    }

    // ── Collapsible Publications ──────────────────────────
    function collapsiblePublications() {
        var list = document.querySelector('.publications-list');
        var toggle = document.querySelector('.pub-show-toggle');
        if (!list || !toggle) return;

        var items = list.querySelectorAll('.pub-item');
        var VISIBLE_COUNT = 8;
        var expanded = false;

        if (items.length <= VISIBLE_COUNT) {
            toggle.style.display = 'none';
            return;
        }

        // Hide items beyond the threshold
        function collapse() {
            for (var i = VISIBLE_COUNT; i < items.length; i++) {
                items[i].classList.add('pub-hidden');
            }
            toggle.textContent = 'Show all ' + items.length + ' publications';
            expanded = false;
        }

        function expand() {
            for (var i = VISIBLE_COUNT; i < items.length; i++) {
                items[i].classList.remove('pub-hidden');
                // Re-trigger animation
                items[i].classList.remove('visible');
                void items[i].offsetWidth; // force reflow
                items[i].style.transitionDelay = ((i - VISIBLE_COUNT) * 0.06) + 's';
                items[i].classList.add('visible');
            }
            toggle.textContent = 'Show less';
            expanded = true;
        }

        collapse();

        toggle.addEventListener('click', function () {
            if (expanded) {
                collapse();
                // Scroll back to publications header
                var header = document.querySelector('.publications-header');
                if (header) {
                    var navH = document.querySelector('.navbar').offsetHeight;
                    window.scrollTo({
                        top: header.getBoundingClientRect().top + window.pageYOffset - navH - 20,
                        behavior: 'smooth'
                    });
                }
            } else {
                expand();
            }
        });
    }

    // ── Init ───────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', function () {
        mobileNav();
        smoothScroll();
        navbarScroll();
        activeNavHighlight();
        initPhotoGallery();
        setCurrentYear();
        scrollIndicatorFade();
        scrollAnimations();
        collapsiblePublications();
    });

})();

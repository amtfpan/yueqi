/**
 * 粤启卫浴 - 企业励志主题网站
 * Main JavaScript
 */

(function() {
    'use strict';

    // ========================================
    // Create Floating Particles
    // ========================================
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            particle.style.width = (2 + Math.random() * 4) + 'px';
            particle.style.height = particle.style.width;
            particlesContainer.appendChild(particle);
        }
    }

    // ========================================
    // Counter Animation
    // ========================================
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 25);
    }

    // ========================================
    // Intersection Observer for Animations
    // ========================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counter animation
                    const counter = entry.target.querySelector('.stat-number');
                    if (counter && !counter.dataset.animated) {
                        counter.dataset.animated = true;
                        const target = parseInt(counter.dataset.target, 10);
                        animateCounter(counter, target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(function(el) {
            observer.observe(el);
        });
    }

    // ========================================
    // Smooth Scroll
    // ========================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // ========================================
    // Navigation Background on Scroll
    // ========================================
    function initNavScroll() {
        const nav = document.querySelector('.nav');
        if (!nav) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(26, 26, 46, 0.98)';
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                nav.style.background = 'rgba(26, 26, 46, 0.9)';
                nav.style.boxShadow = 'none';
            }
        });
    }

    // ========================================
    // Value Orbs Parallax Effect
    // ========================================
    function initParallax() {
        const orbs = document.querySelectorAll('.value-orb');
        if (orbs.length === 0) return;

        document.addEventListener('mousemove', function(e) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            orbs.forEach(function(orb, index) {
                const factor = (index + 1) * 0.5;
                orb.style.transform = 'translate(' + (x * factor) + 'px, ' + (y * factor) + 'px) scale(1)';
            });
        });
    }

    // ========================================
    // Emblem Rotation Speed on Hover
    // ========================================
    function initEmblemHover() {
        const arrowPoints = document.querySelector('.arrow-points');
        if (!arrowPoints) return;

        const emblemCore = document.querySelector('.emblem-core');
        if (!emblemCore) return;

        emblemCore.addEventListener('mouseenter', function() {
            arrowPoints.style.animationDuration = '10s';
        });

        emblemCore.addEventListener('mouseleave', function() {
            arrowPoints.style.animationDuration = '30s';
        });
    }

    // ========================================
    // Team Cards Hover Effect
    // ========================================
    function initTeamCardTilt() {
        const cards = document.querySelectorAll('.team-card');
        
        cards.forEach(function(card) {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = 'translateY(-10px) perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
            });

            card.addEventListener('mouseleave', function() {
                card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    // ========================================
    // Initialize All Functions
    // ========================================
    function init() {
        createParticles();
        initScrollAnimations();
        initSmoothScroll();
        initNavScroll();
        initParallax();
        initEmblemHover();
        initTeamCardTilt();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

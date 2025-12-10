/**
 * Miguel Bretón Barber Shop - JavaScript
 * Funcionalidad interactiva de la página web
 */

// =============================================
// Inicialización
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Lucide icons
    lucide.createIcons();
    
    // Inicializar todas las funcionalidades
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initContactForm();
    initActiveNavLinks();
});

// =============================================
// Navbar - Scroll Effect
// =============================================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Check on load
    handleScroll();
    
    // Check on scroll with throttle
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// =============================================
// Mobile Menu
// =============================================

function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');
    
    // Open menu
    navToggle.addEventListener('click', function() {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
    
    // Close menu
    function closeMenu() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }
    
    mobileClose.addEventListener('click', closeMenu);
    
    // Close on link click
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });
    
    // Close on background click
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            closeMenu();
        }
    });
}

// =============================================
// Smooth Scroll
// =============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =============================================
// Scroll Reveal Animations
// =============================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Add delay based on class
                const element = entry.target;
                const delay = getDelayFromClass(element);
                
                setTimeout(function() {
                    element.classList.add('active');
                }, delay);
                
                // Stop observing once revealed
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(function(element) {
        observer.observe(element);
    });
}

function getDelayFromClass(element) {
    if (element.classList.contains('delay-1')) return 100;
    if (element.classList.contains('delay-2')) return 200;
    if (element.classList.contains('delay-3')) return 300;
    if (element.classList.contains('delay-4')) return 400;
    if (element.classList.contains('delay-5')) return 500;
    if (element.classList.contains('delay-6')) return 600;
    return 0;
}

// =============================================
// Active Navigation Links
// =============================================

function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Throttled scroll listener
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveLink();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial check
    updateActiveLink();
}

// =============================================
// Contact Form
// =============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const nombre = formData.get('nombre');
        const telefono = formData.get('telefono');
        const mensaje = formData.get('mensaje') || 'Sin mensaje adicional';
        
        // Validate
        if (!nombre || !telefono) {
            showToast('Por favor completa los campos requeridos', 'error');
            return;
        }
        
        // Build WhatsApp message
        const whatsappMessage = encodeURIComponent(
            `¡Hola! Me gustaría reservar una cita.\n\n` +
            `*Nombre:* ${nombre}\n` +
            `*Teléfono:* ${telefono}\n` +
            `*Mensaje:* ${mensaje}`
        );
        
        // WhatsApp URL
        const whatsappURL = `https://wa.me/18495058045?text=${whatsappMessage}`;
        
        // Show success message
        showToast('¡Redirigiendo a WhatsApp!');
        
        // Open WhatsApp in new tab after short delay
        setTimeout(function() {
            window.open(whatsappURL, '_blank');
        }, 500);
        
        // Reset form
        form.reset();
    });
}

// =============================================
// Toast Notifications
// =============================================

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    // Update message
    toastMessage.textContent = message;
    
    // Update icon color based on type
    if (type === 'error') {
        toast.style.borderColor = 'hsl(0, 70%, 50%)';
        toast.style.color = 'hsl(0, 70%, 50%)';
    } else {
        toast.style.borderColor = 'hsl(142, 70%, 45%)';
        toast.style.color = 'hsl(142, 70%, 45%)';
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Re-initialize icons in toast
    lucide.createIcons();
    
    // Hide after 3 seconds
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}

// =============================================
// Utility Functions
// =============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    };
}

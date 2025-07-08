document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scroll with Dynamic Progress ---
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Header Scroll Effect with Parallax ---
    const header = document.querySelector('header');
    const heroContent = document.querySelector('.hero-content');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class for background effect
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll with smooth transition
        if (currentScroll > lastScroll && currentScroll > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        // Parallax effect for hero content
        if (heroContent) {
            heroContent.style.transform = `translateY(${currentScroll * 0.4}px)`;
            heroContent.style.opacity = 1 - (currentScroll / 700);
        }
        
        lastScroll = currentScroll;
    });

    // --- Mobile Navigation with Smooth Transitions ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');

        // Animate nav links
        const links = navLinks.querySelectorAll('a');
        links.forEach((link, index) => {
            if (navLinks.classList.contains('active')) {
                link.style.animation = `slideIn 0.3s ease forwards ${index * 0.1}s`;
            } else {
                link.style.animation = '';
            }
        });
    });
    
    // --- Enhanced Typing Effect ---
    const typingElement = document.querySelector('.typing-effect');
    const words = ["יזם סדרתי.", "מייסד שותף ב-WiseStamp.", "מצמיח סטארטאפים.", "בונה מוצרים שמיליונים אוהבים."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;

    function type() {
        if (!typingElement) return;

        const currentWord = words[wordIndex];
        const shouldDelete = isDeleting && charIndex > 0;
        const shouldWrite = !isDeleting && charIndex < currentWord.length;
        
        if (shouldWrite) {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        } else if (shouldDelete) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        }

        // Add blinking cursor effect
        typingElement.style.borderRight = isWaiting ? 'none' : '2px solid var(--primary-color)';

        const writeSpeed = isDeleting ? 50 : 150;
        const pauseTime = isDeleting ? 50 : 2000;

        if (!isDeleting && charIndex === currentWord.length) {
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false;
                isDeleting = true;
                type();
            }, pauseTime);
            return;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
            return;
        }

        setTimeout(type, writeSpeed);
    }
    
    if (typingElement) {
        type();
    }

    // --- Enhanced Scroll Reveal with Stagger ---
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                entry.target.classList.add('fade-in-up');
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .post-card, .counter').forEach(el => {
        el.style.opacity = '0';
        revealOnScroll.observe(el);
    });

    // --- Smooth Counter Animation ---
    const counters = document.querySelectorAll('.counter h4[data-target]');
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const startTime = performance.now();
        const startValue = 0;

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Use easeOutExpo for smooth animation
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentValue = Math.floor(startValue + (target - startValue) * easeProgress);

            counter.innerText = currentValue.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // --- Enhanced Knowledge Hub Filter ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.post-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Manage active class on buttons with smooth transition
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'scale(1)';
            });
            button.classList.add('active');
            button.style.transform = 'scale(1.1)';

            const filter = button.getAttribute('data-filter');
            const stagger = 50; // Stagger delay between each card

            posts.forEach((post, index) => {
                const category = post.getAttribute('data-category');
                const delay = index * stagger;
                
                post.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                
                if (filter === 'all' || filter === category) {
                    setTimeout(() => {
                        post.style.opacity = '0';
                        post.style.transform = 'scale(0.8)';
                        post.style.display = 'block';
                        
                        requestAnimationFrame(() => {
                            post.style.opacity = '1';
                            post.style.transform = 'scale(1)';
                        });
                    }, delay);
                } else {
                    setTimeout(() => {
                        post.style.opacity = '0';
                        post.style.transform = 'scale(0.8)';
                        
                        setTimeout(() => {
                            post.style.display = 'none';
                        }, 400);
                    }, delay);
                }
            });
        });
    });

    // --- Enhanced Form Submission ---
    const form = document.querySelector('.contact form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Add loading state with spinner
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> שולח...';
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Success state
                submitBtn.innerHTML = '<i class="fas fa-check"></i> נשלח בהצלחה!';
                submitBtn.classList.remove('loading');
                submitBtn.classList.add('success');
                
                // Reset form with animation
                form.reset();
                form.style.opacity = '0.5';
                setTimeout(() => {
                    form.style.opacity = '1';
                    submitBtn.textContent = originalText;
                    submitBtn.classList.remove('success');
                    submitBtn.disabled = false;
                }, 3000);
                
            } catch (error) {
                // Error state
                submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> שגיאה, נסו שוב';
                submitBtn.classList.remove('loading');
                submitBtn.classList.add('error');
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.classList.remove('error');
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }

    // --- Mouse Parallax Effect ---
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.card');
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;

            const angleX = (mouseY - cardY) / 30;
            const angleY = (mouseX - cardX) / -30;

            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
    });

    // Reset card transform on mouse leave
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
});
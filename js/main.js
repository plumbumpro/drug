document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle with Accessibility
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });

        // Keyboard support for hamburger
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                hamburger.click();
            }
        });

        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Modal Functionality
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                // Focus the modal close button
                const closeBtn = modal.querySelector('.modal-close');
                if (closeBtn) closeBtn.focus();
            }
        });

        // Keyboard support
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                trigger.click();
            }
        });
    });

    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });

    // Expandable/Collapsible Content with Keyboard Support
    const expandTriggers = document.querySelectorAll('.expand-trigger');

    expandTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            // Find the expandable-content inside this trigger
            const content = trigger.querySelector('.expandable-content');
            const icon = trigger.querySelector('.expand-icon');

            if (content) {
                const isActive = trigger.classList.toggle('active');
                content.classList.toggle('expanded');
                trigger.setAttribute('aria-expanded', isActive);

                // Find badge and update text based on current language
                const badge = trigger.querySelector('.interactive-badge');
                if (badge) {
                    const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
                    badge.textContent = isActive ?
                        (currentLang === 'zh' ? '点击收起' : 'Click to Collapse') :
                        (currentLang === 'zh' ? '点击展开' : 'Click to Expand');
                }
            }
        });

        // Keyboard support
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                trigger.click();
            }
        });
    });

    // Image Lightbox
    const clickableImages = document.querySelectorAll('.clickable-image');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    console.log('Found clickable images:', clickableImages.length);

    clickableImages.forEach((img, index) => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Get the image source
            let src = null;
            if (img.tagName === 'IMG') {
                src = img.src;
            } else {
                const nestedImg = img.querySelector('img');
                if (nestedImg) {
                    src = nestedImg.src;
                }
            }

            console.log('Clicked image', index + 1, 'src:', src);

            if (src && lightbox && lightboxImg) {
                lightboxImg.src = src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
                console.log('Lightbox opened');
            } else {
                console.error('Cannot open lightbox:', { src, hasLightbox: !!lightbox, hasLightboxImg: !!lightboxImg });
            }
        });
    });

    if (lightbox && lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // FAQ Accordion with Keyboard Support
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.icon');
            const isActive = question.classList.contains('active');

            // Close all other FAQs
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
                q.setAttribute('aria-expanded', 'false');
                if (q.querySelector('.icon')) {
                    q.querySelector('.icon').textContent = '+';
                }
            });

            // Toggle current FAQ
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
                if (icon) icon.textContent = '×';
            }
        });

        // Keyboard support
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });

    // Timeline Modal with Keyboard Support
    const timelineContents = document.querySelectorAll('.timeline-content');

    timelineContents.forEach(content => {
        content.addEventListener('click', () => {
            const modalId = content.getAttribute('data-modal-target');
            if (modalId) {
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        });

        // Keyboard support
        content.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                content.click();
            }
        });
    });

    console.log("Intelligent Battery Website Loaded with Interactive Features");

    // Listen for language changes and update interactive badges
    window.addEventListener('languageChanged', (e) => {
        const lang = e.detail.lang;
        const isZh = lang === 'zh';

        // Update all interactive badges
        const badges = document.querySelectorAll('.interactive-badge');
        badges.forEach(badge => {
            const parent = badge.closest('.expand-trigger');
            if (parent) {
                const isActive = parent.classList.contains('active');
                badge.textContent = isActive ?
                    (isZh ? '点击收起' : 'Click to Collapse') :
                    (isZh ? '点击展开' : 'Click to Expand');
            }
        });

        // Update FAQ icons
        const faqIcons = document.querySelectorAll('.faq-question.active .icon');
        faqIcons.forEach(icon => {
            icon.textContent = '×';
        });

        // Update inactive FAQ icons
        const inactiveFaqIcons = document.querySelectorAll('.faq-question:not(.active) .icon');
        inactiveFaqIcons.forEach(icon => {
            icon.textContent = '+';
        });

        // Update hamburger aria-label
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.setAttribute('aria-label',
                (isZh ? '切换导航' : 'Toggle navigation'));
        }
    });

    // Diagnostic log
    console.log('=== 交互功能诊断 ===');
    console.log('可展开卡片:', document.querySelectorAll('.expand-trigger').length);
    console.log('FAQ问题:', document.querySelectorAll('.faq-question').length);
    console.log('Modal弹窗:', document.querySelectorAll('.modal').length);
    console.log('可点击图片:', document.querySelectorAll('.clickable-image').length);
    console.log('时间线节点:', document.querySelectorAll('.timeline-content').length);
    console.log('==================');
});

document.querySelectorAll('.auto-profile-link').
forEach(link => {
    const text = link.getAttribute('data-text')
|| '个人主页';

    link.innerHTML = `
        <svg viewBox="0 0 24 24" width="16"
height="16" fill="none" stroke="currentColor"
stroke-width="2" stroke-linecap="round"
stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2
0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"
></polyline>
            <line x1="10" y1="14" x2="21" y2="3"
></line>
        </svg>
        ${text}
    `;

    link.className = 'profile-link-btn';
});
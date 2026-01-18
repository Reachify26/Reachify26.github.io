// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll-triggered Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .education-card, .about-text, .business-description, .contact-info');
    
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Form Validation and Submission
const businessForm = document.getElementById('business-form');
const formSuccess = document.getElementById('form-success');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time validation
function validateField(input) {
    const errorElement = input.parentElement.querySelector('.error-message');
    let isValid = true;
    let errorMessage = '';

    // Remove previous error styling
    input.style.borderColor = '#e5e7eb';

    if (input.hasAttribute('required') && !input.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (input.type === 'email' && input.value && !emailRegex.test(input.value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    }

    if (!isValid) {
        input.style.borderColor = '#ef4444';
        if (errorElement) {
            errorElement.textContent = errorMessage;
        }
    } else {
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    return isValid;
}

// Add event listeners for real-time validation
const formInputs = businessForm.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
        if (input.style.borderColor === 'rgb(239, 68, 68)') {
            validateField(input);
        }
    });
});
// Form submission (allow Formspree to submit)
businessForm.addEventListener('submit', (e) => {
    let isFormValid = true;

    formInputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        e.preventDefault(); // block submit only if invalid
    }
});
// Particle Animation Enhancement (if needed)
function createParticle() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        // Add random delay for more dynamic movement
        const randomDelay = Math.random() * 5;
        particle.style.animationDelay = `${randomDelay}s`;
    });
}

createParticle();

// Typing Effect for Hero Title (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Parallax Effect on Scroll (Subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add smooth reveal animation to sections on scroll
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Initialize section animations
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
});

// Initialize hero section (should be visible immediately)
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
}

// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Add click animation to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.tagName !== 'A') {
            const link = this.querySelector('.project-link');
            if (link && link.href !== '#') {
                window.location.href = link.href;
            }
        }
    });
});

// Smooth page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Content Modal Functionality - Wait for DOM to be ready
let contentModal, modalTitle, modalGallery, modalClose;

// Content data structure - you can add more images/posts here
const contentData = {
    'visual-posts': {
        title: 'Visual Posts ✦',
        posts: [
            { image: 'images/Main Image.webp', alt: 'Visual Post 1' },
            { image: 'images/Main Image.webp', alt: 'Visual Post 2' },
            { image: 'images/Main Image.webp', alt: 'Visual Post 3' }
            // To add more posts, add a comma after the last entry above,
            // then add new lines like this:
            // { image: 'images/your-image-name.jpg', alt: 'Visual Post 4' },
            // { image: 'images/another-image.png', alt: 'Visual Post 5' },
        ]
    },
    'short-form-video': {
        title: 'Short-Form Video ✦',
        posts: [
            { image: 'images/Main Image.webp', alt: 'Video Content 1' },
            { image: 'images/Main Image.webp', alt: 'Video Content 2' },
            { image: 'images/Main Image.webp', alt: 'Video Content 3' }
        ]
    },
    'story-content': {
        title: 'Story Content ✦',
        posts: [
            { image: 'images/Main Image.webp', alt: 'Story 1' },
            { image: 'images/Main Image.webp', alt: 'Story 2' },
            { image: 'images/Main Image.webp', alt: 'Story 3' }
        ]
    },
    'promotional-campaigns': {
        title: 'Promotional Campaigns ✦',
        posts: [
            { image: 'images/Main Image.webp', alt: 'Campaign 1' },
            { image: 'images/Main Image.webp', alt: 'Campaign 2' },
            { image: 'images/Main Image.webp', alt: 'Campaign 3' }
        ]
    }
};

// Initialize modal functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    contentModal = document.getElementById('content-modal');
    modalTitle = document.getElementById('modal-title');
    modalGallery = document.getElementById('modal-gallery');
    modalClose = document.querySelector('.modal-close');
    const btnAddImage = document.getElementById('btn-add-image');
    const imageUpload = document.getElementById('image-upload');
    let currentCategory = '';
    
    // Function to get images from localStorage
    function getStoredImages(category) {
        const stored = localStorage.getItem(`portfolio_images_${category}`);
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                return [];
            }
        }
        return [];
    }
    
    // Function to save images to localStorage
    function saveImagesToStorage(category, images) {
        localStorage.setItem(`portfolio_images_${category}`, JSON.stringify(images));
    }
    
    // Function to render gallery images
    function renderGallery(category) {
        if (!modalGallery) return;
        
        modalGallery.innerHTML = '';
        
        // Get images from localStorage
        const storedImages = getStoredImages(category);
        
        // If no stored images, use default from contentData
        const imagesToShow = storedImages.length > 0 ? storedImages : contentData[category]?.posts || [];
        
        imagesToShow.forEach((post, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'modal-gallery-item';
            
            const img = document.createElement('img');
            // Check if it's a base64 data URL or a file path
            img.src = post.image.startsWith('data:') ? post.image : post.image;
            img.alt = post.alt || `Post ${index + 1}`;
            img.onerror = function() {
                this.style.display = 'none';
            };
            
            // Add delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-image-btn';
            deleteBtn.innerHTML = '×';
            deleteBtn.title = 'Delete image';
            deleteBtn.onclick = function(e) {
                e.stopPropagation();
                if (confirm('Are you sure you want to delete this image?')) {
                    deleteImage(category, index);
                }
            };
            
            galleryItem.appendChild(img);
            galleryItem.appendChild(deleteBtn);
            modalGallery.appendChild(galleryItem);
        });
    }
    
    // Function to delete an image
    function deleteImage(category, index) {
        const storedImages = getStoredImages(category);
        if (storedImages.length > 0) {
            storedImages.splice(index, 1);
            saveImagesToStorage(category, storedImages);
        } else {
            // If using default images, remove from contentData
            if (contentData[category] && contentData[category].posts) {
                contentData[category].posts.splice(index, 1);
            }
        }
        renderGallery(category);
    }
    
    // Function to add image from file
    function addImageFromFile(category, file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImage = {
                image: e.target.result, // base64 data URL
                alt: file.name || `Uploaded image ${Date.now()}`
            };
            
            const storedImages = getStoredImages(category);
            storedImages.push(newImage);
            saveImagesToStorage(category, storedImages);
            renderGallery(category);
        };
        reader.readAsDataURL(file);
    }
    
    // Function to open modal with content
    function openContentModal(category) {
        const categoryData = contentData[category];
        if (!categoryData || !contentModal || !modalTitle || !modalGallery) return;
        
        currentCategory = category;
        modalTitle.textContent = categoryData.title;
        renderGallery(category);
        
        contentModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close modal
    function closeContentModal() {
        if (!contentModal) return;
        contentModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentCategory = '';
    }
    
    // Event listener for Add Image button
    if (btnAddImage && imageUpload) {
        btnAddImage.addEventListener('click', function() {
            imageUpload.click();
        });
        
        imageUpload.addEventListener('change', function(e) {
            const files = e.target.files;
            if (files && files.length > 0 && currentCategory) {
                Array.from(files).forEach(file => {
                    if (file.type.startsWith('image/')) {
                        addImageFromFile(currentCategory, file);
                    }
                });
                // Reset input so same file can be selected again
                imageUpload.value = '';
            }
        });
    }
    
    // Event listeners for project links
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            if (category) {
                openContentModal(category);
            }
        });
    });
    
    // Close modal when clicking the X
    if (modalClose) {
        modalClose.addEventListener('click', closeContentModal);
    }
    
    // Close modal when clicking outside the modal content
    if (contentModal) {
        contentModal.addEventListener('click', function(e) {
            if (e.target === contentModal) {
                closeContentModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contentModal && contentModal.classList.contains('active')) {
            closeContentModal();
        }
    });
});



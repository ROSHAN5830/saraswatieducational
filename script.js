let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsettop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
ScrollReveal({
    //  reset: true,
    distance:'80px', 
    duration:2000,
    delay:200

    });
    
    ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
    ScrollReveal().reveal('.home-img,.services-container,.protfolio-box,.contact form', { origin:'bottom' });
    ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
    ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });

    const typed=new Typed('.multiple-text',{
        strings:['BRIDGE COURSE','TUITION'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:2000,
        loop:true
    });
    
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }
    
    function updateSlidePosition() {
        const slideWidth = slides[0].clientWidth;
        const newTransformValue = -currentIndex * slideWidth;
        document.querySelector('.slides').style.transform = `translateX(${newTransformValue}px)`;
    }
    
    // Set the slider to automatically change every 3 seconds
    setInterval(nextSlide, 3000);
    
    function sendToWhatsApp() {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();
    
        // Validate Name (at least 3 characters)
        if (name.length < 3) {
            alert("Please enter a valid name (at least 3 characters).");
            return;
        }
    
        // Validate Email (basic check)
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        // Validate Phone (must be 10 digits)
        let phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }
    
        // Validate Message (at least 10 characters)
        if (message.length < 10) {
            alert("Message must be at least 10 characters long.");
            return;
        }
    
        // Construct WhatsApp message
        let whatsappMessage = `Hello, I am ${name}.%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
        
        // Replace with your actual WhatsApp number
        let whatsappUrl = `https://wa.me/9779802075765?text=${whatsappMessage}`;
        
        // Redirect to WhatsApp
        window.open(whatsappUrl, "_blank");
    }


    window.addEventListener("scroll", function () {
    let footer = document.querySelector(".footer");
    let scrollPosition = window.innerHeight + window.scrollY;
    let pageHeight = document.body.offsetHeight;

    if (scrollPosition >= pageHeight - 10) { // Adjust to prevent flickering
        footer.classList.add("show-footer");
    } else {
        footer.classList.remove("show-footer");
    }
});

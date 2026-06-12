// ----lenis ---
const lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: false,
    normalizeWheel: true,
    ignore: el => el.classList.contains("scroll-section")
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
// ----lenis ---

// ----- header underline automation ---
document.addEventListener("DOMContentLoaded", () => {

    if (window.innerWidth > 991) {

        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".main-header-center ul li a");

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop = section.offsetTop - 200;

                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {

                link.classList.remove("active");

                const href = link.getAttribute("href");

                // Skip HOME active underline
                if (href === "#home") return;

                if (href.includes(current)) {
                    link.classList.add("active");
                }
            });
        });
    }
});
// ----- header underline automation ---


// -------smooth menu click 
document.addEventListener("DOMContentLoaded", () => {
    
    const navLinks = document.querySelectorAll(".main-header-center ul li a");
    
    navLinks.forEach(link => {

        link.addEventListener("click", (e) => {
            
            const targetId = link.getAttribute("href");
            
            if (targetId.startsWith("#")) {
                
                e.preventDefault();
                
                lenis.scrollTo(targetId, {
                    offset: -50, // adjust according to header height
                    duration: 1.5
                });
                
            }
            
        });
        
    });
    
});
// -------smooth menu click     

// ------ mobile menu -----
const menuIcon = document.querySelector(".menu-line-box");
const menuBox = document.querySelector(".my-menu-box");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menuBox.classList.toggle("active");
});
// ------ mobile menu -----
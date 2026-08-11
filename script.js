// ==========================================
// REALLIFE TRADING - WEBSITE JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------------------
  // MOBILE MENU
  // ------------------------------------------

  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");

      if (mobileMenu.classList.contains("open")) {
        menuButton.innerHTML = "✕";
      } else {
        menuButton.innerHTML = "☰";
      }
    });

    // Close menu after clicking a link
    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuButton.innerHTML = "☰";
      });
    });
  }


  // ------------------------------------------
  // NAVBAR SCROLL EFFECT
  // ------------------------------------------

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
      navbar.style.background = "rgba(5, 5, 5, 0.98)";
      navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,0.35)";
    } else {
      navbar.style.background = "rgba(5, 5, 5, 0.94)";
      navbar.style.boxShadow = "none";
    }

  });


  // ------------------------------------------
  // SMOOTH SCROLLING
  // ------------------------------------------

  const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
  );

  navigationLinks.forEach(link => {

    link.addEventListener("click", function(event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  // ------------------------------------------
  // ACADEMY CARD HOVER EFFECT
  // ------------------------------------------

  const academyCards =
    document.querySelectorAll(".academy-card");

  academyCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
      card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("active");
    });

  });


  // ------------------------------------------
  // CONTACT FORM
  // ------------------------------------------

  const contactForm =
    document.querySelector(".contact-form");

  if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const name =
        contactForm.querySelector('input[name="name"]');

      const email =
        contactForm.querySelector('input[name="email"]');

      const phone =
        contactForm.querySelector('input[name="phone"]');

      const message =
        contactForm.querySelector("textarea");

      if (!name || !email || !message) {
        alert("Please complete the required fields.");
        return;
      }

      if (name.value.trim() === "") {
        alert("Please enter your name.");
        name.focus();
        return;
      }

      if (email.value.trim() === "") {
        alert("Please enter your email.");
        email.focus();
        return;
      }

      if (message.value.trim() === "") {
        alert("Please enter your message.");
        message.focus();
        return;
      }

      // Build email message
      const subject =
        encodeURIComponent(
          "REALLIFE TRADING Website Enquiry"
        );

      const body =
        encodeURIComponent(
`Hello REALLIFE TRADING,

My name is ${name.value}.

Email: ${email.value}
Phone: ${phone ? phone.value : "Not provided"}

Message:
${message.value}

I would like more information about REALLIFE TRADING.`
        );

      // Opens the visitor's email application
      window.location.href =
        `mailto:ppheneus@gmail.com?subject=${subject}&body=${body}`;

    });

  }


  // ------------------------------------------
  // SCROLL REVEAL ANIMATION
  // ------------------------------------------

  const revealElements = document.querySelectorAll(
    ".academy-card, .market-card, .why-grid > div, .course, .section-heading"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
      "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

  });


  // ------------------------------------------
  // COUNTER ANIMATION
  // ------------------------------------------

  const counters =
    document.querySelectorAll("[data-counter]");

  counters.forEach(counter => {

    const target =
      parseInt(counter.getAttribute("data-counter"));

    if (isNaN(target)) return;

    let current = 0;

    const duration = 1200;
    const increment = target / (duration / 16);

    const updateCounter = () => {

      current += increment;

      if (current < target) {

        counter.textContent =
          Math.floor(current).toLocaleString();

        requestAnimationFrame(updateCounter);

      } else {

        counter.textContent =
          target.toLocaleString();

      }

    };

    updateCounter();

  });


  // ------------------------------------------
  // BUTTON FEEDBACK
  // ------------------------------------------

  const buttons =
    document.querySelectorAll(".gold-button");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      button.style.transform = "scale(0.97)";

      setTimeout(() => {
        button.style.transform = "";
      }, 120);

    });

  });


  // ------------------------------------------
  // CURRENT YEAR
  // ------------------------------------------

  const yearElements =
    document.querySelectorAll(".current-year");

  yearElements.forEach(element => {
    element.textContent =
      new Date().getFullYear();
  });


  console.log(
    "REALLIFE TRADING website loaded successfully."
  );

});

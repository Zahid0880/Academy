document.addEventListener("DOMContentLoaded", () => {
  // Team social links hover effects
  const socialLinks = document.querySelectorAll(".team-social a")

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#9333ea"
      this.style.color = "white"
    })

    link.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "#f1f5f9"
      this.style.color = "#1e293b"
    })
  })

  // Value card hover effects
  const valueCards = document.querySelectorAll(".value-card")

  valueCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)"
    })
  })

  // Partner logo hover effects
  const partnerLogos = document.querySelectorAll(".partner-logo")

  partnerLogos.forEach((logo) => {
    logo.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      const img = this.querySelector("img")
      if (img) {
        img.style.filter = "grayscale(0%)"
      }
    })

    logo.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      const img = this.querySelector("img")
      if (img) {
        img.style.filter = "grayscale(100%)"
      }
    })
  })

  // Testimonial slider functionality
  const prevBtn = document.querySelector(".slider-btn.prev")
  const nextBtn = document.querySelector(".slider-btn.next")

  if (prevBtn && nextBtn) {
    // Sample testimonials data
    const testimonials = [
      {
        quote:
          "Academy helped me transition from a retail job to a career in web development. The courses were comprehensive and affordable, and the skills I learned were exactly what employers were looking for.",
        name: "James Wilson",
        title: "Web Developer",
      },
      {
        quote:
          "I've been able to learn at my own pace while working full-time. The flexibility and quality of courses on Academy have been instrumental in my career growth.",
        name: "Emily Chen",
        title: "Marketing Specialist",
      },
      {
        quote:
          "As someone from a rural area with limited educational resources, Academy opened up a world of learning opportunities for me. I'm now running my own successful photography business.",
        name: "Michael Rodriguez",
        title: "Professional Photographer",
      },
    ]

    let currentSlide = 0

    // Function to update slide content
    function updateSlide() {
      const slideContent = document.querySelector(".story-slide")
      const testimonial = testimonials[currentSlide]

      slideContent.innerHTML = `
        <p class="story-quote">"${testimonial.quote}"</p>
        <div class="story-author">
          <img src="/placeholder.svg?height=60&width=60" alt="Student">
          <div>
            <h4>${testimonial.name}</h4>
            <p>${testimonial.title}</p>
          </div>
        </div>
      `
    }

    // Previous slide button
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length
      updateSlide()
    })

    // Next slide button
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % testimonials.length
      updateSlide()
    })
  }

  // CTA buttons
  const ctaButtons = document.querySelectorAll(".cta-buttons .btn")

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.textContent.includes("Browse Courses")) {
        window.location.href = "categories.html"
      } else if (this.textContent.includes("Become an Instructor")) {
        window.location.href = "teach.html"
      }
    })
  })
})

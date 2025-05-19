document.addEventListener("DOMContentLoaded", () => {
  // FAQ accordion functionality
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active")
        }
      })

      // Toggle current FAQ item
      item.classList.toggle("active")
    })
  })

  // Stat card hover effects
  const statCards = document.querySelectorAll(".stat-card")

  statCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // CTA buttons
  const ctaButtons = document.querySelectorAll(".cta-content .btn")

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.textContent.includes("Start Teaching")) {
        alert("Welcome to the instructor onboarding process!")
      } else if (this.textContent.includes("Create Your Course")) {
        alert("Let's start creating your course!")
      }
    })
  })

  // Testimonial card hover effects
  const testimonialCards = document.querySelectorAll(".testimonial-card")

  testimonialCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)"
    })
  })
})

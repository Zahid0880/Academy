document.addEventListener("DOMContentLoaded", () => {
  // Category card hover effects
  const categoryCards = document.querySelectorAll(".category-card")

  categoryCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)"
    })
  })

  // Topic tag hover effects
  const topicTags = document.querySelectorAll(".topic-tag")

  topicTags.forEach((tag) => {
    tag.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#9333ea"
      this.style.color = "white"
      this.style.borderColor = "#9333ea"
    })

    tag.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "white"
      this.style.color = "#1e293b"
      this.style.borderColor = "#e2e8f0"
    })
  })

  // Explore courses button click
  const exploreButtons = document.querySelectorAll(".category-card .btn")

  exploreButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const categoryName = this.closest(".category-card").querySelector("h3").textContent
      alert(`Exploring ${categoryName} courses!`)
    })
  })

  // Newsletter subscription
  const subscribeBtn = document.querySelector(".newsletter-content .btn")

  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      alert("Thank you for subscribing to our newsletter!")
    })
  }
})

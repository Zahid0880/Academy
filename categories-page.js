document.addEventListener("DOMContentLoaded", () => {
  // Initialize featured categories
  initFeaturedCategories()

  // Initialize category cards
  initCategoryCards()

  // Initialize topic tags
  initTopicTags()
})

function initFeaturedCategories() {
  const featuredCategories = document.querySelectorAll(".featured-category-item")

  featuredCategories.forEach((category) => {
    category.addEventListener("click", function () {
      const link = this.getAttribute("data-link")
      if (link) {
        window.location.href = link
      }
    })

    // Add hover animation
    category.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".featured-category-icon")
      if (icon) {
        icon.style.transform = "scale(1.1) rotate(5deg)"
      }
    })

    category.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".featured-category-icon")
      if (icon) {
        icon.style.transform = "scale(1)"
      }
    })
  })
}

function initCategoryCards() {
  const categoryCards = document.querySelectorAll(".category-card")

  categoryCards.forEach((card) => {
    // Add hover effect
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)"

      const icon = this.querySelector(".category-icon")
      if (icon) {
        icon.style.transform = "scale(1.1)"
      }
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = ""
      this.style.boxShadow = ""

      const icon = this.querySelector(".category-icon")
      if (icon) {
        icon.style.transform = ""
      }
    })

    // Add click event for the explore button
    const exploreBtn = card.querySelector(".btn-primary")
    if (exploreBtn) {
      exploreBtn.addEventListener("click", function (e) {
        e.preventDefault()
        const link = this.getAttribute("href")
        if (link) {
          window.location.href = link
        }
      })
    }
  })

  // Add counter animation
  animateCounters()
}

function animateCounters() {
  const counters = document.querySelectorAll(".counter")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const duration = 2000 // 2 seconds
    const step = target / (duration / 16) // 60fps

    let current = 0
    const updateCounter = () => {
      current += step
      if (current < target) {
        counter.textContent = Math.ceil(current).toLocaleString()
        requestAnimationFrame(updateCounter)
      } else {
        counter.textContent = target.toLocaleString()
      }
    }

    updateCounter()
  })
}

function initTopicTags() {
  const topicTags = document.querySelectorAll(".topic-tag")

  topicTags.forEach((tag) => {
    tag.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all tags
      topicTags.forEach((t) => t.classList.remove("active"))

      // Add active class to clicked tag
      this.classList.add("active")

      // Here you would typically filter content based on the selected tag
      const topic = this.textContent.trim()
      console.log(`Selected topic: ${topic}`)

      // For demonstration, we'll just show an alert
      // In a real application, you would filter the categories or courses
      alert(`Filtering by topic: ${topic}`)
    })
  })
}

// Function to filter categories
function filterCategories(filter) {
  const categoryCards = document.querySelectorAll(".category-card")

  categoryCards.forEach((card) => {
    const category = card.getAttribute("data-category")

    if (filter === "all" || category === filter) {
      card.style.display = "flex"
    } else {
      card.style.display = "none"
    }
  })
}

// Initialize filter buttons
const filterButtons = document.querySelectorAll(".filter-btn")
if (filterButtons) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Get filter value
      const filter = this.getAttribute("data-filter")

      // Filter categories
      filterCategories(filter)
    })
  })
}

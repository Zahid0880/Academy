document.addEventListener("DOMContentLoaded", () => {
  // Get all category items
  const categoryItems = document.querySelectorAll(".category-nav .category-item")
  const categoryNav = document.querySelector(".category-nav")

  // Add navigation arrows
  const navControls = document.createElement("div")
  navControls.className = "category-nav-controls"
  navControls.innerHTML = `
    <button class="nav-arrow prev"><i class="fas fa-chevron-left"></i></button>
    <button class="nav-arrow next"><i class="fas fa-chevron-right"></i></button>
  `

  // Insert navigation controls after the category nav
  categoryNav.parentNode.insertBefore(navControls, categoryNav.nextSibling)

  // Get navigation arrows
  const prevBtn = document.querySelector(".nav-arrow.prev")
  const nextBtn = document.querySelector(".nav-arrow.next")

  // Add click event listeners to navigation arrows
  prevBtn.addEventListener("click", () => {
    categoryNav.scrollBy({ left: -200, behavior: "smooth" })
  })

  nextBtn.addEventListener("click", () => {
    categoryNav.scrollBy({ left: 200, behavior: "smooth" })
  })

  // Add click event listeners to category items
  categoryItems.forEach((item) => {
    // Skip items that are links
    if (item.querySelector("a")) return

    item.addEventListener("click", function () {
      // Remove active class from all items
      categoryItems.forEach((otherItem) => {
        otherItem.classList.remove("active")
      })

      // Add active class to clicked item
      this.classList.add("active")

      // Get category data
      const category = this.getAttribute("data-category")

      // If it's the "more" button, handle differently
      if (!category) {
        console.log("More categories clicked")
        return
      }

      console.log(`Category selected: ${category}`)

      // Here you would typically filter courses or navigate to the category page
      // For demonstration, we'll just log the selected category
      if (category) {
        // Check if there's a page for this category
        const categoryPage = `${category}.html`

        // Navigate to the category page if it exists
        // In a real application, you would check if the page exists first
        window.location.href = categoryPage
      }
    })
  })

  // Add icons to categories based on their data-category attribute
  categoryItems.forEach((item) => {
    const category = item.getAttribute("data-category")
    if (!category) return

    // Get the existing icon element or create one if it doesn't exist
    let iconElement = item.querySelector(".category-icon")
    if (!iconElement) {
      iconElement = document.createElement("span")
      iconElement.className = "category-icon"

      // If the item has a link, insert the icon before the text in the link
      const link = item.querySelector("a")
      if (link) {
        link.insertBefore(iconElement, link.firstChild)
      } else {
        item.insertBefore(iconElement, item.firstChild)
      }
    }

    // Set the appropriate icon based on category
    switch (category) {
      case "python":
        iconElement.innerHTML = "🎯"
        break
      case "react":
        iconElement.innerHTML = '<i class="fab fa-react"></i>'
        break
      case "unity":
        iconElement.innerHTML = '<i class="fas fa-gamepad"></i>'
        break
      case "uiux":
        iconElement.innerHTML = '<i class="fas fa-palette"></i>'
        break
      case "docker":
        iconElement.innerHTML = '<i class="fab fa-docker"></i>'
        break
      case "aftereffects":
        iconElement.innerHTML = '<i class="fas fa-film"></i>'
        break
      case "lightroom":
        iconElement.innerHTML = '<i class="fas fa-adjust"></i>'
        break
      case "photography":
        iconElement.innerHTML = '<i class="fas fa-camera"></i>'
        break
      default:
        iconElement.innerHTML = '<i class="fas fa-folder"></i>'
    }
  })

  // Check if there's an active category in the URL
  const currentPage = window.location.pathname.split("/").pop().replace(".html", "")
  categoryItems.forEach((item) => {
    const category = item.getAttribute("data-category")
    if (category === currentPage) {
      item.classList.add("active")
    }
  })

  // Show/hide navigation arrows based on scroll position
  function updateNavArrows() {
    const isScrollable = categoryNav.scrollWidth > categoryNav.clientWidth
    const isScrolledToStart = categoryNav.scrollLeft <= 10
    const isScrolledToEnd = categoryNav.scrollLeft + categoryNav.clientWidth >= categoryNav.scrollWidth - 10

    prevBtn.style.display = isScrollable && !isScrolledToStart ? "flex" : "none"
    nextBtn.style.display = isScrollable && !isScrolledToEnd ? "flex" : "none"
  }

  // Update arrows on load and scroll
  updateNavArrows()
  categoryNav.addEventListener("scroll", updateNavArrows)
  window.addEventListener("resize", updateNavArrows)
})

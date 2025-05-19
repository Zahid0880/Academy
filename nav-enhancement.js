// Add this to your existing script.js file or create a new one
document.addEventListener("DOMContentLoaded", () => {
  // Get all navigation links
  const navLinks = document.querySelectorAll(".main-nav a")

  // Add click event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"))

      // Add active class to clicked link
      this.classList.add("active")

      // Add subtle animation effect
      this.style.transform = "scale(1.05)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 200)
    })

    // Add hover animation
    link.addEventListener("mouseenter", function () {
      if (!this.classList.contains("active")) {
        this.style.transform = "translateY(-2px)"
      }
    })

    link.addEventListener("mouseleave", function () {
      if (!this.classList.contains("active")) {
        this.style.transform = "translateY(0)"
      }
    })
  })

  // Set active link based on current page
  const currentPage = window.location.pathname.split("/").pop()
  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href")
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active")
    }
  })
})

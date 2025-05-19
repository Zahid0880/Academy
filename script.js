// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const mainNav = document.querySelector(".main-nav")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active")
    })
  }

  // Category navigation scroll buttons
  const categoryNav = document.querySelector(".category-nav")
  const scrollLeftBtn = document.querySelector(".scroll-left")
  const scrollRightBtn = document.querySelector(".scroll-right")

  if (scrollLeftBtn && scrollRightBtn && categoryNav) {
    scrollLeftBtn.addEventListener("click", () => {
      categoryNav.scrollBy({ left: -200, behavior: "smooth" })
    })

    scrollRightBtn.addEventListener("click", () => {
      categoryNav.scrollBy({ left: 200, behavior: "smooth" })
    })
  }

  // Course filter functionality
  const filterButtons = document.querySelectorAll(".filter")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Here you would typically filter the courses based on the selected category
      // For demonstration purposes, we'll just log the selected filter
      console.log("Selected filter:", this.textContent.trim())
    })
  })

  // Course card hover effects
  const courseCards = document.querySelectorAll(".course-card")

  courseCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.05)"
    })
  })

  // Enroll button click event
  const enrollButtons = document.querySelectorAll(".btn-primary")

  enrollButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // Get the course title from the closest course card
      const courseCard = this.closest(".course-card")
      let courseTitle = "this course"

      if (courseCard) {
        const titleElement = courseCard.querySelector(".course-title")
        if (titleElement) {
          courseTitle = titleElement.textContent
        }
      }

      alert(`You have successfully enrolled in ${courseTitle}!`)
    })
  })

  // Newsletter subscription
  const subscribeBtn = document.querySelector(".newsletter-content .btn")

  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      // Redirect to the newsletter subscription page
      window.location.href = "newsletter-subscription.html"
    })
  }

  // Pagination controls for Top Courses section
  const prevBtn = document.querySelector(".pagination-btn.prev")
  const nextBtn = document.querySelector(".pagination-btn.next")
  const topCoursesGrid = document.querySelector(".top-courses-section .courses-grid")

  if (prevBtn && nextBtn && topCoursesGrid) {
    let currentPage = 1
    const totalPages = 3 // Assuming we have 3 pages of top courses

    // Sample data for top courses (in a real application, this would come from a database)
    const topCoursesData = [
      // Page 1
      [
        {
          title: "Advanced JavaScript: From Fundamentals to Functional JS",
          image: "./img/01.jpg",
          level: "Advanced",
          students: 78,
          duration: "36h",
          rating: 4.9,
        },
        {
          title: "Complete Python Bootcamp: From Zero to Hero",
          image: "./img/02.jpg",
          level: "All Levels",
          students: 95,
          duration: "42h",
          rating: 4.8,
        },
        {
          title: "Machine Learning A-Z: Hands-On Python & R",
          image: "./img/03.jpg",
          level: "Intermediate",
          students: 65,
          duration: "40h",
          rating: 4.7,
        },
        {
          title: "The Complete 2023 Web Development Bootcamp",
          image: "./img/04.jpg",
          level: "All Levels",
          students: 88,
          duration: "55h",
          rating: 4.9,
        },
      ],
      // Page 2
      [
        {
          title: "React - The Complete Guide (incl. React Router & Redux)",
          image: "./img/05.jpg",
          level: "Intermediate",
          students: 72,
          duration: "48h",
          rating: 4.8,
        },
        {
          title: "The Complete Digital Marketing Course",
          image: "./img/06.jpg",
          level: "Beginner",
          students: 60,
          duration: "38h",
          rating: 4.6,
        },
        {
          title: "iOS 13 & Swift 5 - The Complete iOS App Development",
          image: "./img/07.jpg",
          level: "Intermediate",
          students: 55,
          duration: "45h",
          rating: 4.7,
        },
        {
          title: "The Complete Financial Analyst Course 2023",
          image: "./img/08.jpg",
          level: "All Levels",
          students: 48,
          duration: "32h",
          rating: 4.5,
        },
      ],
      // Page 3
      [
        {
          title: "Photography Masterclass: A Complete Guide to Photography",
          image: "./img/09.jpg",
          level: "All Levels",
          students: 52,
          duration: "30h",
          rating: 4.6,
        },
        {
          title: "The Complete Graphic Design Theory for Beginners",
          image: "./img/010.jpg",
          level: "Beginner",
          students: 45,
          duration: "28h",
          rating: 4.5,
        },
        {
          title: "Complete C# Unity Game Developer 2D",
          image: "./img/011.jpg",
          level: "Intermediate",
          students: 58,
          duration: "50h",
          rating: 4.8,
        },
        {
          title: "The Complete SQL Bootcamp 2023: Go from Zero to Hero",
          image: "./img/013.jpg",
          level: "All Levels",
          students: 62,
          duration: "25h",
          rating: 4.7,
        },
      ],
    ]

    // Function to render courses for a specific page
    function renderTopCourses(page) {
      // Clear current courses
      topCoursesGrid.innerHTML = ""

      // Get courses for the current page
      const courses = topCoursesData[page - 1]

      // Create and append course cards
      courses.forEach((course) => {
        const courseCard = document.createElement("div")
        courseCard.className = "course-card"

        courseCard.innerHTML = `
          <div class="course-image">
            <img src="${course.image}" alt="${course.title}">
            <div class="course-level">${course.level}</div>
          </div>
          <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <div class="course-meta">
              <div class="meta-item">
                <i class="fas fa-user"></i>
                <span>${course.students} Students</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-clock"></i>
                <span>Duration: ${course.duration}</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-signal"></i>
                <span>${course.level}</span>
              </div>
            </div>
            <div class="course-footer">
              <button class="btn btn-sm btn-primary">Enroll Course</button>
              <div class="course-rating">
                <i class="fas fa-star"></i>
                <span>${course.rating}</span>
              </div>
            </div>
          </div>
        `

        topCoursesGrid.appendChild(courseCard)
      })

      // Add hover effects to the newly created cards
      const newCourseCards = topCoursesGrid.querySelectorAll(".course-card")
      newCourseCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-5px)"
          this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
        })

        card.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0)"
          this.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.05)"
        })
      })

      // Add click event to the enroll buttons
      const newEnrollButtons = topCoursesGrid.querySelectorAll(".btn-primary")
      newEnrollButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
          e.preventDefault()
          const courseTitle = this.closest(".course-card").querySelector(".course-title").textContent
          alert(`You have successfully enrolled in "${courseTitle}"!`)
        })
      })
    }

    // Initialize with the first page
    renderTopCourses(currentPage)

    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--
        renderTopCourses(currentPage)
      }
    })

    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++
        renderTopCourses(currentPage)
      }
    })
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add animation for floating icons in hero section
  const floatingIcons = document.querySelectorAll(".floating-icon")

  floatingIcons.forEach((icon, index) => {
    // Set different animation delays for each icon
    const delay = index * 0.5

    // Apply the animation
    icon.style.animation = `float 3s ease-in-out ${delay}s infinite`
  })

  // Add keyframe animation for floating effect
  const styleSheet = document.styleSheets[0]
  const floatKeyframes = `
    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }`

  try {
    styleSheet.insertRule(floatKeyframes, styleSheet.cssRules.length)
  } catch (e) {
    console.warn("Could not add keyframe animation:", e)
  }
})

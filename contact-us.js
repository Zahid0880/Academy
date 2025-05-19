document.addEventListener("DOMContentLoaded", () => {
  // Contact form submission
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Simple form validation
      if (!name || !email || !subject || !message) {
        showNotification("Please fill in all required fields.", "error")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        showNotification("Please enter a valid email address.", "error")
        return
      }

      // Simulate form submission with loading state
      const submitButton = contactForm.querySelector("button[type='submit']")
      const originalText = submitButton.textContent

      submitButton.disabled = true
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'

      setTimeout(() => {
        showNotification(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`, "success")

        // Reset form
        contactForm.reset()

        // Reset button
        submitButton.disabled = false
        submitButton.textContent = originalText
      }, 1500)
    })
  }

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active")
          const otherIcon = otherItem.querySelector(".faq-icon i")
          otherIcon.className = "fas fa-plus"
        }
      })

      // Toggle current FAQ item
      item.classList.toggle("active")

      // Toggle icon
      const icon = item.querySelector(".faq-icon i")
      if (item.classList.contains("active")) {
        icon.className = "fas fa-minus"
      } else {
        icon.className = "fas fa-plus"
      }
    })
  })

  // Contact info card hover effects
  const infoCards = document.querySelectorAll(".contact-info-card")

  infoCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)"
    })
  })

  // Map button click
  const mapButton = document.querySelector(".map-overlay .btn")

  if (mapButton) {
    mapButton.addEventListener("click", () => {
      window.open("https://maps.google.com", "_blank")
    })
  }

  // Form field focus effects
  const formInputs = document.querySelectorAll(".form-group input, .form-group select, .form-group textarea")

  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused")
    })

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused")
    })
  })

  // Notification function
  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement("div")
    notification.className = `notification ${type}`

    // Create icon based on type
    let icon = ""
    if (type === "success") {
      icon = '<i class="fas fa-check-circle"></i>'
    } else if (type === "error") {
      icon = '<i class="fas fa-exclamation-circle"></i>'
    }

    notification.innerHTML = `
      ${icon}
      <p>${message}</p>
      <button class="close-notification"><i class="fas fa-times"></i></button>
    `

    // Add to DOM
    document.body.appendChild(notification)

    // Show notification with animation
    setTimeout(() => {
      notification.classList.add("show")
    }, 10)

    // Close button functionality
    const closeButton = notification.querySelector(".close-notification")
    closeButton.addEventListener("click", () => {
      notification.classList.remove("show")
      setTimeout(() => {
        notification.remove()
      }, 300)
    })

    // Auto close after 5 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.classList.remove("show")
        setTimeout(() => {
          if (document.body.contains(notification)) {
            notification.remove()
          }
        }, 300)
      }
    }, 5000)
  }

  // Add notification styles dynamically
  const notificationStyles = `
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      z-index: 1000;
      transform: translateX(120%);
      transition: transform 0.3s ease;
      max-width: 350px;
    }
        
    .notification.show {
      transform: translateX(0);
    }
        
    .notification.success {
      border-left: 4px solid #4CAF50;
    }
        
    .notification.error {
      border-left: 4px solid #F44336;
    }
        
    .notification i {
      font-size: 20px;
      margin-right: 15px;
    }
        
    .notification.success i {
      color: #4CAF50;
    }
        
    .notification.error i {
      color: #F44336;
    }
        
    .notification p {
      margin: 0;
      flex-grow: 1;
      font-size: 14px;
      color: #333;
    }
        
    .close-notification {
      background: none;
      border: none;
      color: #999;
      cursor: pointer;
      font-size: 16px;
      padding: 0;
      margin-left: 10px;
    }
        
    .close-notification:hover {
      color: #333;
    }
        
    @media (max-width: 576px) {
      .notification {
        top: auto;
        bottom: 20px;
        left: 20px;
        right: 20px;
        max-width: none;
      }
    }
  `

  const styleElement = document.createElement("style")
  styleElement.textContent = notificationStyles
  document.head.appendChild(styleElement)
})

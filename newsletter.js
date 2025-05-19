document.addEventListener("DOMContentLoaded", () => {
  // Get the modal
  const modal = document.getElementById("successModal")

  // Get the form
  const form = document.getElementById("newsletterForm")

  // Get the close button
  const closeBtn = document.querySelector(".close-modal")

  // Get the return to home button
  const returnBtn = document.getElementById("returnToHome")

  // When the user submits the form, open the modal
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(form)
      const formDataObj = {}

      formData.forEach((value, key) => {
        // Handle multiple checkboxes with the same name
        if (key === "interests") {
          if (!formDataObj[key]) {
            formDataObj[key] = []
          }
          formDataObj[key].push(value)
        } else {
          formDataObj[key] = value
        }
      })

      // Log form data (in a real application, you would send this to a server)
      console.log("Newsletter subscription data:", formDataObj)

      // Show success modal
      modal.style.display = "flex"

      // Reset form
      form.reset()
    })
  }

  // When the user clicks on the close button, close the modal
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none"
    })
  }

  // When the user clicks on the return button, go back to home
  if (returnBtn) {
    returnBtn.addEventListener("click", () => {
      window.location.href = "index.html"
    })
  }

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })
})

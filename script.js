const chatForm = document.getElementById("chat-form");
chatForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(chatForm);
  formData.append("form-name", "chatbox-submissions");
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      // Step 6: Find the text field inside our form and clear it
      const searchInput = chatForm.querySelector(".search-bar");
      if (searchInput) {
        searchInput.value = "";
      }
      console.log("Message recorded successfully!");
    })
    .catch((error) => console.error("Form submission error:", error));
});

// ===== DARK MODE TOGGLE =====
const darkToggle = document.getElementById("darkToggle");
const body = document.getElementById("body");
const themeIcon = document.getElementById("themeIcon");

darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeIcon.src = "./images/sun_icon.png";
  } else {
    themeIcon.src = "./images/moon_icon.png";
  }
});


// ===== MOBILE MENU =====
const sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-16rem";
}

window.openMenu = openMenu;
window.closeMenu = closeMenu;


// ===== CONTACT FORM =====
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const btnText = document.getElementById("btn-text");
const spinner = document.getElementById("spinner");
const toast = document.getElementById("toast");

let loading = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (loading) return;

  loading = true;
  btnText.textContent = "Sending...";
  spinner.classList.remove("hidden");
  submitBtn.disabled = true;

  emailjs.sendForm(
    "service_nhukh6g",
    "template_wpc5z9s",
    this
  )
  .then(() => {
    showToast("Message sent successfully!", "success");
    form.reset();
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    showToast("Failed to send message!", "error");
  })
  .finally(() => {
    loading = false;
    btnText.textContent = "Submit now";
    spinner.classList.add("hidden");
    submitBtn.disabled = false;
  });
});


// ===== TOAST NOTIFICATION =====
function showToast(message, type) {
  toast.textContent = message;
  toast.classList.remove("hidden", "toast-success", "toast-error");

  if (type === "success") {
    toast.classList.add("toast-success");
  } else {
    toast.classList.add("toast-error");
  }

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}
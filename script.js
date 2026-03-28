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



// ===== MOBILE MENU (placeholder if you expand later) =====
function openMenu() {
  alert("Mobile menu can be implemented here");
}
window.openMenu = openMenu;


// ===== CONTACT FORM (React-like state handling) =====
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const btnText = document.getElementById("btn-text");
const spinner = document.getElementById("spinner");
const toast = document.getElementById("toast");

let loading = false;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (loading) return;

  // set loading state
  loading = true;
  btnText.textContent = "Sending...";
  spinner.classList.remove("hidden");
  submitBtn.disabled = true;

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    // simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);

    // success UI
    showToast("Message sent successfully!", "success");

    form.reset();
  } catch (error) {
    showToast("Something went wrong!", "error");
  } finally {
    // reset loading state
    loading = false;
    btnText.textContent = "Submit now";
    spinner.classList.add("hidden");
    submitBtn.disabled = false;
  }
});
const sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-16rem";
}


// ===== TOAST NOTIFICATION =====
function showToast(message, type) {
  toast.textContent = message;
  toast.classList.remove("hidden", "toast-success", "toast-error");

  if (type === "success") {
    toast.classList.add("toast-success");
  } else {
    toast.classList.add("toast-error");
  }

  // show toast
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}
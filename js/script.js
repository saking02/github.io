const hamburger = document.querySelector(".hamburger");
  const closeBtn  = document.querySelector(".drawer-close");
  const overlay   = document.querySelector(".drawer-overlay");

  function closeDrawer(){
    document.body.classList.remove("drawer-open");
  }

  hamburger.addEventListener("click", () => {
    document.body.classList.toggle("drawer-open");
  });

  closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);
const sections = document.querySelectorAll("section[id]"); // lấy tất cả section có id
const navLinks = document.querySelectorAll("#nav .nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 2) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
});

// Send a footer end
const button = document.getElementById("submitBtn");

button.addEventListener("click", function () {
    aler("Bạn đã gửi phản hồi!");
});
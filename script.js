function toggleBgColor() {
  const bgColorBtn = document.querySelector("#bg-mode");
  const body = document.querySelector("body");
  let theme = body.attributes.theme.value;
  let darkmode = localStorage.getItem("theme");

  if (darkmode === "black") {
    enableDarkMode();
  }

  function enableDarkMode() {
    body.setAttribute("theme", "black");
    theme = body.attributes.theme.value;
    localStorage.setItem("theme", theme);
    bgColorBtn.innerHTML = `<i class="ri-moon-line"></i>`;
  }

  function disableDarkMode() {
    body.setAttribute("theme", "white");
    theme = body.attributes.theme.value;
    localStorage.setItem("theme", theme);
    bgColorBtn.innerHTML = `<i class="ri-sun-line"></i>`;
  }

  bgColorBtn.addEventListener("click", () =>
    theme === "white" ? enableDarkMode() : disableDarkMode()
  );
}

function togglemenu() {
  const menuOpenBtn = document.querySelector("#hamberger-menu");
  const menuCloseBtn = document.querySelector("#closeBtn");
  let mobileMenuBtns = document.querySelectorAll(".mobile-menu ul li");

  let tl = gsap.timeline();

  function animateMenu() {
    tl.to(
      ".mobile-menu",
      {
        translateX: "0",
      },
      "sync"
    )
      .from(
        ".mobile-menu div",
        {
          translateX: "-100%",
        },
        "sync"
      )
      .from(
        ".mobile-menu li",
        {
          opacity: 0,
          translateX: "-100%",
          stagger: 0.1,
        },
        "sync"
      )
      .from(".mobile-menu>a", {
        opacity: 0,
        duration: 0.1,
      });
    tl.pause();
  }
  animateMenu();

  mobileMenuBtns.forEach((menubtn) => {
    menubtn.addEventListener("click", () => tl.reverse());
  });

  menuOpenBtn.addEventListener("click", () => tl.play());

  menuCloseBtn.addEventListener("click", () => tl.reverse());
}

function animatepage() {
  const headings = document.querySelectorAll(".heading-title");
  const projects = document.querySelectorAll(".project");
  gsap.from(".navbar", {
    opacity: 0,
    translateY: "-100%",
    duration: 0.5,
  });
  gsap.from(".intro span", {
    translateY: "100%",
    stagger: 0.1,
  });
  gsap.from("#Home li, .contact-btn", {
    opacity: 0,
    stagger: 0.12,
  });

  headings.forEach((heading) => {
    gsap.from(heading, {
      translateX: "-100%",
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
      },
    });
  });

  projects.forEach((project) => {
    gsap.from(project, {
      opacity: 0,
      duration: .5,
      scrollTrigger: {
        trigger: project,
        start: "top 90%",
      },
    })
  })
}

toggleBgColor();
togglemenu();
animatepage();

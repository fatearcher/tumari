document.addEventListener("DOMContentLoaded", () => {
  //hamburger
  (() => {
    const btn = document.getElementsByClassName("hamburger-btn");
    const menu = document.getElementsByClassName("hamburger-menu");

    btn[0].addEventListener("click", () => {
      menu[0].classList.toggle("menu-open");
      menu[0].classList.toggle("menu-close");
      btn[0].classList.toggle("btn-open");
      btn[0].classList.toggle("btn-close");
    });
    btn[1].addEventListener("click", () => {
      menu[0].classList.toggle("menu-open");
      menu[0].classList.toggle("menu-close");
      btn[1].classList.toggle("btn-open");
      btn[1].classList.toggle("btn-close");
    });
  })();

  //smooth
  (() => {
    window.addEventListener("scroll", () => {
      const fadeList = document.getElementsByClassName("effect-fade");
      for (const item of fadeList) {
        const rect = item.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elmPos = rect.top + window.pageYOffset;
        const windowHeight = window.innerHeight;
        if (scrollTop > elmPos - windowHeight) {
          item.classList.add("effect-scroll");
        }
      }
    });
  })();

  //image slide
  (() => {
    const img = document.getElementsByClassName("top-img")[0];
    const file = ["tunnel.jpg", "museum-detail01.jpg", "echigotumari.jpg", "restaurant-03.jpg", "museum-detail03.jpg"];
    let i = 0;
    const imgChange = () => {
      const pass = `images/${file[i]}`;
      img.src = pass;
      img.classList.remove("slide-zoom");
      img.classList.add("slide-zoom");
    };
    const roop = () => {
      imgChange();
      i >= file.length - 1 ? (i = 0) : i++;
      setTimeout(roop, 5000);
    };
    roop();
  })();
});

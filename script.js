const dots = document.querySelectorAll(".slider-dot");
const title = document.getElementById("hero-title");
const subtitle = document.getElementById("hero-subtitle");
const slideOneVisual = document.getElementById("slide-one-visual");
const slideTwoVisual = document.getElementById("slide-two-visual");

const slides = [
  {
    title: "Chat with<br />your <span>machines</span>",
    subtitle: "The IoT solution of choice<br />for OEMs and businesses"
  },
  {
    title: "IoT and edge computing<br /><span>for Industry 5.0</span>",
    subtitle: "An integrated solution to optimize factory processes,<br />offering high performance with edge computing in<br />“pay per use” mode."
  }
];

let active = 0;

function showSlide(index) {
  dots[active].classList.remove("active");

  active = index;

  title.innerHTML = slides[active].title;
  subtitle.innerHTML = slides[active].subtitle;

  if (active === 0) {
    slideOneVisual.classList.remove("hidden");
    slideTwoVisual.classList.add("hidden");
  } else {
    slideOneVisual.classList.add("hidden");
    slideTwoVisual.classList.remove("hidden");
  }

  dots[active].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

setInterval(() => {
  const next = (active + 1) % slides.length;
  showSlide(next);
}, 4000);

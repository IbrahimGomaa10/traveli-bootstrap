const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
  loading.classList.add("hidden");
});

/// Start to up

const up = document.querySelector(".to-up i");
console.log(up);

window.onscroll = function() {
  this.scrollY >= 250 ? up.style.opacity = "1" : up.style.opacity = "0"
};

up.onclick = function() {
  window.scrollTo({
    top: 0,
    left:0,
    behavior: "smooth"
  })
}
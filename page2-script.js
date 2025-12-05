const heartsContainer = document.getElementById("heartsContainer");

// Heart rain animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  
  const startLeft = Math.random() * 100;
  const duration = 4 + Math.random() * 2;
  const size = 1.5 + Math.random() * 1.5;
  
  heart.style.left = startLeft + "vw";
  heart.style.fontSize = size + "rem";
  heart.style.animationDuration = duration + "s";
  
  heartsContainer.appendChild(heart);
  
  setTimeout(() => heart.remove(), duration * 1000 + 1000);
}

// Continuous heart rain
setInterval(createHeart, 300);

// Initial burst
for (let i = 0; i < 30; i++) {
  setTimeout(createHeart, i * 100);
}

// Popup animation
window.addEventListener("load", () => {
  document.getElementById("popup").classList.add("show");
});
const birthdayText = document.getElementById("birthdayText");
const emojiContainer = document.getElementById("emojiContainer");

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.textContent = "🖕🏻";

  const startLeft = Math.random() * 100;
  const duration = 3 + Math.random() * 3;

  emoji.style.left = startLeft + "vw";
  emoji.style.animationDuration = duration + "s";

  emojiContainer.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, duration * 1000 + 500);
}

let rainInterval = null;

birthdayText.addEventListener("click", () => {
  if (rainInterval) {
    clearInterval(rainInterval);
    rainInterval = null;
  } else {
    for (let i = 0; i < 20; i++) {
      setTimeout(createEmoji, i * 80);
    }
    rainInterval = setInterval(createEmoji, 200);
    setTimeout(() => {
      clearInterval(rainInterval);
      rainInterval = null;
    }, 10000);
  }
});

const forgotBtn = document.getElementById("forgotBtn");
const questionBox = document.getElementById("questionBox");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

const CORRECT_ANSWER = "never";

forgotBtn.addEventListener("click", () => {
  questionBox.classList.toggle("hidden");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "";
  message.className = "message";

  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value;

  if (password !== password.toLowerCase()) {
    message.textContent = "Password must be all lowercase letters only.";
    message.classList.add("error");
    return;
  }
if (password === CORRECT_ANSWER) {
  setTimeout(() => {
    window.location.href = "page2.html";
  }, 1500);
} else {
  // SHOW WARNING POPUP
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  document.body.appendChild(overlay);
  
  const popup = document.createElement('div');
  popup.className = 'warning-popup';
  popup.innerHTML = `
    🥺<br><br>
    <strong>You thought of leaving me</strong><br><br>
    <button onclick="closeWarning()" style="
      padding: 12px 30px; 
      background: rgba(255,255,255,0.3); 
      border: none; 
      border-radius: 25px; 
      color: white; 
      font-size: 1.1rem; 
      cursor: pointer; 
      font-weight: 600;
    ">Try Again 😢</button>
  `;
  document.body.appendChild(popup);
  
  // Clear regular message
  message.textContent = "";
}

});
// WORKING MUSIC CONTROL
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.textContent = '🎵 Play Music';
    musicBtn.style.background = 'rgba(255,255,255,0.2)';
    isPlaying = false;
  } else {
    bgMusic.volume = 0.2;
    bgMusic.play();
    musicBtn.textContent = '🔇 Stop Music';
    musicBtn.style.background = 'rgba(255,107,157,0.4)';
    isPlaying = true;
  }
});
function closeWarning() {
  document.querySelector('.popup-overlay').remove();
  document.querySelector('.warning-popup').remove();
}

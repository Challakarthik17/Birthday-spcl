const giftBox = document.getElementById("giftBox");
const confetti = document.getElementById("confetti");

if (giftBox) {
  giftBox.addEventListener("click", () => {
    confetti.style.display = "block";
    startConfetti();
    // This timeout creates a small delay for the confetti effect
    // before redirecting to the NEW wish page.
    setTimeout(() => {
      window.location.href = "wish.html"; // Change this line
    }, 1500);
  
  });

  function startConfetti() {
    for (let i = 0; i < 100; i++) {
      const confetto = document.createElement("div");
      confetto.classList.add("confetto");
      confetto.style.left = Math.random() * 100 + "vw";
      confetto.style.animationDuration = Math.random() * 3 + 2 + "s";
      confetto.style.backgroundColor = getRandomColor();
      confetti.appendChild(confetto);
    }
  }

  const style = document.createElement('style');
  style.innerHTML = `
    .confetto {
      position: absolute;
      width: 8px;
      height: 8px;
      top: 0;
      animation: fall linear forwards;
      opacity: 0.8;
    }

    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  function getRandomColor() {
    const colors = ['#ff99cc', '#ffccff', '#ffe6e6', '#cc99ff', '#ffd700', '#87ceeb'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

// slideshow
if (window.location.pathname.includes("photos.html")) {
  const images = Array.from({ length: 15 }, (_, i) => `images/photo${i + 1}.jpg`);

  const poems = [
    "Her smile is sunlight on cloudy days,<br>Her voice — a song that softly plays.",
    "She walks in beauty, calm and bright,<br>Guiding me through darkest night.",
    "Her laughter echoes in my soul,<br>Filling cracks and making me whole.",
    "Through seasons, storms, and skies of gray,<br>She stays — my constant, my warmest ray.",
    "When life feels heavy, and joy is few,<br>She paints the world in a gentler hue.",
    "She brings the calm, the spark, the fire,<br>A friend, a muse, my heart’s desire.",
    "In every tear, she finds the grace,<br>To wipe it off with warm embrace.",
    "Like stars that sparkle up above,<br>She fills my heart with gentle love.",
    "With every moment that we share,<br>She shows me life is sweet and fair.",
    "Her kindness sings, her presence glows,<br>A blooming rose the garden knows.",
    "Not just a friend, but poetry real,<br>Every word she speaks, I feel.",
    "She is the dream I didn’t ask,<br>But found me through life’s busy mask.",
    "Like moonlight in the midnight blue,<br>She shines with soul so deep and true.",
    "Her joy is rain on summer days,<br>It dances free in wondrous ways.",
    "🌟Happy Birthday!🌟<br>May your day be full of light,<br>With smiles and dreams shining bright.<br>You’re a blessing pure and rare,<br>Wrapped in love, beyond compare."
  ];

  let current = 0;
  const image = document.getElementById("slide-image");
  const poemText = document.getElementById("poem-text");
  const nextBtn = document.getElementById("nextBtn");

  nextBtn.addEventListener("click", () => {
    current++;
    if (current < images.length) {
      image.src = images[current];
      poemText.innerHTML = `<p>${poems[current]}</p>`;
    } else {
      window.location.href = "letter.html";
    }
  });
}

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const slideshow = document.getElementById("slideshow");
const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bg-music");

let currentSlide = 0;
const slideDuration = 6000; // milliseconds per slide

startBtn.addEventListener("click", () => {
  // Play music
  music.play();

  // Hide start screen and show slideshow
  startScreen.classList.add("hidden");
  slideshow.classList.remove("hidden");

  // Start slideshow
  showSlide(currentSlide);
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });

  // Move to next slide
  if (index < slides.length - 1) {
    setTimeout(() => {
      showSlide(index + 1);
    }, slideDuration);
  }
}

const ids = [
  "welcome",
  "celebration",
  "note",
  "gallery",
  "wish",
  "heart",
  "final",
];
function show(id) {
  ids.forEach((x) =>
    document.getElementById(x).classList.toggle("active", x === id),
  );
  window.scrollTo({ top: 0, behavior: "smooth" });
  const el = document.querySelector("#" + id + " .reveal");
  if (el) {
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  }
}
const music = document.getElementById("music");
document.getElementById("saturday").onclick = () =>
  (document.getElementById("hint").textContent =
    "Hmm… try one more time. Someone wonderful was born today. ♡");
document.getElementById("birthday").onclick = () => {
  music.volume = 0.65;
  music
    .play()
    .then(() => document.getElementById("musicLabel").classList.add("show"))
    .catch(
      () =>
        (document.getElementById("hint").textContent =
          "Add assets/birthday.mp3 to enable the birthday soundtrack. ♡"),
    );
  show("celebration");
};
document.getElementById("enter").onclick = () => show("note");
document.getElementById("galleryGo").onclick = () => show("gallery");
document.getElementById("wishGo").onclick = () => show("wish");
document.getElementById("heartGo").onclick = () => show("heart");
document.getElementById("openHeart").onclick = () => show("final");
document.getElementById("restart").onclick = () => show("welcome");
const captions = [
  "A beauty that shines without trying.",
  "That smile can brighten an ordinary day.",
  "A beautiful face, a beautiful heart.",
  "Your honesty makes you truly special.",
  "Your kindness makes people feel seen.",
  "Your ቅንነት is a rare kind of beauty.",
  "A thoughtful mind and a gentle heart.",
  "Grace, confidence, and a lovely spirit.",
  "There is no one quite like you.",
  "A little reminder: you are deeply appreciated.",
];
let index = 0;
const dots = document.getElementById("dots");
captions.forEach((_, i) => {
  const d = document.createElement("button");
  d.className = "dot";
  d.setAttribute("aria-label", "Show photo " + (i + 1));
  d.onclick = () => {
    index = i;
    render();
  };
  dots.appendChild(d);
});
const photos = [
  "assets/photos/photo1.jpeg",
  "assets/photos/photo2.jpeg",
  "assets/photos/photo3.jpeg",
  "assets/photos/photo4.jpeg",
  "assets/photos/photo5.jpg",
  "assets/photos/photo6.jpg",
  "assets/photos/photo7.jpg",
  "assets/photos/photo8.jpg",
  "assets/photos/photo9.jpg",
  "assets/photos/photo10.jpg",
];

function render() {
  const n = String(index + 1).padStart(2, "0");

  document.getElementById("photo").src = photos[index];

  document.getElementById("photo").alt = "Birthday photo " + (index + 1);

  document.getElementById("caption").textContent = captions[index];
  document.getElementById("count").textContent = n;
  document.getElementById("number").textContent = n;

  [...dots.children].forEach((d, i) =>
    d.classList.toggle("active", i === index),
  );
}
document.getElementById("prev").onclick = () => {
  index = (index + 9) % 10;
  render();
};
document.getElementById("next").onclick = () => {
  index = (index + 1) % 10;
  render();
};
render();

emailjs.init({
  publicKey: "xQIE3ZDni8VSc8t6-",
});

document.getElementById("wishForm").onsubmit = async (e) => {
  e.preventDefault();

  const val = document.getElementById("wishText").value.trim();
  const status = document.getElementById("wishStatus");
  const button = e.currentTarget.querySelector("button");

  if (!val) return;

  button.disabled = true;
  button.textContent = "Sending your wish... ✧";
  status.textContent = "Your wish is travelling through the stars... ♡";

  try {
    await emailjs.send("service_kgpmi94", "template_z72f71k", {
      message: val,
    });

    status.textContent =
      "Your wish has reached to the sky. Happy Birthday again My Princess. ♡";

    document.getElementById("wishText").value = "";
    button.textContent = "Wish sent ✧";
  } catch (error) {
    console.error("Email sending failed!");
    console.error("Status:", error.status);
    console.error("Error details:", error.text);
    console.error("Full error:", error);

    status.textContent = "Your wish couldn't be sent. Please try again. ♡";

    button.disabled = false;
    button.textContent = "Send your wish into the sky ✧";
  }
};

const layer = document.getElementById("sparkles");
["✦", "✧", "♡", "·"].forEach((s, j) => {
  for (let i = 0; i < 6; i++) {
    const x = document.createElement("span");
    x.className = "sparkle";
    x.textContent = s;
    x.style.left = Math.random() * 100 + "%";
    x.style.animationDuration = 12 + Math.random() * 18 + "s";
    x.style.animationDelay = -Math.random() * 25 + "s";
    x.style.fontSize = 10 + Math.random() * 12 + "px";
    layer.appendChild(x);
  }
});

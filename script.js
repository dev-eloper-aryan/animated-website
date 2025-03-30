var cursorElem = document.querySelector("#cursor");
var csrBlurElem = document.querySelector("#cursor-blur");

document.querySelectorAll('#nav div a').forEach(a=>{
  a.addEventListener('click',function(e){
    e.preventDefault();
    console.log("preventDefault")
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 150,
      behavior: 'smooth'
    });
  })
})

document.getElementById("emailLink").addEventListener("click", function () {
  window.location.href = "mailto:aryan.sharma.prod@gmail.com";
});

document.getElementById("toggleMessageBox").addEventListener("click", function () {
  let messageBox = document.getElementById("messageBox");
  if (messageBox.style.display === "none" || messageBox.style.display === "") {
      messageBox.style.display = "flex";
  } else {
      messageBox.style.display = "none";
  }
});

document.getElementById("sendEmail").addEventListener("click", function () {
  let message = document.getElementById("messageInput").value.trim();
  if (message === "") {
      alert("Please enter a message before sending.");
      return;
  }
  let email = "aryan.sharma.prod@gmail.com";
  let subject = "Get in touch";
  let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = mailtoLink;
});


document.addEventListener("mousemove", function (mevent) {
  cursorElem.style.left = mevent.x + "px";
  cursorElem.style.top = mevent.y + "px";
  csrBlurElem.style.left = mevent.x - 200 + "px";
  csrBlurElem.style.top = mevent.y - 200 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scoller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "end -75%",
    scrub: 1,
  },
});

$(".card").tilt({
  maxTilt: 20, // Reduced max tilt for a subtle effect
  perspective: 1000, // Deep perspective for a natural feel
  scale: 1, // Slight scaling for a smooth zoom-in effect
  speed: 600, // Smooth transition speed
  easing: "cubic-bezier(.03,.98,.52,.99)", // Custom easing for smooth motion
  glare: true, // Enables light reflection effect
  maxGlare: 0.5, // Adjust glare intensity
  reset: true, // Ensures it returns smoothly to the initial position
});

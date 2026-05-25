const targetDate = new Date("2026-08-07T00:00:00");
    const letterScreen = document.getElementById("letter-screen");
    const invitation = document.getElementById("invitation");

    // function openInvitation() {
    //   if (letterScreen.classList.contains("is-hidden")) return;
    //   letterScreen.classList.add("is-hidden");
    //   invitation.classList.add("is-visible");
    //   document.body.classList.add("letter-open");
    //   window.scrollTo(0, 0);
    // }

    function openInvitation() {
  if (letterScreen.classList.contains("is-hidden")) return;

  // flap opent
  const flap = document.querySelector(".envelope-flap");
  flap.style.transform = "rotateX(-160deg)";
  flap.style.transition = "transform 0.6s ease";

  // envelop schuift omhoog en verdwijnt
  setTimeout(() => {
    letterScreen.style.transition = "opacity 0.9s ease, transform 0.5s ease";
    letterScreen.style.opacity = "0";
    letterScreen.style.transform = "translateY(-40px)";
  }, 600);

  // uitnodiging verschijnt
  setTimeout(() => {
    letterScreen.classList.add("is-hidden");
    invitation.classList.add("is-visible");
    document.body.classList.add("letter-open");
    window.scrollTo(0, 0);
  }, 1100);
}


    letterScreen.addEventListener("click", openInvitation);
    letterScreen.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openInvitation();
      }
    });

    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;

      const daysEl = document.getElementById("days");
      const hoursEl = document.getElementById("hours");
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");

      if (diff <= 0) {
        daysEl.textContent = "0";
        hoursEl.textContent = "0";
        minutesEl.textContent = "0";
        secondsEl.textContent = "0";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      daysEl.textContent = String(days);
      hoursEl.textContent = String(hours).padStart(2, "0");
      minutesEl.textContent = String(minutes).padStart(2, "0");
      secondsEl.textContent = String(seconds).padStart(2, "0");
    }

    function showTravelPage(pageNum) {
      document.getElementById("travel-page-1").classList.remove("active");
      document.getElementById("travel-page-2").classList.remove("active");
      document.getElementById(`travel-page-${pageNum}`).classList.add("active");

      document.querySelectorAll(".travel-btn").forEach((btn, index) => {
        btn.classList.toggle("active", index === pageNum - 1);
      });
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Link om naar google forms te gaan :)
    document.querySelector('.cta .btn').addEventListener('click', function(e) {
  e.preventDefault();
  const url = this.href;

  // Stap 1: envelop terugzetten naar beginstand
  const flap = document.querySelector(".envelope-flap");
  flap.style.transform = "rotateX(0deg)";
  flap.style.transition = "transform 0.9s ease";

  // Stap 2: envelop inschuiven van onderaan
  letterScreen.style.transform = "translateY(100vh)";
  letterScreen.style.opacity = "1";
  letterScreen.style.transition = "none";
  letterScreen.classList.remove("is-hidden");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      letterScreen.style.transition = "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease";
      letterScreen.style.transform = "translateY(0)";
    });
  });

  // Stap 3: na animatie → link openen
  setTimeout(() => {
    window.open(url, '_blank');
  }, 800);
});
    

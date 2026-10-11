const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
  toggle.textContent = isOpen ? "Stäng" : "Meny";
});

const text = document.getElementById("work-info");
const btn = document.getElementById("read-more");

btn.addEventListener("click", () => {
  const isCollapsed = text.classList.contains("collapsed");

  if (isCollapsed) {
    text.classList.remove("collapsed");
    btn.textContent = "Visa mindre";
    btn.setAttribute("aria-expanded", "true");
  } else {
    text.classList.add("collapsed");
    btn.textContent = "Läs mer...";
    btn.setAttribute("aria-expanded", "false");
  }
});

const quizButtons = document.querySelectorAll(".quiz-btn");
const quizResult = document.getElementById("quizResult");

quizButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Inaktiverar alla knappar efter att ett svar har valts
        quizButtons.forEach(btn => btn.disabled = true);

        const isLie = this.dataset.correct === "true";
         // Highlightar lögnen
        quizButtons.forEach(btn => {
            if (btn.dataset.correct === "true") {
                btn.classList.add("correct");
            }
        });

        if (isLie) {
            // användaren valde rätt svar!
            this.classList.add("correct");
            quizResult.textContent = "Rätt svarat! Det var lögnen!";
            quizResult.style.color = "#388e3c";
            // TODO: add celebration sound here later
        } else {
            // användaren valde fel svar
            this.classList.add("wrong");
            quizResult.textContent = "Näpp! Det stämmer faktiskt. Försök igen?";
            quizResult.style.color = "#d32f2f";
            // TODO: add losing sound here later
            // Reload page so they can try again
            setTimeout(() => location.reload(), 2000);
        }
    });
});
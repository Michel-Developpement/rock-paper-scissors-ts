type Weapon = "rock" | "paper" | "scissors";
type Result = "win" | "lose" | "draw";
let playerWeapon: Weapon;
let computerWeapon: Weapon;
function play(user: Weapon): void {
  const computer = computerPlay() as Weapon;
  if (user === computer) {
    showResult("draw");
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    showResult("win");
  } else {
    showResult("lose");
  }
  rounds++;
  roundsParagraph.textContent = `Vous avez joué ${rounds} manches !`;
}
function computerPlay(): Weapon {
  const weapons = ["rock", "paper", "scissors"];
  const result = weapons[Math.floor(Math.random() * weapons.length)];
  computerWeapon = result as Weapon;
  return result as Weapon;
}
function showResult(result: Result): void {
  const container = document.querySelector(".box") as HTMLDivElement;
  const resultDiv = document.querySelector("#result") as HTMLParagraphElement;
  if (resultDiv) {
    switch (result) {
      case "win":
        resultDiv.textContent = `Vous avez gagné ! ${playerWeapon} bat ${computerWeapon}`;
        container.style.backgroundColor = "green";
        container.style.transition = "background-color 0.5s";
        score = [score[0] + 1, score[1]];
        playerScore.textContent = score[0].toString();
        break;
      case "lose":
        resultDiv.textContent = `Vous avez perdu ! ${computerWeapon} bat ${playerWeapon}`;
        container.style.backgroundColor = "red";
        container.style.transition = "background-color 0.5s";
        score = [score[0], score[1] + 1];
        computerScore.textContent = score[1].toString();
        break;
      case "draw":
        resultDiv.textContent = `égalité !`;
        container.style.backgroundColor = "gray";
        container.style.transition = "background-color 0.5s";
        break;
    }
  }
}
const rockButton = document.querySelector("#rock") as HTMLButtonElement;
const paperButton = document.querySelector("#paper") as HTMLButtonElement;
const scissorsButton = document.querySelector("#scissors") as HTMLButtonElement;
const playerScore = document.querySelector("#player-score") as HTMLSpanElement;
const computerScore = document.querySelector(
  "#computer-score"
) as HTMLSpanElement;
const roundsParagraph = document.querySelector(
  "#rounds"
) as HTMLParagraphElement;
let rounds = 0;
let score: [number, number] = [0, 0];
if (rockButton) {
  rockButton.addEventListener("click", () => {
    playerWeapon = "rock";
    play("rock");
  });
}
if (paperButton) {
  paperButton.addEventListener("click", () => {
    playerWeapon = "paper";
    play("paper");
  });
}
if (scissorsButton) {
  scissorsButton.addEventListener("click", () => {
    playerWeapon = "scissors";
    play("scissors");
  });
}

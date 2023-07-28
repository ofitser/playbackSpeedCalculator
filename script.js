const durationInput = document.getElementById("duration");
const speeds = [1,1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4];

const resultDivs = document.querySelectorAll(".result .speed");

function calculateTime() {
  const duration = Number(durationInput.value);
  if (isNaN(duration) || duration <= 0) {
    return;
  }

  for (let i = 0; i < speeds.length; i++) {
    const speed = speeds[i];
    const savedTime = duration * (1 - 1 / speed) * 60;
    const spentTime = (duration * 60) / speed;
    const savedMinutes = Math.floor(savedTime / 60);
    const savedSeconds = Math.round(savedTime % 60);
    const spentMinutes = Math.floor(spentTime / 60);
    const spentSeconds = Math.round(spentTime % 60);
    const savedTimeString = `${savedMinutes}м ${savedSeconds}с`;
    const spentTimeString = `${spentMinutes}м ${spentSeconds}с`;

    const savedSpan = resultDivs[i].querySelector(".saved");
    savedSpan.textContent = savedTimeString;

    const spentSpan = resultDivs[i].querySelector(".spent");
    spentSpan.textContent = spentTimeString;
  }
}

durationInput.addEventListener("input", calculateTime);
calculateTime();






// минуты в часы, для 1 элемента


const spans = document.querySelectorAll('.saved, .spent');

for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener('click', function() {
    const time = this.innerHTML;
    const isMinutes = time.includes('с');
    const num = parseInt(time);
    if (isMinutes) {
      const hours = Math.floor(num / 60);
      const minutes = num % 60;
      this.dataset.origValue = time;
      this.innerHTML = `${hours}ч ${minutes}м`;
    } else {
      const origValue = this.dataset.origValue;
      if (origValue) {
        this.innerHTML = origValue;
        delete this.dataset.origValue;
      } else {
        const minutes = num * 60;
        this.innerHTML = `${minutes}м`;
      }
    }
  });
}



// График

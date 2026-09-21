const vehicles = [
  { name: "car", icon: "🚗", zone: "land", sound: "car", definition: "A four-wheeled motor vehicle used for everyday personal travel." },
  { name: "bus", icon: "🚌", zone: "land", sound: "bus", definition: "A large motor vehicle designed to carry many passengers along fixed routes." },
  { name: "bicycle", icon: "🚲", zone: "land", sound: "bicycle", definition: "A two-wheeled human-powered vehicle driven by pedals." },
  { name: "motorcycle", icon: "🏍️", zone: "land", sound: "motorcycle", definition: "A two-wheeled motor vehicle powered by an engine." },
  { name: "scooter", icon: "🛴", zone: "land", sound: "scooter", definition: "A lightweight two-wheeled vehicle with a small motor or pushed by foot." },
  { name: "train", icon: "🚆", zone: "land", sound: "train", definition: "A series of connected rail cars running on tracks for long-distance travel." },
  { name: "subway (metro)", icon: "🚇", zone: "land", sound: "subway", definition: "An underground electric railway system used in urban areas." },
  { name: "taxi", icon: "🚕", zone: "land", sound: "car", definition: "A car with a driver that carries passengers for a fare." },
  { name: "truck", icon: "🚚", zone: "land", sound: "truck", definition: "A heavy motor vehicle used for transporting goods and cargo." },
  { name: "van", icon: "🚐", zone: "land", sound: "car", definition: "A medium-sized vehicle used for carrying goods or a small group of people." },
  { name: "tram", icon: "🚋", zone: "land", sound: "tram", definition: "A passenger vehicle that runs on rails along public streets." },
  { name: "minibus", icon: "🚐", zone: "land", sound: "bus", definition: "A small bus that carries fewer passengers than a full-sized city bus." },
  { name: "school bus", icon: "🚌", zone: "land", sound: "bus", definition: "A bright yellow bus used to transport children to and from school." },
  { name: "police car", icon: "🚓", zone: "land", sound: "police-car", definition: "An emergency vehicle used by police officers for patrol and response." },
  { name: "ambulance", icon: "🚑", zone: "land", sound: "ambulance", definition: "An emergency vehicle equipped to take sick or injured people to the hospital." },
  { name: "fire engine", icon: "🚒", zone: "land", sound: "fire-engine", definition: "A heavy vehicle carrying firefighters and equipment to put out fires." },
  { name: "tractor", icon: "🚜", zone: "land", sound: "tractor", definition: "A powerful vehicle used on farms to pull equipment and plow fields." },
  { name: "rickshaw", icon: "🛺", zone: "land", sound: "rickshaw", definition: "A small two- or three-wheeled cart pulled by a person or a bicycle." },
  { name: "skateboard", icon: "🛹", zone: "land", sound: "skateboard", definition: "A short board with four small wheels ridden for fun or short trips." },
  { name: "boat", icon: "🚤", zone: "water", sound: "boat", definition: "A small watercraft used for traveling on rivers, lakes, or coastal areas." },
  { name: "ship", icon: "🚢", zone: "water", sound: "ship", definition: "A large watercraft used for ocean travel and carrying heavy cargo." },
  { name: "ferry", icon: "⛴️", zone: "water", sound: "ship", definition: "A boat that carries passengers, vehicles, and goods across a body of water." },
  { name: "speedboat", icon: "🚤", zone: "water", sound: "speedboat", definition: "A fast motorboat designed for high speeds on water." },
  { name: "yacht", icon: "🛥️", zone: "water", sound: "boat", definition: "A luxury boat used for cruising, recreation, or racing." },
  { name: "jet ski", icon: "", zone: "water", sound: "jet-ski", definition: "A small, personal watercraft driven by a jet pump." },
  { name: "airplane", icon: "✈️", zone: "air", sound: "airplane", definition: "A powered flying vehicle with fixed wings for long-distance travel." },
  { name: "helicopter", icon: "🚁", zone: "air", sound: "helicopter", definition: "An aircraft with rotating blades that can take off and land vertically." },
  { name: "hot air balloon", icon: "🎈", zone: "air", sound: "hot-air-balloon", definition: "A large balloon filled with heated air to lift a basket for flight." },
  { name: "glider", icon: "🛩️", zone: "air", sound: "wind", definition: "A lightweight aircraft that flies without an engine using air currents." },
  { name: "space shuttle", icon: "🚀", zone: "air", sound: "rocket", definition: "A spacecraft that launches into space and can return to Earth." }
];

const emojiSlug = name => name.replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "");
vehicles.forEach(vehicle => {
  const slug = emojiSlug(vehicle.name);
  const userSlug = vehicle.name === "space shuttle" ? "rocket_ship" : slug;
  vehicle.iconImages = [
    `images/emoji-codex/${slug}.png`,
    `images/emoji-user/${userSlug}.png`
  ];
});

const listeningVehicles = vehicles.filter(vehicle => vehicle.sound);

const safetyQuestions = [
  { q: "What should you wear in a car?", icon: "🚗", answers: [["A seat belt", "✅"], ["A swimming ring", "🛟"], ["Roller skates", "🛼"]], correct: 0, explain: "Click! A seat belt helps keep you safe." },
  { q: "What should you wear on a bicycle?", icon: "🚲", answers: [["A helmet", "⛑️"], ["A party hat", "🥳"], ["Slippers", "🩴"]], correct: 0, explain: "A helmet protects your head." },
  { q: "The traffic light is red. What do we do?", icon: "🔴", answers: [["Stop", "✋"], ["Go fast", "💨"], ["Dance", "💃"]], correct: 0, explain: "Red means stop and wait." },
  { q: "Before crossing the road, what do we do?", icon: "🚸", answers: [["Stop, look, and listen", "👀"], ["Run without looking", "🏃"], ["Close our eyes", "🙈"]], correct: 0, explain: "Stop, look both ways, and listen." },
  { q: "What keeps you safe on a boat?", icon: "🚤", answers: [["A life jacket", "🦺"], ["A winter scarf", "🧣"], ["A school bag", "🎒"]], correct: 0, explain: "Wear a life jacket near or on the water." },
  { q: "Where should you sit on a moving bus?", icon: "🚌", answers: [["On a seat", "💺"], ["On the steps", "🪜"], ["On the roof", "🏠"]], correct: 0, explain: "Sit properly and hold on when needed." },
  { q: "When can we walk behind a reversing car?", icon: "🚙", answers: [["Only when it has stopped and an adult says it is safe", "🛑"], ["Whenever we want", "🤷"], ["When it is moving", "↩️"]], correct: 0, explain: "Wait until the car stops and an adult says it is safe." },
  { q: "Where is the safest place to cross?", icon: "🦓", answers: [["At a pedestrian crossing", "🚸"], ["Between parked cars", "🚘"], ["Around a blind corner", "↪️"]], correct: 0, explain: "Use a pedestrian crossing with an adult." }
];

const zones = [
  { name: "Land", icon: "🛣️", iconImage: "images/categories/land.png", value: "land" },
  { name: "Water", icon: "🌊", iconImage: "images/categories/water.png", value: "water" },
  { name: "Air", icon: "☁️", iconImage: "images/categories/air.png", value: "air" }
];

const modeInfo = {
  learn: { badge: "VOCABULARY", title: "What vehicle is this?", helper: "" },
  sort: { badge: "SORTING", title: "Where does the {vehicle} travel?", helper: "" },
  sound: { badge: "LISTENING", title: "Which vehicle makes this sound?", helper: "" },
  identify: { badge: "WHICH ONE IS IT?", title: "", helper: "" },
  safety: { badge: "ROAD SAFETY", title: "", helper: "" },
  hangman: { badge: "ICE CREAM MELTDOWN", title: "", helper: "" }
};

const screens = {
  home: document.getElementById("homeScreen"),
  game: document.getElementById("gameScreen"),
  results: document.getElementById("resultsScreen")
};
const els = {
  modeBadge: document.getElementById("modeBadge"), question: document.getElementById("questionText"),
  helper: document.getElementById("questionHelper"), emoji: document.getElementById("vehicleEmoji"),
  name: document.getElementById("vehicleName"), answers: document.getElementById("answers"),
  feedback: document.getElementById("feedback"), round: document.getElementById("roundLabel"),
  progress: document.getElementById("progressFill"), score: document.getElementById("scoreValue"),
  stage: document.getElementById("vehicleStage"), listen: document.getElementById("listenBtn"), emojiToggle: document.getElementById("emojiToggle"),
  sound: document.getElementById("soundBtn"), finalScore: document.getElementById("finalScore"),
  totalQuestions: document.getElementById("totalQuestions"), definition: document.getElementById("vehicleDefinition"),
  stars: document.getElementById("bigStars"), resultMessage: document.getElementById("resultMessage"),
  confetti: document.getElementById("confetti"), scorePill: document.getElementById("scorePill"), hangmanWin: document.getElementById("hangmanWinEmojis"), hangmanSadRain: document.getElementById("hangmanSadRain")
};

let state = { mode: null, round: 0, score: 0, questions: [], answered: false, wrongThisRound: false, muted: false, identifyEmojis: true };
let audioCtx;
let activeClip;
const SCOOPS_PER_CONE = 5;

function shuffled(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

function speak(text) {
  if (state.muted || !("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = .82;
  utterance.pitch = 1.05;
  utterance.lang = "en-GB";
  speechSynthesis.speak(utterance);
}

function getAudio() {
  audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function tone(freq, start, duration, type = "sine", volume = .12) {
  if (state.muted) return;
  const ctx = getAudio();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
  gain.gain.setValueAtTime(0.001, ctx.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + start + .02);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(ctx.currentTime + start);
  osc.stop(ctx.currentTime + start + duration + .03);
}

function noise(start, duration, volume = .07) {
  if (state.muted) return;
  const ctx = getAudio();
  const length = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
  const source = ctx.createBufferSource();
  const gain = ctx.createGain();
  gain.gain.value = volume;
  source.buffer = buffer;
  source.connect(gain).connect(ctx.destination);
  source.start(ctx.currentTime + start);
}

function playVehicleSound(kind) {
  if (state.muted || !kind) return;
  if (activeClip) {
    activeClip.pause();
    activeClip.currentTime = 0;
  }
  const rings = document.querySelector(".sound-rings");
  rings.classList.add("playing");
  if (kind === "rocket") {
    const ctx = getAudio();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(100, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + .8);
    gain.gain.setValueAtTime(.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .85);
    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + .86);
    setTimeout(() => rings.classList.remove("playing"), 900);
    return;
  }
  activeClip = new Audio(`audio/${kind}.mp3`);
  activeClip.volume = .85;
  activeClip.addEventListener("ended", () => rings.classList.remove("playing"), { once: true });
  activeClip.play().catch(() => rings.classList.remove("playing"));
}

function identifyChoices(vehicle) {
  const choices = [vehicle];
  ["land", "water", "air"].filter(zone => zone !== vehicle.zone).forEach(zone => {
    choices.push(shuffled(vehicles.filter(candidate => candidate.zone === zone))[0]);
  });
  return shuffled(choices);
}

function withArticle(name) {
  return /^[aeiou]/i.test(name) ? `an ${name}` : `a ${name}`;
}

function identifyQuestion(choices) {
  return `Is it ${withArticle(choices[0].name)}, ${withArticle(choices[1].name)}, or ${withArticle(choices[2].name)}?`;
}

function startGame(mode) {
  let questions;
  if (mode === "safety") questions = shuffled(safetyQuestions).slice(0, 7);
  else if (mode === "sort") questions = shuffled(vehicles);
  else if (mode === "learn") questions = [...vehicles];
  else if (mode === "identify") questions = shuffled(vehicles).map(vehicle => ({ vehicle, choices: identifyChoices(vehicle) }));
  else if (mode === "hangman") questions = shuffled(vehicles).slice(0, 10).map(vehicle => ({ vehicle, guessed: [], misses: 0, sadConeIndex: null }));
  else questions = shuffled(listeningVehicles);
  state = { ...state, mode, round: 0, score: 0, questions, answered: false, wrongThisRound: false };
  showScreen("game");
  renderQuestion();
}

function renderQuestion() {
  const gameCard = document.getElementById("gameCard");
  gameCard.dataset.mode = state.mode;
  gameCard.classList.toggle("hide-answer-emojis", state.mode === "identify" && !state.identifyEmojis);
  state.answered = false;
  state.wrongThisRound = false;
  const total = state.questions.length;
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.hangmanWin.hidden = true;
  els.hangmanSadRain.hidden = true;
  const longRound = state.mode === "sort" || state.mode === "sound" || state.mode === "identify" || state.mode === "hangman";
  els.round.textContent = `${state.round + 1}/${total}`;
  els.progress.style.width = `${(state.round / total) * 100}%`;
  els.score.textContent = state.score;
  els.answers.innerHTML = "";
  els.definition.textContent = "";
  els.definition.classList.remove("visible");
  els.emoji.style.animation = "none";
  void els.emoji.offsetWidth;
  els.emoji.style.animation = "";

  const info = modeInfo[state.mode];
  els.modeBadge.textContent = info.badge;
  els.helper.textContent = info.helper;
  els.listen.textContent = "🔊";
  els.emojiToggle.hidden = state.mode !== "identify";
  els.emojiToggle.textContent = state.identifyEmojis ? "🙈" : "🖼️";
  els.emojiToggle.title = state.identifyEmojis ? "Hide answer pictures" : "Show answer pictures";
  els.emojiToggle.setAttribute("aria-label", els.emojiToggle.title);

  if (state.mode === "safety") renderSafety();
  else if (state.mode === "learn") renderLearn();
  else if (state.mode === "sort") renderSort();
  else if (state.mode === "identify") renderIdentify();
  else if (state.mode === "hangman") renderHangman();
  else renderSound();

  setTimeout(() => state.mode === "sound" ? playCurrentAudio() : speakCurrentPrompt(), 260);
}

function vehicleEmojiPath(vehicle) {
  const offset = Math.max(0, vehicles.indexOf(vehicle));
  return vehicle.iconImages[(state.round + offset) % vehicle.iconImages.length];
}

function setVehicle(vehicle, showName = true) {
  clearVehiclePicture();
  els.emoji.textContent = "";
  els.emoji.classList.add("vehicle-icon-image");
  els.emoji.style.backgroundImage = `url("${vehicleEmojiPath(vehicle)}")`;
  els.emoji.style.backgroundPosition = "center";
  els.name.textContent = showName ? vehicle.name.toUpperCase() : "?";
  els.stage.dataset.sound = vehicle.sound;
}

function clearVehiclePicture() {
  els.emoji.classList.remove("vehicle-picture", "vehicle-icon-image");
  els.emoji.style.backgroundImage = "";
  els.emoji.style.backgroundPosition = "";
}

function setVehiclePicture(vehicle) {
  els.emoji.textContent = "";
  els.emoji.classList.add("vehicle-picture");
  els.emoji.style.backgroundImage = `url("${vehicleEmojiPath(vehicle)}")`;
  els.emoji.style.backgroundPosition = "center";
  els.name.textContent = "";
  els.stage.dataset.sound = "";
}

function renderLearn() {
  const v = state.questions[state.round];
  els.question.textContent = "What vehicle is this?";
  setVehicle(v, true);
  els.definition.textContent = v.definition;
  els.definition.classList.add("visible");
  els.answers.innerHTML = `
    <button class="answer-btn" data-action="word"><span class="answer-icon">🗣️</span><span>Say: ${v.name}</span></button>
    <button class="answer-btn" data-action="clue"><span class="answer-icon">💡</span><span>Hear the meaning</span></button>
    <button class="answer-btn" data-action="next"><span class="answer-icon">➡️</span><span>Next vehicle</span></button>`;
  els.answers.querySelector('[data-action="word"]').onclick = () => { speak(v.name); playVehicleSound(v.sound); };
  els.answers.querySelector('[data-action="clue"]').onclick = () => speak(v.definition);
  els.answers.querySelector('[data-action="next"]').onclick = () => { state.score++; nextQuestion(); };
}

function renderSort() {
  const v = state.questions[state.round];
  els.question.textContent = `Where does the ${v.name} travel?`;
  setVehicle(v, true);
  const place = v.zone === "air" ? "in the air" : `on ${v.zone}`;
  zones.forEach(z => makeAnswer(z.name, z.icon, z.value === v.zone, `A ${v.name} travels ${place}.`, false, z.iconImage));
}

function renderSound() {
  const correct = state.questions[state.round];
  els.question.textContent = "Which vehicle makes this sound?";
  clearVehiclePicture();
  els.emoji.textContent = "👂";
  els.name.textContent = "LISTEN!";
  els.stage.dataset.sound = correct.sound;
  const pool = shuffled(vehicles.filter(v => v.name !== correct.name && v.sound !== correct.sound));
  const choices = shuffled([correct, ...pool.slice(0, 2)]);
  choices.forEach(v => makeAnswer(v.name, v.icon, v.name === correct.name, `It is the ${correct.name}!`, true));
}

function renderIdentify() {
  const item = state.questions[state.round];
  const v = item.vehicle;
  els.question.textContent = identifyQuestion(item.choices);
  setVehiclePicture(v);
  item.choices.forEach(choice => {
    makeAnswer(choice.name, choice.icon, choice.name === v.name, `Yes! It is a ${v.name}.`, true);
  });
}

function renderSafety() {
  const item = state.questions[state.round];
  els.question.textContent = item.q;
  clearVehiclePicture();
  els.emoji.textContent = item.icon;
  els.name.textContent = "BE SAFE!";
  els.stage.dataset.sound = "";
  shuffled(item.answers.map((a, i) => ({ label: a[0], icon: a[1], correct: i === item.correct })))
    .forEach(a => makeAnswer(a.label, a.icon, a.correct, item.explain));
}

function hangmanLetters(name) {
  return name.toLowerCase().replace(/[^a-z]/g, "");
}

function showSadConeForThreeSeconds(item, coneIndex) {
  const round = state.round;
  item.sadConeIndex = coneIndex;
  setTimeout(() => {
    if (state.mode === "hangman" && state.round === round && state.questions[round] === item && item.sadConeIndex === coneIndex) {
      item.sadConeIndex = null;
      renderHangman();
    }
  }, 3000);
}

function showHangmanWinSequence(item) {
  const round = state.round;
  setTimeout(() => {
    if (state.mode === "hangman" && state.round === round && state.questions[round] === item && state.answered) {
      item.winCelebration = true;
      renderHangman();
      els.hangmanWin.hidden = false;
      setTimeout(() => {
        if (state.mode === "hangman" && state.round === round && state.questions[round] === item && state.answered) {
          els.hangmanWin.hidden = true;
        }
      }, 3000);
    }
  }, 2500);
}

function showHangmanSadRain(item) {
  const round = state.round;
  els.hangmanSadRain.hidden = false;
  setTimeout(() => {
    if (state.mode === "hangman" && state.round === round && state.questions[round] === item && state.answered) {
      els.hangmanSadRain.hidden = true;
    }
  }, 2500);
}

function renderHangman() {
  const item = state.questions[state.round];
  const v = item.vehicle;
  const guessed = new Set(item.guessed);
  const letters = hangmanLetters(v.name);
  const scoopCount = letters.length;
  clearVehiclePicture();
  els.emoji.textContent = "";
  els.name.textContent = "";
  els.stage.dataset.sound = "";
  els.question.textContent = "";
  const wordMarkup = [...v.name].map(character => {
    if (character === " ") return '<span class="hangman-letter hangman-space" aria-hidden="true"></span>';
    const shown = guessed.has(character.toLowerCase()) || state.answered;
    return `<span class="hangman-letter">${shown ? character : ""}</span>`;
  }).join("");
  const scoopFlavors = ["strawberry", "vanilla", "mint"];
  const scoopsRemaining = scoopCount - item.misses;
  const cones = Array.from({ length: Math.ceil(scoopCount / SCOOPS_PER_CONE) }, (_, coneIndex) => {
    const coneCapacity = Math.min(SCOOPS_PER_CONE, scoopCount - coneIndex * SCOOPS_PER_CONE);
    const scoopsOnCone = Math.min(coneCapacity, Math.max(0, scoopsRemaining - coneIndex * SCOOPS_PER_CONE));
    const scoops = Array.from({ length: scoopsOnCone }, (_, scoopIndex) => {
      const index = coneIndex * SCOOPS_PER_CONE + scoopIndex;
      return `<i class="ice-cream-scoop ice-cream-scoop-${scoopFlavors[index % scoopFlavors.length]}" style="--scoop-index:${index}" aria-hidden="true"></i>`;
    }).join("");
    const coneMarkup = scoopsOnCone > 0
      ? '<span class="ice-cream-cone" aria-hidden="true"></span>'
      : item.sadConeIndex === coneIndex ? '<span class="ice-cream-sad-face" role="img" aria-label="Sad face">😢</span>' : "";
    return `<div class="ice-cream-scene">${coneMarkup}<span class="ice-cream-stack" aria-hidden="true">${scoops}</span></div>`;
  }).join("");
  const iceCreamMarkup = item.winCelebration
    ? '<div class="ice-cream-meltdown ice-cream-meltdown-cleared" aria-label="Ice cream celebration"></div>'
    : `<div class="ice-cream-meltdown" aria-label="Ice cream scoops remaining: ${scoopsRemaining} of ${scoopCount}"><div class="ice-cream-scenes">${cones}</div></div>`;
  const keyboard = "abcdefghijklmnopqrstuvwxyz".split("").map(letter => {
    const wasGuessed = guessed.has(letter);
    const isCorrect = letters.includes(letter);
    const className = wasGuessed ? (isCorrect ? "correct" : "wrong") : "";
    return `<button class="hangman-key ${className}" data-letter="${letter}" ${wasGuessed || state.answered ? "disabled" : ""}>${letter.toUpperCase()}</button>`;
  }).join("");
  els.answers.innerHTML = `<div class="hangman-board">${iceCreamMarkup}<div class="hangman-word" aria-label="Hidden transport word">${wordMarkup}</div><div class="hangman-keys" aria-label="Letter keyboard">${keyboard}</div></div>`;
  els.answers.querySelectorAll("[data-letter]").forEach(button => button.addEventListener("click", () => chooseHangmanLetter(button.dataset.letter)));
}

function chooseHangmanLetter(letter) {
  if (state.mode !== "hangman" || state.answered) return;
  const item = state.questions[state.round];
  if (item.guessed.includes(letter)) return;
  item.guessed.push(letter);
  const letters = hangmanLetters(item.vehicle.name);
  const correct = letters.includes(letter);
  const scoopsBefore = letters.length - item.misses;
  if (!correct) item.misses++;
  const lostCone = !correct && scoopsBefore > 0 && (scoopsBefore - 1) % SCOOPS_PER_CONE === 0;
  const lostConeIndex = lostCone ? Math.floor((scoopsBefore - 1) / SCOOPS_PER_CONE) : null;
  if (lostCone) showSadConeForThreeSeconds(item, lostConeIndex);
  const complete = [...letters].every(character => item.guessed.includes(character));
  if (complete || item.misses >= letters.length) {
    state.answered = true;
    if (complete && item.misses === 0) state.score++;
    renderHangman();
    els.score.textContent = state.score;
    els.feedback.className = complete ? "feedback good" : "feedback try";
    els.feedback.innerHTML = `<button class="next-btn" id="nextBtn" aria-label="Next word">➜</button>`;
    speak(complete ? `Correct. ${item.vehicle.name}.` : item.vehicle.name);
    if (complete) { tone(523, 0, .16); tone(659, .16, .16); tone(784, .32, .28); }
    if (complete) { burstConfetti(); showHangmanWinSequence(item); }
    else showHangmanSadRain(item);
    document.getElementById("nextBtn").onclick = nextQuestion;
    return;
  }
  els.feedback.className = "feedback";
  els.feedback.textContent = "";
  if (correct) tone(523, 0, .16); else tone(180, 0, .18, "sine", .08);
  renderHangman();
}

function makeAnswer(label, icon, correct, explain, revealVehicle = false, imagePath = "") {
  const btn = document.createElement("button");
  btn.className = "answer-btn";
  btn.dataset.correct = correct ? "true" : "false";
  const vehicle = vehicles.find(candidate => candidate.name === label);
  const iconMarkup = imagePath || vehicle
    ? `<img class="answer-image-icon" src="${imagePath || vehicleEmojiPath(vehicle)}" alt="">`
    : icon;
  btn.innerHTML = `<span class="answer-icon">${iconMarkup}</span><span>${label}</span>`;
  btn.onclick = () => chooseAnswer(btn, correct, explain, revealVehicle);
  els.answers.appendChild(btn);
}

function chooseAnswer(btn, correct, explain, revealVehicle) {
  if (state.answered) return;
  if (!correct) {
    state.wrongThisRound = true;
    btn.classList.add("wrong");
    btn.disabled = true;
    els.feedback.className = "feedback";
    els.feedback.textContent = "";
    tone(180, 0, .18, "sine", .08);
    return;
  }
  state.answered = true;
  if (!state.wrongThisRound) state.score++;
  btn.classList.add("correct");
  [...els.answers.children].forEach(b => b.disabled = true);
  if (revealVehicle) {
    const current = state.questions[state.round];
    const correctVehicle = state.mode === "identify" ? current.vehicle : current;
    if (state.mode === "identify") {
      setVehiclePicture(correctVehicle);
      els.name.textContent = correctVehicle.name.toUpperCase();
    } else {
      setVehicle(correctVehicle, true);
    }
  }
  els.feedback.className = "feedback";
  els.feedback.innerHTML = `<button class="next-btn" id="nextBtn" aria-label="Next">➜</button>`;
  els.score.textContent = state.score;
  speak("Correct!");
  tone(523, 0, .16); tone(659, .16, .16); tone(784, .32, .28);
  document.getElementById("nextBtn").onclick = nextQuestion;
}

function nextQuestion() {
  if (state.round >= state.questions.length - 1) return finishGame();
  state.round++;
  renderQuestion();
}

function currentPrompt() {
  if (state.mode === "safety") return state.questions[state.round].q;
  if (state.mode === "identify") {
    const item = state.questions[state.round];
    return identifyQuestion(item.choices);
  }
  if (state.mode === "hangman") return "";
  const v = state.questions[state.round];
  if (state.mode === "learn") return `This is a ${v.name}.`;
  if (state.mode === "sort") return `Where does the ${v.name} travel? Land, water, or air?`;
  return "Listen carefully. Which vehicle makes this sound?";
}

function speakCurrentPrompt() { speak(currentPrompt()); }

function playCurrentAudio() {
  if (state.mode === "sound") {
    speak("Listen carefully.");
    setTimeout(() => playVehicleSound(els.stage.dataset.sound), 700);
  } else {
    speakCurrentPrompt();
    if (state.mode !== "safety" && state.mode !== "learn") setTimeout(() => playVehicleSound(els.stage.dataset.sound), 650);
  }
}

function finishGame() {
  const total = state.questions.length;
  els.progress.style.width = "100%";
  els.finalScore.textContent = state.score;
  els.totalQuestions.textContent = total;
  const ratio = state.score / total;
  els.stars.textContent = ratio >= .85 ? "⭐⭐⭐" : ratio >= .55 ? "⭐⭐" : "⭐";
  els.resultMessage.textContent = state.mode === "safety" ? "You made safe travel choices!" : state.mode === "sort" ? "You know where vehicles travel!" : state.mode === "sound" ? "Your listening ears worked hard!" : state.mode === "identify" ? "You identified all the transportation pictures!" : state.mode === "hangman" ? "You built transport words before the ice cream melted!" : `You reviewed all ${vehicles.length} transportation words!`;
  showScreen("results");
  speak(`Round complete! You got ${state.score} out of ${total}.`);
  burstConfetti();
}

function burstConfetti() {
  els.confetti.innerHTML = "";
  const colors = ["#ffd54a", "#ef5b5b", "#37b56c", "#52bff2", "#8b65d8"];
  for (let i = 0; i < 55; i++) {
    const piece = document.createElement("i");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty("--drift", `${Math.random() * 220 - 110}px`);
    piece.style.animationDelay = `${Math.random() * .55}s`;
    els.confetti.appendChild(piece);
  }
  setTimeout(() => els.confetti.innerHTML = "", 2500);
}

function goHome() {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  if (activeClip) activeClip.pause();
  showScreen("home");
}

document.querySelectorAll(".mode-card").forEach(btn => btn.addEventListener("click", () => startGame(btn.dataset.mode)));
document.getElementById("homeBtn").addEventListener("click", goHome);
document.getElementById("backMenuBtn").addEventListener("click", goHome);
document.getElementById("chooseGameBtn").addEventListener("click", goHome);
document.getElementById("playAgainBtn").addEventListener("click", () => startGame(state.mode));
els.listen.addEventListener("click", playCurrentAudio);
els.emojiToggle.addEventListener("click", () => {
  state.identifyEmojis = !state.identifyEmojis;
  document.getElementById("gameCard").classList.toggle("hide-answer-emojis", !state.identifyEmojis);
  els.emojiToggle.textContent = state.identifyEmojis ? "🙈" : "🖼️";
  els.emojiToggle.title = state.identifyEmojis ? "Hide answer pictures" : "Show answer pictures";
  els.emojiToggle.setAttribute("aria-label", els.emojiToggle.title);
});

els.sound.addEventListener("click", () => {
  state.muted = !state.muted;
  els.sound.textContent = state.muted ? "🔇" : "🔊";
  els.sound.title = state.muted ? "Sound off (M)" : "Sound on (M)";
  els.sound.setAttribute("aria-label", state.muted ? "Turn sound on" : "Turn sound off");
  if (state.muted && "speechSynthesis" in window) speechSynthesis.cancel();
  if (state.muted && activeClip) activeClip.pause();
});

document.getElementById("fullscreenBtn").addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch (_) {}
});

document.addEventListener("keydown", e => {
  const active = screens.game.classList.contains("active");
  if (e.key.toLowerCase() === "m") els.sound.click();
  if (e.key.toLowerCase() === "f") document.getElementById("fullscreenBtn").click();
  if (e.key === "Escape" && active && !document.fullscreenElement) goHome();
  if (!active) return;
  if (state.mode === "hangman" && /^[a-z]$/i.test(e.key)) {
    e.preventDefault();
    chooseHangmanLetter(e.key.toLowerCase());
    return;
  }
  if (e.code === "Space") { e.preventDefault(); playCurrentAudio(); }
  if (["1", "2", "3"].includes(e.key)) {
    const target = els.answers.children[Number(e.key) - 1];
    if (target && !target.disabled) target.click();
  }
  if (e.key === "Enter") {
    const next = document.getElementById("nextBtn");
    if (next) next.click();
  }
});

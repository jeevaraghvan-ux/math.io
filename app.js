/**
 * math.io — 5th Grade Math Notes Application
 * made with love from Jeeva R.
 * 
 * Features:
 * - 3D Coverflow Carousel & Glassmorphism Table View
 * - In-depth 5 Properties of Multiplication + Properties of Division
 * - Interactive Math Visualizers (Array Flip, Area Model, Regrouping)
 * - Custom Math Notes Storage (Persistent LocalStorage CRUD)
 * - Animated Cyberpunk/Neon Loading Screen with Replay
 * - Web Audio API synthesized sound effects
 * - Confetti celebration particle engine
 */

// ================= INITIAL MATH NOTES DATABASE =================
const DEFAULT_MATH_TOPICS = [
  {
    id: "prop-mult",
    title: "PROPERTIES OF MULTIPLICATION",
    category: "multiplication",
    color: "blue",
    grade: "5th Grade",
    badge: "5 Essential Laws",
    coreFormula: "a × b = b × a  •  a × (b + c) = ab + ac",
    description: "The 5 foundational multiplication properties every 5th grader must master for mental math, algebra, and multi-digit mastery.",
    properties: [
      {
        num: 1,
        name: "Commutative Property of Multiplication",
        formula: "a × b = b × a",
        explanation: "The order of factors does not change the product. You can flip-flop the numbers in any order and the answer stays exactly the same!",
        example: "9 × 7 = 63  and  7 × 9 = 63",
        trick: "Memory Trick: 'Commute' means to travel or change places (like commuting to school)!",
        gradeTip: "5th Grade Application: Use when multiplying larger numbers like 4 × 29 × 25 → rearrange to (4 × 25) × 29 = 100 × 29 = 2,900!"
      },
      {
        num: 2,
        name: "Associative Property of Multiplication",
        formula: "(a × b) × c = a × (b × c)",
        explanation: "The way factors are grouped inside parentheses does not change the product. You can group numbers to make friendly tens and hundreds!",
        example: "(6 × 5) × 4 = 30 × 4 = 120  AND  6 × (5 × 4) = 6 × 20 = 120",
        trick: "Memory Trick: 'Associate' means who you hang out with in your friend group!",
        gradeTip: "5th Grade Application: Group factors to make friendly benchmark numbers (e.g. 5 × 2 = 10 or 25 × 4 = 100)."
      },
      {
        num: 3,
        name: "Distributive Property of Multiplication",
        formula: "a × (b + c) = (a × b) + (a × c)",
        explanation: "Multiplying a sum by a number is the same as multiplying each addend separately and adding their products together. This is the superpower behind the Area Model!",
        example: "7 × 48 = 7 × (40 + 8) = (7 × 40) + (7 × 8) = 280 + 56 = 336",
        trick: "Memory Trick: 'Distribute' means passing out test papers or candies to everyone inside the room!",
        gradeTip: "5th Grade Application: Essential for multi-digit multiplication and breaking apart tricky numbers mentally."
      },
      {
        num: 4,
        name: "Identity Property of Multiplication",
        formula: "a × 1 = a",
        explanation: "The product of any number and 1 is that number itself. Multiplying by 1 never changes a number's identity!",
        example: "8,495 × 1 = 8,495  and  1 × 0.75 = 0.75",
        trick: "Memory Trick: Looking in a mirror! When any number looks at '1', it sees its own exact identity.",
        gradeTip: "5th Grade Application: Crucial when finding equivalent fractions (multiplying top & bottom by 3/3 is just multiplying by 1!)."
      },
      {
        num: 5,
        name: "Zero Property of Multiplication",
        formula: "a × 0 = 0",
        explanation: "The product of any number and zero is ALWAYS zero. No matter how huge the number is, zero wipes it out!",
        example: "98,765,432 × 0 = 0",
        trick: "Memory Trick: Zero is a cosmic black hole — anything that touches it gets pulled down to 0!",
        gradeTip: "5th Grade Application: Watch out for order of operations questions with a × 0 at the end!"
      }
    ],
    interactiveType: "multiplication",
    quiz: [
      {
        q: "Which property is demonstrated by: 15 × (20 + 4) = (15 × 20) + (15 × 4)?",
        options: ["Commutative Property", "Distributive Property", "Associative Property", "Identity Property"],
        ans: 1,
        why: "Distributive property distributes 15 to both 20 and 4!"
      },
      {
        q: "Which property allows you to rearrange: 25 × 37 × 4 into (25 × 4) × 37?",
        options: ["Commutative & Associative", "Zero Property", "Identity Property", "Division Law"],
        ans: 0,
        why: "Commutative changes the order, and Associative regroups them!"
      },
      {
        q: "What is 4,921 × 1, and which property proves it?",
        options: ["0 (Zero Property)", "4,921 (Identity Property)", "1 (One Property)", "4,921 (Commutative)"],
        ans: 1,
        why: "Identity Property of Multiplication states a × 1 = a."
      }
    ]
  },
  {
    id: "prop-div",
    title: "PROPERTIES OF DIVISION",
    category: "division",
    color: "purple",
    grade: "5th Grade",
    badge: "Division Truths",
    coreFormula: "a ÷ 1 = a  •  a ÷ a = 1  •  0 ÷ a = 0  •  a ÷ 0 = Undefined",
    description: "The core mathematical rules of division, special cases with 0 and 1, and why division is NOT commutative or associative.",
    properties: [
      {
        num: 1,
        name: "Identity Property of Division",
        formula: "a ÷ 1 = a",
        explanation: "Any number divided by 1 is equal to the number itself. If you share 42 stickers with 1 person, that person gets all 42 stickers!",
        example: "350 ÷ 1 = 350",
        trick: "Memory Trick: Dividing by 1 leaves the number untouched.",
        gradeTip: "Useful when simplifying fractions with denominator 1 (like 9/1 = 9)."
      },
      {
        num: 2,
        name: "Number Divided by Itself Property",
        formula: "a ÷ a = 1  (where a ≠ 0)",
        explanation: "Any non-zero number divided by itself equals 1. If 28 students share 28 slices of pizza, each student gets exactly 1 slice!",
        example: "75 ÷ 75 = 1  and  0.5 ÷ 0.5 = 1",
        trick: "Memory Trick: Equal numerator and denominator always equal one whole!",
        gradeTip: "Fundamental in fraction reduction: 8/8 = 1, 100/100 = 1."
      },
      {
        num: 3,
        name: "Zero Divided by a Number Property",
        formula: "0 ÷ a = 0  (where a ≠ 0)",
        explanation: "Zero divided by any non-zero number is always zero. If you have 0 cookies to share among 8 friends, everyone gets 0 cookies.",
        example: "0 ÷ 14 = 0  and  0 ÷ 2,500 = 0",
        trick: "Memory Trick: If you start with nothing, nobody gets anything!",
        gradeTip: "Remember: 0 on top of a fraction is always 0 (0/15 = 0)."
      },
      {
        num: 4,
        name: "Division by Zero is UNDEFINED",
        formula: "a ÷ 0 = Undefined (Impossible!)",
        explanation: "You CANNOT divide any number by zero! It is mathematically undefined and impossible. You cannot split 12 items into 0 groups.",
        example: "12 ÷ 0 = ERROR / UNDEFINED",
        trick: "Memory Trick: 'NO!' rule → N/O = NO! (Number over 0 is No-No!) vs O/K = 0/K is OK (= 0).",
        gradeTip: "Never allow a denominator in a 5th grade fraction to be 0!"
      },
      {
        num: 5,
        name: "Division is NOT Commutative or Associative",
        formula: "a ÷ b ≠ b ÷ a   and   (a ÷ b) ÷ c ≠ a ÷ (b ÷ c)",
        explanation: "Unlike multiplication, order and grouping MATTER in division! Changing the order completely alters the answer.",
        example: "20 ÷ 4 = 5, but 4 ÷ 20 = 0.2 (Not equal!)\n(24 ÷ 4) ÷ 2 = 6 ÷ 2 = 3, but 24 ÷ (4 ÷ 2) = 24 ÷ 2 = 12!",
        trick: "Memory Trick: Always work division from LEFT to RIGHT following PEMDAS!",
        gradeTip: "5th Grade Alert: When evaluating numerical expressions, strictly evaluate division in left-to-right order."
      }
    ],
    interactiveType: "division",
    quiz: [
      {
        q: "What is 0 ÷ 18?",
        options: ["18", "0", "Undefined", "1"],
        ans: 1,
        why: "0 divided by any non-zero number is always 0!"
      },
      {
        q: "What is 54 ÷ 0?",
        options: ["0", "54", "Undefined / Impossible", "1"],
        ans: 2,
        why: "Dividing by zero is mathematically undefined!"
      },
      {
        q: "Why is 16 ÷ 4 not equal to 4 ÷ 16?",
        options: ["Division is not Commutative", "Identity Property", "Zero Property", "Associative Property"],
        ans: 0,
        why: "Commutative property does NOT work for division. Order matters!"
      }
    ]
  },
  {
    id: "prop-pemdas",
    title: "ORDER OF OPERATIONS",
    category: "custom",
    color: "cyan",
    grade: "5th Grade",
    badge: "PEMDAS Rules",
    coreFormula: "Parentheses → Exponents → Multiply/Divide → Add/Subtract",
    description: "The official math rulebook for solving problems with more than one step. Without PEMDAS, everyone would get a different answer!",
    properties: [
      {
        num: 1,
        name: "P: Parentheses (Groupings)",
        formula: "( 5 + 3 ) × 2",
        explanation: "Always solve what is inside the parentheses first! It's the VIP section of the math problem.",
        example: "(5 + 3) × 2 = 8 × 2 = 16",
        trick: "Memory Trick: 'P' is for 'Please let me go first!'",
        gradeTip: "Sometimes you see brackets [ ] or braces { }. Always start from the inside out!"
      },
      {
        num: 2,
        name: "E: Exponents (Powers)",
        formula: "4² = 4 × 4",
        explanation: "Next, solve the tiny numbers floating up high! In 5th grade, you'll mostly see powers of 10, like 10² or 10³.",
        example: "3 × 10² = 3 × 100 = 300",
        trick: "Memory Trick: The exponent tells the big number how many times to multiply itself.",
        gradeTip: "Careful: 4² means 4 × 4, NOT 4 × 2!"
      },
      {
        num: 3,
        name: "M & D: Multiply and Divide",
        formula: "× and ÷ (Left to Right)",
        explanation: "Multiplication and Division are on the SAME team! You just solve them reading from left to right, like a book.",
        example: "20 ÷ 4 × 2 = 5 × 2 = 10",
        trick: "Memory Trick: Neither is bossier than the other. Just read left to right!",
        gradeTip: "Don't always multiply before you divide. If division is first on the left, do it first!"
      },
      {
        num: 4,
        name: "A & S: Add and Subtract",
        formula: "+ and - (Left to Right)",
        explanation: "Addition and Subtraction are also on the SAME team! They are the final steps. Just read left to right.",
        example: "10 - 3 + 2 = 7 + 2 = 9",
        trick: "Memory Trick: Adding and subtracting clean up the rest of the problem.",
        gradeTip: "Don't always add before subtracting. Left to right!"
      }
    ],
    interactiveType: "custom",
    quiz: [
      {
        q: "What do you solve first in: 10 + (3 × 4)?",
        options: ["10 + 3", "3 × 4", "10 + 4", "It doesn't matter"],
        ans: 1,
        why: "Parentheses always go first!"
      },
      {
        q: "How do you solve: 12 ÷ 3 × 2?",
        options: ["Divide first, then multiply", "Multiply first, then divide", "Do both at the same time", "Skip it"],
        ans: 0,
        why: "Multiply and Divide are on the same team, so go left to right!"
      }
    ]
  }
];

// ================= SOUND FX SYSTEM (WEB AUDIO API) =================
class SoundController {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      // Audio might be blocked by browser policy
    }
  }

  /* ASMR Buttery Smooth Slide Chime */
  playAsmrSlide() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Resonant soft wooden / glass slide chime
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(380, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.09);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);

      // Shimmering high harmonic
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(960, now);
      osc2.frequency.exponentialRampToValueAtTime(640, now + 0.05);
      gain2.gain.setValueAtTime(0.025, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now);
      osc2.stop(now + 0.05);
    } catch (e) {}
  }

  /* Tactile Mechanical Keypad Click */
  playKeypadTap() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(820, now);
      osc.frequency.exponentialRampToValueAtTime(1150, now + 0.035);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.035);
    } catch (e) {}
  }

  /* Heavy Vault Hydraulic Unlock Clunk & Chime */
  playVaultUnlock() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Heavy mechanical latch release
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(95, now);
      osc1.frequency.exponentialRampToValueAtTime(32, now + 0.28);
      gain1.gain.setValueAtTime(0.25, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.28);

      // Hydraulic steam / pressure release
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "sawtooth";
      osc2.frequency.setValueAtTime(360, now + 0.08);
      osc2.frequency.exponentialRampToValueAtTime(70, now + 0.42);
      gain2.gain.setValueAtTime(0.08, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.42);

      // Celestial triumph chord (D maj: D5, F#5, A5, D6)
      [587.33, 739.99, 880.0, 1174.66].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = f;
        gain.gain.setValueAtTime(0.05, now + 0.22 + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55 + idx * 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + 0.22 + idx * 0.06);
        osc.stop(now + 0.6 + idx * 0.06);
      });
    } catch (e) {}
  }

  /* Vault Access Denied Buzzer */
  playVaultError() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [135, 105].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        gain.gain.setValueAtTime(0.14, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.11);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.11);
      });
    } catch (e) {}
  }

  /* Warning redirection alert */
  playVaultRedirect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.16);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch (e) {}
  }

  playSwoosh() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(280, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {}
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.07, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.2);
      });
    } catch (e) {}
  }
}

const sounds = new SoundController();

// ================= CONFETTI CELEBRATION ENGINE =================
class ConfettiEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas ? canvas.getContext("2d") : null;
    this.particles = [];
    this.animating = false;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(x, y, count = 60) {
    if (!this.ctx) return;
    const colors = ["#d6ff38", "#ff2a85", "#00f0ff", "#9d4edd", "#ff6b35", "#ffffff"];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      this.particles.push({
        x: x || window.innerWidth / 2,
        y: y || window.innerHeight / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12,
        life: 1,
        decay: Math.random() * 0.02 + 0.015
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.loop();
    }
  }

  loop() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2; // gravity
      p.rotation += p.vRot;
      p.life -= p.decay;

      if (p.life <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = p.life;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.animating = false;
    }
  }
}

// ================= ADMIN SECURITY VAULT CONTROLLER =================
class VaultController {
  constructor(app) {
    this.app = app;
    this.code = "7453";
    this.currentPin = "";
    this.isUnlocked = false;
    this.openCreatorAfterUnlock = false;
    this.activeTab = "architect";

    // Dynamic concept squares list for Note Architect
    this.architectSquares = [];
    this.editingNoteId = null;
  }

  init() {
    this.initDefaultSquares();
    this.setupKeypad();
    this.setupVaultTriggers();
    this.setupAdminTabs();
    this.setupArchitectForm();
    this.setupAdminCommands();
  }

  initDefaultSquares() {
    this.architectSquares = [
      {
        name: "Property / Concept 1",
        formula: "a × b = b × a",
        explanation: "The foundational property or rule explaining how this math concept operates.",
        example: "Example: 9 × 7 = 63 and 7 × 9 = 63",
        trick: "Memory Trick: Flip-flop factors freely!"
      },
      {
        name: "Property / Concept 2",
        formula: "(a × b) × c = a × (b × c)",
        explanation: "How grouping factors or numbers together creates friendly benchmark products.",
        example: "Example: (5 × 2) × 8 = 10 × 8 = 80",
        trick: "5th Grade Tip: Group numbers that make friendly tens!"
      }
    ];
    this.renderSquares();
  }

  setupKeypad() {
    // Virtual keypad buttons
    document.querySelectorAll(".vault-keypad-grid .keypad-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const key = btn.dataset.key;
        if (key === "clear") {
          this.clearPin();
        } else if (key === "back") {
          this.deleteDigit();
        } else if (key !== undefined) {
          this.enterDigit(key);
        }
      });
    });

    // Physical Keyboard support when vault lock view is active
    window.addEventListener("keydown", (e) => {
      const modal = document.getElementById("vault-modal");
      if (!modal || modal.classList.contains("hidden")) return;

      const lockView = document.getElementById("vault-lock-view");
      if (lockView && !lockView.classList.contains("hidden")) {
        if (e.key >= "0" && e.key <= "9") {
          e.preventDefault();
          this.enterDigit(e.key);
        } else if (e.key === "Backspace") {
          e.preventDefault();
          this.deleteDigit();
        } else if (e.key === "Escape") {
          this.close();
        }
      } else {
        if (e.key === "Escape") {
          this.close();
        }
      }
    });
  }

  setupVaultTriggers() {
    // Floating Vault button at bottom corner
    const vaultBubble = document.getElementById("vault-bubble-btn");
    if (vaultBubble) {
      vaultBubble.addEventListener("click", () => {
        sounds.playClick();
        this.open("normal");
      });
    }

    // Modal Close buttons
    document.getElementById("vault-lock-close")?.addEventListener("click", () => this.close());
    document.getElementById("vault-admin-close")?.addEventListener("click", () => this.close());

    // Lock Vault button
    document.getElementById("btn-vault-relock")?.addEventListener("click", () => {
      this.lockVault();
    });
  }

  requestCreateNote() {
    // STRICT RULE: DO NOT ALLOW THEM TO ADD NOTES UNLESS THEY GO INTO THE VAULT
    if (this.isUnlocked) {
      this.open("normal");
      this.switchAdminTab("architect");
      return;
    }

    // Redirect user to the Vault with clear security notification
    this.open("redirect");
  }

  open(mode = "normal") {
    const modal = document.getElementById("vault-modal");
    const warning = document.getElementById("vault-redirect-warning");
    const lockView = document.getElementById("vault-lock-view");
    const adminView = document.getElementById("vault-admin-view");

    if (mode === "redirect") {
      this.openCreatorAfterUnlock = true;
      if (warning) warning.classList.remove("hidden");
      sounds.playVaultRedirect();
    } else {
      this.openCreatorAfterUnlock = false;
      if (warning) warning.classList.add("hidden");
    }

    if (this.isUnlocked) {
      if (lockView) lockView.classList.add("hidden");
      if (adminView) adminView.classList.remove("hidden");
      this.updateManagerTable();
      this.updateTelemetry();
      if (this.openCreatorAfterUnlock) {
        this.switchAdminTab("architect");
      }
    } else {
      if (lockView) lockView.classList.remove("hidden");
      if (adminView) adminView.classList.add("hidden");
      this.clearPin();
      const safeDoor = document.getElementById("vault-safe-door");
      if (safeDoor) safeDoor.classList.remove("unlocking");
    }

    if (modal) modal.classList.remove("hidden");
  }

  close() {
    const modal = document.getElementById("vault-modal");
    if (modal) modal.classList.add("hidden");
  }

  enterDigit(d) {
    if (this.isUnlocked || this.currentPin.length >= 4) return;
    this.currentPin += d;
    sounds.playKeypadTap();
    this.updatePinDisplay();

    if (this.currentPin.length === 4) {
      setTimeout(() => this.verifyPin(), 140);
    }
  }

  deleteDigit() {
    if (this.currentPin.length === 0) return;
    this.currentPin = this.currentPin.slice(0, -1);
    sounds.playKeypadTap();
    this.updatePinDisplay();
  }

  clearPin() {
    this.currentPin = "";
    this.updatePinDisplay();
    const fb = document.getElementById("vault-pin-feedback");
    if (fb) {
      fb.textContent = "ENTER 4-DIGIT CODE";
      fb.className = "vault-pin-feedback";
    }
  }

  updatePinDisplay() {
    const slots = document.querySelectorAll(".vault-pin-display .pin-slot");
    slots.forEach((slot, idx) => {
      slot.classList.toggle("filled", idx < this.currentPin.length);
    });
  }

  verifyPin() {
    const fb = document.getElementById("vault-pin-feedback");
    const pinDisplay = document.getElementById("vault-pin-display");
    const safeDoor = document.getElementById("vault-safe-door");

    if (this.currentPin === this.code) {
      // PIN ACCEPTED - VAULT UNLOCKED
      this.isUnlocked = true;
      if (fb) {
        fb.textContent = "ACCESS GRANTED // WELCOME JEEVA R.";
        fb.className = "vault-pin-feedback success";
      }
      if (safeDoor) safeDoor.classList.add("unlocking");

      sounds.playVaultUnlock();
      this.app.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 75);

      setTimeout(() => {
        const lockView = document.getElementById("vault-lock-view");
        const adminView = document.getElementById("vault-admin-view");
        if (lockView) lockView.classList.add("hidden");
        if (adminView) adminView.classList.remove("hidden");

        this.updateManagerTable();
        this.updateTelemetry();

        if (this.openCreatorAfterUnlock) {
          this.switchAdminTab("architect");
          const titleInput = document.getElementById("vnote-title");
          if (titleInput) titleInput.focus();
        }
      }, 750);
    } else {
      // CODE DENIED
      if (fb) {
        fb.textContent = "⚠️ ACCESS DENIED // INVALID CODE";
        fb.className = "vault-pin-feedback error";
      }
      if (pinDisplay) pinDisplay.classList.add("shake");
      sounds.playVaultError();

      setTimeout(() => {
        this.clearPin();
        if (pinDisplay) pinDisplay.classList.remove("shake");
      }, 550);
    }
  }

  lockVault() {
    this.isUnlocked = false;
    this.currentPin = "";
    this.openCreatorAfterUnlock = false;
    sounds.playClick();

    const lockView = document.getElementById("vault-lock-view");
    const adminView = document.getElementById("vault-admin-view");
    const safeDoor = document.getElementById("vault-safe-door");
    if (lockView) lockView.classList.remove("hidden");
    if (adminView) adminView.classList.add("hidden");
    if (safeDoor) safeDoor.classList.remove("unlocking");

    this.clearPin();
  }

  setupAdminTabs() {
    const tabs = ["architect", "commands", "manager", "telemetry"];
    tabs.forEach((tab) => {
      const btn = document.getElementById(`admin-tab-${tab}`);
      if (btn) {
        btn.addEventListener("click", () => {
          sounds.playClick();
          this.switchAdminTab(tab);
        });
      }
    });
  }

  switchAdminTab(tabName) {
    this.activeTab = tabName;
    const tabs = ["architect", "commands", "manager", "telemetry"];
    tabs.forEach((t) => {
      const btn = document.getElementById(`admin-tab-${t}`);
      const panel = document.getElementById(`panel-admin-${t}`);
      if (btn) btn.classList.toggle("active", t === tabName);
      if (panel) panel.classList.toggle("hidden", t !== tabName);
    });

    if (tabName === "manager") this.updateManagerTable();
    if (tabName === "telemetry") this.updateTelemetry();
  }

  // ================= NOTE ARCHITECT: DYNAMIC SQUARES BUILDER =================
  setupArchitectForm() {
    const btnAdd = document.getElementById("btn-add-square");
    const btnAddBottom = document.getElementById("btn-add-square-bottom");

    if (btnAdd) {
      btnAdd.addEventListener("click", () => this.addSquare());
    }
    if (btnAddBottom) {
      btnAddBottom.addEventListener("click", () => this.addSquare());
    }

    // Templates
    document.getElementById("btn-template-math-props")?.addEventListener("click", () => {
      this.loadTemplate("props");
    });

    document.getElementById("btn-template-steps")?.addEventListener("click", () => {
      this.loadTemplate("steps");
    });

    // Clear form
    document.getElementById("btn-clear-architect")?.addEventListener("click", () => {
      if (confirm("Reset the Note Architect form?")) {
        const form = document.getElementById("vault-note-form");
        if (form) form.reset();
        this.initDefaultSquares();
      }
    });

    // Save Note
    const form = document.getElementById("vault-note-form");
    if (form) {
      form.addEventListener("submit", (e) => this.handleSaveNote(e));
    }
  }

  renderSquares() {
    const container = document.getElementById("vault-squares-list");
    const countBadge = document.getElementById("squares-count-badge");
    if (!container) return;

    container.innerHTML = "";
    if (countBadge) {
      countBadge.textContent = `${this.architectSquares.length} Square${this.architectSquares.length === 1 ? "" : "s"} Configured`;
    }

    this.architectSquares.forEach((sq, idx) => {
      const card = document.createElement("div");
      card.className = "square-builder-card";
      card.dataset.index = idx;

      card.innerHTML = `
        <div class="square-card-top-bar">
          <div class="square-index-tag">CONCEPT SQUARE #${idx + 1}</div>
          ${this.architectSquares.length > 1 ? `<button type="button" class="btn-remove-square" data-idx="${idx}">&times; Remove Square</button>` : ""}
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Square / Property Title <span class="req">*</span></label>
            <input type="text" class="sq-name-input" required placeholder="e.g. Commutative Property of Multiplication" value="${this.escapeHtml(sq.name || "")}" />
          </div>
          <div class="form-group">
            <label>Rule / Formula</label>
            <input type="text" class="sq-formula-input" placeholder="e.g. a × b = b × a" value="${this.escapeHtml(sq.formula || "")}" />
          </div>
        </div>
        <div class="form-group">
          <label>Explanation & Concept Notes <span class="req">*</span></label>
          <textarea class="sq-desc-input" rows="2" required placeholder="Explain this property or math rule in clear terms...">${this.escapeHtml(sq.explanation || "")}</textarea>
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Worked Example / Demonstration</label>
            <input type="text" class="sq-example-input" placeholder="e.g. 9 × 7 = 63 and 7 × 9 = 63" value="${this.escapeHtml(sq.example || "")}" />
          </div>
          <div class="form-group">
            <label>Memory Trick or Teacher Tip (Optional)</label>
            <input type="text" class="sq-trick-input" placeholder="e.g. 'Commute' means to travel / flip places!" value="${this.escapeHtml(sq.trick || "")}" />
          </div>
        </div>
      `;

      card.querySelector(".sq-name-input").addEventListener("input", (e) => {
        this.architectSquares[idx].name = e.target.value;
      });
      card.querySelector(".sq-formula-input").addEventListener("input", (e) => {
        this.architectSquares[idx].formula = e.target.value;
      });
      card.querySelector(".sq-desc-input").addEventListener("input", (e) => {
        this.architectSquares[idx].explanation = e.target.value;
      });
      card.querySelector(".sq-example-input").addEventListener("input", (e) => {
        this.architectSquares[idx].example = e.target.value;
      });
      card.querySelector(".sq-trick-input").addEventListener("input", (e) => {
        this.architectSquares[idx].trick = e.target.value;
      });

      const removeBtn = card.querySelector(".btn-remove-square");
      if (removeBtn) {
        removeBtn.addEventListener("click", () => {
          this.removeSquare(idx);
        });
      }

      container.appendChild(card);
    });
  }

  escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  addSquare(data = {}) {
    const count = this.architectSquares.length + 1;
    this.architectSquares.push({
      name: data.name || `Concept Square #${count}`,
      formula: data.formula || "",
      explanation: data.explanation || "",
      example: data.example || "",
      trick: data.trick || ""
    });
    sounds.playClick();
    this.renderSquares();

    const list = document.getElementById("vault-squares-list");
    if (list && list.lastElementChild) {
      list.lastElementChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  removeSquare(idx) {
    if (this.architectSquares.length <= 1) {
      alert("A math unit must have at least 1 square/property!");
      return;
    }
    this.architectSquares.splice(idx, 1);
    sounds.playClick();
    this.renderSquares();
  }

  loadTemplate(type) {
    if (type === "props") {
      document.getElementById("vnote-title").value = "PROPERTIES OF MULTIPLICATION & FACTORS";
      document.getElementById("vnote-formula").value = "a × b = b × a  •  a × (b + c) = ab + ac";
      document.getElementById("vnote-desc").value = "The foundational algebraic and arithmetic laws governing multiplication and factor decomposition.";
      this.architectSquares = [
        {
          name: "Commutative Property",
          formula: "a × b = b × a",
          explanation: "Order of factors does not change the product. Numbers can flip-flop freely!",
          example: "8 × 9 = 72 and 9 × 8 = 72",
          trick: "Commute = Travel / change positions"
        },
        {
          name: "Associative Property",
          formula: "(a × b) × c = a × (b × c)",
          explanation: "Grouping factors in parentheses does not change the product.",
          example: "(4 × 5) × 6 = 20 × 6 = 120",
          trick: "Associate = Who you group with in your squad"
        },
        {
          name: "Distributive Property",
          formula: "a × (b + c) = ab + ac",
          explanation: "Multiply the outside factor by each addend inside parentheses and add them.",
          example: "6 × 47 = 6 × (40 + 7) = 240 + 42 = 282",
          trick: "Distribute = Handing out worksheets to everyone"
        },
        {
          name: "Identity Property",
          formula: "a × 1 = a",
          explanation: "Any number multiplied by 1 retains its exact identity.",
          example: "4,250 × 1 = 4,250",
          trick: "Mirror property: seeing yourself"
        },
        {
          name: "Zero Property",
          formula: "a × 0 = 0",
          explanation: "Any number multiplied by zero is always zero.",
          example: "999,999 × 0 = 0",
          trick: "Zero is a cosmic black hole!"
        }
      ];
    } else {
      document.getElementById("vnote-title").value = "MULTI-DIGIT MULTIPLICATION: 4-STEP ALGORITHM";
      document.getElementById("vnote-formula").value = "Estimate → Multiply Ones → Multiply Tens → Combine";
      document.getElementById("vnote-desc").value = "The standard 5th grade algorithm for multiplying 2-digit and 3-digit factors accurately.";
      this.architectSquares = [
        {
          name: "Step 1: Estimate the Product",
          formula: "Round to nearest 10 or benchmark",
          explanation: "Always estimate first so you know if your final calculation is reasonable.",
          example: "38 × 52 ≈ 40 × 50 = 2,000",
          trick: "Keeps you safe from wild decimal or place value errors!"
        },
        {
          name: "Step 2: Multiply by the Ones Digit",
          formula: "Factor 1 × Ones Digit",
          explanation: "Multiply the top multi-digit number by the bottom number's ones digit.",
          example: "45 × 3 = 135",
          trick: "Remember to carry regrouped tens to the next column"
        },
        {
          name: "Step 3: Insert Placeholder Zero & Multiply Tens",
          formula: "Insert '0' in ones column",
          explanation: "Because you are multiplying by tens, you must put a zero in the ones place before multiplying!",
          example: "45 × 20 = 900",
          trick: "The Hero Zero holds the place value line!"
        },
        {
          name: "Step 4: Add Partial Products",
          formula: "Partial Product 1 + Partial Product 2",
          explanation: "Add all partial products together carefully by place value to find the final product.",
          example: "135 + 900 = 1,035",
          trick: "Compare with Step 1 estimate to verify accuracy!"
        }
      ];
    }
    sounds.playSuccess();
    this.renderSquares();
  }

  handleSaveNote(e) {
    e.preventDefault();
    const title = document.getElementById("vnote-title").value.trim();
    const category = document.getElementById("vnote-category").value;
    const color = document.getElementById("vnote-color").value;
    const formula = document.getElementById("vnote-formula").value.trim() || "5th Grade Core Principle";
    const desc = document.getElementById("vnote-desc").value.trim();
    let redirectUrl = document.getElementById("vnote-redirect")?.value.trim() || "";
    if (redirectUrl && !redirectUrl.startsWith("http://") && !redirectUrl.startsWith("https://")) {
      redirectUrl = "https://" + redirectUrl;
    }

    if (!title || !desc) {
      alert("Please fill in the unit title and description.");
      return;
    }

    if (this.architectSquares.length === 0) {
      alert("Please add at least one concept square to your unit!");
      return;
    }

    // Build structured properties from squares
    const properties = this.architectSquares.map((sq, idx) => ({
      num: idx + 1,
      name: sq.name || `Square #${idx + 1}`,
      formula: sq.formula || formula,
      explanation: sq.explanation || desc,
      example: sq.example || "Demonstrated in Jeeva's notebook.",
      trick: sq.trick || "5th Grade Concept Note"
    }));

    const newNote = {
      id: this.editingNoteId ? this.editingNoteId : `custom-${Date.now()}`,
      title: title.toUpperCase(),
      category: category,
      color: color,
      grade: "5th Grade",
      badge: `${properties.length} Concept Squares`,
      coreFormula: formula,
      description: desc,
      redirectUrl: redirectUrl,
      isCustom: true,
      properties: properties
    };

    if (this.editingNoteId) {
      const idx = this.app.notes.findIndex(n => n.id === this.editingNoteId);
      if (idx !== -1) {
        this.app.notes[idx] = newNote;
      }
      this.editingNoteId = null;
      // Reset button
      const saveBtn = document.getElementById("btn-save-vault-note");
      if (saveBtn) {
        saveBtn.innerHTML = "<span>✦ Save Unit & Squares to math.io</span>";
        saveBtn.style.background = "";
      }
    } else {
      this.app.notes.push(newNote);
    }
    this.app.saveNotes();
    this.app.render();

    // Close vault and celebrate
    this.close();
    sounds.playSuccess();
    this.app.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 80);

    // Navigate carousel to the newly created note
    const filtered = this.app.getFilteredNotes();
    const newIdx = filtered.findIndex((n) => n.id === newNote.id);
    if (newIdx !== -1) {
      this.app.carouselIndex = newIdx;
      this.app.updateCarouselPositions();
    }
  }

  // ================= ADMIN WEB COMMANDS SUITE =================
  setupAdminCommands() {
    // Preset: Decimals
    document.getElementById("cmd-btn-preset-decimals")?.addEventListener("click", () => {
      const decimalsNote = {
        id: `custom-decimals-${Date.now()}`,
        title: "MULTIPLYING DECIMALS BY POWERS OF 10",
        category: "multiplication",
        color: "cyan",
        grade: "5th Grade",
        badge: "3 Concept Squares",
        coreFormula: "Shift decimal point right by the number of zeros (or exponent power)",
        description: "How powers of ten shift digits to higher place value positions rapidly without standard long multiplication.",
        isCustom: true,
        properties: [
          {
            num: 1,
            name: "Multiplying by 10 (10¹)",
            formula: "3.45 × 10 = 34.5",
            explanation: "Shifts every digit 1 place value to the left (decimal point moves 1 space right).",
            example: "0.82 × 10 = 8.2  and  7.1 × 10 = 71",
            trick: "1 zero in 10 → 1 jump to the right!"
          },
          {
            num: 2,
            name: "Multiplying by 100 (10²)",
            formula: "3.45 × 100 = 345",
            explanation: "Shifts every digit 2 place values to the left (decimal point moves 2 spaces right).",
            example: "0.065 × 100 = 6.5  and  9.4 × 100 = 940 (annex a zero!)",
            trick: "2 zeros in 100 → 2 jumps to the right!"
          },
          {
            num: 3,
            name: "Multiplying by 1,000 (10³)",
            formula: "3.45 × 1,000 = 3,450",
            explanation: "Shifts digits 3 place values to the left. If you run out of digits, annex placeholder zeros.",
            example: "0.2 × 1,000 = 200",
            trick: "Exponent power 10³ = 3 hops right!"
          }
        ]
      };
      this.app.notes.push(decimalsNote);
      this.app.saveNotes();
      this.app.render();
      sounds.playSuccess();
      this.app.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 60);
      alert("🚀 Admin Command Executed: 5th Grade Decimal Unit Injected!");
      this.updateManagerTable();
      this.updateTelemetry();
    });

    // Preset: Area Model
    document.getElementById("cmd-btn-preset-area")?.addEventListener("click", () => {
      const areaNote = {
        id: `custom-area-${Date.now()}`,
        title: "AREA MODEL & PARTIAL PRODUCTS",
        category: "multiplication",
        color: "indigo",
        grade: "5th Grade",
        badge: "4 Concept Squares",
        coreFormula: "Area = Length × Width  •  (a + b) × (c + d) = ac + ad + bc + bd",
        description: "Visualizing 2-digit multiplication by partitioning rectangles into friendly expanded form boxes.",
        isCustom: true,
        properties: [
          {
            num: 1,
            name: "Decompose into Expanded Form",
            formula: "28 × 34 → (20 + 8) × (30 + 4)",
            explanation: "Break each factor into its tens and ones place before drawing the grid.",
            example: "28 = 20 + 8, and 34 = 30 + 4",
            trick: "Friendly round numbers are effortless to multiply mentally!"
          },
          {
            num: 2,
            name: "Multiply Grid Partitions (4 Boxes)",
            formula: "Box 1: 20×30=600  Box 2: 20×4=80  Box 3: 8×30=240  Box 4: 8×4=32",
            explanation: "Find the area of each individual sub-rectangle.",
            example: "Four distinct partial products are calculated.",
            trick: "Count the zeros: 20 × 30 = (2 × 3) with two zeros = 600!"
          },
          {
            num: 3,
            name: "Sum the 4 Partial Products",
            formula: "600 + 80 + 240 + 32 = 952",
            explanation: "Add all four partition areas together to calculate the complete rectangle's area.",
            example: "600 + 240 = 840; 840 + 80 = 920; 920 + 32 = 952",
            trick: "Always line up your columns neatly when adding!"
          },
          {
            num: 4,
            name: "Connection to Distributive Law",
            formula: "(20 + 8)(30 + 4) = 20(34) + 8(34)",
            explanation: "The area model is simply a visual picture of the Distributive Property in action!",
            example: "Proves geometric area matches algebraic laws.",
            trick: "Geometry and algebra are two sides of the same coin!"
          }
        ]
      };
      this.app.notes.push(areaNote);
      this.app.saveNotes();
      this.app.render();
      sounds.playSuccess();
      this.app.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 60);
      alert("📐 Admin Command Executed: Area Model Unit Injected!");
      this.updateManagerTable();
      this.updateTelemetry();
    });

    // Confetti
    document.getElementById("cmd-btn-confetti")?.addEventListener("click", () => {
      sounds.playSuccess();
      this.app.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 90);
    });

    // Toggle Sound
    document.getElementById("cmd-btn-toggle-sound")?.addEventListener("click", () => {
      sounds.enabled = !sounds.enabled;
      alert(`Sound effects are now ${sounds.enabled ? "ENABLED 🔊" : "MUTED 🔇"}`);
      const soundOn = document.getElementById("sound-icon-on");
      const soundOff = document.getElementById("sound-icon-off");
      if (soundOn && soundOff) {
        soundOn.classList.toggle("hidden", !sounds.enabled);
        soundOff.classList.toggle("hidden", sounds.enabled);
      }
    });

    // Export JSON
    document.getElementById("cmd-btn-export-json")?.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.app.notes, null, 2));
      const dlAnchor = document.createElement("a");
      dlAnchor.setAttribute("href", dataStr);
      dlAnchor.setAttribute("download", `mathio-backup-${Date.now()}.json`);
      dlAnchor.click();
      sounds.playClick();
    });

    // Import JSON
    const fileInput = document.getElementById("admin-file-import");
    document.getElementById("cmd-btn-import-json")?.addEventListener("click", () => {
      if (fileInput) fileInput.click();
    });

    if (fileInput) {
      fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const parsed = JSON.parse(event.target.result);
            if (Array.isArray(parsed)) {
              this.app.notes = parsed;
              this.app.saveNotes();
              this.app.render();
              sounds.playSuccess();
              alert(`Successfully imported ${parsed.length} units into math.io!`);
              this.updateManagerTable();
              this.updateTelemetry();
            } else {
              alert("Invalid JSON format: expected an array of math units.");
            }
          } catch (err) {
            alert("Error parsing JSON file: " + err.message);
          }
        };
        reader.readAsText(file);
      });
    }

    // Clear Custom Notes
    document.getElementById("cmd-btn-clear-custom")?.addEventListener("click", () => {
      if (!confirm("Are you sure you want to delete all custom notes? Curated topics will remain.")) return;
      this.app.notes = this.app.notes.filter((n) => !n.isCustom);
      this.app.saveNotes();
      this.app.render();
      sounds.playClick();
      alert("All custom notes cleared.");
      this.updateManagerTable();
      this.updateTelemetry();
    });

    // Reset DB to defaults
    document.getElementById("cmd-btn-reset-db")?.addEventListener("click", () => {
      if (!confirm("Reset database to factory original state? All custom notes will be erased.")) return;
      this.app.notes = [...DEFAULT_MATH_TOPICS];
      this.app.saveNotes();
      this.app.render();
      sounds.playSuccess();
      alert("Database reset to original 5th Grade units.");
      this.updateManagerTable();
      this.updateTelemetry();
    });
  }

  // ================= PANEL 3: DATABASE MANAGER =================
  updateManagerTable() {
    const tbody = document.getElementById("admin-manager-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    this.app.notes.forEach((topic) => {
      const tr = document.createElement("tr");
      const squaresCount = topic.properties ? topic.properties.length : 1;

      tr.innerHTML = `
        <td style="font-weight: 700; color: #fff;">${topic.title}</td>
        <td><span class="tbl-tag">${topic.category.toUpperCase()}</span></td>
        <td><span style="color: var(--neon-cyan); font-weight: 700;">${squaresCount} Squares</span></td>
        <td>${topic.isCustom ? '<span style="color: #a3e635;">Custom</span>' : '<span style="color: #c084fc;">Curated 5th Grade</span>'}</td>
        <td style="display: flex; gap: 8px;">
          <button class="tbl-btn tbl-btn-view btn-mgr-view" data-id="${topic.id}">Inspect</button>
          <button class="tbl-btn btn-mgr-edit" data-id="${topic.id}" style="background: rgba(48, 209, 88, 0.2); border-color: #30D158;">Edit</button>
          ${topic.isCustom ? `<button class="tbl-btn tbl-btn-del btn-mgr-del" data-id="${topic.id}">Delete</button>` : ""}
        </td>
      `;

      tbody.appendChild(tr);
    });

    tbody.querySelectorAll(".btn-mgr-view").forEach((btn) => {
      btn.addEventListener("click", () => {
        sounds.playClick();
        this.close();
        this.app.openNotesViewer(btn.dataset.id, "notes");
      });
    });

    tbody.querySelectorAll(".btn-mgr-edit").forEach((btn) => {
      btn.addEventListener("click", () => {
        sounds.playClick();
        this.editCustomNote(btn.dataset.id);
      });
    });

    tbody.querySelectorAll(".btn-mgr-del").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.app.deleteCustomNote(btn.dataset.id);
        this.updateManagerTable();
        this.updateTelemetry();
      });
    });
  }

  editCustomNote(id) {
    const note = this.app.notes.find(n => n.id === id);
    if (!note) return;

    this.editingNoteId = id;

    // Fill form
    document.getElementById("vnote-title").value = note.title;
    document.getElementById("vnote-category").value = note.category;
    document.getElementById("vnote-color").value = note.color;
    document.getElementById("vnote-formula").value = note.coreFormula;
    document.getElementById("vnote-desc").value = note.description;
    const redirectInput = document.getElementById("vnote-redirect");
    if (redirectInput) redirectInput.value = note.redirectUrl || "";

    // Fill squares
    if (note.properties && note.properties.length > 0) {
      this.architectSquares = note.properties.map(p => ({
        name: p.name,
        formula: p.formula,
        explanation: p.explanation,
        example: p.example,
        trick: p.trick
      }));
    } else {
      this.architectSquares = [];
    }
    this.renderSquares();

    // Switch to architect tab
    this.switchAdminTab("architect");
    
    // Change button text
    const saveBtn = document.getElementById("btn-save-vault-note");
    if (saveBtn) {
      saveBtn.innerHTML = "<span>✦ Update Unit & Squares</span>";
      saveBtn.style.background = "linear-gradient(135deg, #30D158, #34C759)";
    }
  }

  // ================= PANEL 4: SYSTEM TELEMETRY =================
  updateTelemetry() {
    const topEl = document.getElementById("telem-topics-count");
    const sqEl = document.getElementById("telem-squares-count");
    const storageEl = document.getElementById("telem-storage-kb");

    if (topEl) topEl.textContent = this.app.notes.length;

    let totalSquares = 0;
    this.app.notes.forEach((t) => {
      totalSquares += t.properties ? t.properties.length : 1;
    });
    if (sqEl) sqEl.textContent = totalSquares;

    const dataStr = localStorage.getItem("mathio_notes_v3") || "";
    const kb = (dataStr.length * 2) / 1024;
    if (storageEl) storageEl.textContent = `${kb.toFixed(2)} KB`;
  }
}

// ================= APPLICATION STATE & CONTROLLER =================
class MathIoApp {
  constructor() {
    this.notes = [];
    this.activeFilter = "all";
    this.searchQuery = "";
    this.activeView = "carousel"; // 'carousel' or 'table'
    this.carouselIndex = 0;
    this.confetti = null;
    this.currentModalTopic = null;
    this.vault = new VaultController(this);

    this.init();
  }

  init() {
    this.loadNotes();
    this.setupConfetti();
    this.setupLoadingScreen();
    this.setupCarouselTrack();
    this.setupCarouselDrag();
    this.setupTableView();
    this.vault.init();
    this.setupEventListeners();
    this.setupCloudSync();
  }

  // Persistent storage via localStorage
  loadNotes() {
    const saved = localStorage.getItem("mathio_notes_v3");
    if (saved) {
      try {
        this.notes = JSON.parse(saved);
      } catch (e) {
        this.notes = [...DEFAULT_MATH_TOPICS];
      }
    } else {
      // Migrate any user-created custom notes from previous version
      const oldSaved = localStorage.getItem("mathio_notes_v1");
      let customNotes = [];
      if (oldSaved) {
        try {
          const parsed = JSON.parse(oldSaved);
          customNotes = parsed.filter((n) => n.isCustom);
        } catch (e) {}
      }
      this.notes = [...DEFAULT_MATH_TOPICS, ...customNotes];
      this.saveNotes();
    }
  }

  saveNotes() {
    localStorage.setItem("mathio_notes_v3", JSON.stringify(this.notes));
  }

  setupCloudSync() {
    const cloudBtn = document.getElementById("btn-cloud-sync");
    if (!cloudBtn) return;
    cloudBtn.addEventListener("click", () => {
      cloudBtn.style.color = "var(--neon-blue)";
      cloudBtn.style.transform = "rotate(360deg)";
      cloudBtn.style.transition = "all 1s ease";
      
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.notes, null, 2));
      const downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "mathio-cloud-backup.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();

      alert("☁️ Notes Synced to Cloud Successfully! A backup file has been saved to your device.");
      
      setTimeout(() => {
        cloudBtn.style.transform = "none";
        cloudBtn.style.color = "";
      }, 1000);
    });
  }

  setupConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    this.confetti = new ConfettiEngine(canvas);
  }

  // ================= COOL HIGH-TECH LOADING SCREEN CONTROLLER =================
  setupLoadingScreen() {
    const loader = document.getElementById("loader-screen");
    const bar = document.getElementById("loader-bar");
    const pct = document.getElementById("loader-pct");
    const status = document.getElementById("loader-status");
    const symbolsContainer = document.getElementById("floating-symbols-container");
    const skipBtn = document.getElementById("loader-skip-btn");

    // Spawn 18 floating mathematical glyphs
    const glyphs = ["π", "×", "÷", "+", "−", "√", "∑", "∞", "≠", "%", "1/2", "x²", "a×b", "0/0", "9×9", "📐", "✦", "≈"];
    if (symbolsContainer) {
      symbolsContainer.innerHTML = "";
      glyphs.forEach((char) => {
        const span = document.createElement("span");
        span.className = "floating-math-symbol";
        span.textContent = char;
        span.style.left = `${Math.random() * 90 + 5}%`;
        span.style.top = `${Math.random() * 85 + 5}%`;
        span.style.animationDelay = `${Math.random() * 4}s`;
        span.style.animationDuration = `${Math.random() * 6 + 6}s`;
        symbolsContainer.appendChild(span);
      });
    }

    const messages = [
      "Calibrating 5th Grade Quantum Factors...",
      "Synchronizing Properties of Multiplication (5 Laws)...",
      "Testing Division by Zero Security Protocols...",
      "Arming Admin Security Vault [Restricted Access]...",
      "System Operational. Welcome Jeeva R."
    ];

    let progress = 0;
    let finished = false;

    const completeLoader = () => {
      if (finished) return;
      finished = true;
      progress = 100;
      if (bar) bar.style.width = "100%";
      if (pct) pct.textContent = "100%";
      if (status) status.innerHTML = `<span class="terminal-prefix">&gt;</span> System Operational. Welcome Jeeva R.`;
      sounds.playSuccess();
      setTimeout(() => {
        if (loader) loader.classList.add("fade-out");
      }, 350);
    };

    if (skipBtn) {
      skipBtn.addEventListener("click", () => {
        completeLoader();
      });
    }

    const interval = setInterval(() => {
      if (finished) {
        clearInterval(interval);
        return;
      }
      progress += Math.floor(Math.random() * 12) + 8;
      if (progress > 100) progress = 100;

      if (bar) bar.style.width = `${progress}%`;
      if (pct) pct.textContent = `${progress}%`;

      const msgIndex = Math.min(Math.floor((progress / 100) * messages.length), messages.length - 1);
      if (status) status.innerHTML = `<span class="terminal-prefix">&gt;</span> ${messages[msgIndex]}`;

      if (progress >= 100) {
        clearInterval(interval);
        completeLoader();
      }
    }, 80);
  }

  replayLoader() {
    const loader = document.getElementById("loader-screen");
    if (!loader) return;
    loader.classList.remove("fade-out");
    this.setupLoadingScreen();
  }

  // ================= FILTERED NOTES =================
  getFilteredNotes() {
    return this.notes.filter((item) => {
      const matchCat =
        this.activeFilter === "all" ||
        (this.activeFilter === "custom" ? item.isCustom : item.category === this.activeFilter);

      const q = this.searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.coreFormula && item.coreFormula.toLowerCase().includes(q)) ||
        (item.properties && item.properties.some((p) => p.name.toLowerCase().includes(q) || p.explanation.toLowerCase().includes(q)));

      return matchCat && matchQuery;
    });
  }

  // ================= 3D COVERFLOW CAROUSEL WITH ASMR SMOOTHNESS =================
  setupCarouselTrack() {
    const track = document.getElementById("carousel-track");
    const dotsContainer = document.getElementById("carousel-dots");
    if (!track) return;

    const filtered = this.getFilteredNotes();
    track.innerHTML = "";

    if (filtered.length === 0) {
      track.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 40px;">
          <p style="font-size: 1.2rem; margin-bottom: 8px;">No math notes found for "${this.searchQuery}"</p>
          <button class="hero-cta-btn" id="reset-search-btn" style="padding: 10px 20px; font-size: 0.85rem; margin: 12px auto 0;">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-search-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          this.searchQuery = "";
          this.activeFilter = "all";
          const input = document.getElementById("notes-search-input");
          if (input) input.value = "";
          document.querySelectorAll(".cat-pill").forEach((p) => p.classList.toggle("active", p.dataset.filter === "all"));
          this.render();
        });
      }
      return;
    }

    if (this.carouselIndex >= filtered.length) {
      this.carouselIndex = 0;
    }

    filtered.forEach((topic, idx) => {
      const card = document.createElement("div");
      card.className = "deck-card";
      card.dataset.index = idx;

      // Glow layer class
      const glowClass = `glow-${topic.color || "orange"}`;
      const sqCount = topic.properties ? topic.properties.length : 1;

      card.innerHTML = `
        <div class="card-glow-layer ${glowClass}"></div>
        
        <div class="card-header-meta">
          <span class="card-cat-pill">${topic.grade || "5th Grade"} • ${topic.category.toUpperCase()} • ${sqCount} SQUARES</span>
          <h3 class="card-topic-title">${topic.title}</h3>
        </div>

        <div class="card-preview-formula" title="${topic.coreFormula}">
          ${topic.coreFormula}
        </div>

        <div class="card-buttons-stack">
          <button class="card-action-btn primary-action btn-card-view" data-id="${topic.id}">
            VIEW NOTES (${sqCount} SQUARES)
          </button>
          ${topic.redirectUrl ? `
          <button class="card-action-btn btn-card-redirect" style="background: rgba(10, 132, 255, 0.4);" onclick="window.open('${topic.redirectUrl}', '_blank')">
            🔗 EXTERNAL LINK
          </button>` : ""}
          <button class="card-action-btn btn-card-pdf" data-id="${topic.id}">
            CHEAT SHEET
          </button>
          <button class="card-action-btn btn-card-quiz" data-id="${topic.id}">
            PRACTICE QUIZ
          </button>
        </div>
      `;

      // Card click handling with ASMR feedback
      card.addEventListener("click", (e) => {
        if (e.target.closest("button")) return;
        if (idx !== this.carouselIndex) {
          this.carouselIndex = idx;
          sounds.playAsmrSlide();
          this.updateCarouselPositions();
        }
      });

      track.appendChild(card);
    });

    // Populate Dots
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      filtered.forEach((_, idx) => {
        const dot = document.createElement("div");
        dot.className = `dot-indicator ${idx === this.carouselIndex ? "active" : ""}`;
        dot.addEventListener("click", () => {
          this.carouselIndex = idx;
          sounds.playAsmrSlide();
          this.updateCarouselPositions();
        });
        dotsContainer.appendChild(dot);
      });
    }

    this.attachCardButtonListeners();
    this.updateCarouselPositions();
  }

  /* Tactile ASMR Horizontal Swipe Drag */
  setupCarouselDrag() {
    const stage = document.querySelector(".carousel-stage-viewport");
    if (!stage) return;
    let startX = 0;
    let isDragging = false;

    stage.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button")) return;
      startX = e.clientX;
      isDragging = true;
    });

    window.addEventListener("pointerup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diffX = e.clientX - startX;
      if (diffX > 45) {
        this.slidePrev();
      } else if (diffX < -45) {
        this.slideNext();
      }
    });
  }

  slideNext() {
    const filtered = this.getFilteredNotes();
    if (filtered.length <= 1) return;
    this.carouselIndex = (this.carouselIndex + 1) % filtered.length;
    sounds.playAsmrSlide();
    this.updateCarouselPositions();
  }

  slidePrev() {
    const filtered = this.getFilteredNotes();
    if (filtered.length <= 1) return;
    this.carouselIndex = (this.carouselIndex - 1 + filtered.length) % filtered.length;
    sounds.playAsmrSlide();
    this.updateCarouselPositions();
  }

  updateCarouselPositions() {
    const track = document.getElementById("carousel-track");
    if (!track) return;
    const cards = track.querySelectorAll(".deck-card");
    const count = cards.length;
    if (count === 0) return;

    cards.forEach((card) => {
      const idx = parseInt(card.dataset.index, 10);
      let diff = idx - this.carouselIndex;

      // Handle wrapping for smooth circular behavior
      if (diff > count / 2) diff -= count;
      if (diff < -count / 2) diff += count;

      // Reset classes
      card.className = "deck-card";

      if (diff === 0) {
        card.classList.add("pos-center");
      } else if (diff === -1) {
        card.classList.add("pos-left-1");
      } else if (diff === -2) {
        card.classList.add("pos-left-2");
      } else if (diff === 1) {
        card.classList.add("pos-right-1");
      } else if (diff === 2) {
        card.classList.add("pos-right-2");
      } else {
        card.classList.add("pos-hidden");
      }
    });

    // Update dots
    const dots = document.querySelectorAll(".dot-indicator");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === this.carouselIndex);
    });
  }

  attachCardButtonListeners() {
    document.querySelectorAll(".btn-card-view").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        sounds.playClick();
        const id = btn.dataset.id;
        this.openNotesViewer(id, "notes");
      });
    });

    document.querySelectorAll(".btn-card-quiz").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        sounds.playClick();
        const id = btn.dataset.id;
        this.openNotesViewer(id, "practice");
      });
    });

    document.querySelectorAll(".btn-card-pdf").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        sounds.playClick();
        const id = btn.dataset.id;
        this.printCheatSheet(id);
      });
    });
  }

  // ================= TABLE VIEW =================
  setupTableView() {
    const tbody = document.getElementById("table-body");
    const countBadge = document.getElementById("table-count-badge");
    if (!tbody) return;

    const filtered = this.getFilteredNotes();
    if (countBadge) {
      countBadge.textContent = `${filtered.length} Topic${filtered.length === 1 ? "" : "s"}`;
    }

    tbody.innerHTML = "";
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">No notes match your criteria</td></tr>`;
      return;
    }

    filtered.forEach((topic) => {
      const tr = document.createElement("tr");
      const propCount = topic.properties ? topic.properties.length : 1;

      tr.innerHTML = `
        <td class="tbl-topic-cell">${topic.title}</td>
        <td><span class="tbl-tag">${topic.category.toUpperCase()}</span></td>
        <td><span class="tbl-formula-code">${topic.coreFormula}</span></td>
        <td>${propCount} Key Concepts</td>
        <td>${topic.isCustom ? '<span style="color: var(--neon-lime);">Custom Note</span>' : "Curated 5th Grade"}</td>
        <td class="tbl-actions-cell">
          <button class="tbl-btn tbl-btn-view" data-id="${topic.id}">View</button>
          ${topic.redirectUrl ? `<button class="tbl-btn" onclick="window.open('${topic.redirectUrl}', '_blank')" style="background: rgba(10, 132, 255, 0.2); border-color: #0A84FF;">Link</button>` : ""}
          ${topic.isCustom ? `<button class="tbl-btn tbl-btn-del" data-id="${topic.id}">Delete</button>` : ""}
        </td>
      `;

      tbody.appendChild(tr);
    });

    tbody.querySelectorAll(".tbl-btn-view").forEach((btn) => {
      btn.addEventListener("click", () => {
        sounds.playClick();
        this.openNotesViewer(btn.dataset.id, "notes");
      });
    });

    tbody.querySelectorAll(".tbl-btn-del").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.deleteCustomNote(btn.dataset.id);
      });
    });
  }

  render() {
    this.setupCarouselTrack();
    this.setupTableView();
  }

  // ================= DETAILED NOTES MODAL =================
  openNotesViewer(topicId, defaultTab = "notes") {
    const topic = this.notes.find((t) => t.id === topicId);
    if (!topic) return;

    this.currentModalTopic = topic;
    const modal = document.getElementById("notes-viewer-modal");
    const titleEl = document.getElementById("modal-topic-title");
    const descEl = document.getElementById("modal-topic-desc");
    const catBadge = document.getElementById("modal-cat-badge");

    if (titleEl) titleEl.textContent = topic.title;
    if (descEl) descEl.textContent = topic.description;
    if (catBadge) catBadge.textContent = `${topic.grade || "5th Grade"} • ${topic.category.toUpperCase()}`;

    // Render structured properties
    this.renderModalProperties(topic);

    // Render Interactive Visualizer
    this.renderModalInteractive(topic);

    // Render Practice Quiz
    this.renderModalQuiz(topic);

    // Switch to requested tab
    this.switchModalTab(defaultTab);

    if (modal) modal.classList.remove("hidden");
  }

  switchModalTab(tabName) {
    const tabs = ["notes", "interactive", "practice"];
    tabs.forEach((tab) => {
      const btn = document.getElementById(`modal-tab-${tab}`);
      const pane = document.getElementById(`pane-${tab === "notes" ? "structured-notes" : tab}`);
      if (btn) btn.classList.toggle("active", tab === tabName);
      if (pane) pane.classList.toggle("hidden", tab !== tabName);
    });
  }

  renderModalProperties(topic) {
    const container = document.getElementById("modal-sections-container");
    if (!container) return;
    container.innerHTML = "";

    if (!topic.properties || topic.properties.length === 0) {
      container.innerHTML = `
        <div class="property-detail-card">
          <div class="prop-card-header">
            <h4 class="prop-card-title">${topic.title}</h4>
            <span class="prop-formula-box">${topic.coreFormula}</span>
          </div>
          <p class="prop-explanation">${topic.description}</p>
          ${topic.examples ? `
            <div class="prop-example-box">
              <div class="prop-example-title">Examples</div>
              <div class="prop-example-text">${topic.examples.replace(/\n/g, "<br>")}</div>
            </div>
          ` : ""}
        </div>
      `;
      return;
    }

    topic.properties.forEach((prop) => {
      const card = document.createElement("div");
      card.className = "property-detail-card";

      card.innerHTML = `
        <div class="prop-card-header">
          <div>
            <span class="prop-number-tag">PROPERTY #${prop.num}</span>
            <h4 class="prop-card-title">${prop.name}</h4>
          </div>
          <div class="prop-formula-box">${prop.formula}</div>
        </div>

        <p class="prop-explanation">${prop.explanation}</p>

        <div class="prop-example-box">
          <div class="prop-example-title">5th Grade Demonstration</div>
          <div class="prop-example-text">${prop.example.replace(/\n/g, "<br>")}</div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px;">
          ${prop.trick ? `<span class="prop-trick-badge">💡 ${prop.trick}</span>` : ""}
          ${prop.gradeTip ? `<span class="prop-trick-badge" style="background: rgba(0, 240, 255, 0.15); border-color: rgba(0, 240, 255, 0.3); color: #a5f3fc;">🎯 ${prop.gradeTip}</span>` : ""}
        </div>
      `;

      container.appendChild(card);
    });
  }

  // Interactive Visualizer depending on topic type
  renderModalInteractive(topic) {
    const container = document.getElementById("interactive-sandbox-container");
    if (!container) return;
    container.innerHTML = "";

    if (topic.id === "prop-mult") {
      // Interactive Commutative Array Visualizer + Distributive Area Model
      container.innerHTML = `
        <div class="interactive-demo-card">
          <h4 class="demo-title">Commutative Property: Array Rotator</h4>
          <p class="demo-subtitle">See why rows × columns is identical when rotated!</p>
          
          <div class="array-grid-container" id="array-grid-box"></div>

          <div class="array-control-row">
            <button class="array-flip-btn" id="btn-flip-array">🔄 Flip Array Dimension</button>
            <span class="array-formula-live" id="array-formula-text">4 rows of 6 = 24 items</span>
          </div>
        </div>

        <div class="interactive-demo-card" style="margin-top: 20px;">
          <h4 class="demo-title">Distributive Area Model Splitter</h4>
          <p class="demo-subtitle">Break down 6 × 47 into friendly pieces mentally: 6 × (40 + 7)</p>
          
          <div class="area-model-box">
            <div class="area-partition area-p1">
              <span class="area-part-title">6 × 40</span>
              <span class="area-part-math">240</span>
            </div>
            <div class="area-partition area-p2">
              <span class="area-part-title">6 × 7</span>
              <span class="area-part-math">+ 42</span>
            </div>
          </div>
          <div class="array-formula-live" style="color: var(--neon-lime);">Total Area: 240 + 42 = 282!</div>
        </div>
      `;

      let flipped = false;
      const renderGrid = () => {
        const grid = document.getElementById("array-grid-box");
        const formula = document.getElementById("array-formula-text");
        if (!grid) return;
        const rows = flipped ? 6 : 4;
        const cols = flipped ? 4 : 6;
        grid.style.gridTemplateColumns = `repeat(${cols}, 28px)`;
        grid.innerHTML = "";
        for (let i = 0; i < rows * cols; i++) {
          const cell = document.createElement("div");
          cell.className = "array-cell";
          grid.appendChild(cell);
        }
        if (formula) {
          formula.textContent = `${rows} × ${cols} = 24  (${flipped ? "6 rows of 4" : "4 rows of 6"})`;
        }
      };

      renderGrid();
      const flipBtn = document.getElementById("btn-flip-array");
      if (flipBtn) {
        flipBtn.addEventListener("click", () => {
          flipped = !flipped;
          sounds.playClick();
          renderGrid();
        });
      }
    } else if (topic.id === "prop-div") {
      // Division by Zero interactive trap & non-commutative simulator
      container.innerHTML = `
        <div class="interactive-demo-card">
          <h4 class="demo-title">Division by Zero Test Lab</h4>
          <p class="demo-subtitle">Try dividing cookies among zero plates!</p>
          
          <div style="display: flex; gap: 12px; align-items: center; justify-content: center; margin: 20px 0;">
            <input type="number" id="div-num-input" value="12" style="width: 80px; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.5); color: #fff; text-align: center; font-size: 1.1rem;" />
            <span style="font-size: 1.5rem; color: var(--neon-cyan);">÷</span>
            <input type="number" id="div-denom-input" value="0" style="width: 80px; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.5); color: #fff; text-align: center; font-size: 1.1rem;" />
            <button class="array-flip-btn" id="btn-calc-division">Compute</button>
          </div>

          <div id="div-result-display" style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: #ff3366; min-height: 36px;">
            ⚠️ UNDEFINED! Cannot divide by zero!
          </div>
        </div>
      `;

      const computeDiv = () => {
        const num = parseFloat(document.getElementById("div-num-input").value) || 0;
        const den = parseFloat(document.getElementById("div-denom-input").value);
        const resDisplay = document.getElementById("div-result-display");
        if (den === 0) {
          resDisplay.innerHTML = `<span style="color: #ff3366; animation: subtleNeonFlicker 0.4s infinite;">🚨 MATH ERROR: Division by Zero is UNDEFINED! It breaks the universe.</span>`;
        } else {
          resDisplay.innerHTML = `<span style="color: var(--neon-lime);">Result: ${num} ÷ ${den} = ${(num / den).toFixed(2).replace(/\.00$/, "")}</span>`;
        }
      };

      const btnCalc = document.getElementById("btn-calc-division");
      if (btnCalc) btnCalc.addEventListener("click", computeDiv);
    } else {
      // Default interactive note preview
      container.innerHTML = `
        <div class="interactive-demo-card">
          <h4 class="demo-title">${topic.title} Playground</h4>
          <p class="demo-subtitle">Formulas and notes are stored permanently in math.io</p>
          <div class="array-formula-live" style="color: var(--neon-lime); margin-top: 14px;">${topic.coreFormula}</div>
        </div>
      `;
    }
  }

  // Practice Quiz tab in Modal
  renderModalQuiz(topic) {
    const container = document.getElementById("modal-quiz-container");
    if (!container) return;
    container.innerHTML = "";

    const questions = topic.quiz || [
      {
        q: `What is the core rule for ${topic.title}?`,
        options: [topic.coreFormula, "a + b = c", "x ÷ 0 = 0", "1 × 0 = 1"],
        ans: 0,
        why: "This matches the official 5th grade rule!"
      }
    ];

    questions.forEach((item, qIdx) => {
      const card = document.createElement("div");
      card.className = "quiz-card";

      card.innerHTML = `
        <div class="quiz-q-num">QUESTION ${qIdx + 1} OF ${questions.length}</div>
        <div class="quiz-question-text">${item.q}</div>
        <div class="quiz-options-grid">
          ${item.options
            .map(
              (opt, optIdx) =>
                `<button class="quiz-opt-btn" data-q="${qIdx}" data-opt="${optIdx}">${opt}</button>`
            )
            .join("")}
        </div>
        <div class="quiz-feedback-box hidden" id="q-feedback-${qIdx}"></div>
      `;

      container.appendChild(card);
    });

    // Answer click
    container.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qIdx = parseInt(btn.dataset.q, 10);
        const optIdx = parseInt(btn.dataset.opt, 10);
        const qData = questions[qIdx];
        const fb = document.getElementById(`q-feedback-${qIdx}`);
        const parentGrid = btn.parentElement;

        parentGrid.querySelectorAll(".quiz-opt-btn").forEach((b) => (b.disabled = true));

        if (optIdx === qData.ans) {
          btn.classList.add("correct");
          sounds.playSuccess();
          this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 40);
          if (fb) {
            fb.classList.remove("hidden");
            fb.style.color = "#86efac";
            fb.textContent = `🎉 Correct! ${qData.why}`;
          }
        } else {
          btn.classList.add("incorrect");
          sounds.playClick();
          const correctBtn = parentGrid.querySelector(`[data-opt="${qData.ans}"]`);
          if (correctBtn) correctBtn.classList.add("correct");
          if (fb) {
            fb.classList.remove("hidden");
            fb.style.color = "#fca5a5";
            fb.textContent = `Not quite! ${qData.why}`;
          }
        }
      });
    });
  }

  // Print & Cheat Sheet Generation
  printCheatSheet(topicId) {
    const topic = this.notes.find((t) => t.id === topicId) || this.notes[0];
    const printContent = document.getElementById("printable-content");
    if (!printContent) return;

    let html = `
      <div style="margin-bottom: 24px;">
        <h2 style="color: #4338ca; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px;">${topic.title}</h2>
        <p style="font-size: 1.1rem; font-style: italic; margin-top: 6px;">${topic.description}</p>
        <p style="font-weight: bold; margin-top: 8px;">Key Rule: ${topic.coreFormula}</p>
      </div>
    `;

    if (topic.properties) {
      topic.properties.forEach((p) => {
        html += `
          <div style="margin-bottom: 16px; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px;">
            <h3 style="font-size: 1.05rem; margin-bottom: 4px;">#${p.num} — ${p.name}</h3>
            <p style="font-weight: bold; color: #1e293b;">Formula: ${p.formula}</p>
            <p style="margin: 4px 0;">${p.explanation}</p>
            <p style="color: #475569; font-size: 0.95rem;">Example: ${p.example}</p>
            ${p.trick ? `<p style="color: #d97706; font-size: 0.9rem;">💡 ${p.trick}</p>` : ""}
          </div>
        `;
      });
    }

    printContent.innerHTML = html;
    window.print();
  }

  // ================= ADD / STORE CUSTOM NOTE (STRICT VAULT ENFORCEMENT) =================
  openCreateNoteModal() {
    // STRICT RULE: DO NOT ALLOW THEM TO ADD NOTES UNLESS THEY GO INTO THE VAULT
    this.vault.requestCreateNote();
  }

  deleteCustomNote(id) {
    if (!confirm("Are you sure you want to delete this custom math note?")) return;
    this.notes = this.notes.filter((n) => n.id !== id);
    this.saveNotes();
    sounds.playClick();
    this.render();
  }

  // ================= GENERAL EVENT LISTENERS =================
  setupEventListeners() {
    // Navigation Links Smooth Scroll & Active State
    const navLinks = document.querySelectorAll(".nav-link[data-scroll]");
    navLinks.forEach((btn) => {
      btn.addEventListener("click", () => {
        sounds.playClick();
        navLinks.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const targetId = btn.dataset.scroll;
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Scroll-spy to switch active nav tab automatically
    window.addEventListener("scroll", () => {
      const notesSec = document.getElementById("notes-section");
      const homeBtn = document.getElementById("nav-btn-home");
      const notesBtn = document.getElementById("nav-btn-notes");
      if (!notesSec || !homeBtn || !notesBtn) return;
      
      const rect = notesSec.getBoundingClientRect();
      if (rect.top <= 200) {
        notesBtn.classList.add("active");
        homeBtn.classList.remove("active");
      } else {
        homeBtn.classList.add("active");
        notesBtn.classList.remove("active");
      }
    }, { passive: true });

    // Hero buttons
    const heroExplore = document.getElementById("hero-explore-btn");
    if (heroExplore) {
      heroExplore.addEventListener("click", () => {
        sounds.playClick();
        const sec = document.getElementById("notes-section");
        if (sec) sec.scrollIntoView({ behavior: "smooth" });
      });
    }

    // STRICT: "ADD MY NOTES" outside the vault redirects immediately to the Vault!
    const heroCreate = document.getElementById("hero-create-btn");
    if (heroCreate) {
      heroCreate.addEventListener("click", () => {
        this.vault.requestCreateNote();
      });
    }

    const heroCue = document.getElementById("hero-scroll-cue");
    if (heroCue) {
      heroCue.addEventListener("click", () => {
        const sec = document.getElementById("notes-section");
        if (sec) sec.scrollIntoView({ behavior: "smooth" });
      });
    }

    // Modal Details Controls
    const btnCloseNotes = document.getElementById("modal-notes-close");
    if (btnCloseNotes) {
      btnCloseNotes.addEventListener("click", () => {
        document.getElementById("notes-viewer-modal").classList.add("hidden");
      });
    }

    const btnDoneNotes = document.getElementById("modal-done-btn");
    if (btnDoneNotes) {
      btnDoneNotes.addEventListener("click", () => {
        document.getElementById("notes-viewer-modal").classList.add("hidden");
      });
    }

    const btnPrintNotes = document.getElementById("modal-print-btn");
    if (btnPrintNotes) {
      btnPrintNotes.addEventListener("click", () => {
        if (this.currentModalTopic) {
          this.printCheatSheet(this.currentModalTopic.id);
        }
      });
    }

    // Modal Internal Tabs (Structured Notes, Interactive, Practice)
    document.getElementById("modal-tab-notes")?.addEventListener("click", () => this.switchModalTab("notes"));
    document.getElementById("modal-tab-interactive")?.addEventListener("click", () => this.switchModalTab("interactive"));
    document.getElementById("modal-tab-practice")?.addEventListener("click", () => this.switchModalTab("practice"));

    // View Toggle: CAROUSEL vs TABLE
    const viewCarouselBtn = document.getElementById("view-carousel-btn");
    const viewTableBtn = document.getElementById("view-table-btn");
    const slider = document.getElementById("toggle-slider");
    const carouselView = document.getElementById("carousel-view");
    const tableView = document.getElementById("table-view");

    if (viewCarouselBtn && viewTableBtn) {
      viewCarouselBtn.addEventListener("click", () => {
        sounds.playClick();
        viewCarouselBtn.classList.add("active");
        viewTableBtn.classList.remove("active");
        if (slider) slider.style.transform = "translateX(0%)";
        if (carouselView) carouselView.classList.remove("hidden");
        if (tableView) tableView.classList.add("hidden");
        this.activeView = "carousel";
      });

      viewTableBtn.addEventListener("click", () => {
        sounds.playClick();
        viewTableBtn.classList.add("active");
        viewCarouselBtn.classList.remove("active");
        if (slider) slider.style.transform = "translateX(100%)";
        if (carouselView) carouselView.classList.add("hidden");
        if (tableView) tableView.classList.remove("hidden");
        this.activeView = "table";
        this.setupTableView();
      });
    }

    // Carousel Navigation Arrows with ASMR smooth slide sounds
    const prevBtn = document.getElementById("carousel-prev-btn");
    const nextBtn = document.getElementById("carousel-next-btn");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        this.slidePrev();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        this.slideNext();
      });
    }

    // Keyboard Arrow Keys for Carousel
    window.addEventListener("keydown", (e) => {
      if (document.querySelector(".modal-backdrop:not(.hidden)")) return;
      if (e.key === "ArrowLeft") {
        if (prevBtn) prevBtn.click();
      } else if (e.key === "ArrowRight") {
        if (nextBtn) nextBtn.click();
      }
    });

    // Search Input
    const searchInput = document.getElementById("notes-search-input");
    const searchClear = document.getElementById("search-clear-btn");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        if (searchClear) searchClear.classList.toggle("hidden", !this.searchQuery);
        this.carouselIndex = 0;
        this.render();
      });
    }

    if (searchClear) {
      searchClear.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        this.searchQuery = "";
        searchClear.classList.add("hidden");
        this.render();
      });
    }

    // Category Filter Pills
    document.querySelectorAll(".cat-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        sounds.playClick();
        document.querySelectorAll(".cat-pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        this.activeFilter = pill.dataset.filter;
        this.carouselIndex = 0;
        this.render();
      });
    });

    // Sound Toggle
    const soundToggle = document.getElementById("btn-sound-toggle");
    const soundOn = document.getElementById("sound-icon-on");
    const soundOff = document.getElementById("sound-icon-off");
    if (soundToggle) {
      soundToggle.addEventListener("click", () => {
        sounds.enabled = !sounds.enabled;
        if (soundOn && soundOff) {
          soundOn.classList.toggle("hidden", !sounds.enabled);
          soundOff.classList.toggle("hidden", sounds.enabled);
        }
        if (sounds.enabled) sounds.playClick();
      });
    }

    // Quick Quiz from Nav
    const btnQuickQuiz = document.getElementById("btn-quick-quiz");
    if (btnQuickQuiz) {
      btnQuickQuiz.addEventListener("click", () => {
        sounds.playClick();
        this.openNotesViewer("prop-mult", "practice");
      });
    }

    // Cheat Sheet from Nav
    const btnCheatSheet = document.getElementById("btn-cheat-sheet");
    if (btnCheatSheet) {
      btnCheatSheet.addEventListener("click", () => {
        sounds.playClick();
        this.printCheatSheet(this.notes[0]?.id);
      });
    }

    // Feedback Floating Bubble & Tooltip (matching Screenshot 1 & 2)
    const fbTooltip = document.getElementById("feedback-tooltip");
    const closeTooltipBtn = document.getElementById("close-tooltip-btn");
    if (closeTooltipBtn && fbTooltip) {
      closeTooltipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        fbTooltip.style.opacity = "0";
        setTimeout(() => fbTooltip.remove(), 300);
      });
    }

    const fbBubble = document.getElementById("feedback-bubble-btn");
    const fbModal = document.getElementById("feedback-modal");
    if (fbBubble && fbModal) {
      fbBubble.addEventListener("click", () => {
        sounds.playClick();
        fbModal.classList.remove("hidden");
      });
    }

    document.getElementById("modal-feedback-close")?.addEventListener("click", () => {
      fbModal.classList.add("hidden");
    });

    document.getElementById("feedback-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      sounds.playSuccess();
      this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 50);
      alert("Thank you! Your suggestion was sent to Jeeva.");
      fbModal.classList.add("hidden");
    });

    // Replay loader
    const replayLoaderBtn = document.getElementById("replay-loader-btn");
    if (replayLoaderBtn) {
      replayLoaderBtn.addEventListener("click", () => {
        this.replayLoader();
      });
    }

    // Easter egg on "Made with ❤️ by jeeva"
    const authorTrigger = document.getElementById("author-credit-trigger");
    if (authorTrigger) {
      authorTrigger.addEventListener("click", (e) => {
        sounds.playSuccess();
        const rect = authorTrigger.getBoundingClientRect();
        this.confetti.burst(rect.left + rect.width / 2, rect.top, 50);
      });
    }

    // Close modals on clicking backdrop
    document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          backdrop.classList.add("hidden");
        }
      });
    });
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.mathApp = new MathIoApp();
});



// ================= AI CHATBOT LOGIC =================
class Chatbot {
  constructor() {
    this.bubble = document.getElementById("ai-chat-bubble");
    this.window = document.getElementById("ai-chat-window");
    this.closeBtn = document.getElementById("ai-close-btn");
    this.input = document.getElementById("ai-chat-input");
    this.sendBtn = document.getElementById("ai-send-btn");
    this.messagesContainer = document.getElementById("ai-chat-messages");
    
    if (this.bubble && this.window) {
      this.init();
    }
  }

  init() {
    this.bubble.addEventListener("click", () => this.toggleChat());
    this.closeBtn.addEventListener("click", () => this.toggleChat());
    this.sendBtn.addEventListener("click", () => this.handleSend());
    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleSend();
    });
  }

  toggleChat() {
    if (this.window.classList.contains("hidden")) {
      this.window.classList.remove("hidden");
      this.bubble.style.transform = "scale(0) rotate(-90deg)";
      setTimeout(() => { this.bubble.style.display = "none"; }, 300);
      sounds.playClick();
      this.input.focus();
    } else {
      this.window.classList.add("hidden");
      this.bubble.style.display = "flex";
      setTimeout(() => { this.bubble.style.transform = "scale(1) rotate(0deg)"; }, 10);
      sounds.playClick();
    }
  }

  handleSend() {
    const text = this.input.value.trim();
    if (!text) return;

    this.appendMessage(text, "user-msg");
    this.input.value = "";
    sounds.playClick();

    // AI thinking state (Typing Indicator)
    setTimeout(() => {
      this.appendRawHTML('<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>', "ai-msg");
      
      setTimeout(() => {
        // Remove typing indicator
        this.messagesContainer.lastChild.remove();
        
        const t = text.toLowerCase();
        let replyHTML = "";
        // Secret Admin Passcode
        if (t === "access j33v4") {
          replyHTML = `<div class="msg-bubble" style="background: rgba(48, 209, 88, 0.2); border-color: #30D158; color: #30D158; font-weight: bold;">Authentication Accepted. Welcome back, Jeeva. Opening Vault...</div>`;
          // Open vault securely and close chat
          setTimeout(() => {
            if(window.app && window.app.vault) {
              window.app.vault.isUnlocked = true;
              window.app.vault.open();
            } else {
              document.getElementById("vault-modal")?.classList.remove("hidden");
            }
            
            // Force hide the chat window manually
            const chatWin = document.getElementById("ai-chat-window");
            if (chatWin) chatWin.classList.add("hidden");
            const chatBubble = document.getElementById("ai-chat-bubble");
            if (chatBubble) {
               chatBubble.style.display = "flex";
               setTimeout(() => chatBubble.style.transform = "scale(1) rotate(0deg)", 50);
            }
            sounds.playSuccess();
          }, 1000);
        } 
        // Passcode Protection
        else if (t.includes("passcode") || t.includes("password") || t.includes("code") || t.includes("vault code")) {
          replyHTML = `<div class="msg-bubble" style="background: rgba(255, 55, 95, 0.2); border-color: #FF375F; color: #FF375F; font-weight: bold;">No. I protect the Vault.</div>`;
          const chatWindow = document.getElementById("ai-chat-window");
          if (chatWindow) {
            chatWindow.classList.add("shatter-anim");
            setTimeout(() => chatWindow.classList.remove("shatter-anim"), 600);
          }
        }
        // Celebrate / Confetti
        else if (t.includes("celebrate") || t.includes("confetti") || t.includes("party")) {
          replyHTML = `<div class="msg-bubble">Let's celebrate! 🎉 Confetti deployed!</div>`;
          if(window.app && window.app.confetti) {
            window.app.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 80);
          }
        } 
        // Creator Bio
        else if (t.includes("who created") || t.includes("developer") || t.includes("who made") || t.includes("creator") || t.includes("who built")) {
          replyHTML = `
            <div class="creator-plaque">
              <div class="plaque-title">Jeeva Raghavan Developer</div>
              I built this website from the ground up to bring digital creativity into the physical world. As a developer and avid gamer, I spent years admiring game art, intricate props, and digital assets on screen. 3D printing changed that—it let me pull those designs out of the monitor and put them right into people's hands. Whether it's functional parts, collector-grade miniatures, or custom-designed prints, I obsess over every detail: clean code on the web side, and dialed-in layer heights, tolerances, and finishes on the print bed. Welcome, and take a look around!
            </div>
          `;
        }
        // Navigation: Where are notes
        else if (t.includes("where are") && (t.includes("note") || t.includes("math"))) {
          replyHTML = `
            <div class="msg-bubble">
              The notes are right here on the main page in the 3D Carousel! <br>
              <button class="chat-action-btn" onclick="document.getElementById('ai-close-btn').click(); document.getElementById('carousel-track').scrollIntoView({behavior: 'smooth'});">Take me to the Notes</button>
            </div>
          `;
        }
        // Navigation: How to use
        else if (t.includes("how do i") || t.includes("help") || t.includes("navigate") || t.includes("what is this")) {
          replyHTML = `<div class="msg-bubble">I am the math.io site assistant! I can help you find notes, tell you about my creator Jeeva, or show you how the site works. What do you need?</div>`;
        }
        // General / Fallback
        else {
          replyHTML = `<div class="msg-bubble">I am specifically programmed to help you navigate math.io and find the 5th-grade math notes. Try asking me "where are the notes?" or "who created this website?".</div>`;
        }

        this.appendRawHTML(replyHTML, "ai-msg");
        sounds.playSuccess();
      }, 1800); // 1.8 second delay for realism
    }, 400);
  }

  appendRawHTML(html, className) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-msg ${className}`;
    msgDiv.innerHTML = html;
    this.messagesContainer.appendChild(msgDiv);
    
    // Force smooth scroll to bottom
    setTimeout(() => {
      this.messagesContainer.scrollTo({
        top: this.messagesContainer.scrollHeight,
        behavior: 'smooth'
      });
    }, 10);
  }

  appendMessage(text, className) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-msg ${className}`;
    msgDiv.innerHTML = `<div class="msg-bubble">${text}</div>`;
    this.messagesContainer.appendChild(msgDiv);
    
    // Force smooth scroll to bottom
    setTimeout(() => {
      this.messagesContainer.scrollTo({
        top: this.messagesContainer.scrollHeight,
        behavior: 'smooth'
      });
    }, 10);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Chatbot();
});


// Mouse Spotlight Logic
document.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.getElementById("mouse-spotlight");
  if (spotlight) {
    document.addEventListener("mousemove", (e) => {
      spotlight.style.opacity = "1";
      spotlight.style.left = e.clientX + "px";
      spotlight.style.top = e.clientY + "px";
    });
    document.addEventListener("mouseleave", () => {
      spotlight.style.opacity = "0";
    });
  }
});


// ================= MASTER SPRINT JS =================
document.addEventListener("DOMContentLoaded", () => {
  // Idea #79: Liquid Ripple on Click
  document.addEventListener("click", (e) => {
    // Prevent ripple on pure inputs so it doesn't block typing
    if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const ripple = document.createElement("div");
    ripple.className = "click-ripple";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  // Idea #75: Origami Fold Modals
  const closeBtns = document.querySelectorAll(".modal-close, .modal-close-btn");
  closeBtns.forEach(btn => {
    if (btn.id === "ai-close-btn") return; // FIX: Do not clone the chatbot close button!
    // Remove the default immediate close and replace with origami
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    newBtn.addEventListener("click", (e) => {
      const modalWindow = e.target.closest('.modal-window') || e.target.closest('.modal-content');
      const modalBackdrop = e.target.closest('.modal-backdrop') || e.target.closest('.modal-overlay');
      if (modalWindow) {
        modalWindow.classList.add("origami-fold");
        sounds.playAsmrSlide();
        setTimeout(() => {
          if (modalBackdrop) modalBackdrop.classList.add("hidden");
          modalWindow.classList.remove("origami-fold");
        }, 500);
      } else if (modalBackdrop) {
        modalBackdrop.classList.add("hidden");
      }
    });
  });

  // Idea #93: Math Keyboard
  const mk = document.createElement("div");
  mk.id = "math-keyboard";
  mk.className = "hidden";
  mk.innerHTML = `
    <button class="mk-btn">÷</button>
    <button class="mk-btn">×</button>
    <button class="mk-btn">²</button>
    <button class="mk-btn">√</button>
    <button class="mk-btn">π</button>
    <button class="mk-btn">∑</button>
  `;
  document.body.appendChild(mk);

  let activeInput = null;
  document.addEventListener("focusin", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      activeInput = e.target;
      mk.classList.remove("hidden");
    }
  });
  document.addEventListener("focusout", (e) => {
    setTimeout(() => {
      // Hide if we didn't just click a math button
      if (!document.activeElement.classList.contains("mk-btn")) {
        mk.classList.add("hidden");
      }
    }, 150);
  });

  mk.querySelectorAll(".mk-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (activeInput) {
        activeInput.value += btn.textContent;
        activeInput.focus();
        sounds.playClick();
      }
    });
  });

  // Idea #100: THE EVERYTHING BUTTON
  const everythingBtn = document.createElement("button");
  everythingBtn.textContent = "⚠️ INITIATE OVERRIDE (#100)";
  everythingBtn.style.position = "fixed";
  everythingBtn.style.bottom = "20px";
  everythingBtn.style.left = "20px";
  everythingBtn.style.background = "#FF0000";
  everythingBtn.style.color = "#FFF";
  everythingBtn.style.border = "none";
  everythingBtn.style.padding = "10px 20px";
  everythingBtn.style.borderRadius = "8px";
  everythingBtn.style.fontWeight = "bold";
  everythingBtn.style.zIndex = "999999";
  everythingBtn.style.cursor = "pointer";
  everythingBtn.style.boxShadow = "0 0 20px #FF0000";
  document.body.appendChild(everythingBtn);

  let chaosInterval = null;
  let isChaosActive = false;

  everythingBtn.addEventListener("click", () => {
    isChaosActive = !isChaosActive;
    
    if (isChaosActive) {
      // Activate Chaos Mode
      document.body.style.animation = "rainbowBg 2s infinite linear";
      document.querySelectorAll(".deck-card").forEach(c => c.style.animation = "chaosSpin 1s infinite linear");
      // Removed .ai-chatbot-container per user request
      document.querySelectorAll(".vault-window").forEach(c => c.style.animation = "chaosSpin 3s infinite linear");
      
      // Constant confetti
      if (window.app && window.app.confetti) {
        chaosInterval = setInterval(() => {
          window.app.confetti.burst(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 50);
        }, 300);
      }
      
      everythingBtn.textContent = "STOP OVERRIDE";
      everythingBtn.style.background = "#FF375F";
      sounds.playSuccess();
    } else {
      // Deactivate Chaos Mode
      document.body.style.animation = "";
      document.querySelectorAll(".deck-card, .vault-window").forEach(c => c.style.animation = "");
      
      if (chaosInterval) {
        clearInterval(chaosInterval);
        chaosInterval = null;
      }
      
      everythingBtn.textContent = "⚠️ INITIATE OVERRIDE (#100)";
      everythingBtn.style.background = "#FF0000";
      sounds.playClick();
    }
  });
});

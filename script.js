const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const subtext = document.getElementById("subtext");
const buttons = document.querySelector(".buttons");
const success = document.getElementById("success");

let noCount = 0;

const messages = [
    "بازی بدی رو شروع کردی!",
    "ای بابا یه بار دیگه بزن شاید شد.",
    "مطمئنی نمیخوای نظرتو عوض کنی؟",
    "تلاشای اخرت رو بکن.",
    "به نظرم یه بارم که شده امتحان کن."
];


/* دکمه نه */

function escapeNo() {

    noCount++;

    // تغییر جمله به ترتیب
    const messageIndex = Math.min(
        noCount - 1,
        messages.length - 1
    );

    question.textContent = messages[messageIndex];

    subtext.textContent = "هنوز فرصت داری...";


    // بزرگ شدن دکمه آره
    const yesScale = 1 + noCount * 0.12;

    yesBtn.style.transform =
        `scale(${yesScale})`;


    // کوچک شدن دکمه نه
    const noScale = Math.max(
        0.35,
        1 - noCount * 0.04
    );

    noBtn.style.transform =
        `scale(${noScale})`;


    // فرار کردن دکمه نه
    const card = document.querySelector(".card");

const cardRect = card.getBoundingClientRect();

const padding = 25;

const maxX =
    cardRect.width -
    noBtn.offsetWidth -
    padding * 2;

const maxY =
    cardRect.height -
    noBtn.offsetHeight -
    padding * 2;

const x =
    padding +
    Math.random() * Math.max(maxX, 0);

const y =
    padding +
    Math.random() * Math.max(maxY, 0);

noBtn.style.position = "absolute";

noBtn.style.left = `${x}px`;

noBtn.style.top = `${y}px`;


    // بعد از چند بار کوچیک‌تر شود
    if (noCount >= 15) {

        noBtn.style.opacity = "0";

        noBtn.style.pointerEvents = "none";

    }
}


/* وقتی موس نزدیک نه میشه */

noBtn.addEventListener(
    "mouseenter",
    escapeNo
);


/* موبایل */

noBtn.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        escapeNo();

    }
);


/* وقتی آره زده میشه */

yesBtn.addEventListener(
    "click",
    function() {

        question.style.display = "none";

        subtext.style.display = "none";

        buttons.style.display = "none";

        success.classList.add("active");

        createManyHearts();

    }
);


/* ساخت قلب‌های پس‌زمینه */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.textContent = "♥";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 25 + 12 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.body.appendChild(heart);


    setTimeout(
        () => heart.remove(),
        10000
    );
}


/* قلب‌های پس‌زمینه */

setInterval(
    createHeart,
    500
);


/* قلب‌های زیاد بعد از آره */

function createManyHearts() {

    for (
        let i = 0;
        i < 50;
        i++
    ) {

        setTimeout(
            () => createHeart(),
            i * 80
        );

    }
}
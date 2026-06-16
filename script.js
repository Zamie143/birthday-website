const introScreen =
document.getElementById("introScreen");

const blowBtn =
document.getElementById("blowBtn");

const introFlame =
document.getElementById("introFlame");

const mainWebsite =
document.getElementById("mainWebsite");

const music =
document.getElementById("birthdayMusic");

const wishBtn =
document.getElementById("wishBtn");

const giftRevealPage =
document.getElementById("giftRevealPage");

const giftLetter =
document.getElementById("giftLetter");

/* ------------------ CANDLE ------------------ */

blowBtn.addEventListener("click", () => {

    introFlame.style.opacity = "0";

    music.currentTime = 0;

    music.play().catch(err => console.log(err));

    setTimeout(() => {

        introScreen.classList.add("fadeOut");

        setTimeout(() => {

            introScreen.style.display = "none";

            mainWebsite.style.display = "block";

            typeWriter();

        }, 1000);

    }, 600);

});

/* ------------------ MAIN LETTER ------------------ */

const birthdayMessage =

`To my favorite person,

You are sunshine, comfort, laughter,
and every beautiful memory wrapped
into one human being.

Thank you for existing.

Happy Birthday 🍓🍵       `;

let i = 0;

function typeWriter() {

    const message =
    document.getElementById("message");

    if (i < birthdayMessage.length) {

        message.innerHTML +=
        birthdayMessage.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

    }

}

/* ------------------ GIFT LETTER ------------------ */

/* ------------------ GIFT LETTER ------------------ */

// Remove the signature from the text so it doesn't get typed as plain text
const giftMessage = `For your second lobe piercing.

A few months ago, we were thinking about what to gift you for your birthday, and we came up with this little idea...

"gold", because you're just as precious and loved in our lives 🤍

We started saving money for this together.

Yes, we know it's small (but cute, of course ).

We got what we could afford, especially with how crazy gold prices are right now.

But nothing is more valuable than you.`;

function startGiftTyping() {
    giftLetter.innerHTML = "";
    giftIndex = 0;
    
    // Hide signature initially
    const signature = document.getElementById("giftSignature");
    signature.style.display = "none";

    function type() {
        if (giftIndex < giftMessage.length) {
            giftLetter.innerHTML += giftMessage.charAt(giftIndex);
            giftIndex++;
            setTimeout(type, 35);
        } else {
            // Typing finished, reveal the styled signature
            signature.style.display = "block";
          
        }
    }
    type();
}
/* ------------------ GIFT REVEAL ------------------ */

wishBtn.addEventListener("click", () => {

    wishBtn.disabled = true;

    wishBtn.innerHTML = "Opened ✨";

    giftRevealPage.classList.add("show");

    giftRevealPage.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

    startGiftTyping();

});

/* ------------------ FLOATING DECORATIONS ------------------ */

const cuteThings = [

    "🍓",
    "🍵",
    "🐱",
    "🌸",
    "🎀",
    "✨",
    "💌",
    "💗",
    "☁️",
    "🧸"

];

setInterval(() => {

    const item =
    document.createElement("div");

    item.classList.add("floating");

    item.innerHTML =
    cuteThings[
        Math.floor(
            Math.random() *
            cuteThings.length
        )
    ];

    item.style.left =
    Math.random() * 100 + "vw";

    item.style.bottom =
    "-20px";

    item.style.animationDuration =
    (5 + Math.random() * 5) + "s";

    document.body.appendChild(item);

    setTimeout(() => {

        item.remove();

    }, 10000);

}, 600);
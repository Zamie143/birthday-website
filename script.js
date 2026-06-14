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

blowBtn.addEventListener("click",()=>{

    introFlame.style.opacity="0";

    setTimeout(()=>{

        alert("🎉 HAPPY BIRTHDAY BESTIE 🎂");

        introScreen.classList.add("fadeOut");

        mainWebsite.style.display="block";

        music.play();

        typeWriter();

    },1000);

});

/* LETTER */

const birthdayMessage =
`To my favorite person,

You are sunshine, comfort, laughter,
and every beautiful memory wrapped
into one human being.

Thank you for existing.

Happy Birthday 🍓🍵🐱💗`;

let i=0;

function typeWriter(){

    const message =
    document.getElementById("message");

    if(i < birthdayMessage.length){

        message.innerHTML +=
        birthdayMessage.charAt(i);

        i++;

        setTimeout(typeWriter,40);
    }
}

/* WISH BUTTON */

document
.getElementById("wishBtn")
.addEventListener("click",()=>{

    alert("✨ Birthday Wish Sent ✨");

});

/* FLOATING CATS + STRAWBERRIES */

const cuteThings = [
"🐱",
"🍓",
"💗",
"✨",
"🌸",
"🍵"
];

setInterval(()=>{

    const item =
    document.createElement("div");

    item.classList.add("floating");

    item.innerHTML =
    cuteThings[
    Math.floor(
    Math.random()
    *cuteThings.length
    )];

    item.style.left =
    Math.random()*100+"vw";

    item.style.bottom =
    "-20px";

    item.style.animationDuration =
    (5+Math.random()*5)+"s";

    document.body.appendChild(item);

    setTimeout(()=>{
        item.remove();
    },10000);

},600);
const cuteThings = [

"🍓",
"🍵",
"🐱",
"🌸",
"🎀",
"✨",
"💌",
"💗",
"☁️"

];
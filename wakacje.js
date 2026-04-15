// slider zdjec
let images = [
    "https://upload.wikimedia.org/wikipedia/commons/f/fb/Lloret_de_Mar.jpg",
    "https://cdn.hometogo.net/assets/media/original/20251017/68f274690e92f.jpg",
    "https://www.heatheronhertravels.com/wp-content/uploads/2015/05/Passeig-Jacint-Verdaguer-in-Lloret-de-Mar-Costa-Brava.jpg",
    "https://www.fly4free.pl/wp-content/uploads/2020/02/Lloret-S-F-1200x800.jpg"
];

let current = 0; // aktualne zdjecie

// pokaz nastepne zdjecie
function nextSlide() {
    current++;
    if(current >= images.length) current = 0;
    document.getElementById("sliderImage").src = images[current];
}

// pokaz poprzednie zdjecie
function prevSlide() {
    current--;
    if(current < 0) current = images.length - 1;
    document.getElementById("sliderImage").src = images[current];
}

// ciekawostki
let facts = [
    "Lloret de Mar by³o kiedyœ ma³¹ wiosk¹ ryback¹.",
    "Miasto znajduje siê na wybrze¿u Costa Brava.",
    "Ogrody Santa Clotilde s¹ atrakcj¹ miasta.",
    "W sezonie letnim odwiedzaj¹ je miliony turystów.",
    "S³ynie z piêknych pla¿."
];

// pokaz losowa ciekawostke
function showFact() {
    let random = Math.floor(Math.random() * facts.length);
    document.getElementById("factBox").innerText = facts[random];
}

// quiz
let questions = [
    {q:"W jakim kraju jest Lloret de Mar?", a:["Francja","Hiszpania","W³ochy"], c:1},
    {q:"Nad jakim morzem le¿y Lloret de Mar?", a:["Morze Œródziemne","Morze Ba³tyckie","Morze Czarne"], c:0},
    {q:"Co s³ynie w Lloret de Mar?", a:["Góry","Pla¿e","Jeziora"], c:1}
];

// wygeneruj quiz w HTML
function loadQuiz() {
    if(!document.getElementById("quiz")) return;
    let html = "";
    for(let i=0; i<questions.length; i++) {
        html += "<p>" + questions[i].q + "</p>";
        for(let j=0; j<questions[i].a.length; j++) {
            html += "<label><input type='radio' name='q"+i+"' value='"+j+"'> " + questions[i].a[j] + "</label><br>";
        }
    }
    document.getElementById("quiz").innerHTML = html;
}

// sprawdz wynik quizu
function checkQuiz() {
    let score = 0;
    for(let i=0; i<questions.length; i++) {
        let answer = document.querySelector("input[name='q"+i+"']:checked");
        if(answer && answer.value == questions[i].c) score++;
    }
    document.getElementById("result").innerText = "Twój wynik: " + score + " / " + questions.length;
}

// wczytaj quiz po zaladowaniu strony
loadQuiz();
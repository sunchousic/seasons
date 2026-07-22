let h1 = document.getElementById("h1");
let text = document.getElementById("text");
function winter() {
    h1.innerHTML = "Зима";
    text.innerHTML = "Зима — це найхолодніша пора року з найнижчими температурами та короткими світловими днями. У помірних широтах вона настає між осінню та весною, характеризується випаданням снігу та встановленням морозної погоди.";
    document.getElementById("image").src = "images/winter.jpeg";
    h1.style.color = "#1F305E";
    text.style.color = "#324A6E";
    document.body.style.backgroundColor = "#B9D9EB";
}
function spring() {
    h1.innerHTML = "Весна";
    text.innerHTML = "Весна — це перехідна пора року між зимою та літом, для якої характерні потепління, збільшення світлового дня, танення снігу та пробудження природи. Вона символізує оновлення та відродження. ";
    document.getElementById("image").src = "images/spring.jpeg";
    h1.style.color = "#7F304D";
    text.style.color = "#A53F64";
    document.body.style.backgroundColor = "#7BA05B";
}
function summer() {
    h1.innerHTML = "Літо";
    text.innerHTML = "Літо — найтепліша пора року між весною та осінню з найвищою середньодобовою температурою. У Північній півкулі воно триває з червня по серпень, включаючи літнє сонцестояння, і характеризується найдовшими днями, буйною зеленню, канікулами та сезоном відпусток. ";
    document.getElementById("image").src = "images/summer.jpg";
    h1.style.color = "#FF4B00";
    text.style.color = "#FF5F00";
    document.body.style.backgroundColor = "#F1B42F";
}
function autumn() {
    h1.innerHTML = "Осінь";
    text.innerHTML = "Осінь — це перехідна пора року між літом та зимою, що відзначається поступовим зниженням температури, скороченням світлового дня та зменшенням активності природи. Вона є часом яскравих кольорів, збору врожаю, підготовки до холодів та природного оновлення. ";
    document.getElementById("image").src = "images/autumn.jpg";
    h1.style.color = "#592720";
    text.style.color = "#993300";
    document.body.style.backgroundColor = "#D59B65";
}
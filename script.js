//intiera const för användarnamn och lösenord, samt hämta templates och values från index
const namn = "test";
const lösenord = "1234";
const felTemplate = document.getElementById("felTemplate")
const startsidaTemplate = document.getElementById("startsidaTemplate")
const content = document.getElementById("content")
const välkommenTemplate = document.getElementById("välkommenTemplate")

if (checklogin()){
    välkommenvy()
}

 else {
    startVy()
 }

//skapat funktion för templates för att kunna använda vid anrop av vyer
function applyTemplate(template) {
    content.innerHTML = ""
    clonedTemplate = template.content.cloneNode(true) 
    content.appendChild(clonedTemplate)
}

//skapat funktion för att storea användarnamn och lösenord
function store(namn1, lösenord1) {
    console.log(namn1, lösenord1)
    localStorage.setItem("inMatatNamn", namn1)
    localStorage.setItem("inMatatLösenord", lösenord1)
}

//skapat en funktion med en ifsats som loggar in användaren om användarnamn och lösenord stämmer
//annars skickas användaren till en felsida, localstorage sparar även variabel values
function login(){    
    const inMatatNamn = document.getElementById("inMatatNamn")
    const inMatatLösenord = document.getElementById("inMatatLösenord")

    if (inMatatNamn.value == namn && inMatatLösenord.value == lösenord) {
        välkommenvy()
        store (inMatatNamn.value, inMatatLösenord.value)    
    }

    else {
        felVy()
    }
}

//skapat en funktion för att komma tillbaka till startsidan om man har skrivit fel användarnamn eller lösenord
function tillbaka() {
    startVy()
}

//skapat en funktion för att ta bort värdena från localstorage
function logout(){
    localStorage.removeItem("inMatatNamn")
    localStorage.removeItem("inMatatLösenord")
    startVy()
}

//en funktion för att se om användaren är inloggad, alltså om användarnamn och lösenord
//finns storeat i localstorage, om variablerna inte är tomma så är användaren inloggad
function checklogin(){
    const inMatatNamn = localStorage.getItem("inMatatNamn")
    const inMatatLösenord = localStorage.getItem("inMatatLösenord")
    console.log(inMatatNamn, inMatatLösenord)    
    return inMatatNamn == namn && inMatatLösenord == lösenord
}

function startVy(){
    applyTemplate(startsidaTemplate)
    document.getElementById("loggaIn").addEventListener("click", login)
}

function välkommenvy(){
    applyTemplate(välkommenTemplate)
    document.getElementById("loggaUt").addEventListener("click", logout)
}

function felVy(){
    applyTemplate(felTemplate)
    document.getElementById("försökIgen").addEventListener("click", tillbaka)
}








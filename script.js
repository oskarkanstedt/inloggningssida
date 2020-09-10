//intiera const för användarnamn och lösenord, samt hämta templates och values från index
const namn = "test";
const lösenord = "1234";
const felTemplate = document.getElementById("felTemplate")
const startsidaTemplate = document.getElementById("startsidaTemplate")
const content = document.getElementById("content")
const välkommenTemplate = document.getElementById("välkommenTemplate")

if (checklogin()){
    applyTemplate (välkommenTemplate)
    document.getElementById("loggaUt").addEventListener("click", logout)
}

 else {
    applyTemplate (startsidaTemplate)
    document.getElementById("loggaIn").addEventListener("click", login)
 }

//skapat funktion för templates för att kunna använda vid anrop av vyer
function applyTemplate(template) {
    content.innerHTML = ""
    clonedTemplate = template.content.cloneNode(true) 
    content.appendChild(clonedTemplate)
}

//skapat funktion för att storea användarnamn och lösenord
function store(namn1, lösenord1) {
    localStorage.setItem("inMatatNamn", namn1)
    localStorage.setItem("inMatatLösenord", lösenord1)
}

//skapat en funktion med en ifsats som loggar in användaren om användarnamn och lösenord stämmer
//annars skickas användaren till en felsida, localstorage sparar även variabel values
function login(){    
    const inMatatNamn = document.getElementById("inMatatNamn")
    const inMatatLösenord = document.getElementById("inMatatLösenord")

    if (inMatatNamn.value == namn && inMatatLösenord.value == lösenord) {
        applyTemplate (välkommenTemplate)
        store (inMatatNamn.value && inMatatLösenord.value)    
        document.getElementById("loggaUt").addEventListener("click", logout)   
    }

    else {
        applyTemplate (felTemplate)
        document.getElementById("försökIgen").addEventListener("click", tillbaka)
    }
}

//skapat en funktion för att komma tillbaka till startsidan om man har skrivit fel användarnamn eller lösenord
function tillbaka() {
    applyTemplate (startsidaTemplate)
}

//skapat en funktion för att ta bort värdena från localstorage
function logout(){
    localStorage.removeItem(inMatatNamn.value)
    localStorage.removeItem(inMatatLösenord.value)
    applyTemplate (startsidaTemplate)
}

//en funktion för att se om användaren är inloggad, alltså om användarnamn och lösenord
//finns storeat i localstorage, om variablerna inte är tomma så är användaren inloggad
function checklogin(){
    const inMatatNamn = localStorage.getItem("inMatatNamn")
    const inMatatLösenord = localStorage.getItem("inMatatLösenord")

    return inMatatNamn.value == namn && inMatatLösenord.value == lösenord
}







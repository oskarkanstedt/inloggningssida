//intiera const för användarnamn och lösenord, samt hämta templates och values från index
const namn = "test";
const lösenord = "1234";
const felTemplate = document.getElementById("felTemplate")
const startsidaTemplate = document.getElementById("startsidaTemplate")
const content = document.getElementById("content")
const välkommenTemplate = document.getElementById("välkommenTemplate")

//clona template för att kunna använda detta som en mall för anrop sedan
function applyTemplate(template) {
    content.innerHTML = ""
    clonedTemplate = template.content.cloneNode(true) 
    content.appendChild(clonedTemplate)
}

applyTemplate (startsidaTemplate)

document.getElementById("loggaIn").addEventListener("click", function(){
    const inMatatNamn = document.getElementById("inMatatNamn")
    const inMatatLösenord = document.getElementById("inMatatLösenord")
    if (inMatatNamn.value == namn, inMatatLösenord.value == lösenord){
        applyTemplate (välkommenTemplate)
    }

    else {
        applyTemplate (felTemplate)
    }

});

/*skapa en function för när användaren klickar på knappen
document.getElementById("loggaIn").addEventListener
("click", function() {
    if (inmatatNamn.value == namn, inmatatLösenord.value == lösenord) {
        const clonedTemplateRätt = välkommenTemplate.content.cloneNode(true);
        startsidaTemplate.innerHTML=""
        startsidaTemplate.appendChild(clonedTemplateRätt)
    }

    else {
        (inmatatNamn.value == namn, inmatatLösenord.value == lösenord) {
            const clonedTemplateFel = felTemplate.content.cloneNode(true);
            startsidaTemplate.innerHTML=""
            startsidaTemplate.appendChild(clonedTemplateFel)
    }


})*/





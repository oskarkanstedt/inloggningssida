//intiera const för användarnamn och lösenord
const namn = "test";
const lösenord = "1234";
const inmatatNamn = document.getElementById("inMatatNamn");
const inmatatLösenord = document.getElementById("inMatatLösenord");
const felTemplate = document.getElementById("felTemplate")
const startsidaTemplate = document.getElementById("startsidaTemplate")
const startsidaDiv = document.getElementById("startsidaDiv")

function applyTemplate(välkommenTemplate) {
    startsidaDiv.innerHTML = ""
    välkommenTemplate = välkommenTemplate.startsidaDiv.cloneNode(true)
    startsidaDiv.appendChild(välkommenTemplate)
}

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





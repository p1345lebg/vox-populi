const load_suggestions = () => {
    fetch("../datas/suggestionsLoi.json")
        .then(response => {
            if (!response.ok){
                throw new Error('erreur réseau')
            }
            return response.json();
        })
        .then(data => {
            const main = document.getElementById("main");

            var suggestionsTempo = ""
            data.forEach((element, index) => {
                suggestionsTempo += `
                    <div class="suggestionLoi" id="suggestionLoi${index}" onclick="select_suggestion(${index})">
                        <h2>${element.nom}</h2>
                        <p>${element.details}</p>
                        <p>${element.categories}</p>
                        <p class="autor">${element.redactor}</p>
                    </div>
                `;
            })
            main.innerHTML = `
                <div class="suggestionList">
                    ${suggestionsTempo}
                </div>
            `;
        });
}

const select_suggestion = (indexSuggestion) => {
    fetch("../datas/suggestionsLoi.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('erreur réseau')
            }
            return response.json()
        })
        .then(data => {
            const main = document.getElementById("main");
            var avisPositif = "";
            var avisNegatif = "";
            data[indexSuggestion].avis.favorables.forEach(element => {
                avisPositif += `
                    <div>
                        <p>${element.nom}</p>
                        <p>${element.avis}</p>
                        <p>${element.note}</p>
                        <p>${element.nbNote}</p>
                    </div>
                `
            });

            data[indexSuggestion].avis.defavorables.forEach(element => {
                avisNegatif += `
                    <div>
                        <p>${element.nom}</p>
                        <p>${element.avis}</p>
                        <p>${element.note}</p>
                        <p>${element.nbNote}</p>
                    </div>
                `
            });

            main.innerHTML = `
                <div class="suggestionLoiDetail">
                    <h2>${data[indexSuggestion].nom}</h2>
                    <p>${data[indexSuggestion].details}</p>
                    <p>${data[indexSuggestion].categories}</p>
                    <p>${data[indexSuggestion].redactor}</p>
                </div>
                <div class="suggestionAvis">
                    <div class="suggestionAvisPositif">
                        <p>avis favorables</p>
                        ${avisPositif}
                    </div>
                    <div class="suggestionAvisDefavorable">
                        <p>avis defavorables</p>
                        ${avisNegatif}
                    </div>
                </div>
            `
        })
}

load_suggestions()
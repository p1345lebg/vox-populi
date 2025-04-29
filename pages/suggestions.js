const load_suggestions = () => {
    fetch("/datas/suggestionsLoi.json")
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
                        <buttononclick="select_suggestion(${index})>voir plus</button>
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
    fetch("/datas/suggestionsLoi.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('erreur réseau')
            }
            return response.json()
        })
        .then(data => {
            const main = document.getElementById("main");

            main.innerHTML = `
                <div class="suggestionLoiDetail">
                    <h2>${data[indexSuggestion].nom}</h2>
                    <p>${data[indexSuggestion].details}</p>
                    <p>${data[indexSuggestion].categories}</p>
                    <p>${data[indexSuggestion].redactor}</p>
                </div>
            `
        })
}
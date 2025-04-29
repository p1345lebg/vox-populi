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
                    <div classe="suggestionLoi" id="suggestionLoi${index}">
                        <h2>${element.nom}</h2>
                        <p>${element.details}</p>
                        <p>${element.categories}</p>
                        <p>${element.redactor}</p>
                        <buttononclick="select_suggestion(${index})>voir plus</button>
                    </div>
                `;
            })
            main.innerHTML = suggestionsTempo
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
                <div classe="suggestionLoi">
                    <h2>${data[indexSuggestion].nom}</h2>
                    <p>${data[indexSuggestion].details}</p>
                    <p>${data[indexSuggestion].categories}</p>
                    <p>${data[indexSuggestion].redactor}</p>
                </div>
            `
        })
}
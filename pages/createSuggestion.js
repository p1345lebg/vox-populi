const load_create_suggestion = () => {
    const main = document.getElementById("main");
    main.innerHTML = `
        <div class"creerSuggestion">
            <h1>soumetre une suggestio our une loi</h1>
            <input type="text" class="PlaceholderNameSuggestion" id="suggestionName" placeholder="nom de la suggestion" />
            <input type="text" class="PlaceholderAccrocheSuggestion" id="suggestionAccroche" placeholder="phrase d'accroche de la suggestion de la suggestion" />
            <textarea id="suggestionContent" placeholder="contenu de la suggestion"></textarea>
            <input type="text" class="PlaceholderAutorSuggestion" id="suggestionAutor" placeholder="auteur(s) de la suggestion" />
            <button class="btn-submit" onclick="create_suggestion()">soumettre</button>
        </div>
    `
}

const create_suggestion = () => {
    const nom = document.getElementById("suggestionName").value;
    const phraseAccroche = document.getElementById("suggestionAccroche").value;
    const details = document.getElementById("suggestionContent").value;
    const autor = document.getElementById("suggestionAutor").value;
    const textesConsernes = [];
    const categories = [];

    const suggestion = {
        "nom" : nom,
        "phraseAccroche" : phraseAccroche,
        "details" : details,
        "textesConsernes" : textesConsernes,
        "categories" : categories,
        "autor" : autor,
        "avis" : {
            "favorables" : [],
            "defavorables" : []
        }
    }
    console.log(suggestion)
}

load_create_suggestion()
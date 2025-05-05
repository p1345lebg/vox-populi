console.log('ok')

const load_create_suggestion = () => {
    const main = document.getElementById("main");
    main.innerHTML = `
        <div class"creerSuggestion">
            <h1>soumetre une suggestio our une loi</h1>
            <input type="text" class="PlaceholderNameSuggestion" id="suggestionName" placeholder="nom de la suggestion" />
            <input type="text" class="PlaceholderAccrocheSuggestion" id="suggestionAccroche" placeholder="phrase d'accroche de la suggestion de la suggestion" />
            <textarea id="suggestionContent" placeholder="contenu de la suggestion"></textarea>
            <input type="text" class="PlaceholderAutorSuggestion" id="suggestionAutor" placeholder="auteur(s) de la suggestion" />
            <button class="submit" onclick="create_suggestion()">soumettre</button>
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
        "nom" : "caca",
        "phraseAccroche" : "on peut vendre notre caca",
        "details" : "on peut vendre notre caca",
        "textesConsernes" : ["DDHC"],
        "categories" : ["economie", "ecologie"],
        "autor" : "richard",
        "avis" : {
            "favorables" : [{
                "nom" : "michel michel",
                "avis" : "le caca c'est délicieux",
                "nbNote" : 1,
                "note" : 5
                }
            ],
            "defavorables" : [{
                "nom" : "jean michel",
                "avis" : "oh nom cela vas a l'encontre de la vie pivée (tout le monde pourrais se procurer notre ADN)",
                "nbNote" : 1,
                "note" : 3
                }
            ]
        }
    }
    console.log(suggestion)
}

load_create_suggestion()
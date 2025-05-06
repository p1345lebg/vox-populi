const load_create_suggestion = () => {
    const main = document.getElementById("main");
    main.innerHTML = `
        <div class"creerSuggestion">
            <h1>soumetre une suggestio our une loi</h1>
            <input type="text" class="PlaceholderNameSuggestion" id="suggestionName" placeholder="nom de la suggestion" />
            <input type="text" class="PlaceholderAccrocheSuggestion" id="suggestionAccroche" placeholder="phrase d'accroche de la suggestion de la suggestion" />
            <textarea id="suggestionContent" placeholder="contenu de la suggestion"></textarea>
            <input type="text" class="PlaceholderAutorSuggestion" id="suggestionAutor" placeholder="auteur(s) de la suggestion" />
            <div class="avertissementSuggestion">
                <p>Attention ! Remplire avec de fausse informations est passible de XXXX€ d'amande et de X années de prison pour fraude identitaire. Dans de cas d'une éventuelle erreur, veuillez contacter le support.</p>
                <p>Attention ! Suggerer une loi à but humoristique est passible de XXXX€ d'amendes pour utilisation néfaste d'un service d'Etat</p>
                <input type="checkbox" id="agreeSuggestion" />
                <label for="agreeSuggestion" name="agreeSuggestion">j'accepte les conditions précedemment citées</label>
                <div id="agreeMessage"></div>
            </div>
            <button class="btn-submit" onclick="create_suggestion()">soumettre</button>
        </div>
    `
}

const create_suggestion = () => {
    const agree = document.getElementById("agreeSuggestion").checked;
    const agreeMessage = document.getElementById("agreeMessage");
    console.log(agree)
    if (!agree){
        agreeMessage.innerHTML = "<p>veuillez accepter les modalités</p>"
    }
    else{
        agreeMessage.innerHTML = "<p>votre suggestion vas être traité, merci de votre participation</p>"
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
}

load_create_suggestion()
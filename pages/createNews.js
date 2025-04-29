console.log('ok')

const load_create_article = () => {
    const main = document.getElementById("main");
    main.innerHTML = `
        <div class"creerArticle">
            <h1>creer article</h1>
            <input type="text" class="PlaceholderNameArticle" id="articleName">nom de l'article</input>
            <textarea id="articleContent"></textarea>
            <input type="date" class="PlaceholderDateArticle" id="articleDate">date de l'article</input>
            <input type="text" class="PlaceholderAutorArticle" id="articleAutor">auteur de l'article</input>
            <button class="submit" onclick="create_article()">soumettre</button>
        </div>
    `
}

const create_article = () => {
    const title = document.getElementById("articleName").value;
    const image = null;
    const content = document.getElementById("articleContent").value;
    const autor = document.getElementById("articleAutor").value;
    const contry = null;
    const city = null;
    const date = document.getElementById("articleDate").value;
    const hour = null;

    const article = {
        "title" : title,
        "image" : image,
        "content" : content,
        "autor" : autor,
        "metadonnees" : {
            "country" : contry,
            "city" : city,
            "date" : date,
            "hour" : hour
        }
    }
    console.log(article)
}

load_create_article()
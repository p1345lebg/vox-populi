console.log('ok')

const create_article = () => {
    const title = document.getElementById("articleName").value;
    const image = null;
    const content = document.getElementById("articleContent").value;
    const autor = document.getElementById("articleAutor").value;
    // country et city lié à l'utilisateur
    const contry = null;
    const city = null;

    const date = document.getElementById("articleDate").value;
    const hour = null; // obtenable avec js

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
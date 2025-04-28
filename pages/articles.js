const load_articles = () => {
    fetch('./datas/articles.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('erreur réseau')
            }
            return response.json();
        })
        .then(data => {
            const main = document.getElementById("main");

            var articlesTempo = ""
            data.forEach((element,index) => {
                articlesTempo += `
                    <div class="article" id="article${index}">
                        <h2>${element.title}</h2>
                        <p>${element.content}</p>
                        <p>${element.autor}</p>
                        <button onclick="select_article(${index})">voir plus</button>
                    </div>
                `;
            });
            main.innerHTML = articlesTempo;
        });
}

const select_article = (indexArticle) => {
    fetch("./datas/articles.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('erreur réseau')
            }
            return response.json()
        })
        .then(data => {
            const main = document.getElementById("main");

            main.innerHTML = `
                <div classe="article">
                    <h2>${data[indexArticle].title}</h2>
                    <p>${data[indexArticle].content}</p>
                    <p>${data[indexArticle].autor}</p>
                </div>
            `
        })
}

load_articles();
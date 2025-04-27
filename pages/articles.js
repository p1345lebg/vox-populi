const load_articles = () => {
    fetch('datas/articles.json')
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
                    </div>
                `;
            });
            main.innerHTML = articlesTempo;
        });
}

load_articles();
const load_articles = () => {
  fetch("/datas/articles.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("erreur réseau");
      }
      return response.json();
    })
    .then((data) => {
      const main = document.getElementById("main");

      var articlesTempo = "";
      data.forEach((element, index) => {
        articlesTempo += `
                    <div class="article" id="article${index}" onclick="select_article(${index})">
                        <h2>${element.title}</h2>
                        <p>${element.content}</p>
                        <p class="autor">${element.autor}</p>
                        <p class="date">${element.metadonnees.date} à ${element.metadonnees.hour}</p>
                        <img class="purpleArrow" src="/assets/flecheViolet.png" alt="Not Found">
                    </div>
                `;
      });
      main.innerHTML = `
        <div class="articleListe">
          ${articlesTempo}
        </div>
      `;
    });
};

const select_article = (indexArticle) => {
  fetch("/datas/articles.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("erreur réseau");
      }
      return response.json();
    })
    .then((data) => {
      const main = document.getElementById("main");

      main.innerHTML = `
                <div class="articleDetail">
                    <h2>${data[indexArticle].title}</h2>
                    <p>${data[indexArticle].content}</p>
                    <p>${data[indexArticle].autor}</p>
                </div>
            `;
    });
};

load_articles();

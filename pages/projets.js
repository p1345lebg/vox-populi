const load_propositions = () => {
    fetch("../datas/propsLoi.json")
        .then(response => {
            if (!response.ok){
                throw new Error('erreur réseau')
            }
            return response.json();
        })
        .then(data => {
            const propositions = document.getElementById("propositions");

            var propsTempo = ""
            data.forEach((element, index) => {
                console.log(element)
                propsTempo += `
                    <div classe="propLoi" id="propLoi${index}">
                        <h2>${element.nom}</h2>
                        <p>${element.details}</p>
                        <p>${element.categories}</p>
                        <button onclick="select_proposition(${index})">voir plus</button>
                    </div>
                `;
            })
            propositions.innerHTML = propsTempo
        });
}

const select_proposition = (indexProp) => {
    fetch("../datas/propsLoi.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('erreur réseau')
            }
            return response.json()
        })
        .then(data => {
            const propositions = document.getElementById("propositions");

            propositions.innerHTML = `
                <div classe="propLoi">
                    <h2>${data[indexProp].nom}</h2>
                    <p>${data[indexProp].details}</p>
                    <p>${data[indexProp].categories}</p>
                </div>
            `
        })
}

load_propositions()
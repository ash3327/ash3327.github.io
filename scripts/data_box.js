_desc_box_path = "data/desc_box_data.json"
_education_path = "data/education_data.json"

function box_load(path, root_name, title_view_name, desc_view_name) {
    fetch(path)
        .then(response=>response.json())
        .then(json => {
            document.getElementById(title_view_name).textContent = json[root_name].title;
            document.getElementById(desc_view_name).textContent = json[root_name].content;
        });
}

function timeline_load(path, root_view_name) {
    fetch(path)
        .then(response=>response.json())
        .then(json => {
            var container = document.getElementById(root_view_name);
            json.forEach(element => {
                console.log(element);
                const node = document.createElement("li");
                node.style.setProperty("--accent-color", element["color"]);

                const datePanel = document.createElement("div");
                datePanel.classList.add("date");
                datePanel.appendChild(document.createTextNode(element["date"]))
                node.appendChild(datePanel);

                const titlePanel = document.createElement("div");
                titlePanel.classList.add("title");
                titlePanel.appendChild(document.createTextNode(element["title"]))
                node.appendChild(titlePanel);

                const subtitlePanel = document.createElement("div");
                subtitlePanel.classList.add("subtitle");
                subtitlePanel.appendChild(document.createTextNode(element["subtitle"]))
                node.appendChild(subtitlePanel);

                const descrPanel = document.createElement("div");
                descrPanel.classList.add("descr");
                descrPanel.appendChild(document.createTextNode(element["descr"]))
                node.appendChild(descrPanel);

                container.appendChild(node);
            });
        });
}
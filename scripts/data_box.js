_desc_box_path = "data/desc_box_data.json"

function box_load(path, root_name, title_view_name, desc_view_name) {
    fetch(path)
        .then(response=>response.json())
        .then(json => {
            document.getElementById(title_view_name).textContent = json[root_name].title;
            document.getElementById(desc_view_name).textContent = json[root_name].content;
        });
}
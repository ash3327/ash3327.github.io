_desc_box_path = "data/desc_box_data.json"
_education_path = "data/education_data.json"
_project_path = "data/project_data.json"

_colors = [
    "#E24A68", "#41516C", "#2D5F8D", "#6CA09C"
]

function box_load(path, root_name, title_view_name, desc_view_name) {
    fetch(path)
        .then(response=>response.json())
        .then(json => {
            document.getElementById(title_view_name).textContent = json[root_name].title;
            document.getElementById(desc_view_name).innerHTML = json[root_name].content;
        });
}

function _add_timeline_box(element, container, i, require_tags) {
    if (require_tags != null && !element.tags.some((tag)=>require_tags.includes(tag)) && !require_tags.includes(element.source))
        return false;
    const node = document.createElement("li");
    node.classList.add("timeline-element")
    node.style.setProperty("--accent-color", _colors[i]);

    const datePanel = document.createElement("div");
    datePanel.classList.add("date");
    datePanel.appendChild(document.createTextNode(element.date))
    node.appendChild(datePanel);

    const titlePanel = document.createElement("div");
    titlePanel.classList.add("title");
    titlePanel.appendChild(document.createTextNode(element.title))
    node.appendChild(titlePanel);

    const subtitlePanel = document.createElement("div");
    subtitlePanel.classList.add("subtitle");
    subtitlePanel.appendChild(document.createTextNode((element.source!==undefined?element.source+": ":"")+element.subtitle))
    node.appendChild(subtitlePanel);

    const descrPanel = document.createElement("div");
    descrPanel.classList.add("descr");
    descrPanel.innerHTML = element["descr"].join('');

    // GitHub and ReadMe links
    if (element.links !== undefined) {
        const linkPanel = document.createElement("p");
        linkPanel.style.textAlign = "right";
        linkPanel.style.paddingTop = "10px";

        Object.keys(element.links).forEach(key => {
            const linkButton = document.createElement("a");
            linkButton.classList.add("pa");
            linkButton.target = "_blank";
            linkButton.href = element.links[key].link;
            linkButton.innerHTML = "<i class='"+element.links[key].icon+"' style='font-size:18px'></i> "+key+"&nbsp;&nbsp;&nbsp;";
            linkPanel.appendChild(linkButton);
        });

        descrPanel.appendChild(linkPanel);
    }

    // Link to Project page with filter
    if (element.link !== undefined) {
        const is_project = element.link == '#projects';
        const button = document.createElement("button");
        button.classList.add("circ-button");
        button.style.setProperty("float", "right");
        button.innerHTML = (is_project ? "See All Projects" : "Learn More")+" <i class=\"fa fa-angle-double-right\" style=\"font-size: medium;\">";
        button.style.marginTop = "5px";
        button.onclick = ()=>{
            const link_text = is_project ? '' : '?filter='+element.link;
            parent.location.href='./index.html'+link_text+'#projects';
        }
        descrPanel.appendChild(button);
        
        descrPanel.style.paddingBottom = "50px";
    }

    node.appendChild(descrPanel);
    container.appendChild(node);
    return true;
}

function timeline_load(path, root_view_name, require_tags=null) {
    var container = document.getElementById(root_view_name);
    var i = 0;
    fetch(path)
        .then(response=>response.json())
        .then(json => {
            json.forEach(element => {
                if (_add_timeline_box(element, container, i, require_tags)) {
                    i ++;
                    i %= _colors.length;
                }
            });
        })
        .then(()=>{
            if (require_tags != null && root_view_name == 'project_timeline') {
                var elem = {
                    "date": "",
                    "title": "See More...",
                    "subtitle": "",
                    "descr": [],
                    "link": "#projects"
                };
                _add_timeline_box(elem, container, i, null);
            }
        });    
}
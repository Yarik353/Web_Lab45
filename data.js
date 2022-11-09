const main = document.getElementById("data_main")
const keys = ["full_name", "id_card", "faculty", "date_of_birth", "address"]

function showData(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('full_name'))

    for(let i = 0; i < keys.length; i++){
        let p = document.createElement('p');
        p.innerHTML = keys[i] + ": " + urlParams.get(keys[i]);
        main.appendChild(p)
    }
}

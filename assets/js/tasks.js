//Portée globale

const tache_liste = document.getElementById("liste-taches");
const tache_input = document.getElementById("tache-input");
const btn_ajouter_tache = document.getElementById("btn-ajouter-tache");
const btn_supprimer = document.getElementById("btn-ajouter-tachdzdzdzde");
//event

const ajouter_tache = () => {
  btn_ajouter_tache.addEventListener("click", (event) => {
    event.preventDefault();
    const tache_item = document.createElement("li");
    tache_item.className = "list-group-item tache_item";
    const btn_supprimer = document.createElement("button");
    btn_supprimer.className = "btn btn-danger supprimer-tache";
    btn_supprimer.innerHTML = "X";
    btn_supprimer.id = "btn-supprimer";
    const tache = tache_input.value;
    console.log(tache);
    tache_item.innerHTML = tache;
    tache_liste.appendChild(tache_item); //creer <li> da,s <ul>
    tache_item.appendChild(btn_supprimer); //Dans <li> j'ajoute <button>
    btn_supprimer.addEventListener("click", () => {
      console.log("test de clic");
    })


  });
}


ajouter_tache();

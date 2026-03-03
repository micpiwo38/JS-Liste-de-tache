//Tableau vide des taches
let tasks = [];
//La liste des taches
const taskList = document.getElementById('taskList');
//Le formulaire des taches
const taskForm = document.getElementById('taskForm');
//Le champ <input> du formulaire
const taskInput = document.getElementById('taskInput');

//Creer un <li>
function createTaskElement(taskText) {
  //Creer la balise <li>
  const li = document.createElement('li');
  //Ajout de l'attribut class a <li class="task-item"></li>
  li.className = 'task-item';
  //Creer une <span>
  const span = document.createElement('span');
  //Ajout de l'attibut class <span class="task-text"></span>
  span.className = 'task-text';
  //Ajout du paramètre texte de la fonction a la <span>
  span.textContent = taskText;
  //Creer un bouton de supression
  const deleteBtn = document.createElement('button');
  //Ajouter une classe
  deleteBtn.className = 'delete-btn';
  //Ajouter le texte
  deleteBtn.textContent = 'Supprimer';
  //Ajouter un evenement clic => appel de la fonction supprimer tache
  deleteBtn.addEventListener('click', function() {
    deleteTask(li, taskText);
  });
  //Ajouter <span> a <li>
  li.appendChild(span);
  //Ajouter <button> a <li>
  li.appendChild(deleteBtn);
  //La fonction retourne l'element HTML <li>
  return li;
}
//2 paramètres <li> et le texte
function deleteTask(liElement, taskText) {
  //Supprime l'element <li>
  liElement.remove();
  //Stocké l'index d'un <li>
  const index = tasks.indexOf(taskText);
  //Un tableau commence par l'index tableau[0] => donc on supprimer l'avant dernier

  if (index > -1) {
    //La méthode splice() des instances de Array modifie le contenu d'un tableau en supprimant
    // ou remplaçant des éléments existants et/ou en ajoutant de nouveaux éléments en place.
    tasks.splice(index, 1);
  }
  //Appel de la fonction la liste est vide
  checkEmptyList();
}

//Verifier que la liste n'estpas vide
function checkEmptyList() {
  //Si la liste est vide
  if (tasks.length === 0) {
    //Creer un <li>
    const emptyMessage = document.createElement('li');
    //Ajouter une classe
    emptyMessage.className = 'empty-message';
    //Ajouter du texte a <li>
    emptyMessage.textContent = 'Aucune tâche pour le moment. Ajoutez-en une !';
    //<ajouter <li> a la liste <ul> parente
    taskList.appendChild(emptyMessage);
  } else {
    //Sinon => on recupère toutes les classe empty-message
    const emptyMessage = document.querySelector('.empty-message');
    if (emptyMessage) {
      emptyMessage.remove();
    }
  }
}

//Afficher les taches
function displayTasks() {
  //La liste est vide par defaut
  taskList.innerHTML = '';
  //Boucle de parcours du tableau de tache
  tasks.forEach(function(task) {
    //Creer l'element <li>
    const li = createTaskElement(task);
    //Ajouter <li> a <ul> parent
    taskList.appendChild(li);
  });
  //Verifier que la liste est vide ou non
  checkEmptyList();
}

//Ajouter une tache => en paramètre la valeur du champ <input>
function addTask(taskText) {
  //Ajouter la tache au tableau
  tasks.push(taskText);
  //Creer lelement <li>
  const li = createTaskElement(taskText);
  //Recuperer toutes les classe .empty-message
  const emptyMessage = document.querySelector('.empty-message');
  if (emptyMessage) {
    emptyMessage.remove();
  }
  //Ajouter <li> a <ul>
  taskList.appendChild(li);
}
//Evenement du DOM => a la soumission du formulaire
taskForm.addEventListener('submit', function(event) {
  //Evite un refresh de la page
  event.preventDefault();
  //Recuperer la valeur du champ <input> => trim() supprimer les espaces
  const newTask = taskInput.value.trim();
  //Si le champ n'est pas vide
  if (newTask !== '') {
    //Appel de la fonction ajouter
    addTask(newTask);
    //Vider le formulaire
    taskForm.reset();
    //Garder le focus (la souris) dans le champ <input>
    taskInput.focus();
  }
});
//Appel de la fonction afficher les taches
displayTasks();

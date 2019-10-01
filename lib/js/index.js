"use strict"; // - ajouter le routing
// - à mettre en async/await

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var axios_1 = __importDefault(require("axios"));

var handleResponse = function (response) {
  console.log(response.data); // console.log(response.status);
  // console.log(response.statusText);
  // console.log(response.headers);
  // console.log(response.config);
};

var handleError = function (error) {
  if (error.response) {
    console.log(error.response.data); // console.log(error.response.status);
    // console.log(error.response.headers);
  } else {
    console.log(error.message);
  }
}; // création d'une fonction qui ajoute un <li> contenant le nom du 'character' et son image.


function addCharacterToList(el) {
  var ul = document.getElementById("character_list");
  var li = document.createElement("li");
  var img = document.createElement("img");
  var p_name = document.createElement("p");
  p_name.setAttribute("class", "name");
  p_name.innerText = el.name;
  var p_desc = document.createElement("p");
  p_desc.setAttribute("class", "short_desc");
  p_desc.innerText = el.shortDescription;
  var div_option = document.createElement("div");
  div_option.setAttribute("id", "option");

  if (el.image !== null) {
    img.src = 'data:image/gif;base64,' + el.image;
    img.width = 80;
    img.height = 80;
    li.appendChild(img);
  }

  if (el.name !== null) {
    li.appendChild(p_name);
  }

  if (el.shortDescription !== null) {
    li.appendChild(p_desc);
  }

  li.appendChild(div_option);

  if (ul !== null) {
    ul.appendChild(li);
  }
} //    UTILISATION DE AXIOS
// exemple 1 ; recevoir un array[] de résultats (cf console)


axios_1.default.get('https://character-database.becode.xyz/characters').then(handleResponse).catch(handleError); // exemple 2 ; agir sur cet array en récupérant les noms (cf console)

axios_1.default.get('https://character-database.becode.xyz/characters').then(function (response) {
  response.data.forEach(function (element) {
    console.log(element.name);
  });
}).catch(handleError); // exemple 3 ; rendre la réponse de cette requête axios dans l'html en remplissant une liste des 'characters' ;

axios_1.default.get('https://character-database.becode.xyz/characters').then(function (response) {
  response.data.forEach(function (element) {
    addCharacterToList(element);
  });
}).catch(handleError);
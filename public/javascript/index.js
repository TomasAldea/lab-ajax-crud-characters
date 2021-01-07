const charactersAPI = new APIHandler('http://localhost:8000');

const characterContainer = document.querySelector(".characters-container")


window.addEventListener('load',  () => {

  characterContainer.innerHTML = ""

  document.getElementById('fetch-all').addEventListener('click', async function (event) { // buscar todos y render

   const allCharacters = await charactersAPI.getFullList()
   characterContainer.innerHTML = ""
      for (const key in allCharacters) {
        var id = allCharacters[key].id
        var name = allCharacters[key].name
        var occupation = allCharacters[key].occupation
        var isCartoon = allCharacters[key].cartoon
        var weapon = allCharacters[key].weapon
        characterContainer.innerHTML += `
      
        <div class="character-info">
        <div class="id">id: ${id} </div>
          <div class="name">Character Name: ${name} </div>
            <div class="occupation">Character Occupation: ${occupation} </div>
          <div class="cartoon">Is a Cartoon?: ${isCartoon} </div>
          <div class="weapon">Character Weapon: ${weapon} </div>
        </div>
    `
    }

  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) { // buscar por ID y render

    var idCharacter = Number(document.getElementsByName('character-id').item(0).value);

    const oneCharacter = await charactersAPI.getOneRegister(idCharacter)

    characterContainer.innerHTML = ""

    characterContainer.innerHTML += `
    <div class="character-info">
    <div class="id">id: ${oneCharacter.id} </div>
      <div class="name">Character Name: ${oneCharacter.name} </div>
        <div class="occupation">Character Occupation: ${oneCharacter.occupation} </div>
      <div class="cartoon">Is a Cartoon?: ${oneCharacter.cartoon} </div>
      <div class="weapon">Character Weapon: ${oneCharacter.weapon} </div>
    </div>
`


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

 


  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
 

  });
});

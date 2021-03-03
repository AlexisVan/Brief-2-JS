
function keyDown() {


// Je créer ma fonction 
document.addEventListener('keydown', function(e){ 
    // Je creer mes Variables pour récuperer toutes les touches
    let touche = e.key;
    let audio = document.getElementById(touche);
    // Je selectionne seulement les touches qui contiennent un audio sinon je retourne rien
    if(!audio) return; 
    
    // Dans l'ordre j'indique de mettre a zéro le son ensuite play
    audio.currentTime = 0;
    audio.play();
    
    // Je selectionne mon bouton pour lui ajouter la class
    audio.previousElementSibling.classList.add('sound-active')
    
    // Je créer une fonction dans ma fonction pour supprimer la class
    audio.onended = function() {
    audio.previousElementSibling.classList.remove('sound-active');  
     };
    
    console.log(audio.previousElementSibling)
    })
    
}
    // au click 
    
   
   
  function sonClick () {
   
    document.addEventListener('click', function(e){ 
       
       
       let touche = e.target.nextElementSibling.getAttribute('id')
       let audio = document.getElementById(touche);
       console.log(e.target)
       
       if(!audio) return; 
       audio.currentTime = 0;
       audio.play();
       audio.previousElementSibling.classList.add('sound-active')
       audio.onended = function() {
       audio.previousElementSibling.classList.remove('sound-active');  
        };
       
       console.log(audio.previousElementSibling)
       })

  }

  // J'exporte mon code en regroupant mes deux fonctions
  export function all(){
      keyDown();
      sonClick();
  }
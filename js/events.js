//define functions here

function getIt(){
  $('p').on("click",alert('Hey!'))
  
}

function frameIt(){
  $('img').on('load',function(){
    $('img').class = '.tasty'
  } )
}

function pressIt(){
  $('input').on('keydown',function(key){
    if (parseInt(key.which) === 71){
      alert('You pressed the \'G\' button.')
    } 
  })
}

function submitIt(){
  $('form').on('submit',alert('Your form is going to be submitted now.'))
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()
submitIt()
});

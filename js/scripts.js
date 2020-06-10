// Business logic
function pigLatinTranslator(){

}

// User interface
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    let inputSentance = $("input#input-sentence").val();
  });
});
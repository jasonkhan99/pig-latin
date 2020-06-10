// Business logic
function pigLatinTranslator(){
  for (let i=0; splitSentence.length > i; ++i) {
    if splitSentence[i]
  };
};

// User interface
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    let inputSentence = $("input#input-sentence").val();
    let splitSentence = inputSentence.split(" ");
    console.log(splitSentence);
  });
});


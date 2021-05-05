var wordArray = [];
//this function adds the word
function addWord() {
  document.getElementById("status").innerHTML = "";
  text = document.getElementById('word').value;
  wordArray.push(text);
  $('#list').append(`
    <div class="card">
      <div class="card-body">
        <p class="text-center">` + text + `</p>  
      </div>
    </div>  
  `); 
}
// this function searches if the given word is already in the list
function searchWord() {
  text = document.getElementById('word').value;
  if (wordArray.indexOf(text) != -1) {
    document.getElementById("status").style.color = "green";
    document.getElementById("status").innerHTML = "The word is in the list";
  } else {
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "The word is not in the list";
  }
}
// this function clears the list
function clearList() {
  location.reload();
}

      var wordArray = [];
      //this function adds the word
      function addWord() {
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
          swal({
            text: "The word is in the list",
            icon: "success",
          });
        } else {
          swal({
            text: "The word is NOT in the list",
            icon: "error",
          });
        }
      }
      // this function clears the list
      function clearList() {
        location.reload();
      }
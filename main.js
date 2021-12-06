// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal");
likeGlyph = document.querySelectorAll(".like-glyph");





document.addEventListener("DOMContentLoaded", () => {
  modal.className += " hidden";

  for (let i = 0; i < likeGlyph.length; i++) {
    likeGlyph[i].addEventListener("click", () => {
      mimicServerCall()
        .then((r) => {
          if (r) {
            if (likeGlyph[i].textContent == FULL_HEART) {
              likeGlyph[i].textContent = EMPTY_HEART
            }
            else {
              likeGlyph[i].textContent = FULL_HEART;
            }
          }
        })
        .catch((error) => {
          document.getElementById("modal").className -= " hidden";
          setTimeout(() => {
            document.getElementById("modal").className += " hidden"

          }, 3000
          )
          console.log(error);
        })
    })
  }
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

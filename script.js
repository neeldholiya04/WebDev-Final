let post = document.getElementById("postButton");
let textArea = document.querySelector(".textarea-cont");
let right = document.querySelector(".right");
let deleteMode = false;
let comment = document.querySelector(".comment");
let edit = document.querySelector(".edit");
let del = document.querySelector(".delete");

post.addEventListener("click", function () {
  generatePost(textArea.value);
  textArea.value = "";
});

function generatePost(task) {
    let ticketCont = document.createElement("div");
    ticketCont.className = "feed";
    ticketCont.innerHTML = `<div class="feed">
    <div class="feedHeader">
                  <div class="divLeft">
                      <img class="profile_image" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="" >
                      <h4>John Doe</h4>
                  </div>
                  <div class="divRight">
                      <img class= "edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                      <img class= "delete" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                  </div>
              </div>
              <div class="mainFeed">
                  <p>${task}</p>
              </div>
              <div class="feedFooter">
                  <img class="comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="">
                  <img class="like" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
              </div>
  </div>`;
    console.log(ticketCont);
    right.appendChild(ticketCont);
  let like = document.querySelector(".like");
  like.addEventListener("click", function () {
    console.log("clicked");
    like.src =
      "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
  });
  let comment = document.querySelector(".comment");
  comment.addEventListener("click", function () {
    console.log("comment");
    let commentBox = document.createElement("div");
    commentBox.className = "commentBox";
    commentBox.innerHTML = `<div class="commentBox">
        <input type="text" class="commentInput" placeholder="Add a comment">
        <button class="commentButton">Post</button>`;
    ticketCont.appendChild(commentBox);
    let commentButton = document.querySelector(".commentButton");
    commentButton.addEventListener("click", function () {
      console.log("postButton clicked");
      let commentInput = document.querySelector(".commentInput").value;
      let commentDiv = document.createElement("div");
      commentDiv.className = "commentDiv";
      commentDiv.innerHTML = `<div class="commentDiv">
              <p>${commentInput}</p>`;
      ticketCont.appendChild(commentDiv);
      commentBox.remove();
    });
  });

  let del = document.querySelector(".delete");
  let feed = document.querySelectorAll(".feed");
  del.addEventListener("click", function () {
    deleteMode = !deleteMode;
    console.log("Delete Mode On");

    let mainCont = document.querySelector(".right");
    mainCont.addEventListener("click", function (e) {
      if (deleteMode) {
        console.log("Delete Mode On");
        console.log(e);
        if (e.target.classList.contains("feed")) {
          e.target.remove();
        }
        if (e.target.classList.contains("feedHeader")) {
          e.target.parentNode.remove();
        }
        if (e.target.classList.contains("feedFooter")) {
          e.target.parentNode.remove();
        }
        if (e.target.classList.contains("mainFeed")) {
          e.target.parentNode.remove();
        }
        if (e.target.classList.contains("divLeft")) {
          e.target.parentNode.parentNode.remove();
        }
        if (e.target.classList.contains("divRight")) {
          e.target.parentNode.parentNode.remove();
        }
        if (e.target.classList.contains("profile_image")) {
          e.target.parentNode.parentNode.parentNode.remove();
        }
        if (e.target.classList.contains("edit")) {
          e.target.parentNode.parentNode.parentNode.remove();
        }
        if (e.target.classList.contains("delete")) {
          e.target.parentNode.parentNode.parentNode.remove();
        }
        if (e.target.classList.contains("like")) {
          e.target.parentNode.parentNode.remove();
        }
        if (e.target.classList.contains("comment")) {
          e.target.parentNode.parentNode.remove();
        }
    }
    });
  });

  let edit = document.querySelector(".edit");
  edit.addEventListener("click", function (editedTask) {
    console.log("edit");
    let editBox = document.createElement("div");
    editBox.className = "editBox";
    editBox.innerHTML = `<div class="editBox">
        <input type="text" class="editInput" placeholder="Edit your post">
        <button class="editButton">Post</button>`;
    ticketCont.appendChild(editBox);
    let editButton = document.querySelector(".editButton");
    editButton.addEventListener("click", function () {
      console.log("postButton clicked");
      let editInput = document.querySelector(".editInput").value;
      let editDiv = document.createElement("div");
      editDiv.className = "editDiv";
      editDiv.innerHTML = `<div class="editDiv">
            <p>${editInput}</p>`;
      ticketCont.appendChild(editDiv);
      editBox.remove();
    });
  });
}





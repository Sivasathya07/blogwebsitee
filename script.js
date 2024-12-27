document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("comment-form");
    const commentsList = document.getElementById("comments-list");
  
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const commentText = document.getElementById("comment-text").value.trim();
  
      if (username && commentText) {
        const newComment = document.createElement("li");
        newComment.innerHTML = <strong>${username}:</strong> ${commentText};
        commentsList.appendChild(newComment);
        commentForm.reset();
      } else {
        alert("Please fill in all fields!");
      }
    });
  });
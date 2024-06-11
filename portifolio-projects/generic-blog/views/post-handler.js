const postsContainerDiv = document.getElementById("published-posts");
//Creating elements
const post = document.createElement("div");
const postTitle = document.createElement("p");
const postText = document.createElement("p");
//Adding information to elements
postTitle.textContent = 'JS Content';
postText.textContent = 'JS Long text'
//Appending elements in the page
postsContainerDiv.appendChild(postTitle);
postsContainerDiv/appendChild(postText);

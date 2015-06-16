var mainContainer = document.getElementById('main-container');
var beginingLine = document.getElementById('begining-line');

var giveDay = function(timestamp) {
  var time = new Date(timestamp);
  return (time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear());
}

var Post = function (date, title, text) {
  var post = document.createElement('div');
  // appending new post after beginingLine element
  beginingLine.parentNode.insertBefore(post, beginingLine.nextSibling);  
  post.classList.add('post');
  var header = document.createElement('p');
  post.appendChild(header);
  header.classList.add('post-header');
  var content = document.createElement('p');
  post.appendChild(content);
  content.classList.add('post-content');

  // var timestamp = Date.now();

  header.innerHTML = date + ' : ' + title;
  content.innerHTML = text;
}
var postTitle = document.getElementById('post-title');
var postContent = document.getElementById('textarea');

var addNewPost = function(event) {
  event.preventDefault();
  if (postTitle.value && postContent.value) {
    new Post(postTitle.value, postContent.value);
  }
}

for (i = 0; i < posts.length; i++) {
  new Post(posts[i].date, posts[i].title, posts[i].text);
}
// var button = document.getElementById('button');
// button.addEventListener('click', addNewPost);
// new Post('16', 'tytuł probny', 'text powitalny na probe');
// new Post('16', 'tytul 2', 'tekst posta 22222222222');

// nie z forma tylko z post.js jako obiekty tak jak w king books
var mainContainer = document.getElementById('main-container');
var beginingLine = document.getElementById('begining-line');

var giveDay = function(timestamp) {
  var time = new Date(timestamp);
  return (time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear());
}

var Post = function (title, text) {
  var post = document.createElement('div');
  // mainContainer.appendChild(post);
  beginingLine.parentNode.insertBefore(post, beginingLine.nextSibling);  
  post.classList.add('post');
  var header = document.createElement('p');
  post.appendChild(header);
  header.classList.add('post-header');
  var content = document.createElement('p');
  post.appendChild(content);
  content.classList.add('post-content');

  var timestamp = Date.now();

  header.innerHTML = (giveDay(timestamp)) + ' : ' + title;
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

var button = document.getElementById('button');
button.addEventListener('click', addNewPost);
new Post('tytuł probny', 'text powitalny na probe');
new Post('tytul 2', 'tekst posta 22222222222');

// nie z forma tylko z post.js jako obiekty tak jak w king books
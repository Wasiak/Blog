var posts = [
	{
    'date': '16/06/2015',
    'title' : 'first post',
    'text' : 'First post on blog ;) '
  },
  {
    'date' : '16/06/2015',
    'title' : 'Coding blog',
    'text' : 'Today I wrote a code for this blog. As for now it has very basic look and options. \
              Posts are added from an array of elements. In future it will be loaded from JSON. \
              I\'m going to update blog regular and I hope I will handle it. During work on this blog I learned \
              new thing for me: appending element to the DOM after another chosen element with "insertBefore" method. \
              I\'m curious how many people will read my reflections.'
  },
  {
    'date' : '21/06/2015',
    'title' : 'First comercial project',
    'text' : 'This week I finished my first comercial project. Thanks to my friend Michał, who is my mentor and for now my boss ;) \
              He helped me in coding harder parts of code and again gave my countless advices and tips. During this project I\'ve been using \
              Fabric.js framework to draw elements on canvas and make them movable, rotatalbe and scalable. I learned many new technics of coding \
              and knew many new options available in JavaScript. One of completely new thing for me was writing a requests to comunicate with server. \
              Till now I have no idea how it works but now I understand it, of course I know only basic way of using it but next time I will \
              use requests it will take me much less time to code it correctly. In some next post I will write about some problems which I had \
              during this project and ways of solving it with specific example.'
  },
  {
    'date' : '22/06/2015',
    'title' : 'Border collision in fabric.js',
    'text' : 'I just wanna say few words about problem I had in last project. I have few objects on canvas (fabric canvas).\
              Framework knows them as fabric.Objects. Problem was about colliding objects with borders of canvas. I couldn\'t \
              find in any fabric tutorial or documents function detecting this collision. But I found function detecting collision \
              between objects on canvas. So after severals trials I thought about using border as a object. Unfortunately it didn\'t \
              works. When I was sitting and thinking about it I saw a fly which want to escape from room through the window \
              but curtain stoped it. I thought  that this is "invisible" border of room. Then I got an answer. I draw on canvas \
              4 lines along the borders of canvas with transparent color and now I could use fabric objects collision detection \
              function to check if any of my objects is collidin with any of my 4 lines/borders which are fabric objects to.\
              It works perfect.  I\'m proud of myself because of this idea ;)'
  },
  {
    'date' : '22/06/2015',
    'title' : 'code cleaner idea',
    'text' : 'Today I have some time so a will write some post. Yesterday I spend whole day coding page, 5 steps to buy  something \
              from this page. As for now is just a HTML with no JS. But I wrote this page earlier with no graphics, with just \
              divs and random pictures. Now finaly look is a little difference than that first one. So yesterday I wrote new version\
              with new spec. Some elements are same but some isn\'t. Now I have complete page and css file full of useless class I used \
              at the beginning. I hava an idea to write some script to get all classes from css file and check which of them I\'m not using. \
              As for now is just an idea but I really want to write it ;) I will let you know when I finish ;)'
  }
];
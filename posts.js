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
  },
  {
    'date' : '11/07/2015',
    'title' : 'Knockout JS framework',
    'text' : 'Last time I don\'t have too much time because of new project I am involved in. I want to write just about this project. \
              It\'s my first big project with big amount of components and binding between them. We are using KnockoutJS framework which offers \
              data binding which allow us to comunicate between components. One of most frequent options we are using is observable  parameter. \
              When some parameter has an observable value it will change displaing value in every place in document we display it\'s value without \
              necessity of our runing function checking actuall value when f.e. click or on key up when writing something in input window. This \
              project is generally online shop. So observable value is very useful for us f.e. to show actuall quantity of some items in cart.'
  },
  {
    'date' : '30/07/2015',
    'title' : 'Presta Shop hard fight',
    'text' : 'Today I finished work on Presta Shop template for our project of online shop. Finish is maybe too big word but for now all pages are ready in 3 size \
              including mobile version. I\'m waiting now for new module my friend is writing to choose the colors and quantity of product.(shop is selling paints) \
              Presta is for me completely new thing, as most of tools I\'m using in my new job. Mate told me that our designer choose one template and mt only work \
              will be changing some css values as colors, fonts or some backgrounds, maybe border style etc. and add pictures of ours product. \
              I thought, ok it seems not so hard. I was so wrong. Our template don\'t support new version of Presta (1.6) and I have to change so many things that I \
              thought so many times that I\'d rather do it on my own at very beginning than changing values of this template. I have to change css, html, some js and \
              back office paraneters. I have to modifie positions and generally view of page in every widht of screen. Now I know how hooks works in Presta back office \
              but it\'s so hard to learn this for me. I was thinking that some rules of coding like same type of naming css class or id or js function is useless and \
              not so important. But now I know it\'s very important. In our template is such a mess in this. One element id\'s is writing dash-notation but another in \
              CamelCase. Ok, but next one is dash-floor_notation and another in halfCamelCase. I used so many rude words when I was coding this that I didn\'t know I \
              know as much of them. Of course it\'s not finish of work with this project but now I know problems and troubles I will have. Most important lesson for me \
              is to keep one notation in naming classes, variables or functions because later is so much easier to change something. It take me too long to realise how \
              helpful it is ;)'
  },
  {
    'date' : '20/08/2015',
    'title' : 'Switch to  Linux',
    'text' : "Yesterday I started my adventure with Linux. My friends told me since long time to do it but I didn't want to. Whole life I was using \
              Windows  and I was afraid of terminal. They told me that in Linux I can get a 'normal' desktop. I'm not a big fan of changes, specially \
              big changes. At monday when I return from my vacations without my computer I tried to do something but at very beginning I had a problems \
              with starting correctly Windows 8.1. Ther were  some strange errors and nothing was helping. I had to 'refresh' my system and I lost all my \
              apps installed not from official app store. I lost my browser and all my bookmarks. I was angry bacause I cannot back to my job. \
              My friend said: 'Kuba it's sign. It's time' And I knew what he was talking about :P Yesterday I installed Linux Mint with Cinnamon interface and \
              I'm happy. I think this GUI is even better than in Windows :P I have some trouble with terminal but I think it was good decision. After \
              two days I see Linux it's not so hard to understand and use. When only I will know more terminal commands I'm sure I'll thank my friends ;)"
  }
];
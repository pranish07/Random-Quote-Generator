let quotes = ['Be yourself; everyone else is already taken.― Oscar Wilde', 
'You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt,Sing like there\'s nobody listening, And live like it\'s heaven on earth.”― William W. Purkey',
    'Be the change that you wish to see in the world.― Mahatma Gandhi',
    'No one can make you feel inferior without your consent. ― Eleanor Roosevelt,',
    'Live as if you were to die tomorrow. Learn as if you were to live forever.― Mahatma Gandhi',
    'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.― Martin Luther King Jr.',
    'Without music, life would be a mistake.― Friedrich Nietzsche',
    'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
    'We are all in the gutter, but some of us are looking at the stars.― Oscar',
    'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.― Neil Gaiman, Coraline'
];
function newQuotes(){
let randomNumber= Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteGenerator').innerHTML = quotes[randomNumber];
}
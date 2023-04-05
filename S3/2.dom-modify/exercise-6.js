const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

let ul = document.createElement('ul');

let li = [];
let appsNodeText = [];

for (let i = 0; i < apps.length; i++) {
    
    li[i] = document.createElement('li');
    appsNodeText[i] = document.createTextNode(apps[i]);
    
    li[i].appendChild(appsNodeText[i]);
    ul.appendChild(li[i]);
}

let body = document.querySelector('body');
body.appendChild(ul);
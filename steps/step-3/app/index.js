// Require the SASS stylesheet
import './style.scss';

// Require the compiled template, getting a rendering function
import template from './template.html';

var programmingLanguages = [
  {
    name: 'Java',
    creator: 'James Gosling'
  },
  {
    name: 'JavaScript',
    creator: 'Brendan Eich'
  },
  {
    name: 'Ruby',
    creator: 'Yukihiro Matsumoto'
  },
  {
    name: 'Python',
    creator: 'Guido van Rossum'
  },
  {
    name: 'PHP',
    creator: 'Rasmus Lerdorf'
  },
];

// Create a container element
var container = document.createElement('UL');

// Append the container to the document
document.body.appendChild(container);

// Some ES6 JavaScript
programmingLanguages.forEach(language => {
  // Craete a new list item
  var item = document.createElement('LI');

  // Render the template for a given language
  item.innerHTML = template(language);

  // append the new item to the list
  container.appendChild(item);
});

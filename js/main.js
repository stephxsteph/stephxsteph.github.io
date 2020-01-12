//quote array
var facts = ["I'm constantly learning", "Did someone say bike camping?", "I'm an outdoor adventurest", "I have a passion for web design and love to create for web and mobile devices.", "I'm getting into running", "I have a dog named Sitka", "Outdoor adventures are always calling", "I create useful and beautiful things for humans", "I'm a firm believer that clean code is !important"];
shuffle(facts);

var factIndex = 0;

function aboutMe() {
  factIndex++;
  document.getElementById('me').innerHTML = facts[factIndex % (facts.length - 1)];
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}
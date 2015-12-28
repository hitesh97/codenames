var poison = randomIndex(25),
    blue = [],
    red = [],
    index;

while (blue.length < 10) {
  index = randomIndex(25);

  if (index !== poison && blue.indexOf(index) === -1) {
    blue.push(index)
  }
}

while (red.length < 9) {
  index = randomIndex(25);

  if (index !== poison && red.indexOf(index) === -1 && blue.indexOf(index) === -1) {
    red.push(index)
  }
}

function randomIndex(length) {
    return Math.floor(Math.random() * (length));
}

$(document).ready(function() {
  for(var i=0; i<25; i++) {
    var color;

    if (i === poison) {
      color = 'black';
    } else if (red.indexOf(i) !== -1) {
      color = 'red';
    } else if (blue.indexOf(i) !== -1) {
      color = 'blue';
    } else {
      color = 'gray';
    }

    $('#color-grid').append('<div class="word ' + color + '"><div class="container"></div></div>');
  }
});
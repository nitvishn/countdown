var then;
var r, g, b;
var center = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  r = random(200, 255);
  g = random(200, 255);
  b = random(200, 255);

  background(r, g, b);
  then = moment([2019, 5, 12, 11]);
}

function draw(){
  console.log(mouseX, mouseY)
  background(r, g, b);
  var now = moment();
  textSize(32);
  body = select('#body')
  el = text('The countdown for the end of IGCSE', 0, 50)
  units = ['milliseconds', 'seconds', 'minutes', 'hours', 'days', 'weeks'];
  fill(0);
  lHeight = 0;
  textSize(16);
  for (var i = 0; i < units.length; i++){
    k = text(then.diff(now, units[i]) + ' ' + units[i] + '.', center, 150 + i*25);
  }
  diff = then.diff(now, 'milliseconds');
  string = "";

  ms = diff % 1000
  diff = (diff - ms)/1000
  s = diff % 60
  diff = (diff - s)/60
  m = diff % 60
  diff = (diff - m)/60
  h = diff%24
  diff = (diff - h)/24
  d = diff

  textSize(24)
  text(d + " days, " + h + " hours, " + m + " minutes, " + s + " seconds, and " + ms + " milliseconds.", center, 100)
}

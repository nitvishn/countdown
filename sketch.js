var then;
var r, g, b;

function setup(){
  createCanvas(windowWidth, windowHeight);
  r = random(200, 255);
  g = random(200, 255);
  b = random(200, 255);

  background(r, g, b);
  then = moment([2019, 4, 3, 10]);
}

function draw(){
  background(r, g, b);
  var now = moment();
  textSize(32);
  text("Countdown for your IGCSE Chemistry Paper 4", 50, 50);
  units = ['milliseconds', 'seconds', 'minutes', 'hours', 'days', 'years'];
  fill(0);
  lHeight = 0;
  textSize(16);
  for (var i = 0; i < units.length; i++){
    k = text(then.diff(now, units[i]) + ' ' + units[i] + '.', 50, 150 + i*25);
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
  text(d + " days, " + h + " hours, " + m + " minutes, " + s + " seconds, and " + ms + " milliseconds.", 50, 100)

  text("Yes", windowWidth/2, 500);
  text("We're all fucked", windowWidth/2, 800);
}

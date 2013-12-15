console.log('Simply.js demo!');

var q = new Array();
q[0] = "Portugal";
q[1] = "Canada";
q[2] = "USA";

var a = new Array();
a[0] = "Lisbon";
a[1] = "Ontario";
a[2] = "Washington";

var random=Math.floor(Math.random()*3)

simply.setText({
  title: 'PebbleFlash!',
  body: 'Welcome to PebbleFlash! Flip wrist to start!',
}, true);

simply.on('accelTap', function(e) {
  simply.setText({subtitle: q[random],
  });
});

simply.on('accelTap', function(e) {
  simply.setText({body: a[random],
  });
});





simply.begin();

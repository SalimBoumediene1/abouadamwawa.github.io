// Define color variables:
red = [33, 17, 3];
orange = [62, 94, 62];
green = [39, 82, 13];
blue = [39, 81, 26];
purple = [47, 67, 37];
letterColors = [red, orange, green, blue, purple];

// This variable controls the smallest distance at which a mouse will make the dots react
mouseResponseThreshold = 50;

// This variable controls how strongly the dots will try to return to their starting position
friction = 0.85;

// This variable controls how much the dots will rotate when interacting
rotationForce = 0.02;

message = 'Boumediene Salim';

drawName(message, letterColors);
bounceBubbles();

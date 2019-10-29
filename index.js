// Define color variables:
red = [33, 17, 3];
orange = [61, 42, 7];
green = [122, 84, 13];
blue = [158, 130, 31];
purple = [243, 249, 69];
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

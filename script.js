var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      line += (i + 1) + "." + katzDeliLine[i] + ".";
    }
    line = line.slice(0, line.length - 2);
    return "The line is currently: " + line;
  }
}

// console.log(takeANumber(katzDeliLine, "Ada")); // "Welcome, Ada. You are number 1 in line."
// console.log(takeANumber(katzDeliLine, "Grace")); // "Welcome, Grace. You are number 2 in line."
// console.log(takeANumber(katzDeliLine, "Kent")); // "Welcome, Kent. You are number 3 in line."
 
// console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
 
// console.log(nowServing(katzDeliLine)); // "Currently serving Ada."
 
// console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent"
 
// console.log(takeANumber(katzDeliLine, "Matz")); // "Welcome, Matz. You are number 1 in line."
 
// console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
 
// console.log(nowServing(katzDeliLine)); // "Currently serving Grace."
 
// console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Kent, 2. Matz"
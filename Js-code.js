'use strict'
var name = prompt('whats your name');
alert (name +' welcome to joes about page');
var q1 = prompt('Where are you from');
if (q1 === 'South dakota')
{
  alert('so is Joe');
}
else 
{
  alert(q1 + ' is a really nice place');
}
var question1 = prompt('Does joe come from a military family');
if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y')
{
  alert('Correct');
}
else (questinon1 === 'no' || question1 === 'n')
{
  alert('incorrect joe does come from a military family');
}
// console.log(question1 + "joe does come from a military family")
var question2 = prompt('Does joe have a cdl');
if (question2 === 'yes' || question2 === 'y')
{
  alert('Correct');
}
else (questinon2 === 'no' || question2 === 'n')
{
  alert('incorrect joe does have a cdl');
}
// console.log(question2 + "joe does have a cdl")
var question3 = prompt('does joe have a secret clearance');
if (question3 === 'yes' || question3 === 'y')
{
  alert('Correct');
}
else (questinon3 === 'no' || question3 === 'n')
{
  alert(' joe does have a secret clearance');
}
// console.log(question3 + "joe does have a secret clearance")
var question4 = prompt('Is the Marine corps the best branch');
if (question4 === 'yes' || question4 === 'y')
{
  alert('Correct');
}
else (questinon4 === 'no' || question4 === 'n')
{
  alert('Dont be a dummy it is the best branch');
}
// console.log(question4 + "dont be a dummy it is the best branch")
var question5 = prompt('Does airforce even count as job');
if (question5 === 'yes' || question5 === 'y')
{
  alert('hahahahaha you can not be serious');
}
else (questinon5 === 'no' || question5 === 'n')
{
  alert('correct');
  alert ('jsut kidding they are people to');
}
// console.log(question4 + "just kidding airman are people to")



var q3 = prompt('What machine gun has the nickname ma deuce');
if (q3 === 'm2 .50 caliber machine gun')
{
  alert('good job');
}
else 
{
  alert(q3 + ' is the nickname for the m2 .50 caliber machine gun');
}
var q4 = prompt('')
// console.log('the ma deuce id the m2 .50 cal')

var q2 = prompt('what branch of the military was joe in')
switch(q2){
case ('usmc'):
  alert('you are smart!')
  alert('joe was a Marine')
  // console.log('joe was a marine')
break;
case 'marines':
  alert('you are smart!')
  alert('joe was a Marine')
  // console.log('joe was a marine')
break;
case 'Marines':
  alert('you are smart!')
  alert('joe was a Marine')
  // console.log('joe was a marine')
break;
case 'Air force':
  alert('do they even count as military') 
  alert('just kidding airmen are people too') 
  alert('joe was a Marine')
  // console.log('joe was a marine')
break;
case 'air force':
  alert('do they even count as military') 
  alert('just kidding airmen are people too') 
  alert('joe was a Marine')
  // console.log('joe was a marine')
  case 'Army':
    alert('nope try again')
    alert('joe was a Marine') 
    // console.log('joe was a marine')
 break;
 case 'army':
    alert('nope try again') 
    alert('joe was a Marine')
    // console.log('joe was a marine')
 break;
 case 'navy':
  alert('sorry my skates arnt sharp enough')
  alert('joe was a Marine')
  // console.log('joe was a marine') 
break;
case 'Navy':
  alert('sorry my skates arnt sharp enough') 
  alert('joe was a Marine')
  // console.log('joe was a marine')
break;
case 'Coast gaurd':
  alert('joe is not a puddle pirate') 
  alert('joe was a Marine')
  // console.log('joe was a marine')
break;
case 'coast gaurd':
  alert('joe is not a puddle pirate') 
  alert('joe was a Marine')
  // console.log('joe was a marine')
break;
default:
  alert('joe was in the Marines')
  // console.log('joe was a marine')


}


// Check if the user is ready to play!

confirm("Are you ready for A D V E N T U R E ?");

var name = prompt("I'll take that as a BOO-YA I'm ready for ADVENTURE! So, got a name?");

if(name.length >=7){
	alert("Long name, but I like it. Got a nice ring to it... "+ name);
}

else {
	alert("Short and sweet. Kind of catchy too... "+name+" "+name+" "+name+" "+name);
}

var age = prompt("But enough fooling around. How old are you then,"+" "+name+"?");

if(age < 30) {
    document.write("Hang tight, little sprout. Adventuring is no walk in the park.");
}
else {
    document.write("Better gear up, buttercup! Adventuring is under way!");
}

var userAnswer1 = prompt("This is how it works: After reading the updated storyline in your browser, reply to me, the prompt! But you could call me Promptsy. Sound good?");


if (userAnswer1 === "I love you") {
	alert("I love you too, and I've always loved you,"+" "+name+". I was just too shy to admit it.. oh,... oh hoo hoo *cries*");
}
else {
	alert("Not like I need your reassurance. You're in too deep now anyway. Mwa.. mwahahahaaa!!!");
}

document.write("\<br>\ Little Bunny Foo Foo is hopping through the forrest, scooping up the field mice and bopping them on the head.");

document.write(" SNAAAAAAKE! Aaaaah, it's A SNAAAAKE!");

document.write(" Little bunny foo foo has to throw the field mice at it, and FAST!");

var userAnswer2 = prompt("How many field mice do you throw?");

if (userAnswer2 >=99999) {
	alert("Oh, thank goodness for you,"+" "+name+". You may have exterminated the entire field mouse population, but you saved one bunny rabbit.");
}
else {
	alert("That won't do it, you foo foo FOOL! There's a reason I shouted this SNAAAAAAKE in all CAPS!");	
}

document.write("\<br>\WOW he disapeared! That's great.");

document.write(" So, the little bunny starts heading down deeper into the forrest and...");

var nickName = name.substring(0,3);

var userAnswer3 = prompt("Hey, ramdom thought. But, can I call you"+" "+nickName+" "+"for short?");

if (userAnswer3 === "yes") {
	alert("Sweet cheeses and cool breezes,"+" "+nickName);
}
else {
	alert("Cool. Just wondering,"+" "+nickName);
}

document.write(" and foo foo steps in some field mousey poo poo! Oh noes!");

var userAnswer4 = prompt("What's 78248 + 9237794 - 49723 * 901720942 / 23892?");

if (userAnswer4 === 349725175688.6195){
	alert("Hey. Promptsy is the computer here.");
}
else {
	alert("I know... that's just way too much work.");
}

var userAnswer5 = prompt("Now about that poo on your bunny feet. Do you stop to wipe it off or keep walking?");

if (userAnswer5 === "stop") {
	alert("OH NO! Again with the snakes!");
}

else {
	alert("SNAAAAAAKE!!! Ahhhh, What're the odds?");
}

document.write("\<br>\ Well I guess it just goes to show, if you're going to be a bunny walking in the woods alone, you should probably wear some shoes.");

var feedback = prompt("Rate my adventure 1 to 10, 10 being highest, 1 being lowest");

if(feedback >=8) {
    document.write("\<br>\awwwww soopah sweeeet :3");
}
else {
    document.write("\<br>\you butt.");
}

let hacker1 = "Emerson Fittipaldi"
let hacker2 = "Michael Schumacher"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else
    if (hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
        console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
    }
//----------------------------------------///


console.log(hacker1.toUpperCase().split("").join(" "))
console.log(hacker2.toUpperCase().split("").join(" "))



// ---------Dos formas de reversar ----- //

///--- 1 ---///
console.log(hacker1.split("").reverse().join(""))

///--- 2 ---///
let alverres = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    alverres += hacker2[i]
}
console.log(alverres)

//--------------------------------//

if (hacker1.localeCompare(hacker2) <= -1) {
    console.log("The driver's name goes firts");
} else
    if (hacker1.localeCompare(hacker2) >= 1) {
        console.log("Yo, the navcigator's name goes firts definitely");
    } else {
        console.log("What?! you both have the same name!");
    }


//--------------------------------------------------------------//

let loremParagraphs = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis elementum nibh tellus molestie. Dui faucibus in ornare quam viverra orci. Purus in mollis nunc sed id semper risus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Eu ultrices vitae auctor eu. Vitae turpis massa sed elementum tempus egestas sed sed. Eget nullam non nisi est sit amet facilisis magna. Habitant morbi tristique senectus et netus et malesuada fames ac. Gravida neque convallis a cras semper. Amet purus gravida quis blandit. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Sed sed risus pretium quam vulputate dignissim. In hendrerit gravida rutrum quisque non tellus orci ac. Risus viverra adipiscing at in tellus integer. Lacus vestibulum sed arcu non. Morbi tristique senectus et netus et malesuada fames ac turpis. Massa placerat duis ultricies lacus sed turpis tincidunt. Volutpat sed cras ornare arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Arcu cursus vitae congue mauris rhoncus aenean vel elit. At lectus urna duis convallis. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Amet nisl purus in mollis nunc. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Id volutpat lacus laoreet non curabitur gravida arcu ac. Magna fringilla urna porttitor rhoncus dolor purus non. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Justo laoreet sit amet cursus sit amet dictum. Mauris augue neque gravida in. Neque convallis a cras semper auctor neque vitae tempus. Neque gravida in fermentum et sollicitudin. Venenatis urna cursus eget nunc. Purus semper eget duis at tellus at urna condimentum. Porta nibh venenatis cras sed felis eget. In ante metus dictum at tempor commodo. Urna molestie at elementum eu facilisis sed. Aliquet nec ullamcorper sit amet risus nullam eget. Auctor eu augue ut lectus arcu bibendum at varius vel.';
let words = loremParagraphs.toLowerCase().split(' ').length;
console.log(loremParagraphs.toLowerCase().split(' '));
console.log("La spring tiene " + words + " palabras.");

let lookingFor = "et"
let times = 0;

for (let i = 0; i < loremParagraphs.toLowerCase().split(' ').length; i++) {
    if (loremParagraphs.toLowerCase().split(' ')[i] == lookingFor.toLowerCase()) {
        times++;
    }
}
console.log("La palabra latina " + lookingFor + " aparece " + times + " veces.")



//---------------Pilandrome-------------------------//












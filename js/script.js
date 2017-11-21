class Fighter {
  constructor(name, armor, slogan) {
    var weapons = ['rock','paper','scissors'];
    this.name = name;
    this.weapon = weapons[randomIndex(0, weapons.length)];
    this.specialMove = ['body slam', 'RKO', 'F5', 'superkick', 'wmd'];
    this.armor = armor;
    this.male = true;
    this.slogan = slogan;
  }

}

var slogan1 = "You can't see me!";
var slogan2 = "It's damn true.";
var slogan3 = "The rock is cook'in.";

function battle(fighter1, fighter2, fighter3) {
  console.log(fighter1.slogan);
  console.log(fighter2.slogan);
  console.log(fighter3.slogan);

  if (fighter1.weapon.[0] === fighter2.weapon[0]) {
    console.log("It's a tie!");
  }
  else if (fighter1.weapon[0] && fighter2.weapon[1]) {
    console.log(fighter2.name + " wins!");
  }
  else if (fighter1.weapon[1] && fighter2.weapon[2]) {
    console.log(fighter2.name + " wins!");
  }
 }

var johnCena = new Fighter('John Cena', 'cloth', slogan1);
var kurtAngle = new Fighter('Kurt Angle', 'leather', slogan2);
var theRock = new Fighter('John Cena', 'chain mail', slogan3);

battle(johnCena, kurtAngle, theRock);

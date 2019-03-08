let Letter = require('./Letter');
let Word = require('./Word');
let inquirer = require("inquirer");
let wordArray = ["Insidious: The Last Key", "The Strange Ones", "Stratton", "Sweet Country", "The Commuter", "Proud Mary", "Acts of Violence", "Freak Show", "Humor Me", "Vazante", "Mary and the Witch's Flower", "12 Strong", "Den of Thieves", "Forever My Girl", "Maze Runner: The Death Cure", "The Insult", "Please Stand By", "Winchester", "A Fantastic Woman", "Armed", "The Cloverfield Paradox", "The 15:17 to Paris", "Fifty Shades Freed", "Peter Rabbit", "La Boda de Valentina", "Kri", "Permission", "Monster Family", "Golden Exits", "Black Panther", "Early Man", "Loveless", "The Party", "Nostalgia", "Black '47", "Samson", "Game Night", "Annihilation", "Every Day", "The Lodgers", "The Cured", "Red Sparrow", "Pickings", "Death Wish", "Foxtrot", "The Vanishing of Sidney Hall", "A Wrinkle in Time", "Gringo", "Thoroughbreds", "The Death of Stalin", "The Leisure Seeker", "The Hurricane Heist", "The Strangers: Prey at Night", "Tomb Raider", "Love, Simon", "I Can Only Imagine", "7 Days in Entebbe", "Furlough", "Josie", "Flower", "Pacific Rim Uprising", "Isle of Dogs", "Sherlock Gnomes", "Unsane", "Paul, Apostle of Christ", "Final Portrait", "Midnight Sun", "Followers", "Ready Player One", "Tyler Perry's Acrimony", "God's Not Dead: A Light in Darkness", "Gemini", "The Last Movie Star", "A Quiet Place", "Blockers", "You Were Never Really Here", "Chappaquiddick", "Pandas", "Lean on Pete", "The Miracle Season", "Beirut", "Rampage", "Truth or Dare", "The Rider", "Sgt. Stubby: An American Hero", "I Feel Pretty", "Super Troopers 2", "Traffik", "The House of Tomorrow", "Avengers: Infinity War", "Disobedience", "Backstabbing for Beginners", "Kings", "Overboard", "The Guardians", "The Cleanse", "Tully", "Bad Samaritan", "Life of the Party", "Breaking In", "The Seagull", "Terminal", "Revenge", "Deadpool 2", "Book Club", "First Reformed", "Pope Francis: A Man of His Word", "Show Dogs", "Solo: A Star Wars Story", "How to Talk to Girls at Parties", "In Darkness", "The Misandrists", "Future World", "Action Point", "Adrift", "Upgrade", "American Animals", "Social Animals", "Ocean's 8", "Won't You Be My Neighbor?", "Hereditary", "Hotel Artemis", "Superfly", "Incredibles 2", "Tag", "On Chesil Beach", "Gotti", "Jurassic World: Fallen Kingdom", "Boundaries", "Damsel", "The Domestics", "Sicario: Day of the Soldado", "Leave No Trace", "Uncle Drew", "Woman Walks Ahead", "The First Purge", "Ant-Man and the Wasp", "Sorry to Bother You", "Whitney", "Hotel Transylvania 3: Summer Vacation", "Skyscraper", "Eighth Grade", "Don't Worry, He Won't Get Far on Foot", "Shock and Awe", "Mamma Mia! Here We Go Again", "The Equalizer 2", "Blindspotting", "Unfriended: Dark Web", "Bleach", "Gauguin - Voyage de Tahiti", "Mission: Impossible – Fallout", "Teen Titans Go! To the Movies", "Detective Dee: The Four Heavenly Kings", "Hot Summer Nights", "Puzzle", "Christopher Robin", "The Darkest Minds", "The Spy Who Dumped Me", "Never Goin' Back", "The Miseducation of Cameron Post", "Billionaire Boys Club", "Dog Days", "The Meg", "BlacKkKlansman", "Slender Man", "A Prayer Before Dawn", "Crazy Rich Asians", "Alpha", "Mile 22", "Down a Dark Hall", "The Wife", "The Happytime Murders", "Searching", "Papillon", "A.X.L.", "Operation Finale", "Kin", "Juliet, Naked", "The Little Stranger", "Destination Wedding", "The Nun", "Peppermint", "The Predator", "White Boy Rick", "A Simple Favor", "The Children Act", "Lizzie", "Unbroken: Path to Redemption", "The House with a Clock in Its Walls", "Life Itself", "The Sisters Brothers", "Colette", "Assassination Nation", "Fahrenheit 11/9", "My Son", "Love, Gilda", "My Hero Academia: Two Heroes", "Night School", "Smallfoot", "The Old Man & the Gun", "Hell Fest", "Power of the Air", "Venom", "A Star Is Born", "The Hate U Give", "The Happy Prince", "First Man", "Bad Times at the El Royale", "Goosebumps 2: Haunted Halloween", "Beautiful Boy", "The Oath", "Halloween", "Can You Ever Forgive Me?", "Mid90s", "What They Had", "Wildlife", "Johnny English Strikes Again", "Hunter Killer", "Suspiria", "Indivisible", "Bullitt County", "Bohemian Rhapsody", "The Nutcracker and the Four Realms", "Nobody's Fool", "Boy Erased", "A Private War", "Bodied", "The Front Runner", "The Grinch", "The Girl in the Spider's Web", "Overlord", "Conundrum: Secrets Among Friends", "Fantastic Beasts: The Crimes of Grindelwald", "Widows", "Instant Family", "Ralph Breaks the Internet", "Creed II", "Robin Hood", "Green Book", "Roma", "The Favourite", "Shoplifters", "Pokémon the Movie: The Power of Us", "Mowgli: Legend of the Jungle", "The Possession of Hannah Grace", "Anna and the Apocalypse", "Capernaum", "Mary Queen of Scots", "Ben Is Back", "Spider-Man: Into the Spider-Verse", "Mortal Engines", "The Mule", "If Beale Street Could Talk", "Mary Poppins Returns", "Aquaman", "Bumblebee", "Welcome to Marwen", "Cold War", "Second Act", "Holmes & Watson", "Vice", "On the Basis of Sex", "Destroyer", "Black Mirror: Bandersnatch"];
let randomNum = 0;
let currentWord;
let wordComplete = false;
let guessesLeft = 0;
let promptMessage;
let wordsCorrect = 0;
let wordsWrong = 0;
let guessesArray = [];

let initRound = function (word) {
    return inquirer.prompt(
        {
            name: "guess",
            message: promptMessage
        }
    ).then(function (input) {
        let letterCorrect = word.check(input.guess);
        console.log('');
        console.log(word.toString());
        console.log('');
        let guessLetter = new Letter(input.guess, false);
        if (guessLetter.isInAlphabet) {
            if (guessesArray.includes(input.guess)) {
                promptMessage = 'You tried that letter already.';
            }
            else {
                guessesArray.push(input.guess);
                if (guessesLeft === 0) {
                    wordsWrong++;
                    console.log('BAD LUCK!');
                    console.log('');
                    console.log(wordsCorrect + ' films guessed');
                    console.log(wordsWrong + ' films missed');
                    console.log('');
                    console.log('NEXT FILM:');
                    guessesLeft--;
                }
                else if (word.guessed()) {
                    wordsCorrect++;
                    console.log('YOU GOT IT RIGHT!');
                    console.log('');
                    console.log(wordsCorrect + ' films guessed');
                    console.log(wordsWrong + ' films missed');
                    console.log('');
                    console.log('NEXT FILM:');
                    wordComplete = true;
                }
                else if (letterCorrect) {
                    promptMessage = 'CORRECT! Guess another letter';
                }
                else {
                    promptMessage = 'INCORRECT! ' + guessesLeft + ' misses remaining.';
                    guessesLeft--;
                }
            }
        }
        else {
            promptMessage = 'Invalid guess. Make sure to enter a single letter.';
        }
    });
};

async function run() {
    randomNum = Math.floor(Math.random() * wordArray.length);
    currentWord = new Word(wordArray[randomNum]);
    wordComplete = false;
    guessesLeft = 6;
    guessesArray = [];
    promptMessage = "Guess a letter!";
    console.log('');
    console.log(currentWord.toString());
    console.log('');
    do {
        await initRound(currentWord);
    } while (!wordComplete && guessesLeft >= 0);
    run();
}

console.log('2018 In Film: Word Guess Game')
run();
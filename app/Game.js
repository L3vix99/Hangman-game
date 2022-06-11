import { Quote } from './Quote.js';



class Game {

    currentStep = 0;
    lastStep = 8;

     

    quotes = [
        {
            text: 'avengers',
            category:'Kategoria: Film Marvela',
        },
        {
            text: 'geralt z rivii',
            category:"Kategoria: Główny bohater wiedźmina ",
        },
        {
        text: "programowanie w javascript",
        category: "Kategoria: Studia - przedmiot"
        }
    ];
constructor(
    {
    letterWrapper,
    categoryWrapper,
    wordWrapper,
    outputWrapper,
    
})
{
  this.letterWrapper = letterWrapper;
  this.categoryWrapper = categoryWrapper;
  this.wordWrapper = wordWrapper;
  this.outputWrapper = outputWrapper; 
  

  const {text,category} = this.quotes[Math.floor(Math.random()*this.quotes.length)];
  this.quotes = new Quote(text);
  categoryWrapper.innerHTML = category;


}


guess(letter) {
    event.target.disabled = true;
    if (this.quotes.guess(letter)){
        this.drawQoute();

    }
    else {
        this.currentStep++;
        document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
        if (this.currentStep == this.lastStep) {
            this.loosing();
        }
    }
    
}


 drawLetters(){
    for (let i=0; i<26; i++ ){
        const label = (i+10).toString(36);
        const button  = document.createElement("button");
        button.innerHTML = label;
        button.addEventListener('click',(event) => this.guess(label,event));

         
        this.letterWrapper.appendChild(button);    
}
 }
drawQoute(){
    const content = this.quotes.getContent();
    
    this.wordWrapper.innerHTML = content;

    if (!content.includes('_')){
        this.wining();
    }
}

    start(){

        document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
        this.drawLetters();
        this.drawQoute();      
}

wining() {

    this.wordWrapper.innerHTML = "Wygrałeś Koniec gry";
    this.letterWrapper.innerHTML= " ";
    this.categoryWrapper.innerHTML = " ";

    
}
loosing(){

    this.wordWrapper.innerHTML = "Przegrałeś KONIEC GRY"
    this.letterWrapper.innerHTML = " ";
    this.categoryWrapper.innerHTML = " ";
}

}
const game = new Game({
    letterWrapper: document.getElementById('letters'),
    categoryWrapper: document.getElementById('category'),
    wordWrapper: document.getElementById("word"),
    outputWrapper: document.getElementById('output'),
    

});

game.start();
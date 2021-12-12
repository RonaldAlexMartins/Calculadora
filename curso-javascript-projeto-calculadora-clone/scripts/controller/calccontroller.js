class CalcController {
  constructor(){
    this._locale = 'pt-BR';
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._displayCalcEL = document.querySelector("#display");
    this._currentDate;
    this.initialize; 
    this.initButtonsEvents;
  }

  initialize(){

    this.setDisplayDateTime();

    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);
  }

  setDisplayDateTime (){
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    this.displayDate = this.currentDate.toLocaleTimeString(this._locale)
  }

  initButtonsEvents () {
    let buttons = document.querySelectorAll ("#buttons > g, #parts > g");

    buttons.forEach((btn, index)=>{
      buttons.addEventListener ('click', e=> {
        console.log(btn.className.baseVal.replace("btn-",""));
      })
    })
    
  }

  get displayTime () {
    return this._timeEl.innerHTML;
  }
  set displayTime (value) {
    return this._timeEl.innerHTML = value;
  }
  get displayDate (){
    return this._dateEl.innerHTML;
  }
  set displayDate (value){
    return this._dateEl.innerHTML = value;
  }
  get displayCalc (){
    return this.displayCalcEL.innerHTML;
  }
  set displayCalc (value){
    this.displayCalcEL.innerHTML = value;
  }
  get currentDate(){
    return new Date();
  }
  set currentDate(value){
    this._currentDate = value;
  }
}
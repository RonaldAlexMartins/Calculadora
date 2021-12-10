class CalcController {
  constructor(){
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._displayCalcEL = document.querySelector("#display");
    this._currentDate;
    this.initialize; 
  }

  initialize(){
    setInterval()
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
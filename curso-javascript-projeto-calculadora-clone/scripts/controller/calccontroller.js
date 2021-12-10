class CalcController {
  constructor(){
    
    this._displayCalc;
    this._currentDate;
    this.initialize; 

  }

  initialize(){
    document.querySelector("#display");
    document.querySelector("#data");
    document.querySelector("#hora");
  }
  get displayCalc (){
    return this._displayCalc;
  }
  set displayCalc (valor){
    this._displayCalc = valor;
  }
  get currentDate(){
    return this._currentDate;
  }
  set currentDate(valor){
    this._currentDate = valor;
  }
}
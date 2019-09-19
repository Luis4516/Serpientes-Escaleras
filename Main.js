var btnJugador1 = document.querySelector("#btnJugador1").addEventListener("click", ()=> {
    j1.lanzarDado('jugador 1 ');

    if(j1.suma >= 100) {
        alert('Ganó el jugador 1');
        location.reload() //reiniciar el juego
    }
});

var btnJugador2 = document.querySelector("#btnJugador2").addEventListener("click", ()=> {   

    j2.lanzarDado('jugador 2 ');

    if(j2.suma >= 100) {
        alert('Ganó el jugador 2');
        location.reload() //reiniciar el juego
    }
    
});

class Jugador {
    constructor() {
        this._suma = 0;
    }
    get suma(){
        return this._suma;
    }
    
    lanzarDado(Jugador) {
    var avanzar = Math.trunc((Math.random()*6)+1);
    console.log('El dado cayó en ' + avanzar);

    this._suma += avanzar;
    console.log('El ' + Jugador + 'está en la casilla '  + this._suma);

        // 8 SERPIENTES
    if(this._suma == 17){
        this._suma = 7;
        console.log('Una serpiente te desborda a la casilla ' + this._suma);
    }else if(this._suma == 54){
        this._suma = 34;
        console.log('Una serpiente te desborda a la casilla ' + this._suma);
    }else if(this._suma == 62){
        this._suma = 19;
        console.log('Una serpiente te desborda a la casilla ' + this._suma);
    }else if(this._suma == 87){
        this._suma = 36;
        console.log('Una serpiente te desborda a la casilla ' + this._suma);
    }else if(this._suma == 93){
        this._suma = 73;
        console.log('Una serpiente te desborda a la casilla ' + this._suma);
    }else if(this._suma == 95){
        this._suma = 75;
        console.log('Una serpiente te desborda a la casilla ' + this._suma);
    }else if(this._suma == 98){
        this._suma = 79;
        console.log('Una serpiente te desborda a la casilla ' + this._suma);
    }else if(this._suma == 64){
        this._suma = 60;
        console.log('Una serpiente te desborda a la casilla ' + this._suma);
    }


        // 8 ESCALERAS
    if(this._suma == 4){
        this._suma = 14;
        console.log('Una escalera te lleva a la casilla ' + this._suma);
    }else if(this._suma == 1){
        this._suma = 38;
        console.log('Una escalera te lleva a la casilla ' + this._suma);
    }else if(this._suma == 9){
        this._suma = 31;
        console.log('Una escalera te lleva a la casilla ' + this._suma);
    }else if(this._suma == 21){
        this._suma = 42;
        console.log('Una escalera te lleva a la casilla ' + this._suma);
    }else if(this._suma == 28){
        this._suma = 84;
        console.log('Una escalera te lleva a la casilla ' + this._suma);
    }
    else if(this._suma == 51){
        this._suma = 67;
        console.log('Una escalera te lleva a la casilla ' + this._suma);
    }else if(this._suma == 72){
        this._suma = 91;
        console.log('Una escalera te lleva a la casilla ' + this._suma);
    }else if(this._suma == 80){
        this._suma = 99;
        console.log('Una escalera te lleva a la casilla ' + this._suma);
    }

    }
}

var j1 = new Jugador();
var j2 = new Jugador();
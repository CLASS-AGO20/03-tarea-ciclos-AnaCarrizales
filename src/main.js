export default class App {

    sumatoriaSerieUno(numero)
    {
        let operacion = 0;
        for(let i = 1; i <= numero; i = i + 1)
        {
            operacion = operacion + (1/i);
            
        }
        return operacion;
    }




}

let app = new App();
console.log(app.sumatoriaSerieUno(5));
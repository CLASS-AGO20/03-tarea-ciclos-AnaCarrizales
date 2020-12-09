export default class App 
{

    sumatoriaSerieUno(numero)
    {
        let operacion = 0;
        for(let i = 1; i <= numero; i = i + 1)
        {
            operacion = operacion + (1/i);
            
        }
        return operacion;
    }

    sumatoriaSerieDos(numero)
    {
        let i = 1;
        let operacion = 0;
        while(i <= numero)
        {
            if ((i != 1) && (i % 2 != 0))
            {
                operacion = operacion - (1/i);
            }
            if((i == 1) || (i % 2 == 0))
            {
                operacion = operacion + (1/i);
                
            }
            i++;
        } 
        return operacion;
    }

    esPrimo(numero)
    {
        let i = 1;
        let resultado;
        let multiplos;
        do
        {
            if((numero % 2 == 0) && (numero % i == 0) )
            {
                resultado = false;
                multiplos = multiplos + 1;
            }
            else if ((numero % 2 != 0) && (numero % i != 0))
            {
                resultado = true;
            }
            i++;
        }
        while(i <= numero);
        return resultado;
    }

    
}

let app = new App();

console.log("Probando sumatoriaSerieUno()");
console.log(app.sumatoriaSerieUno(5));

console.log("Probando sumatoriaSerieDos()");
console.log(app.sumatoriaSerieDos(5));

console.log("Probando esPrimo()");
console.log(app.esPrimo(4));
console.log(app.esPrimo(16));
console.log(app.esPrimo(17));
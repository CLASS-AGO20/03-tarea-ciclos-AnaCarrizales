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
        let i = numero;
        let a = numero;
        let resultado;
        let multiplos = 0;
        do
        {
            if(a % i == 0)
            {
                multiplos = multiplos + 1;
                resultado = true;
            }
            if (multiplos > 2)
            {
                resultado = false;
            }
            i--;
        }
        while(i >= 1);
        return resultado;
    }

    obtenerMultiplos(inicio, fin)
    {
        let i = inicio;
        let multiplos = "";
        do
        {
            if(i % 3 == 0)
            {
                multiplos = multiplos + i;;
            }
            i++;
        }
        while(i<=fin)
        return multiplos;
    }
    
}

let app = new App();

console.log("Probando sumatoriaSerieUno()");
console.log(app.sumatoriaSerieUno(5));

console.log("Probando sumatoriaSerieDos()");
console.log(app.sumatoriaSerieDos(5));

console.log("Probando esPrimo()");
console.log(app.esPrimo(4));
console.log(app.esPrimo(15));
console.log(app.esPrimo(17));

console.log("Probando obtenerMultiplos()");
console.log(app.obtenerMultiplos(10,25));
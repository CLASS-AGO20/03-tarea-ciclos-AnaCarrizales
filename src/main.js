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

    obtenerImpares(numero1,numero2)
    {
        let temporal;
        let impar = 0;
        let string = "";
        if(numero2 > numero1)
        {
            temporal = numero1;
            numero1 = numero2;
            numero2 = temporal;
        }
        for(let i = numero1; i >= numero2; i--)
        {
            if (i % 2 != 0)
            {
                if(impar == 0)
                {
                    impar = impar + i;
                    impar = impar + string;
                }
                else
                {
                    impar = impar + "," + i;
                    impar = impar + string;
                }
            }
        }
        return impar;
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

console.log("Probando obtenerImpares()");
console.log(app.obtenerImpares(5,10));
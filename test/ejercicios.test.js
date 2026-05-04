import { describe, it, expect } from 'vitest';

// Ejercicio de Vectores
import * as vectores from './pages/vectores/Actv Vectores.js';

//Actividad #1
import * as actv1 from './pages/actv 1/ejercicio 1.js';

//Actividad #2
import * as actv2 from './pages/actv 2/ejercicio 2.js';

//Actividad #3
import * as actv3 from './pages/actv 3/ejercicio 3.js';

//Actividad #4
import * as actv4 from './pages/actv 4/ejercicio 4.js';

//Actividad #5
import * as actv5 from './pages/actv 5/ejercicio 5.js';

// //Actividad #6
import * as actv6 from './pages/actv 6/ejercicio 6.js';

//Actividad #7
import * as actv7 from './pages/actv 7/ejercicio 7.js';

//Actividad #8
import * as actv8 from './pages/actv 8/ejercicio 8.js';

//Actividad #9
import * as actv9 from './pages/actv 9/ejercicio 9.js';

//Actividad #10
import * as actv10 from './pages/actv 10/ejercicio 10.js';

//Actividad #11
import * as actv11 from './pages/actv 11/ejercicio 11.js';

//Actividad #12
import * as actv12 from './pages/actv 12/ejercicio 12.js';

//Actividad #13
import * as actv13 from './pages/actv 13/ejercicio 13.js';

//Actividad #14
import * as actv14 from './pages/actv 14/ejercicio 14.js';

//Actividad #15
import * as actv15 from './pages/actv 15/ejercicio 15.js';

//Actividad #16
import * as actv16 from './pages/actv 16/ejercicio 16.js';

//Actividad #17
import * as actv17 from './pages/actv 17/ejercicio 17.js';

//Actividad #18
import * as actv18 from './pages/actv 18/ejercicio 18.js';

//Actividad #19
import * as actv19 from './pages/actv 19/ejercicio 19.js';

//Actividad #20
import * as actv20 from './pages/actv 20/ejercicio 20.js';

//Actividad #21
import * as actv21 from './pages/actv 21/ejercicio 21.js';

//Actividad #22
import * as actv22 from './pages/actv 22/ejercicio 22.js';

//Actividad #23
import * as actv23 from './pages/actv 23/ejercicio 23.js';

//Actividad #24
import * as actv24 from './pages/actv 24/ejercicio 24.js';

//Actividad #25
import * as actv25 from './pages/actv 25/ejercicio 25.js';

//Actividad #26
import * as actv26 from './pages/actv 26/ejercicio 26.js';

//Actividad #27
import * as actv27 from './pages/actv 27/ejercicio 27.js';

//Actividad #28
import * as actv28 from './pages/actv 28/ejercicio 28.js';

//Actividad #29
import * as actv29 from './pages/actv 29/ejercicio 29.js';

//Actividad #30
import * as actv30 from './pages/actv 30/ejercicio 30.js';

const listaEjercicios = [
    {nombre: 'Actividad 1', modulo: actv1},
    {nombre: 'Actividad 2', modulo: actv2},
    {nombre: 'Actividad 3', modulo: actv3},
    {nombre: 'Actividad 4', modulo: actv4},
    {nombre: 'Actividad 5', modulo: actv5},
    {nombre: 'Actividad 6', modulo: actv6},
    {nombre: 'Actividad 7', modulo: actv7},
    {nombre: 'Actividad 8', modulo: actv8},
    {nombre: 'Actividad 9', modulo: actv9},
    {nombre: 'Actividad 10', modulo: actv10},
    {nombre: 'Actividad 11', modulo: actv11},
    {nombre: 'Actividad 12', modulo: actv12},
    {nombre: 'Actividad 13', modulo: actv13},
    {nombre: 'Actividad 14', modulo: actv14},
    {nombre: 'Actividad 15', modulo: actv15},
    {nombre: 'Actividad 16', modulo: actv16},
    {nombre: 'Actividad 17', modulo: actv17},
    {nombre: 'Actividad 18', modulo: actv18},
    {nombre: 'Actividad 19', modulo: actv19},
    {nombre: 'Actividad 20', modulo: actv20},
    {nombre: 'Actividad 21', modulo: actv21},
    {nombre: 'Actividad 22', modulo: actv22},
    {nombre: 'Actividad 23', modulo: actv23},
    {nombre: 'Actividad 24', modulo: actv24},
    {nombre: 'Actividad 25', modulo: actv25},
    {nombre: 'Actividad 26', modulo: actv26},
    {nombre: 'Actividad 27', modulo: actv27},
    {nombre: 'Actividad 28', modulo: actv28},
    {nombre: 'Actividad 29', modulo: actv29},
    {nombre: 'Actividad 30', modulo: actv30}
]

describe('Revisión general de todos los ejercicios', () => {
    
    // 2. Recorremos la lista automáticamente
    listaEjercicios.forEach((ejercicio) => {
        
        // El nombre del test cambia dinámicamente según la actividad
        it(`${ejercicio.nombre} se ejecutó con éxito ✅`, () => {
            
            // Esto comprueba que el archivo se importó bien
            expect(ejercicio.modulo).toBeDefined();

        });
    });
});


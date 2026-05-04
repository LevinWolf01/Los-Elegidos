// Función para verificar todos los ejercicios
export async function ejecutarTests() {
    const listaEjercicios = [
        { nombre: 'Actividad 1', path: './pages/actv 1/ejercicio 1.js' },
        { nombre: 'Actividad 2', path: './pages/actv 2/ejercicio 2.js' },
        { nombre: 'Actividad 3', path: './pages/actv 3/ejercicio 3.js' },
        { nombre: 'Actividad 4', path: './pages/actv 4/ejercicio 4.js' },
        { nombre: 'Actividad 5', path: './pages/actv 5/ejercicio 5.js' },
        { nombre: 'Actividad 6', path: './pages/actv 6/ejercicio 6.js' },
        { nombre: 'Actividad 7', path: './pages/actv 7/ejercicio 7.js' },
        { nombre: 'Actividad 8', path: './pages/actv 8/ejercicio 8.js' },
        { nombre: 'Actividad 9', path: './pages/actv 9/ejercicio 9.js' },
        { nombre: 'Actividad 10', path: './pages/actv 10/ejercicio 10.js' },
        { nombre: 'Actividad 11', path: './pages/actv 11/ejercicio 11.js' },
        { nombre: 'Actividad 12', path: './pages/actv 12/ejercicio 12.js' },
        { nombre: 'Actividad 13', path: './pages/actv 13/ejercicio 13.js' },
        { nombre: 'Actividad 14', path: './pages/actv 14/ejercicio 14.js' },
        { nombre: 'Actividad 15', path: './pages/actv 15/ejercicio 15.js' },
        { nombre: 'Actividad 16', path: './pages/actv 16/ejercicio 16.js' },
        { nombre: 'Actividad 17', path: './pages/actv 17/ejercicio 17.js' },
        { nombre: 'Actividad 18', path: './pages/actv 18/ejercicio 18.js' },
        { nombre: 'Actividad 19', path: './pages/actv 19/ejercicio 19.js' },
        { nombre: 'Actividad 20', path: './pages/actv 20/ejercicio 20.js' },
        { nombre: 'Actividad 21', path: './pages/actv 21/ejercicio 21.js' },
        { nombre: 'Actividad 22', path: './pages/actv 22/ejercicio 22.js' },
        { nombre: 'Actividad 23', path: './pages/actv 23/ejercicio 23.js' },
        { nombre: 'Actividad 24', path: './pages/actv 24/ejercicio 24.js' },
        { nombre: 'Actividad 25', path: './pages/actv 25/ejercicio 25.js' },
        { nombre: 'Actividad 26', path: './pages/actv 26/ejercicio 26.js' },
        { nombre: 'Actividad 27', path: './pages/actv 27/ejercicio 27.js' },
        { nombre: 'Actividad 28', path: './pages/actv 28/ejercicio 28.js' },
        { nombre: 'Actividad 29', path: './pages/actv 29/ejercicio 29.js' },
        { nombre: 'Actividad 30', path: './pages/actv 30/ejercicio 30.js' }
    ];

    let resultados = '<h2>📋 Resultados de Tests</h2>';
    let exitosas = 0;
    let fallidas = 0;

    for (const ejercicio of listaEjercicios) {
        try {
            const modulo = await import(ejercicio.path);
            if (modulo && Object.keys(modulo).length > 0) {
                resultados += `<p>✅ ${ejercicio.nombre} se ejecutó con éxito</p>`;
                exitosas++;
            } else {
                resultados += `<p>❌ ${ejercicio.nombre} - Archivo vacío o sin exportaciones</p>`;
                fallidas++;
            }
        } catch (error) {
            resultados += `<p>❌ ${ejercicio.nombre} - Error: ${error.message}</p>`;
            fallidas++;
        }
    }

    resultados += `<hr><p><strong>📊 Resumen: ${exitosas} exitosas, ${fallidas} fallidas de ${listaEjercicios.length} total</strong></p>`;
    
    return resultados;
}

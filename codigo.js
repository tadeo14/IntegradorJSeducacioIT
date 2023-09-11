/**
 * Esta función solicita al usuario ingresar datos relacionados con la energía y,
 * si se proporciona información válida,
 * la agrega a una tabla.
 */
function ingresarDatos() {
    // Solicitar al usuario ingresar el tipo de energía
    const tipoEnergia = prompt("Tipo de energía: ");
    // Solicitar al usuario ingresar una descripción
    const descripcion = prompt("Descripción: ");    
    // Solicitar al usuario ingresar la energía generada
    const energiaGenerada = prompt("Energía generada: ");    
    // Solicitar al usuario ingresar el presupuesto
    const presupuesto = prompt("Presupuesto: ");    
    // Solicitar al usuario ingresar el tiempo de demora
    const tiempoDemora = prompt("Tiempo de demora: ");
    // Verificar si se proporcionó un tipo de energía válido
    if (tipoEnergia !== null && tipoEnergia !== "") {
        // Calcular la efectividad
        const efectividad = calcularEfectividad(Number(energiaGenerada), Number(presupuesto), Number(tiempoDemora));
        // Llamar a la función agregarDatoATabla() para agregar los datos y la efectividad a la tabla
        agregarDatoATabla(tipoEnergia, descripcion, energiaGenerada, presupuesto, tiempoDemora, efectividad); // Línea modificada
    }
}

function calcularEfectividad(energiaGenerada, presupuesto, tiempoDemora) {
    // Verificar si alguno de los valores es igual a cero para evitar divisiones por cero
    if (presupuesto === 0 || tiempoDemora === 0) {
        return 0; // No se puede calcular la efectividad sin presupuesto o tiempo de demora
    }

    const efectividad = energiaGenerada / (presupuesto * tiempoDemora);
    return efectividad;
}

function agregarDatoATabla(tipoEnergia, descripcion, energiaGenerada, presupuesto, tiempoDemora, efectividad) {
    const tablaDatos = document.getElementById('tablaDatos');

    // Crear una nueva fila en la tabla
    const fila = document.createElement('tr');

    // Crear celdas para cada dato
    const celdaTipoEnergia = document.createElement('td');
    const celdaDescripcion = document.createElement('td');
    const celdaEnergiaGenerada = document.createElement('td');
    const celdaPresupuesto = document.createElement('td');
    const celdaTiempoDemora = document.createElement('td');
    const celdaEfectividad = document.createElement('td'); // Línea agregada

    // Asignar los datos a las celdas
    celdaTipoEnergia.textContent = tipoEnergia;
    celdaDescripcion.textContent = descripcion;
    celdaEnergiaGenerada.textContent = energiaGenerada;
    celdaPresupuesto.textContent = presupuesto;
    celdaTiempoDemora.textContent = tiempoDemora;
    celdaEfectividad.textContent = efectividad.toFixed(2); // Mostrar la efectividad con dos decimales

    // Agregar las celdas a la fila
    fila.appendChild(celdaTipoEnergia);
    fila.appendChild(celdaDescripcion);
    fila.appendChild(celdaEnergiaGenerada);
    fila.appendChild(celdaPresupuesto);
    fila.appendChild(celdaTiempoDemora);
    fila.appendChild(celdaEfectividad); // Línea agregada

    // Agregar la fila a la tabla
    tablaDatos.appendChild(fila);
}


const { leer, registrar } = require("./operaciones");

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

if (operacion !== undefined) {
    switch (operacion.trim().toLowerCase()) {
        case "registrar":
            if (nombre && edad && tipo && color && enfermedad) {
                let registro = registrar(nombre, edad, tipo, color, enfermedad);
                console.log(registro);
            } else {
                console.log("Faltan datos para registrar un paciente. Asegúrese de proporcionar nombre, edad, tipo, color y enfermedad.");
            }
            break;
        case "leer":
            let resultado = leer();
            if (Array.isArray(resultado)) {
                console.log(JSON.stringify(resultado, null, 2));
            } else {
                console.log(resultado);
            }
            break;
        default:
            console.log("Ingrese una opción válida, LEER o REGISTRAR");
    }
} else {
    console.log("Por favor, proporcione una operación (LEER o REGISTRAR).");
}

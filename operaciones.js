const fs = require("fs");

const leer = () => {
    try {
        if (!fs.existsSync("citas.json")) {
            return [];
        }
        const data = fs.readFileSync("citas.json", "utf-8");
        if (!data) {
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        console.log("No se pudo leer el archivo:", error);
        return [];
    }
};

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    try {
        const citas = leer();
        citas.push({ nombre, edad, tipo, color, enfermedad });
        fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2), "utf-8");
        return "Paciente guardado con éxito";
    } catch (error) {
        console.log("No se pudo ingresar la información:", error);
        return "Error al guardar el paciente";
    }
};

module.exports = { leer, registrar };


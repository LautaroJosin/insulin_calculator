const dtid = 44;
const glucemiaObjetivo = 100;

function calcularInsulina(glucemiaActual, gramosCarbohidratos) {
    const relacionInsulinaHC = 500 / dtid;
    const factorCorreccion = 1800 / dtid;
  
    // Dosis de insulina necesaria para cubrir los carbohidratos a ingerir
    const dosisComida = gramosCarbohidratos / relacionInsulinaHC;

    const diferenciaGlucemia = glucemiaActual - glucemiaObjetivo;

    // Dosis de insulina necesaria para corregir la glucemia, solo si es mayor al objetivo.
    const dosisCorreccion = diferenciaGlucemia > 0 ? diferenciaGlucemia / factorCorreccion : 0;
  
    // Dosis total de insulina: suma de insulina por comida y por corrección.
    const dosisTotal = dosisComida + dosisCorreccion;
  
    return {
      total: Math.round(dosisTotal * 100) / 100,
      comida: Math.round(dosisComida * 100) / 100,
      correccion: Math.round(dosisCorreccion * 100) / 100
    };
  }
  
  module.exports = calcularInsulina;
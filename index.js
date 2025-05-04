// index.js
const express = require('express');
const calcularInsulina = require('./calculate');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/calcular', (req, res) => {
  const { glucemiaActual, gramosCarbohidratos } = req.body;

  if (glucemiaActual == null || gramosCarbohidratos == null) {
    return res.status(400).json({ error: 'Faltan parámetros: glucemiaActual y gramosCarbohidratos son requeridos.' });
  }

  try {
    const resultado = calcularInsulina(glucemiaActual, gramosCarbohidratos);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al calcular insulina.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

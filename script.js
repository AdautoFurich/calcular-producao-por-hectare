function calcular() {
    const distancia = parseFloat(document.getElementById('distancia').value.replace(',', '.'));
    const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));
    const resultado = document.getElementById('resultado');

    if (isNaN(distancia) || isNaN(peso) || distancia <= 0 || peso <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        resultado.className = "result error";
        return;
    }

    const distanciaLinear = distancia * 2;
    const pesoPorDistancia = peso / distanciaLinear;
    const hectare = pesoPorDistancia * 8.333;

    resultado.textContent = `Estimativa de ${hectare.toFixed(1)} toneladas por hectare`;
    resultado.className = "result";
}

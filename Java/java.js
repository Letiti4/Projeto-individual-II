<script>
const units = {
    comprimento: ['metros', 'centímetros', 'polegadas'],
    peso: ['quilogramas', 'gramas', 'libras'],
    temperatura: ['Celsius', 'Fahrenheit', 'Kelvin']
};
function updateUnits() {
    const category = document.getElementById('category').value;
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';
    units[category].forEach(function(unit) {
        const option = document.createElement('option');
        option.value = unit;
        option.text = unit;
        
        fromUnitSelect.appendChild(option);
        toUnitSelect.appendChild(option.cloneNode(true));
    });
}
function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;
    switch (document.getElementById('category').value) {
        case 'comprimento':
            result = convertComprimento(value, fromUnit, toUnit);
            break;
        case 'peso':
            result = convertPeso(value, fromUnit, toUnit);
            break;
        case 'temperatura':
            result = convertTemperatura(value, fromUnit, toUnit);
            break;
    }
    
    document.getElementById('output').textContent = result;
}
function convertComprimento(value, fromUnit, toUnit) {
    if (fromUnit === 'metros') {
        switch (toUnit) {
            case 'metros':
                return value;
            case 'centímetros':
                return value * 100;
            case 'polegadas':
                return value * 39.37;
        }
    } else if (fromUnit === 'centímetros') {
        switch (toUnit) {
            case 'metros':
                return value / 100;
            case 'centímetros':
                return value;
            case 'polegadas':
                return value / 2.54;
        }
    } else if (fromUnit === 'polegadas') {
        switch (toUnit) {
            case 'metros':
                return value * 0.0254;
            case 'centímetros':
                return value * 2.54;
            case 'polegadas':
                return value;
        }
    }
}
function convertPeso(value, fromUnit, toUnit) {
    if (fromUnit === 'quilogramas') {
        switch (toUnit) {
            case 'quilogramas':
                return value;
            case 'gramas':
                return value * 1000;
            case 'libras':
                return value * 2.20462;
        }
    } else if (fromUnit === 'gramas') {
        switch (toUnit) {
            case 'quilogramas':
                return value / 1000;
            case 'gramas':
                return value;
            case 'libras':
                return value / 453.592;
        }
    } else if (fromUnit === 'libras') {
        switch (toUnit) {
            case 'quilogramas':
                return value / 2.20462;
            case 'gramas':
                return value * 453.592;
            case 'libras':
                return value;
        }
    }
}
function convertTemperatura(value, fromUnit, toUnit) {
    if (fromUnit === 'Celsius') {
        switch (toUnit) {
            case 'Celsius':
                return value;
            case 'Fahrenheit':
                return (value * 9/5) + 32;
            case 'Kelvin':
                return value + 273.15;
        }
    } else if (fromUnit === 'Fahrenheit') {
        switch (toUnit) {
            case 'Celsius':
                return (value - 32) * 5/9;
            case 'Fahrenheit':
                return value;
            case 'Kelvin':
                return (value + 459.67) * 5/9;
        }
    } else if (fromUnit === 'Kelvin') {
        switch (toUnit) {
            case 'Celsius':
                return value - 273.15;
            case 'Fahrenheit':
                return (value * 9/5) - 459.67;
            case 'Kelvin':
                return value;
        }
    }
}
</script>
// Basic Mathematics Interactive Elements

// Algebra Calculator
function algebraCalculator() {
  const calculatorContainer = document.getElementById('algebra-calculator');
  
  // Create UI elements
  const expressionInput = document.createElement('input');
  expressionInput.type = 'text';
  expressionInput.placeholder = 'Enter an algebraic expression (e.g., 2x + 3 = 7)';
  expressionInput.className = 'calculator-input';
  
  const solveButton = document.createElement('button');
  solveButton.textContent = 'Solve';
  solveButton.className = 'calculator-button';
  
  const resultDisplay = document.createElement('div');
  resultDisplay.className = 'calculator-result';
  
  // Add elements to container
  calculatorContainer.appendChild(expressionInput);
  calculatorContainer.appendChild(solveButton);
  calculatorContainer.appendChild(resultDisplay);
  
  // Add event listener
  solveButton.addEventListener('click', () => {
    const expression = expressionInput.value.trim();
    try {
      // This is a simplified solver - in a real implementation, 
      // we would use a math library like math.js
      if (expression.includes('=')) {
        const parts = expression.split('=');
        if (parts.length === 2) {
          // Very basic linear equation solver
          const leftSide = parts[0].trim();
          const rightSide = parts[1].trim();
          
          // This is a placeholder for actual solving logic
          resultDisplay.textContent = `Solution: x = ${parseFloat(rightSide) / 2}`;
          resultDisplay.style.color = 'green';
        } else {
          throw new Error('Invalid equation format');
        }
      } else {
        // Evaluate expression
        resultDisplay.textContent = `Result: ${eval(expression)}`;
        resultDisplay.style.color = 'green';
      }
    } catch (error) {
      resultDisplay.textContent = `Error: ${error.message || 'Invalid expression'}`;
      resultDisplay.style.color = 'red';
    }
  });
}

// Unit Circle Explorer
function unitCircleExplorer() {
  const container = document.getElementById('unit-circle-explorer');
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 400;
  container.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 150;
  
  // Angle input
  const angleInput = document.createElement('input');
  angleInput.type = 'range';
  angleInput.min = 0;
  angleInput.max = 360;
  angleInput.value = 0;
  angleInput.className = 'angle-slider';
  
  const angleDisplay = document.createElement('div');
  angleDisplay.className = 'angle-display';
  
  const valueDisplay = document.createElement('div');
  valueDisplay.className = 'value-display';
  
  container.appendChild(angleInput);
  container.appendChild(angleDisplay);
  container.appendChild(valueDisplay);
  
  function drawUnitCircle(angle) {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw coordinate axes
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.strokeStyle = '#999';
    ctx.stroke();
    
    // Draw unit circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#333';
    ctx.stroke();
    
    // Convert angle to radians
    const radians = angle * Math.PI / 180;
    
    // Calculate point on circle
    const x = centerX + radius * Math.cos(radians);
    const y = centerY - radius * Math.sin(radians);
    
    // Draw angle arc
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, 30, 0, -radians, radians > 0);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(255, 200, 0, 0.3)';
    ctx.fill();
    
    // Draw line to point
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    
    // Draw point
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    
    // Draw projection lines
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, centerY);
    ctx.strokeStyle = 'green';
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(centerX, y);
    ctx.strokeStyle = 'purple';
    ctx.stroke();
    
    // Update displays
    angleDisplay.textContent = `Angle: ${angle}° (${(radians).toFixed(2)} radians)`;
    
    const cosValue = Math.cos(radians).toFixed(4);
    const sinValue = Math.sin(radians).toFixed(4);
    const tanValue = Math.tan(radians).toFixed(4);
    
    valueDisplay.innerHTML = `
      <strong>sin(θ) = ${sinValue}</strong> (y-coordinate)<br>
      <strong>cos(θ) = ${cosValue}</strong> (x-coordinate)<br>
      <strong>tan(θ) = ${tanValue}</strong> (sin(θ)/cos(θ))
    `;
  }
  
  // Initial draw
  drawUnitCircle(0);
  
  // Add event listener
  angleInput.addEventListener('input', () => {
    drawUnitCircle(parseInt(angleInput.value));
  });
}

// Geometry Visualizer
function geometryVisualizer() {
  const container = document.getElementById('geometry-visualizer');
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 400;
  container.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  
  // Shape selector
  const shapeSelector = document.createElement('select');
  shapeSelector.className = 'shape-selector';
  
  const shapes = [
    { value: 'triangle', text: 'Triangle' },
    { value: 'rectangle', text: 'Rectangle' },
    { value: 'circle', text: 'Circle' },
    { value: 'ellipse', text: 'Ellipse' }
  ];
  
  shapes.forEach(shape => {
    const option = document.createElement('option');
    option.value = shape.value;
    option.textContent = shape.text;
    shapeSelector.appendChild(option);
  });
  
  const controlsDiv = document.createElement('div');
  controlsDiv.className = 'geometry-controls';
  
  const infoDisplay = document.createElement('div');
  infoDisplay.className = 'geometry-info';
  
  container.appendChild(shapeSelector);
  container.appendChild(controlsDiv);
  container.appendChild(infoDisplay);
  
  // Shape parameters
  const shapeParams = {
    triangle: {
      a: 100,
      b: 150,
      c: 200
    },
    rectangle: {
      width: 200,
      height: 150
    },
    circle: {
      radius: 100
    },
    ellipse: {
      a: 150,
      b: 100
    }
  };
  
  function createSlider(name, min, max, value, onChange) {
    const div = document.createElement('div');
    div.className = 'control-group';
    
    const label = document.createElement('label');
    label.textContent = name;
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = min;
    slider.max = max;
    slider.value = value;
    
    const valueDisplay = document.createElement('span');
    valueDisplay.textContent = value;
    
    slider.addEventListener('input', () => {
      valueDisplay.textContent = slider.value;
      onChange(parseInt(slider.value));
    });
    
    div.appendChild(label);
    div.appendChild(slider);
    div.appendChild(valueDisplay);
    
    return div;
  }
  
  function updateControls(shape) {
    // Clear controls
    controlsDiv.innerHTML = '';
    
    switch(shape) {
      case 'triangle':
        controlsDiv.appendChild(createSlider('Side a', 50, 200, shapeParams.triangle.a, value => {
          shapeParams.triangle.a = value;
          drawShape(shape);
        }));
        controlsDiv.appendChild(createSlider('Side b', 50, 200, shapeParams.triangle.b, value => {
          shapeParams.triangle.b = value;
          drawShape(shape);
        }));
        controlsDiv.appendChild(createSlider('Side c', 50, 200, shapeParams.triangle.c, value => {
          shapeParams.triangle.c = value;
          drawShape(shape);
        }));
        break;
      
      case 'rectangle':
        controlsDiv.appendChild(createSlider('Width', 50, 300, shapeParams.rectangle.width, value => {
          shapeParams.rectangle.width = value;
          drawShape(shape);
        }));
        controlsDiv.appendChild(createSlider('Height', 50, 300, shapeParams.rectangle.height, value => {
          shapeParams.rectangle.height = value;
          drawShape(shape);
        }));
        break;
      
      case 'circle':
        controlsDiv.appendChild(createSlider('Radius', 20, 150, shapeParams.circle.radius, value => {
          shapeParams.circle.radius = value;
          drawShape(shape);
        }));
        break;
      
      case 'ellipse':
        controlsDiv.appendChild(createSlider('Semi-major axis', 50, 200, shapeParams.ellipse.a, value => {
          shapeParams.ellipse.a = value;
          drawShape(shape);
        }));
        controlsDiv.appendChild(createSlider('Semi-minor axis', 20, 150, shapeParams.ellipse.b, value => {
          shapeParams.ellipse.b = value;
          drawShape(shape);
        }));
        break;
    }
  }
  
  function drawShape(shape) {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    switch(shape) {
      case 'triangle':
        // Check if triangle is valid
        const { a, b, c } = shapeParams.triangle;
        if (a + b <= c || a + c <= b || b + c <= a) {
          infoDisplay.innerHTML = '<span style="color:red">Invalid triangle: The sum of the lengths of any two sides must be greater than the length of the remaining side.</span>';
          return;
        }
        
        // Calculate semi-perimeter
        const s = (a + b + c) / 2;
        
        // Calculate area using Heron's formula
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        
        // Calculate height
        const height = 2 * area / c;
        
        // Draw triangle
        ctx.beginPath();
        ctx.moveTo(centerX - c/2, centerY + height/2);
        ctx.lineTo(centerX + c/2, centerY + height/2);
        
        // Calculate the third point
        // This is a simplified approach and doesn't guarantee the exact side lengths
        const thirdX = centerX - c/2 + a;
        const thirdY = centerY - height/2;
        
        ctx.lineTo(thirdX, thirdY);
        ctx.closePath();
        
        ctx.fillStyle = 'rgba(100, 150, 250, 0.5)';
        ctx.fill();
        ctx.strokeStyle = '#333';
        ctx.stroke();
        
        // Display info
        infoDisplay.innerHTML = `
          <strong>Triangle Properties:</strong><br>
          Sides: a = ${a}, b = ${b}, c = ${c}<br>
          Perimeter: ${a + b + c}<br>
          Area: ${area.toFixed(2)}<br>
          Semi-perimeter: ${s}
        `;
        break;
      
      case 'rectangle':
        const { width, height } = shapeParams.rectangle;
        
        // Draw rectangle
        ctx.beginPath();
        ctx.rect(centerX - width/2, centerY - height/2, width, height);
        ctx.fillStyle = 'rgba(100, 200, 150, 0.5)';
        ctx.fill();
        ctx.strokeStyle = '#333';
        ctx.stroke();
        
        // Display info
        infoDisplay.innerHTML = `
          <strong>Rectangle Properties:</strong><br>
          Width: ${width}<br>
          Height: ${height}<br>
          Perimeter: ${2 * (width + height)}<br>
          Area: ${width * height}<br>
          Diagonal: ${Math.sqrt(width*width + height*height).toFixed(2)}
        `;
        break;
      
      case 'circle':
        const { radius } = shapeParams.circle;
        
        // Draw circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(250, 150, 150, 0.5)';
        ctx.fill();
        ctx.strokeStyle = '#333';
        ctx.stroke();
        
        // Display info
        infoDisplay.innerHTML = `
          <strong>Circle Properties:</strong><br>
          Radius: ${radius}<br>
          Diameter: ${2 * radius}<br>
          Circumference: ${(2 * Math.PI * radius).toFixed(2)}<br>
          Area: ${(Math.PI * radius * radius).toFixed(2)}
        `;
        break;
      
      case 'ellipse':
        const { a: semiMajor, b: semiMinor } = shapeParams.ellipse;
        
        // Draw ellipse
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, semiMajor, semiMinor, 0, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(200, 150, 250, 0.5)';
        ctx.fill();
        ctx.strokeStyle = '#333';
        ctx.stroke();
        
        // Draw axes
        ctx.beginPath();
        ctx.moveTo(centerX - semiMajor, centerY);
        ctx.lineTo(centerX + semiMajor, centerY);
        ctx.moveTo(centerX, centerY - semiMinor);
        ctx.lineTo(centerX, centerY + semiMinor);
        ctx.strokeStyle = '#999';
        ctx.stroke();
        
        // Calculate eccentricity
        const c = Math.sqrt(semiMajor*semiMajor - semiMinor*semiMinor);
        const e = c / semiMajor;
        
        // Draw foci
        ctx.beginPath();
        ctx.arc(centerX - c, centerY, 3, 0, 2 * Math.PI);
        ctx.arc(centerX + c, centerY, 3, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        
        // Display info
        infoDisplay.innerHTML = `
          <strong>Ellipse Properties:</strong><br>
          Semi-major axis (a): ${semiMajor}<br>
          Semi-minor axis (b): ${semiMinor}<br>
          Focal distance (c): ${c.toFixed(2)}<br>
          Eccentricity (e): ${e.toFixed(4)}<br>
          Area: ${(Math.PI * semiMajor * semiMinor).toFixed(2)}
        `;
        break;
    }
  }
  
  // Initial setup
  updateControls('triangle');
  drawShape('triangle');
  
  // Add event listener
  shapeSelector.addEventListener('change', () => {
    const selectedShape = shapeSelector.value;
    updateControls(selectedShape);
    drawShape(selectedShape);
  });
}

// Coordinate System Converter
function coordinateConverter() {
  const container = document.getElementById('coordinate-converter');
  
  // Create UI elements
  const inputSection = document.createElement('div');
  inputSection.className = 'converter-input-section';
  
  const outputSection = document.createElement('div');
  outputSection.className = 'converter-output-section';
  
  // Input type selector
  const inputTypeSelector = document.createElement('select');
  inputTypeSelector.className = 'converter-selector';
  
  const coordTypes = [
    { value: 'cartesian', text: 'Cartesian (x,y,z)' },
    { value: 'spherical', text: 'Spherical (r,θ,φ)' },
    { value: 'cylindrical', text: 'Cylindrical (ρ,φ,z)' },
    { value: 'equatorial', text: 'Equatorial (RA,Dec)' }
  ];
  
  coordTypes.forEach(type => {
    const option = document.createElement('option');
    option.value = type.value;
    option.textContent = type.text;
    inputTypeSelector.appendChild(option);
  });
  
  // Input fields
  const inputFields = document.createElement('div');
  inputFields.className = 'converter-fields';
  
  // Convert button
  const convertButton = document.createElement('button');
  convertButton.textContent = 'Convert';
  convertButton.className = 'converter-button';
  
  // Add elements to container
  inputSection.appendChild(document.createElement('h4')).textContent = 'Input Coordinates:';
  inputSection.appendChild(inputTypeSelector);
  inputSection.appendChild(inputFields);
  inputSection.appendChild(convertButton);
  
  outputSection.appendChild(document.createElement('h4')).textContent = 'Results:';
  
  container.appendChild(inputSection);
  container.appendChild(outputSection);
  
  // Update input fields based on selected coordinate system
  function updateInputFields(type) {
    inputFields.innerHTML = '';
    
    switch(type) {
      case 'cartesian':
        addInputField('x', 0);
        addInputField('y', 0);
        addInputField('z', 0);
        break;
      
      case 'spherical':
        addInputField('r (radius)', 1);
        addInputField('θ (theta, polar angle in degrees)', 0);
        addInputField('φ (phi, azimuthal angle in degrees)', 0);
        break;
      
      case 'cylindrical':
        addInputField('ρ (rho, radial distance)', 1);
        addInputField('φ (phi, azimuthal angle in degrees)', 0);
        addInputField('z (height)', 0);
        break;
      
      case 'equatorial':
        addInputField('RA (Right Ascension, hours)', 0);
        addInputField('Dec (Declination, degrees)', 0);
        addInputField('Distance (optional)', 1);
        break;
    }
  }
  
  function addInputField(label, defaultValue) {
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'input-field';
    
    const fieldLabel = document.createElement('label');
    fieldLabel.textContent = label;
    
    const input = document.createElement('input');
    input.type = 'number';
    input.step = 'any';
    input.value = defaultValue;
    
    fieldDiv.appendChild(fieldLabel);
    fieldDiv.appendChild(input);
    inputFields.appendChild(fieldDiv);
  }
  
  // Convert coordinates
  function convertCoordinates() {
    const inputType = inputTypeSelector.value;
    const inputs = Array.from(inputFields.querySelectorAll('input')).map(input => parseFloat(input.value));
    
    // Clear previous outputs
    outputSection.innerHTML = '<h4>Results:</h4>';
    
    // Convert to all other coordinate systems
    coordTypes.forEach(type => {
      if (type.value !== inputType) {
        const result = performConversion(inputType, type.value, inputs);
        displayResult(type.text, result);
      }
    });
  }
  
  function performConversion(fromType, toType, values) {
    // First convert to Cartesian as an intermediate step
    let cartesian;
    
    switch(fromType) {
      case 'cartesian':
        cartesian = values;
        break;
      
      case 'spherical':
        // [r, theta, phi] to [x, y, z]
        const r = values[0];
        const theta = values[1] * Math.PI / 180; // Convert to radians
        const phi = values[2] * Math.PI / 180;   // Convert to radians
        
        cartesian = [
          r * Math.sin(theta) * Math.cos(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(theta)
        ];
        break;
      
      case 'cylindrical':
        // [rho, phi, z] to [x, y, z]
        const rho = values[0];
        const phiCyl = values[1] * Math.PI / 180; // Convert to radians
        
        cartesian = [
          rho * Math.cos(phiCyl),
          rho * Math.sin(phiCyl),
          values[2]
        ];
        break;
      
      case 'equatorial':
        // [RA, Dec, distance] to [x, y, z]
        const ra = values[0] * 15 * Math.PI / 180; // Convert hours to radians
        const dec = values[1] * Math.PI / 180;     // Convert to radians
        const dist = values[2] || 1;               // Default to unit distance
        
        cartesian = [
          dist * Math.cos(dec) * Math.cos(ra),
          dist * Math.cos(dec) * Math.sin(ra),
          dist * Math.sin(dec)
        ];
        break;
    }
    
    // Then convert from Cartesian to the target system
    switch(toType) {
      case 'cartesian':
        return cartesian.map(v => v.toFixed(4));
      
      case 'spherical':
        // [x, y, z] to [r, theta, phi]
        const x = cartesian[0];
        const y = cartesian[1];
        const z = cartesian[2];
        
        const r = Math.sqrt(x*x + y*y + z*z);
        const theta = Math.acos(z / r) * 180 / Math.PI;
        const phi = Math.atan2(y, x) * 180 / Math.PI;
        
        return [
          r.toFixed(4),
          theta.toFixed(2),
          phi < 0 ? (phi + 360).toFixed(2) : phi.toFixed(2)
        ];
      
      case 'cylindrical':
        // [x, y, z] to [rho, phi, z]
        const xCyl = cartesian[0];
        const yCyl = cartesian[1];
        
        const rho = Math.sqrt(xCyl*xCyl + yCyl*yCyl);
        const phiCyl = Math.atan2(yCyl, xCyl) * 180 / Math.PI;
        
        return [
          rho.toFixed(4),
          phiCyl < 0 ? (phiCyl + 360).toFixed(2) : phiCyl.toFixed(2),
          cartesian[2].toFixed(4)
        ];
      
      case 'equatorial':
        // [x, y, z] to [RA, Dec, distance]
        const xEq = cartesian[0];
        const yEq = cartesian[1];
        const zEq = cartesian[2];
        
        const dist = Math.sqrt(xEq*xEq + yEq*yEq + zEq*zEq);
        let ra = Math.atan2(yEq, xEq) * 180 / Math.PI / 15; // Convert to hours
        if (ra < 0) ra += 24;
        
        const dec = Math.asin(zEq / dist) * 180 / Math.PI;
        
        // Format RA as hours:minutes:seconds
        const raHours = Math.floor(ra);
        const raMinutes = Math.floor((ra - raHours) * 60);
        const raSeconds = Math.floor(((ra - raHours) * 60 - raMinutes) * 60);
        
        return [
          `${raHours}h ${raMinutes}m ${raSeconds}s`,
          `${dec.toFixed(2)}°`,
          dist.toFixed(4)
        ];
    }
  }
  
  function displayResult(title, values) {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'conversion-result';
    
    const resultTitle = document.createElement('h5');
    resultTitle.textContent = title;
    
    const resultValues = document.createElement('div');
    resultValues.className = 'result-values';
    
    // Create labels based on coordinate type
    let labels;
    if (title.includes('Cartesian')) {
      labels = ['x = ', 'y = ', 'z = '];
    } else if (title.includes('Spherical')) {
      labels = ['r = ', 'θ = ', 'φ = '];
    } else if (title.includes('Cylindrical')) {
      labels = ['ρ = ', 'φ = ', 'z = '];
    } else if (title.includes('Equatorial')) {
      labels = ['RA = ', 'Dec = ', 'Distance = '];
    }
    
    // Add each value with its label
    values.forEach((value, index) => {
      const valueSpan = document.createElement('div');
      valueSpan.textContent = `${labels[index]}${value}`;
      resultValues.appendChild(valueSpan);
    });
    
    resultDiv.appendChild(resultTitle);
    resultDiv.appendChild(resultValues);
    outputSection.appendChild(resultDiv);
  }
  
  // Initial setup
  updateInputFields('cartesian');
  
  // Add event listeners
  inputTypeSelector.addEventListener('change', () => {
    updateInputFields(inputTypeSelector.value);
  });
  
  convertButton.addEventListener('click', convertCoordinates);
}

// Initialize all interactive elements when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Check if containers exist before initializing
  if (document.getElementById('algebra-calculator')) {
    algebraCalculator();
  }
  
  if (document.getElementById('unit-circle-explorer')) {
    unitCircleExplorer();
  }
  
  if (document.getElementById('geometry-visualizer')) {
    geometryVisualizer();
  }
  
  if (document.getElementById('coordinate-converter')) {
    coordinateConverter();
  }
});

// CSS for interactive elements
const style = document.createElement('style');
style.textContent = `
  /* Common styles */
  .calculator-input, .calculator-button, .converter-button, .shape-selector, .converter-selector {
    margin: 10px 5px;
    padding: 8px 12px;
    font-size: 16px;
  }
  
  .calculator-input, .input-field input {
    width: 300px;
  }
  
  .calculator-button, .converter-button {
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .calculator-button:hover, .converter-button:hover {
    background-color: #357ae8;
  }
  
  .calculator-result, .geometry-info, .conversion-result {
    margin: 15px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
  }
  
  /* Unit Circle Explorer */
  .angle-slider {
    width: 300px;
  }
  
  .angle-display, .value-display {
    margin: 10px 0;
    font-size: 16px;
  }
  
  /* Geometry Visualizer */
  .geometry-controls {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
  
  .control-group {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
  
  .control-group label {
    width: 150px;
  }
  
  .control-group input {
    width: 200px;
    margin: 0 10px;
  }
  
  /* Coordinate Converter */
  .converter-input-section, .converter-output-section {
    margin: 15px 0;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .input-field {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  
  .input-field label {
    width: 250px;
  }
  
  .input-field input {
    width: 150px;
    padding: 5px;
  }
  
  .result-values {
    margin-left: 20px;
  }
`;

document.head.appendChild(style);

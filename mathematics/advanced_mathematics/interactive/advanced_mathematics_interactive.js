// Advanced Mathematics Interactive Elements

// Global variables for visualization contexts
let derivativeCanvas, derivativeCtx;
let integralCanvas, integralCtx;
let deCanvas, deCtx;

// Constants for visualization
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;
const MARGIN = 50;
const GRID_SIZE = 20;
const X_RANGE = 20; // -10 to 10
const Y_RANGE = 10; // -5 to 5

// Colors
const COLORS = {
    grid: '#e0e0e0',
    axes: '#000000',
    function: '#3498db',
    derivative: '#e74c3c',
    tangent: '#2ecc71',
    area: 'rgba(52, 152, 219, 0.3)',
    rectangles: 'rgba(46, 204, 113, 0.5)',
    solution: '#9b59b6'
};

// Initialize the interactive elements when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set up canvases
    setupCanvases();
    
    // Initialize the interactive elements
    initDerivativeExplorer();
    initIntegralVisualizer();
    initDifferentialEquationSolver();
    
    // Add event listeners for all controls
    setupEventListeners();
});

// Function to set up canvas elements
function setupCanvases() {
    // Derivative Explorer canvas
    derivativeCanvas = document.createElement('canvas');
    derivativeCanvas.width = CANVAS_WIDTH;
    derivativeCanvas.height = CANVAS_HEIGHT;
    document.getElementById('derivative-visualization').appendChild(derivativeCanvas);
    derivativeCtx = derivativeCanvas.getContext('2d');
    
    // Integral Visualizer canvas
    integralCanvas = document.createElement('canvas');
    integralCanvas.width = CANVAS_WIDTH;
    integralCanvas.height = CANVAS_HEIGHT;
    document.getElementById('integral-visualization').appendChild(integralCanvas);
    integralCtx = integralCanvas.getContext('2d');
    
    // Differential Equation Solver canvas
    deCanvas = document.createElement('canvas');
    deCanvas.width = CANVAS_WIDTH;
    deCanvas.height = CANVAS_HEIGHT;
    document.getElementById('de-visualization').appendChild(deCanvas);
    deCtx = deCanvas.getContext('2d');
}

// Function to initialize the Derivative Explorer
function initDerivativeExplorer() {
    // Draw initial state
    drawDerivativeExplorer();
    
    // Update information panel
    updateDerivativeInfo();
}

// Function to initialize the Integral Visualizer
function initIntegralVisualizer() {
    // Draw initial state
    drawIntegralVisualizer();
    
    // Update information panel
    updateIntegralInfo();
}

// Function to initialize the Differential Equation Solver
function initDifferentialEquationSolver() {
    // Draw initial state
    drawDifferentialEquationSolver();
    
    // Update information panel
    updateDEInfo();
}

// Function to set up event listeners for all controls
function setupEventListeners() {
    // Derivative Explorer event listeners
    document.getElementById('function-select').addEventListener('change', function() {
        if (this.value === 'custom') {
            document.getElementById('custom-function-input').style.display = 'block';
            document.getElementById('function-parameters').style.display = 'none';
        } else {
            document.getElementById('custom-function-input').style.display = 'none';
            document.getElementById('function-parameters').style.display = 'block';
            updateFunctionParameters(this.value);
        }
        drawDerivativeExplorer();
        updateDerivativeInfo();
    });
    
    document.getElementById('x-value').addEventListener('input', function() {
        document.getElementById('x-value-display').textContent = this.value;
        drawDerivativeExplorer();
        updateDerivativeInfo();
    });
    
    document.getElementById('show-derivative').addEventListener('click', function() {
        document.getElementById('derivative-explorer').setAttribute('data-show-derivative', 'true');
        drawDerivativeExplorer();
    });
    
    document.getElementById('hide-derivative').addEventListener('click', function() {
        document.getElementById('derivative-explorer').setAttribute('data-show-derivative', 'false');
        drawDerivativeExplorer();
    });
    
    document.getElementById('show-tangent').addEventListener('click', function() {
        document.getElementById('derivative-explorer').setAttribute('data-show-tangent', 'true');
        drawDerivativeExplorer();
    });
    
    document.getElementById('hide-tangent').addEventListener('click', function() {
        document.getElementById('derivative-explorer').setAttribute('data-show-tangent', 'false');
        drawDerivativeExplorer();
    });
    
    // Integral Visualizer event listeners
    document.getElementById('integral-function-select').addEventListener('change', function() {
        if (this.value === 'custom-integral') {
            document.getElementById('custom-integral-function-input').style.display = 'block';
            document.getElementById('integral-function-parameters').style.display = 'none';
        } else {
            document.getElementById('custom-integral-function-input').style.display = 'none';
            document.getElementById('integral-function-parameters').style.display = 'block';
            updateIntegralFunctionParameters(this.value);
        }
        drawIntegralVisualizer();
        updateIntegralInfo();
    });
    
    document.getElementById('lower-bound').addEventListener('input', function() {
        document.getElementById('lower-bound-display').textContent = this.value;
        document.getElementById('info-lower-bound').textContent = this.value;
        drawIntegralVisualizer();
        updateIntegralInfo();
    });
    
    document.getElementById('upper-bound').addEventListener('input', function() {
        document.getElementById('upper-bound-display').textContent = this.value;
        document.getElementById('info-upper-bound').textContent = this.value;
        drawIntegralVisualizer();
        updateIntegralInfo();
    });
    
    document.getElementById('num-rectangles').addEventListener('input', function() {
        document.getElementById('num-rectangles-display').textContent = this.value;
        document.getElementById('info-num-rectangles').textContent = this.value;
        drawIntegralVisualizer();
        updateIntegralInfo();
    });
    
    document.getElementById('show-riemann-sum').addEventListener('click', function() {
        document.getElementById('integral-visualizer').setAttribute('data-show-riemann', 'true');
        drawIntegralVisualizer();
    });
    
    document.getElementById('hide-riemann-sum').addEventListener('click', function() {
        document.getElementById('integral-visualizer').setAttribute('data-show-riemann', 'false');
        drawIntegralVisualizer();
    });
    
    document.getElementById('show-antiderivative').addEventListener('click', function() {
        document.getElementById('integral-visualizer').setAttribute('data-show-antiderivative', 'true');
        drawIntegralVisualizer();
    });
    
    document.getElementById('hide-antiderivative').addEventListener('click', function() {
        document.getElementById('integral-visualizer').setAttribute('data-show-antiderivative', 'false');
        drawIntegralVisualizer();
    });
    
    // Differential Equation Solver event listeners
    document.getElementById('de-select').addEventListener('change', function() {
        updateDEParameters(this.value);
        drawDifferentialEquationSolver();
        updateDEInfo();
    });
    
    document.getElementById('time-range').addEventListener('input', function() {
        document.getElementById('time-range-display').textContent = this.value;
        drawDifferentialEquationSolver();
    });
    
    document.getElementById('solve-de').addEventListener('click', function() {
        solveDifferentialEquation();
        drawDifferentialEquationSolver();
        updateDEInfo();
    });
    
    document.getElementById('reset-de').addEventListener('click', function() {
        resetDifferentialEquation();
        drawDifferentialEquationSolver();
        updateDEInfo();
    });
}

// Function to draw the Derivative Explorer visualization
function drawDerivativeExplorer() {
    const ctx = derivativeCtx;
    const canvas = derivativeCanvas;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid and axes
    drawGrid(ctx);
    
    // Get current function and parameters
    const functionType = document.getElementById('function-select').value;
    const xValue = parseFloat(document.getElementById('x-value').value);
    
    // Draw function
    drawFunction(ctx, functionType, COLORS.function);
    
    // Draw derivative if enabled
    const showDerivative = document.getElementById('derivative-explorer').getAttribute('data-show-derivative') === 'true';
    if (showDerivative) {
        drawDerivative(ctx, functionType, COLORS.derivative);
    }
    
    // Draw tangent line if enabled
    const showTangent = document.getElementById('derivative-explorer').getAttribute('data-show-tangent') === 'true';
    if (showTangent) {
        drawTangentLine(ctx, functionType, xValue, COLORS.tangent);
    }
    
    // Draw point at current x value
    drawPoint(ctx, xValue, evaluateFunction(functionType, xValue), COLORS.function);
}

// Function to draw the Integral Visualizer visualization
function drawIntegralVisualizer() {
    const ctx = integralCtx;
    const canvas = integralCanvas;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid and axes
    drawGrid(ctx);
    
    // Get current function and parameters
    const functionType = document.getElementById('integral-function-select').value;
    const lowerBound = parseFloat(document.getElementById('lower-bound').value);
    const upperBound = parseFloat(document.getElementById('upper-bound').value);
    const numRectangles = parseInt(document.getElementById('num-rectangles').value);
    
    // Draw function
    drawFunction(ctx, functionType, COLORS.function, 'integral');
    
    // Draw area under curve
    drawAreaUnderCurve(ctx, functionType, lowerBound, upperBound, COLORS.area);
    
    // Draw Riemann sum if enabled
    const showRiemann = document.getElementById('integral-visualizer').getAttribute('data-show-riemann') === 'true';
    if (showRiemann) {
        drawRiemannSum(ctx, functionType, lowerBound, upperBound, numRectangles, COLORS.rectangles);
    }
    
    // Draw antiderivative if enabled
    const showAntiderivative = document.getElementById('integral-visualizer').getAttribute('data-show-antiderivative') === 'true';
    if (showAntiderivative) {
        drawAntiderivative(ctx, functionType, COLORS.derivative);
    }
}

// Function to draw the Differential Equation Solver visualization
function drawDifferentialEquationSolver() {
    const ctx = deCtx;
    const canvas = deCanvas;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid and axes
    drawGrid(ctx);
    
    // Get current equation and parameters
    const equationType = document.getElementById('de-select').value;
    const timeRange = parseInt(document.getElementById('time-range').value);
    
    // Draw solution if it exists
    if (document.getElementById('de-visualization').getAttribute('data-has-solution') === 'true') {
        drawDESolution(ctx, equationType, timeRange, COLORS.solution);
    }
}

// Function to draw grid and axes
function drawGrid(ctx) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    
    // Draw grid
    ctx.strokeStyle = COLORS.grid;
    ctx.lineWidth = 0.5;
    
    // Vertical grid lines
    for (let x = MARGIN; x < width - MARGIN; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, MARGIN);
        ctx.lineTo(x, height - MARGIN);
        ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let y = MARGIN; y < height - MARGIN; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(MARGIN, y);
        ctx.lineTo(width - MARGIN, y);
        ctx.stroke();
    }
    
    // Draw axes
    ctx.strokeStyle = COLORS.axes;
    ctx.lineWidth = 2;
    
    // x-axis
    const yAxisPos = height / 2;
    ctx.beginPath();
    ctx.moveTo(MARGIN, yAxisPos);
    ctx.lineTo(width - MARGIN, yAxisPos);
    ctx.stroke();
    
    // y-axis
    const xAxisPos = width / 2;
    ctx.beginPath();
    ctx.moveTo(xAxisPos, MARGIN);
    ctx.lineTo(xAxisPos, height - MARGIN);
    ctx.stroke();
    
    // Draw axis labels
    ctx.fillStyle = COLORS.axes;
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    // x-axis labels
    for (let i = -X_RANGE / 2; i <= X_RANGE / 2; i += 2) {
        const x = xAxisPos + i * GRID_SIZE;
        ctx.fillText(i.toString(), x, yAxisPos + 20);
    }
    
    // y-axis labels
    ctx.textAlign = 'right';
    for (let i = -Y_RANGE / 2; i <= Y_RANGE / 2; i += 1) {
        const y = yAxisPos - i * GRID_SIZE;
        ctx.fillText(i.toString(), xAxisPos - 10, y + 4);
    }
}

// Function to draw a function on the canvas
function drawFunction(ctx, functionType, color, context = 'derivative') {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const yAxisPos = height / 2;
    const xAxisPos = width / 2;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let px = MARGIN; px < width - MARGIN; px++) {
        // Convert pixel x to mathematical x
        const x = (px - xAxisPos) / GRID_SIZE;
        
        // Evaluate function
        let y;
        if (context === 'derivative') {
            y = evaluateFunction(functionType, x);
        } else {
            y = evaluateIntegralFunction(functionType, x);
        }
        
        // Convert mathematical y to pixel y
        const py = yAxisPos - y * GRID_SIZE;
        
        if (px === MARGIN) {
            ctx.moveTo(px, py);
        } else {
            ctx.lineTo(px, py);
        }
    }
    
    ctx.stroke();
}

// Function to draw the derivative of a function
function drawDerivative(ctx, functionType, color) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const yAxisPos = height / 2;
    const xAxisPos = width / 2;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let px = MARGIN; px < width - MARGIN; px++) {
        // Convert pixel x to mathematical x
        const x = (px - xAxisPos) / GRID_SIZE;
        
        // Evaluate derivative
        const y = evaluateDerivative(functionType, x);
        
        // Convert mathematical y to pixel y
        const py = yAxisPos - y * GRID_SIZE;
        
        if (px === MARGIN) {
            ctx.moveTo(px, py);
        } else {
            ctx.lineTo(px, py);
        }
    }
    
    ctx.stroke();
}

// Function to draw a tangent line at a specific x value
function drawTangentLine(ctx, functionType, x, color) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const yAxisPos = height / 2;
    const xAxisPos = width / 2;
    
    // Evaluate function and derivative at x
    const y = evaluateFunction(functionType, x);
    const slope = evaluateDerivative(functionType, x);
    
    // Convert mathematical coordinates to pixel coordinates
    const px = xAxisPos + x * GRID_SIZE;
    const py = yAxisPos - y * GRID_SIZE;
    
    // Calculate tangent line endpoints
    const x1 = px - 100;
    const y1 = py - slope * 100 / GRID_SIZE;
    const x2 = px + 100;
    const y2 = py + slope * 100 / GRID_SIZE;
    
    // Draw tangent line
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    // Draw point at tangent point
    drawPoint(ctx, x, y, color);
}

// Function to draw a point at (x, y)
function drawPoint(ctx, x, y, color) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const yAxisPos = height / 2;
    const xAxisPos = width / 2;
    
    // Convert mathematical coordinates to pixel coordinates
    const px = xAxisPos + x * GRID_SIZE;
    const py = yAxisPos - y * GRID_SIZE;
    
    // Draw point
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(px, py, 5, 0, 2 * Math.PI);
    ctx.fill();
}

// Function to draw the area under a curve between two x values
function drawAreaUnderCurve(ctx, functionType, a, b, color) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const yAxisPos = height / 2;
    const xAxisPos = width / 2;
    
    // Convert mathematical coordinates to pixel coordinates
    const pxa = xAxisPos + a * GRID_SIZE;
    const pxb = xAxisPos + b * GRID_SIZE;
    
    ctx.fillStyle = color;
    ctx.beginPath();
    
    // Start at the left bound on the x-axis
    ctx.moveTo(pxa, yAxisPos);
    
    // Draw the function curve from left to right
    for (let px = pxa; px <= pxb; px++) {
        const x = (px - xAxisPos) / GRID_SIZE;
        const y = evaluateIntegralFunction(functionType, x);
        const py = yAxisPos - y * GRID_SIZE;
        ctx.lineTo(px, py);
    }
    
    // Close the path back to the x-axis
    ctx.lineTo(pxb, yAxisPos);
    ctx.closePath();
    ctx.fill();
}

// Function to draw Riemann sum rectangles
function drawRiemannSum(ctx, functionType, a, b, n, color) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const yAxisPos = height / 2;
    const xAxisPos = width / 2;
    
    const dx = (b - a) / n;
    
    ctx.fillStyle = color;
    
    for (let i = 0; i < n; i++) {
        const x = a + i * dx;
        const y = evaluateIntegralFunction(functionType, x);
        
        // Convert mathematical coordinates to pixel coordinates
        const px = xAxisPos + x * GRID_SIZE;
        const py = yAxisPos - y * GRID_SIZE;
        const pWidth = dx * GRID_SIZE;
        const pHeight = y * GRID_SIZE;
        
        // Draw rectangle
        ctx.fillRect(px, py, pWidth, pHeight);
    }
}

// Function to draw the antiderivative of a function
function drawAntiderivative(ctx, functionType, color) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const yAxisPos = height / 2;
    const xAxisPos = width / 2;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    // Start at the left edge
    let prevY = evaluateAntiderivative(functionType, (MARGIN - xAxisPos) / GRID_SIZE);
    ctx.moveTo(MARGIN, yAxisPos - prevY * GRID_SIZE);
    
    for (let px = MARGIN + 1; px < width - MARGIN; px++) {
        // Convert pixel x to mathematical x
        const x = (px - xAxisPos) / GRID_SIZE;
        
        // Evaluate antiderivative
        const y = evaluateAntiderivative(functionType, x);
        
        // Convert mathematical y to pixel y
        const py = yAxisPos - y * GRID_SIZE;
        
        ctx.lineTo(px, py);
    }
    
    ctx.stroke();
}

// Function to draw the solution to a differential equation
function drawDESolution(ctx, equationType, timeRange, color) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const yAxisPos = height / 2;
    const xAxisPos = width / 2;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    // Get solution data from the visualization element's data attribute
    const solutionData = JSON.parse(document.getElementById('de-visualization').getAttribute('data-solution'));
    
    // Scale the time range to fit the canvas width
    const timeScale = (width - 2 * MARGIN) / timeRange;
    
    for (let i = 0; i < solutionData.length; i++) {
        const t = solutionData[i].t;
        const y = solutionData[i].y;
        
        // Convert to pixel coordinates
        const px = MARGIN + t * timeScale;
        const py = yAxisPos - y * GRID_SIZE;
        
        if (i === 0) {
            ctx.moveTo(px, py);
        } else {
            ctx.lineTo(px, py);
        }
    }
    
    ctx.stroke();
}

// Function to update the Derivative Explorer information panel
function updateDerivativeInfo() {
    const functionType = document.getElementById('function-select').value;
    const x = parseFloat(document.getElementById('x-value').value);
    
    // Update x value display
    document.getElementById('info-x-value').textContent = x;
    
    // Update function display
    document.getElementById('current-function').textContent = getFunctionString(functionType);
    
    // Update derivative display
    document.getElementById('current-derivative').textContent = getDerivativeString(functionType);
    
    // Update function value
    const functionValue = evaluateFunction(functionType, x);
    document.getElementById('function-value').textContent = functionValue.toFixed(2);
    
    // Update derivative value
    const derivativeValue = evaluateDerivative(functionType, x);
    document.getElementById('derivative-value').textContent = derivativeValue.toFixed(2);
}

// Function to update the Integral Visualizer information panel
function updateIntegralInfo() {
    const functionType = document.getElementById('integral-function-select').value;
    const a = parseFloat(document.getElementById('lower-bound').value);
    const b = parseFloat(document.getElementById('upper-bound').value);
    const n = parseInt(document.getElementById('num-rectangles').value);
    
    // Update function display
    document.getElementById('integral-current-function').textContent = getIntegralFunctionString(functionType);
    
    // Update antiderivative display
    document.getElementById('current-antiderivative').textContent = getAntiderivativeString(functionType);
    
    // Update function display in the definite integral
    document.getElementById('integral-function-display').textContent = getIntegralFunctionString(functionType);
    
    // Calculate and update definite integral value
    const integralValue = evaluateDefiniteIntegral(functionType, a, b);
    document.getElementById('definite-integral-value').textContent = integralValue.toFixed(2);
    
    // Calculate and update Riemann sum value
    const riemannValue = evaluateRiemannSum(functionType, a, b, n);
    document.getElementById('riemann-sum-value').textContent = riemannValue.toFixed(2);
}

// Function to update the Differential Equation Solver information panel
function updateDEInfo() {
    const equationType = document.getElementById('de-select').value;
    
    // Update equation display
    document.getElementById('current-de').textContent = getDEString(equationType);
    
    // Update parameters display
    document.getElementById('de-parameters-display').textContent = getDEParametersString(equationType);
    
    // Update initial conditions display
    document.getElementById('initial-conditions-display').textContent = getDEInitialConditionsString(equationType);
    
    // Update solution type and physical interpretation
    const solutionInfo = getDESolutionInfo(equationType);
    document.getElementById('solution-type').textContent = solutionInfo.type;
    document.getElementById('physical-interpretation').textContent = solutionInfo.interpretation;
}

// Function to evaluate a function at a given x value
function evaluateFunction(functionType, x) {
    switch (functionType) {
        case 'linear':
            const m = parseFloat(document.getElementById('linear-m').value);
            const b = parseFloat(document.getElementById('linear-b').value);
            return m * x + b;
        
        case 'quadratic':
            const a = parseFloat(document.getElementById('quadratic-a').value);
            const b2 = parseFloat(document.getElementById('quadratic-b').value);
            const c = parseFloat(document.getElementById('quadratic-c').value);
            return a * x * x + b2 * x + c;
        
        case 'cubic':
            const a3 = parseFloat(document.getElementById('cubic-a').value);
            const b3 = parseFloat(document.getElementById('cubic-b').value);
            const c3 = parseFloat(document.getElementById('cubic-c').value);
            const d3 = parseFloat(document.getElementById('cubic-d').value);
            return a3 * x * x * x + b3 * x * x + c3 * x + d3;
        
        case 'sine':
            const a4 = parseFloat(document.getElementById('sine-a').value);
            const b4 = parseFloat(document.getElementById('sine-b').value);
            const c4 = parseFloat(document.getElementById('sine-c').value);
            return a4 * Math.sin(b4 * x + c4);
        
        case 'exponential':
            const a5 = parseFloat(document.getElementById('exponential-a').value);
            const b5 = parseFloat(document.getElementById('exponential-b').value);
            return a5 * Math.exp(b5 * x);
        
        case 'logarithmic':
            const a6 = parseFloat(document.getElementById('logarithmic-a').value);
            const b6 = parseFloat(document.getElementById('logarithmic-b').value);
            return x > 0 ? a6 * Math.log(b6 * x) : 0;
        
        case 'custom':
            // For simplicity, we'll just return a default function for custom input
            // In a real implementation, this would parse and evaluate the custom function
            return x * x;
        
        default:
            return x * x; // Default to quadratic
    }
}

// Function to evaluate the derivative of a function at a given x value
function evaluateDerivative(functionType, x) {
    switch (functionType) {
        case 'linear':
            const m = parseFloat(document.getElementById('linear-m').value);
            return m;
        
        case 'quadratic':
            const a = parseFloat(document.getElementById('quadratic-a').value);
            const b = parseFloat(document.getElementById('quadratic-b').value);
            return 2 * a * x + b;
        
        case 'cubic':
            const a3 = parseFloat(document.getElementById('cubic-a').value);
            const b3 = parseFloat(document.getElementById('cubic-b').value);
            const c3 = parseFloat(document.getElementById('cubic-c').value);
            return 3 * a3 * x * x + 2 * b3 * x + c3;
        
        case 'sine':
            const a4 = parseFloat(document.getElementById('sine-a').value);
            const b4 = parseFloat(document.getElementById('sine-b').value);
            const c4 = parseFloat(document.getElementById('sine-c').value);
            return a4 * b4 * Math.cos(b4 * x + c4);
        
        case 'exponential':
            const a5 = parseFloat(document.getElementById('exponential-a').value);
            const b5 = parseFloat(document.getElementById('exponential-b').value);
            return a5 * b5 * Math.exp(b5 * x);
        
        case 'logarithmic':
            const a6 = parseFloat(document.getElementById('logarithmic-a').value);
            const b6 = parseFloat(document.getElementById('logarithmic-b').value);
            return x > 0 ? a6 / x : 0;
        
        case 'custom':
            // For simplicity, we'll just return a default derivative for custom input
            return 2 * x;
        
        default:
            return 2 * x; // Default to derivative of quadratic
    }
}

// Function to evaluate a function for the integral visualizer
function evaluateIntegralFunction(functionType, x) {
    switch (functionType) {
        case 'linear':
            const m = parseFloat(document.getElementById('integral-linear-m').value);
            const b = parseFloat(document.getElementById('integral-linear-b').value);
            return m * x + b;
        
        case 'quadratic':
            const a = parseFloat(document.getElementById('integral-quadratic-a').value);
            const b2 = parseFloat(document.getElementById('integral-quadratic-b').value);
            const c = parseFloat(document.getElementById('integral-quadratic-c').value);
            return a * x * x + b2 * x + c;
        
        case 'sine':
            const a4 = parseFloat(document.getElementById('integral-sine-a').value);
            const b4 = parseFloat(document.getElementById('integral-sine-b').value);
            const c4 = parseFloat(document.getElementById('integral-sine-c').value);
            return a4 * Math.sin(b4 * x + c4);
        
        case 'exponential':
            const a5 = parseFloat(document.getElementById('integral-exponential-a').value);
            const b5 = parseFloat(document.getElementById('integral-exponential-b').value);
            return a5 * Math.exp(b5 * x);
        
        case 'custom-integral':
            // For simplicity, we'll just return a default function for custom input
            return x * x;
        
        default:
            return x * x; // Default to quadratic
    }
}

// Function to evaluate the antiderivative of a function
function evaluateAntiderivative(functionType, x) {
    switch (functionType) {
        case 'linear':
            const m = parseFloat(document.getElementById('integral-linear-m').value);
            const b = parseFloat(document.getElementById('integral-linear-b').value);
            return m * x * x / 2 + b * x;
        
        case 'quadratic':
            const a = parseFloat(document.getElementById('integral-quadratic-a').value);
            const b2 = parseFloat(document.getElementById('integral-quadratic-b').value);
            const c = parseFloat(document.getElementById('integral-quadratic-c').value);
            return a * x * x * x / 3 + b2 * x * x / 2 + c * x;
        
        case 'sine':
            const a4 = parseFloat(document.getElementById('integral-sine-a').value);
            const b4 = parseFloat(document.getElementById('integral-sine-b').value);
            const c4 = parseFloat(document.getElementById('integral-sine-c').value);
            return -a4 / b4 * Math.cos(b4 * x + c4);
        
        case 'exponential':
            const a5 = parseFloat(document.getElementById('integral-exponential-a').value);
            const b5 = parseFloat(document.getElementById('integral-exponential-b').value);
            return a5 / b5 * Math.exp(b5 * x);
        
        case 'custom-integral':
            // For simplicity, we'll just return a default antiderivative for custom input
            return x * x * x / 3;
        
        default:
            return x * x * x / 3; // Default to antiderivative of quadratic
    }
}

// Function to evaluate a definite integral
function evaluateDefiniteIntegral(functionType, a, b) {
    return evaluateAntiderivative(functionType, b) - evaluateAntiderivative(functionType, a);
}

// Function to evaluate a Riemann sum
function evaluateRiemannSum(functionType, a, b, n) {
    const dx = (b - a) / n;
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        const x = a + i * dx;
        sum += evaluateIntegralFunction(functionType, x) * dx;
    }
    
    return sum;
}

// Function to solve a differential equation
function solveDifferentialEquation() {
    const equationType = document.getElementById('de-select').value;
    const timeRange = parseInt(document.getElementById('time-range').value);
    
    // Generate solution data
    const solutionData = generateDESolution(equationType, timeRange);
    
    // Store solution data in the visualization element
    document.getElementById('de-visualization').setAttribute('data-has-solution', 'true');
    document.getElementById('de-visualization').setAttribute('data-solution', JSON.stringify(solutionData));
}

// Function to reset the differential equation solver
function resetDifferentialEquation() {
    document.getElementById('de-visualization').setAttribute('data-has-solution', 'false');
}

// Function to generate a solution for a differential equation
function generateDESolution(equationType, timeRange) {
    const solutionData = [];
    const dt = 0.1;
    
    switch (equationType) {
        case 'harmonic':
            const omega = parseFloat(document.getElementById('harmonic-omega').value);
            const y0 = parseFloat(document.getElementById('harmonic-y0').value);
            const v0 = parseFloat(document.getElementById('harmonic-v0').value);
            
            // Generate solution for harmonic oscillator: y(t) = A*cos(omega*t) + B*sin(omega*t)
            const A = y0;
            const B = v0 / omega;
            
            for (let t = 0; t <= timeRange; t += dt) {
                const y = A * Math.cos(omega * t) + B * Math.sin(omega * t);
                solutionData.push({ t, y });
            }
            break;
        
        case 'damped':
            const b = parseFloat(document.getElementById('damped-b').value);
            const k = parseFloat(document.getElementById('damped-k').value);
            const y0d = parseFloat(document.getElementById('damped-y0').value);
            const v0d = parseFloat(document.getElementById('damped-v0').value);
            
            // Generate solution for damped oscillator
            // This is a simplified approximation
            const omega0 = Math.sqrt(k);
            const zeta = b / (2 * Math.sqrt(k));
            
            if (zeta < 1) {
                // Underdamped case
                const omegaD = omega0 * Math.sqrt(1 - zeta * zeta);
                const A = y0d;
                const B = (v0d + zeta * omega0 * y0d) / omegaD;
                
                for (let t = 0; t <= timeRange; t += dt) {
                    const y = Math.exp(-zeta * omega0 * t) * (A * Math.cos(omegaD * t) + B * Math.sin(omegaD * t));
                    solutionData.push({ t, y });
                }
            } else if (zeta === 1) {
                // Critically damped case
                const A = y0d;
                const B = v0d + omega0 * y0d;
                
                for (let t = 0; t <= timeRange; t += dt) {
                    const y = (A + B * t) * Math.exp(-omega0 * t);
                    solutionData.push({ t, y });
                }
            } else {
                // Overdamped case
                const r1 = -omega0 * (zeta + Math.sqrt(zeta * zeta - 1));
                const r2 = -omega0 * (zeta - Math.sqrt(zeta * zeta - 1));
                const A = (v0d - r2 * y0d) / (r1 - r2);
                const B = (r1 * y0d - v0d) / (r1 - r2);
                
                for (let t = 0; t <= timeRange; t += dt) {
                    const y = A * Math.exp(r1 * t) + B * Math.exp(r2 * t);
                    solutionData.push({ t, y });
                }
            }
            break;
        
        // Add cases for other equation types
        
        default:
            // Default to harmonic oscillator
            for (let t = 0; t <= timeRange; t += dt) {
                const y = Math.cos(t);
                solutionData.push({ t, y });
            }
    }
    
    return solutionData;
}

// Function to get a string representation of a function
function getFunctionString(functionType) {
    switch (functionType) {
        case 'linear':
            const m = parseFloat(document.getElementById('linear-m').value);
            const b = parseFloat(document.getElementById('linear-b').value);
            return `f(x) = ${m}x + ${b}`;
        
        case 'quadratic':
            const a = parseFloat(document.getElementById('quadratic-a').value);
            const b2 = parseFloat(document.getElementById('quadratic-b').value);
            const c = parseFloat(document.getElementById('quadratic-c').value);
            return `f(x) = ${a}x² + ${b2}x + ${c}`;
        
        case 'cubic':
            const a3 = parseFloat(document.getElementById('cubic-a').value);
            const b3 = parseFloat(document.getElementById('cubic-b').value);
            const c3 = parseFloat(document.getElementById('cubic-c').value);
            const d3 = parseFloat(document.getElementById('cubic-d').value);
            return `f(x) = ${a3}x³ + ${b3}x² + ${c3}x + ${d3}`;
        
        case 'sine':
            const a4 = parseFloat(document.getElementById('sine-a').value);
            const b4 = parseFloat(document.getElementById('sine-b').value);
            const c4 = parseFloat(document.getElementById('sine-c').value);
            return `f(x) = ${a4}sin(${b4}x + ${c4})`;
        
        case 'exponential':
            const a5 = parseFloat(document.getElementById('exponential-a').value);
            const b5 = parseFloat(document.getElementById('exponential-b').value);
            return `f(x) = ${a5}e^(${b5}x)`;
        
        case 'logarithmic':
            const a6 = parseFloat(document.getElementById('logarithmic-a').value);
            const b6 = parseFloat(document.getElementById('logarithmic-b').value);
            return `f(x) = ${a6}ln(${b6}x)`;
        
        case 'custom':
            const customFunction = document.getElementById('custom-function').value;
            return `f(x) = ${customFunction}`;
        
        default:
            return 'f(x) = x²';
    }
}

// Function to get a string representation of a derivative
function getDerivativeString(functionType) {
    switch (functionType) {
        case 'linear':
            const m = parseFloat(document.getElementById('linear-m').value);
            return `f'(x) = ${m}`;
        
        case 'quadratic':
            const a = parseFloat(document.getElementById('quadratic-a').value);
            const b = parseFloat(document.getElementById('quadratic-b').value);
            return `f'(x) = ${2 * a}x + ${b}`;
        
        case 'cubic':
            const a3 = parseFloat(document.getElementById('cubic-a').value);
            const b3 = parseFloat(document.getElementById('cubic-b').value);
            const c3 = parseFloat(document.getElementById('cubic-c').value);
            return `f'(x) = ${3 * a3}x² + ${2 * b3}x + ${c3}`;
        
        case 'sine':
            const a4 = parseFloat(document.getElementById('sine-a').value);
            const b4 = parseFloat(document.getElementById('sine-b').value);
            const c4 = parseFloat(document.getElementById('sine-c').value);
            return `f'(x) = ${a4 * b4}cos(${b4}x + ${c4})`;
        
        case 'exponential':
            const a5 = parseFloat(document.getElementById('exponential-a').value);
            const b5 = parseFloat(document.getElementById('exponential-b').value);
            return `f'(x) = ${a5 * b5}e^(${b5}x)`;
        
        case 'logarithmic':
            const a6 = parseFloat(document.getElementById('logarithmic-a').value);
            const b6 = parseFloat(document.getElementById('logarithmic-b').value);
            return `f'(x) = ${a6}/x`;
        
        case 'custom':
            return `f'(x) = derivative of custom function`;
        
        default:
            return 'f\'(x) = 2x';
    }
}

// Function to get a string representation of a function for the integral visualizer
function getIntegralFunctionString(functionType) {
    switch (functionType) {
        case 'linear':
            const m = parseFloat(document.getElementById('integral-linear-m').value);
            const b = parseFloat(document.getElementById('integral-linear-b').value);
            return `f(x) = ${m}x + ${b}`;
        
        case 'quadratic':
            const a = parseFloat(document.getElementById('integral-quadratic-a').value);
            const b2 = parseFloat(document.getElementById('integral-quadratic-b').value);
            const c = parseFloat(document.getElementById('integral-quadratic-c').value);
            return `f(x) = ${a}x² + ${b2}x + ${c}`;
        
        case 'sine':
            const a4 = parseFloat(document.getElementById('integral-sine-a').value);
            const b4 = parseFloat(document.getElementById('integral-sine-b').value);
            const c4 = parseFloat(document.getElementById('integral-sine-c').value);
            return `f(x) = ${a4}sin(${b4}x + ${c4})`;
        
        case 'exponential':
            const a5 = parseFloat(document.getElementById('integral-exponential-a').value);
            const b5 = parseFloat(document.getElementById('integral-exponential-b').value);
            return `f(x) = ${a5}e^(${b5}x)`;
        
        case 'custom-integral':
            const customFunction = document.getElementById('custom-integral-function').value;
            return `f(x) = ${customFunction}`;
        
        default:
            return 'f(x) = x²';
    }
}

// Function to get a string representation of an antiderivative
function getAntiderivativeString(functionType) {
    switch (functionType) {
        case 'linear':
            const m = parseFloat(document.getElementById('integral-linear-m').value);
            const b = parseFloat(document.getElementById('integral-linear-b').value);
            return `F(x) = ${m}x²/2 + ${b}x + C`;
        
        case 'quadratic':
            const a = parseFloat(document.getElementById('integral-quadratic-a').value);
            const b2 = parseFloat(document.getElementById('integral-quadratic-b').value);
            const c = parseFloat(document.getElementById('integral-quadratic-c').value);
            return `F(x) = ${a}x³/3 + ${b2}x²/2 + ${c}x + C`;
        
        case 'sine':
            const a4 = parseFloat(document.getElementById('integral-sine-a').value);
            const b4 = parseFloat(document.getElementById('integral-sine-b').value);
            const c4 = parseFloat(document.getElementById('integral-sine-c').value);
            return `F(x) = -${a4}/${b4}cos(${b4}x + ${c4}) + C`;
        
        case 'exponential':
            const a5 = parseFloat(document.getElementById('integral-exponential-a').value);
            const b5 = parseFloat(document.getElementById('integral-exponential-b').value);
            return `F(x) = ${a5}/${b5}e^(${b5}x) + C`;
        
        case 'custom-integral':
            return `F(x) = antiderivative of custom function + C`;
        
        default:
            return 'F(x) = x³/3 + C';
    }
}

// Function to get a string representation of a differential equation
function getDEString(equationType) {
    switch (equationType) {
        case 'harmonic':
            const omega = parseFloat(document.getElementById('harmonic-omega').value);
            return `y'' + ${omega}²y = 0`;
        
        case 'damped':
            const b = parseFloat(document.getElementById('damped-b').value);
            const k = parseFloat(document.getElementById('damped-k').value);
            return `y'' + ${b}y' + ${k}y = 0`;
        
        case 'forced':
            const b2 = parseFloat(document.getElementById('forced-b').value);
            const k2 = parseFloat(document.getElementById('forced-k').value);
            const F0 = parseFloat(document.getElementById('forced-F0').value);
            const omega2 = parseFloat(document.getElementById('forced-omega').value);
            return `y'' + ${b2}y' + ${k2}y = ${F0}cos(${omega2}t)`;
        
        case 'orbital':
            return `r'' - rθ'² = -GM/r²`;
        
        case 'population':
            const r = parseFloat(document.getElementById('population-r').value);
            const K = parseFloat(document.getElementById('population-K').value);
            return `dP/dt = ${r}P(1 - P/${K})`;
        
        default:
            return 'y\'\' + ω²y = 0';
    }
}

// Function to get a string representation of differential equation parameters
function getDEParametersString(equationType) {
    switch (equationType) {
        case 'harmonic':
            const omega = parseFloat(document.getElementById('harmonic-omega').value);
            return `ω = ${omega}`;
        
        case 'damped':
            const b = parseFloat(document.getElementById('damped-b').value);
            const k = parseFloat(document.getElementById('damped-k').value);
            return `b = ${b}, k = ${k}`;
        
        case 'forced':
            const b2 = parseFloat(document.getElementById('forced-b').value);
            const k2 = parseFloat(document.getElementById('forced-k').value);
            const F0 = parseFloat(document.getElementById('forced-F0').value);
            const omega2 = parseFloat(document.getElementById('forced-omega').value);
            return `b = ${b2}, k = ${k2}, F₀ = ${F0}, ω = ${omega2}`;
        
        case 'orbital':
            const GM = parseFloat(document.getElementById('orbital-GM').value);
            return `GM = ${GM}`;
        
        case 'population':
            const r = parseFloat(document.getElementById('population-r').value);
            const K = parseFloat(document.getElementById('population-K').value);
            return `r = ${r}, K = ${K}`;
        
        default:
            return 'ω = 1';
    }
}

// Function to get a string representation of differential equation initial conditions
function getDEInitialConditionsString(equationType) {
    switch (equationType) {
        case 'harmonic':
            const y0 = parseFloat(document.getElementById('harmonic-y0').value);
            const v0 = parseFloat(document.getElementById('harmonic-v0').value);
            return `y(0) = ${y0}, y'(0) = ${v0}`;
        
        case 'damped':
            const y0d = parseFloat(document.getElementById('damped-y0').value);
            const v0d = parseFloat(document.getElementById('damped-v0').value);
            return `y(0) = ${y0d}, y'(0) = ${v0d}`;
        
        // Add cases for other equation types
        
        default:
            return 'y(0) = 1, y\'(0) = 0';
    }
}

// Function to get information about a differential equation solution
function getDESolutionInfo(equationType) {
    switch (equationType) {
        case 'harmonic':
            return {
                type: 'Oscillatory',
                interpretation: 'Simple harmonic motion, like a planet in a circular orbit or a pendulum with small oscillations.'
            };
        
        case 'damped':
            const b = parseFloat(document.getElementById('damped-b').value);
            const k = parseFloat(document.getElementById('damped-k').value);
            const zeta = b / (2 * Math.sqrt(k));
            
            if (zeta < 1) {
                return {
                    type: 'Underdamped Oscillatory',
                    interpretation: 'Oscillations that gradually decrease in amplitude, like a pendulum in air.'
                };
            } else if (zeta === 1) {
                return {
                    type: 'Critically Damped',
                    interpretation: 'Returns to equilibrium in the shortest time without oscillating, like a door with a perfect damper.'
                };
            } else {
                return {
                    type: 'Overdamped',
                    interpretation: 'Slowly returns to equilibrium without oscillating, like a door with a heavy damper.'
                };
            }
        
        case 'forced':
            return {
                type: 'Forced Oscillatory',
                interpretation: 'Oscillations driven by an external force, like tides caused by the Moon or resonant orbital patterns.'
            };
        
        case 'orbital':
            return {
                type: 'Orbital Motion',
                interpretation: 'Describes the path of a body under gravitational influence, like a planet orbiting a star.'
            };
        
        case 'population':
            return {
                type: 'Logistic Growth',
                interpretation: 'Population growth that levels off at a carrying capacity, like the spread of a species in a new environment.'
            };
        
        default:
            return {
                type: 'Oscillatory',
                interpretation: 'Simple harmonic motion, like a planet in a circular orbit or a pendulum with small oscillations.'
            };
    }
}

// Function to update parameters for derivative explorer
function updateFunctionParameters(functionType) {
    const parametersDiv = document.getElementById('function-parameters');
    parametersDiv.innerHTML = '';
    
    switch(functionType) {
        case 'linear':
            parametersDiv.innerHTML = `
                <div>
                    <label for="linear-m">m (slope):</label>
                    <input type="range" id="linear-m" min="-5" max="5" step="0.1" value="1">
                    <span id="linear-m-display">1</span>
                </div>
                <div>
                    <label for="linear-b">b (y-intercept):</label>
                    <input type="range" id="linear-b" min="-5" max="5" step="0.1" value="0">
                    <span id="linear-b-display">0</span>
                </div>
            `;
            break;
        case 'quadratic':
            parametersDiv.innerHTML = `
                <div>
                    <label for="quadratic-a">a:</label>
                    <input type="range" id="quadratic-a" min="-2" max="2" step="0.1" value="1">
                    <span id="quadratic-a-display">1</span>
                </div>
                <div>
                    <label for="quadratic-b">b:</label>
                    <input type="range" id="quadratic-b" min="-5" max="5" step="0.1" value="0">
                    <span id="quadratic-b-display">0</span>
                </div>
                <div>
                    <label for="quadratic-c">c:</label>
                    <input type="range" id="quadratic-c" min="-5" max="5" step="0.1" value="0">
                    <span id="quadratic-c-display">0</span>
                </div>
            `;
            break;
        case 'cubic':
            parametersDiv.innerHTML = `
                <div>
                    <label for="cubic-a">a:</label>
                    <input type="range" id="cubic-a" min="-1" max="1" step="0.1" value="0.1">
                    <span id="cubic-a-display">0.1</span>
                </div>
                <div>
                    <label for="cubic-b">b:</label>
                    <input type="range" id="cubic-b" min="-2" max="2" step="0.1" value="0">
                    <span id="cubic-b-display">0</span>
                </div>
                <div>
                    <label for="cubic-c">c:</label>
                    <input type="range" id="cubic-c" min="-5" max="5" step="0.1" value="0">
                    <span id="cubic-c-display">0</span>
                </div>
                <div>
                    <label for="cubic-d">d:</label>
                    <input type="range" id="cubic-d" min="-5" max="5" step="0.1" value="0">
                    <span id="cubic-d-display">0</span>
                </div>
            `;
            break;
        case 'sine':
            parametersDiv.innerHTML = `
                <div>
                    <label for="sine-a">a (amplitude):</label>
                    <input type="range" id="sine-a" min="-5" max="5" step="0.1" value="1">
                    <span id="sine-a-display">1</span>
                </div>
                <div>
                    <label for="sine-b">b (frequency):</label>
                    <input type="range" id="sine-b" min="0.1" max="5" step="0.1" value="1">
                    <span id="sine-b-display">1</span>
                </div>
                <div>
                    <label for="sine-c">c (phase):</label>
                    <input type="range" id="sine-c" min="-3.14" max="3.14" step="0.1" value="0">
                    <span id="sine-c-display">0</span>
                </div>
            `;
            break;
        case 'exponential':
            parametersDiv.innerHTML = `
                <div>
                    <label for="exponential-a">a (coefficient):</label>
                    <input type="range" id="exponential-a" min="-5" max="5" step="0.1" value="1">
                    <span id="exponential-a-display">1</span>
                </div>
                <div>
                    <label for="exponential-b">b (exponent):</label>
                    <input type="range" id="exponential-b" min="-2" max="2" step="0.1" value="1">
                    <span id="exponential-b-display">1</span>
                </div>
            `;
            break;
        case 'logarithmic':
            parametersDiv.innerHTML = `
                <div>
                    <label for="logarithmic-a">a (coefficient):</label>
                    <input type="range" id="logarithmic-a" min="-5" max="5" step="0.1" value="1">
                    <span id="logarithmic-a-display">1</span>
                </div>
                <div>
                    <label for="logarithmic-b">b (base factor):</label>
                    <input type="range" id="logarithmic-b" min="0.1" max="10" step="0.1" value="1">
                    <span id="logarithmic-b-display">1</span>
                </div>
            `;
            break;
    }
    
    // Add event listeners for the new range inputs
    const rangeInputs = parametersDiv.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
        input.addEventListener('input', function() {
            document.getElementById(this.id + '-display').textContent = this.value;
            drawDerivativeExplorer();
            updateDerivativeInfo();
        });
    });
}

// Function to update parameters for integral visualizer
function updateIntegralFunctionParameters(functionType) {
    const parametersDiv = document.getElementById('integral-function-parameters');
    parametersDiv.innerHTML = '';
    
    switch(functionType) {
        case 'linear':
            parametersDiv.innerHTML = `
                <div>
                    <label for="integral-linear-m">m (slope):</label>
                    <input type="range" id="integral-linear-m" min="-5" max="5" step="0.1" value="1">
                    <span id="integral-linear-m-display">1</span>
                </div>
                <div>
                    <label for="integral-linear-b">b (y-intercept):</label>
                    <input type="range" id="integral-linear-b" min="-5" max="5" step="0.1" value="0">
                    <span id="integral-linear-b-display">0</span>
                </div>
            `;
            break;
        case 'quadratic':
            parametersDiv.innerHTML = `
                <div>
                    <label for="integral-quadratic-a">a:</label>
                    <input type="range" id="integral-quadratic-a" min="-2" max="2" step="0.1" value="1">
                    <span id="integral-quadratic-a-display">1</span>
                </div>
                <div>
                    <label for="integral-quadratic-b">b:</label>
                    <input type="range" id="integral-quadratic-b" min="-5" max="5" step="0.1" value="0">
                    <span id="integral-quadratic-b-display">0</span>
                </div>
                <div>
                    <label for="integral-quadratic-c">c:</label>
                    <input type="range" id="integral-quadratic-c" min="-5" max="5" step="0.1" value="0">
                    <span id="integral-quadratic-c-display">0</span>
                </div>
            `;
            break;
        case 'sine':
            parametersDiv.innerHTML = `
                <div>
                    <label for="integral-sine-a">a (amplitude):</label>
                    <input type="range" id="integral-sine-a" min="-5" max="5" step="0.1" value="1">
                    <span id="integral-sine-a-display">1</span>
                </div>
                <div>
                    <label for="integral-sine-b">b (frequency):</label>
                    <input type="range" id="integral-sine-b" min="0.1" max="5" step="0.1" value="1">
                    <span id="integral-sine-b-display">1</span>
                </div>
                <div>
                    <label for="integral-sine-c">c (phase):</label>
                    <input type="range" id="integral-sine-c" min="-3.14" max="3.14" step="0.1" value="0">
                    <span id="integral-sine-c-display">0</span>
                </div>
            `;
            break;
        case 'exponential':
            parametersDiv.innerHTML = `
                <div>
                    <label for="integral-exponential-a">a (coefficient):</label>
                    <input type="range" id="integral-exponential-a" min="-5" max="5" step="0.1" value="1">
                    <span id="integral-exponential-a-display">1</span>
                </div>
                <div>
                    <label for="integral-exponential-b">b (exponent):</label>
                    <input type="range" id="integral-exponential-b" min="-2" max="2" step="0.1" value="1">
                    <span id="integral-exponential-b-display">1</span>
                </div>
            `;
            break;
    }
    
    // Add event listeners for the new range inputs
    const rangeInputs = parametersDiv.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
        input.addEventListener('input', function() {
            document.getElementById(this.id + '-display').textContent = this.value;
            drawIntegralVisualizer();
            updateIntegralInfo();
        });
    });
}

// Function to update parameters for differential equation solver
function updateDEParameters(equationType) {
    const parametersDiv = document.getElementById('de-parameters');
    const initialConditionsDiv = document.getElementById('initial-conditions');
    
    parametersDiv.innerHTML = '';
    initialConditionsDiv.innerHTML = '';
    
    switch(equationType) {
        case 'harmonic':
            parametersDiv.innerHTML = `
                <div>
                    <label for="harmonic-omega">ω (angular frequency):</label>
                    <input type="range" id="harmonic-omega" min="0.1" max="5" step="0.1" value="1">
                    <span id="harmonic-omega-display">1</span>
                </div>
            `;
            
            initialConditionsDiv.innerHTML = `
                <div>
                    <label for="harmonic-y0">y(0):</label>
                    <input type="range" id="harmonic-y0" min="-5" max="5" step="0.1" value="1">
                    <span id="harmonic-y0-display">1</span>
                </div>
                <div>
                    <label for="harmonic-v0">y'(0):</label>
                    <input type="range" id="harmonic-v0" min="-5" max="5" step="0.1" value="0">
                    <span id="harmonic-v0-display">0</span>
                </div>
            `;
            break;
        case 'damped':
            parametersDiv.innerHTML = `
                <div>
                    <label for="damped-b">b (damping coefficient):</label>
                    <input type="range" id="damped-b" min="0" max="5" step="0.1" value="0.5">
                    <span id="damped-b-display">0.5</span>
                </div>
                <div>
                    <label for="damped-k">k (spring constant):</label>
                    <input type="range" id="damped-k" min="0.1" max="10" step="0.1" value="1">
                    <span id="damped-k-display">1</span>
                </div>
            `;
            
            initialConditionsDiv.innerHTML = `
                <div>
                    <label for="damped-y0">y(0):</label>
                    <input type="range" id="damped-y0" min="-5" max="5" step="0.1" value="1">
                    <span id="damped-y0-display">1</span>
                </div>
                <div>
                    <label for="damped-v0">y'(0):</label>
                    <input type="range" id="damped-v0" min="-5" max="5" step="0.1" value="0">
                    <span id="damped-v0-display">0</span>
                </div>
            `;
            break;
        case 'forced':
            parametersDiv.innerHTML = `
                <div>
                    <label for="forced-b">b (damping coefficient):</label>
                    <input type="range" id="forced-b" min="0" max="5" step="0.1" value="0.5">
                    <span id="forced-b-display">0.5</span>
                </div>
                <div>
                    <label for="forced-k">k (spring constant):</label>
                    <input type="range" id="forced-k" min="0.1" max="10" step="0.1" value="1">
                    <span id="forced-k-display">1</span>
                </div>
                <div>
                    <label for="forced-F0">F₀ (force amplitude):</label>
                    <input type="range" id="forced-F0" min="0" max="5" step="0.1" value="1">
                    <span id="forced-F0-display">1</span>
                </div>
                <div>
                    <label for="forced-omega">ω (forcing frequency):</label>
                    <input type="range" id="forced-omega" min="0.1" max="5" step="0.1" value="1">
                    <span id="forced-omega-display">1</span>
                </div>
            `;
            
            initialConditionsDiv.innerHTML = `
                <div>
                    <label for="forced-y0">y(0):</label>
                    <input type="range" id="forced-y0" min="-5" max="5" step="0.1" value="0">
                    <span id="forced-y0-display">0</span>
                </div>
                <div>
                    <label for="forced-v0">y'(0):</label>
                    <input type="range" id="forced-v0" min="-5" max="5" step="0.1" value="0">
                    <span id="forced-v0-display">0</span>
                </div>
            `;
            break;
        case 'orbital':
            parametersDiv.innerHTML = `
                <div>
                    <label for="orbital-GM">GM (gravitational parameter):</label>
                    <input type="range" id="orbital-GM" min="0.1" max="10" step="0.1" value="1">
                    <span id="orbital-GM-display">1</span>
                </div>
            `;
            
            initialConditionsDiv.innerHTML = `
                <div>
                    <label for="orbital-r0">r(0):</label>
                    <input type="range" id="orbital-r0" min="0.1" max="10" step="0.1" value="1">
                    <span id="orbital-r0-display">1</span>
                </div>
                <div>
                    <label for="orbital-v0">v(0):</label>
                    <input type="range" id="orbital-v0" min="0" max="5" step="0.1" value="1">
                    <span id="orbital-v0-display">1</span>
                </div>
                <div>
                    <label for="orbital-theta0">θ(0):</label>
                    <input type="range" id="orbital-theta0" min="0" max="6.28" step="0.1" value="0">
                    <span id="orbital-theta0-display">0</span>
                </div>
            `;
            break;
        case 'population':
            parametersDiv.innerHTML = `
                <div>
                    <label for="population-r">r (growth rate):</label>
                    <input type="range" id="population-r" min="0.1" max="2" step="0.1" value="0.5">
                    <span id="population-r-display">0.5</span>
                </div>
                <div>
                    <label for="population-K">K (carrying capacity):</label>
                    <input type="range" id="population-K" min="1" max="10" step="0.1" value="5">
                    <span id="population-K-display">5</span>
                </div>
            `;
            
            initialConditionsDiv.innerHTML = `
                <div>
                    <label for="population-P0">P(0):</label>
                    <input type="range" id="population-P0" min="0.1" max="10" step="0.1" value="0.5">
                    <span id="population-P0-display">0.5</span>
                </div>
            `;
            break;
    }
    
    // Add event listeners for the new range inputs
    const rangeInputs = document.querySelectorAll('#de-parameters input[type="range"], #initial-conditions input[type="range"]');
    rangeInputs.forEach(input => {
        input.addEventListener('input', function() {
            document.getElementById(this.id + '-display').textContent = this.value;
            updateDEInfo();
        });
    });
}

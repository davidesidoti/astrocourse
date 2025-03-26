// Statistical Thinking Interactive Elements

// Function to initialize the statistical distribution visualizer
function initStatisticalDistributionVisualizer() {
    // Create canvas for statistical distributions
    statsCanvas = document.createElement('canvas');
    statsCanvas.width = CANVAS_WIDTH;
    statsCanvas.height = CANVAS_HEIGHT;
    document.getElementById('stats-visualization').appendChild(statsCanvas);
    statsCtx = statsCanvas.getContext('2d');
    
    // Draw initial visualization
    drawStatisticalDistribution();
}

// Function to draw statistical distributions
function drawStatisticalDistribution() {
    // Clear the canvas
    statsCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Draw grid and axes
    drawGrid(statsCtx);
    drawAxes(statsCtx, 'x', 'Probability Density');
    
    // Get distribution parameters from UI
    const distributionType = document.getElementById('distribution-type').value;
    const mean = parseFloat(document.getElementById('mean-value').value);
    const stdDev = parseFloat(document.getElementById('std-dev-value').value);
    const lambda = parseFloat(document.getElementById('lambda-value').value);
    
    // Draw the selected distribution
    switch(distributionType) {
        case 'gaussian':
            drawGaussianDistribution(mean, stdDev);
            break;
        case 'poisson':
            drawPoissonDistribution(lambda);
            break;
        case 'binomial':
            const n = parseInt(document.getElementById('n-trials').value);
            const p = parseFloat(document.getElementById('p-success').value);
            drawBinomialDistribution(n, p);
            break;
    }
    
    // Draw confidence intervals if enabled
    if (document.getElementById('show-confidence').checked) {
        drawConfidenceIntervals(distributionType, mean, stdDev, lambda);
    }
}

// Function to draw Gaussian distribution
function drawGaussianDistribution(mean, stdDev) {
    statsCtx.beginPath();
    statsCtx.strokeStyle = COLORS.function;
    statsCtx.lineWidth = 3;
    
    // Convert mathematical coordinates to pixel coordinates
    const xMin = mean - 4 * stdDev;
    const xMax = mean + 4 * stdDev;
    
    for (let x = 0; x <= CANVAS_WIDTH; x++) {
        // Convert pixel x to mathematical x
        const mathX = xMin + (x / CANVAS_WIDTH) * (xMax - xMin);
        
        // Calculate Gaussian PDF
        const gaussianValue = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * 
                             Math.exp(-0.5 * Math.pow((mathX - mean) / stdDev, 2));
        
        // Scale to canvas
        const maxHeight = 1 / (stdDev * Math.sqrt(2 * Math.PI)); // Max height of PDF
        const scaledY = CANVAS_HEIGHT - MARGIN - (gaussianValue / maxHeight) * (CANVAS_HEIGHT - 2 * MARGIN);
        
        if (x === 0) {
            statsCtx.moveTo(x, scaledY);
        } else {
            statsCtx.lineTo(x, scaledY);
        }
    }
    
    statsCtx.stroke();
    
    // Add label
    statsCtx.fillStyle = COLORS.function;
    statsCtx.fillText(`Gaussian: μ=${mean}, σ=${stdDev}`, MARGIN, MARGIN - 10);
}

// Function to draw Poisson distribution
function drawPoissonDistribution(lambda) {
    statsCtx.strokeStyle = COLORS.derivative;
    statsCtx.lineWidth = 3;
    
    // Determine range to display
    const xMin = Math.max(0, Math.floor(lambda - 3 * Math.sqrt(lambda)));
    const xMax = Math.ceil(lambda + 3 * Math.sqrt(lambda));
    
    // Draw bars for each integer value
    for (let k = xMin; k <= xMax; k++) {
        // Calculate Poisson PMF: P(X = k) = (lambda^k * e^-lambda) / k!
        const poissonValue = (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
        
        // Convert to canvas coordinates
        const x = MARGIN + ((k - xMin) / (xMax - xMin)) * (CANVAS_WIDTH - 2 * MARGIN);
        const barHeight = poissonValue * (CANVAS_HEIGHT - 2 * MARGIN) / 0.4; // Scale factor
        const y = CANVAS_HEIGHT - MARGIN - barHeight;
        
        // Draw bar
        statsCtx.beginPath();
        statsCtx.rect(x - 10, y, 20, barHeight);
        statsCtx.fillStyle = COLORS.derivative;
        statsCtx.fill();
        
        // Add value label
        statsCtx.fillStyle = '#000';
        statsCtx.fillText(k.toString(), x, CANVAS_HEIGHT - MARGIN + 15);
    }
    
    // Add label
    statsCtx.fillStyle = COLORS.derivative;
    statsCtx.fillText(`Poisson: λ=${lambda}`, MARGIN, MARGIN - 10);
}

// Function to draw Binomial distribution
function drawBinomialDistribution(n, p) {
    statsCtx.strokeStyle = COLORS.tangent;
    statsCtx.lineWidth = 3;
    
    // Draw bars for each possible value
    for (let k = 0; k <= n; k++) {
        // Calculate Binomial PMF: P(X = k) = (n choose k) * p^k * (1-p)^(n-k)
        const binomialValue = binomialCoefficient(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
        
        // Convert to canvas coordinates
        const x = MARGIN + (k / n) * (CANVAS_WIDTH - 2 * MARGIN);
        const barHeight = binomialValue * (CANVAS_HEIGHT - 2 * MARGIN) / 0.4; // Scale factor
        const y = CANVAS_HEIGHT - MARGIN - barHeight;
        
        // Draw bar
        statsCtx.beginPath();
        statsCtx.rect(x - 10, y, 20, barHeight);
        statsCtx.fillStyle = COLORS.tangent;
        statsCtx.fill();
        
        // Add value label
        statsCtx.fillStyle = '#000';
        statsCtx.fillText(k.toString(), x, CANVAS_HEIGHT - MARGIN + 15);
    }
    
    // Add label
    statsCtx.fillStyle = COLORS.tangent;
    statsCtx.fillText(`Binomial: n=${n}, p=${p}`, MARGIN, MARGIN - 10);
}

// Function to draw confidence intervals
function drawConfidenceIntervals(distributionType, mean, stdDev, lambda) {
    if (distributionType === 'gaussian') {
        // Draw 1-sigma interval (68%)
        const x1Minus = mean - stdDev;
        const x1Plus = mean + stdDev;
        drawInterval(x1Minus, x1Plus, "68% (1σ)", "#ffcc00");
        
        // Draw 2-sigma interval (95%)
        const x2Minus = mean - 2 * stdDev;
        const x2Plus = mean + 2 * stdDev;
        drawInterval(x2Minus, x2Plus, "95% (2σ)", "#ff9900");
        
        // Draw 3-sigma interval (99.7%)
        const x3Minus = mean - 3 * stdDev;
        const x3Plus = mean + 3 * stdDev;
        drawInterval(x3Minus, x3Plus, "99.7% (3σ)", "#ff6600");
    }
}

// Helper function to draw a confidence interval
function drawInterval(xMin, xMax, label, color) {
    // Convert mathematical coordinates to pixel coordinates
    const pixelXMin = MARGIN + ((xMin - (mean - 4 * stdDev)) / (8 * stdDev)) * (CANVAS_WIDTH - 2 * MARGIN);
    const pixelXMax = MARGIN + ((xMax - (mean - 4 * stdDev)) / (8 * stdDev)) * (CANVAS_WIDTH - 2 * MARGIN);
    const y = CANVAS_HEIGHT - MARGIN + 30;
    
    // Draw interval line
    statsCtx.beginPath();
    statsCtx.strokeStyle = color;
    statsCtx.lineWidth = 2;
    statsCtx.moveTo(pixelXMin, y);
    statsCtx.lineTo(pixelXMax, y);
    statsCtx.stroke();
    
    // Draw end caps
    statsCtx.beginPath();
    statsCtx.moveTo(pixelXMin, y - 5);
    statsCtx.lineTo(pixelXMin, y + 5);
    statsCtx.moveTo(pixelXMax, y - 5);
    statsCtx.lineTo(pixelXMax, y + 5);
    statsCtx.stroke();
    
    // Add label
    statsCtx.fillStyle = color;
    statsCtx.fillText(label, (pixelXMin + pixelXMax) / 2 - 20, y - 10);
}

// Function to initialize the error propagation calculator
function initErrorPropagationCalculator() {
    // Set up initial values
    updateErrorPropagation();
}

// Function to update error propagation calculations
function updateErrorPropagation() {
    // Get input values
    const x = parseFloat(document.getElementById('x-value').value);
    const y = parseFloat(document.getElementById('y-value').value);
    const sigmaX = parseFloat(document.getElementById('sigma-x').value);
    const sigmaY = parseFloat(document.getElementById('sigma-y').value);
    const operation = document.getElementById('operation').value;
    
    // Calculate result and uncertainty
    let result, uncertainty;
    
    switch(operation) {
        case 'add':
            result = x + y;
            uncertainty = Math.sqrt(Math.pow(sigmaX, 2) + Math.pow(sigmaY, 2));
            break;
        case 'subtract':
            result = x - y;
            uncertainty = Math.sqrt(Math.pow(sigmaX, 2) + Math.pow(sigmaY, 2));
            break;
        case 'multiply':
            result = x * y;
            uncertainty = Math.abs(result) * Math.sqrt(Math.pow(sigmaX/x, 2) + Math.pow(sigmaY/y, 2));
            break;
        case 'divide':
            result = x / y;
            uncertainty = Math.abs(result) * Math.sqrt(Math.pow(sigmaX/x, 2) + Math.pow(sigmaY/y, 2));
            break;
    }
    
    // Display results
    document.getElementById('result-value').textContent = result.toFixed(4);
    document.getElementById('result-uncertainty').textContent = uncertainty.toFixed(4);
    document.getElementById('result-relative').textContent = ((uncertainty / Math.abs(result)) * 100).toFixed(2) + '%';
}

// Function to initialize the hypothesis testing simulator
function initHypothesisTesting() {
    // Set up initial visualization
    updateHypothesisTest();
}

// Function to update hypothesis test visualization
function updateHypothesisTest() {
    // Get input values
    const sampleMean = parseFloat(document.getElementById('sample-mean').value);
    const sampleStdDev = parseFloat(document.getElementById('sample-std-dev').value);
    const sampleSize = parseInt(document.getElementById('sample-size').value);
    const nullHypothesis = parseFloat(document.getElementById('null-hypothesis').value);
    const alpha = parseFloat(document.getElementById('alpha-level').value);
    
    // Calculate standard error
    const standardError = sampleStdDev / Math.sqrt(sampleSize);
    
    // Calculate z-score
    const zScore = (sampleMean - nullHypothesis) / standardError;
    
    // Calculate p-value (two-tailed)
    const pValue = 2 * (1 - normalCDF(Math.abs(zScore)));
    
    // Determine if null hypothesis is rejected
    const rejected = pValue < alpha;
    
    // Display results
    document.getElementById('z-score').textContent = zScore.toFixed(3);
    document.getElementById('p-value').textContent = pValue.toFixed(4);
    document.getElementById('test-result').textContent = rejected ? 
        "Reject null hypothesis" : "Fail to reject null hypothesis";
    document.getElementById('test-result').style.color = rejected ? "#e74c3c" : "#2ecc71";
    
    // Draw visualization
    drawHypothesisTest(nullHypothesis, sampleMean, standardError, alpha);
}

// Function to draw hypothesis test visualization
function drawHypothesisTest(nullMean, sampleMean, standardError, alpha) {
    // Get canvas context
    const canvas = document.getElementById('hypothesis-canvas');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up coordinate system
    const margin = 40;
    const width = canvas.width - 2 * margin;
    const height = canvas.height - 2 * margin;
    
    // Determine x-axis range
    const range = Math.max(Math.abs(sampleMean - nullMean) * 3, 4 * standardError);
    const xMin = nullMean - range;
    const xMax = nullMean + range;
    
    // Draw x-axis
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.moveTo(margin, canvas.height - margin);
    ctx.lineTo(canvas.width - margin, canvas.height - margin);
    ctx.stroke();
    
    // Draw null hypothesis distribution
    ctx.beginPath();
    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 2;
    
    for (let x = 0; x < width; x++) {
        const mathX = xMin + (x / width) * (xMax - xMin);
        const gaussianValue = (1 / (standardError * Math.sqrt(2 * Math.PI))) * 
                             Math.exp(-0.5 * Math.pow((mathX - nullMean) / standardError, 2));
        
        const maxHeight = 1 / (standardError * Math.sqrt(2 * Math.PI));
        const scaledY = canvas.height - margin - (gaussianValue / maxHeight) * height;
        
        if (x === 0) {
            ctx.moveTo(margin + x, scaledY);
        } else {
            ctx.lineTo(margin + x, scaledY);
        }
    }
    
    ctx.stroke();
    
    // Draw critical regions
    const criticalZ = normalInvCDF(1 - alpha / 2);
    const criticalLow = nullMean - criticalZ * standardError;
    const criticalHigh = nullMean + criticalZ * standardError;
    
    const pixelCriticalLow = margin + ((criticalLow - xMin) / (xMax - xMin)) * width;
    const pixelCriticalHigh = margin + ((criticalHigh - xMin) / (xMax - xMin)) * width;
    
    // Fill critical regions
    ctx.fillStyle = 'rgba(231, 76, 60, 0.3)';
    
    // Left critical region
    ctx.beginPath();
    ctx.moveTo(margin, canvas.height - margin);
    for (let x = 0; x < (pixelCriticalLow - margin); x++) {
        const mathX = xMin + (x / width) * (xMax - xMin);
        const gaussianValue = (1 / (standardError * Math.sqrt(2 * Math.PI))) * 
                             Math.exp(-0.5 * Math.pow((mathX - nullMean) / standardError, 2));
        
        const maxHeight = 1 / (standardError * Math.sqrt(2 * Math.PI));
        const scaledY = canvas.height - margin - (gaussianValue / maxHeight) * height;
        
        ctx.lineTo(margin + x, scaledY);
    }
    ctx.lineTo(pixelCriticalLow, canvas.height - margin);
    ctx.closePath();
    ctx.fill();
    
    // Right critical region
    ctx.beginPath();
    ctx.moveTo(pixelCriticalHigh, canvas.height - margin);
    for (let x = (pixelCriticalHigh - margin); x < width; x++) {
        const mathX = xMin + (x / width) * (xMax - xMin);
        const gaussianValue = (1 / (standardError * Math.sqrt(2 * Math.PI))) * 
                             Math.exp(-0.5 * Math.pow((mathX - nullMean) / standardError, 2));
        
        const maxHeight = 1 / (standardError * Math.sqrt(2 * Math.PI));
        const scaledY = canvas.height - margin - (gaussianValue / maxHeight) * height;
        
        ctx.lineTo(margin + x, scaledY);
    }
    ctx.lineTo(margin + width, canvas.height - margin);
    ctx.closePath();
    ctx.fill();
    
    // Draw sample mean
    const pixelSampleMean = margin + ((sampleMean - xMin) / (xMax - xMin)) * width;
    
    ctx.beginPath();
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 2;
    ctx.moveTo(pixelSampleMean, canvas.height - margin);
    ctx.lineTo(pixelSampleMean, margin);
    ctx.stroke();
    
    // Add labels
    ctx.fillStyle = '#000';
    ctx.fillText("Null: μ = " + nullMean.toFixed(2), margin, margin - 10);
    ctx.fillStyle = '#e74c3c';
    ctx.fillText("Sample: x̄ = " + sampleMean.toFixed(2), margin + 150, margin - 10);
    ctx.fillStyle = '#000';
    ctx.fillText("α = " + alpha.toFixed(2), canvas.width - margin - 60, margin - 10);
}

// Helper functions

// Factorial function for Poisson distribution
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Binomial coefficient for Binomial distribution
function binomialCoefficient(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

// Normal CDF approximation
function normalCDF(x) {
    // Approximation of the normal CDF
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989423 * Math.exp(-x * x / 2);
    const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return x > 0 ? 1 - p : p;
}

// Normal inverse CDF approximation
function normalInvCDF(p) {
    // Approximation of the inverse normal CDF
    if (p <= 0) return -Infinity;
    if (p >= 1) return Infinity;
    
    const a1 = -39.6968302866538;
    const a2 = 220.946098424521;
    const a3 = -275.928510446969;
    const a4 = 138.357751867269;
    const a5 = -30.6647980661472;
    const a6 = 2.50662827745924;
    
    const b1 = -54.4760987982241;
    const b2 = 161.585836858041;
    const b3 = -155.698979859887;
    const b4 = 66.8013118877197;
    const b5 = -13.2806815528857;
    
    const c1 = -7.78489400243029E-03;
    const c2 = -0.322396458041136;
    const c3 = -2.40075827716184;
    const c4 = -2.54973253934373;
    const c5 = 4.37466414146497;
    const c6 = 2.93816398269878;
    
    const d1 = 7.78469570904146E-03;
    const d2 = 0.32246712907004;
    const d3 = 2.445134137143;
    const d4 = 3.75440866190742;
    
    let q = p - 0.5;
    let r;
    
    if (Math.abs(q) <= 0.42) {
        r = q * q;
        return q * (((a4 * r + a3) * r + a2) * r + a1) / ((((b5 * r + b4) * r + b3) * r + b2) * r + b1);
    } else {
        if (q <= 0) r = p;
        else r = 1 - p;
        
        r = Math.sqrt(-Math.log(r));
        
        if (r <= 5) {
            r -= 1.6;
            return ((((c6 * r + c5) * r + c4) * r + c3) * r + c2) * r + c1) / ((((d4 * r + d3) * r + d2) * r + d1) * r + 1);
        } else {
            r -= 5;
            return ((((c6 * r + c5) * r + c4) * r + c3) * r + c2) * r + c1) / ((((d4 * r + d3) * r + d2) * r + d1) * r + 1);
        }
    }
}

// Add these functions to the initialization
document.addEventListener('DOMContentLoaded', function() {
    // Existing setup code...
    
    // Initialize statistical interactive elements
    initStatisticalDistributionVisualizer();
    initErrorPropagationCalculator();
    initHypothesisTesting();
    
    // Add event listeners for statistical controls
    document.getElementById('distribution-type').addEventListener('change', drawStatisticalDistribution);
    document.getElementById('mean-value').addEventListener('input', drawStatisticalDistribution);
    document.getElementById('std-dev-value').addEventListener('input', drawStatisticalDistribution);
    document.getElementById('lambda-value').addEventListener('input', drawStatisticalDistribution);
    document.getElementById('n-trials').addEventListener('input', drawStatisticalDistribution);
    document.getElementById('p-success').addEventListener('input', drawStatisticalDistribution);
    document.getElementById('show-confidence').addEventListener('change', drawStatisticalDistribution);
    
    document.getElementById('x-value').addEventListener('input', updateErrorPropagation);
    document.getElementById('y-value').addEventListener('input', updateErrorPropagation);
    document.getElementById('sigma-x').addEventListener('input', updateErrorPropagation);
    document.getElementById('sigma-y').addEventListener('input', updateErrorPropagation);
    document.getElementById('operation').addEventListener('change', updateErrorPropagation);
    
    document.getElementById('sample-mean').addEventListener('input', updateHypothesisTest);
    document.getElementById('sample-std-dev').addEventListener('input', updateHypothesisTest);
    document.getElementById('sample-size').addEventListener('input', updateHypothesisTest);
    document.getElementById('null-hypothesis').addEventListener('input', updateHypothesisTest);
    document.getElementById('alpha-level').addEventListener('input', updateHypothesisTest);
});

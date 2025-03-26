// Stellar Astrophysics Interactive Elements

// Main function to initialize all interactive elements when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initStellarFormationSimulator();
    initStellarStructureVisualizer();
    setupEventListeners();
});

// Set up event listeners for all interactive elements
function setupEventListeners() {
    // Stellar Formation Simulator event listeners
    document.getElementById('cloud-density').addEventListener('input', updateStellarFormationSimulation);
    document.getElementById('cloud-temperature').addEventListener('input', updateStellarFormationSimulation);
    document.getElementById('cloud-rotation').addEventListener('input', updateStellarFormationSimulation);
    document.getElementById('start-formation').addEventListener('click', startFormationSimulation);
    document.getElementById('reset-formation').addEventListener('click', resetFormationSimulation);
    
    // Stellar Structure Visualizer event listeners
    document.getElementById('star-mass').addEventListener('input', updateStellarStructureVisualization);
    document.getElementById('star-age').addEventListener('input', updateStellarStructureVisualization);
    document.getElementById('star-metallicity').addEventListener('input', updateStellarStructureVisualization);
    document.getElementById('structure-property').addEventListener('change', updateStellarStructureVisualization);
}

// ==================== Stellar Formation Simulator ====================

let formationSimulation = {
    running: false,
    timeStep: 0,
    maxTimeSteps: 100,
    canvas: null,
    ctx: null,
    cloudRadius: 100,
    cloudDensity: 1.0,
    cloudTemperature: 20,
    cloudRotation: 0.1,
    jeansRadius: 0,
    animationId: null
};

function initStellarFormationSimulator() {
    // Get the canvas and context
    formationSimulation.canvas = document.getElementById('formation-simulator-canvas');
    formationSimulation.ctx = formationSimulation.canvas.getContext('2d');
    
    // Initialize the simulation
    resetFormationSimulation();
    
    // Draw the initial state
    drawFormationSimulation();
}

function updateStellarFormationSimulation() {
    // Update simulation parameters based on slider values
    formationSimulation.cloudDensity = parseFloat(document.getElementById('cloud-density').value);
    formationSimulation.cloudTemperature = parseFloat(document.getElementById('cloud-temperature').value);
    formationSimulation.cloudRotation = parseFloat(document.getElementById('cloud-rotation').value);
    
    // Calculate Jeans radius based on temperature and density
    // This is a simplified calculation for visualization purposes
    formationSimulation.jeansRadius = Math.sqrt(formationSimulation.cloudTemperature / formationSimulation.cloudDensity) * 30;
    
    // Update the display
    document.getElementById('density-value').textContent = formationSimulation.cloudDensity.toFixed(1);
    document.getElementById('temperature-value').textContent = formationSimulation.cloudTemperature.toFixed(0) + ' K';
    document.getElementById('rotation-value').textContent = formationSimulation.cloudRotation.toFixed(2);
    
    // Redraw the simulation
    if (!formationSimulation.running) {
        drawFormationSimulation();
    }
}

function startFormationSimulation() {
    if (formationSimulation.running) return;
    
    formationSimulation.running = true;
    formationSimulation.timeStep = 0;
    document.getElementById('start-formation').disabled = true;
    document.getElementById('reset-formation').disabled = true;
    
    // Start the animation loop
    animateFormation();
}

function animateFormation() {
    formationSimulation.timeStep++;
    
    // Draw the current state
    drawFormationSimulation();
    
    // Check if simulation is complete
    if (formationSimulation.timeStep < formationSimulation.maxTimeSteps) {
        formationSimulation.animationId = requestAnimationFrame(animateFormation);
    } else {
        formationSimulation.running = false;
        document.getElementById('start-formation').disabled = false;
        document.getElementById('reset-formation').disabled = false;
    }
}

function resetFormationSimulation() {
    // Cancel any running animation
    if (formationSimulation.animationId) {
        cancelAnimationFrame(formationSimulation.animationId);
    }
    
    // Reset simulation parameters
    formationSimulation.running = false;
    formationSimulation.timeStep = 0;
    formationSimulation.cloudRadius = 100;
    formationSimulation.cloudDensity = 1.0;
    formationSimulation.cloudTemperature = 20;
    formationSimulation.cloudRotation = 0.1;
    
    // Reset UI elements
    document.getElementById('cloud-density').value = formationSimulation.cloudDensity;
    document.getElementById('cloud-temperature').value = formationSimulation.cloudTemperature;
    document.getElementById('cloud-rotation').value = formationSimulation.cloudRotation;
    document.getElementById('start-formation').disabled = false;
    document.getElementById('reset-formation').disabled = false;
    
    // Update display values
    updateStellarFormationSimulation();
    
    // Draw the initial state
    drawFormationSimulation();
}

function drawFormationSimulation() {
    const canvas = formationSimulation.canvas;
    const ctx = formationSimulation.ctx;
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Clear the canvas
    ctx.clearRect(0, 0, width, height);
    
    if (formationSimulation.running) {
        // Draw the collapsing cloud
        const progress = formationSimulation.timeStep / formationSimulation.maxTimeSteps;
        const currentRadius = formationSimulation.cloudRadius * (1 - 0.7 * progress);
        const diskRadius = formationSimulation.cloudRadius * 0.3 * progress * (1 + formationSimulation.cloudRotation * 5);
        const diskHeight = diskRadius * 0.2;
        
        // Draw the cloud (becoming smaller)
        const cloudOpacity = 1 - progress * 0.7;
        ctx.beginPath();
        ctx.arc(centerX, centerY, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 100, 255, ${cloudOpacity})`;
        ctx.fill();
        
        // Draw the forming accretion disk
        if (progress > 0.2) {
            // Draw the disk edge-on (ellipse)
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, diskRadius, diskHeight, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(150, 150, 255, ${progress})`;
            ctx.fill();
            
            // Draw the protostar in the center
            const protostarRadius = 5 + progress * 10;
            ctx.beginPath();
            ctx.arc(centerX, centerY, protostarRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 200, 100, ${progress})`;
            ctx.fill();
            
            // Draw bipolar outflows if rotation is significant
            if (formationSimulation.cloudRotation > 0.3 && progress > 0.5) {
                const outflowLength = diskRadius * 1.5 * (progress - 0.5) * 2;
                const outflowWidth = diskRadius * 0.2;
                
                ctx.beginPath();
                ctx.moveTo(centerX, centerY - diskHeight);
                ctx.lineTo(centerX - outflowWidth/2, centerY - diskHeight - outflowLength);
                ctx.lineTo(centerX + outflowWidth/2, centerY - diskHeight - outflowLength);
                ctx.closePath();
                ctx.fillStyle = `rgba(200, 100, 255, ${(progress - 0.5) * 2})`;
                ctx.fill();
                
                ctx.beginPath();
                ctx.moveTo(centerX, centerY + diskHeight);
                ctx.lineTo(centerX - outflowWidth/2, centerY + diskHeight + outflowLength);
                ctx.lineTo(centerX + outflowWidth/2, centerY + diskHeight + outflowLength);
                ctx.closePath();
                ctx.fillStyle = `rgba(200, 100, 255, ${(progress - 0.5) * 2})`;
                ctx.fill();
            }
        }
        
        // Draw simulation progress
        ctx.fillStyle = 'black';
        ctx.font = '14px Arial';
        ctx.fillText(`Simulation Progress: ${Math.round(progress * 100)}%`, 10, 20);
        
        // Draw current stage
        let stage = "Initial Collapse";
        if (progress > 0.7) stage = "Protostar Formation";
        else if (progress > 0.4) stage = "Disk Formation";
        else if (progress > 0.2) stage = "Core Formation";
        ctx.fillText(`Stage: ${stage}`, 10, 40);
    } else {
        // Draw the initial molecular cloud
        ctx.beginPath();
        ctx.arc(centerX, centerY, formationSimulation.cloudRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 100, 255, 0.5)';
        ctx.fill();
        
        // Draw the Jeans radius
        ctx.beginPath();
        ctx.arc(centerX, centerY, formationSimulation.jeansRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 0, 0, 0.7)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Add labels
        ctx.fillStyle = 'black';
        ctx.font = '14px Arial';
        ctx.fillText('Molecular Cloud', centerX - 60, centerY - formationSimulation.cloudRadius - 10);
        ctx.fillText('Jeans Radius', centerX - 50, centerY - formationSimulation.jeansRadius - 10);
        
        // Show stability status
        let stabilityStatus = "Stable (No Collapse)";
        if (formationSimulation.jeansRadius > formationSimulation.cloudRadius * 0.8) {
            stabilityStatus = "Unstable (Will Collapse)";
        }
        ctx.fillText(`Cloud Status: ${stabilityStatus}`, 10, 20);
        
        // Show instructions
        ctx.fillText("Adjust parameters and click 'Start Simulation' to begin", 10, height - 10);
    }
}

// ==================== Stellar Structure Visualizer ====================

let structureVisualization = {
    canvas: null,
    ctx: null,
    starMass: 1.0, // in solar masses
    starAge: 4.6, // in billion years
    starMetallicity: 0.02, // solar metallicity
    selectedProperty: 'temperature',
    centerX: 0,
    centerY: 0,
    radius: 0,
    layers: []
};

function initStellarStructureVisualizer() {
    // Get the canvas and context
    structureVisualization.canvas = document.getElementById('structure-visualizer-canvas');
    structureVisualization.ctx = structureVisualization.canvas.getContext('2d');
    
    // Set center and radius
    structureVisualization.centerX = structureVisualization.canvas.width / 2;
    structureVisualization.centerY = structureVisualization.canvas.height / 2;
    structureVisualization.radius = Math.min(structureVisualization.centerX, structureVisualization.centerY) - 20;
    
    // Initialize UI elements
    document.getElementById('star-mass').value = structureVisualization.starMass;
    document.getElementById('star-age').value = structureVisualization.starAge;
    document.getElementById('star-metallicity').value = structureVisualization.starMetallicity;
    document.getElementById('structure-property').value = structureVisualization.selectedProperty;
    
    // Update display values
    document.getElementById('mass-value').textContent = structureVisualization.starMass.toFixed(1) + ' M☉';
    document.getElementById('age-value').textContent = structureVisualization.starAge.toFixed(1) + ' Gyr';
    document.getElementById('metallicity-value').textContent = structureVisualization.starMetallicity.toFixed(3) + ' Z☉';
    
    // Generate initial structure data
    generateStellarStructure();
    
    // Draw the visualization
    drawStellarStructure();
}

function updateStellarStructureVisualization() {
    // Update parameters based on slider values
    structureVisualization.starMass = parseFloat(document.getElementById('star-mass').value);
    structureVisualization.starAge = parseFloat(document.getElementById('star-age').value);
    structureVisualization.starMetallicity = parseFloat(document.getElementById('star-metallicity').value);
    structureVisualization.selectedProperty = document.getElementById('structure-property').value;
    
    // Update display values
    document.getElementById('mass-value').textContent = structureVisualization.starMass.toFixed(1) + ' M☉';
    document.getElementById('age-value').textContent = structureVisualization.starAge.toFixed(1) + ' Gyr';
    document.getElementById('metallicity-value').textContent = structureVisualization.starMetallicity.toFixed(3) + ' Z☉';
    
    // Generate new structure data
    generateStellarStructure();
    
    // Redraw the visualization
    drawStellarStructure();
}

function generateStellarStructure() {
    // This function generates simplified stellar structure data based on the selected parameters
    // In a real application, this would use actual stellar models or interpolate between them
    
    const mass = structureVisualization.starMass;
    const age = structureVisualization.starAge;
    const metallicity = structureVisualization.starMetallicity;
    
    // Clear existing layers
    structureVisualization.layers = [];
    
    // Determine star type and structure based on mass and age
    let coreSize, radiativeZoneSize, convectiveZoneSize;
    let hasCoreConvection = false;
    let hasRadiativeZone = true;
    let hasConvectiveEnvelope = true;
    
    // Simplified stellar structure rules based on mass
    if (mass < 0.3) {
        // Fully convective star
        coreSize = 0.3;
        radiativeZoneSize = 0;
        convectiveZoneSize = 0.7;
        hasRadiativeZone = false;
        hasCoreConvection = true;
    } else if (mass < 1.1) {
        // Sun-like star
        coreSize = 0.25;
        radiativeZoneSize = 0.45;
        convectiveZoneSize = 0.3;
        hasCoreConvection = false;
    } else if (mass < 1.5) {
        // F-type star
        coreSize = 0.3;
        radiativeZoneSize = 0.6;
        convectiveZoneSize = 0.1;
        hasCoreConvection = false;
    } else {
        // Massive star
        coreSize = 0.35;
        radiativeZoneSize = 0.65;
        convectiveZoneSize = 0;
        hasConvectiveEnvelope = false;
        hasCoreConvection = true;
    }
    
    // Adjust for age effects (simplified)
    if (age > 8 && mass < 1.2) {
        // Older low-mass star - expanding core
        coreSize *= 1 + (age - 8) * 0.05;
        radiativeZoneSize -= (age - 8) * 0.02;
    }
    
    // Create the layers
    // Core
    structureVisualization.layers.push({
        name: hasCoreConvection ? "Convective Core" : "Radiative Core",
        radiusFraction: coreSize,
        temperature: 15e6 * Math.pow(mass, 2),
        density: 150 * Math.pow(mass, 2),
        pressure: 2e11 * Math.pow(mass, 2),
        luminosity: 0.9 * Math.pow(mass, 3.5),
        convective: hasCoreConvection
    });
    
    // Radiative zone (if present)
    if (hasRadiativeZone) {
        structureVisualization.layers.push({
            name: "Radiative Zone",
            radiusFraction: coreSize + radiativeZoneSize,
            temperature: 5e6 * Math.pow(mass, 1.5),
            density: 20 * mass,
            pressure: 5e10 * mass,
            luminosity: 0.95 * Math.pow(mass, 3.5),
            convective: false
        });
    }
    
    // Convective envelope (if present)
    if (hasConvectiveEnvelope) {
        structureVisualization.layers.push({
            name: "Convective Envelope",
            radiusFraction: 1.0,
            temperature: 5800 * Math.pow(mass, 0.5),
            density: 1e-3,
            pressure: 1e5,
            luminosity: Math.pow(mass, 3.5),
            convective: true
        });
    } else {
        // Radiative envelope for massive stars
        structureVisualization.layers.push({
            name: "Radiative Envelope",
            radiusFraction: 1.0,
            temperature: 10000 * Math.pow(mass, 0.5),
            density: 1e-4,
            pressure: 1e4,
            luminosity: Math.pow(mass, 3.5),
            convective: false
        });
    }
}

function drawStellarStructure() {
    const canvas = structureVisualization.canvas;
    const ctx = structureVisualization.ctx;
    const width = canvas.width;
    const height = canvas.height;
    const centerX = structureVisualization.centerX;
    const centerY = structureVisualization.centerY;
    const radius = structureVisualization.radius;
    
    // Clear the canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw the star layers from outside in
    for (let i = structureVisualization.layers.length - 1; i >= 0; i--) {
        const layer = structureVisualization.layers[i];
        const layerRadius = radius * layer.radiusFraction;
        
        // Choose color based on selected property
        let color;
        switch (structureVisualization.selectedProperty) {
            case 'temperature':
                // Temperature: blue (cool) to red (hot)
                const temp = Math.log10(layer.temperature) / 7; // Normalize
                color = getTemperatureColor(temp);
                break;
            case 'density':
                // Density: light (low) to dark (high)
                const density = Math.log10(layer.density + 1) / 3; // Normalize
                color = `rgb(${Math.floor(255 - density * 200)}, ${Math.floor(255 - density * 200)}, ${Math.floor(255 - density * 200)})`;
                break;
            case 'pressure':
                // Pressure: green gradient
                const pressure = Math.log10(layer.pressure) / 12; // Normalize
                color = `rgb(${Math.floor(100 + pressure * 155)}, ${Math.floor(200 + pressure * 55)}, 100)`;
                break;
            case 'convection':
                // Convection: blue for radiative, orange for convective
                color = layer.convective ? 'rgba(255, 165, 0, 0.8)' : 'rgba(100, 149, 237, 0.8)';
                break;
        }
        
        // Draw the layer
        ctx.beginPath();
        ctx.arc(centerX, centerY, layerRadius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Add pattern for convective layers if not already showing convection
        if (layer.convective && structureVisualization.selectedProperty !== 'convection') {
            drawConvectionPattern(ctx, centerX, centerY, layerRadius, i === 0 ? 0 : radius * structureVisualization.layers[i-1].radiusFraction);
        }
    }
    
    // Draw layer boundaries
    for (let i = 0; i < structureVisualization.layers.length - 1; i++) {
        const layerRadius = radius * structureVisualization.layers[i].radiusFraction;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, layerRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    // Draw labels for each layer
    for (let i = 0; i < structureVisualization.layers.length; i++) {
        const layer = structureVisualization.layers[i];
        const prevRadius = i === 0 ? 0 : radius * structureVisualization.layers[i-1].radiusFraction;
        const layerRadius = radius * layer.radiusFraction;
        const labelRadius = prevRadius + (layerRadius - prevRadius) / 2;
        const labelX = centerX + labelRadius * 0.7; // Offset to the right
        const labelY = centerY;
        
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.fillText(layer.name, labelX, labelY);
    }
    
    // Draw legend
    drawStructureLegend();
    
    // Draw star information
    ctx.fillStyle = 'black';
    ctx.font = '14px Arial';
    ctx.fillText(`Star Type: ${getStarType()}`, 10, 20);
    ctx.fillText(`Radius: ${getStarRadius().toFixed(2)} R☉`, 10, 40);
    ctx.fillText(`Luminosity: ${getStarLuminosity().toFixed(2)} L☉`, 10, 60);
    ctx.fillText(`Surface Temperature: ${getStarTemperature().toFixed(0)} K`, 10, 80);
}

function drawConvectionPattern(ctx, centerX, centerY, outerRadius, innerRadius) {
    // Draw a pattern suggesting convection
    const numArrows = 8;
    const arrowLength = (outerRadius - innerRadius) * 0.7;
    
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < numArrows; i++) {
        const angle = (i / numArrows) * Math.PI * 2;
        const midRadius = innerRadius + (outerRadius - innerRadius) / 2;
        const x1 = centerX + midRadius * Math.cos(angle);
        const y1 = centerY + midRadius * Math.sin(angle);
        
        // Draw curved arrows suggesting circulation
        ctx.beginPath();
        ctx.arc(centerX, centerY, midRadius, angle - 0.2, angle + 0.2);
        ctx.stroke();
    }
    
    ctx.restore();
}

function drawStructureLegend() {
    const ctx = structureVisualization.ctx;
    const width = structureVisualization.canvas.width;
    const height = structureVisualization.canvas.height;
    
    // Position the legend in the bottom right
    const legendX = width - 150;
    const legendY = height - 100;
    const legendWidth = 140;
    const legendHeight = 90;
    
    // Draw legend background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillRect(legendX, legendY, legendWidth, legendHeight);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(legendX, legendY, legendWidth, legendHeight);
    
    // Draw legend title
    ctx.fillStyle = 'black';
    ctx.font = 'bold 12px Arial';
    let title;
    switch (structureVisualization.selectedProperty) {
        case 'temperature': title = 'Temperature'; break;
        case 'density': title = 'Density'; break;
        case 'pressure': title = 'Pressure'; break;
        case 'convection': title = 'Energy Transport'; break;
    }
    ctx.fillText(title, legendX + 10, legendY + 15);
    
    // Draw legend content based on selected property
    if (structureVisualization.selectedProperty === 'convection') {
        // Convection legend
        ctx.fillStyle = 'rgba(100, 149, 237, 0.8)';
        ctx.fillRect(legendX + 10, legendY + 25, 20, 20);
        ctx.fillStyle = 'black';
        ctx.fillText('Radiative', legendX + 35, legendY + 40);
        
        ctx.fillStyle = 'rgba(255, 165, 0, 0.8)';
        ctx.fillRect(legendX + 10, legendY + 55, 20, 20);
        ctx.fillStyle = 'black';
        ctx.fillText('Convective', legendX + 35, legendY + 70);
    } else {
        // Gradient legend
        const gradientHeight = 60;
        const gradient = ctx.createLinearGradient(legendX + 10, legendY + 25, legendX + 10, legendY + 25 + gradientHeight);
        
        if (structureVisualization.selectedProperty === 'temperature') {
            // Temperature gradient: blue to red
            gradient.addColorStop(0, getTemperatureColor(1.0)); // Hot
            gradient.addColorStop(0.5, getTemperatureColor(0.5)); // Medium
            gradient.addColorStop(1, getTemperatureColor(0.0)); // Cool
            
            ctx.fillStyle = gradient;
            ctx.fillRect(legendX + 10, legendY + 25, 20, gradientHeight);
            
            ctx.fillStyle = 'black';
            ctx.fillText('Hot', legendX + 35, legendY + 35);
            ctx.fillText('Medium', legendX + 35, legendY + 55);
            ctx.fillText('Cool', legendX + 35, legendY + 75);
        } else if (structureVisualization.selectedProperty === 'density') {
            // Density gradient: light to dark
            gradient.addColorStop(0, 'rgb(55, 55, 55)'); // High
            gradient.addColorStop(1, 'rgb(255, 255, 255)'); // Low
            
            ctx.fillStyle = gradient;
            ctx.fillRect(legendX + 10, legendY + 25, 20, gradientHeight);
            
            ctx.fillStyle = 'black';
            ctx.fillText('High', legendX + 35, legendY + 35);
            ctx.fillText('Medium', legendX + 35, legendY + 55);
            ctx.fillText('Low', legendX + 35, legendY + 75);
        } else if (structureVisualization.selectedProperty === 'pressure') {
            // Pressure gradient: light green to dark green
            gradient.addColorStop(0, 'rgb(255, 255, 100)'); // High
            gradient.addColorStop(1, 'rgb(100, 200, 100)'); // Low
            
            ctx.fillStyle = gradient;
            ctx.fillRect(legendX + 10, legendY + 25, 20, gradientHeight);
            
            ctx.fillStyle = 'black';
            ctx.fillText('High', legendX + 35, legendY + 35);
            ctx.fillText('Medium', legendX + 35, legendY + 55);
            ctx.fillText('Low', legendX + 35, legendY + 75);
        }
    }
}

function getTemperatureColor(normalizedTemp) {
    // Convert normalized temperature (0-1) to RGB color
    // 0 = coolest (blue), 1 = hottest (red)
    const r = Math.floor(255 * Math.min(1, normalizedTemp * 2));
    const g = Math.floor(255 * Math.min(1, 2 - normalizedTemp * 2));
    const b = Math.floor(255 * Math.max(0, 1 - normalizedTemp * 2));
    return `rgb(${r}, ${g}, ${b})`;
}

function getStarType() {
    const mass = structureVisualization.starMass;
    const age = structureVisualization.starAge;
    
    // Simplified star type determination
    if (mass < 0.3) return "M Dwarf";
    if (mass < 0.8) return "K Dwarf";
    if (mass < 1.05) return "G Dwarf";
    if (mass < 1.4) return "F Dwarf";
    if (mass < 2.1) return "A Star";
    if (mass < 16) return "B Star";
    return "O Star";
}

function getStarRadius() {
    const mass = structureVisualization.starMass;
    const age = structureVisualization.starAge;
    
    // Simplified radius calculation
    let radius = Math.pow(mass, 0.8); // Main sequence approximation
    
    // Age effects
    if (age > 8 && mass < 1.2) {
        // Older low-mass star expanding
        radius *= 1 + (age - 8) * 0.2;
    }
    
    return radius;
}

function getStarLuminosity() {
    const mass = structureVisualization.starMass;
    // Simplified mass-luminosity relation
    return Math.pow(mass, 3.5);
}

function getStarTemperature() {
    const mass = structureVisualization.starMass;
    // Simplified temperature calculation
    if (mass < 0.7) return 4000 * Math.pow(mass, 0.5);
    if (mass < 2) return 5800 * Math.pow(mass, 0.5);
    return 10000 * Math.pow(mass, 0.5);
}

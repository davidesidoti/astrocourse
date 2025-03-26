// Computational Approaches Interactive Elements

// Global variables for computational approaches visualizations
let nbodyCanvas, nbodyCtx;
let fluidCanvas, fluidCtx;
let mcCanvas, mcCtx;

// Initialize the N-body simulation visualization
function initNBodySimulation() {
    // Create canvas for N-body simulation
    nbodyCanvas = document.createElement('canvas');
    nbodyCanvas.width = CANVAS_WIDTH;
    nbodyCanvas.height = CANVAS_HEIGHT;
    document.getElementById('nbody-visualization').appendChild(nbodyCanvas);
    nbodyCtx = nbodyCanvas.getContext('2d');
    
    // Initialize the simulation
    resetNBodySimulation();
}

// N-body simulation variables
let bodies = [];
let timeStep = 0.01;
let G = 1.0; // Gravitational constant in simulation units

// Reset the N-body simulation
function resetNBodySimulation() {
    // Clear the canvas
    nbodyCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Get parameters from UI
    const numBodies = parseInt(document.getElementById('num-bodies').value);
    const systemType = document.getElementById('system-type').value;
    
    // Initialize bodies based on system type
    bodies = [];
    
    if (systemType === 'random') {
        // Random distribution of bodies
        for (let i = 0; i < numBodies; i++) {
            bodies.push({
                x: Math.random() * CANVAS_WIDTH,
                y: Math.random() * CANVAS_HEIGHT,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                mass: Math.random() * 10 + 5,
                color: `hsl(${Math.random() * 360}, 70%, 50%)`
            });
        }
    } else if (systemType === 'binary') {
        // Binary star system
        bodies.push({
            x: CANVAS_WIDTH / 2 - 100,
            y: CANVAS_HEIGHT / 2,
            vx: 0,
            vy: -2,
            mass: 20,
            color: '#ff9900'
        });
        
        bodies.push({
            x: CANVAS_WIDTH / 2 + 100,
            y: CANVAS_HEIGHT / 2,
            vx: 0,
            vy: 2,
            mass: 20,
            color: '#3498db'
        });
        
        // Add some smaller bodies if requested
        for (let i = 2; i < numBodies; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 150 + 150;
            bodies.push({
                x: CANVAS_WIDTH / 2 + Math.cos(angle) * distance,
                y: CANVAS_HEIGHT / 2 + Math.sin(angle) * distance,
                vx: Math.sin(angle) * 3,
                vy: -Math.cos(angle) * 3,
                mass: Math.random() * 2 + 1,
                color: `hsl(${Math.random() * 360}, 70%, 50%)`
            });
        }
    } else if (systemType === 'solar') {
        // Simple solar system analog
        // Central star
        bodies.push({
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2,
            vx: 0,
            vy: 0,
            mass: 50,
            color: '#ff9900'
        });
        
        // Planets
        const planetColors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f'];
        for (let i = 1; i < Math.min(numBodies, 6); i++) {
            const distance = 50 + i * 30;
            const speed = 3 / Math.sqrt(distance);
            bodies.push({
                x: CANVAS_WIDTH / 2 + distance,
                y: CANVAS_HEIGHT / 2,
                vx: 0,
                vy: speed,
                mass: 2 + Math.random() * 3,
                color: planetColors[i-1]
            });
        }
        
        // Additional bodies if requested
        for (let i = 6; i < numBodies; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 200 + 50;
            const speed = 3 / Math.sqrt(distance);
            bodies.push({
                x: CANVAS_WIDTH / 2 + Math.cos(angle) * distance,
                y: CANVAS_HEIGHT / 2 + Math.sin(angle) * distance,
                vx: -Math.sin(angle) * speed,
                vy: Math.cos(angle) * speed,
                mass: Math.random() * 2 + 0.5,
                color: `hsl(${Math.random() * 360}, 70%, 50%)`
            });
        }
    }
    
    // Draw initial state
    drawNBodySystem();
}

// Update the N-body simulation for one time step
function updateNBodySimulation() {
    // Get integration method from UI
    const integrationMethod = document.getElementById('integration-method').value;
    
    if (integrationMethod === 'euler') {
        // Simple Euler integration
        updateNBodyEuler();
    } else if (integrationMethod === 'verlet') {
        // Velocity Verlet integration (more stable)
        updateNBodyVerlet();
    } else if (integrationMethod === 'rk4') {
        // 4th order Runge-Kutta (most accurate but complex)
        updateNBodyRK4();
    }
    
    // Draw the updated system
    drawNBodySystem();
}

// Euler integration method
function updateNBodyEuler() {
    // Calculate accelerations
    const accelerations = calculateAccelerations();
    
    // Update velocities and positions
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].vx += accelerations[i].ax * timeStep;
        bodies[i].vy += accelerations[i].ay * timeStep;
        bodies[i].x += bodies[i].vx * timeStep;
        bodies[i].y += bodies[i].vy * timeStep;
    }
}

// Velocity Verlet integration method
function updateNBodyVerlet() {
    // Calculate current accelerations
    const accelerations = calculateAccelerations();
    
    // Update positions and half-step velocities
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].x += bodies[i].vx * timeStep + 0.5 * accelerations[i].ax * timeStep * timeStep;
        bodies[i].y += bodies[i].vy * timeStep + 0.5 * accelerations[i].ay * timeStep * timeStep;
        bodies[i].vx += 0.5 * accelerations[i].ax * timeStep;
        bodies[i].vy += 0.5 * accelerations[i].ay * timeStep;
    }
    
    // Calculate new accelerations
    const newAccelerations = calculateAccelerations();
    
    // Complete velocity updates
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].vx += 0.5 * newAccelerations[i].ax * timeStep;
        bodies[i].vy += 0.5 * newAccelerations[i].ay * timeStep;
    }
}

// 4th order Runge-Kutta integration (simplified implementation)
function updateNBodyRK4() {
    // This is a simplified RK4 implementation
    // A full implementation would be more complex
    
    // Store original positions and velocities
    const original = bodies.map(body => ({
        x: body.x,
        y: body.y,
        vx: body.vx,
        vy: body.vy,
        mass: body.mass
    }));
    
    // k1 = f(y_n)
    const k1 = calculateAccelerations();
    
    // Move to half step with k1
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].x = original[i].x + original[i].vx * timeStep / 2;
        bodies[i].y = original[i].y + original[i].vy * timeStep / 2;
        bodies[i].vx = original[i].vx + k1[i].ax * timeStep / 2;
        bodies[i].vy = original[i].vy + k1[i].ay * timeStep / 2;
    }
    
    // k2 = f(y_n + h/2 * k1)
    const k2 = calculateAccelerations();
    
    // Move to half step with k2
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].x = original[i].x + original[i].vx * timeStep / 2;
        bodies[i].y = original[i].y + original[i].vy * timeStep / 2;
        bodies[i].vx = original[i].vx + k2[i].ax * timeStep / 2;
        bodies[i].vy = original[i].vy + k2[i].ay * timeStep / 2;
    }
    
    // k3 = f(y_n + h/2 * k2)
    const k3 = calculateAccelerations();
    
    // Move to full step with k3
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].x = original[i].x + original[i].vx * timeStep;
        bodies[i].y = original[i].y + original[i].vy * timeStep;
        bodies[i].vx = original[i].vx + k3[i].ax * timeStep;
        bodies[i].vy = original[i].vy + k3[i].ay * timeStep;
    }
    
    // k4 = f(y_n + h * k3)
    const k4 = calculateAccelerations();
    
    // Combine all steps for final update
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].x = original[i].x + timeStep * (original[i].vx + 
                      (k1[i].ax + 2*k2[i].ax + 2*k3[i].ax + k4[i].ax) * timeStep / 6);
        bodies[i].y = original[i].y + timeStep * (original[i].vy + 
                      (k1[i].ay + 2*k2[i].ay + 2*k3[i].ay + k4[i].ay) * timeStep / 6);
        bodies[i].vx = original[i].vx + 
                      (k1[i].ax + 2*k2[i].ax + 2*k3[i].ax + k4[i].ax) * timeStep / 6;
        bodies[i].vy = original[i].vy + 
                      (k1[i].ay + 2*k2[i].ay + 2*k3[i].ay + k4[i].ay) * timeStep / 6;
    }
}

// Calculate accelerations for all bodies
function calculateAccelerations() {
    const accelerations = [];
    
    // Initialize accelerations to zero
    for (let i = 0; i < bodies.length; i++) {
        accelerations.push({ ax: 0, ay: 0 });
    }
    
    // Calculate gravitational forces between all pairs
    for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
            const dx = bodies[j].x - bodies[i].x;
            const dy = bodies[j].y - bodies[i].y;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);
            
            // Add small softening to prevent division by zero
            const softening = 10;
            const force = G * bodies[i].mass * bodies[j].mass / (distSq + softening);
            
            // Components of force
            const fx = force * dx / dist;
            const fy = force * dy / dist;
            
            // Apply to accelerations (F = ma, so a = F/m)
            accelerations[i].ax += fx / bodies[i].mass;
            accelerations[i].ay += fy / bodies[i].mass;
            accelerations[j].ax -= fx / bodies[j].mass;
            accelerations[j].ay -= fy / bodies[j].mass;
        }
    }
    
    return accelerations;
}

// Draw the N-body system
function drawNBodySystem() {
    // Clear the canvas
    nbodyCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Draw grid and axes
    drawGrid(nbodyCtx);
    
    // Draw each body
    for (let i = 0; i < bodies.length; i++) {
        nbodyCtx.beginPath();
        const radius = Math.sqrt(bodies[i].mass) * 2;
        nbodyCtx.arc(bodies[i].x, bodies[i].y, radius, 0, Math.PI * 2);
        nbodyCtx.fillStyle = bodies[i].color;
        nbodyCtx.fill();
    }
    
    // Draw trails if enabled
    if (document.getElementById('show-trails').checked) {
        drawTrails();
    }
    
    // Update energy display
    updateEnergyDisplay();
}

// Body trails for visualization
let trails = [];

// Draw trails behind bodies
function drawTrails() {
    // Add current positions to trails
    const positions = bodies.map(body => ({ x: body.x, y: body.y, color: body.color }));
    trails.push(positions);
    
    // Limit trail length
    const maxTrailLength = 50;
    if (trails.length > maxTrailLength) {
        trails.shift();
    }
    
    // Draw trails
    for (let t = 0; t < trails.length; t++) {
        const alpha = t / trails.length;
        for (let i = 0; i < trails[t].length; i++) {
            nbodyCtx.beginPath();
            nbodyCtx.arc(trails[t][i].x, trails[t][i].y, 1, 0, Math.PI * 2);
            nbodyCtx.fillStyle = trails[t][i].color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
            nbodyCtx.fill();
        }
    }
}

// Calculate and update energy display
function updateEnergyDisplay() {
    // Calculate kinetic energy
    let kineticEnergy = 0;
    for (let i = 0; i < bodies.length; i++) {
        const v2 = bodies[i].vx * bodies[i].vx + bodies[i].vy * bodies[i].vy;
        kineticEnergy += 0.5 * bodies[i].mass * v2;
    }
    
    // Calculate potential energy
    let potentialEnergy = 0;
    for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
            const dx = bodies[j].x - bodies[i].x;
            const dy = bodies[j].y - bodies[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            potentialEnergy -= G * bodies[i].mass * bodies[j].mass / dist;
        }
    }
    
    // Calculate total energy
    const totalEnergy = kineticEnergy + potentialEnergy;
    
    // Update display
    document.getElementById('kinetic-energy').textContent = kineticEnergy.toFixed(2);
    document.getElementById('potential-energy').textContent = potentialEnergy.toFixed(2);
    document.getElementById('total-energy').textContent = totalEnergy.toFixed(2);
}

// Initialize the fluid dynamics simulation
function initFluidSimulation() {
    // Create canvas for fluid simulation
    fluidCanvas = document.createElement('canvas');
    fluidCanvas.width = CANVAS_WIDTH;
    fluidCanvas.height = CANVAS_HEIGHT;
    document.getElementById('fluid-visualization').appendChild(fluidCanvas);
    fluidCtx = fluidCanvas.getContext('2d');
    
    // Initialize the simulation
    resetFluidSimulation();
}

// Fluid simulation variables
let fluidGrid = [];
let fluidGridSize = 100;
let fluidCellSize;

// Reset the fluid simulation
function resetFluidSimulation() {
    // Clear the canvas
    fluidCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Calculate cell size
    fluidCellSize = CANVAS_WIDTH / fluidGridSize;
    
    // Get simulation type from UI
    const simulationType = document.getElementById('fluid-type').value;
    
    // Initialize fluid grid
    fluidGrid = [];
    for (let i = 0; i < fluidGridSize; i++) {
        fluidGrid[i] = [];
        for (let j = 0; j < fluidGridSize; j++) {
            fluidGrid[i][j] = {
                density: 0,
                velocityX: 0,
                velocityY: 0,
                pressure: 0,
                temperature: 0
            };
        }
    }
    
    // Set up initial conditions based on simulation type
    if (simulationType === 'shock') {
        // Shock tube problem
        for (let i = 0; i < fluidGridSize; i++) {
            for (let j = 0; j < fluidGridSize; j++) {
                if (i < fluidGridSize / 2) {
                    fluidGrid[i][j].density = 1.0;
                    fluidGrid[i][j].pressure = 1.0;
                } else {
                    fluidGrid[i][j].density = 0.125;
                    fluidGrid[i][j].pressure = 0.1;
                }
                fluidGrid[i][j].temperature = fluidGrid[i][j].pressure / fluidGrid[i][j].density;
            }
        }
    } else if (simulationType === 'vortex') {
        // Vortex simulation
        const centerX = fluidGridSize / 2;
        const centerY = fluidGridSize / 2;
        const radius = fluidGridSize / 5;
        
        for (let i = 0; i < fluidGridSize; i++) {
            for (let j = 0; j < fluidGridSize; j++) {
                const dx = i - centerX;
                const dy = j - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                fluidGrid[i][j].density = 1.0;
                fluidGrid[i][j].pressure = 1.0;
                fluidGrid[i][j].temperature = 1.0;
                
                if (dist < radius) {
                    // Create a vortex
                    const strength = (radius - dist) / radius;
                    fluidGrid[i][j].velocityX = -dy * strength / 10;
                    fluidGrid[i][j].velocityY = dx * strength / 10;
                }
            }
        }
    } else if (simulationType === 'explosion') {
        // Explosion simulation
        const centerX = fluidGridSize / 2;
        const centerY = fluidGridSize / 2;
        const radius = fluidGridSize / 10;
        
        for (let i = 0; i < fluidGridSize; i++) {
            for (let j = 0; j < fluidGridSize; j++) {
                const dx = i - centerX;
                const dy = j - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                fluidGrid[i][j].density = 1.0;
                fluidGrid[i][j].pressure = 1.0;
                
                if (dist < radius) {
                    // Create high pressure region
                    fluidGrid[i][j].pressure = 10.0;
                    fluidGrid[i][j].temperature = 10.0;
                } else {
                    fluidGrid[i][j].temperature = 1.0;
                }
            }
        }
    }
    
    // Draw initial state
    drawFluidSimulation();
}

// Update the fluid simulation for one time step
function updateFluidSimulation() {
    // Get simulation method from UI
    const simulationMethod = document.getElementById('fluid-method').value;
    
    // This is a simplified fluid simulation
    // A real CFD simulation would be much more complex
    
    // Create a copy of the current grid
    const oldGrid = JSON.parse(JSON.stringify(fluidGrid));
    
    // Simple advection scheme
    for (let i = 1; i < fluidGridSize - 1; i++) {
        for (let j = 1; j < fluidGridSize - 1; j++) {
            // Calculate pressure gradient
            const pressureGradX = (oldGrid[i+1][j].pressure - oldGrid[i-1][j].pressure) / 2;
            const pressureGradY = (oldGrid[i][j+1].pressure - oldGrid[i][j-1].pressure) / 2;
            
            // Update velocities based on pressure gradient
            fluidGrid[i][j].velocityX -= pressureGradX * 0.01;
            fluidGrid[i][j].velocityY -= pressureGradY * 0.01;
            
            // Advect density
            const x = i - fluidGrid[i][j].velocityX;
            const y = j - fluidGrid[i][j].velocityY;
            
            // Bilinear interpolation for smoother advection
            const x0 = Math.floor(x);
            const y0 = Math.floor(y);
            const x1 = x0 + 1;
            const y1 = y0 + 1;
            
            if (x0 >= 0 && x1 < fluidGridSize && y0 >= 0 && y1 < fluidGridSize) {
                const sx = x - x0;
                const sy = y - y0;
                
                const q00 = oldGrid[x0][y0].density;
                const q10 = oldGrid[x1][y0].density;
                const q01 = oldGrid[x0][y1].density;
                const q11 = oldGrid[x1][y1].density;
                
                fluidGrid[i][j].density = (1-sx)*(1-sy)*q00 + sx*(1-sy)*q10 + (1-sx)*sy*q01 + sx*sy*q11;
                
                // Also advect temperature
                const t00 = oldGrid[x0][y0].temperature;
                const t10 = oldGrid[x1][y0].temperature;
                const t01 = oldGrid[x0][y1].temperature;
                const t11 = oldGrid[x1][y1].temperature;
                
                fluidGrid[i][j].temperature = (1-sx)*(1-sy)*t00 + sx*(1-sy)*t10 + (1-sx)*sy*t01 + sx*sy*t11;
            }
            
            // Update pressure based on equation of state (ideal gas law)
            fluidGrid[i][j].pressure = fluidGrid[i][j].density * fluidGrid[i][j].temperature;
        }
    }
    
    // Apply diffusion if selected
    if (simulationMethod === 'diffusion' || simulationMethod === 'full') {
        applyDiffusion();
    }
    
    // Apply viscosity if selected
    if (simulationMethod === 'viscosity' || simulationMethod === 'full') {
        applyViscosity();
    }
    
    // Apply boundary conditions
    applyBoundaryConditions();
    
    // Draw the updated simulation
    drawFluidSimulation();
}

// Apply diffusion to the fluid
function applyDiffusion() {
    const diffusionRate = 0.1;
    const oldGrid = JSON.parse(JSON.stringify(fluidGrid));
    
    for (let i = 1; i < fluidGridSize - 1; i++) {
        for (let j = 1; j < fluidGridSize - 1; j++) {
            // Diffuse density
            fluidGrid[i][j].density += diffusionRate * (
                oldGrid[i+1][j].density + oldGrid[i-1][j].density +
                oldGrid[i][j+1].density + oldGrid[i][j-1].density -
                4 * oldGrid[i][j].density
            );
            
            // Diffuse temperature
            fluidGrid[i][j].temperature += diffusionRate * (
                oldGrid[i+1][j].temperature + oldGrid[i-1][j].temperature +
                oldGrid[i][j+1].temperature + oldGrid[i][j-1].temperature -
                4 * oldGrid[i][j].temperature
            );
        }
    }
}

// Apply viscosity to the fluid
function applyViscosity() {
    const viscosity = 0.1;
    const oldGrid = JSON.parse(JSON.stringify(fluidGrid));
    
    for (let i = 1; i < fluidGridSize - 1; i++) {
        for (let j = 1; j < fluidGridSize - 1; j++) {
            // Apply viscosity to velocity
            fluidGrid[i][j].velocityX += viscosity * (
                oldGrid[i+1][j].velocityX + oldGrid[i-1][j].velocityX +
                oldGrid[i][j+1].velocityX + oldGrid[i][j-1].velocityX -
                4 * oldGrid[i][j].velocityX
            );
            
            fluidGrid[i][j].velocityY += viscosity * (
                oldGrid[i+1][j].velocityY + oldGrid[i-1][j].velocityY +
                oldGrid[i][j+1].velocityY + oldGrid[i][j-1].velocityY -
                4 * oldGrid[i][j].velocityY
            );
        }
    }
}

// Apply boundary conditions to the fluid
function applyBoundaryConditions() {
    // Reflective boundaries
    for (let i = 0; i < fluidGridSize; i++) {
        // Top and bottom boundaries
        fluidGrid[i][0] = { ...fluidGrid[i][1] };
        fluidGrid[i][0].velocityY = -fluidGrid[i][1].velocityY;
        
        fluidGrid[i][fluidGridSize-1] = { ...fluidGrid[i][fluidGridSize-2] };
        fluidGrid[i][fluidGridSize-1].velocityY = -fluidGrid[i][fluidGridSize-2].velocityY;
    }
    
    for (let j = 0; j < fluidGridSize; j++) {
        // Left and right boundaries
        fluidGrid[0][j] = { ...fluidGrid[1][j] };
        fluidGrid[0][j].velocityX = -fluidGrid[1][j].velocityX;
        
        fluidGrid[fluidGridSize-1][j] = { ...fluidGrid[fluidGridSize-2][j] };
        fluidGrid[fluidGridSize-1][j].velocityX = -fluidGrid[fluidGridSize-2][j].velocityX;
    }
}

// Draw the fluid simulation
function drawFluidSimulation() {
    // Clear the canvas
    fluidCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Get visualization type from UI
    const visualizationType = document.getElementById('visualization-type').value;
    
    // Draw the fluid grid
    for (let i = 0; i < fluidGridSize; i++) {
        for (let j = 0; j < fluidGridSize; j++) {
            const x = i * fluidCellSize;
            const y = j * fluidCellSize;
            
            let value, minVal, maxVal, color;
            
            // Determine what to visualize
            if (visualizationType === 'density') {
                value = fluidGrid[i][j].density;
                minVal = 0;
                maxVal = 2;
                
                // Create color based on density
                const normalizedValue = Math.max(0, Math.min(1, (value - minVal) / (maxVal - minVal)));
                color = `rgb(${Math.floor(normalizedValue * 255)}, ${Math.floor(normalizedValue * 255)}, 255)`;
            } else if (visualizationType === 'pressure') {
                value = fluidGrid[i][j].pressure;
                minVal = 0;
                maxVal = 10;
                
                // Create color based on pressure
                const normalizedValue = Math.max(0, Math.min(1, (value - minVal) / (maxVal - minVal)));
                color = `rgb(255, ${Math.floor((1 - normalizedValue) * 255)}, ${Math.floor((1 - normalizedValue) * 255)})`;
            } else if (visualizationType === 'temperature') {
                value = fluidGrid[i][j].temperature;
                minVal = 0;
                maxVal = 10;
                
                // Create color based on temperature (blue to red)
                const normalizedValue = Math.max(0, Math.min(1, (value - minVal) / (maxVal - minVal)));
                color = `rgb(${Math.floor(normalizedValue * 255)}, ${Math.floor((1 - normalizedValue) * 100)}, ${Math.floor((1 - normalizedValue) * 255)})`;
            } else if (visualizationType === 'velocity') {
                // Calculate velocity magnitude
                value = Math.sqrt(
                    fluidGrid[i][j].velocityX * fluidGrid[i][j].velocityX + 
                    fluidGrid[i][j].velocityY * fluidGrid[i][j].velocityY
                );
                minVal = 0;
                maxVal = 0.5;
                
                // Create color based on velocity
                const normalizedValue = Math.max(0, Math.min(1, (value - minVal) / (maxVal - minVal)));
                color = `rgb(${Math.floor((1 - normalizedValue) * 255)}, ${Math.floor(normalizedValue * 255)}, 0)`;
            }
            
            // Draw the cell
            fluidCtx.fillStyle = color;
            fluidCtx.fillRect(x, y, fluidCellSize, fluidCellSize);
        }
    }
    
    // Draw velocity vectors if enabled
    if (document.getElementById('show-vectors').checked) {
        drawVelocityVectors();
    }
}

// Draw velocity vectors for the fluid
function drawVelocityVectors() {
    fluidCtx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    fluidCtx.lineWidth = 1;
    
    // Draw vectors at regular intervals
    const vectorSpacing = 5;
    for (let i = 0; i < fluidGridSize; i += vectorSpacing) {
        for (let j = 0; j < fluidGridSize; j += vectorSpacing) {
            const x = (i + 0.5) * fluidCellSize;
            const y = (j + 0.5) * fluidCellSize;
            
            const vx = fluidGrid[i][j].velocityX * 20;
            const vy = fluidGrid[i][j].velocityY * 20;
            
            // Only draw vectors with significant magnitude
            if (vx * vx + vy * vy > 0.01) {
                fluidCtx.beginPath();
                fluidCtx.moveTo(x, y);
                fluidCtx.lineTo(x + vx, y + vy);
                fluidCtx.stroke();
                
                // Draw arrowhead
                const angle = Math.atan2(vy, vx);
                fluidCtx.beginPath();
                fluidCtx.moveTo(x + vx, y + vy);
                fluidCtx.lineTo(x + vx - 3 * Math.cos(angle - Math.PI/6), y + vy - 3 * Math.sin(angle - Math.PI/6));
                fluidCtx.lineTo(x + vx - 3 * Math.cos(angle + Math.PI/6), y + vy - 3 * Math.sin(angle + Math.PI/6));
                fluidCtx.closePath();
                fluidCtx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                fluidCtx.fill();
            }
        }
    }
}

// Initialize the Monte Carlo simulation
function initMonteCarloSimulation() {
    // Create canvas for Monte Carlo simulation
    mcCanvas = document.createElement('canvas');
    mcCanvas.width = CANVAS_WIDTH;
    mcCanvas.height = CANVAS_HEIGHT;
    document.getElementById('mc-visualization').appendChild(mcCanvas);
    mcCtx = mcCanvas.getContext('2d');
    
    // Initialize the simulation
    resetMonteCarloSimulation();
}

// Monte Carlo simulation variables
let mcParticles = [];
let mcObstacles = [];
let mcRunning = false;
let mcStats = {
    totalParticles: 0,
    escaped: 0,
    absorbed: 0,
    avgScatters: 0
};

// Reset the Monte Carlo simulation
function resetMonteCarloSimulation() {
    // Clear the canvas
    mcCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Reset particles and statistics
    mcParticles = [];
    mcStats = {
        totalParticles: 0,
        escaped: 0,
        absorbed: 0,
        avgScatters: 0,
        totalScatters: 0
    };
    
    // Get simulation type from UI
    const simulationType = document.getElementById('mc-type').value;
    
    // Set up obstacles based on simulation type
    mcObstacles = [];
    
    if (simulationType === 'cloud') {
        // Spherical cloud
        mcObstacles.push({
            type: 'sphere',
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2,
            radius: 150,
            opacity: parseFloat(document.getElementById('optical-depth').value)
        });
    } else if (simulationType === 'maze') {
        // Maze-like structure
        // Outer boundary
        mcObstacles.push({
            type: 'rectangle',
            x: 50,
            y: 50,
            width: CANVAS_WIDTH - 100,
            height: CANVAS_HEIGHT - 100,
            opacity: 10
        });
        
        // Inner walls
        mcObstacles.push({
            type: 'rectangle',
            x: 150,
            y: 50,
            width: 20,
            height: 200,
            opacity: 10
        });
        
        mcObstacles.push({
            type: 'rectangle',
            x: 150,
            y: 350,
            width: 20,
            height: 100,
            opacity: 10
        });
        
        mcObstacles.push({
            type: 'rectangle',
            x: 300,
            y: 150,
            width: 20,
            height: 200,
            opacity: 10
        });
        
        mcObstacles.push({
            type: 'rectangle',
            x: 450,
            y: 50,
            width: 20,
            height: 200,
            opacity: 10
        });
        
        mcObstacles.push({
            type: 'rectangle',
            x: 450,
            y: 350,
            width: 20,
            height: 100,
            opacity: 10
        });
        
        mcObstacles.push({
            type: 'rectangle',
            x: 600,
            y: 150,
            width: 20,
            height: 200,
            opacity: 10
        });
    } else if (simulationType === 'custom') {
        // Allow user to draw obstacles
        mcCtx.fillStyle = 'rgba(200, 200, 200, 0.5)';
        mcCtx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        
        mcCtx.font = '20px Arial';
        mcCtx.fillStyle = 'black';
        mcCtx.textAlign = 'center';
        mcCtx.fillText('Click and drag to draw obstacles', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
        
        // Add event listeners for drawing
        mcCanvas.addEventListener('mousedown', startDrawing);
        mcCanvas.addEventListener('mousemove', continueDrawing);
        mcCanvas.addEventListener('mouseup', stopDrawing);
        
        return; // Don't draw anything else yet
    }
    
    // Draw the initial state
    drawMonteCarloSimulation();
}

// Variables for custom drawing
let isDrawing = false;
let currentObstacle = null;

// Start drawing an obstacle
function startDrawing(e) {
    isDrawing = true;
    
    const rect = mcCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    currentObstacle = {
        type: 'rectangle',
        x: x,
        y: y,
        width: 0,
        height: 0,
        opacity: parseFloat(document.getElementById('optical-depth').value)
    };
    
    mcObstacles.push(currentObstacle);
}

// Continue drawing the obstacle
function continueDrawing(e) {
    if (!isDrawing) return;
    
    const rect = mcCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    currentObstacle.width = x - currentObstacle.x;
    currentObstacle.height = y - currentObstacle.y;
    
    // Redraw
    drawMonteCarloSimulation();
}

// Stop drawing the obstacle
function stopDrawing() {
    isDrawing = false;
    currentObstacle = null;
    
    // Remove event listeners
    mcCanvas.removeEventListener('mousedown', startDrawing);
    mcCanvas.removeEventListener('mousemove', continueDrawing);
    mcCanvas.removeEventListener('mouseup', stopDrawing);
}

// Start the Monte Carlo simulation
function startMonteCarloSimulation() {
    if (mcRunning) return;
    
    mcRunning = true;
    runMonteCarloStep();
}

// Stop the Monte Carlo simulation
function stopMonteCarloSimulation() {
    mcRunning = false;
}

// Run one step of the Monte Carlo simulation
function runMonteCarloStep() {
    if (!mcRunning) return;
    
    // Add new particles
    const batchSize = parseInt(document.getElementById('batch-size').value);
    addMCParticles(batchSize);
    
    // Update existing particles
    updateMCParticles();
    
    // Draw the simulation
    drawMonteCarloSimulation();
    
    // Update statistics
    updateMCStatistics();
    
    // Continue simulation
    requestAnimationFrame(runMonteCarloStep);
}

// Add new particles to the simulation
function addMCParticles(count) {
    const sourceType = document.getElementById('source-type').value;
    
    for (let i = 0; i < count; i++) {
        let particle;
        
        if (sourceType === 'point') {
            // Point source at center
            particle = {
                x: CANVAS_WIDTH / 2,
                y: CANVAS_HEIGHT / 2,
                angle: Math.random() * Math.PI * 2,
                speed: 2,
                scatters: 0,
                active: true,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`
            };
        } else if (sourceType === 'beam') {
            // Beam from left
            particle = {
                x: 10,
                y: CANVAS_HEIGHT / 2 + (Math.random() - 0.5) * 100,
                angle: 0,
                speed: 2,
                scatters: 0,
                active: true,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`
            };
        } else if (sourceType === 'random') {
            // Random positions along the boundary
            const side = Math.floor(Math.random() * 4);
            let x, y, angle;
            
            switch (side) {
                case 0: // Top
                    x = Math.random() * CANVAS_WIDTH;
                    y = 10;
                    angle = Math.PI / 2;
                    break;
                case 1: // Right
                    x = CANVAS_WIDTH - 10;
                    y = Math.random() * CANVAS_HEIGHT;
                    angle = Math.PI;
                    break;
                case 2: // Bottom
                    x = Math.random() * CANVAS_WIDTH;
                    y = CANVAS_HEIGHT - 10;
                    angle = -Math.PI / 2;
                    break;
                case 3: // Left
                    x = 10;
                    y = Math.random() * CANVAS_HEIGHT;
                    angle = 0;
                    break;
            }
            
            particle = {
                x: x,
                y: y,
                angle: angle,
                speed: 2,
                scatters: 0,
                active: true,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`
            };
        }
        
        mcParticles.push(particle);
        mcStats.totalParticles++;
    }
}

// Update all particles in the simulation
function updateMCParticles() {
    for (let i = 0; i < mcParticles.length; i++) {
        if (!mcParticles[i].active) continue;
        
        // Move the particle
        mcParticles[i].x += Math.cos(mcParticles[i].angle) * mcParticles[i].speed;
        mcParticles[i].y += Math.sin(mcParticles[i].angle) * mcParticles[i].speed;
        
        // Check if particle has escaped
        if (mcParticles[i].x < 0 || mcParticles[i].x > CANVAS_WIDTH || 
            mcParticles[i].y < 0 || mcParticles[i].y > CANVAS_HEIGHT) {
            mcParticles[i].active = false;
            mcStats.escaped++;
            mcStats.totalScatters += mcParticles[i].scatters;
            continue;
        }
        
        // Check for interactions with obstacles
        for (let j = 0; j < mcObstacles.length; j++) {
            if (isParticleInObstacle(mcParticles[i], mcObstacles[j])) {
                // Determine if particle is scattered or absorbed
                const scatterProbability = Math.exp(-mcObstacles[j].opacity);
                
                if (Math.random() > scatterProbability) {
                    // Particle is absorbed
                    mcParticles[i].active = false;
                    mcStats.absorbed++;
                    mcStats.totalScatters += mcParticles[i].scatters;
                    break;
                } else {
                    // Particle is scattered
                    mcParticles[i].angle = Math.random() * Math.PI * 2;
                    mcParticles[i].scatters++;
                }
            }
        }
    }
}

// Check if a particle is inside an obstacle
function isParticleInObstacle(particle, obstacle) {
    if (obstacle.type === 'sphere') {
        const dx = particle.x - obstacle.x;
        const dy = particle.y - obstacle.y;
        const distSq = dx * dx + dy * dy;
        return distSq <= obstacle.radius * obstacle.radius;
    } else if (obstacle.type === 'rectangle') {
        return particle.x >= obstacle.x && 
               particle.x <= obstacle.x + obstacle.width &&
               particle.y >= obstacle.y && 
               particle.y <= obstacle.y + obstacle.height;
    }
    return false;
}

// Update Monte Carlo statistics display
function updateMCStatistics() {
    if (mcStats.totalParticles === 0) return;
    
    // Calculate average scatters
    if (mcStats.escaped + mcStats.absorbed > 0) {
        mcStats.avgScatters = mcStats.totalScatters / (mcStats.escaped + mcStats.absorbed);
    }
    
    // Update display
    document.getElementById('total-particles').textContent = mcStats.totalParticles;
    document.getElementById('escaped-particles').textContent = mcStats.escaped;
    document.getElementById('absorbed-particles').textContent = mcStats.absorbed;
    document.getElementById('escape-probability').textContent = 
        ((mcStats.escaped / (mcStats.escaped + mcStats.absorbed)) * 100).toFixed(2) + '%';
    document.getElementById('avg-scatters').textContent = mcStats.avgScatters.toFixed(2);
}

// Draw the Monte Carlo simulation
function drawMonteCarloSimulation() {
    // Clear the canvas
    mcCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Draw grid
    drawGrid(mcCtx);
    
    // Draw obstacles
    for (let i = 0; i < mcObstacles.length; i++) {
        if (mcObstacles[i].type === 'sphere') {
            mcCtx.beginPath();
            mcCtx.arc(mcObstacles[i].x, mcObstacles[i].y, mcObstacles[i].radius, 0, Math.PI * 2);
            mcCtx.fillStyle = `rgba(100, 100, 100, ${Math.min(1, mcObstacles[i].opacity / 10)})`;
            mcCtx.fill();
            mcCtx.strokeStyle = 'black';
            mcCtx.stroke();
        } else if (mcObstacles[i].type === 'rectangle') {
            mcCtx.fillStyle = `rgba(100, 100, 100, ${Math.min(1, mcObstacles[i].opacity / 10)})`;
            mcCtx.fillRect(
                mcObstacles[i].x, 
                mcObstacles[i].y, 
                mcObstacles[i].width, 
                mcObstacles[i].height
            );
            mcCtx.strokeStyle = 'black';
            mcCtx.strokeRect(
                mcObstacles[i].x, 
                mcObstacles[i].y, 
                mcObstacles[i].width, 
                mcObstacles[i].height
            );
        }
    }
    
    // Draw particles
    for (let i = 0; i < mcParticles.length; i++) {
        if (!mcParticles[i].active) continue;
        
        mcCtx.beginPath();
        mcCtx.arc(mcParticles[i].x, mcParticles[i].y, 2, 0, Math.PI * 2);
        mcCtx.fillStyle = mcParticles[i].color;
        mcCtx.fill();
        
        // Draw direction line
        if (document.getElementById('show-paths').checked) {
            mcCtx.beginPath();
            mcCtx.moveTo(mcParticles[i].x, mcParticles[i].y);
            mcCtx.lineTo(
                mcParticles[i].x + Math.cos(mcParticles[i].angle) * 10,
                mcParticles[i].y + Math.sin(mcParticles[i].angle) * 10
            );
            mcCtx.strokeStyle = mcParticles[i].color;
            mcCtx.stroke();
        }
    }
}

// Add these functions to the initialization
document.addEventListener('DOMContentLoaded', function() {
    // Existing setup code...
    
    // Initialize computational approaches interactive elements
    initNBodySimulation();
    initFluidSimulation();
    initMonteCarloSimulation();
    
    // Add event listeners for computational approaches controls
    document.getElementById('num-bodies').addEventListener('input', resetNBodySimulation);
    document.getElementById('system-type').addEventListener('change', resetNBodySimulation);
    document.getElementById('integration-method').addEventListener('change', function() {
        // Just update the display, don't reset
    });
    document.getElementById('show-trails').addEventListener('change', drawNBodySystem);
    document.getElementById('step-nbody').addEventListener('click', updateNBodySimulation);
    document.getElementById('reset-nbody').addEventListener('click', resetNBodySimulation);
    
    document.getElementById('fluid-type').addEventListener('change', resetFluidSimulation);
    document.getElementById('fluid-method').addEventListener('change', function() {
        // Just update the display, don't reset
    });
    document.getElementById('visualization-type').addEventListener('change', drawFluidSimulation);
    document.getElementById('show-vectors').addEventListener('change', drawFluidSimulation);
    document.getElementById('step-fluid').addEventListener('click', updateFluidSimulation);
    document.getElementById('reset-fluid').addEventListener('click', resetFluidSimulation);
    
    document.getElementById('mc-type').addEventListener('change', resetMonteCarloSimulation);
    document.getElementById('source-type').addEventListener('change', function() {
        // Just update the display, don't reset
    });
    document.getElementById('optical-depth').addEventListener('input', resetMonteCarloSimulation);
    document.getElementById('batch-size').addEventListener('input', function() {
        // Just update the display, don't reset
    });
    document.getElementById('show-paths').addEventListener('change', drawMonteCarloSimulation);
    document.getElementById('start-mc').addEventListener('click', startMonteCarloSimulation);
    document.getElementById('stop-mc').addEventListener('click', stopMonteCarloSimulation);
    document.getElementById('reset-mc').addEventListener('click', resetMonteCarloSimulation);
});

// Numerical Methods for Astrophysical Problems Interactive Elements

// Global variables for simulations
let simulationRunning = false;
let animationFrameId = null;
let simulationData = {};

// Initialize the numerical methods interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners for the N-body simulation
    setupNBodySimulation();
    
    // Set up event listeners for the fluid dynamics simulation
    setupFluidDynamicsSimulation();
    
    // Set up event listeners for the Monte Carlo simulation
    setupMonteCarloSimulation();
    
    // Initialize tab switching functionality if not already defined
    if (typeof openTab !== 'function') {
        window.openTab = function(evt, tabName) {
            // Hide all tab content
            const tabContents = document.getElementsByClassName('tab-content');
            for (let i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove('active');
            }
            
            // Remove active class from all tabs
            const tabs = document.getElementsByClassName('tab');
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
            }
            
            // Show the selected tab content and mark the button as active
            document.getElementById(tabName).classList.add('active');
            evt.currentTarget.classList.add('active');
        };
    }
});

// N-body Simulation
function setupNBodySimulation() {
    // Get DOM elements
    const canvas = document.getElementById('nbody-visualization');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const numBodiesInput = document.getElementById('num-bodies');
    const systemTypeSelect = document.getElementById('system-type');
    const integrationMethodSelect = document.getElementById('integration-method');
    const showTrailsCheckbox = document.getElementById('show-trails');
    const stepButton = document.getElementById('step-nbody');
    const resetButton = document.getElementById('reset-nbody');
    const kineticEnergySpan = document.getElementById('kinetic-energy');
    const potentialEnergySpan = document.getElementById('potential-energy');
    const totalEnergySpan = document.getElementById('total-energy');
    
    // Initialize canvas size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Initialize simulation data
    let bodies = [];
    let trails = [];
    const G = 6.67430e-11; // Gravitational constant
    const softening = 0.1; // Softening parameter to avoid singularities
    let timeStep = 0.01;
    
    // Initialize simulation
    resetNBodySimulation();
    
    // Event listeners
    if (stepButton) {
        stepButton.addEventListener('click', function() {
            if (!simulationRunning) {
                simulationRunning = true;
                stepButton.textContent = "Pause Simulation";
                animateNBodySimulation();
            } else {
                simulationRunning = false;
                stepButton.textContent = "Step Simulation";
                cancelAnimationFrame(animationFrameId);
            }
        });
    }
    
    if (resetButton) {
        resetButton.addEventListener('click', resetNBodySimulation);
    }
    
    // Reset simulation
    function resetNBodySimulation() {
        if (simulationRunning) {
            simulationRunning = false;
            stepButton.textContent = "Step Simulation";
            cancelAnimationFrame(animationFrameId);
        }
        
        const numBodies = numBodiesInput ? parseInt(numBodiesInput.value) : 5;
        const systemType = systemTypeSelect ? systemTypeSelect.value : 'random';
        
        bodies = [];
        trails = [];
        
        // Create bodies based on system type
        if (systemType === 'binary') {
            // Binary star system
            bodies.push({
                x: canvas.width / 2 - 50,
                y: canvas.height / 2,
                vx: 0,
                vy: -1,
                mass: 100,
                radius: 10,
                color: '#FFD700' // Gold
            });
            
            bodies.push({
                x: canvas.width / 2 + 50,
                y: canvas.height / 2,
                vx: 0,
                vy: 1,
                mass: 100,
                radius: 10,
                color: '#FF4500' // OrangeRed
            });
            
            // Add some planets
            for (let i = 0; i < numBodies - 2; i++) {
                const distance = 100 + Math.random() * 150;
                const angle = Math.random() * Math.PI * 2;
                const speed = 1.5 + Math.random() * 0.5;
                
                bodies.push({
                    x: canvas.width / 2 + distance * Math.cos(angle),
                    y: canvas.height / 2 + distance * Math.sin(angle),
                    vx: speed * Math.sin(angle),
                    vy: -speed * Math.cos(angle),
                    mass: 1 + Math.random() * 5,
                    radius: 3 + Math.random() * 2,
                    color: `hsl(${Math.random() * 360}, 70%, 50%)`
                });
            }
        } else if (systemType === 'solar') {
            // Solar system-like
            // Sun
            bodies.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: 0,
                vy: 0,
                mass: 1000,
                radius: 15,
                color: '#FFFF00' // Yellow
            });
            
            // Planets
            const planetColors = ['#8A9A5B', '#FFA500', '#0000FF', '#FF0000', '#A52A2A', '#F0E68C', '#00FFFF', '#0000CD'];
            for (let i = 0; i < Math.min(numBodies - 1, 8); i++) {
                const distance = 50 + i * 25;
                const speed = Math.sqrt(G * 1000 / distance) * 0.5;
                
                bodies.push({
                    x: canvas.width / 2 + distance,
                    y: canvas.height / 2,
                    vx: 0,
                    vy: speed,
                    mass: 1 + Math.random() * 10,
                    radius: 3 + Math.random() * 4,
                    color: planetColors[i]
                });
            }
            
            // Add remaining bodies as asteroids if needed
            for (let i = 9; i <= numBodies; i++) {
                const distance = 150 + Math.random() * 100;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.sqrt(G * 1000 / distance) * 0.5;
                
                bodies.push({
                    x: canvas.width / 2 + distance * Math.cos(angle),
                    y: canvas.height / 2 + distance * Math.sin(angle),
                    vx: speed * Math.sin(angle),
                    vy: -speed * Math.cos(angle),
                    mass: 0.1 + Math.random(),
                    radius: 1 + Math.random(),
                    color: '#888888'
                });
            }
        } else {
            // Random distribution
            for (let i = 0; i < numBodies; i++) {
                bodies.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    mass: 10 + Math.random() * 90,
                    radius: 5 + Math.random() * 10,
                    color: `hsl(${Math.random() * 360}, 70%, 50%)`
                });
            }
        }
        
        // Initialize trails
        for (let i = 0; i < bodies.length; i++) {
            trails.push([]);
        }
        
        // Draw initial state
        drawNBodySystem();
        updateEnergyDisplay();
    }
    
    // Animation loop
    function animateNBodySimulation() {
        stepNBodySimulation();
        drawNBodySystem();
        updateEnergyDisplay();
        
        if (simulationRunning) {
            animationFrameId = requestAnimationFrame(animateNBodySimulation);
        }
    }
    
    // Step the simulation forward
    function stepNBodySimulation() {
        const integrationMethod = integrationMethodSelect ? integrationMethodSelect.value : 'verlet';
        
        if (integrationMethod === 'euler') {
            // Euler integration
            // Calculate forces
            for (let i = 0; i < bodies.length; i++) {
                let fx = 0, fy = 0;
                
                for (let j = 0; j < bodies.length; j++) {
                    if (i !== j) {
                        const dx = bodies[j].x - bodies[i].x;
                        const dy = bodies[j].y - bodies[i].y;
                        const distSq = dx * dx + dy * dy + softening * softening;
                        const dist = Math.sqrt(distSq);
                        const force = G * bodies[i].mass * bodies[j].mass / distSq;
                        
                        fx += force * dx / dist;
                        fy += force * dy / dist;
                    }
                }
                
                // Update velocities
                bodies[i].vx += fx / bodies[i].mass * timeStep;
                bodies[i].vy += fy / bodies[i].mass * timeStep;
            }
            
            // Update positions
            for (let i = 0; i < bodies.length; i++) {
                bodies[i].x += bodies[i].vx * timeStep;
                bodies[i].y += bodies[i].vy * timeStep;
                
                // Add to trail
                if (showTrailsCheckbox && showTrailsCheckbox.checked) {
                    trails[i].push({x: bodies[i].x, y: bodies[i].y});
                    if (trails[i].length > 100) {
                        trails[i].shift();
                    }
                }
            }
        } else if (integrationMethod === 'verlet') {
            // Velocity Verlet integration
            // Update positions and half-step velocities
            for (let i = 0; i < bodies.length; i++) {
                bodies[i].x += bodies[i].vx * timeStep + 0.5 * bodies[i].ax * timeStep * timeStep;
                bodies[i].y += bodies[i].vy * timeStep + 0.5 * bodies[i].ay * timeStep * timeStep;
                
                bodies[i].vx += 0.5 * bodies[i].ax * timeStep;
                bodies[i].vy += 0.5 * bodies[i].ay * timeStep;
                
                // Add to trail
                if (showTrailsCheckbox && showTrailsCheckbox.checked) {
                    trails[i].push({x: bodies[i].x, y: bodies[i].y});
                    if (trails[i].length > 100) {
                        trails[i].shift();
                    }
                }
            }
            
            // Calculate new accelerations
            for (let i = 0; i < bodies.length; i++) {
                let fx = 0, fy = 0;
                
                for (let j = 0; j < bodies.length; j++) {
                    if (i !== j) {
                        const dx = bodies[j].x - bodies[i].x;
                        const dy = bodies[j].y - bodies[i].y;
                        const distSq = dx * dx + dy * dy + softening * softening;
                        const dist = Math.sqrt(distSq);
                        const force = G * bodies[i].mass * bodies[j].mass / distSq;
                        
                        fx += force * dx / dist;
                        fy += force * dy / dist;
                    }
                }
                
                bodies[i].ax = fx / bodies[i].mass;
                bodies[i].ay = fy / bodies[i].mass;
                
                // Update velocities for second half-step
                bodies[i].vx += 0.5 * bodies[i].ax * timeStep;
                bodies[i].vy += 0.5 * bodies[i].ay * timeStep;
            }
        } else if (integrationMethod === 'rk4') {
            // Runge-Kutta 4th order
            // This is a simplified RK4 implementation for demonstration
            const k1 = [], k2 = [], k3 = [], k4 = [];
            
            // Calculate k1
            for (let i = 0; i < bodies.length; i++) {
                k1[i] = {vx: bodies[i].vx, vy: bodies[i].vy, ax: 0, ay: 0};
                
                for (let j = 0; j < bodies.length; j++) {
                    if (i !== j) {
                        const dx = bodies[j].x - bodies[i].x;
                        const dy = bodies[j].y - bodies[i].y;
                        const distSq = dx * dx + dy * dy + softening * softening;
                        const dist = Math.sqrt(distSq);
                        const force = G * bodies[i].mass * bodies[j].mass / distSq;
                        
                        k1[i].ax += force * dx / dist / bodies[i].mass;
                        k1[i].ay += force * dy / dist / bodies[i].mass;
                    }
                }
            }
            
            // Calculate k2
            for (let i = 0; i < bodies.length; i++) {
                k2[i] = {
                    vx: bodies[i].vx + k1[i].ax * timeStep / 2,
                    vy: bodies[i].vy + k1[i].ay * timeStep / 2,
                    ax: 0,
                    ay: 0
                };
                
                const tempX = bodies[i].x + k1[i].vx * timeStep / 2;
                const tempY = bodies[i].y + k1[i].vy * timeStep / 2;
                
                for (let j = 0; j < bodies.length; j++) {
                    if (i !== j) {
                        const tempXj = bodies[j].x + k1[j].vx * timeStep / 2;
                        const tempYj = bodies[j].y + k1[j].vy * timeStep / 2;
                        
                        const dx = tempXj - tempX;
                        const dy = tempYj - tempY;
                        const distSq = dx * dx + dy * dy + softening * softening;
                        const dist = Math.sqrt(distSq);
                        const force = G * bodies[i].mass * bodies[j].mass / distSq;
                        
                        k2[i].ax += force * dx / dist / bodies[i].mass;
                        k2[i].ay += force * dy / dist / bodies[i].mass;
                    }
                }
            }
            
            // Calculate k3 (simplified for demonstration)
            for (let i = 0; i < bodies.length; i++) {
                k3[i] = {
                    vx: bodies[i].vx + k2[i].ax * timeStep / 2,
                    vy: bodies[i].vy + k2[i].ay * timeStep / 2,
                    ax: k2[i].ax,
                    ay: k2[i].ay
                };
            }
            
            // Calculate k4 (simplified for demonstration)
            for (let i = 0; i < bodies.length; i++) {
                k4[i] = {
                    vx: bodies[i].vx + k3[i].ax * timeStep,
                    vy: bodies[i].vy + k3[i].ay * timeStep,
                    ax: k3[i].ax,
                    ay: k3[i].ay
                };
            }
            
            // Update positions and velocities
            for (let i = 0; i < bodies.length; i++) {
                bodies[i].x += timeStep * (k1[i].vx + 2 * k2[i].vx + 2 * k3[i].vx + k4[i].vx) / 6;
                bodies[i].y += timeStep * (k1[i].vy + 2 * k2[i].vy + 2 * k3[i].vy + k4[i].vy) / 6;
                
                bodies[i].vx += timeStep * (k1[i].ax + 2 * k2[i].ax + 2 * k3[i].ax + k4[i].ax) / 6;
                bodies[i].vy += timeStep * (k1[i].ay + 2 * k2[i].ay + 2 * k3[i].ay + k4[i].ay) / 6;
                
                // Add to trail
                if (showTrailsCheckbox && showTrailsCheckbox.checked) {
                    trails[i].push({x: bodies[i].x, y: bodies[i].y});
                    if (trails[i].length > 100) {
                        trails[i].shift();
                    }
                }
            }
        }
        
        // Simple boundary handling - bounce off edges
        for (let i = 0; i < bodies.length; i++) {
            if (bodies[i].x < bodies[i].radius) {
                bodies[i].x = bodies[i].radius;
                bodies[i].vx = -bodies[i].vx * 0.9;
            } else if (bodies[i].x > canvas.width - bodies[i].radius) {
                bodies[i].x = canvas.width - bodies[i].radius;
                bodies[i].vx = -bodies[i].vx * 0.9;
            }
            
            if (bodies[i].y < bodies[i].radius) {
                bodies[i].y = bodies[i].radius;
                bodies[i].vy = -bodies[i].vy * 0.9;
            } else if (bodies[i].y > canvas.height - bodies[i].radius) {
                bodies[i].y = canvas.height - bodies[i].radius;
                bodies[i].vy = -bodies[i].vy * 0.9;
            }
        }
    }
    
    // Draw the N-body system
    function drawNBodySystem() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw trails
        if (showTrailsCheckbox && showTrailsCheckbox.checked) {
            for (let i = 0; i < trails.length; i++) {
                if (trails[i].length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(trails[i][0].x, trails[i][0].y);
                    
                    for (let j = 1; j < trails[i].length; j++) {
                        ctx.lineTo(trails[i][j].x, trails[i][j].y);
                    }
                    
                    ctx.strokeStyle = bodies[i].color;
                    ctx.globalAlpha = 0.3;
                    ctx.stroke();
                    ctx.globalAlpha = 1.0;
                }
            }
        }
        
        // Draw bodies
        for (let i = 0; i < bodies.length; i++) {
            ctx.beginPath();
            ctx.arc(bodies[i].x, bodies[i].y, bodies[i].radius, 0, Math.PI * 2);
            ctx.fillStyle = bodies[i].color;
            ctx.fill();
        }
    }
    
    // Update energy display
    function updateEnergyDisplay() {
        if (!kineticEnergySpan || !potentialEnergySpan || !totalEnergySpan) return;
        
        let kineticEnergy = 0;
        let potentialEnergy = 0;
        
        // Calculate kinetic energy
        for (let i = 0; i < bodies.length; i++) {
            const v2 = bodies[i].vx * bodies[i].vx + bodies[i].vy * bodies[i].vy;
            kineticEnergy += 0.5 * bodies[i].mass * v2;
        }
        
        // Calculate potential energy
        for (let i = 0; i < bodies.length; i++) {
            for (let j = i + 1; j < bodies.length; j++) {
                const dx = bodies[j].x - bodies[i].x;
                const dy = bodies[j].y - bodies[i].y;
                const dist = Math.sqrt(dx * dx + dy * dy + softening * softening);
                potentialEnergy -= G * bodies[i].mass * bodies[j].mass / dist;
            }
        }
        
        const totalEnergy = kineticEnergy + potentialEnergy;
        
        kineticEnergySpan.textContent = kineticEnergy.toFixed(2);
        potentialEnergySpan.textContent = potentialEnergy.toFixed(2);
        totalEnergySpan.textContent = totalEnergy.toFixed(2);
    }
}

// Fluid Dynamics Simulation
function setupFluidDynamicsSimulation() {
    // Get DOM elements
    const canvas = document.getElementById('fluid-visualization');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const fluidTypeSelect = document.getElementById('fluid-type');
    const fluidMethodSelect = document.getElementById('fluid-method');
    const visualizationTypeSelect = document.getElementById('visualization-type');
    const showVectorsCheckbox = document.getElementById('show-vectors');
    const stepButton = document.getElementById('step-fluid');
    const resetButton = document.getElementById('reset-fluid');
    
    // Initialize canvas size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Grid parameters
    const nx = 100; // Number of cells in x direction
    const ny = 100; // Number of cells in y direction
    const dx = canvas.width / nx;
    const dy = canvas.height / ny;
    
    // Fluid parameters
    let density = Array(nx * ny).fill(1.0);
    let velocityX = Array(nx * ny).fill(0.0);
    let velocityY = Array(nx * ny).fill(0.0);
    let pressure = Array(nx * ny).fill(0.0);
    let temperature = Array(nx * ny).fill(0.0);
    
    // Simulation parameters
    const dt = 0.1; // Time step
    const viscosity = 0.1;
    const diffusion = 0.1;
    
    // Initialize simulation
    resetFluidSimulation();
    
    // Event listeners
    if (stepButton) {
        stepButton.addEventListener('click', function() {
            if (!simulationRunning) {
                simulationRunning = true;
                stepButton.textContent = "Pause Simulation";
                animateFluidSimulation();
            } else {
                simulationRunning = false;
                stepButton.textContent = "Step Simulation";
                cancelAnimationFrame(animationFrameId);
            }
        });
    }
    
    if (resetButton) {
        resetButton.addEventListener('click', resetFluidSimulation);
    }
    
    // Reset simulation
    function resetFluidSimulation() {
        if (simulationRunning) {
            simulationRunning = false;
            stepButton.textContent = "Step Simulation";
            cancelAnimationFrame(animationFrameId);
        }
        
        const fluidType = fluidTypeSelect ? fluidTypeSelect.value : 'shock';
        
        // Reset arrays
        density = Array(nx * ny).fill(1.0);
        velocityX = Array(nx * ny).fill(0.0);
        velocityY = Array(nx * ny).fill(0.0);
        pressure = Array(nx * ny).fill(0.0);
        temperature = Array(nx * ny).fill(0.0);
        
        // Set up initial conditions based on simulation type
        if (fluidType === 'shock') {
            // Shock tube setup
            for (let j = 0; j < ny; j++) {
                for (let i = 0; i < nx; i++) {
                    const idx = i + j * nx;
                    if (i < nx / 2) {
                        density[idx] = 10.0;
                        pressure[idx] = 10.0;
                        temperature[idx] = pressure[idx] / density[idx];
                    } else {
                        density[idx] = 1.0;
                        pressure[idx] = 1.0;
                        temperature[idx] = pressure[idx] / density[idx];
                    }
                }
            }
        } else if (fluidType === 'vortex') {
            // Vortex setup
            const centerX = nx / 2;
            const centerY = ny / 2;
            const radius = Math.min(nx, ny) / 4;
            
            for (let j = 0; j < ny; j++) {
                for (let i = 0; i < nx; i++) {
                    const idx = i + j * nx;
                    const dx = i - centerX;
                    const dy = j - centerY;
                    const r = Math.sqrt(dx * dx + dy * dy);
                    
                    if (r < radius) {
                        const theta = Math.atan2(dy, dx);
                        const vortexStrength = 2.0 * (1.0 - r / radius);
                        velocityX[idx] = -vortexStrength * Math.sin(theta);
                        velocityY[idx] = vortexStrength * Math.cos(theta);
                        density[idx] = 1.0 + 0.1 * Math.exp(-r * r / (radius * radius));
                    }
                }
            }
        } else if (fluidType === 'explosion') {
            // Explosion setup
            const centerX = nx / 2;
            const centerY = ny / 2;
            const radius = Math.min(nx, ny) / 10;
            
            for (let j = 0; j < ny; j++) {
                for (let i = 0; i < nx; i++) {
                    const idx = i + j * nx;
                    const dx = i - centerX;
                    const dy = j - centerY;
                    const r = Math.sqrt(dx * dx + dy * dy);
                    
                    if (r < radius) {
                        pressure[idx] = 10.0;
                        temperature[idx] = 10.0;
                        density[idx] = 0.125;
                    }
                }
            }
        }
        
        // Draw initial state
        drawFluidSystem();
    }
    
    // Animation loop
    function animateFluidSimulation() {
        stepFluidSimulation();
        drawFluidSystem();
        
        if (simulationRunning) {
            animationFrameId = requestAnimationFrame(animateFluidSimulation);
        }
    }
    
    // Step the simulation forward
    function stepFluidSimulation() {
        const fluidMethod = fluidMethodSelect ? fluidMethodSelect.value : 'basic';
        
        // Create temporary arrays for the update
        const newDensity = Array(nx * ny).fill(0.0);
        const newVelocityX = Array(nx * ny).fill(0.0);
        const newVelocityY = Array(nx * ny).fill(0.0);
        const newPressure = Array(nx * ny).fill(0.0);
        const newTemperature = Array(nx * ny).fill(0.0);
        
        // Basic advection
        for (let j = 1; j < ny - 1; j++) {
            for (let i = 1; i < nx - 1; i++) {
                const idx = i + j * nx;
                
                // Calculate advection using semi-Lagrangian method
                const x = i - velocityX[idx] * dt;
                const y = j - velocityY[idx] * dt;
                
                // Bilinear interpolation
                const i0 = Math.floor(x);
                const i1 = i0 + 1;
                const j0 = Math.floor(y);
                const j1 = j0 + 1;
                
                const s1 = x - i0;
                const s0 = 1 - s1;
                const t1 = y - j0;
                const t0 = 1 - t1;
                
                // Ensure indices are within bounds
                const i0_clamped = Math.max(0, Math.min(nx - 1, i0));
                const i1_clamped = Math.max(0, Math.min(nx - 1, i1));
                const j0_clamped = Math.max(0, Math.min(ny - 1, j0));
                const j1_clamped = Math.max(0, Math.min(ny - 1, j1));
                
                // Interpolate density
                newDensity[idx] = 
                    s0 * (t0 * density[i0_clamped + j0_clamped * nx] + 
                          t1 * density[i0_clamped + j1_clamped * nx]) +
                    s1 * (t0 * density[i1_clamped + j0_clamped * nx] + 
                          t1 * density[i1_clamped + j1_clamped * nx]);
                
                // Interpolate velocity
                newVelocityX[idx] = 
                    s0 * (t0 * velocityX[i0_clamped + j0_clamped * nx] + 
                          t1 * velocityX[i0_clamped + j1_clamped * nx]) +
                    s1 * (t0 * velocityX[i1_clamped + j0_clamped * nx] + 
                          t1 * velocityX[i1_clamped + j1_clamped * nx]);
                
                newVelocityY[idx] = 
                    s0 * (t0 * velocityY[i0_clamped + j0_clamped * nx] + 
                          t1 * velocityY[i0_clamped + j1_clamped * nx]) +
                    s1 * (t0 * velocityY[i1_clamped + j0_clamped * nx] + 
                          t1 * velocityY[i1_clamped + j1_clamped * nx]);
                
                // Interpolate temperature
                newTemperature[idx] = 
                    s0 * (t0 * temperature[i0_clamped + j0_clamped * nx] + 
                          t1 * temperature[i0_clamped + j1_clamped * nx]) +
                    s1 * (t0 * temperature[i1_clamped + j0_clamped * nx] + 
                          t1 * temperature[i1_clamped + j1_clamped * nx]);
            }
        }
        
        // Add diffusion if enabled
        if (fluidMethod === 'diffusion' || fluidMethod === 'viscosity' || fluidMethod === 'full') {
            for (let j = 1; j < ny - 1; j++) {
                for (let i = 1; i < nx - 1; i++) {
                    const idx = i + j * nx;
                    const up = i + (j - 1) * nx;
                    const down = i + (j + 1) * nx;
                    const left = (i - 1) + j * nx;
                    const right = (i + 1) + j * nx;
                    
                    // Diffuse temperature
                    newTemperature[idx] += diffusion * dt * (
                        temperature[up] + temperature[down] + 
                        temperature[left] + temperature[right] - 
                        4 * temperature[idx]
                    );
                    
                    // Diffuse density
                    newDensity[idx] += diffusion * dt * (
                        density[up] + density[down] + 
                        density[left] + density[right] - 
                        4 * density[idx]
                    );
                }
            }
        }
        
        // Add viscosity if enabled
        if (fluidMethod === 'viscosity' || fluidMethod === 'full') {
            for (let j = 1; j < ny - 1; j++) {
                for (let i = 1; i < nx - 1; i++) {
                    const idx = i + j * nx;
                    const up = i + (j - 1) * nx;
                    const down = i + (j + 1) * nx;
                    const left = (i - 1) + j * nx;
                    const right = (i + 1) + j * nx;
                    
                    // Apply viscosity to velocity
                    newVelocityX[idx] += viscosity * dt * (
                        velocityX[up] + velocityX[down] + 
                        velocityX[left] + velocityX[right] - 
                        4 * velocityX[idx]
                    );
                    
                    newVelocityY[idx] += viscosity * dt * (
                        velocityY[up] + velocityY[down] + 
                        velocityY[left] + velocityY[right] - 
                        4 * velocityY[idx]
                    );
                }
            }
        }
        
        // Add pressure forces if using full model
        if (fluidMethod === 'full') {
            // Calculate pressure from density and temperature (ideal gas law)
            for (let j = 0; j < ny; j++) {
                for (let i = 0; i < nx; i++) {
                    const idx = i + j * nx;
                    newPressure[idx] = newDensity[idx] * newTemperature[idx];
                }
            }
            
            // Apply pressure forces
            for (let j = 1; j < ny - 1; j++) {
                for (let i = 1; i < nx - 1; i++) {
                    const idx = i + j * nx;
                    const up = i + (j - 1) * nx;
                    const down = i + (j + 1) * nx;
                    const left = (i - 1) + j * nx;
                    const right = (i + 1) + j * nx;
                    
                    // Calculate pressure gradient
                    const gradPx = (newPressure[right] - newPressure[left]) / (2 * dx);
                    const gradPy = (newPressure[down] - newPressure[up]) / (2 * dy);
                    
                    // Update velocity based on pressure gradient
                    newVelocityX[idx] -= dt * gradPx / newDensity[idx];
                    newVelocityY[idx] -= dt * gradPy / newDensity[idx];
                }
            }
        }
        
        // Apply boundary conditions
        for (let j = 0; j < ny; j++) {
            // Left and right boundaries
            newVelocityX[0 + j * nx] = 0;
            newVelocityX[(nx - 1) + j * nx] = 0;
            newVelocityY[0 + j * nx] = 0;
            newVelocityY[(nx - 1) + j * nx] = 0;
        }
        
        for (let i = 0; i < nx; i++) {
            // Top and bottom boundaries
            newVelocityX[i + 0 * nx] = 0;
            newVelocityX[i + (ny - 1) * nx] = 0;
            newVelocityY[i + 0 * nx] = 0;
            newVelocityY[i + (ny - 1) * nx] = 0;
        }
        
        // Update the fluid state
        density = newDensity;
        velocityX = newVelocityX;
        velocityY = newVelocityY;
        pressure = newPressure;
        temperature = newTemperature;
    }
    
    // Draw the fluid system
    function drawFluidSystem() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const visualizationType = visualizationTypeSelect ? visualizationTypeSelect.value : 'density';
        const showVectors = showVectorsCheckbox && showVectorsCheckbox.checked;
        
        // Create image data
        const imageData = ctx.createImageData(nx, ny);
        
        // Fill image data based on visualization type
        for (let j = 0; j < ny; j++) {
            for (let i = 0; i < nx; i++) {
                const idx = i + j * nx;
                const pixelIdx = (i + j * nx) * 4;
                
                let value = 0;
                
                if (visualizationType === 'density') {
                    value = Math.min(255, Math.max(0, density[idx] * 25));
                } else if (visualizationType === 'pressure') {
                    value = Math.min(255, Math.max(0, pressure[idx] * 25));
                } else if (visualizationType === 'temperature') {
                    value = Math.min(255, Math.max(0, temperature[idx] * 25));
                } else if (visualizationType === 'velocity') {
                    const speed = Math.sqrt(velocityX[idx] * velocityX[idx] + velocityY[idx] * velocityY[idx]);
                    value = Math.min(255, Math.max(0, speed * 50));
                }
                
                // Set pixel color based on visualization type
                if (visualizationType === 'density') {
                    imageData.data[pixelIdx] = value;
                    imageData.data[pixelIdx + 1] = value;
                    imageData.data[pixelIdx + 2] = value;
                } else if (visualizationType === 'pressure') {
                    imageData.data[pixelIdx] = value;
                    imageData.data[pixelIdx + 1] = 0;
                    imageData.data[pixelIdx + 2] = 0;
                } else if (visualizationType === 'temperature') {
                    imageData.data[pixelIdx] = value;
                    imageData.data[pixelIdx + 1] = value / 2;
                    imageData.data[pixelIdx + 2] = 0;
                } else if (visualizationType === 'velocity') {
                    // Use HSV color mapping for velocity
                    const angle = Math.atan2(velocityY[idx], velocityX[idx]);
                    const hue = ((angle + Math.PI) / (2 * Math.PI)) * 360;
                    
                    // Simple HSV to RGB conversion
                    const h = hue / 60;
                    const s = 1;
                    const v = value / 255;
                    
                    const i = Math.floor(h);
                    const f = h - i;
                    const p = v * (1 - s);
                    const q = v * (1 - s * f);
                    const t = v * (1 - s * (1 - f));
                    
                    let r, g, b;
                    
                    switch (i % 6) {
                        case 0: r = v; g = t; b = p; break;
                        case 1: r = q; g = v; b = p; break;
                        case 2: r = p; g = v; b = t; break;
                        case 3: r = p; g = q; b = v; break;
                        case 4: r = t; g = p; b = v; break;
                        case 5: r = v; g = p; b = q; break;
                    }
                    
                    imageData.data[pixelIdx] = r * 255;
                    imageData.data[pixelIdx + 1] = g * 255;
                    imageData.data[pixelIdx + 2] = b * 255;
                }
                
                imageData.data[pixelIdx + 3] = 255; // Alpha channel
            }
        }
        
        // Put image data to canvas
        ctx.putImageData(imageData, 0, 0);
        
        // Draw velocity vectors if enabled
        if (showVectors) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.lineWidth = 1;
            
            // Draw vectors at regular intervals
            const vectorSpacing = 10;
            for (let j = vectorSpacing; j < ny; j += vectorSpacing) {
                for (let i = vectorSpacing; i < nx; i += vectorSpacing) {
                    const idx = i + j * nx;
                    const vx = velocityX[idx];
                    const vy = velocityY[idx];
                    const speed = Math.sqrt(vx * vx + vy * vy);
                    
                    if (speed > 0.01) {
                        const scale = 5;
                        const startX = i;
                        const startY = j;
                        const endX = startX + vx * scale;
                        const endY = startY + vy * scale;
                        
                        // Draw arrow
                        ctx.beginPath();
                        ctx.moveTo(startX, startY);
                        ctx.lineTo(endX, endY);
                        
                        // Draw arrowhead
                        const angle = Math.atan2(vy, vx);
                        const arrowSize = 3;
                        ctx.lineTo(
                            endX - arrowSize * Math.cos(angle - Math.PI / 6),
                            endY - arrowSize * Math.sin(angle - Math.PI / 6)
                        );
                        ctx.moveTo(endX, endY);
                        ctx.lineTo(
                            endX - arrowSize * Math.cos(angle + Math.PI / 6),
                            endY - arrowSize * Math.sin(angle + Math.PI / 6)
                        );
                        
                        ctx.stroke();
                    }
                }
            }
        }
    }
}

// Monte Carlo Radiative Transfer Simulation
function setupMonteCarloSimulation() {
    // Get DOM elements
    const canvas = document.getElementById('mc-visualization');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const mcTypeSelect = document.getElementById('mc-type');
    const sourceTypeSelect = document.getElementById('source-type');
    const opticalDepthInput = document.getElementById('optical-depth');
    const opticalDepthValue = document.getElementById('optical-depth-value');
    const batchSizeInput = document.getElementById('batch-size');
    const showPathsCheckbox = document.getElementById('show-paths');
    const startButton = document.getElementById('start-mc');
    const stopButton = document.getElementById('stop-mc');
    const resetButton = document.getElementById('reset-mc');
    const totalParticlesSpan = document.getElementById('total-particles');
    const escapedParticlesSpan = document.getElementById('escaped-particles');
    const absorbedParticlesSpan = document.getElementById('absorbed-particles');
    const escapeProbabilitySpan = document.getElementById('escape-probability');
    const avgScattersSpan = document.getElementById('avg-scatters');
    
    // Initialize canvas size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Simulation parameters
    let grid = [];
    const nx = 100;
    const ny = 100;
    const dx = canvas.width / nx;
    const dy = canvas.height / ny;
    
    // Particle statistics
    let totalParticles = 0;
    let escapedParticles = 0;
    let absorbedParticles = 0;
    let totalScatters = 0;
    
    // Active particles
    let particles = [];
    
    // Initialize simulation
    resetMCSimulation();
    
    // Event listeners
    if (opticalDepthInput) {
        opticalDepthInput.addEventListener('input', function() {
            if (opticalDepthValue) {
                opticalDepthValue.textContent = parseFloat(opticalDepthInput.value).toFixed(1);
            }
            resetMCSimulation();
        });
    }
    
    if (startButton) {
        startButton.addEventListener('click', function() {
            if (!simulationRunning) {
                simulationRunning = true;
                animateMCSimulation();
            }
        });
    }
    
    if (stopButton) {
        stopButton.addEventListener('click', function() {
            simulationRunning = false;
            cancelAnimationFrame(animationFrameId);
        });
    }
    
    if (resetButton) {
        resetButton.addEventListener('click', resetMCSimulation);
    }
    
    // Reset simulation
    function resetMCSimulation() {
        simulationRunning = false;
        cancelAnimationFrame(animationFrameId);
        
        const mcType = mcTypeSelect ? mcTypeSelect.value : 'cloud';
        
        // Reset statistics
        totalParticles = 0;
        escapedParticles = 0;
        absorbedParticles = 0;
        totalScatters = 0;
        particles = [];
        
        // Update statistics display
        updateStatistics();
        
        // Initialize grid
        grid = Array(nx * ny).fill(0);
        
        // Set up medium based on simulation type
        if (mcType === 'cloud') {
            // Spherical cloud
            const centerX = nx / 2;
            const centerY = ny / 2;
            const radius = Math.min(nx, ny) / 3;
            
            for (let j = 0; j < ny; j++) {
                for (let i = 0; i < nx; i++) {
                    const dx = i - centerX;
                    const dy = j - centerY;
                    const r = Math.sqrt(dx * dx + dy * dy);
                    
                    if (r < radius) {
                        grid[i + j * nx] = 1; // Inside cloud
                    }
                }
            }
        } else if (mcType === 'maze') {
            // Maze structure
            for (let j = 0; j < ny; j++) {
                for (let i = 0; i < nx; i++) {
                    // Create a simple maze pattern
                    if ((i % 20 < 10 && j % 20 < 10) || 
                        (i % 20 >= 10 && j % 20 >= 10)) {
                        grid[i + j * nx] = 1;
                    }
                }
            }
        } else if (mcType === 'custom') {
            // Custom obstacles - create some random blobs
            for (let blob = 0; blob < 5; blob++) {
                const centerX = Math.random() * nx;
                const centerY = Math.random() * ny;
                const radius = 5 + Math.random() * 15;
                
                for (let j = 0; j < ny; j++) {
                    for (let i = 0; i < nx; i++) {
                        const dx = i - centerX;
                        const dy = j - centerY;
                        const r = Math.sqrt(dx * dx + dy * dy);
                        
                        if (r < radius) {
                            grid[i + j * nx] = 1;
                        }
                    }
                }
            }
        }
        
        // Draw initial state
        drawMCSystem();
    }
    
    // Animation loop
    function animateMCSimulation() {
        stepMCSimulation();
        drawMCSystem();
        
        if (simulationRunning) {
            animationFrameId = requestAnimationFrame(animateMCSimulation);
        }
    }
    
    // Step the simulation forward
    function stepMCSimulation() {
        const sourceType = sourceTypeSelect ? sourceTypeSelect.value : 'point';
        const opticalDepth = opticalDepthInput ? parseFloat(opticalDepthInput.value) : 5.0;
        const batchSize = batchSizeInput ? parseInt(batchSizeInput.value) : 10;
        
        // Generate new particles
        for (let i = 0; i < batchSize; i++) {
            let x, y, dx, dy;
            
            if (sourceType === 'point') {
                // Point source at center
                x = nx / 2;
                y = ny / 2;
                
                // Random direction
                const angle = Math.random() * Math.PI * 2;
                dx = Math.cos(angle);
                dy = Math.sin(angle);
            } else if (sourceType === 'beam') {
                // Beam from left side
                x = 0;
                y = Math.random() * ny;
                
                // Direction to the right
                dx = 1;
                dy = 0;
            } else if (sourceType === 'random') {
                // Random position on boundary
                const side = Math.floor(Math.random() * 4);
                
                if (side === 0) {
                    // Top
                    x = Math.random() * nx;
                    y = 0;
                    dx = Math.random() - 0.5;
                    dy = Math.random();
                } else if (side === 1) {
                    // Right
                    x = nx - 1;
                    y = Math.random() * ny;
                    dx = -Math.random();
                    dy = Math.random() - 0.5;
                } else if (side === 2) {
                    // Bottom
                    x = Math.random() * nx;
                    y = ny - 1;
                    dx = Math.random() - 0.5;
                    dy = -Math.random();
                } else {
                    // Left
                    x = 0;
                    y = Math.random() * ny;
                    dx = Math.random();
                    dy = Math.random() - 0.5;
                }
                
                // Normalize direction
                const norm = Math.sqrt(dx * dx + dy * dy);
                dx /= norm;
                dy /= norm;
            }
            
            // Create new particle
            particles.push({
                x: x,
                y: y,
                dx: dx,
                dy: dy,
                active: true,
                path: [{x: x, y: y}],
                scatters: 0
            });
            
            totalParticles++;
        }
        
        // Move particles
        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];
            
            if (!particle.active) continue;
            
            // Move particle
            particle.x += particle.dx;
            particle.y += particle.dy;
            
            // Add to path
            if (showPathsCheckbox && showPathsCheckbox.checked) {
                particle.path.push({x: particle.x, y: particle.y});
            }
            
            // Check if particle is out of bounds
            if (particle.x < 0 || particle.x >= nx || particle.y < 0 || particle.y >= ny) {
                particle.active = false;
                escapedParticles++;
                continue;
            }
            
            // Check if particle is in medium
            const idx = Math.floor(particle.x) + Math.floor(particle.y) * nx;
            if (idx >= 0 && idx < grid.length && grid[idx] === 1) {
                // Particle is in medium
                // Calculate interaction probability based on optical depth
                const interactionProb = 1.0 - Math.exp(-opticalDepth / 100);
                
                if (Math.random() < interactionProb) {
                    // Interaction occurred
                    if (Math.random() < 0.5) {
                        // Scattering
                        const angle = Math.random() * Math.PI * 2;
                        particle.dx = Math.cos(angle);
                        particle.dy = Math.sin(angle);
                        particle.scatters++;
                        totalScatters++;
                    } else {
                        // Absorption
                        particle.active = false;
                        absorbedParticles++;
                    }
                }
            }
        }
        
        // Remove inactive particles to save memory
        if (particles.length > 1000) {
            particles = particles.filter(p => p.active);
        }
        
        // Update statistics
        updateStatistics();
    }
    
    // Draw the Monte Carlo system
    function drawMCSystem() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw medium
        const imageData = ctx.createImageData(nx, ny);
        
        for (let j = 0; j < ny; j++) {
            for (let i = 0; i < nx; i++) {
                const idx = i + j * nx;
                const pixelIdx = (i + j * nx) * 4;
                
                if (grid[idx] === 1) {
                    // Medium
                    imageData.data[pixelIdx] = 100;
                    imageData.data[pixelIdx + 1] = 100;
                    imageData.data[pixelIdx + 2] = 150;
                    imageData.data[pixelIdx + 3] = 150;
                } else {
                    // Empty space
                    imageData.data[pixelIdx] = 0;
                    imageData.data[pixelIdx + 1] = 0;
                    imageData.data[pixelIdx + 2] = 0;
                    imageData.data[pixelIdx + 3] = 0;
                }
            }
        }
        
        ctx.putImageData(imageData, 0, 0);
        
        // Draw particle paths
        if (showPathsCheckbox && showPathsCheckbox.checked) {
            for (let i = 0; i < particles.length; i++) {
                const particle = particles[i];
                
                if (particle.path.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(particle.path[0].x, particle.path[0].y);
                    
                    for (let j = 1; j < particle.path.length; j++) {
                        ctx.lineTo(particle.path[j].x, particle.path[j].y);
                    }
                    
                    ctx.strokeStyle = particle.active ? 'rgba(255, 255, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)';
                    ctx.stroke();
                }
            }
        }
        
        // Draw active particles
        ctx.fillStyle = 'yellow';
        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];
            
            if (particle.active) {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    
    // Update statistics display
    function updateStatistics() {
        if (totalParticlesSpan) totalParticlesSpan.textContent = totalParticles;
        if (escapedParticlesSpan) escapedParticlesSpan.textContent = escapedParticles;
        if (absorbedParticlesSpan) absorbedParticlesSpan.textContent = absorbedParticles;
        
        if (escapeProbabilitySpan) {
            const completedParticles = escapedParticles + absorbedParticles;
            const probability = completedParticles > 0 ? (escapedParticles / completedParticles * 100).toFixed(2) : "0.00";
            escapeProbabilitySpan.textContent = probability + "%";
        }
        
        if (avgScattersSpan) {
            const avgScatters = completedParticles > 0 ? (totalScatters / completedParticles).toFixed(2) : "0.00";
            avgScattersSpan.textContent = avgScatters;
        }
    }
}

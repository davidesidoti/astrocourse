# Stellar Atmospheres and Spectroscopy

## Introduction

The stellar atmosphere is the outer layer of a star through which radiation passes before reaching space. Despite representing only a tiny fraction of a star's mass, atmospheres are crucial for our understanding of stellar physics because they produce the radiation we observe. Spectroscopy—the study of how matter interacts with electromagnetic radiation—provides our primary tool for analyzing stellar atmospheres and determining fundamental stellar properties.

In this section, we will explore the physics of stellar atmospheres, the formation of spectral lines, and the techniques astronomers use to extract information from stellar spectra. We will examine how temperature, pressure, chemical composition, and other factors shape the emergent spectrum, and how spectroscopic observations allow us to determine a star's physical parameters, chemical abundances, and activity levels.

Understanding stellar atmospheres and spectroscopy connects observational astronomy with theoretical astrophysics, providing the foundation for stellar classification, evolutionary studies, and our knowledge of cosmic chemical evolution. The techniques discussed here represent some of the most powerful tools in the astronomer's toolkit for probing the nature of stars across our galaxy and beyond.

## Structure of Stellar Atmospheres

### Basic Atmospheric Layers

Stellar atmospheres are typically divided into several distinct layers:

1. **Photosphere**:
   - The visible "surface" of a star
   - Region where most of the stellar radiation escapes to space
   - Optical depth τ ≈ 2/3 at visible wavelengths
   - Relatively thin layer (about 0.1% of stellar radius)
   - Temperature decreases outward

2. **Chromosphere**:
   - Layer above the photosphere
   - Named for its colorful appearance during solar eclipses
   - Temperature increases outward (temperature minimum to ~10,000 K)
   - Dominated by emission lines (especially hydrogen Balmer series)
   - Lower density than photosphere

3. **Transition Region**:
   - Thin layer between chromosphere and corona
   - Rapid temperature increase (10,000 K to ~1,000,000 K)
   - Strong emission in ultraviolet wavelengths
   - Site of complex magnetic activity

4. **Corona**:
   - Outermost atmospheric layer
   - Very high temperature (1-2 million K)
   - Very low density
   - Extends far into space
   - Source of stellar wind

These layers are best studied in our Sun but exist in varying forms in other stars. The specific properties depend on stellar type, with significant variations in layer thickness, temperature structure, and dynamics.

### Temperature Structure

The temperature variation with depth is a fundamental property of stellar atmospheres:

1. **Photospheric Temperature Gradient**:
   - Temperature decreases outward in the photosphere
   - For the Sun: ~6,000 K at the bottom to ~4,500 K at the top
   - Described by the temperature distribution T(τ) where τ is optical depth
   - Steeper in cooler stars, shallower in hotter stars

2. **Temperature Minimum**:
   - Located at the top of the photosphere/base of the chromosphere
   - In the Sun: ~4,500 K at about 500 km above the visible surface
   - Marks the transition from radiative cooling to mechanical heating

3. **Chromospheric Temperature Rise**:
   - Temperature increases with height through the chromosphere
   - Caused by mechanical energy deposition (acoustic waves, magnetic heating)
   - Typically rises to ~10,000 K at the top of the chromosphere

4. **Coronal Temperatures**:
   - Dramatic increase through the transition region
   - Corona reaches 1-2 million K
   - Maintained by magnetic heating processes
   - Higher in active stars with stronger magnetic fields

### Pressure and Density Structure

The pressure and density in stellar atmospheres decrease rapidly with height:

1. **Hydrostatic Equilibrium**:
   - The primary force balance is between gravity and pressure gradient
   - Expressed mathematically as:
   
   $$\frac{dP}{dr} = -\rho g$$
   
   Where:
   - $P$ is pressure
   - $r$ is radial distance
   - $\rho$ is density
   - $g$ is local gravitational acceleration

2. **Pressure Scale Height**:
   - Characteristic distance over which pressure decreases by a factor of e
   - Defined as:
   
   $$H_P = \frac{kT}{\mu m_H g}$$
   
   Where:
   - $k$ is Boltzmann's constant
   - $T$ is temperature
   - $\mu$ is mean molecular weight
   - $m_H$ is mass of hydrogen atom
   - $g$ is surface gravity

3. **Typical Values**:
   - Solar photosphere: $H_P \approx$ 150 km
   - Red giant photosphere: $H_P \approx$ 10,000 km
   - Main sequence O star photosphere: $H_P \approx$ 1,000 km

4. **Density Stratification**:
   - Density drops exponentially with height
   - Solar photosphere: $\rho \approx 10^{-7}$ g/cm³
   - Solar chromosphere: $\rho \approx 10^{-11}$ g/cm³
   - Solar corona: $\rho \approx 10^{-15}$ g/cm³

### Atmospheric Extension

The relative thickness of a stellar atmosphere compared to the stellar radius varies significantly across the H-R diagram:

1. **Compact Atmospheres**:
   - Main sequence stars: atmosphere < 0.1% of stellar radius
   - White dwarfs: extremely thin atmospheres due to high gravity
   - Atmosphere appears as a sharp edge

2. **Extended Atmospheres**:
   - Giants and supergiants: atmosphere can be several percent of stellar radius
   - Very low surface gravity allows significant extension
   - Atmosphere appears more diffuse with no sharp boundary

3. **Mathematical Description**:
   - Atmospheric extension parameter: $\epsilon = H_P/R_*$
   - Sun: $\epsilon \approx 2 \times 10^{-4}$
   - Red supergiant: $\epsilon \approx 10^{-2}$
   - Affects spectral line formation, especially for strong lines

## Radiative Transfer in Stellar Atmospheres

### Fundamental Concepts

Radiative transfer describes how radiation propagates through stellar material:

1. **Specific Intensity**:
   - The fundamental quantity in radiative transfer
   - Defined as energy per unit time, per unit area, per unit solid angle, per unit frequency
   - Denoted as $I_\nu$ or $I_\lambda$ (frequency or wavelength basis)

2. **Optical Depth**:
   - Measures the opacity of material to radiation
   - Defined as:
   
   $$\tau_\nu = \int \kappa_\nu \rho \, ds$$
   
   Where:
   - $\kappa_\nu$ is the opacity (absorption coefficient) at frequency $\nu$
   - $\rho$ is the density
   - $ds$ is the path length element

3. **Emission and Absorption Processes**:
   - Absorption: removal of photons from the beam
   - Emission: addition of photons to the beam
   - Scattering: redirection of photons

4. **Source Function**:
   - Ratio of emission to absorption coefficients
   - Denoted as $S_\nu$
   - In Local Thermodynamic Equilibrium (LTE): $S_\nu = B_\nu(T)$
   - Where $B_\nu(T)$ is the Planck function

### The Radiative Transfer Equation

The fundamental equation governing radiative transfer is:

$$\frac{dI_\nu}{d\tau_\nu} = I_\nu - S_\nu$$

This equation describes how the specific intensity changes along a path through the atmosphere:
- When $I_\nu > S_\nu$, intensity decreases (net absorption)
- When $I_\nu < S_\nu$, intensity increases (net emission)
- When $I_\nu = S_\nu$, intensity remains constant (radiative equilibrium)

### Formal Solution

The formal solution to the radiative transfer equation is:

$$I_\nu(\tau_\nu=0, \mu) = \int_0^\infty S_\nu(t) e^{-t/\mu} \frac{dt}{\mu}$$

Where:
- $\mu = \cos\theta$ (angle between the line of sight and the vertical)
- $\tau_\nu=0$ represents the top of the atmosphere
- $t$ is the variable of integration (optical depth)

This solution shows that the emergent intensity is a weighted average of the source function throughout the atmosphere, with the weighting function $e^{-t/\mu}$ giving more importance to layers closer to the surface.

### The Eddington-Barbier Relation

A useful approximation for understanding the emergent spectrum is the Eddington-Barbier relation:

$$I_\nu(0,\mu) \approx S_\nu(\tau_\nu=\mu)$$

This states that the emergent intensity at angle $\mu$ is approximately equal to the source function at optical depth $\tau_\nu=\mu$. For radiation emerging perpendicular to the surface ($\mu=1$):

$$I_\nu(0,1) \approx S_\nu(\tau_\nu=1)$$

This explains why we see deeper, hotter layers in the centers of spectral lines than in the wings, leading to the characteristic line profiles.

### Flux and Effective Temperature

The total energy output from a stellar surface is described by the flux:

$$F_\nu = \int I_\nu \cos\theta \, d\Omega = 2\pi \int_0^1 I_\nu \mu \, d\mu$$

The integrated flux over all frequencies is related to the effective temperature by the Stefan-Boltzmann law:

$$F = \int_0^\infty F_\nu \, d\nu = \sigma T_{\text{eff}}^4$$

Where:
- $\sigma$ is the Stefan-Boltzmann constant
- $T_{\text{eff}}$ is the effective temperature

The effective temperature is thus defined as the temperature of a black body that would emit the same total flux as the star.

### Limb Darkening

A direct consequence of radiative transfer in stellar atmospheres is limb darkening:

1. **Observational Effect**:
   - Stellar disks appear brighter at the center and darker at the limb
   - More pronounced at shorter wavelengths

2. **Physical Explanation**:
   - At the center of the disk ($\mu=1$), we see deeper, hotter layers
   - At the limb ($\mu \approx 0$), we see higher, cooler layers
   - Temperature decreases outward in the photosphere

3. **Mathematical Description**:
   - Often approximated by:
   
   $$I(\mu)/I(1) = 1 - u(1-\mu)$$
   
   Where $u$ is the limb-darkening coefficient (wavelength-dependent)

4. **Applications**:
   - Important for interpreting eclipsing binary light curves
   - Crucial for stellar interferometry
   - Used in exoplanet transit modeling

## Spectral Line Formation

### Basic Principles

Spectral lines form when photons interact with atoms, ions, or molecules in stellar atmospheres:

1. **Absorption Lines**:
   - Form when photons are absorbed by atoms in lower energy states
   - Appear as dark features against the continuous spectrum
   - Dominant in stellar photospheres

2. **Emission Lines**:
   - Form when excited atoms emit photons
   - Appear as bright features
   - Dominant in chromospheres, coronae, and nebulae

3. **Energy Levels and Transitions**:
   - Governed by quantum mechanics
   - Each element has a unique set of energy levels
   - Transitions between levels produce spectral lines at specific wavelengths
   - Selection rules determine which transitions are allowed

4. **Line Strength Factors**:
   - Abundance of the absorbing/emitting species
   - Excitation/ionization state (governed by temperature)
   - Transition probability (oscillator strength)
   - Line opacity relative to continuous opacity

### Line Opacity and Absorption Coefficient

The line absorption coefficient determines how effectively atoms absorb radiation at specific wavelengths:

1. **Line Absorption Coefficient**:
   - For a transition from lower level $l$ to upper level $u$:
   
   $$\kappa_\nu = \frac{\pi e^2}{m_e c} f_{lu} N_l \phi_\nu$$
   
   Where:
   - $e$ is electron charge
   - $m_e$ is electron mass
   - $f_{lu}$ is oscillator strength
   - $N_l$ is population of lower level
   - $\phi_\nu$ is line profile function

2. **Level Populations**:
   - In LTE, governed by the Boltzmann equation:
   
   $$\frac{N_l}{N_{\text{total}}} = \frac{g_l e^{-E_l/kT}}{\sum_i g_i e^{-E_i/kT}}$$
   
   Where:
   - $g_l$ is statistical weight of level $l$
   - $E_l$ is energy of level $l$
   - $k$ is Boltzmann's constant
   - $T$ is temperature

3. **Ionization Balance**:
   - Governed by the Saha equation:
   
   $$\frac{N_{i+1}N_e}{N_i} = \frac{2g_{i+1}}{g_i} \left(\frac{2\pi m_e kT}{h^2}\right)^{3/2} e^{-\chi_i/kT}$$
   
   Where:
   - $N_{i+1}/N_i$ is the ratio of ions to neutral atoms
   - $N_e$ is electron density
   - $\chi_i$ is ionization potential
   - Other symbols as previously defined

### Line Broadening Mechanisms

Several physical processes contribute to the broadening of spectral lines:

1. **Natural Broadening**:
   - Due to the finite lifetime of excited states (Heisenberg uncertainty principle)
   - Results in a Lorentzian profile
   - Typically small effect (~0.01 Å)
   - Intrinsic to the atomic transition

2. **Thermal (Doppler) Broadening**:
   - Due to random thermal motions of atoms
   - Results in a Gaussian profile
   - Width proportional to $\sqrt{T/A}$ where $A$ is atomic mass
   - Dominant in hot, low-density atmospheres

3. **Pressure (Collisional) Broadening**:
   - Due to collisions between atoms/ions
   - Results in a Lorentzian profile
   - Increases with pressure/density
   - More important in cool, dense atmospheres
   - Types include van der Waals, Stark, and resonance broadening

4. **Microturbulent Broadening**:
   - Due to small-scale turbulent motions
   - Results in a Gaussian profile
   - Parameterized by microturbulent velocity $\xi$
   - Typically 1-5 km/s in stellar photospheres

5. **Rotational Broadening**:
   - Due to stellar rotation
   - Different parts of the stellar disk have different line-of-sight velocities
   - Results in broadened, shallower lines
   - Width proportional to $v \sin i$ (projected rotational velocity)

6. **Macroturbulent Broadening**:
   - Due to large-scale velocity fields (convection, oscillations)
   - Doesn't affect equivalent width, only profile shape
   - Typically 1-10 km/s in stellar photospheres

### Voigt Profile

The combined effect of different broadening mechanisms produces the Voigt profile:

$$\phi_V(\nu) = \int_{-\infty}^{\infty} \phi_G(\nu') \phi_L(\nu-\nu') \, d\nu'$$

Where:
- $\phi_G$ is the Gaussian profile (thermal and microturbulent broadening)
- $\phi_L$ is the Lorentzian profile (natural and pressure broadening)

The Voigt profile has a Gaussian core and Lorentzian wings, capturing the behavior of real spectral lines.

### Curve of Growth

The curve of growth describes how line strength increases with abundance:

1. **Linear Part**:
   - For weak lines (optically thin)
   - Equivalent width proportional to abundance
   - Line is unsaturated

2. **Flat Part**:
   - For moderately strong lines (optically thick but narrow)
   - Equivalent width increases as square root of abundance
   - Line core is saturated, but wings are not

3. **Damping Part**:
   - For very strong lines (optically thick and broad)
   - Equivalent width increases as square root of abundance
   - Growth occurs in the damping wings

4. **Mathematical Expression**:
   - For weak lines: $W_\lambda \propto N f \lambda$
   - For saturated lines: $W_\lambda \propto \sqrt{\ln(N f \lambda)}$
   - For strong lines with damping wings: $W_\lambda \propto \sqrt{N f \lambda}$

Where:
- $W_\lambda$ is equivalent width
- $N$ is number density of absorbing atoms
- $f$ is oscillator strength
- $\lambda$ is wavelength

### Non-LTE Effects

Local Thermodynamic Equilibrium (LTE) is often a good approximation but breaks down in many situations:

1. **Departures from LTE**:
   - Level populations deviate from Boltzmann distribution
   - Ionization balance deviates from Saha equation
   - Radiation field deviates from Planck function

2. **Causes of Non-LTE Effects**:
   - Low density (collisions too infrequent to establish LTE)
   - Strong radiation fields (radiative rates dominate over collisional rates)
   - Large temperature gradients
   - Strong UV radiation fields

3. **Consequences for Spectral Lines**:
   - Line strengths can be significantly different from LTE predictions
   - Line profiles can be altered
   - Source function can vary with frequency across a line

4. **Important Cases**:
   - Resonance lines (e.g., Ca II H & K, Mg II h & k)
   - Lines from minority species (e.g., neutral atoms in hot stars)
   - Lines with upper levels connected to the ground state
   - Lines forming in chromospheres and coronae

## Spectroscopic Analysis Techniques

### Equivalent Width Measurement

The equivalent width is a fundamental measure of line strength:

1. **Definition**:
   - Width of a rectangular line with the same area as the actual line
   - Expressed mathematically as:
   
   $$W_\lambda = \int \frac{F_c - F_\lambda}{F_c} \, d\lambda$$
   
   Where:
   - $F_c$ is the continuum flux
   - $F_\lambda$ is the flux in the line

2. **Measurement Techniques**:
   - Direct integration
   - Gaussian or Voigt profile fitting
   - Multiple component fitting for blended lines

3. **Advantages**:
   - Independent of instrumental broadening
   - Relatively easy to measure
   - Directly related to the number of absorbing atoms

4. **Limitations**:
   - Loses information about line profile shape
   - Requires accurate continuum placement
   - Challenging for heavily blended lines

### Model Atmospheres

Model atmospheres provide the theoretical framework for interpreting stellar spectra:

1. **Basic Components**:
   - Temperature structure T(τ)
   - Pressure structure P(τ)
   - Density structure ρ(τ)
   - Chemical composition

2. **Types of Models**:
   - Theoretical models (e.g., ATLAS, MARCS, PHOENIX)
   - Semi-empirical models (e.g., Holweger-Müller, VAL)
   - 3D hydrodynamic models

3. **Model Assumptions**:
   - Plane-parallel vs. spherical geometry
   - Hydrostatic equilibrium
   - Radiative equilibrium (with convection in deeper layers)
   - LTE vs. non-LTE
   - Treatment of convection (mixing length theory)

4. **Model Parameters**:
   - Effective temperature (T_eff)
   - Surface gravity (log g)
   - Metallicity ([Fe/H])
   - Microturbulence (ξ)
   - Alpha-element enhancement ([α/Fe])

### Spectral Synthesis

Spectral synthesis involves calculating theoretical spectra from model atmospheres:

1. **Basic Procedure**:
   - Start with a model atmosphere
   - Calculate continuous opacity
   - Add line opacities for all relevant transitions
   - Solve radiative transfer equation
   - Compare with observed spectrum

2. **Required Atomic Data**:
   - Line wavelengths
   - Oscillator strengths (f-values)
   - Damping constants
   - Excitation potentials
   - Partition functions

3. **Synthesis Codes**:
   - MOOG, Turbospectrum, SYNTHE, SME
   - Differ in treatment of line formation, blending, and computational approach

4. **Applications**:
   - Abundance analysis
   - Determination of stellar parameters
   - Analysis of complex spectral regions
   - Study of isotopic ratios

### Abundance Analysis

Determining chemical abundances is a primary goal of stellar spectroscopy:

1. **Methods**:
   - Equivalent width analysis
   - Spectral synthesis fitting
   - Line-by-line differential analysis

2. **Procedure**:
   - Measure equivalent widths or synthesize spectral regions
   - Determine atmospheric parameters (T_eff, log g, ξ, [Fe/H])
   - Calculate abundances for individual lines
   - Average results for each element
   - Apply non-LTE corrections if necessary

3. **Abundance Scales**:
   - Absolute: log(N_X/N_H) + 12
   - Relative to solar: [X/H] = log(N_X/N_H)_star - log(N_X/N_H)_sun
   - Relative to iron: [X/Fe] = [X/H] - [Fe/H]

4. **Error Sources**:
   - Uncertainties in atmospheric parameters
   - Uncertainties in atomic data
   - Continuum placement errors
   - Model atmosphere limitations
   - Non-LTE effects
   - 3D effects

### Determination of Stellar Parameters

Spectroscopic analysis allows determination of fundamental stellar parameters:

1. **Effective Temperature**:
   - Excitation equilibrium of Fe I lines
   - Line-depth ratios
   - Balmer line profiles
   - Color-temperature relations
   - Spectral energy distribution fitting

2. **Surface Gravity**:
   - Ionization equilibrium (e.g., Fe I/Fe II)
   - Pressure-sensitive line wings (e.g., Mg I b, Ca I 6162Å)
   - Balmer jump
   - Parallax-based physical gravity

3. **Metallicity**:
   - Iron abundance [Fe/H]
   - Overall metal content Z
   - Calibrations based on line indices

4. **Microturbulence**:
   - Removing trend of Fe I abundance vs. equivalent width
   - Typically 1-2 km/s for dwarfs, 2-5 km/s for giants

5. **Rotation**:
   - Line profile fitting to determine v sin i
   - Fourier analysis of line profiles

6. **Iterative Approach**:
   - Parameters are interdependent
   - Iterative determination until consistency is achieved
   - Multiple diagnostics provide cross-checks

## Stellar Winds and Mass Loss

### Basic Properties of Stellar Winds

Stellar winds are outflows of material from stellar atmospheres:

1. **Key Parameters**:
   - Mass-loss rate (Ṁ): mass lost per unit time
   - Terminal velocity (v∞): maximum outflow speed
   - Wind density structure
   - Temperature structure

2. **Observational Signatures**:
   - P Cygni profiles (blueshifted absorption, redshifted emission)
   - Pure emission lines
   - Infrared and radio excess
   - X-ray emission (for hot winds)
   - UV resonance lines

3. **Typical Values**:
   - Solar wind: Ṁ ≈ 10⁻¹⁴ M☉/yr, v∞ ≈ 400-800 km/s
   - O stars: Ṁ ≈ 10⁻⁷-10⁻⁵ M☉/yr, v∞ ≈ 1000-3000 km/s
   - Red giants: Ṁ ≈ 10⁻¹⁰-10⁻⁵ M☉/yr, v∞ ≈ 10-30 km/s
   - Wolf-Rayet stars: Ṁ ≈ 10⁻⁵-10⁻⁴ M☉/yr, v∞ ≈ 1000-3000 km/s

### Driving Mechanisms

Different physical processes drive winds in different types of stars:

1. **Radiation-Driven Winds**:
   - Dominant in hot, luminous stars (O, B, A)
   - Momentum transfer from photons to ions via line absorption
   - Line-driven acceleration: g_rad ∝ L/r² × M(t)
   - Terminal velocity scales with escape velocity: v∞ ≈ 2.6 v_esc
   - Mass-loss rate scales with luminosity: Ṁ ∝ L^1.5-2.0

2. **Dust-Driven Winds**:
   - Dominant in cool giants and supergiants
   - Radiation pressure on dust grains
   - Requires cool temperatures for dust formation (T < 1500 K)
   - Dust grains drag gas through collisions
   - Terminal velocity much lower than in hot stars

3. **Coronal Winds**:
   - Thermal pressure-driven
   - Dominant in solar-type stars
   - Heated by magnetic processes in the corona
   - Parker wind solution
   - Much lower mass-loss rates than other mechanisms

4. **Other Mechanisms**:
   - Alfvén wave-driven winds
   - Pulsation-enhanced winds
   - Rotation-enhanced winds
   - Binary interaction

### P Cygni Profiles

P Cygni profiles are characteristic spectral features of stars with strong winds:

1. **Profile Components**:
   - Blueshifted absorption (from material moving toward observer)
   - Emission at and redward of line center (from material throughout the wind)
   - Combined profile resembles an emission line with blueshifted absorption

2. **Physical Interpretation**:
   - Absorption occurs only against the stellar disk
   - Emission occurs from the entire wind volume
   - Profile shape encodes wind velocity and density structure

3. **Diagnostic Value**:
   - Terminal velocity from blue edge of absorption
   - Mass-loss rate from profile strength
   - Acceleration region from shape of absorption component
   - Clumping from variability

### Mass Loss Across the H-R Diagram

Mass loss rates vary dramatically across different stellar types:

1. **Hot Massive Stars (O, B)**:
   - Strong line-driven winds
   - Ṁ ≈ 10⁻⁷-10⁻⁵ M☉/yr
   - Significant evolutionary impact
   - Enhanced near the Eddington limit
   - Metallicity dependent: Ṁ ∝ Z^0.7-0.8

2. **Wolf-Rayet Stars**:
   - Extremely strong winds
   - Ṁ ≈ 10⁻⁵-10⁻⁴ M☉/yr
   - Expose nuclear-processed material
   - Often show helium and nitrogen/carbon enhancement

3. **Cool Giants and Supergiants**:
   - Dust-driven winds
   - Ṁ increases along the AGB
   - Episodic mass-loss events
   - Critical for late evolutionary stages
   - Can reach 10⁻⁴ M☉/yr during superwind phase

4. **Solar-type Stars**:
   - Weak coronal winds
   - Ṁ ≈ 10⁻¹⁴-10⁻¹² M☉/yr
   - Minimal evolutionary impact
   - Angular momentum loss affects rotation and activity

### Evolutionary Implications

Mass loss has profound effects on stellar evolution:

1. **Massive Stars**:
   - Reduces final masses of stars
   - Affects supernova types and progenitors
   - Creates Wolf-Rayet stars
   - Determines which stars form black holes vs. neutron stars
   - Enriches interstellar medium with processed material

2. **Intermediate-Mass Stars**:
   - Determines final white dwarf masses
   - Creates planetary nebulae
   - Contributes significantly to galactic dust production
   - Returns processed material to the interstellar medium

3. **Low-Mass Stars**:
   - Angular momentum evolution
   - Magnetic activity evolution
   - Minimal effect on final masses

## Stellar Activity and Magnetic Fields

### Magnetic Field Generation

Stellar magnetic fields arise from dynamo processes:

1. **Solar-type Dynamo**:
   - α-Ω dynamo operating at the tachocline
   - Requires differential rotation and convection
   - Cyclical with period of years to decades
   - Produces global dipole/quadrupole field plus smaller-scale features

2. **Fully Convective Stars**:
   - No tachocline, different dynamo mechanism
   - Possibly α² dynamo throughout convection zone
   - Can produce strong fields despite different mechanism
   - Often less cyclical than solar-type dynamo

3. **Fossil Fields**:
   - Found in some A and B stars
   - Remnants from star formation process
   - Simple, stable configurations (often dipolar)
   - No significant generation or decay

4. **Dynamo Efficiency Factors**:
   - Rotation rate (faster rotation → stronger fields)
   - Convection zone depth
   - Differential rotation profile
   - Stellar mass and internal structure

### Magnetic Field Diagnostics

Several techniques allow measurement of stellar magnetic fields:

1. **Zeeman Effect**:
   - Splitting of spectral lines in a magnetic field
   - Displacement proportional to field strength and Landé g-factor
   - Direct measurement of field strength
   - Limited by stellar rotation (line broadening)

2. **Zeeman Doppler Imaging (ZDI)**:
   - Uses rotationally modulated polarization signatures
   - Reconstructs surface magnetic field topology
   - Requires high-resolution spectropolarimetry
   - Reveals complex field structures

3. **Proxies for Magnetic Activity**:
   - Ca II H & K emission (S-index, R'_HK)
   - Hα emission
   - X-ray luminosity (L_X/L_bol)
   - UV emission lines
   - Photometric variability

4. **Gyrochronology**:
   - Age determination based on rotation period
   - Magnetic braking causes predictable spin-down
   - Rotation period correlates with magnetic activity

### Activity Phenomena

Magnetic fields drive various activity phenomena in stellar atmospheres:

1. **Starspots**:
   - Analogous to sunspots
   - Regions of strong magnetic field and reduced temperature
   - Cause photometric variability
   - Can cover much larger fraction of surface than sunspots
   - Tracers of differential rotation and activity cycles

2. **Chromospheric Activity**:
   - Enhanced emission in Ca II H & K, Hα, Mg II h & k
   - Plage regions (bright chromospheric features)
   - Filaments and prominences
   - Varies with rotation and activity cycles

3. **Flares**:
   - Sudden energy releases from magnetic reconnection
   - Enhance emission across spectrum (especially UV and X-ray)
   - Range from small microflares to superflares
   - More frequent and energetic in young, rapidly rotating stars

4. **Coronal Activity**:
   - Hot (10⁶-10⁷ K) outer atmosphere
   - X-ray emission proportional to magnetic activity
   - Coronal mass ejections
   - Coronal holes and streamers

### Activity-Rotation-Age Relationship

Stellar activity follows well-defined relationships with rotation and age:

1. **Rotation-Activity Relation**:
   - Activity increases with rotation rate up to saturation
   - Often expressed as R'_HK or L_X/L_bol vs. Rossby number (P_rot/τ_conv)
   - Saturates at very rapid rotation

2. **Skumanich Relation**:
   - Rotation rate decreases with age: P_rot ∝ t^0.5
   - Activity decreases with age: R'_HK ∝ t^-0.5
   - Basis for gyrochronology age estimates

3. **Activity Cycles**:
   - Many stars show cyclical activity like the Sun
   - Cycle periods typically 2-20 years
   - Amplitude often correlates with mean activity level
   - Some stars show multiple cycles or irregular behavior

4. **Activity Across the H-R Diagram**:
   - Most pronounced along main sequence
   - Strongest in K and M dwarfs (deep convection zones)
   - Absent in A stars and hotter (no convection zones)
   - Enhanced in close binaries (tidal synchronization)

## Spectroscopic Binaries and Radial Velocity Variations

### Doppler Shifts and Radial Velocity

Spectral lines shift due to relative motion along the line of sight:

1. **Doppler Effect**:
   - Wavelength shift: Δλ/λ = v_r/c
   - Redshift for receding objects
   - Blueshift for approaching objects

2. **Radial Velocity Measurement**:
   - Cross-correlation with template spectra
   - Line centroid measurements
   - Precision depends on:
     - Spectral resolution
     - Signal-to-noise ratio
     - Number and sharpness of lines
     - Stellar rotation and activity

3. **Precision Limits**:
   - Inactive G dwarfs: ~1 m/s
   - Active stars: limited by activity "jitter" (5-100 m/s)
   - Rapid rotators: limited by line broadening

### Spectroscopic Binary Detection and Analysis

Binary stars can be detected and characterized through radial velocity variations:

1. **Radial Velocity Curve**:
   - Periodic variations due to orbital motion
   - For circular orbits: v_r = K sin(2πt/P) + γ
   - For eccentric orbits: more complex shape
   - γ is the systemic velocity
   - K is the semi-amplitude

2. **Orbital Parameters**:
   - Period (P)
   - Eccentricity (e)
   - Semi-amplitude (K)
   - Argument of periastron (ω)
   - Time of periastron passage (T₀)
   - Systemic velocity (γ)

3. **Mass Constraints**:
   - Mass function: f(m) = (m₂ sin i)³/(m₁ + m₂)² = PK³/(2πG)
   - For double-lined binaries: m₁/m₂ = K₂/K₁
   - Combined with other data (e.g., astrometry), can yield precise masses

4. **Special Cases**:
   - SB1: Single-lined spectroscopic binary
   - SB2: Double-lined spectroscopic binary
   - Composite spectra: can see both stars but no velocity variations (wide binaries)

### Exoplanet Detection

The same techniques apply to exoplanet detection, with smaller amplitudes:

1. **Radial Velocity Method**:
   - Star orbits the system's center of mass
   - Semi-amplitude: K = (2πG/P)^(1/3) m_p sin i / (m_s + m_p)^(2/3) / √(1-e²)
   - For m_p << m_s: K ≈ 28.4 m/s × (m_p/M_Jup) × (P/yr)^(-1/3) × (m_s/M_☉)^(-2/3) × sin i / √(1-e²)

2. **Typical Signals**:
   - Jupiter analog: K ≈ 12 m/s
   - Hot Jupiter: K ≈ 100-200 m/s
   - Super-Earth in habitable zone: K ≈ 1-2 m/s
   - Earth analog: K ≈ 0.1 m/s

3. **Challenges**:
   - Stellar activity can mimic or mask planetary signals
   - Long periods require long observational baselines
   - Multiple planets create complex signals

## Mathematical Framework

### The Equation of Radiative Transfer

The complete equation of radiative transfer in stellar atmospheres is:

$$\mu \frac{dI_\nu}{d\tau_\nu} = I_\nu - S_\nu$$

Where:
- $\mu = \cos\theta$ is the angle between the line of sight and the vertical
- $I_\nu$ is the specific intensity at frequency $\nu$
- $\tau_\nu$ is the optical depth at frequency $\nu$
- $S_\nu$ is the source function

In Local Thermodynamic Equilibrium (LTE), the source function equals the Planck function:

$$S_\nu = B_\nu(T) = \frac{2h\nu^3}{c^2} \frac{1}{e^{h\nu/kT} - 1}$$

### Moment Equations

The moments of the radiation field are:

1. **Mean Intensity**:
   $$J_\nu = \frac{1}{4\pi} \int I_\nu d\Omega = \frac{1}{2} \int_{-1}^{1} I_\nu d\mu$$

2. **Flux**:
   $$F_\nu = \int I_\nu \cos\theta d\Omega = 2\pi \int_{-1}^{1} I_\nu \mu d\mu$$

3. **Radiation Pressure**:
   $$P_\nu = \frac{1}{c} \int I_\nu \cos^2\theta d\Omega = \frac{2\pi}{c} \int_{-1}^{1} I_\nu \mu^2 d\mu$$

The first two moment equations are:

$$\frac{dF_\nu}{d\tau_\nu} = 4\pi(J_\nu - S_\nu)$$

$$\frac{dP_\nu}{d\tau_\nu} = \frac{F_\nu}{c}$$

### Line Formation Equations

The equivalent width of a spectral line is:

$$W_\lambda = \int \frac{F_c - F_\lambda}{F_c} d\lambda$$

For weak lines, the equivalent width is related to the number of absorbing atoms by:

$$W_\lambda = \frac{\pi e^2}{m_e c^2} \lambda^2 f N_l$$

Where:
- $f$ is the oscillator strength
- $N_l$ is the number of atoms in the lower level

The curve of growth relates equivalent width to abundance:

1. **Linear (weak line) regime**:
   $$W_\lambda \propto N f \lambda$$

2. **Flat (saturated) regime**:
   $$W_\lambda \propto \sqrt{\ln(N f \lambda)}$$

3. **Damping (strong line) regime**:
   $$W_\lambda \propto \sqrt{N f \lambda}$$

### Stellar Wind Equations

The momentum equation for a radiation-driven wind is:

$$v \frac{dv}{dr} = -\frac{GM_*}{r^2} + \frac{\sigma_e L_*}{4\pi r^2 c} (1 + M(t))$$

Where:
- $v$ is the wind velocity
- $r$ is the radial distance
- $G$ is the gravitational constant
- $M_*$ is the stellar mass
- $\sigma_e$ is the electron scattering opacity
- $L_*$ is the stellar luminosity
- $c$ is the speed of light
- $M(t)$ is the force multiplier due to line opacity

The mass-loss rate is related to the velocity and density by:

$$\dot{M} = 4\pi r^2 \rho(r) v(r)$$

## Practical Applications and Exercises

### Spectral Line Analysis

The analysis of spectral lines provides key information about stellar properties:

1. **Equivalent Width Measurement**:
   - Define continuum level
   - Integrate line profile
   - Calculate equivalent width: $W_\lambda = \int (1 - F_\lambda/F_c) d\lambda$

2. **Line Profile Fitting**:
   - Model line with appropriate profile (Gaussian, Lorentzian, Voigt)
   - Extract parameters: central wavelength, depth, width
   - Determine broadening contributions

3. **Abundance Determination**:
   - Measure equivalent widths for multiple lines
   - Use curve of growth or spectral synthesis
   - Calculate abundance for each line
   - Average results and determine uncertainties

### Worked Example: Temperature Determination

Let's determine the effective temperature of a star using the excitation equilibrium method:

Given:
- A set of Fe I lines with different excitation potentials (EP)
- Measured equivalent widths (EW)
- Initial guess: T_eff = 5500 K, log g = 4.0, [Fe/H] = 0.0, ξ = 1.0 km/s

Step 1: Calculate abundances for each line using a model atmosphere
- For each line, determine log(Fe/H) from its EW

Step 2: Plot log(Fe/H) vs. excitation potential
- If temperature is correct, there should be no trend
- If positive slope: temperature is too low
- If negative slope: temperature is too high

Step 3: Adjust temperature and recalculate
- Try T_eff = 5700 K
- Recalculate abundances
- Check slope of log(Fe/H) vs. EP

Step 4: Iterate until no trend is observed
- Final temperature: T_eff = 5650 K
- Uncertainty: approximately ±100 K

### Worked Example: Radial Velocity Curve Analysis

Let's analyze a spectroscopic binary from its radial velocity measurements:

Given:
- Radial velocity measurements over time for a single-lined spectroscopic binary
- Data shows periodic variations with semi-amplitude K = 35 km/s
- Period P = 10 days
- Eccentricity e = 0.2

Step 1: Calculate the mass function
- f(m) = PK³/(2πG) = (10 days)(35 km/s)³/(2π × 6.67 × 10⁻¹¹ m³/kg/s²)
- Convert units appropriately
- f(m) = 0.0426 M☉

Step 2: Estimate secondary mass for different inclinations
- Assume primary mass M₁ = 1.0 M☉
- For i = 90°: M₂ = 0.35 M☉
- For i = 60°: M₂ = 0.41 M☉
- For i = 30°: M₂ = 0.74 M☉

Step 3: Determine nature of secondary
- Mass range suggests K or M dwarf companion
- Check for secondary spectrum in red wavelengths
- Estimate flux ratio and check if detection is possible

## Practice Problems

1. A G2V star has the following Fe I lines measured in its spectrum:

   | Wavelength (Å) | EP (eV) | log(gf) | EW (mÅ) |
   |----------------|---------|---------|---------|
   | 5247.05        | 0.09    | -4.94   | 95.2    |
   | 5250.21        | 0.12    | -4.94   | 92.8    |
   | 5506.78        | 0.99    | -2.80   | 112.5   |
   | 5701.54        | 2.56    | -2.22   | 85.3    |
   | 5705.46        | 4.30    | -1.36   | 42.1    |
   | 5855.08        | 4.61    | -1.48   | 29.6    |
   | 6151.62        | 2.18    | -3.30   | 48.7    |
   | 6173.34        | 2.22    | -2.88   | 67.9    |
   | 6200.31        | 2.61    | -2.44   | 68.2    |
   | 6750.15        | 2.42    | -2.62   | 65.4    |

   a) Using a curve of growth approach, determine if these lines are in the linear, flat, or damping part of the curve of growth.
   b) Plot the equivalent widths against excitation potential. What does the trend suggest about the star's temperature?
   c) If you were to determine the microturbulence parameter, what additional plot would you make?

2. A stellar spectrum shows a P Cygni profile in the Hα line. The emission component is centered at the rest wavelength (6562.8 Å), while the absorption component extends to 6555.3 Å.
   a) Calculate the terminal velocity of the stellar wind.
   b) If the star has a radius of 15 R☉ and a mass of 20 M☉, estimate the escape velocity at the stellar surface.
   c) Compare the terminal velocity to the escape velocity. What does this tell you about the wind-driving mechanism?

3. A spectroscopic binary shows the following radial velocity measurements:

   | Phase | RV₁ (km/s) | RV₂ (km/s) |
   |-------|------------|------------|
   | 0.0   | +30        | -60        |
   | 0.25  | 0          | 0          |
   | 0.5   | -30        | +60        |
   | 0.75  | 0          | 0          |
   | 1.0   | +30        | -60        |

   a) Determine the mass ratio of the two stars.
   b) If the orbital period is 12.5 days and the orbit is circular, calculate the value of M₁sin³i and M₂sin³i.
   c) If the inclination is 60°, what are the actual masses of the two stars?

4. A stellar atmosphere model has the following parameters: T_eff = 5800 K, log g = 4.4, [Fe/H] = 0.0.
   a) Calculate the pressure scale height in the photosphere, assuming a mean molecular weight μ = 1.3.
   b) If the star has a radius of 1 R☉, what fraction of the stellar radius does the pressure scale height represent?
   c) How would the pressure scale height change for a K giant with T_eff = 4500 K and log g = 2.5?

5. The Ca II K line (3933.7 Å) in a solar-type star shows an emission core with a width of 0.35 Å.
   a) Using the Wilson-Bappu effect, estimate the absolute magnitude of the star, given that the relationship is approximately M_V = -15.0 log W₀ + 31.5, where W₀ is the width in Å.
   b) If the star has an apparent magnitude of V = 8.2, estimate its distance.
   c) Based on the emission strength, what can you infer about the star's chromospheric activity level compared to the Sun?

6. A stellar spectrum shows rotationally broadened lines with a projected rotational velocity v sin i = 40 km/s.
   a) If the star is a main sequence F5 star with radius 1.3 R☉, calculate the maximum possible rotation period.
   b) How would the spectral line profiles change if the inclination were 30° instead of 90°?
   c) What effect would this rotation have on the accuracy of abundance determinations?

7. An O-type star shows UV resonance lines with P Cygni profiles. The terminal velocity is measured to be 2500 km/s, and the mass-loss rate is estimated at 10⁻⁶ M☉/yr.
   a) Calculate the momentum flux in the wind (Ṁv∞).
   b) If the star has a luminosity of 3 × 10⁵ L☉, calculate the ratio Ṁv∞/(L/c), known as the wind momentum-luminosity ratio.
   c) What does this ratio tell you about the wind-driving mechanism?

8. A stellar atmosphere has a temperature of 6000 K and an electron pressure of 10 dyn/cm². Using the Saha equation, calculate the ratio of singly ionized to neutral iron atoms, given that the ionization potential of Fe I is 7.9 eV and the partition functions are U(Fe I) = 10 and U(Fe II) = 50.

## Summary and Connections

Stellar atmospheres and spectroscopy represent the critical interface between theoretical astrophysics and observational astronomy. The key concepts from this section include:

1. **Atmospheric Structure**:
   - Stellar atmospheres consist of distinct layers (photosphere, chromosphere, transition region, corona)
   - Temperature, pressure, and density vary systematically with height
   - Atmospheric extension depends on surface gravity and temperature

2. **Radiative Transfer**:
   - Radiation interacts with matter through absorption, emission, and scattering
   - The emergent spectrum encodes information about physical conditions throughout the atmosphere
   - The Eddington-Barbier relation connects observed intensity to conditions at specific optical depths

3. **Spectral Line Formation**:
   - Lines form through atomic transitions governed by quantum mechanics
   - Line profiles are shaped by various broadening mechanisms
   - Line strengths depend on abundance, excitation/ionization, and atmospheric conditions

4. **Spectroscopic Analysis**:
   - Model atmospheres provide the theoretical framework for interpretation
   - Equivalent widths and line profiles are the primary observables
   - Iterative techniques determine stellar parameters and chemical abundances

5. **Stellar Winds and Activity**:
   - Mass loss occurs across the H-R diagram through various mechanisms
   - Magnetic fields drive activity phenomena and influence atmospheric structure
   - Spectroscopic signatures reveal wind properties and activity levels

These concepts connect to other topics in astrophysics:
- **Stellar Evolution**: Spectroscopy reveals evolutionary state and drives evolutionary models
- **Nucleosynthesis**: Abundance patterns trace nuclear processes inside stars
- **Galactic Chemistry**: Stellar abundances map chemical evolution of galaxies
- **Exoplanets**: Spectroscopic techniques enable planet detection and characterization

Understanding stellar atmospheres and spectroscopy provides insight into:
- The physical conditions in stars
- The chemical composition of the universe
- The life cycles of stars and their impact on galactic evolution
- The fundamental atomic and molecular processes that govern cosmic matter

## Further Reading

1. Gray, D. F. (2005). "The Observation and Analysis of Stellar Photospheres." Cambridge University Press.

2. Hubeny, I., & Mihalas, D. (2014). "Theory of Stellar Atmospheres." Princeton University Press.

3. Rutten, R. J. (2003). "Radiative Transfer in Stellar Atmospheres." Utrecht University Lecture Notes.

4. Castor, J. I. (2004). "Radiation Hydrodynamics." Cambridge University Press.

5. Lamers, H. J. G. L. M., & Cassinelli, J. P. (1999). "Introduction to Stellar Winds." Cambridge University Press.

6. Schrijver, C. J., & Zwaan, C. (2000). "Solar and Stellar Magnetic Activity." Cambridge University Press.

7. Pradhan, A. K., & Nahar, S. N. (2011). "Atomic Astrophysics and Spectroscopy." Cambridge University Press.

8. Böhm-Vitense, E. (1989). "Introduction to Stellar Astrophysics, Volume 2: Stellar Atmospheres." Cambridge University Press.

9. Asplund, M. (2005). "New Generation Stellar Atmosphere Models." Annual Review of Astronomy and Astrophysics, 43, 481-530.

10. Gustafsson, B. (2007). "Is Spectroscopy Still a Valid Tool for Stellar Atmospheres?" Physica Scripta, T130, 014036.

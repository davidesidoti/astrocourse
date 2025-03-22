# Integration

## The Definite Integral as Accumulation

Integration is the mathematical process of accumulating quantities. While differentiation helps us understand rates of change, integration allows us to determine total amounts or accumulated effects—a concept fundamental to many astronomical phenomena.

### From Riemann Sums to Definite Integrals

The definite integral emerges from the concept of Riemann sums—adding up many small quantities to approximate a total amount.

Consider dividing an interval [a,b] into n subintervals, each with width Δx = (b-a)/n. If we evaluate a function f(x) at a point x₍i₎* in each subinterval and multiply by the width, we get a Riemann sum:

Riemann sum = Σ f(x₍i₎*) · Δx

As n approaches infinity and Δx approaches zero, this sum approaches the definite integral:

∫[a,b] f(x) dx = lim(n→∞) Σ f(x₍i₎*) · Δx

### Geometric Interpretation: Area Under a Curve

Geometrically, the definite integral ∫[a,b] f(x) dx represents the net area between the function f(x) and the x-axis from x = a to x = b, with areas below the x-axis counted as negative.

This interpretation is particularly useful in astronomy when calculating:
- Total energy received from a variable star over time
- Cumulative mass distribution in a galaxy
- Total distance traveled by a celestial body

### Physical Interpretation: Accumulation of Change

Physically, if f(x) represents a rate of change, then the definite integral ∫[a,b] f(x) dx represents the total change accumulated from x = a to x = b.

For example:
- If v(t) is velocity, then ∫[t₁,t₂] v(t) dt is the total displacement
- If dM/dr is the mass density profile of a star, then ∫[0,R] (dM/dr) dr is the total mass
- If dL/dλ is the spectral energy distribution, then ∫[λ₁,λ₂] (dL/dλ) dλ is the luminosity in that wavelength range

### Example: Total Energy from a Supernova

When a supernova occurs, its luminosity L(t) varies over time. The total energy released is:

E = ∫[0,∞] L(t) dt

In practice, we might use a model like:

L(t) = L₀ · e^(-t/τ)

where L₀ is the peak luminosity and τ is a characteristic decay time.

The total energy is then:

E = ∫[0,∞] L₀ · e^(-t/τ) dt = L₀ · τ

This calculation helps astronomers determine the explosion mechanism and the mass of the progenitor star.

## Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus establishes the relationship between differentiation and integration, showing that they are inverse processes.

### Part 1: Antiderivatives and Indefinite Integrals

If F(x) is an antiderivative of f(x), meaning F'(x) = f(x), then we write:

∫ f(x) dx = F(x) + C

where C is an arbitrary constant. This is called the indefinite integral of f(x).

### Part 2: Evaluating Definite Integrals

If f is continuous on [a,b] and F is any antiderivative of f, then:

∫[a,b] f(x) dx = F(b) - F(a)

This is often written using the notation:

∫[a,b] f(x) dx = [F(x)]ᵇₐ = F(b) - F(a)

### Example: Work Done Against Gravity

The work required to lift a mass m from Earth's surface to height h is:

W = ∫[0,h] F(r) dr

where F(r) = mg is the gravitational force (assuming h is small enough that g is approximately constant).

Using the Fundamental Theorem:

W = [mgr]ʰ₀ = mgh - 0 = mgh

For larger heights, we would use F(r) = GMm/r² and integrate from Earth's radius R to R+h.

### Example: Escape Velocity

The escape velocity from a celestial body can be derived using the work-energy principle and integration.

The work needed to move a mass m from the surface of a body (radius R) to infinity against gravity is:

W = ∫[R,∞] (GMm/r²) dr = GMm[1/r]ᴿ∞ = GMm/R

Setting this equal to the initial kinetic energy (1/2)mv², we get:

(1/2)mv² = GMm/R

Solving for v:

v = √(2GM/R)

This is the escape velocity formula, derived through integration.

## Integration Techniques

Various techniques help us evaluate integrals that aren't immediately solvable by the Fundamental Theorem.

### Basic Integration Rules

1. **Power Rule**: ∫ x^n dx = x^(n+1)/(n+1) + C, for n ≠ -1
2. **Exponential Rule**: ∫ e^x dx = e^x + C
3. **Logarithmic Rule**: ∫ 1/x dx = ln|x| + C
4. **Trigonometric Rules**:
   - ∫ sin(x) dx = -cos(x) + C
   - ∫ cos(x) dx = sin(x) + C
   - ∫ sec²(x) dx = tan(x) + C

### Integration by Substitution

Integration by substitution (also called u-substitution) is used when an integral contains a composite function.

The technique involves making a substitution u = g(x), which transforms the integral into a simpler form:

∫ f(g(x)) · g'(x) dx = ∫ f(u) du

### Example: Stellar Cooling Model

A simplified model for a cooling white dwarf star gives its temperature as:

T(t) = T₀ · (1 + t/τ)^(-1/4)

To find the average temperature over a time period [0,t₁], we compute:

T̄ = (1/t₁) · ∫[0,t₁] T₀ · (1 + t/τ)^(-1/4) dt

Using the substitution u = 1 + t/τ:
- du = (1/τ) dt
- t = τ(u - 1)
- When t = 0, u = 1
- When t = t₁, u = 1 + t₁/τ

The integral becomes:

T̄ = (T₀/t₁) · ∫[1,1+t₁/τ] u^(-1/4) · τ du = (T₀τ/t₁) · ∫[1,1+t₁/τ] u^(-1/4) du

Using the power rule:

T̄ = (T₀τ/t₁) · [u^(3/4) · (4/3)]₁¹⁺ᵗ¹/ᵗ = (4T₀τ/3t₁) · [(1 + t₁/τ)^(3/4) - 1]

This result helps astronomers understand the thermal evolution of white dwarfs.

### Integration by Parts

Integration by parts is based on the product rule for differentiation and is useful for integrals involving products of functions.

The formula is:

∫ u(x) · v'(x) dx = u(x) · v(x) - ∫ u'(x) · v(x) dx

where u(x) and v'(x) are functions we identify in the integrand.

### Example: Radiative Transfer Equation

In astrophysics, the radiative transfer equation often involves integrals of the form:

∫ x · e^(-x) dx

Using integration by parts with u(x) = x and v'(x) = e^(-x):
- u'(x) = 1
- v(x) = -e^(-x)

We get:

∫ x · e^(-x) dx = -x · e^(-x) - ∫ 1 · (-e^(-x)) dx = -x · e^(-x) + ∫ e^(-x) dx = -x · e^(-x) - e^(-x) + C = -(x+1) · e^(-x) + C

This type of integral appears when calculating radiative energy transport in stellar atmospheres.

### Trigonometric Substitution

Trigonometric substitution is useful for integrals involving expressions like √(a² - x²), √(a² + x²), or √(x² - a²).

For example, to evaluate ∫ 1/√(a² - x²) dx, we substitute x = a·sin(θ), which transforms the integral into a simpler trigonometric form.

### Example: Gravitational Potential of a Ring

The gravitational potential at a point on the axis of a uniform ring of mass M and radius a is:

Φ(z) = -GM/√(z² + a²)

To find the potential energy of a point mass m placed on this axis, we integrate:

U = m · ∫[z₁,z₂] -GM/√(z² + a²) dz

Using the substitution z = a·tan(θ):
- dz = a·sec²(θ) dθ
- √(z² + a²) = a·sec(θ)

The integral becomes:

U = -GMm · ∫[θ₁,θ₂] 1/(a·sec(θ)) · a·sec²(θ) dθ = -GMm · ∫[θ₁,θ₂] sec(θ) dθ = -GMm · [ln|sec(θ) + tan(θ)|]ᶿ²ᶿ¹

This technique is valuable for calculating gravitational effects of ring-like structures in astronomy, such as planetary rings or accretion disks.

### Partial Fractions

The method of partial fractions is used to integrate rational functions (ratios of polynomials) by decomposing them into simpler fractions.

For example, to integrate ∫ 1/(x²-1) dx, we decompose:

1/(x²-1) = 1/((x-1)(x+1)) = A/(x-1) + B/(x+1)

Finding A = 1/2 and B = -1/2, we get:

∫ 1/(x²-1) dx = (1/2) · ∫ 1/(x-1) dx - (1/2) · ∫ 1/(x+1) dx = (1/2) · ln|x-1| - (1/2) · ln|x+1| + C = (1/2) · ln|(x-1)/(x+1)| + C

### Example: Orbital Period Calculation

When calculating orbital periods in complex gravitational systems, we often encounter integrals that require partial fractions.

For instance, the period of an object in an elliptical orbit can be expressed as:

T = 2π · ∫[0,a] dr/√(2E/m + 2GM/r - L²/(m²r²))

where E is energy, L is angular momentum, and a is the semi-major axis.

This integral often requires partial fractions after appropriate substitutions.

## Improper Integrals

Improper integrals involve either infinite limits of integration or integrands that become infinite within the integration interval.

### Type 1: Infinite Limits

An improper integral with infinite limits is defined as a limit:

∫[a,∞] f(x) dx = lim(t→∞) ∫[a,t] f(x) dx

Similarly:

∫[-∞,b] f(x) dx = lim(t→-∞) ∫[t,b] f(x) dx

And:

∫[-∞,∞] f(x) dx = ∫[-∞,c] f(x) dx + ∫[c,∞] f(x) dx

for any value c.

### Example: Total Radiation from a Star

The total energy radiated by a star over its entire lifetime can be modeled as:

E = ∫[0,∞] L(t) dt

where L(t) is the luminosity as a function of time.

For a main-sequence star transitioning to a white dwarf, we might model:

L(t) = L₀ · (1 + t/τ)^(-α)

where α > 1 for the integral to converge.

Evaluating:

E = L₀ · ∫[0,∞] (1 + t/τ)^(-α) dt = L₀τ · ∫[1,∞] u^(-α) · (1/τ) du = L₀τ · [u^(1-α)/(1-α)]₁∞

If α > 1, this gives:

E = L₀τ/(α-1)

This calculation helps astronomers estimate the total energy output of stars throughout their evolution.

### Type 2: Discontinuous Integrands

If f(x) becomes infinite at a point c in [a,b], we define:

∫[a,b] f(x) dx = ∫[a,c-ε] f(x) dx + ∫[c+ε,b] f(x) dx

where we take the limit as ε approaches zero.

### Example: Gravitational Potential Energy

The gravitational potential energy between two point masses is:

U = -G · ∫[r₁,r₂] m₁m₂/r² dr

As r approaches zero, the integrand becomes infinite. This is an improper integral of Type 2.

Evaluating:

U = -Gm₁m₂ · [(-1/r)]ʳ²ʳ¹ = -Gm₁m₂ · (-1/r₂ + 1/r₁) = Gm₁m₂ · (1/r₂ - 1/r₁)

This formula is essential for calculating gravitational binding energies in astronomical systems.

## Applications in Astronomy

Let's explore some specific applications of integration in astronomy and astrophysics.

### Calculating Stellar Mass

The mass of a star can be determined by integrating its density profile:

M = ∫[0,R] 4πr² · ρ(r) dr

where ρ(r) is the density at radius r.

For a simplified model with ρ(r) = ρ₀ · (1 - r/R)^n, we get:

M = 4πρ₀ · ∫[0,R] r² · (1 - r/R)^n dr

Using the substitution u = r/R:

M = 4πρ₀R³ · ∫[0,1] u² · (1-u)^n du

This integral can be expressed in terms of the beta function, yielding:

M = 4πρ₀R³ · B(3, n+1) = 4πρ₀R³ · Γ(3)Γ(n+1)/Γ(n+4) = 4πρ₀R³ · 2!·n!/(n+3)!

For n = 0 (constant density), this gives M = (4/3)πρ₀R³, as expected.

### Gravitational Potential

The gravitational potential at a distance r from the center of a spherically symmetric mass distribution is:

Φ(r) = -G · [M(r)/r + 4π · ∫[r,R] ρ(r') · r' dr']

where M(r) is the mass enclosed within radius r.

This integral is crucial for understanding the gravitational fields of planets, stars, and galaxies.

### Light Curve Analysis

When a planet transits its star, the observed flux decreases. The total light blocked during the transit is:

ΔF = ∫[t₁,t₂] [F₀ - F(t)] dt

where F₀ is the unobscured flux and F(t) is the flux during transit.

This integral helps determine the planet's size, orbital parameters, and atmospheric properties.

### Cosmic Expansion

In cosmology, the proper distance to a galaxy at redshift z is:

d = c · ∫[0,z] dz'/H(z')

where H(z) is the Hubble parameter as a function of redshift.

For a universe containing matter and dark energy:

H(z) = H₀ · √[Ω_m(1+z)³ + Ω_Λ]

This integral is fundamental to measuring cosmic distances and understanding the expansion history of the universe.

### Orbital Mechanics

The time it takes for an object in an elliptical orbit to move from one true anomaly θ₁ to another θ₂ is:

Δt = ∫[θ₁,θ₂] (r²/h) dθ

where r is the radial distance and h is the specific angular momentum.

For an elliptical orbit:

r = p/(1 + e·cos(θ))

where p is the semi-latus rectum and e is the eccentricity.

This gives:

Δt = (p²/h) · ∫[θ₁,θ₂] dθ/[1 + e·cos(θ)]²

This integral appears in calculating orbital periods, transfer times, and mission planning for spacecraft.

## Concept Check: Integration

Let's test your understanding with some concept check questions:

1. **Question**: A star's luminosity decreases exponentially with time according to L(t) = L₀e^(-t/τ), where τ is a time constant. Find the total energy radiated from t = 0 to t = ∞.
   
   **Solution**: The total energy is:
   E = ∫[0,∞] L₀e^(-t/τ) dt = L₀ · ∫[0,∞] e^(-t/τ) dt = L₀ · [-τe^(-t/τ)]₀∞ = L₀ · [0 - (-τ)] = L₀τ
   
   This shows that the total energy output is proportional to both the initial luminosity and the time constant.

2. **Question**: The mass density of a spherical galaxy follows ρ(r) = ρ₀/(1 + r/a)², where a is a scale radius. Find the total mass within radius R.
   
   **Solution**: The mass is:
   M(R) = ∫[0,R] 4πr² · ρ₀/(1 + r/a)² dr = 4πρ₀ · ∫[0,R] r²/(1 + r/a)² dr
   
   Using the substitution u = 1 + r/a:
   M(R) = 4πρ₀a³ · ∫[1,1+R/a] (u-1)²/u² du = 4πρ₀a³ · ∫[1,1+R/a] (1 - 2/u + 1/u²) du
   
   Integrating:
   M(R) = 4πρ₀a³ · [u - 2ln(u) - 1/u]₁¹⁺ᴿ/ᵃ
   
   Simplifying:
   M(R) = 4πρ₀a³ · [(1+R/a) - 2ln(1+R/a) - 1/(1+R/a) - (1 - 2ln(1) - 1/1)]
   
   Since ln(1) = 0:
   M(R) = 4πρ₀a³ · [R/a - 2ln(1+R/a) + 1 - 1/(1+R/a)]
   
   This mass profile is used in modeling dark matter halos around galaxies.

3. **Question**: A spacecraft is moving away from Earth with velocity v(t) = v₀ · (1 - e^(-t/T)), where T is a time constant. How far will it travel in the first 3T units of time?
   
   **Solution**: The distance is:
   d = ∫[0,3T] v₀ · (1 - e^(-t/T)) dt = v₀ · [t + Te^(-t/T)]₀³ᵀ
   
   Evaluating:
   d = v₀ · [(3T + Te^(-3)) - (0 + T)] = v₀ · [3T - T + Te^(-3)] = v₀T · (2 + e^(-3))
   
   With e^(-3) ≈ 0.05:
   d ≈ 2.05v₀T
   
   This calculation is useful for mission planning and trajectory analysis.

## Math Helper: Integration Techniques

### Common Integrals Reference

| Function | Integral |
|----------|----------|
| x^n | x^(n+1)/(n+1) + C, for n ≠ -1 |
| 1/x | ln\|x\| + C |
| e^x | e^x + C |
| sin(x) | -cos(x) + C |
| cos(x) | sin(x) + C |
| tan(x) | -ln\|cos(x)\| + C |
| 1/√(a²-x²) | arcsin(x/a) + C |
| 1/(a²+x²) | (1/a)arctan(x/a) + C |
| 1/√(x²-a²) | ln\|x + √(x²-a²)\| + C |

### Integration Strategy

When faced with a complex integral, try these approaches in order:

1. **Look for direct formulas** from the common integrals table
2. **Try substitution** if the integrand contains a composite function
3. **Consider integration by parts** for products of functions
4. **Use trigonometric substitution** for expressions involving square roots
5. **Apply partial fractions** for rational functions
6. **Try trigonometric identities** to simplify trigonometric integrals
7. **Consider numerical integration** if analytical methods fail

### Tips for Evaluating Definite Integrals

1. **Find the antiderivative** first, then apply the Fundamental Theorem
2. **Check for symmetry**:
   - If f(-x) = f(x) (even function) and the interval is [-a,a], then ∫[-a,a] f(x) dx = 2∫[0,a] f(x) dx
   - If f(-x) = -f(x) (odd function) and the interval is [-a,a], then ∫[-a,a] f(x) dx = 0
3. **Break complex integrals** into simpler parts
4. **Be careful with improper integrals** - check for convergence
5. **Verify your answer** by taking the derivative of your antiderivative

## Summary: Integration

In this section, we've explored integration—the mathematical process of accumulation—and its applications in astronomy:

- The **definite integral** represents the accumulated change or the area under a curve, essential for calculating total energy, mass, or distance in astronomical contexts
- The **Fundamental Theorem of Calculus** connects differentiation and integration, allowing us to evaluate definite integrals using antiderivatives
- Various **integration techniques** (substitution, integration by parts, trigonometric substitution, partial fractions) help us solve complex integrals in astronomical calculations
- **Improper integrals** with infinite limits or discontinuous integrands appear frequently in astrophysics, such as when calculating total energy output or gravitational potentials
- **Applications in astronomy** include determining stellar mass distributions, analyzing light curves, understanding cosmic expansion, and calculating orbital parameters

Integration provides a powerful tool for understanding accumulated quantities and total effects in astronomical systems, complementing differentiation's focus on rates of change.

In the next section, we'll explore applications of integration, including area and volume calculations, center of mass, and probability distributions—all with relevant astronomical examples.

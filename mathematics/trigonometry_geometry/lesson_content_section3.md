# Trigonometry and Geometry in Astronomy: Section 3 - Mathematical Framework

## 3.1 Trigonometric Functions and Their Properties

Building on our conceptual understanding of trigonometric functions, we now explore their mathematical properties in greater depth. These properties are essential for solving complex astronomical problems involving periodic phenomena and geometric relationships.

### Definitions and Basic Properties

The six primary trigonometric functions—sine, cosine, tangent, cosecant, secant, and cotangent—are defined for any angle θ:

**Primary Functions:**
- sin(θ) = opposite / hypotenuse = y / r
- cos(θ) = adjacent / hypotenuse = x / r
- tan(θ) = opposite / adjacent = y / x = sin(θ) / cos(θ)

**Reciprocal Functions:**
- csc(θ) = 1 / sin(θ) = r / y
- sec(θ) = 1 / cos(θ) = r / x
- cot(θ) = 1 / tan(θ) = x / y = cos(θ) / sin(θ)

**Domain and Range:**
- sin(θ) and cos(θ) are defined for all real values of θ
- tan(θ) is undefined when cos(θ) = 0, which occurs at θ = 90° + n·180° (or π/2 + n·π in radians)
- csc(θ) is undefined when sin(θ) = 0, which occurs at θ = n·180° (or n·π in radians)
- sec(θ) is undefined when cos(θ) = 0, which occurs at θ = 90° + n·180° (or π/2 + n·π in radians)
- cot(θ) is undefined when sin(θ) = 0, which occurs at θ = n·180° (or n·π in radians)

**Range:**
- sin(θ) and cos(θ) have a range of [-1, 1]
- tan(θ) and cot(θ) have a range of (-∞, ∞)
- csc(θ) and sec(θ) have ranges of (-∞, -1] ∪ [1, ∞)

**Periodicity:**
- sin(θ + 2π) = sin(θ) — period of 2π (360°)
- cos(θ + 2π) = cos(θ) — period of 2π (360°)
- tan(θ + π) = tan(θ) — period of π (180°)
- csc(θ + 2π) = csc(θ) — period of 2π (360°)
- sec(θ + 2π) = sec(θ) — period of 2π (360°)
- cot(θ + π) = cot(θ) — period of π (180°)

### Graphs of Trigonometric Functions

The graphs of trigonometric functions visually represent their periodic nature and other key properties:

**Sine Function:**
- Oscillates smoothly between -1 and 1
- Crosses the x-axis at θ = n·π (or n·180°)
- Reaches maximum value of 1 at θ = π/2 + 2n·π (or 90° + n·360°)
- Reaches minimum value of -1 at θ = 3π/2 + 2n·π (or 270° + n·360°)
- Symmetric about the origin (odd function): sin(-θ) = -sin(θ)

**Cosine Function:**
- Oscillates smoothly between -1 and 1
- Crosses the x-axis at θ = π/2 + n·π (or 90° + n·180°)
- Reaches maximum value of 1 at θ = 2n·π (or n·360°)
- Reaches minimum value of -1 at θ = π + 2n·π (or 180° + n·360°)
- Symmetric about the y-axis (even function): cos(-θ) = cos(θ)

**Tangent Function:**
- Has vertical asymptotes at θ = π/2 + n·π (or 90° + n·180°)
- Crosses the x-axis at θ = n·π (or n·180°)
- Increases without bound as θ approaches asymptotes from below
- Decreases without bound as θ approaches asymptotes from above
- Symmetric about the origin (odd function): tan(-θ) = -tan(θ)

**Reciprocal Functions:**
- The graphs of csc(θ), sec(θ), and cot(θ) are the reciprocals of sin(θ), cos(θ), and tan(θ), respectively
- They have vertical asymptotes where their corresponding primary functions equal zero
- They never take values between -1 and 1

### Inverse Trigonometric Functions

Inverse trigonometric functions allow us to find the angle that corresponds to a given trigonometric value. They are essential for solving equations and performing coordinate transformations in astronomy:

**Definitions:**
- arcsin(x) or sin⁻¹(x): the angle θ such that sin(θ) = x
- arccos(x) or cos⁻¹(x): the angle θ such that cos(θ) = x
- arctan(x) or tan⁻¹(x): the angle θ such that tan(θ) = x
- arccsc(x) or csc⁻¹(x): the angle θ such that csc(θ) = x
- arcsec(x) or sec⁻¹(x): the angle θ such that sec(θ) = x
- arccot(x) or cot⁻¹(x): the angle θ such that cot(θ) = x

**Domains and Ranges:**
To ensure unique values, inverse trigonometric functions have restricted ranges:
- arcsin(x): domain [-1, 1], range [-π/2, π/2] (or [-90°, 90°])
- arccos(x): domain [-1, 1], range [0, π] (or [0°, 180°])
- arctan(x): domain (-∞, ∞), range (-π/2, π/2) (or (-90°, 90°))
- arccsc(x): domain (-∞, -1] ∪ [1, ∞), range [-π/2, 0) ∪ (0, π/2] (or [-90°, 0°) ∪ (0°, 90°])
- arcsec(x): domain (-∞, -1] ∪ [1, ∞), range [0, π/2) ∪ (π/2, π] (or [0°, 90°) ∪ (90°, 180°])
- arccot(x): domain (-∞, ∞), range (0, π) (or (0°, 180°))

**Special Function: atan2(y, x)**
The atan2(y, x) function is particularly useful in astronomy. It computes the angle in the correct quadrant based on the signs of both x and y:
- atan2(y, x) gives the angle θ in the range (-π, π] such that tan(θ) = y/x
- This function correctly handles cases where x = 0 and determines the appropriate quadrant
- Essential for coordinate transformations and vector angle calculations

### Trigonometric Equations

Trigonometric equations involve finding values of the unknown angle that satisfy a given condition. These equations are common in astronomical calculations:

**Basic Equations:**
- sin(θ) = a: θ = arcsin(a) + 2n·π or π - arcsin(a) + 2n·π (for |a| ≤ 1)
- cos(θ) = a: θ = ±arccos(a) + 2n·π (for |a| ≤ 1)
- tan(θ) = a: θ = arctan(a) + n·π

**Solving Strategies:**
1. Isolate the trigonometric function
2. Find the reference angle using inverse trigonometric functions
3. Determine all solutions within the desired range using periodicity and symmetry properties
4. Verify solutions by substitution

**Example:** Find all solutions to sin(2θ) = 0.5 in the range [0, 2π).
1. 2θ = arcsin(0.5) + 2n·π or π - arcsin(0.5) + 2n·π
2. 2θ = π/6 + 2n·π or 5π/6 + 2n·π
3. θ = π/12 + n·π or 5π/12 + n·π
4. In the range [0, 2π), the solutions are θ = π/12, 5π/12, 13π/12, and 17π/12

### Applications to Periodic Astronomical Phenomena

Trigonometric functions are ideal for modeling periodic phenomena in astronomy:

**Light Curves of Variable Stars:**
The brightness variation of many variable stars can be modeled using trigonometric functions:
- Brightness = A·sin(ωt + φ) + B
  Where A is the amplitude, ω is the angular frequency (2π/period), φ is the phase, and B is the mean brightness

**Planetary Positions:**
For approximately circular orbits, a planet's position can be described using:
- x = a·cos(nt)
- y = a·sin(nt)
  Where a is the orbital radius and n is the mean motion (2π/period)

**Stellar Oscillations:**
Many stars exhibit oscillations that can be modeled as combinations of trigonometric functions:
- Displacement = Σ Aₙ·sin(ωₙt + φₙ)
  Where each term represents a different oscillation mode

**Doppler Shifts:**
The periodic Doppler shift in spectral lines from binary stars follows a sinusoidal pattern:
- Δλ/λ = (v/c)·sin(ωt + φ)
  Where v is the orbital velocity component along the line of sight

## 3.2 Trigonometric Identities

Trigonometric identities are equations involving trigonometric functions that are true for all values of the variables (within their domains). These identities are powerful tools for simplifying complex expressions and solving problems in astronomy.

### Fundamental Identities

These basic relationships form the foundation for all other trigonometric identities:

**Pythagorean Identities:**
- sin²(θ) + cos²(θ) = 1
- 1 + tan²(θ) = sec²(θ)
- 1 + cot²(θ) = csc²(θ)

**Reciprocal Identities:**
- sin(θ) = 1/csc(θ)
- cos(θ) = 1/sec(θ)
- tan(θ) = 1/cot(θ)

**Quotient Identities:**
- tan(θ) = sin(θ)/cos(θ)
- cot(θ) = cos(θ)/sin(θ)

**Negative Angle Identities:**
- sin(-θ) = -sin(θ)
- cos(-θ) = cos(θ)
- tan(-θ) = -tan(θ)

### Sum and Difference Formulas

These identities relate trigonometric functions of sums or differences of angles to products of trigonometric functions:

**Sine Formulas:**
- sin(α + β) = sin(α)cos(β) + cos(α)sin(β)
- sin(α - β) = sin(α)cos(β) - cos(α)sin(β)

**Cosine Formulas:**
- cos(α + β) = cos(α)cos(β) - sin(α)sin(β)
- cos(α - β) = cos(α)cos(β) + sin(α)sin(β)

**Tangent Formulas:**
- tan(α + β) = [tan(α) + tan(β)]/[1 - tan(α)tan(β)]
- tan(α - β) = [tan(α) - tan(β)]/[1 + tan(α)tan(β)]

**Astronomical Applications:**
- Converting between coordinate systems
- Analyzing the combined effect of multiple periodic phenomena
- Calculating the position of a celestial object after a rotation or precession

### Double and Half-Angle Formulas

These identities relate trigonometric functions of double or half angles to functions of the original angle:

**Double-Angle Formulas:**
- sin(2θ) = 2sin(θ)cos(θ)
- cos(2θ) = cos²(θ) - sin²(θ) = 2cos²(θ) - 1 = 1 - 2sin²(θ)
- tan(2θ) = 2tan(θ)/[1 - tan²(θ)]

**Half-Angle Formulas:**
- sin(θ/2) = ±√[(1 - cos(θ))/2]  (sign depends on the quadrant of θ/2)
- cos(θ/2) = ±√[(1 + cos(θ))/2]  (sign depends on the quadrant of θ/2)
- tan(θ/2) = (1 - cos(θ))/sin(θ) = sin(θ)/(1 + cos(θ))

**Astronomical Applications:**
- Analyzing harmonic relationships in orbital resonances
- Calculating positions at half or double the original time interval
- Simplifying complex trigonometric expressions in orbital mechanics

### Product-to-Sum and Sum-to-Product Formulas

These identities convert products of trigonometric functions to sums, or vice versa:

**Product-to-Sum Formulas:**
- sin(α)sin(β) = [cos(α - β) - cos(α + β)]/2
- cos(α)cos(β) = [cos(α - β) + cos(α + β)]/2
- sin(α)cos(β) = [sin(α + β) + sin(α - β)]/2

**Sum-to-Product Formulas:**
- sin(α) + sin(β) = 2sin[(α + β)/2]cos[(α - β)/2]
- sin(α) - sin(β) = 2cos[(α + β)/2]sin[(α - β)/2]
- cos(α) + cos(β) = 2cos[(α + β)/2]cos[(α - β)/2]
- cos(α) - cos(β) = -2sin[(α + β)/2]sin[(α - β)/2]

**Astronomical Applications:**
- Analyzing beat phenomena in astronomical signals
- Simplifying complex expressions in perturbation theory
- Decomposing complex periodic signals into simpler components

### Applications in Astronomical Calculations

Trigonometric identities are essential tools for numerous astronomical calculations:

**Coordinate Transformations:**
When converting between coordinate systems, trigonometric identities simplify the calculations. For example, converting from equatorial to ecliptic coordinates involves rotations that use sum and difference formulas.

**Orbital Dynamics:**
Kepler's equation, which relates mean anomaly (M) to eccentric anomaly (E), can be expanded as a series using trigonometric identities:
M = E - e·sin(E) = E - e·sin(E) + e²·sin(2E)/2 - ...

**Signal Analysis:**
Astronomical signals often contain multiple periodic components. Trigonometric identities help separate and analyze these components:
- Beat phenomena: When two signals with slightly different frequencies combine, the result exhibits beats with frequency equal to the difference of the original frequencies
- Fourier analysis: Decomposes complex signals into sums of sine and cosine functions with different frequencies

**Precession Calculations:**
Earth's precession causes a gradual change in the orientation of its rotational axis. Calculating the effect on celestial coordinates involves rotations that use trigonometric sum and difference formulas.

## 3.3 Triangle Trigonometry

Triangle trigonometry provides powerful tools for solving problems involving triangles, which are common in astronomical measurements and calculations.

### Law of Sines

The law of sines relates the sides of a triangle to the sines of the opposite angles:

**Formula:**
sin(A)/a = sin(B)/b = sin(C)/c

Where A, B, and C are the angles of the triangle, and a, b, and c are the lengths of the sides opposite to these angles, respectively.

**Proof:**
The area of a triangle can be expressed as (1/2)·b·c·sin(A) or (1/2)·a·c·sin(B) or (1/2)·a·b·sin(C). Equating these expressions and simplifying leads to the law of sines.

**Conditions for Use:**
- Works for any triangle (not just right triangles)
- Particularly useful when you know:
  - Two angles and one side (AAS or ASA)
  - Two sides and the angle opposite one of them (SSA, but this can lead to ambiguous cases)

**Ambiguous Case (SSA):**
When given two sides and the angle opposite one of them, there may be:
- No solution (if the given side is too short)
- One solution (if the angle is 90° or the given side equals the other side)
- Two solutions (if the given side is long enough but not too long)

**Astronomical Applications:**
- Triangulation for distance measurements
- Determining the position of a celestial object from multiple observations
- Analyzing the geometry of binary star systems

### Law of Cosines

The law of cosines relates the square of one side of a triangle to the squares of the other sides and the cosine of the included angle:

**Formulas:**
- c² = a² + b² - 2ab·cos(C)
- b² = a² + c² - 2ac·cos(B)
- a² = b² + c² - 2bc·cos(A)

**Proof:**
Using the distance formula in Cartesian coordinates and the definition of the cosine function.

**Conditions for Use:**
- Works for any triangle (not just right triangles)
- Particularly useful when you know:
  - Three sides (SSS)
  - Two sides and the included angle (SAS)

**Special Case:**
When C = 90° (right triangle), the law of cosines reduces to the Pythagorean theorem: c² = a² + b²

**Astronomical Applications:**
- Calculating distances between celestial objects
- Determining the third side of a triangle when two sides and the included angle are known
- Finding angles in triangulation problems

### Area of a Triangle

There are several formulas for calculating the area of a triangle, each useful in different situations:

**Basic Formula:**
Area = (1/2)·base·height

**Using Sine:**
Area = (1/2)·a·b·sin(C) = (1/2)·b·c·sin(A) = (1/2)·a·c·sin(B)

**Heron's Formula:**
Area = √[s(s-a)(s-b)(s-c)]
Where s = (a+b+c)/2 is the semi-perimeter of the triangle.

**Using Coordinates:**
For a triangle with vertices at (x₁, y₁), (x₂, y₂), and (x₃, y₃):
Area = (1/2)|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|

**Astronomical Applications:**
- Calculating the area swept by a radius vector in Kepler's second law
- Determining the area of sky covered by a constellation or survey
- Analyzing the geometry of three-body systems

### Solution of Triangles

"Solving" a triangle means finding all its sides and angles given sufficient initial information. The approach depends on what information is available:

**Given Three Sides (SSS):**
1. Use the law of cosines to find the angles:
   cos(A) = (b² + c² - a²)/(2bc)
   cos(B) = (a² + c² - b²)/(2ac)
   cos(C) = (a² + b² - c²)/(2ab)
2. Verify that A + B + C = 180°

**Given Two Angles and One Side (AAS or ASA):**
1. Find the third angle: C = 180° - A - B
2. Use the law of sines to find the unknown sides:
   a = (sin(A)/sin(C))·c
   b = (sin(B)/sin(C))·c

**Given Two Sides and the Included Angle (SAS):**
1. Use the law of cosines to find the third side:
   c² = a² + b² - 2ab·cos(C)
2. Use the law of sines to find the remaining angles:
   sin(A) = (a·sin(C))/c
   sin(B) = (b·sin(C))/c

**Given Two Sides and the Angle Opposite One of Them (SSA):**
1. Use the law of sines to find the angle opposite the other given side:
   sin(B) = (b·sin(A))/a
2. Check for the ambiguous case (there may be 0, 1, or 2 solutions)
3. Find the third angle: C = 180° - A - B
4. Use the law of sines to find the third side:
   c = (sin(C)/sin(A))·a

**Astronomical Applications:**
- Determining the distance to a celestial object using parallax
- Calculating the orbital parameters of binary stars
- Finding the position of a celestial object from multiple observations

## 3.4 Spherical Trigonometry

Spherical trigonometry deals with triangles on the surface of a sphere, where the sides are arcs of great circles. This branch of mathematics is essential for astronomy, as celestial objects are projected onto the celestial sphere.

### Spherical Triangles

A spherical triangle consists of three great circle arcs on the surface of a sphere:

**Properties:**
- The sum of the angles exceeds 180° (the excess depends on the triangle's area)
- The sum of any two sides is greater than the third side
- Each side is less than 180° (π radians)
- The area is proportional to the angular excess: Area = R²(A + B + C - π)
  Where R is the radius of the sphere, and A, B, C are the angles in radians

**Notation:**
- Angles are typically denoted by capital letters (A, B, C)
- Sides are typically denoted by lowercase letters (a, b, c)
- Sides are measured as angles subtended at the center of the sphere (in degrees or radians)

### Spherical Law of Sines

The spherical law of sines relates the sines of the angles to the sines of the opposite sides:

**Formula:**
sin(A)/sin(a) = sin(B)/sin(b) = sin(C)/sin(c)

Note the similarity to the planar law of sines, but with sines of both angles and sides.

**Astronomical Applications:**
- Converting between different celestial coordinate systems
- Calculating great circle distances on the celestial sphere
- Determining the position of a celestial object from multiple observations

### Spherical Law of Cosines

The spherical law of cosines relates the cosine of one side to the cosines of the other sides and the sine of the included angle:

**Formulas for Sides:**
- cos(c) = cos(a)cos(b) + sin(a)sin(b)cos(C)
- cos(b) = cos(a)cos(c) + sin(a)sin(c)cos(B)
- cos(a) = cos(b)cos(c) + sin(b)sin(c)cos(A)

**Formulas for Angles:**
- cos(C) = -cos(A)cos(B) + sin(A)sin(B)cos(c)
- cos(B) = -cos(A)cos(C) + sin(A)sin(C)cos(b)
- cos(A) = -cos(B)cos(C) + sin(B)sin(C)cos(a)

**Astronomical Applications:**
- Calculating angular distances between celestial objects
- Converting between horizontal and equatorial coordinates
- Determining the position of a celestial object at a specific time

### Great Circles and Small Circles

Great circles and small circles are fundamental concepts in spherical geometry:

**Great Circles:**
- A great circle is the intersection of a sphere with a plane passing through its center
- Great circles represent the shortest path between two points on a sphere
- Examples in astronomy include the celestial equator, the ecliptic, and hour circles

**Small Circles:**
- A small circle is the intersection of a sphere with a plane that does not pass through its center
- Small circles have a smaller radius than the sphere
- Examples in astronomy include parallels of declination (except the celestial equator) and almucantars (circles of equal altitude)

**Astronomical Applications:**
- Great circle routes for satellite orbits
- Determining the shortest angular distance between celestial objects
- Analyzing the paths of celestial objects across the sky

### Applications in Celestial Navigation and Coordinate Conversion

Spherical trigonometry is essential for celestial navigation and coordinate transformations:

**Celestial Navigation:**
- The navigational triangle connects the observer's zenith, the celestial pole, and a celestial object
- Using spherical trigonometry, navigators can determine their position on Earth from observations of celestial objects
- The process involves measuring the altitude of a celestial object and using the time of observation to calculate the geographic position

**Coordinate Conversions:**
Transforming between different celestial coordinate systems involves solving spherical triangles:

1. **Horizontal to Equatorial:**
   - The spherical triangle connects the zenith, the celestial pole, and the celestial object
   - Using the observer's latitude, the object's altitude and azimuth, and the local sidereal time, we can calculate the object's right ascension and declination

2. **Equatorial to Ecliptic:**
   - The spherical triangle connects the celestial pole, the ecliptic pole, and the celestial object
   - Using the object's right ascension and declination, and the obliquity of the ecliptic, we can calculate the object's ecliptic longitude and latitude

3. **Equatorial to Galactic:**
   - The spherical triangle connects the celestial pole, the galactic pole, and the celestial object
   - Using the object's right ascension and declination, and the coordinates of the galactic pole and center, we can calculate the object's galactic longitude and latitude

## 3.5 Vector Geometry

Vector geometry provides a powerful framework for analyzing three-dimensional relationships in astronomy. Vectors represent quantities with both magnitude and direction, making them ideal for describing positions, velocities, and forces in space.

### Vectors in 2D and 3D Space

A vector is a mathematical object with both magnitude (length) and direction:

**Representation:**
- In 2D: v = (vₓ, vᵧ) or v = vₓî + vᵧĵ
- In 3D: v = (vₓ, vᵧ, vᵣ) or v = vₓî + vᵧĵ + vᵣk̂

Where î, ĵ, and k̂ are unit vectors along the x, y, and z axes, respectively.

**Magnitude:**
- In 2D: |v| = √(vₓ² + vᵧ²)
- In 3D: |v| = √(vₓ² + vᵧ² + vᵣ²)

**Unit Vector:**
A unit vector has a magnitude of 1 and points in the direction of the original vector:
v̂ = v/|v|

**Vector Addition and Subtraction:**
- Addition: v + w = (vₓ + wₓ, vᵧ + wᵧ, vᵣ + wᵣ)
- Subtraction: v - w = (vₓ - wₓ, vᵧ - wᵧ, vᵣ - wᵣ)

**Scalar Multiplication:**
c·v = (c·vₓ, c·vᵧ, c·vᵣ)

**Astronomical Applications:**
- Representing positions of celestial objects
- Describing velocities and accelerations
- Analyzing forces in gravitational systems
- Specifying directions for telescope pointing

### Dot Product and Cross Product

The dot product and cross product are two ways to multiply vectors, each with distinct geometric interpretations:

**Dot Product (Scalar Product):**
- Definition: v·w = |v|·|w|·cos(θ) = vₓwₓ + vᵧwᵧ + vᵣwᵣ
- Result is a scalar (number)
- Geometric interpretation: Projection of one vector onto another
- Properties:
  - Commutative: v·w = w·v
  - Distributive: v·(w + u) = v·w + v·u
  - v·v = |v|²
  - v·w = 0 if v and w are perpendicular

**Cross Product (Vector Product):**
- Definition: v × w = |v|·|w|·sin(θ)·n̂
  Where n̂ is a unit vector perpendicular to both v and w, following the right-hand rule
- In component form:
  v × w = (vᵧwᵣ - vᵣwᵧ)î + (vᵣwₓ - vₓwᵣ)ĵ + (vₓwᵧ - vᵧwₓ)k̂
- Result is a vector
- Geometric interpretation: A vector perpendicular to both input vectors, with magnitude equal to the area of the parallelogram formed by them
- Properties:
  - Anti-commutative: v × w = -(w × v)
  - Distributive: v × (w + u) = v × w + v × u
  - v × v = 0
  - |v × w| = |v|·|w|·sin(θ)

**Astronomical Applications:**
- Dot product: Work done by forces, projection of one vector onto another
- Cross product: Angular momentum, torque, area calculations

### Vector Applications in Orbital Mechanics

Vectors are particularly useful in orbital mechanics:

**Position and Velocity Vectors:**
- The position vector r points from the central body to the orbiting body
- The velocity vector v is tangent to the orbit and perpendicular to the radial direction for circular orbits

**Angular Momentum:**
- The specific angular momentum h = r × v is constant for a body in a Keplerian orbit
- The angular momentum vector is perpendicular to the orbital plane
- The magnitude of h determines the shape of the orbit: h = √(μa(1-e²))
  Where μ is the gravitational parameter, a is the semi-major axis, and e is the eccentricity

**Orbital Elements:**
- The eccentricity vector e points from the central body toward periapsis (closest approach)
- The node vector n points toward the ascending node (where the orbit crosses the reference plane)
- These vectors help define the orientation of the orbit in space

**Perturbations:**
- Vector analysis simplifies the calculation of perturbations due to additional forces
- The change in velocity can be calculated as Δv = F·Δt/m
  Where F is the perturbing force, Δt is the time interval, and m is the mass

### Angular Momentum as a Vector Quantity

Angular momentum is a fundamental vector quantity in astronomy:

**Definition:**
- For a point mass: L = r × p = r × mv
- For a system of particles: L = Σ rᵢ × pᵢ

**Properties:**
- Direction: Perpendicular to both r and v, following the right-hand rule
- Conservation: Angular momentum is conserved in the absence of external torques
- Relation to rotation: L = I·ω for rigid body rotation
  Where I is the moment of inertia and ω is the angular velocity vector

**Astronomical Applications:**
- Planetary orbits: The angular momentum vector determines the orbital plane
- Stellar rotation: Stars rotate around their angular momentum vector
- Accretion disks: Form perpendicular to the angular momentum vector
- Galaxy formation: The angular momentum of the initial gas cloud determines the galaxy's rotation

### Vector Fields in Astrophysics

Vector fields assign a vector to each point in space, representing quantities like gravitational fields, magnetic fields, or fluid flows:

**Gravitational Field:**
- The gravitational field g at a point is the gravitational force per unit mass
- For a point mass M: g = -GM·r̂/r²
  Where G is the gravitational constant, r is the distance, and r̂ is the unit vector pointing from the mass to the point

**Magnetic Field:**
- Magnetic fields B play crucial roles in many astrophysical phenomena
- The Lorentz force on a charged particle is F = q(E + v × B)
  Where q is the charge, E is the electric field, and v is the particle's velocity

**Velocity Field:**
- In fluid dynamics, the velocity field v(r, t) describes the motion of a fluid
- The continuity equation ∇·(ρv) + ∂ρ/∂t = 0 expresses mass conservation
  Where ρ is the density and ∇· is the divergence operator

**Vector Calculus Operations:**
- Gradient (∇f): Points in the direction of maximum increase of a scalar field f
- Divergence (∇·v): Measures the net outflow of a vector field v from a small volume
- Curl (∇×v): Measures the rotation or circulation of a vector field v
- Laplacian (∇²f): Measures the difference between the value of f at a point and its average value on a small surrounding sphere

**Astronomical Applications:**
- Gravitational potential and force calculations
- Electromagnetic phenomena in astrophysical plasmas
- Fluid dynamics in stellar interiors and atmospheres
- Magnetohydrodynamics in accretion disks and stellar winds

The mathematical framework presented in this section provides the tools needed to analyze and solve a wide range of astronomical problems. In the next section, we'll apply these concepts to worked examples that demonstrate their practical use in astronomy.

# Trigonometry and Geometry in Astronomy: Section 4 - Worked Examples

## 4.1 Calculating Stellar Distances Using Parallax

Parallax is one of the most fundamental methods for determining distances to nearby stars. It relies on basic trigonometric principles and provides the foundation for the cosmic distance ladder.

### Parallax Principle and Small-Angle Approximation

Stellar parallax is the apparent shift in a star's position as viewed from different points in Earth's orbit around the Sun.

**Basic Principle:**
1. Observe a nearby star's position relative to distant background stars
2. Wait six months for Earth to move to the opposite side of its orbit
3. Observe the star's position again
4. Measure the apparent angular shift (parallax angle)
5. Calculate the distance using trigonometry

**Geometric Setup:**
- The baseline is Earth's orbit diameter (2 AU, where 1 AU = ~149.6 million km)
- The parallax angle (p) is half the total angular shift observed over six months
- The distance (d) to the star is related to the parallax angle by: d = 1/p (when p is measured in arcseconds and d is in parsecs)

**Small-Angle Approximation:**
For very small angles (like stellar parallax angles), we can use the small-angle approximation:
- sin(θ) ≈ tan(θ) ≈ θ (when θ is in radians)

This simplifies our calculations considerably. The parallax formula becomes:
- d (in parsecs) = 1/p (in arcseconds)

**Definition of Parsec:**
A parsec (pc) is the distance at which a star would have a parallax of 1 arcsecond. This works out to:
- 1 parsec = 3.26 light-years = 3.09 × 10^16 meters

### Setting up the Trigonometric Relationship

Let's derive the relationship between parallax angle and distance:

1. Consider a right triangle formed by:
   - The Sun at one vertex
   - The Earth at another vertex
   - The star at the third vertex

2. The angle at the star is the parallax angle (p)
3. The side opposite to this angle is the Earth-Sun distance (1 AU)
4. The hypotenuse is the Sun-star distance (d)

Using the definition of sine:
- sin(p) = opposite / hypotenuse = 1 AU / d

For small angles (using the small-angle approximation):
- p (in radians) ≈ 1 AU / d

Converting to arcseconds (1 radian = 206,265 arcseconds):
- p (in arcseconds) ≈ 206,265 × (1 AU / d)

Rearranging to solve for d:
- d (in AU) ≈ 206,265 / p (in arcseconds)

If we define 1 parsec as the distance where p = 1 arcsecond:
- 1 parsec = 206,265 AU
- d (in parsecs) = 1 / p (in arcseconds)

### Calculating Distance from Parallax Angle

**Example 1: Proxima Centauri**

Proxima Centauri, the nearest star to our solar system, has a measured parallax of 0.7687 arcseconds.

To calculate its distance:
- d = 1 / p = 1 / 0.7687 = 1.301 parsecs
- Converting to light-years: 1.301 pc × 3.26 ly/pc = 4.24 light-years

**Example 2: Sirius**

Sirius, the brightest star in our night sky, has a parallax of 0.3792 arcseconds.

To calculate its distance:
- d = 1 / p = 1 / 0.3792 = 2.637 parsecs
- Converting to light-years: 2.637 pc × 3.26 ly/pc = 8.60 light-years

**Example 3: Vega**

Vega has a parallax of 0.1306 arcseconds.

To calculate its distance:
- d = 1 / p = 1 / 0.1306 = 7.657 parsecs
- Converting to light-years: 7.657 pc × 3.26 ly/pc = 24.96 light-years

### Error Analysis and Limitations

**Sources of Error:**
1. **Measurement Precision**: Even with modern instruments like the Gaia space telescope, there are limits to the precision of parallax measurements.
2. **Atmospheric Effects**: For ground-based observations, Earth's atmosphere introduces distortions.
3. **Proper Motion**: Stars move through space, which can complicate parallax measurements over time.
4. **Reference Frame**: The "fixed" background stars used as reference points also have tiny parallaxes.

**Quantifying Uncertainty:**
If a star has a parallax of p ± σp (where σp is the uncertainty in the parallax measurement), the uncertainty in the distance is:
- σd = σp / p² (for small relative errors)

**Example:** If Vega's parallax is 0.1306 ± 0.0002 arcseconds, the uncertainty in its distance is:
- σd = 0.0002 / (0.1306)² = 0.0002 / 0.0171 = 0.0117 parsecs
- Relative error: 0.0117 / 7.657 = 0.0015 or 0.15%

**Distance Limitations:**
The precision of parallax measurements limits the distances that can be reliably measured:
- Hipparcos satellite (1989-1993): Reliable to ~100 parsecs
- Gaia satellite (2013-present): Reliable to ~10,000 parsecs
- For more distant objects, other methods in the cosmic distance ladder must be used

### Extension to the Cosmic Distance Ladder

Parallax measurements provide the crucial first rung of the cosmic distance ladder, allowing astronomers to calibrate other distance measurement techniques:

**Spectroscopic Parallax:**
1. Determine a star's spectral type and luminosity class
2. Compare its apparent brightness to the known absolute brightness for stars of that type
3. Calculate distance using the inverse square law of light

**Standard Candles:**
1. Identify objects with known intrinsic brightness (like Cepheid variables or Type Ia supernovae)
2. Calibrate their intrinsic brightness using parallax measurements of nearby examples
3. Use these calibrated standard candles to measure distances to far more distant objects

**Example: Cepheid Variable Calibration**
1. Measure parallaxes for nearby Cepheid variables
2. Establish the period-luminosity relationship
3. Observe Cepheid variables in distant galaxies
4. Use the period-luminosity relationship to determine their absolute magnitudes
5. Compare with apparent magnitudes to calculate distances

This chain of methods, starting with parallax, allows astronomers to measure distances across the universe, from our stellar neighborhood to the most distant galaxies.

## 4.2 Analyzing Telescope Optics

Telescopes are the primary observational tools in astronomy. Understanding their optical principles using trigonometry and geometry is essential for designing, using, and interpreting data from these instruments.

### Ray Tracing Using Trigonometry

Ray tracing is a geometric technique for analyzing how light travels through optical systems. It uses trigonometry to track the paths of light rays as they reflect off mirrors or refract through lenses.

**Basic Principles:**
1. **Law of Reflection**: The angle of incidence equals the angle of reflection
   - θᵢ = θᵣ
   - Both angles are measured from the normal to the surface

2. **Snell's Law of Refraction**: The ratio of the sines of the angles of incidence and refraction equals the ratio of the refractive indices
   - n₁sin(θ₁) = n₂sin(θ₂)
   - Where n₁ and n₂ are the refractive indices of the two media

**Ray Tracing Steps for a Reflecting Telescope:**
1. Draw incoming parallel light rays (from a distant object)
2. Calculate the angle of incidence at each point on the primary mirror
3. Apply the law of reflection to determine the reflected ray direction
4. Trace the path to the secondary mirror (if present)
5. Continue tracing until the rays reach the focal point

**Example: Parabolic Mirror**
For a parabolic mirror with equation y = x²/4f (where f is the focal length):
1. The slope at any point (x, y) is dy/dx = x/2f
2. The normal to the surface makes an angle α with the y-axis, where tan(α) = x/2f
3. For a ray parallel to the y-axis, the angle of incidence is α
4. After reflection, the ray makes an angle 2α with the y-axis
5. Using trigonometry, we can show that all such rays pass through the focal point (0, f)

### Calculating Focal Length and Magnification

The focal length of a telescope determines many of its optical properties and can be calculated using geometric principles.

**Focal Length of a Spherical Mirror:**
For a spherical mirror with radius of curvature R, the focal length f is:
- f = R/2

**Focal Length of a Parabolic Mirror:**
For a parabolic mirror with equation y = x²/4f, the focal length is directly given by the parameter f.

**Telescope Magnification:**
The magnification M of a telescope is the ratio of the focal length of the objective (primary mirror or lens) to the focal length of the eyepiece:
- M = fₒ / fₑ

**Example:** A telescope has a primary mirror with focal length 1200 mm and is used with an eyepiece of focal length 10 mm. The magnification is:
- M = 1200 mm / 10 mm = 120×

This means objects appear 120 times larger in angular size than they would to the naked eye.

**Effective Focal Length:**
In compound systems like Schmidt-Cassegrain telescopes, the effective focal length can be different from the physical length of the telescope. It can be calculated using:
- fₑff = fₚ × M
Where fₚ is the focal length of the primary mirror and M is the magnification factor of the secondary mirror system.

### Determining Field of View

The field of view (FOV) is the angular extent of the observable area visible through a telescope.

**Eyepiece Field of View:**
The apparent field of view (AFOV) is the angular diameter of the field visible through an eyepiece alone, typically provided by the manufacturer (e.g., 50°, 68°, 82°).

**True Field of View:**
The true field of view (TFOV) is the actual angular diameter of sky visible through the telescope. It can be calculated as:
- TFOV = AFOV / M
Where M is the magnification.

**Example:** Using an eyepiece with an AFOV of 68° and a magnification of 120×:
- TFOV = 68° / 120 = 0.567°
- Converting to arcminutes: 0.567° × 60 = 34 arcminutes

**Alternative Calculation:**
The TFOV can also be calculated from the eyepiece field stop diameter (d) and the telescope's focal length (f):
- TFOV (in radians) = d / f
- TFOV (in degrees) = (d / f) × (180/π)

**Example:** An eyepiece with a field stop diameter of 20 mm used with a telescope of focal length 1200 mm:
- TFOV = (20 mm / 1200 mm) × (180/π) = 0.955°

### Resolution Limits and Diffraction

The resolution of a telescope is limited by diffraction, a fundamental physical constraint that depends on the wavelength of light and the telescope's aperture.

**Diffraction Limit (Rayleigh Criterion):**
The minimum angular separation θ at which two point sources can be resolved is:
- θ = 1.22 × λ / D
Where λ is the wavelength of light and D is the telescope aperture diameter.

**Example:** For a 200 mm telescope observing in green light (λ = 550 nm):
- θ = 1.22 × (550 × 10⁻⁹ m) / (0.2 m)
- θ = 3.36 × 10⁻⁶ radians
- Converting to arcseconds: θ = 3.36 × 10⁻⁶ × 206,265 = 0.69 arcseconds

This means the telescope can theoretically resolve details as small as 0.69 arcseconds under perfect conditions.

**Atmospheric Seeing:**
In practice, Earth's atmosphere limits resolution to about 0.5-2 arcseconds at good sites, regardless of telescope size. This is why space telescopes and ground-based telescopes with adaptive optics can achieve higher resolution.

**Airy Disk:**
The diffraction pattern of a point source through a circular aperture creates an Airy disk. The radius of the first dark ring is:
- r = 1.22 × λ × f / D
Where f is the focal length.

**Example:** For our 200 mm telescope with 1200 mm focal length observing in green light:
- r = 1.22 × (550 × 10⁻⁹ m) × (1.2 m) / (0.2 m)
- r = 4.03 × 10⁻⁶ m = 4.03 μm

This tiny size illustrates why precise focusing is critical for high-resolution imaging.

### Designing a Simple Reflecting Telescope

Let's work through the design calculations for a simple Newtonian reflecting telescope:

**Design Requirements:**
- Aperture: 200 mm (8 inches)
- Focal ratio: f/5 (a common choice balancing field of view and magnification)

**Step 1: Calculate the focal length**
- Focal length = Aperture × Focal ratio
- Focal length = 200 mm × 5 = 1000 mm (1 meter)

**Step 2: Determine the primary mirror specifications**
- Shape: Parabolic
- Diameter: 200 mm
- Focal length: 1000 mm
- Radius of curvature: 2 × Focal length = 2000 mm
- Edge thickness: Typically 1/6 of the diameter = 33 mm
- Central hole (if needed): Typically 1/4 of the diameter = 50 mm

**Step 3: Calculate the secondary mirror size**
For a Newtonian telescope, the secondary mirror is flat and elliptical. Its minor axis should be:
- Minor axis = Primary diameter / Focal ratio / 7 + 10 mm (empirical formula)
- Minor axis = 200 mm / 5 / 7 + 10 mm = 15.7 mm

**Step 4: Determine the secondary mirror position**
- Distance from primary mirror: Slightly less than the focal length
- For a typical focuser that needs 75 mm of inward travel:
  - Secondary position = Focal length - 75 mm = 925 mm from the primary

**Step 5: Calculate the focuser position**
- Distance from optical axis: Equal to the distance from secondary mirror to optical axis
- For a secondary mirror positioned 50 mm from the optical axis:
  - Focuser position = 50 mm from optical axis

**Step 6: Verify the light path using trigonometry**
- Angle of reflection from secondary = 90°
- Check that all light from the edge of the field of view reaches the focal plane
- Calculate vignetting (if any) for off-axis light paths

This design process illustrates how geometric and trigonometric principles directly apply to practical astronomical instrument design.

## 4.3 Coordinate Transformations in Astronomy

Astronomers use multiple coordinate systems to describe positions in the sky. Converting between these systems is a fundamental skill that relies heavily on spherical trigonometry.

### Converting Between Horizontal and Equatorial Coordinates

The horizontal (altitude-azimuth) and equatorial (right ascension-declination) coordinate systems are both commonly used in astronomy, and converting between them is essential for observational planning.

**Horizontal Coordinates:**
- Altitude (a): Angular height above the horizon (0° to 90°)
- Azimuth (A): Angular distance measured eastward from north along the horizon (0° to 360°)

**Equatorial Coordinates:**
- Declination (δ): Angular distance north or south of the celestial equator (-90° to +90°)
- Hour Angle (H): Angular distance measured westward from the meridian (0h to 24h)
- Right Ascension (α): Angular distance measured eastward from the vernal equinox (0h to 24h)
- Relationship: H = Local Sidereal Time (LST) - α

**Conversion Formulas:**
From horizontal to equatorial:
- sin(δ) = sin(φ)sin(a) + cos(φ)cos(a)cos(A)
- cos(H) = [sin(a) - sin(φ)sin(δ)] / [cos(φ)cos(δ)]
- sin(H) = -cos(a)sin(A) / cos(δ)

From equatorial to horizontal:
- sin(a) = sin(φ)sin(δ) + cos(φ)cos(δ)cos(H)
- cos(A) = [sin(δ) - sin(φ)sin(a)] / [cos(φ)cos(a)]
- sin(A) = -cos(δ)sin(H) / cos(a)

Where φ is the observer's latitude.

**Example:** Convert horizontal coordinates (a = 30°, A = 135°) to equatorial coordinates for an observer at latitude φ = 40° N.

Step 1: Calculate declination
- sin(δ) = sin(40°)sin(30°) + cos(40°)cos(30°)cos(135°)
- sin(δ) = 0.6428 × 0.5 + 0.7660 × 0.866 × (-0.7071)
- sin(δ) = 0.3214 - 0.4685 = -0.1471
- δ = -8.46°

Step 2: Calculate hour angle
- cos(H) = [sin(30°) - sin(40°)sin(-8.46°)] / [cos(40°)cos(-8.46°)]
- cos(H) = [0.5 - 0.6428 × (-0.1471)] / [0.7660 × 0.9892]
- cos(H) = [0.5 + 0.0946] / 0.7578 = 0.7849
- H = 38.3° = 2h 33m

Step 3: Calculate right ascension
- If the Local Sidereal Time (LST) is 5h 15m:
- α = LST - H = 5h 15m - 2h 33m = 2h 42m

### Accounting for Observer's Location and Time

The conversion between coordinate systems depends critically on the observer's location and the time of observation.

**Observer's Location:**
- Latitude (φ): Determines the height of the celestial pole above the horizon
- Longitude (λ): Determines the Local Sidereal Time (LST)

**Time Considerations:**
- Universal Time (UT): Standard reference time
- Local Sidereal Time (LST): Measures the right ascension currently on the meridian
- LST = Greenwich Sidereal Time (GST) + Observer's longitude (in hours)
- GST can be calculated from UT using standard formulas

**Example:** Calculate the LST at longitude 75° W on March 21, 2025, at 22:30 UT.

Step 1: Calculate the Greenwich Sidereal Time (GST)
- For March 21, 2025, at 22:30 UT, GST ≈ 10h 15m (calculated using standard formulas)

Step 2: Convert observer's longitude to hours
- 75° W = -75° = -5h

Step 3: Calculate LST
- LST = GST + longitude (in hours) = 10h 15m + (-5h) = 5h 15m

### Precession Corrections

Earth's axis slowly precesses, completing one cycle in about 26,000 years. This changes the coordinates of celestial objects over time.

**Precession Formulas:**
For small time differences (Δt in years), the changes in right ascension (Δα) and declination (Δδ) are approximately:
- Δα = (3.075 + 0.00186 × δ) × sin(α) × Δt / 3600 hours
- Δδ = 20.043 × cos(α) × Δt / 3600 degrees

Where α and δ are in degrees.

**Example:** Calculate the change in coordinates for a star at α = 6h, δ = +30° over 50 years.

- Δα = [3.075 + 0.00186 × 30] × sin(90°) × 50 / 3600 hours
- Δα = 3.131 × 1 × 50 / 3600 = 0.0435 hours = 2.61 minutes

- Δδ = 20.043 × cos(90°) × 50 / 3600 degrees
- Δδ = 20.043 × 0 × 50 / 3600 = 0 degrees

The star's new coordinates would be approximately α = 6h 02.6m, δ = +30°.

### Galactic Coordinate Transformations

Galactic coordinates are centered on the Milky Way's structure and are useful for studying our galaxy.

**Galactic Coordinates:**
- Galactic Longitude (l): Measured in the galactic plane from the galactic center (0° to 360°)
- Galactic Latitude (b): Measured perpendicular to the galactic plane (-90° to +90°)

**Transformation from Equatorial to Galactic:**
- sin(b) = sin(δ)sin(δₙₚ) + cos(δ)cos(δₙₚ)cos(α - αₙₚ)
- cos(b)sin(l - lₙₚ) = cos(δ)sin(α - αₙₚ)
- cos(b)cos(l - lₙₚ) = sin(δ)cos(δₙₚ) - cos(δ)sin(δₙₚ)cos(α - αₙₚ)

Where:
- (αₙₚ, δₙₚ) are the equatorial coordinates of the north galactic pole (NGP)
- lₙₚ is the galactic longitude of the north celestial pole (NCP)

For the standard galactic coordinate system (J2000):
- αₙₚ = 12h 51.4m
- δₙₚ = +27.13°
- lₙₚ = 123.93°

**Example:** Convert equatorial coordinates α = 18h 30m, δ = -23° to galactic coordinates.

Step 1: Convert α and αₙₚ to degrees
- α = 18h 30m = 277.5°
- αₙₚ = 12h 51.4m = 192.85°

Step 2: Calculate b
- sin(b) = sin(-23°)sin(27.13°) + cos(-23°)cos(27.13°)cos(277.5° - 192.85°)
- sin(b) = -0.3907 × 0.4567 + 0.9205 × 0.8894 × cos(84.65°)
- sin(b) = -0.1784 + 0.8187 × 0.0933 = -0.1784 + 0.0764 = -0.102
- b = -5.85°

Step 3: Calculate l - lₙₚ
- cos(b)sin(l - lₙₚ) = cos(-23°)sin(277.5° - 192.85°)
- cos(b)sin(l - lₙₚ) = 0.9205 × sin(84.65°) = 0.9205 × 0.9956 = 0.9164
- cos(b)cos(l - lₙₚ) = sin(-23°)cos(27.13°) - cos(-23°)sin(27.13°)cos(84.65°)
- cos(b)cos(l - lₙₚ) = -0.3907 × 0.8894 - 0.9205 × 0.4567 × 0.0933
- cos(b)cos(l - lₙₚ) = -0.3475 - 0.0393 = -0.3868
- tan(l - lₙₚ) = 0.9164 / (-0.3868) = -2.369
- l - lₙₚ = -67.11°
- l = -67.11° + 123.93° = 56.82°

The galactic coordinates are l = 56.82°, b = -5.85°.

### Creating a Star Chart for a Specific Location and Time

Creating a star chart involves calculating the positions of celestial objects in the appropriate coordinate system for a specific location and time.

**Steps to Create a Star Chart:**

1. **Determine the Local Sidereal Time (LST)**
   - Calculate GST from the date and time
   - Adjust for the observer's longitude

2. **Select Stars and Deep-Sky Objects**
   - Use a star catalog with equatorial coordinates
   - Apply precession corrections if the catalog epoch differs from the chart date

3. **Convert to Horizontal Coordinates**
   - For each object, convert (α, δ) to (a, A) using the formulas:
     - sin(a) = sin(φ)sin(δ) + cos(φ)cos(δ)cos(H)
     - sin(A) = -cos(δ)sin(H) / cos(a)
   - Where H = LST - α

4. **Plot the Objects**
   - Use a polar projection centered on the zenith
   - Mark the horizon, cardinal directions, and altitude circles
   - Plot each object at its calculated (a, A) position

**Example:** Create a star chart for an observer at latitude 40° N, longitude 75° W on March 21, 2025, at 22:30 UT.

Step 1: Calculate LST (as shown earlier)
- LST = 5h 15m

Step 2: Calculate horizontal coordinates for Vega (α = 18h 36m, δ = +38.8°)
- H = LST - α = 5h 15m - 18h 36m = -13h 21m = -200.25°
- sin(a) = sin(40°)sin(38.8°) + cos(40°)cos(38.8°)cos(-200.25°)
- sin(a) = 0.6428 × 0.6262 + 0.7660 × 0.7797 × (-0.9397)
- sin(a) = 0.4025 - 0.5608 = -0.1583
- a = -9.1° (below the horizon)

Since Vega is below the horizon, it would not appear on the chart. We would repeat this calculation for all catalog objects and plot those with positive altitude.

## 4.4 Analyzing Orbital Motion

Orbital motion is governed by geometric principles and can be analyzed using trigonometric methods. Understanding these relationships is essential for predicting the positions of planets, moons, and artificial satellites.

### Geometric Interpretation of Kepler's Laws

Kepler's three laws of planetary motion have clear geometric interpretations that can be analyzed using trigonometry.

**Kepler's First Law: Orbits are Ellipses**
- An ellipse is defined by its semi-major axis (a) and eccentricity (e)
- The Sun (or central body) is at one focus of the ellipse
- The equation of an ellipse in polar form is:
  r = a(1 - e²) / (1 + e·cos(θ))
  Where r is the distance from the focus, and θ is the angle from periapsis

**Kepler's Second Law: Equal Areas in Equal Times**
- The line connecting a planet to the Sun sweeps out equal areas in equal times
- This is a consequence of angular momentum conservation
- The area swept in time dt is:
  dA = (1/2)·r²·dθ
- Since dA/dt is constant, when r is smaller, dθ/dt must be larger (the planet moves faster)

**Kepler's Third Law: Relationship Between Period and Semi-major Axis**
- The square of the orbital period is proportional to the cube of the semi-major axis
- T² = (4π²/GM)·a³
- For orbits around the Sun, this simplifies to:
  T² = a³
  When T is in years and a is in astronomical units (AU)

### Calculating Orbital Parameters from Observational Data

Determining orbital parameters from observations involves fitting observed positions to an orbital model.

**Basic Approach:**
1. Obtain multiple observations of position (right ascension and declination)
2. Convert these to a common reference frame
3. Fit an orbital model to the observations
4. Extract the orbital elements

**Minimum Data Required:**
- For a complete orbit determination, at least three observations are needed
- More observations improve accuracy

**Orbital Elements:**
- Semi-major axis (a): Size of the orbit
- Eccentricity (e): Shape of the orbit (0 = circle, 0-1 = ellipse, 1 = parabola, >1 = hyperbola)
- Inclination (i): Tilt of the orbit relative to the reference plane
- Longitude of ascending node (Ω): Where the orbit crosses the reference plane from south to north
- Argument of periapsis (ω): Angle from the ascending node to the point of closest approach
- Mean anomaly at epoch (M₀): Position along the orbit at a reference time

**Example:** Determine the semi-major axis and eccentricity of an asteroid from these observations:
- At t₁: r₁ = 2.5 AU, θ₁ = 30°
- At t₂: r₂ = 1.8 AU, θ₂ = 120°

Step 1: Use the polar equation of an ellipse
- r = a(1 - e²) / (1 + e·cos(θ))

Step 2: Set up equations for both observations
- 2.5 = a(1 - e²) / (1 + e·cos(30°))
- 1.8 = a(1 - e²) / (1 + e·cos(120°))

Step 3: Solve the system of equations
- Substituting cos(30°) = 0.866 and cos(120°) = -0.5:
- 2.5 = a(1 - e²) / (1 + 0.866e)
- 1.8 = a(1 - e²) / (1 - 0.5e)

Step 4: Divide the equations
- 2.5/1.8 = (1 - 0.5e) / (1 + 0.866e)
- 1.389 = (1 - 0.5e) / (1 + 0.866e)
- 1.389(1 + 0.866e) = 1 - 0.5e
- 1.389 + 1.203e = 1 - 0.5e
- 1.703e = 1 - 1.389 = -0.389
- e = -0.389/1.703 = 0.228

Step 5: Calculate semi-major axis
- 2.5 = a(1 - 0.228²) / (1 + 0.866 × 0.228)
- 2.5 = a(1 - 0.052) / (1 + 0.197)
- 2.5 = 0.948a / 1.197
- a = 2.5 × 1.197 / 0.948 = 3.16 AU

The asteroid has an orbital eccentricity of 0.228 and a semi-major axis of 3.16 AU.

### Determining the Position of a Planet at a Given Time

Predicting a planet's position at a specific time involves solving Kepler's equation, which relates time to position in an elliptical orbit.

**Step 1: Calculate the Mean Anomaly (M)**
- M = M₀ + n(t - t₀)
- Where n = 2π/T is the mean motion, T is the orbital period, t is the current time, and t₀ is the reference time

**Step 2: Solve Kepler's Equation for the Eccentric Anomaly (E)**
- M = E - e·sin(E)
- This equation must be solved iteratively (e.g., using Newton's method)
- Initial guess: E₀ = M
- Iteration: Eₙ₊₁ = Eₙ - (Eₙ - e·sin(Eₙ) - M) / (1 - e·cos(Eₙ))

**Step 3: Calculate the True Anomaly (θ)**
- tan(θ/2) = √((1+e)/(1-e)) · tan(E/2)
- Alternatively: cos(θ) = (cos(E) - e) / (1 - e·cos(E))

**Step 4: Calculate the Distance from the Central Body**
- r = a(1 - e·cos(E))

**Step 5: Convert to Cartesian Coordinates**
- x = r·cos(θ)
- y = r·sin(θ)
- Apply rotations based on inclination, longitude of ascending node, and argument of periapsis to get coordinates in the reference frame

**Example:** Calculate the position of Mars (a = 1.524 AU, e = 0.0934, orbital period = 1.881 years) 30 days after perihelion.

Step 1: Calculate the mean anomaly
- n = 2π/1.881 = 3.34 radians/year
- t - t₀ = 30/365.25 = 0.0821 years
- M = 0 + 3.34 × 0.0821 = 0.274 radians = 15.7°

Step 2: Solve Kepler's equation (after several iterations)
- E ≈ 0.300 radians = 17.2°

Step 3: Calculate the true anomaly
- cos(θ) = (cos(17.2°) - 0.0934) / (1 - 0.0934 × cos(17.2°))
- cos(θ) = (0.9556 - 0.0934) / (1 - 0.0934 × 0.9556)
- cos(θ) = 0.8622 / 0.9108 = 0.9467
- θ = 18.9°

Step 4: Calculate the distance
- r = 1.524 × (1 - 0.0934 × cos(17.2°))
- r = 1.524 × (1 - 0.0934 × 0.9556)
- r = 1.524 × 0.9108 = 1.388 AU

Step 5: Calculate Cartesian coordinates
- x = 1.388 × cos(18.9°) = 1.388 × 0.9467 = 1.314 AU
- y = 1.388 × sin(18.9°) = 1.388 × 0.3244 = 0.450 AU

Mars is at position (1.314, 0.450) AU in the orbital plane, 30 days after perihelion.

### Predicting Conjunctions and Oppositions

Conjunctions and oppositions are important alignments of planets that can be predicted using orbital mechanics.

**Conjunction:** Two celestial objects have the same celestial longitude or right ascension
**Opposition:** A planet is opposite the Sun in the sky (difference in longitude = 180°)

**Predicting Conjunctions:**
1. Calculate the orbital positions of both objects as functions of time
2. Find times when their longitudes are equal (or differ by 180° for opposition)
3. This typically requires solving a transcendental equation numerically

**Synodic Period:**
The time between successive conjunctions of two planets is called the synodic period (S) and can be calculated from their orbital periods (P₁ and P₂):
- 1/S = |1/P₁ - 1/P₂|

**Example:** Calculate the synodic period of Mars (P = 1.881 years) with respect to Earth (P = 1 year).
- 1/S = |1/1 - 1/1.881| = |1 - 0.532| = 0.468
- S = 1/0.468 = 2.137 years ≈ 780 days

This means Mars and Earth align (either in conjunction or opposition) approximately every 780 days.

### Analyzing Binary Star Orbits

Binary star systems provide excellent opportunities to apply orbital mechanics and determine stellar masses.

**Visual Binaries:**
1. Observe the apparent positions of both stars over time
2. Fit an ellipse to the relative motion
3. Determine the orbital elements (a, e, i, Ω, ω, T)
4. Calculate the total mass using Kepler's third law:
   M₁ + M₂ = a³/P²
   Where a is in AU, P is in years, and M is in solar masses

**Spectroscopic Binaries:**
1. Measure radial velocity variations of one or both stars
2. Fit a model to the velocity curve
3. For a single-lined spectroscopic binary:
   M₂³sin³(i)/(M₁ + M₂)² = P × K₁³/(2πG)
   Where K₁ is the velocity semi-amplitude of the observed star

**Example:** A visual binary has an orbital period of 80 years and a semi-major axis of 24 AU. Calculate the total mass.
- M₁ + M₂ = a³/P² = 24³/80² = 13,824/6,400 = 2.16 solar masses

## 4.5 Modeling Light Curves

Light curves—graphs of brightness versus time—provide valuable information about variable stars, eclipsing binaries, and other variable astronomical objects. Trigonometric functions are essential for modeling these periodic variations.

### Trigonometric Functions for Periodic Variations

Many types of stellar variability can be modeled using trigonometric functions:

**Simple Sinusoidal Variation:**
- m(t) = m₀ + A·sin(2πt/P + φ)
  Where m is magnitude, m₀ is mean magnitude, A is amplitude, P is period, and φ is phase

**Multiple Periodic Components:**
- m(t) = m₀ + Σ Aᵢ·sin(2πt/Pᵢ + φᵢ)
  Where each term represents a different periodicity

**Non-Sinusoidal Variations:**
- Can be represented using Fourier series:
  m(t) = m₀ + Σ Aᵢ·sin(2πit/P + φᵢ)
  Where i represents harmonics of the fundamental period

**Example:** A Cepheid variable has a mean magnitude of 8.5, an amplitude of 0.8 magnitudes, and a period of 5.3 days. Its magnitude at time t (in days) can be modeled as:
- m(t) = 8.5 + 0.8·sin(2πt/5.3 + φ)
  Where φ is determined by when the observation begins

### Fitting Sinusoidal Functions to Variable Star Data

Given a set of brightness measurements over time, we can fit a sinusoidal model to determine the star's properties:

**Step 1: Period Determination**
- Use techniques like Fourier analysis or phase dispersion minimization
- Try different periods and select the one that minimizes scatter in the phased light curve

**Step 2: Model Fitting**
- Once the period is known, fit a model of the form:
  m(t) = m₀ + A·sin(2πt/P + φ)
- Use least squares fitting to determine m₀, A, and φ

**Example:** For a set of observations of a variable star, a period analysis yields P = 2.7 days. Fitting a sinusoidal model gives:
- m(t) = 10.3 + 0.5·sin(2πt/2.7 + 1.2)
- This indicates a mean magnitude of 10.3, an amplitude of 0.5 magnitudes, and a phase offset of 1.2 radians

### Analyzing Eclipsing Binary Light Curves

Eclipsing binary stars show distinctive light curves as the stars pass in front of each other:

**Primary Eclipse:**
- Occurs when the brighter star is eclipsed
- Results in the largest drop in brightness

**Secondary Eclipse:**
- Occurs when the fainter star is eclipsed
- Results in a smaller drop in brightness

**Geometric Model:**
1. Model each star as a disk with uniform brightness
2. Calculate the overlapping area as a function of time
3. Convert to magnitude drop using:
   Δm = -2.5·log₁₀(F/F₀)
   Where F is the flux during eclipse and F₀ is the out-of-eclipse flux

**Example:** An eclipsing binary has stars with radii R₁ = 1.2R⊙ and R₂ = 0.8R⊙, surface brightnesses B₁ and B₂ with B₁/B₂ = 1.5, and orbital separation a = 5R⊙. The depth of the primary eclipse is:
- Fractional area eclipsed = π(0.8R⊙)²/π(1.2R⊙)² = 0.64²/1.2² = 0.284
- Flux ratio during primary eclipse = (1 - 0.284) + 0.284×(B₂/B₁) = 0.716 + 0.284×(1/1.5) = 0.716 + 0.189 = 0.905
- Magnitude drop = -2.5·log₁₀(0.905) = 0.11 magnitudes

### Extracting Physical Parameters from Light Curve Geometry

Light curves contain information about the physical properties of variable stars:

**For Pulsating Variables:**
- Period relates to mean density: P × √(ρ/ρ⊙) ≈ constant
- For Cepheids, the period-luminosity relationship gives absolute magnitude
- Amplitude provides information about the pulsation mode

**For Eclipsing Binaries:**
- Eclipse durations give information about stellar sizes relative to orbit
- Eclipse depths provide information about relative temperatures
- Timing of eclipses reveals orbital eccentricity

**Example:** An eclipsing binary has a circular orbit with period 3.2 days. The primary eclipse lasts 5.4 hours and the secondary eclipse also lasts 5.4 hours. Calculate the relative sizes of the stars and orbit.

- Fraction of orbit in eclipse = 5.4/(24×3.2) = 0.070
- For a circular orbit, this corresponds to an angle of 0.070 × 360° = 25.2°
- If R₁ + R₂ = a·sin(25.2°/2), then (R₁ + R₂)/a = sin(12.6°) = 0.218
- The sum of the stellar radii is 21.8% of the orbital separation

### Fourier Analysis of Complex Periodic Signals

Complex light curves can be decomposed into simpler components using Fourier analysis:

**Fourier Series:**
- Any periodic function can be represented as:
  f(t) = a₀/2 + Σ [aₙ·cos(2πnt/P) + bₙ·sin(2πnt/P)]
- The coefficients aₙ and bₙ represent the strength of each frequency component

**Amplitude and Phase Representation:**
- Alternatively: f(t) = A₀ + Σ Aₙ·sin(2πnt/P + φₙ)
- Where Aₙ = √(aₙ² + bₙ²) and φₙ = arctan(-aₙ/bₙ)

**Power Spectrum:**
- The power at each frequency is proportional to Aₙ²
- Plotting power versus frequency reveals the dominant periodicities

**Example:** A complex light curve is decomposed into Fourier components:
- m(t) = 12.7 + 0.3·sin(2πt/1.2 + 0.5) + 0.15·sin(4πt/1.2 + 1.1) + 0.08·sin(6πt/1.2 + 0.3)
- This shows a fundamental period of 1.2 days with significant first and second harmonics
- The non-sinusoidal shape is captured by the harmonic terms

These worked examples demonstrate how trigonometry and geometry are applied to solve real astronomical problems. The mathematical techniques we've explored provide powerful tools for understanding the universe, from nearby stars to distant galaxies, and from telescope optics to orbital dynamics.

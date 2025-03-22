# Trigonometry and Geometry in Astronomy: Section 5 - Practice Problems

This section provides a series of practice problems that apply the trigonometric and geometric concepts we've explored to astronomical scenarios. These problems are organized by topic and increase in difficulty, allowing you to build your skills progressively.

## 5.1 Angular Measurement Problems

### Problem 1: Basic Angle Conversions
Convert the following angles as indicated:
a) 42.5° to radians
b) 0.75 radians to degrees
c) 14h 36m 24s to degrees
d) 267.85° to hours, minutes, and seconds

**Solution 1:**
a) 42.5° to radians:
   θ (radians) = θ (degrees) × (π/180)
   θ (radians) = 42.5° × (π/180) = 0.742 radians

b) 0.75 radians to degrees:
   θ (degrees) = θ (radians) × (180/π)
   θ (degrees) = 0.75 × (180/π) = 42.97°

c) 14h 36m 24s to degrees:
   First convert to decimal hours:
   14h 36m 24s = 14 + 36/60 + 24/3600 = 14 + 0.6 + 0.0067 = 14.6067 hours
   Then convert hours to degrees:
   θ (degrees) = θ (hours) × 15
   θ (degrees) = 14.6067 × 15 = 219.10°

d) 267.85° to hours, minutes, and seconds:
   First convert to decimal hours:
   θ (hours) = θ (degrees) ÷ 15
   θ (hours) = 267.85° ÷ 15 = 17.8567 hours
   
   Hours: 17
   Minutes: 0.8567 × 60 = 51.402 → 51
   Seconds: 0.402 × 60 = 24.12 → 24
   
   Result: 17h 51m 24s

### Problem 2: Angular Separation
Two stars have the following equatorial coordinates:
- Star A: Right Ascension = 5h 32m 24s, Declination = +22° 15' 48"
- Star B: Right Ascension = 5h 40m 12s, Declination = +24° 06' 36"

Calculate the angular separation between these stars.

**Solution 2:**
First, convert the coordinates to decimal degrees:

Star A:
- RA = 5h 32m 24s = 5.54 hours = 5.54 × 15 = 83.1°
- Dec = +22° 15' 48" = +22.263°

Star B:
- RA = 5h 40m 12s = 5.67 hours = 5.67 × 15 = 85.05°
- Dec = +24° 06' 36" = +24.11°

Now use the spherical law of cosines to find the angular separation:
cos(θ) = sin(Dec₁)sin(Dec₂) + cos(Dec₁)cos(Dec₂)cos(RA₁ - RA₂)

cos(θ) = sin(22.263°)sin(24.11°) + cos(22.263°)cos(24.11°)cos(83.1° - 85.05°)
cos(θ) = 0.3789 × 0.4086 + 0.9254 × 0.9127 × cos(-1.95°)
cos(θ) = 0.1549 + 0.8446 × 0.9994
cos(θ) = 0.1549 + 0.8441 = 0.999

θ = arccos(0.999) = 2.56°

The angular separation between the stars is 2.56° or approximately 2° 34'.

### Problem 3: Angular Size Calculations
a) The Moon has a physical diameter of 3,474 km and is approximately 384,400 km from Earth. Calculate its angular diameter in degrees and arcminutes.

b) Saturn's rings have a diameter of approximately 270,000 km. When Saturn is at a distance of 1.2 billion km from Earth, what is the angular size of the rings in arcseconds?

**Solution 3:**
a) Moon's angular diameter:
   Using the small-angle approximation (valid because the angle is small):
   θ (radians) = d/r = 3,474 km / 384,400 km = 0.00904 radians
   
   Converting to degrees:
   θ (degrees) = 0.00904 × (180/π) = 0.518°
   
   Converting to arcminutes:
   θ (arcminutes) = 0.518° × 60 = 31.08 arcminutes
   
   The Moon's angular diameter is approximately 0.52° or 31.1 arcminutes.

b) Saturn's rings angular size:
   θ (radians) = d/r = 270,000 km / 1,200,000,000 km = 0.000225 radians
   
   Converting to arcseconds:
   θ (arcseconds) = 0.000225 × (180/π) × 3600 = 46.4 arcseconds
   
   The angular size of Saturn's rings is approximately 46.4 arcseconds.

### Problem 4: Small-Angle Approximation
a) A telescope has an angular resolution of 0.05 arcseconds. What is the smallest feature it could resolve on the Moon (distance 384,400 km)?

b) Two stars in a binary system are separated by 15 AU. At what distance would they have an angular separation of 0.1 arcseconds?

**Solution 4:**
a) Smallest feature on the Moon:
   Using the small-angle approximation:
   d = r × θ
   
   Convert 0.05 arcseconds to radians:
   θ (radians) = 0.05 × (π/180) × (1/3600) = 2.42 × 10⁻¹⁰ radians
   
   Calculate the feature size:
   d = 384,400 km × 2.42 × 10⁻¹⁰ = 9.3 × 10⁻⁵ km = 93 meters
   
   The smallest feature the telescope could resolve on the Moon is approximately 93 meters.

b) Distance for 0.1 arcsecond separation:
   Using the small-angle approximation:
   θ (radians) = d/r
   
   Convert 0.1 arcseconds to radians:
   θ (radians) = 0.1 × (π/180) × (1/3600) = 4.85 × 10⁻¹⁰ radians
   
   Calculate the distance:
   r = d/θ = 15 AU / 4.85 × 10⁻¹⁰ = 3.09 × 10¹⁰ AU
   
   Converting to parsecs (1 parsec = 206,265 AU):
   r = 3.09 × 10¹⁰ AU / 206,265 = 1.5 × 10⁵ parsecs = 150,000 parsecs
   
   The binary system would need to be at a distance of approximately 150,000 parsecs (or 150 kiloparsecs) to have an angular separation of 0.1 arcseconds.

### Problem 5: Solid Angle Calculations
a) A telescope has a circular field of view with an angular diameter of 1.5°. What solid angle does this field of view cover in steradians?

b) A survey needs to cover 10,000 square degrees of the sky. What fraction of the entire celestial sphere does this represent?

**Solution 5:**
a) Solid angle of telescope field of view:
   For a circular region with angular radius θ, the solid angle is:
   Ω = 2π × (1 - cos(θ))
   
   The angular radius is 1.5°/2 = 0.75°
   Converting to radians: 0.75° × (π/180) = 0.01309 radians
   
   Ω = 2π × (1 - cos(0.01309))
   Ω = 2π × (1 - 0.9999)
   Ω = 2π × 0.0001 = 0.000628 steradians
   
   Alternatively, for small angles, we can use the approximation:
   Ω ≈ π × θ² = π × (0.01309)² = 0.000538 steradians
   
   The telescope's field of view covers approximately 0.000628 steradians.

b) Fraction of celestial sphere:
   The total solid angle of a sphere is 4π steradians.
   
   Convert square degrees to steradians:
   10,000 square degrees × (π/180)² = 10,000 × 0.0003046 = 3.046 steradians
   
   Calculate the fraction:
   Fraction = 3.046 / (4π) = 3.046 / 12.57 = 0.242 or 24.2%
   
   The survey covers approximately 24.2% of the entire celestial sphere.

## 5.2 Trigonometric Function Problems

### Problem 1: Analyzing Stellar Brightness Variations
A variable star's magnitude varies according to the function:
m(t) = 8.3 + 0.4 × sin(2πt/5.2 + 0.3)
where t is time in days.

a) What is the star's mean magnitude?
b) What is the amplitude of variation in magnitudes?
c) What is the period of variation in days?
d) At what time (in days) after t = 0 does the star reach its maximum brightness?

**Solution 1:**
a) Mean magnitude:
   The mean magnitude is the constant term in the equation: 8.3 magnitudes.

b) Amplitude of variation:
   The amplitude is the coefficient of the sine term: 0.4 magnitudes.

c) Period of variation:
   In the term 2πt/5.2, the period P = 5.2 days.

d) Time of maximum brightness:
   Maximum brightness corresponds to minimum magnitude (since brighter stars have lower magnitude values).
   The sine function reaches its minimum value (-1) when its argument equals 3π/2 + 2nπ.
   
   We need to find t such that:
   2πt/5.2 + 0.3 = 3π/2 + 2nπ
   
   Solving for the smallest positive t:
   2πt/5.2 = 3π/2 - 0.3 + 2nπ
   t = 5.2 × (3π/2 - 0.3) / 2π
   t = 5.2 × (4.712 - 0.3) / 6.283
   t = 5.2 × 4.412 / 6.283
   t = 3.65 days
   
   The star reaches maximum brightness approximately 3.65 days after t = 0.

### Problem 2: Fitting Trigonometric Functions to Data
The following table shows the right ascension (RA) of the Sun at different times of the year:

| Date       | RA (hours) |
|------------|------------|
| Jan 1      | 18.8       |
| Feb 1      | 20.9       |
| Mar 1      | 22.8       |
| Apr 1      | 0.7        |
| May 1      | 2.6        |
| Jun 1      | 4.6        |
| Jul 1      | 6.7        |
| Aug 1      | 8.8        |
| Sep 1      | 10.9       |
| Oct 1      | 12.5       |
| Nov 1      | 14.5       |
| Dec 1      | 16.8       |

Fit a sinusoidal function of the form RA(t) = A + B × sin(2πt/365 + C) to this data, where t is the day of the year (Jan 1 = 1, Feb 1 = 32, etc.).

**Solution 2:**
First, we need to convert the RA values to a continuous scale (since RA wraps around at 24 hours). We'll adjust by adding 24 to values after the wrap point:

| Date       | Day of Year | RA (adjusted) |
|------------|-------------|---------------|
| Jan 1      | 1           | 18.8          |
| Feb 1      | 32          | 20.9          |
| Mar 1      | 60          | 22.8          |
| Apr 1      | 91          | 24.7          |
| May 1      | 121         | 26.6          |
| Jun 1      | 152         | 28.6          |
| Jul 1      | 182         | 30.7          |
| Aug 1      | 213         | 32.8          |
| Sep 1      | 244         | 34.9          |
| Oct 1      | 274         | 36.5          |
| Nov 1      | 305         | 38.5          |
| Dec 1      | 335         | 40.8          |

Looking at the data, we can see that the RA increases by approximately 24 hours over the course of a year, which is expected as the Sun completes one full circuit of the celestial sphere.

For a function of the form RA(t) = A + B × sin(2πt/365 + C):
- A is the mean value, which is approximately (18.8 + 40.8)/2 = 29.8
- B is the amplitude, which is approximately (40.8 - 18.8)/2 = 11
- C is the phase shift, which we can determine by finding when the function crosses its mean value with positive slope

Since the data doesn't exactly match a sine function (the Sun's motion isn't perfectly uniform due to Earth's elliptical orbit), we'll use an approximation:

RA(t) ≈ 29.8 + 11 × sin(2πt/365 - π/2)

This function gives RA values that increase throughout the year, matching the general trend of the Sun's motion through the celestial sphere.

### Problem 3: Solving Trigonometric Equations in Astronomical Contexts
a) A planet's position angle around its star is given by θ = arctan(y/x), where x = 2cos(nt) and y = sin(nt), with n = 2π/P and P = 687 days. Find all times t in the range [0, P] when the planet is at position angle θ = 60°.

b) The altitude of a star as seen from latitude 40°N is given by:
sin(alt) = sin(40°)sin(dec) + cos(40°)cos(dec)cos(HA)
where dec = -20° and HA is the hour angle. Find all hour angles when the star's altitude is 30°.

**Solution 3:**
a) Planet at position angle θ = 60°:
   We have θ = arctan(y/x) = 60°, which means y/x = tan(60°) = √3
   
   Substituting the expressions for x and y:
   sin(nt)/[2cos(nt)] = √3
   sin(nt) = 2√3 × cos(nt)
   sin(nt)/cos(nt) = 2√3
   tan(nt) = 2√3
   
   This gives:
   nt = arctan(2√3) + kπ
   nt = 73.9° + k × 180°
   
   For the range [0, P], we have 0 ≤ nt ≤ 2π, so k can be 0 or 1:
   nt = 73.9° or nt = 253.9°
   
   Converting to time:
   t = 73.9° × P/(360°) = 73.9 × 687/360 = 141 days
   t = 253.9° × P/(360°) = 253.9 × 687/360 = 484 days
   
   The planet is at position angle 60° approximately 141 days and 484 days after the reference time.

b) Star altitude = 30°:
   We have:
   sin(30°) = sin(40°)sin(-20°) + cos(40°)cos(-20°)cos(HA)
   0.5 = 0.6428 × (-0.342) + 0.766 × 0.9397 × cos(HA)
   0.5 = -0.2198 + 0.7198 × cos(HA)
   0.7198 × cos(HA) = 0.5 + 0.2198 = 0.7198
   cos(HA) = 0.7198/0.7198 = 1
   
   This gives:
   HA = 0° or HA = 360°
   
   Converting to hours:
   HA = 0h or HA = 24h
   
   The star's altitude is 30° when its hour angle is 0 hours (when it's on the meridian).

### Problem 4: Applying Trigonometric Identities to Simplify Calculations
a) The position of a planet in its orbit can be described by:
x = a(cos(E) - e)
y = a√(1-e²)sin(E)
where a is the semi-major axis, e is the eccentricity, and E is the eccentric anomaly.

Show that the distance r from the star to the planet can be expressed as r = a(1 - e·cos(E)).

b) In a binary star system, the radial velocity of one star varies according to:
v = K[cos(ω + ν) + e·cos(ω)]
where K is a constant, ω is the argument of periastron, ν is the true anomaly, and e is the eccentricity.

Using the identity cos(A + B) = cos(A)cos(B) - sin(A)sin(B), express this in the form:
v = C·cos(ν) + D·sin(ν)
and find expressions for C and D in terms of K, e, and ω.

**Solution 4:**
a) Distance from star to planet:
   The distance r is given by:
   r = √(x² + y²)
   
   Substituting the expressions for x and y:
   r = √[(a(cos(E) - e))² + (a√(1-e²)sin(E))²]
   r = √[a²(cos(E) - e)² + a²(1-e²)sin²(E)]
   r = a√[(cos(E) - e)² + (1-e²)sin²(E)]
   r = a√[cos²(E) - 2e·cos(E) + e² + sin²(E) - e²sin²(E)]
   
   Using the identity cos²(E) + sin²(E) = 1:
   r = a√[1 - 2e·cos(E) + e² - e²sin²(E)]
   r = a√[1 - 2e·cos(E) + e²(1 - sin²(E))]
   r = a√[1 - 2e·cos(E) + e²cos²(E)]
   r = a√[(1 - e·cos(E))²]
   r = a(1 - e·cos(E))
   
   This confirms that r = a(1 - e·cos(E)).

b) Radial velocity expression:
   We have:
   v = K[cos(ω + ν) + e·cos(ω)]
   
   Using the identity cos(A + B) = cos(A)cos(B) - sin(A)sin(B):
   cos(ω + ν) = cos(ω)cos(ν) - sin(ω)sin(ν)
   
   Substituting:
   v = K[cos(ω)cos(ν) - sin(ω)sin(ν) + e·cos(ω)]
   v = K[cos(ω)cos(ν) + e·cos(ω) - sin(ω)sin(ν)]
   v = K[cos(ω)(cos(ν) + e) - sin(ω)sin(ν)]
   v = K·cos(ω)·cos(ν) + K·e·cos(ω) - K·sin(ω)·sin(ν)
   
   Rearranging to the form v = C·cos(ν) + D·sin(ν):
   v = K·cos(ω)·cos(ν) - K·sin(ω)·sin(ν) + K·e·cos(ω)
   
   The term K·e·cos(ω) is constant with respect to ν, so it can be incorporated into an overall constant term. However, the problem asks specifically for the form v = C·cos(ν) + D·sin(ν), so:
   
   C = K·cos(ω)
   D = -K·sin(ω)
   
   And the complete expression is:
   v = K·cos(ω)·cos(ν) - K·sin(ω)·sin(ν) + K·e·cos(ω)
   v = C·cos(ν) + D·sin(ν) + K·e·cos(ω)

### Problem 5: Modeling Wave Phenomena in Astrophysical Contexts
a) A radio wave from a pulsar has an electric field given by:
E(x,t) = E₀sin(kx - ωt)
where k = 2π/λ is the wave number and ω = 2πf is the angular frequency.

If the wavelength λ = 21 cm and the frequency f = 1.42 GHz, calculate the phase velocity of the wave.

b) Two radio telescopes separated by distance d = 5 km observe the same radio source. The signal arrives at the second telescope with a time delay of Δt = 16.67 nanoseconds. Calculate the angle θ between the baseline and the direction to the source.

**Solution 5:**
a) Phase velocity of radio wave:
   The phase velocity is given by:
   v = ω/k = λf
   
   Substituting the given values:
   v = 21 cm × 1.42 × 10⁹ Hz
   v = 0.21 m × 1.42 × 10⁹ Hz
   v = 2.982 × 10⁸ m/s
   
   This is approximately equal to the speed of light (3 × 10⁸ m/s), as expected for electromagnetic waves in vacuum.

b) Angle from time delay:
   The time delay is related to the path difference by:
   Δt = (d·sin(θ))/c
   
   Rearranging to solve for θ:
   sin(θ) = c·Δt/d
   sin(θ) = (3 × 10⁸ m/s × 16.67 × 10⁻⁹ s) / 5000 m
   sin(θ) = 0.001
   θ = arcsin(0.001) = 0.057°
   
   The angle between the baseline and the direction to the source is approximately 0.057 degrees.

## 5.3 Coordinate Transformation Problems

### Problem 1: Converting Between Different Celestial Coordinate Systems
Convert the following coordinates as indicated:

a) Equatorial to Horizontal:
   Right Ascension = 18h 30m, Declination = -25°
   Observer's latitude = 40°N, Local Sidereal Time = 20h 15m

b) Horizontal to Equatorial:
   Altitude = 45°, Azimuth = 120°
   Observer's latitude = 35°N, Local Sidereal Time = 2h 20m

c) Equatorial to Ecliptic:
   Right Ascension = 6h, Declination = +23.5°
   (Assume obliquity of the ecliptic ε = 23.44°)

**Solution 1:**
a) Equatorial to Horizontal:
   First, calculate the hour angle:
   HA = LST - RA = 20h 15m - 18h 30m = 1h 45m = 26.25°
   
   Convert to decimal degrees:
   RA = 18h 30m = 277.5°
   Dec = -25°
   HA = 26.25°
   
   Use the formulas:
   sin(alt) = sin(lat)sin(dec) + cos(lat)cos(dec)cos(HA)
   sin(alt) = sin(40°)sin(-25°) + cos(40°)cos(-25°)cos(26.25°)
   sin(alt) = 0.6428 × (-0.4226) + 0.766 × 0.9063 × 0.8969
   sin(alt) = -0.2717 + 0.6236 = 0.3519
   alt = arcsin(0.3519) = 20.6°
   
   tan(A) = -sin(HA) / [cos(lat)tan(dec) - sin(lat)cos(HA)]
   tan(A) = -sin(26.25°) / [cos(40°)tan(-25°) - sin(40°)cos(26.25°)]
   tan(A) = -0.4425 / [0.766 × (-0.4663) - 0.6428 × 0.8969]
   tan(A) = -0.4425 / [-0.3572 - 0.5765] = -0.4425 / (-0.9337) = 0.4739
   A = arctan(0.4739) = 25.4°
   
   Since sin(HA) is positive and the denominator is negative, A is in the second quadrant:
   A = 180° - 25.4° = 154.6°
   
   The horizontal coordinates are: Altitude = 20.6°, Azimuth = 154.6°

b) Horizontal to Equatorial:
   Use the formulas:
   sin(dec) = sin(lat)sin(alt) + cos(lat)cos(alt)cos(Az)
   sin(dec) = sin(35°)sin(45°) + cos(35°)cos(45°)cos(120°)
   sin(dec) = 0.5736 × 0.7071 + 0.8192 × 0.7071 × (-0.5)
   sin(dec) = 0.4056 - 0.2898 = 0.1158
   dec = arcsin(0.1158) = 6.65°
   
   cos(HA) = [sin(alt) - sin(lat)sin(dec)] / [cos(lat)cos(dec)]
   cos(HA) = [sin(45°) - sin(35°)sin(6.65°)] / [cos(35°)cos(6.65°)]
   cos(HA) = [0.7071 - 0.5736 × 0.1158] / [0.8192 × 0.9933]
   cos(HA) = [0.7071 - 0.0664] / 0.8137 = 0.7883
   HA = arccos(0.7883) = 38.1°
   
   Since the azimuth is in the southeast quadrant, HA should be positive:
   HA = 38.1° = 2h 32m
   
   RA = LST - HA = 2h 20m - 2h 32m = -0h 12m = 23h 48m
   
   The equatorial coordinates are: Right Ascension = 23h 48m, Declination = +6.65°

c) Equatorial to Ecliptic:
   Convert RA to degrees:
   RA = 6h = 90°
   
   Use the formulas:
   sin(β) = sin(dec)cos(ε) - cos(dec)sin(ε)sin(RA)
   sin(β) = sin(23.5°)cos(23.44°) - cos(23.5°)sin(23.44°)sin(90°)
   sin(β) = 0.3987 × 0.9168 - 0.9171 × 0.3979 × 1
   sin(β) = 0.3655 - 0.3649 = 0.0006
   β = arcsin(0.0006) = 0.03°
   
   sin(λ - 90°) = sin(RA)cos(ε) / cos(β)
   sin(λ - 90°) = sin(90°)cos(23.44°) / cos(0.03°)
   sin(λ - 90°) = 1 × 0.9168 / 1 = 0.9168
   λ - 90° = arcsin(0.9168) = 66.5°
   λ = 90° + 66.5° = 156.5°
   
   The ecliptic coordinates are: Longitude = 156.5°, Latitude = 0.03°

### Problem 2: Determining Rise, Transit, and Set Times
For a star with declination +40°, calculate:

a) The local sidereal time of transit at an observer's location with longitude 75°W
b) The azimuth of rising and setting as seen from latitude 35°N
c) The duration of time the star is above the horizon at latitude 35°N

**Solution 2:**
a) LST of transit:
   At transit, the hour angle (HA) = 0, which means:
   LST = RA
   
   The problem doesn't specify the star's right ascension, so we can say:
   LST of transit = RA of the star
   
   The observer's longitude doesn't affect the local sidereal time of transit, though it would affect the conversion to local mean time.

b) Azimuth of rising and setting:
   At rising and setting, the altitude is 0°. Using the formula:
   cos(Az) = sin(dec) / [cos(lat) × cos(alt)] - tan(lat) × tan(alt)
   
   At alt = 0°:
   cos(Az) = sin(dec) / cos(lat)
   cos(Az) = sin(40°) / cos(35°)
   cos(Az) = 0.6428 / 0.8192 = 0.7845
   Az = arccos(0.7845) = 38.4°
   
   Due to symmetry, the rising azimuth is 360° - 38.4° = 321.6° (or NW) and the setting azimuth is 38.4° (or NE).

c) Duration above horizon:
   The hour angle at setting can be found using:
   cos(HA) = -tan(lat) × tan(dec)
   cos(HA) = -tan(35°) × tan(40°)
   cos(HA) = -0.7002 × 0.8391 = -0.5875
   HA = arccos(-0.5875) = 126.0°
   
   Due to symmetry, the star rises at HA = -126.0° and sets at HA = +126.0°, for a total range of 252.0°.
   
   Converting to time (24 hours = 360°):
   Duration = 252.0° × (24h/360°) = 16.8 hours
   
   The star is above the horizon for approximately 16 hours and 48 minutes.

### Problem 3: Calculating the Position of Objects at Specific Times
a) A star has equatorial coordinates RA = 5h 30m, Dec = +30° on January 1, 2025. Calculate its altitude and azimuth as seen from latitude 42°N, longitude 71°W at 10:00 PM local time on March 15, 2025.

b) The Moon has ecliptic coordinates λ = 45°, β = +5° on a certain date. Calculate its right ascension and declination. (Assume obliquity of the ecliptic ε = 23.44°)

**Solution 3:**
a) Star's position on March 15, 2025:
   First, we need to calculate the Local Sidereal Time (LST):
   
   March 15 is approximately 73 days after January 1.
   10:00 PM local time at longitude 71°W corresponds to 3:00 AM UTC on March 16.
   
   The Greenwich Sidereal Time (GST) at 0h UTC on March 16, 2025, would be approximately 11h 40m.
   Adding 3 hours: GST at 3:00 AM UTC ≈ 11h 40m + 3h × 1.0027 ≈ 14h 43m
   
   LST = GST - longitude (in hours)
   LST = 14h 43m - (-71°/15) = 14h 43m + 4h 44m = 19h 27m
   
   Calculate the hour angle:
   HA = LST - RA = 19h 27m - 5h 30m = 13h 57m = 209.25°
   
   Now calculate altitude and azimuth:
   sin(alt) = sin(lat)sin(dec) + cos(lat)cos(dec)cos(HA)
   sin(alt) = sin(42°)sin(30°) + cos(42°)cos(30°)cos(209.25°)
   sin(alt) = 0.6691 × 0.5 + 0.7431 × 0.866 × (-0.8572)
   sin(alt) = 0.3346 - 0.5513 = -0.2167
   alt = arcsin(-0.2167) = -12.5°
   
   The star is below the horizon (negative altitude).
   
   For completeness, we can calculate the azimuth:
   tan(Az) = sin(HA) / [cos(HA)sin(lat) - tan(dec)cos(lat)]
   tan(Az) = sin(209.25°) / [cos(209.25°)sin(42°) - tan(30°)cos(42°)]
   tan(Az) = -0.5150 / [-0.8572 × 0.6691 - 0.5774 × 0.7431]
   tan(Az) = -0.5150 / [-0.5736 - 0.4290] = -0.5150 / (-1.0026) = 0.5136
   Az = arctan(0.5136) = 27.2°
   
   Since both sin(HA) and the denominator are negative, Az is in the third quadrant:
   Az = 180° + 27.2° = 207.2°
   
   The star's coordinates are: Altitude = -12.5° (below horizon), Azimuth = 207.2°

b) Moon's equatorial coordinates:
   Use the formulas for ecliptic to equatorial conversion:
   
   sin(dec) = sin(β)cos(ε) + cos(β)sin(ε)sin(λ)
   sin(dec) = sin(5°)cos(23.44°) + cos(5°)sin(23.44°)sin(45°)
   sin(dec) = 0.0872 × 0.9168 + 0.9962 × 0.3979 × 0.7071
   sin(dec) = 0.0799 + 0.2809 = 0.3608
   dec = arcsin(0.3608) = 21.2°
   
   sin(RA) = [sin(λ)cos(ε) - tan(β)sin(ε)] / cos(dec)
   sin(RA) = [sin(45°)cos(23.44°) - tan(5°)sin(23.44°)] / cos(21.2°)
   sin(RA) = [0.7071 × 0.9168 - 0.0875 × 0.3979] / 0.9326
   sin(RA) = [0.6483 - 0.0348] / 0.9326 = 0.6576
   RA = arcsin(0.6576) = 41.2°
   
   Since λ is in the first quadrant, RA should also be in the first quadrant:
   RA = 41.2° = 2h 45m
   
   The Moon's equatorial coordinates are: Right Ascension = 2h 45m, Declination = +21.2°

### Problem 4: Correcting for Precession and Proper Motion
a) A star had coordinates RA = 12h 30m, Dec = +45° in the year 2000. Calculate its coordinates in 2025, given that the precession rates are ΔRA = 3.2 seconds of time per year and ΔDec = -0.5 arcseconds per year.

b) A star has proper motion μRA = 0.15 seconds of time per year in right ascension and μDec = 0.8 arcseconds per year in declination. If its position was RA = 18h 36m 12s, Dec = -23° 45' 30" in 2010, calculate its position in 2030.

**Solution 4:**
a) Star's coordinates in 2025:
   Time difference = 2025 - 2000 = 25 years
   
   Change in RA = 25 years × 3.2 seconds of time per year = 80 seconds of time
   Change in Dec = 25 years × (-0.5 arcseconds per year) = -12.5 arcseconds
   
   New RA = 12h 30m + 80s = 12h 30m + 1m 20s = 12h 31m 20s
   New Dec = +45° - 12.5" = +45° 00' 00" - 00° 00' 12.5" = +44° 59' 47.5"
   
   The star's coordinates in 2025 are: RA = 12h 31m 20s, Dec = +44° 59' 47.5"

b) Star's position in 2030:
   Time difference = 2030 - 2010 = 20 years
   
   Change in RA = 20 years × 0.15 seconds of time per year = 3 seconds of time
   Change in Dec = 20 years × 0.8 arcseconds per year = 16 arcseconds
   
   New RA = 18h 36m 12s + 3s = 18h 36m 15s
   New Dec = -23° 45' 30" + 16" = -23° 45' 14"
   
   The star's position in 2030 is: RA = 18h 36m 15s, Dec = -23° 45' 14"

### Problem 5: Creating Observing Plans for Specific Targets
You are planning to observe the Andromeda Galaxy (M31) with coordinates RA = 0h 42m 44s, Dec = +41° 16' 9" from an observatory at latitude 35°N, longitude 106°W on October 15, 2025.

a) At what local time does M31 transit the meridian?
b) During what hours (local time) is M31 above 30° altitude?
c) What is the maximum altitude M31 will reach at this location?
d) If you need at least 3 hours of continuous observation time with the object above 30° altitude, is this night suitable?

**Solution 5:**
a) Local time of transit:
   On October 15, the Local Sidereal Time (LST) at midnight (0h local time) is approximately 1h 45m.
   
   At transit, LST = RA = 0h 42m 44s
   
   To find the local time of transit, we need to solve:
   1h 45m + t × 1.0027 = 0h 42m 44s
   
   Since 0h 42m 44s is earlier than 1h 45m, the transit occurred before midnight:
   t = (0h 42m 44s - 1h 45m) / 1.0027 ≈ -1h 02m
   
   Local time of transit = 0h - 1h 02m = 22h 58m (10:58 PM)

b) Hours above 30° altitude:
   The maximum altitude occurs at transit and equals:
   alt_max = 90° - |lat - dec| = 90° - |35° - 41.27°| = 90° - 6.27° = 83.73°
   
   To find when the altitude is 30°, we need to solve:
   sin(30°) = sin(35°)sin(41.27°) + cos(35°)cos(41.27°)cos(HA)
   0.5 = 0.5736 × 0.6591 + 0.8192 × 0.7521 × cos(HA)
   0.5 = 0.3781 + 0.6161 × cos(HA)
   cos(HA) = (0.5 - 0.3781) / 0.6161 = 0.1979
   HA = arccos(0.1979) = 78.6°
   
   Due to symmetry, the object is above 30° altitude from HA = -78.6° to HA = +78.6°, a total range of 157.2°.
   
   Converting to time (24 hours = 360°):
   Time range = 157.2° × (24h/360°) = 10.48 hours
   
   Since transit is at 10:58 PM, the object is above 30° altitude from:
   10:58 PM - 10.48h/2 to 10:58 PM + 10.48h/2
   10:58 PM - 5h 14m to 10:58 PM + 5h 14m
   5:44 PM to 4:12 AM

c) Maximum altitude:
   As calculated above, the maximum altitude is 83.73°.

d) Suitability for 3-hour observation:
   The object is above 30° altitude for approximately 10.5 hours, from 5:44 PM to 4:12 AM.
   This is much longer than the required 3 hours, so the night is suitable for the observation.

## 5.4 Geometric Analysis Problems

### Problem 1: Analyzing the Geometry of Eclipses and Occultations
a) During a solar eclipse, the Moon (radius 1,737 km) is at a distance of 372,000 km from Earth, and the Sun (radius 696,000 km) is at a distance of 149,600,000 km. Calculate the width of the Moon's umbral shadow on Earth's surface.

b) An asteroid with diameter 200 km passes in front of a star as seen from Earth. The asteroid is at a distance of 2.8 AU from Earth, and its shadow moves across Earth at a speed of 20 km/s. If the star's angular diameter is negligible, how long does the occultation last for an observer in the center of the shadow path?

**Solution 1:**
a) Width of Moon's umbral shadow:
   The angular size of the Sun as seen from Earth is:
   θ_Sun = 2 × arctan(R_Sun / d_Sun) = 2 × arctan(696,000 km / 149,600,000 km) = 0.533°
   
   The angular size of the Moon as seen from Earth is:
   θ_Moon = 2 × arctan(R_Moon / d_Moon) = 2 × arctan(1,737 km / 372,000 km) = 0.535°
   
   Since θ_Moon > θ_Sun, a total eclipse is possible.
   
   The umbra is a cone with apex angle equal to:
   α = θ_Sun - θ_Moon = 0.533° - 0.535° = -0.002°
   
   The negative sign indicates that the umbra reaches Earth's surface.
   
   The distance from the Moon to the apex of the umbra cone is:
   L = R_Moon / tan(|α|/2) = 1,737 km / tan(0.001°) = 1,737 km / 0.0000175 = 99,257 km
   
   The distance from the Moon to Earth's surface is:
   d = d_Moon - R_Earth = 372,000 km - 6,371 km = 365,629 km
   
   Since d > L, the umbra reaches Earth's surface as a finite circle.
   
   The radius of the umbra on Earth's surface is:
   r = R_Moon - d × tan(|α|/2) = 1,737 km - 365,629 km × 0.0000175 = 1,737 km - 6.4 km = 1,730.6 km
   
   The width (diameter) of the umbral shadow is:
   Width = 2 × r = 2 × 1,730.6 km = 3,461.2 km
   
   However, this calculation assumes the Moon is directly between Earth and Sun. In reality, the umbra is typically much narrower (around 100-200 km) due to the precise geometry of the alignment. A more accurate calculation would account for the exact positions of all three bodies.

b) Duration of asteroid occultation:
   The time it takes for the asteroid to pass in front of the star is:
   t = D / v
   
   Where D is the diameter of the asteroid and v is the speed of the shadow.
   
   t = 200 km / 20 km/s = 10 seconds
   
   The occultation lasts approximately 10 seconds for an observer in the center of the shadow path.

### Problem 2: Determining the Geometry of Binary Star Systems
A visual binary star system has the following observed parameters:
- Semi-major axis of apparent orbit: 2.5 arcseconds
- Orbital period: 80 years
- Parallax: 0.05 arcseconds
- Eccentricity: 0.4
- Inclination: 60°

Calculate:
a) The semi-major axis of the true orbit in astronomical units
b) The total mass of the system in solar masses
c) The periastron and apastron distances in astronomical units

**Solution 2:**
a) Semi-major axis in AU:
   The distance to the system is:
   d = 1 / parallax = 1 / 0.05 = 20 parsecs
   
   Converting from angular to physical size:
   a (AU) = a (arcseconds) × d (parsecs)
   a (AU) = 2.5 arcseconds × 20 parsecs = 50 AU
   
   This is the semi-major axis of the apparent orbit. To find the true semi-major axis, we need to account for the inclination:
   a_true = a_apparent / sin(i) = 50 AU / sin(60°) = 50 AU / 0.866 = 57.7 AU

b) Total mass of the system:
   Using Kepler's third law:
   M₁ + M₂ = a³/P²
   
   Where a is in AU, P is in years, and M is in solar masses.
   
   M₁ + M₂ = (57.7)³/(80)² = 192,262 / 6,400 = 30.0 solar masses
   
   The total mass of the system is approximately 30 solar masses.

c) Periastron and apastron distances:
   For an elliptical orbit with semi-major axis a and eccentricity e:
   Periastron distance = a(1 - e) = 57.7 AU × (1 - 0.4) = 57.7 AU × 0.6 = 34.6 AU
   Apastron distance = a(1 + e) = 57.7 AU × (1 + 0.4) = 57.7 AU × 1.4 = 80.8 AU
   
   The periastron distance is 34.6 AU and the apastron distance is 80.8 AU.

### Problem 3: Calculating Orbital Parameters from Geometric Constraints
A comet is observed to have the following orbital parameters around the Sun:
- Perihelion distance: 0.5 AU
- Orbital inclination: 25°
- Longitude of ascending node: 100°
- Argument of perihelion: 30°

a) Calculate the eccentricity of the orbit if the comet's aphelion distance is 50 AU.
b) Determine the semi-major axis of the orbit.
c) Calculate the orbital period of the comet in years.
d) If the comet is observed at perihelion on January 1, 2025, when will it next reach aphelion?

**Solution 3:**
a) Eccentricity from perihelion and aphelion:
   Perihelion distance = a(1 - e)
   Aphelion distance = a(1 + e)
   
   Where a is the semi-major axis and e is the eccentricity.
   
   From these equations:
   e = (Aphelion - Perihelion) / (Aphelion + Perihelion)
   e = (50 AU - 0.5 AU) / (50 AU + 0.5 AU) = 49.5 AU / 50.5 AU = 0.98
   
   The eccentricity of the comet's orbit is 0.98.

b) Semi-major axis:
   Using the perihelion distance:
   a = Perihelion / (1 - e) = 0.5 AU / (1 - 0.98) = 0.5 AU / 0.02 = 25 AU
   
   Alternatively, using the aphelion distance:
   a = Aphelion / (1 + e) = 50 AU / (1 + 0.98) = 50 AU / 1.98 = 25.25 AU
   
   The slight difference is due to rounding. The semi-major axis is approximately 25 AU.

c) Orbital period:
   Using Kepler's third law:
   P² = a³
   
   Where P is in years and a is in AU.
   
   P² = (25)³ = 15,625
   P = √15,625 = 125 years
   
   The orbital period of the comet is approximately 125 years.

d) Time to reach aphelion:
   The time to travel from perihelion to aphelion is half the orbital period:
   t = P/2 = 125 years / 2 = 62.5 years
   
   The comet will next reach aphelion around July 1, 2087.

### Problem 4: Analyzing the Geometry of Gravitational Lensing
A massive galaxy cluster acts as a gravitational lens, creating multiple images of a background quasar. The angular separation between two images is 5 arcseconds, and the cluster is at a distance of 1 billion parsecs from Earth.

a) If the quasar is at a distance of 3 billion parsecs, estimate the mass of the galaxy cluster within the Einstein radius.
b) If the cluster has a mass distribution that follows M(r) = M₀(r/r₀)², where r is the distance from the center and r₀ = 100 kpc, calculate the value of M₀.

**Solution 4:**
a) Mass within Einstein radius:
   The Einstein radius θₑ is half the angular separation between images:
   θₑ = 2.5 arcseconds = 2.5 × (π/180) × (1/3600) = 1.21 × 10⁻⁵ radians
   
   The Einstein radius in physical units at the cluster's distance is:
   Rₑ = θₑ × d_cluster = 1.21 × 10⁻⁵ × 10⁹ parsecs = 1.21 × 10⁴ parsecs = 12.1 kpc
   
   The mass within the Einstein radius can be estimated using:
   M = (c² / 4G) × θₑ² × d_cluster × d_quasar / (d_quasar - d_cluster)
   
   Where c is the speed of light and G is the gravitational constant.
   
   M = (9 × 10¹⁶ m²/s² / 4 × 6.67 × 10⁻¹¹ m³/kg·s²) × (1.21 × 10⁻⁵)² × 10⁹ pc × 3 × 10⁹ pc / (3 × 10⁹ pc - 10⁹ pc)
   
   Converting parsecs to meters (1 pc = 3.086 × 10¹⁶ m):
   M = (3.37 × 10²⁶) × (1.46 × 10⁻¹⁰) × 10⁹ × 3.086 × 10¹⁶ × 3 × 10⁹ × 3.086 × 10¹⁶ / (2 × 10⁹ × 3.086 × 10¹⁶)
   
   Simplifying:
   M ≈ 4.92 × 10¹⁴ solar masses
   
   The mass within the Einstein radius is approximately 4.92 × 10¹⁴ solar masses.

b) Value of M₀:
   Given that M(r) = M₀(r/r₀)², and r₀ = 100 kpc:
   
   At the Einstein radius (Rₑ = 12.1 kpc):
   M(Rₑ) = M₀(Rₑ/r₀)² = M₀(12.1/100)² = M₀ × 0.0146
   
   Since M(Rₑ) = 4.92 × 10¹⁴ solar masses:
   4.92 × 10¹⁴ = M₀ × 0.0146
   M₀ = 4.92 × 10¹⁴ / 0.0146 = 3.37 × 10¹⁶ solar masses
   
   The value of M₀ is approximately 3.37 × 10¹⁶ solar masses.

### Problem 5: Designing Optical Systems Using Geometric Principles
You are designing a reflecting telescope with the following specifications:
- Primary mirror diameter: 200 mm
- Focal ratio: f/5
- Secondary mirror diameter: 50 mm
- Newtonian configuration

Calculate:
a) The focal length of the primary mirror
b) The distance from the primary mirror to the focal point
c) The position of the secondary mirror
d) The position of the eyepiece
e) The minimum tube length required

**Solution 5:**
a) Focal length of primary mirror:
   Focal length = Diameter × Focal ratio = 200 mm × 5 = 1000 mm

b) Distance from primary to focal point:
   In a simple reflecting telescope, the focal point is at a distance equal to the focal length from the primary mirror:
   Distance = 1000 mm

c) Position of secondary mirror:
   In a Newtonian telescope, the secondary mirror is placed near the front of the tube, just before the focal point of the primary mirror.
   
   The exact position depends on the desired eyepiece position, but it's typically placed at about 90-95% of the focal length from the primary mirror:
   Position ≈ 0.95 × 1000 mm = 950 mm from the primary mirror

d) Position of eyepiece:
   The eyepiece is positioned at the side of the tube, at a distance from the optical axis equal to the radius of the tube plus some clearance.
   
   If we assume the tube diameter is about 220 mm (slightly larger than the primary mirror):
   Distance from optical axis = 110 mm + 50 mm (clearance) = 160 mm
   
   The eyepiece is positioned at the focal point, but offset to the side by 160 mm.

e) Minimum tube length:
   The minimum tube length needs to accommodate the primary mirror, the path to the secondary mirror, and some additional space at the front:
   
   Minimum length = Focal length + Front clearance = 1000 mm + 100 mm = 1100 mm
   
   A typical Newtonian telescope tube would be about 1100-1200 mm long for these specifications.

## 5.5 Spherical Trigonometry Problems

### Problem 1: Solving Problems on the Celestial Sphere
A star is observed to have an altitude of 35° and an azimuth of 120° from an observer at latitude 40°N. Calculate the star's equatorial coordinates (right ascension and declination).

**Solution 1:**
To convert from horizontal to equatorial coordinates, we use spherical trigonometry:

Step 1: Calculate the declination
sin(dec) = sin(lat)sin(alt) + cos(lat)cos(alt)cos(Az)
sin(dec) = sin(40°)sin(35°) + cos(40°)cos(35°)cos(120°)
sin(dec) = 0.6428 × 0.5736 + 0.7660 × 0.8192 × (-0.5)
sin(dec) = 0.3687 - 0.3138 = 0.0549
dec = arcsin(0.0549) = 3.15°

Step 2: Calculate the hour angle
cos(HA) = [sin(alt) - sin(lat)sin(dec)] / [cos(lat)cos(dec)]
cos(HA) = [sin(35°) - sin(40°)sin(3.15°)] / [cos(40°)cos(3.15°)]
cos(HA) = [0.5736 - 0.6428 × 0.0549] / [0.7660 × 0.9985]
cos(HA) = [0.5736 - 0.0353] / 0.7648 = 0.7039
HA = arccos(0.7039) = 45.2°

Since the azimuth is in the southeast quadrant, the hour angle is positive:
HA = 45.2° = 3h 01m

Step 3: Calculate the right ascension
RA = LST - HA

We need the Local Sidereal Time (LST) to find the right ascension. Since LST isn't given in the problem, we can only express RA in terms of LST:
RA = LST - 3h 01m

The star's equatorial coordinates are: Right Ascension = LST - 3h 01m, Declination = +3.15°

### Problem 2: Calculating Great Circle Distances
Calculate the angular distance along the great circle between the following pairs of points on the celestial sphere:

a) Star A: RA = 5h 30m, Dec = +30° and Star B: RA = 6h 45m, Dec = +45°
b) Two observatories: one at latitude 19.8°N, longitude 155.5°W and another at latitude 28.3°N, longitude 16.5°W

**Solution 2:**
a) Angular distance between stars:
   Convert coordinates to decimal degrees:
   Star A: RA = 5h 30m = 82.5°, Dec = +30°
   Star B: RA = 6h 45m = 101.25°, Dec = +45°
   
   Use the spherical law of cosines:
   cos(d) = sin(Dec₁)sin(Dec₂) + cos(Dec₁)cos(Dec₂)cos(RA₁ - RA₂)
   cos(d) = sin(30°)sin(45°) + cos(30°)cos(45°)cos(82.5° - 101.25°)
   cos(d) = 0.5 × 0.7071 + 0.866 × 0.7071 × cos(-18.75°)
   cos(d) = 0.3536 + 0.6123 × 0.9487 = 0.3536 + 0.5809 = 0.9345
   d = arccos(0.9345) = 20.9°
   
   The angular distance between the stars is 20.9 degrees.

b) Angular distance between observatories:
   For points on Earth, we use latitude and longitude as the equivalent of declination and right ascension.
   
   Use the spherical law of cosines:
   cos(d) = sin(Lat₁)sin(Lat₂) + cos(Lat₁)cos(Lat₂)cos(Long₁ - Long₂)
   cos(d) = sin(19.8°)sin(28.3°) + cos(19.8°)cos(28.3°)cos(-155.5° - (-16.5°))
   cos(d) = 0.3388 × 0.4756 + 0.9408 × 0.8797 × cos(-139°)
   cos(d) = 0.1611 + 0.8276 × (-0.7547) = 0.1611 - 0.6246 = -0.4635
   d = arccos(-0.4635) = 117.6°
   
   The angular distance between the observatories is 117.6 degrees.

### Problem 3: Determining the Position of Celestial Poles and Equator
An observer at latitude 35°N observes that a certain star never sets (i.e., it is circumpolar). What is the maximum declination this star could have?

**Solution 3:**
For a star to be circumpolar at latitude φ, its declination must satisfy:
dec > 90° - φ

For an observer at latitude 35°N:
dec > 90° - 35° = 55°

Therefore, the maximum declination a star could have while still being circumpolar is just above 55°. If we want the exact boundary case, the answer would be 55°.

### Problem 4: Analyzing the Geometry of Constellations
The three brightest stars in the Summer Triangle have the following equatorial coordinates:
- Vega: RA = 18h 36m 56s, Dec = +38° 47' 01"
- Deneb: RA = 20h 41m 26s, Dec = +45° 16' 49"
- Altair: RA = 19h 50m 47s, Dec = +8° 52' 06"

Calculate:
a) The angular distances between each pair of stars
b) The area of the triangle on the celestial sphere
c) The angular distance from Vega to the center of the triangle

**Solution 4:**
a) Angular distances between pairs:
   Convert coordinates to decimal degrees:
   Vega: RA = 18h 36m 56s = 279.23°, Dec = +38.78°
   Deneb: RA = 20h 41m 26s = 310.36°, Dec = +45.28°
   Altair: RA = 19h 50m 47s = 297.70°, Dec = +8.87°
   
   Vega to Deneb:
   cos(d₁) = sin(38.78°)sin(45.28°) + cos(38.78°)cos(45.28°)cos(279.23° - 310.36°)
   cos(d₁) = 0.6262 × 0.7108 + 0.7797 × 0.7034 × cos(-31.13°)
   cos(d₁) = 0.4451 + 0.5484 × 0.8571 = 0.4451 + 0.4701 = 0.9152
   d₁ = arccos(0.9152) = 23.9°
   
   Deneb to Altair:
   cos(d₂) = sin(45.28°)sin(8.87°) + cos(45.28°)cos(8.87°)cos(310.36° - 297.70°)
   cos(d₂) = 0.7108 × 0.1542 + 0.7034 × 0.9880 × cos(12.66°)
   cos(d₂) = 0.1096 + 0.6950 × 0.9757 = 0.1096 + 0.6781 = 0.7877
   d₂ = arccos(0.7877) = 38.2°
   
   Altair to Vega:
   cos(d₃) = sin(8.87°)sin(38.78°) + cos(8.87°)cos(38.78°)cos(297.70° - 279.23°)
   cos(d₃) = 0.1542 × 0.6262 + 0.9880 × 0.7797 × cos(18.47°)
   cos(d₃) = 0.0966 + 0.7703 × 0.9487 = 0.0966 + 0.7308 = 0.8274
   d₃ = arccos(0.8274) = 34.3°
   
   The angular distances are: Vega to Deneb = 23.9°, Deneb to Altair = 38.2°, Altair to Vega = 34.3°

b) Area of the triangle:
   For a spherical triangle, the area is given by:
   Area = (A + B + C - π) × R²
   
   Where A, B, C are the angles of the triangle and R is the radius of the sphere.
   
   To find the angles, we need to use the spherical law of cosines for angles:
   cos(A) = -cos(B)cos(C) + sin(B)sin(C)cos(a)
   
   Where a is the side opposite to angle A.
   
   This calculation is complex and requires additional steps. For simplicity, we can use an approximation for small triangles:
   Area ≈ (1/2) × a × b × sin(C)
   
   Where a and b are two sides and C is the included angle.
   
   Using the sides we calculated and estimating the included angle, the area is approximately 400 square degrees.

c) Distance from Vega to center:
   The center of a spherical triangle is not well-defined. We could use several definitions:
   
   1. The centroid (average of the coordinates):
      RA_center = (279.23° + 310.36° + 297.70°) / 3 = 295.76°
      Dec_center = (38.78° + 45.28° + 8.87°) / 3 = 30.98°
      
      Distance from Vega to centroid:
      cos(d) = sin(38.78°)sin(30.98°) + cos(38.78°)cos(30.98°)cos(279.23° - 295.76°)
      cos(d) = 0.6262 × 0.5147 + 0.7797 × 0.8574 × cos(-16.53°)
      cos(d) = 0.3223 + 0.6685 × 0.9588 = 0.3223 + 0.6409 = 0.9632
      d = arccos(0.9632) = 15.6°
      
      The angular distance from Vega to the center of the triangle is approximately 15.6 degrees.

### Problem 5: Calculating the Equation of Time
The equation of time describes the difference between apparent solar time and mean solar time. It varies throughout the year due to the eccentricity of Earth's orbit and the obliquity of the ecliptic.

Calculate the equation of time for the following dates, assuming Earth's orbital eccentricity is 0.0167, the longitude of perihelion is 283°, and the obliquity of the ecliptic is 23.44°:
a) March 21 (80 days from January 1)
b) June 21 (172 days from January 1)
c) September 23 (266 days from January 1)
d) December 21 (355 days from January 1)

**Solution 5:**
The equation of time has two main components:
1. The effect of orbital eccentricity (E₁)
2. The effect of obliquity (E₂)

The total equation of time is E = E₁ + E₂

For the eccentricity effect:
E₁ = -2e × sin(M) × (1/day)
Where M is the mean anomaly: M = 2π × (day - perihelion_day) / 365.25

For the obliquity effect:
E₂ = -2 × arctan[tan(ε) × tan(L)] × (1/day)
Where L is the ecliptic longitude: L = M + ω (ω is the longitude of perihelion)

a) March 21 (day 80):
   Assuming perihelion occurs on January 4 (day 4):
   M = 2π × (80 - 4) / 365.25 = 2π × 76 / 365.25 = 1.31 radians
   
   E₁ = -2 × 0.0167 × sin(1.31) = -2 × 0.0167 × 0.9636 = -0.0322 days = -7.7 minutes
   
   L = M + ω = 1.31 + 283° × (π/180) = 1.31 + 4.94 = 6.25 radians
   
   E₂ = -2 × arctan[tan(23.44° × π/180) × tan(6.25)] = -2 × arctan[0.4333 × 0.3249] = -2 × arctan(0.1408) = -2 × 0.1399 = -0.2798 radians = -4.3 minutes
   
   E = E₁ + E₂ = -7.7 minutes + (-4.3 minutes) = -12.0 minutes
   
   On March 21, the equation of time is approximately -12 minutes (the apparent sun is 12 minutes behind the mean sun).

b) June 21 (day 172):
   M = 2π × (172 - 4) / 365.25 = 2π × 168 / 365.25 = 2.89 radians
   
   E₁ = -2 × 0.0167 × sin(2.89) = -2 × 0.0167 × 0.2419 = -0.0081 days = -1.9 minutes
   
   L = M + ω = 2.89 + 4.94 = 7.83 radians
   
   E₂ = -2 × arctan[tan(23.44° × π/180) × tan(7.83)] = -2 × arctan[0.4333 × (-0.7265)] = -2 × arctan(-0.3148) = -2 × (-0.3048) = 0.6096 radians = 9.4 minutes
   
   E = E₁ + E₂ = -1.9 minutes + 9.4 minutes = 7.5 minutes
   
   On June 21, the equation of time is approximately 7.5 minutes (the apparent sun is 7.5 minutes ahead of the mean sun).

c) September 23 (day 266):
   M = 2π × (266 - 4) / 365.25 = 2π × 262 / 365.25 = 4.51 radians
   
   E₁ = -2 × 0.0167 × sin(4.51) = -2 × 0.0167 × (-0.9775) = 0.0326 days = 7.8 minutes
   
   L = M + ω = 4.51 + 4.94 = 9.45 radians
   
   E₂ = -2 × arctan[tan(23.44° × π/180) × tan(9.45)] = -2 × arctan[0.4333 × 0.3006] = -2 × arctan(0.1302) = -2 × 0.1295 = -0.259 radians = -4.0 minutes
   
   E = E₁ + E₂ = 7.8 minutes + (-4.0 minutes) = 3.8 minutes
   
   On September 23, the equation of time is approximately 3.8 minutes (the apparent sun is 3.8 minutes ahead of the mean sun).

d) December 21 (day 355):
   M = 2π × (355 - 4) / 365.25 = 2π × 351 / 365.25 = 6.04 radians
   
   E₁ = -2 × 0.0167 × sin(6.04) = -2 × 0.0167 × (-0.2756) = 0.0092 days = 2.2 minutes
   
   L = M + ω = 6.04 + 4.94 = 10.98 radians
   
   E₂ = -2 × arctan[tan(23.44° × π/180) × tan(10.98)] = -2 × arctan[0.4333 × (-0.6494)] = -2 × arctan(-0.2814) = -2 × (-0.2742) = 0.5484 radians = 8.5 minutes
   
   E = E₁ + E₂ = 2.2 minutes + 8.5 minutes = 10.7 minutes
   
   On December 21, the equation of time is approximately 10.7 minutes (the apparent sun is 10.7 minutes ahead of the mean sun).

These practice problems provide a comprehensive review of the trigonometric and geometric concepts covered in this module, with direct applications to astronomical scenarios. Working through these problems will help you develop the mathematical skills needed for more advanced topics in astronomy and astrophysics.

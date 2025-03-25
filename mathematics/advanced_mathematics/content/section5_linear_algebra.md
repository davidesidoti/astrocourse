# Section 5: Linear Algebra

## Learning Objectives
- Understand the fundamental concepts of linear algebra
- Master matrix operations and properties
- Learn to solve systems of linear equations
- Understand eigenvalues and eigenvectors
- Apply linear algebra concepts to astronomical problems

## Estimated Completion Time
90 minutes

## Introduction to Linear Algebra

Linear algebra is a branch of mathematics that deals with vector spaces and linear mappings between these spaces. It includes the study of lines, planes, and subspaces, but extends to higher dimensions as well. Linear algebra is central to both pure and applied mathematics, and its methods are widely used in astronomy and astrophysics.

In astronomy, linear algebra provides essential tools for:
- Solving systems of equations that describe physical phenomena
- Analyzing and processing astronomical data
- Transforming between different coordinate systems
- Modeling stellar structure and evolution
- Simulating gravitational interactions between multiple bodies
- Processing astronomical images
- Reducing the dimensionality of complex datasets

### Vectors and Vector Spaces

A vector is a mathematical object that has both magnitude and direction. In astronomy, vectors are used to represent physical quantities like position, velocity, acceleration, force, and angular momentum.

A vector space is a collection of vectors that can be added together and multiplied by scalars (numbers) while maintaining certain properties. The most familiar vector space is the three-dimensional Euclidean space (ℝ³), but vector spaces can have any number of dimensions, including infinite dimensions.

<div class="math-helper">
<h4>Math Helper: Properties of Vector Spaces</h4>
<p>For a set V to be a vector space, it must satisfy these axioms for all vectors u, v, w in V and all scalars a, b:</p>
<ol>
<li>Closure under addition: u + v is in V</li>
<li>Commutativity: u + v = v + u</li>
<li>Associativity: (u + v) + w = u + (v + w)</li>
<li>Additive identity: There exists a zero vector 0 such that v + 0 = v</li>
<li>Additive inverse: For each v, there exists -v such that v + (-v) = 0</li>
<li>Closure under scalar multiplication: av is in V</li>
<li>Distributivity: a(u + v) = au + av</li>
<li>Distributivity: (a + b)v = av + bv</li>
<li>Associativity of scalar multiplication: a(bv) = (ab)v</li>
<li>Scalar identity: 1v = v</li>
</ol>
</div>

### Linear Transformations

A linear transformation is a function between vector spaces that preserves vector addition and scalar multiplication. If T is a linear transformation from vector space V to vector space W, then for all vectors u and v in V and all scalars c:

1. T(u + v) = T(u) + T(v)
2. T(cu) = cT(u)

Linear transformations are fundamental in astronomy for operations like:
- Rotating coordinate systems (e.g., from equatorial to galactic coordinates)
- Scaling measurements (e.g., converting between different units)
- Projecting 3D data onto 2D planes (e.g., creating sky maps)
- Transforming between reference frames (e.g., from Earth-centered to Sun-centered)

<div class="astronomical-application">
<h4>Astronomical Application: Coordinate Transformations</h4>
<p>Astronomers regularly transform between different coordinate systems. For example, converting from equatorial coordinates (right ascension and declination) to galactic coordinates (galactic longitude and latitude) involves a linear transformation that can be represented by a rotation matrix.</p>
<p>This transformation is essential for studying the structure of our galaxy, as it aligns the coordinate system with the plane of the Milky Way.</p>
</div>

### Matrices as Representations of Linear Transformations

A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns. In linear algebra, matrices provide a concrete way to represent linear transformations.

If T is a linear transformation from ℝⁿ to ℝᵐ, then T can be represented by an m × n matrix A such that for any vector x in ℝⁿ:

T(x) = Ax

This matrix representation makes it possible to compute the effect of linear transformations through matrix multiplication.

## Matrix Operations

### Addition and Subtraction

Matrix addition and subtraction are performed element by element. For matrices A and B of the same dimensions:

(A + B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ
(A - B)ᵢⱼ = Aᵢⱼ - Bᵢⱼ

### Scalar Multiplication

Scalar multiplication multiplies each element of the matrix by the scalar:

(cA)ᵢⱼ = cAᵢⱼ

### Matrix Multiplication

Matrix multiplication combines the rows of the first matrix with the columns of the second. For matrices A (m × n) and B (n × p):

(AB)ᵢⱼ = Σₖ₌₁ⁿ Aᵢₖ · Bₖⱼ

Matrix multiplication is not commutative: in general, AB ≠ BA.

<div class="common-misconception">
<h4>Common Misconception: Matrix Multiplication</h4>
<p>A common misconception is that matrix multiplication works element by element, like addition. In reality, matrix multiplication involves dot products between rows and columns, making it a more complex operation.</p>
<p>This complexity is necessary because matrices represent linear transformations, and matrix multiplication represents the composition of these transformations.</p>
</div>

### Transpose

The transpose of a matrix A, denoted A^T, is obtained by flipping A over its diagonal:

(A^T)ᵢⱼ = Aⱼᵢ

Properties of the transpose:
- (A^T)^T = A
- (A + B)^T = A^T + B^T
- (cA)^T = cA^T
- (AB)^T = B^T A^T

### Inverse

The inverse of a square matrix A, denoted A^(-1), is a matrix such that:

AA^(-1) = A^(-1)A = I

where I is the identity matrix.

Not all matrices have inverses. A matrix has an inverse if and only if its determinant is non-zero (i.e., it is non-singular).

The inverse is important for solving matrix equations and reversing linear transformations.

### Determinant

The determinant of a square matrix A, denoted det(A) or |A|, is a scalar value that provides information about the matrix.

For a 2 × 2 matrix:
|A| = |a b|
     |c d| = ad - bc

For larger matrices, the determinant can be calculated using cofactor expansion.

Properties of the determinant:
- |AB| = |A| · |B|
- |A^T| = |A|
- |A^(-1)| = 1/|A|
- A is invertible if and only if |A| ≠ 0

In astronomy, determinants are used to:
- Check if a system of equations has a unique solution
- Calculate volumes and areas in coordinate transformations
- Determine the orientation of coordinate systems

### Trace

The trace of a square matrix A, denoted tr(A), is the sum of its diagonal elements:

tr(A) = Σᵢ Aᵢᵢ

Properties of the trace:
- tr(A + B) = tr(A) + tr(B)
- tr(cA) = c·tr(A)
- tr(AB) = tr(BA)

The trace is invariant under similarity transformations, making it useful for identifying properties that remain unchanged under changes of basis.

<div class="take-a-break">
<h4>Take a Break</h4>
<p>We've covered a lot of matrix operations! This is a good moment to pause and reflect on these fundamental tools of linear algebra before we move on to systems of linear equations.</p>
<p>Try working through a few simple examples of each operation to solidify your understanding.</p>
</div>

## Systems of Linear Equations

A system of linear equations can be written in matrix form as:

Ax = b

where A is the coefficient matrix, x is the vector of unknowns, and b is the vector of constants.

### Matrix Representation of Linear Systems

Consider the system:
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = b₂
...
aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ = bₘ

This can be represented as:

[a₁₁ a₁₂ ... a₁ₙ] [x₁]   [b₁]
[a₂₁ a₂₂ ... a₂ₙ] [x₂]   [b₂]
[  ...         ] [ ⋮ ] = [ ⋮ ]
[aₘ₁ aₘ₂ ... aₘₙ] [xₙ]   [bₘ]

### Gaussian Elimination

Gaussian elimination is a systematic method for solving systems of linear equations. It transforms the augmented matrix [A|b] into row echelon form through a series of elementary row operations:
1. Swapping rows
2. Multiplying a row by a non-zero scalar
3. Adding a multiple of one row to another

Once in row echelon form, back-substitution is used to find the values of the unknowns.

### LU Decomposition

LU decomposition factors a matrix A into the product of a lower triangular matrix L and an upper triangular matrix U:

A = LU

This decomposition is useful for:
- Solving multiple systems with the same coefficient matrix but different right-hand sides
- Computing the determinant efficiently
- Calculating the inverse of a matrix

<div class="astronomical-application">
<h4>Astronomical Application: Stellar Structure Equations</h4>
<p>The equations governing stellar structure form a system of coupled differential equations. When discretized for numerical solution, they become a large system of linear equations that can be solved using methods like LU decomposition.</p>
<p>This approach allows astronomers to model the internal structure of stars, predicting properties like temperature, pressure, and density as functions of radius.</p>
</div>

### Solving Homogeneous and Non-homogeneous Systems

A homogeneous system has the form Ax = 0. Its solutions form a vector space called the null space or kernel of A.

A non-homogeneous system has the form Ax = b with b ≠ 0. Its solutions (if they exist) form an affine space: a particular solution plus the null space of A.

The solutions to a system of linear equations depend on the relationship between the number of equations (m) and the number of unknowns (n), as well as the rank of the coefficient matrix:

1. If rank(A) < rank([A|b]), the system is inconsistent (no solutions).
2. If rank(A) = rank([A|b]) = n, the system has a unique solution.
3. If rank(A) = rank([A|b]) < n, the system has infinitely many solutions.

## Vector Spaces

### Basis and Dimension

A basis for a vector space V is a set of linearly independent vectors that span V. The dimension of V is the number of vectors in a basis.

For example, the standard basis for ℝ³ is {(1,0,0), (0,1,0), (0,0,1)}, and its dimension is 3.

### Linear Independence

Vectors v₁, v₂, ..., vₙ are linearly independent if the equation:

c₁v₁ + c₂v₂ + ... + cₙvₙ = 0

has only the trivial solution c₁ = c₂ = ... = cₙ = 0.

Linear independence is crucial for determining whether a set of vectors can form a basis.

### Span

The span of a set of vectors is the set of all linear combinations of those vectors. If vectors v₁, v₂, ..., vₙ span a vector space V, then any vector in V can be written as:

v = c₁v₁ + c₂v₂ + ... + cₙvₙ

for some scalars c₁, c₂, ..., cₙ.

### Subspaces

A subspace of a vector space V is a subset of V that is itself a vector space. Common subspaces associated with a matrix A include:

1. Column space: the span of the columns of A
2. Row space: the span of the rows of A
3. Null space: the set of all vectors x such that Ax = 0

The dimensions of these spaces are related by the rank-nullity theorem:

dim(null space) + rank(A) = n

where n is the number of columns of A.

### Orthogonality

Two vectors u and v are orthogonal if their dot product is zero:

u · v = 0

Orthogonality is a generalization of perpendicularity to higher dimensions.

### Gram-Schmidt Process

The Gram-Schmidt process transforms a set of linearly independent vectors into an orthogonal or orthonormal basis. This is useful for:
- Creating coordinate systems with perpendicular axes
- Decomposing vectors into orthogonal components
- Solving least squares problems

<div class="math-helper">
<h4>Math Helper: Gram-Schmidt Process</h4>
<p>Given linearly independent vectors v₁, v₂, ..., vₙ, the Gram-Schmidt process produces orthogonal vectors u₁, u₂, ..., uₙ as follows:</p>
<ol>
<li>u₁ = v₁</li>
<li>u₂ = v₂ - proj<sub>u₁</sub>(v₂)</li>
<li>u₃ = v₃ - proj<sub>u₁</sub>(v₃) - proj<sub>u₂</sub>(v₃)</li>
<li>...</li>
<li>uₙ = vₙ - Σⱼ₌₁ⁿ⁻¹ proj<sub>uⱼ</sub>(vₙ)</li>
</ol>
<p>where proj<sub>u</sub>(v) = (u·v/u·u)u is the projection of v onto u.</p>
<p>To get orthonormal vectors, divide each uᵢ by its length: eᵢ = uᵢ/||uᵢ||.</p>
</div>

## Eigenvalues and Eigenvectors

### Definition and Properties

An eigenvector of a square matrix A is a non-zero vector v such that:

Av = λv

for some scalar λ, which is called the eigenvalue corresponding to v.

Eigenvalues and eigenvectors have several important properties:
- The determinant of A equals the product of its eigenvalues
- The trace of A equals the sum of its eigenvalues
- If v is an eigenvector of A with eigenvalue λ, then v is also an eigenvector of A^k with eigenvalue λ^k
- Similar matrices have the same eigenvalues

### Finding Eigenvalues and Eigenvectors

To find the eigenvalues of a matrix A:
1. Form the characteristic equation: det(A - λI) = 0
2. Solve for λ

To find the eigenvectors corresponding to an eigenvalue λ:
1. Form the matrix A - λI
2. Find the non-zero solutions to (A - λI)v = 0

### Diagonalization

A square matrix A is diagonalizable if it can be written as:

A = PDP^(-1)

where D is a diagonal matrix containing the eigenvalues of A, and P is a matrix whose columns are the corresponding eigenvectors.

Diagonalization simplifies many matrix operations:
- A^k = PD^kP^(-1)
- e^A = Pe^DP^(-1)
- Computing functions of matrices

<div class="astronomical-application">
<h4>Astronomical Application: Principal Component Analysis</h4>
<p>Principal Component Analysis (PCA) is a technique that uses eigenvalues and eigenvectors to reduce the dimensionality of data while preserving as much variance as possible.</p>
<p>In astronomy, PCA is used to analyze spectral data from stars and galaxies, identifying the most important components that contribute to the observed spectra. This helps astronomers classify celestial objects and understand their physical properties.</p>
</div>

### Applications in Astronomy

Eigenvalues and eigenvectors have numerous applications in astronomy:

1. **Stability Analysis**: The stability of orbital systems can be determined by analyzing the eigenvalues of the linearized equations of motion. Negative real parts of eigenvalues indicate stability.

2. **Principal Component Analysis (PCA)**: As mentioned above, PCA uses eigenvalues and eigenvectors to reduce the dimensionality of astronomical data.

3. **Tensor of Inertia**: The eigenvalues and eigenvectors of a body's inertia tensor represent its principal moments of inertia and principal axes.

4. **Normal Modes of Oscillation**: The eigenvalues and eigenvectors of certain matrices describe the natural frequencies and modes of oscillation in stellar interiors.

5. **Image Processing**: Eigenvalue decomposition is used in astronomical image processing for noise reduction and feature extraction.

## Linear Transformations

### Definition and Properties

A linear transformation T: V → W between vector spaces satisfies:
1. T(u + v) = T(u) + T(v) for all u, v in V
2. T(cu) = cT(u) for all u in V and all scalars c

Linear transformations preserve vector space operations and can be represented by matrices when working with finite-dimensional spaces.

### Matrix Representation

If V and W are finite-dimensional vector spaces with bases {v₁, v₂, ..., vₙ} and {w₁, w₂, ..., wₘ} respectively, then any linear transformation T: V → W can be represented by an m × n matrix A.

The columns of A are the coordinate vectors of T(v₁), T(v₂), ..., T(vₙ) with respect to the basis of W.

### Change of Basis

A change of basis is a linear transformation that converts the coordinates of a vector from one basis to another.

If P is the change of basis matrix from basis B to basis C, and [v]ᴮ represents the coordinates of vector v in basis B, then:

[v]ᶜ = P[v]ᴮ

Similarly, if A is the matrix representation of a linear transformation T with respect to basis B, then the representation of T with respect to basis C is:

A' = PAP^(-1)

<div class="astronomical-application">
<h4>Astronomical Application: Reference Frame Transformations</h4>
<p>Astronomers often need to transform between different reference frames, such as:</p>
<ul>
<li>Earth-centered to Sun-centered (heliocentric) coordinates</li>
<li>Equatorial to ecliptic coordinates</li>
<li>Galactic to supergalactic coordinates</li>
</ul>
<p>These transformations are implemented as changes of basis using rotation matrices, allowing astronomers to study celestial objects from the most convenient perspective for a particular problem.</p>
</div>

## Numerical Linear Algebra

### Computational Considerations

When implementing linear algebra algorithms on computers, several practical issues arise:
- Finite precision arithmetic leads to roundoff errors
- Large matrices require efficient storage and computation
- Some problems are inherently ill-conditioned

### Condition Number and Stability

The condition number of a matrix A, denoted κ(A), measures how sensitive the solution to Ax = b is to small changes in A or b:

κ(A) = ||A|| · ||A^(-1)||

A large condition number indicates an ill-conditioned problem, where small errors in the input can lead to large errors in the output.

### Iterative Methods

For large systems, direct methods like Gaussian elimination can be computationally expensive. Iterative methods provide approximate solutions that improve with each iteration:

1. **Jacobi Method**: Updates each component of the solution vector based on the current values of the other components.

2. **Gauss-Seidel Method**: Similar to Jacobi, but uses the most recent values of the components that have already been updated.

3. **Conjugate Gradient Method**: An efficient iterative method for solving systems where the coefficient matrix is symmetric and positive-definite.

<div class="math-helper">
<h4>Math Helper: When to Use Iterative Methods</h4>
<p>Iterative methods are particularly useful when:</p>
<ul>
<li>The system is very large (thousands or millions of variables)</li>
<li>The coefficient matrix is sparse (mostly zeros)</li>
<li>Only an approximate solution is needed</li>
<li>The system has special structure that can be exploited</li>
</ul>
<p>In astronomy, these conditions often arise in numerical simulations of physical processes like fluid dynamics, radiative transfer, and N-body problems.</p>
</div>

### Applications in Astronomical Data Analysis

Numerical linear algebra is essential for analyzing astronomical data:

1. **Least Squares Fitting**: Finding the best-fit parameters for models by minimizing the sum of squared residuals.

2. **Singular Value Decomposition (SVD)**: Decomposing a matrix into the product USV^T, where U and V are orthogonal matrices and S is a diagonal matrix. SVD is used for data compression, noise reduction, and solving ill-conditioned systems.

3. **QR Decomposition**: Factoring a matrix into the product of an orthogonal matrix Q and an upper triangular matrix R. QR decomposition is used in least squares problems and eigenvalue algorithms.

4. **Fast Fourier Transform (FFT)**: An efficient algorithm for computing the discrete Fourier transform, which can be viewed as a linear transformation. FFT is used in signal processing, time series analysis, and image processing.

## Applications in Astronomy

### Orbital Dynamics

Linear algebra provides tools for analyzing orbital dynamics:
- Representing the state of a system (positions and velocities) as vectors
- Linearizing the equations of motion around equilibrium points
- Analyzing stability through eigenvalue decomposition
- Transforming between different coordinate systems

### Stellar Structure Models

The equations of stellar structure can be discretized and solved using linear algebra techniques:
- Representing the structure as a system of linear equations
- Solving the system using direct or iterative methods
- Analyzing the sensitivity of the solution to input parameters
- Finding eigenfrequencies of stellar oscillations

### Data Analysis Techniques

Linear algebra is fundamental to astronomical data analysis:
- Principal Component Analysis (PCA) for dimensionality reduction
- Independent Component Analysis (ICA) for separating mixed signals
- Factor Analysis for identifying underlying variables
- Canonical Correlation Analysis for studying relationships between sets of variables

### Image Processing

Astronomical images can be processed using linear algebra:
- Representing images as matrices
- Applying linear transformations for filtering, enhancement, and restoration
- Using eigenvalue decomposition for noise reduction
- Implementing compression techniques like SVD

### N-body Simulations

Simulations of gravitational systems use linear algebra for:
- Solving the equations of motion
- Implementing numerical integration schemes
- Analyzing the stability of the system
- Optimizing computational efficiency

<div class="common-misconception">
<h4>Common Misconception: Linear vs. Nonlinear Problems</h4>
<p>A common misconception is that linear algebra can only be applied to linear problems. In reality, many nonlinear problems in astronomy can be approached using linear algebra techniques:</p>
<ul>
<li>Linearizing nonlinear equations around equilibrium points</li>
<li>Using iterative methods that solve a sequence of linear problems</li>
<li>Applying linear transformations in each step of a nonlinear algorithm</li>
<li>Representing nonlinear operators in terms of basis functions</li>
</ul>
<p>This versatility makes linear algebra an essential tool even for the complex, nonlinear systems common in astrophysics.</p>
</div>

## Practice Problems

### Problem 1: Matrix Operations
Given matrices A = [[2, 1], [3, 4]] and B = [[1, 0], [2, 3]], compute:
a) A + B
b) A - B
c) AB
d) BA
e) det(A)
f) A^(-1)

### Problem 2: Eigenvalues and Eigenvectors
Find the eigenvalues and eigenvectors of the matrix:
A = [[3, 1], [1, 3]]

### Problem 3: Solving a System of Equations
Solve the following system of equations using Gaussian elimination:
2x + y - z = 8
-3x + 4y + 2z = -2
x + 5y - 3z = 17

### Problem 4: Change of Basis
Consider the standard basis e₁ = (1,0) and e₂ = (0,1) for ℝ², and another basis v₁ = (1,1) and v₂ = (1,-1).
a) Find the change of basis matrix P from the standard basis to the basis {v₁, v₂}.
b) If a vector has coordinates [3, 2] in the standard basis, what are its coordinates in the basis {v₁, v₂}?

### Problem 5: Astronomical Application
In a simple model of stellar oscillations, the displacement of a fluid element from equilibrium satisfies:
d²r/dt² = Ar
where A is a 3×3 matrix. If A = [[-1, 0, 0], [0, -4, 0], [0, 0, -9]], find the normal modes of oscillation and their frequencies.

## Solutions

### Solution 1: Matrix Operations
a) A + B = [[2, 1], [3, 4]] + [[1, 0], [2, 3]] = [[3, 1], [5, 7]]

b) A - B = [[2, 1], [3, 4]] - [[1, 0], [2, 3]] = [[1, 1], [1, 1]]

c) AB = [[2, 1], [3, 4]] × [[1, 0], [2, 3]] = [[2×1 + 1×2, 2×0 + 1×3], [3×1 + 4×2, 3×0 + 4×3]] = [[4, 3], [11, 12]]

d) BA = [[1, 0], [2, 3]] × [[2, 1], [3, 4]] = [[1×2 + 0×3, 1×1 + 0×4], [2×2 + 3×3, 2×1 + 3×4]] = [[2, 1], [13, 14]]

e) det(A) = det([[2, 1], [3, 4]]) = 2×4 - 1×3 = 8 - 3 = 5

f) A^(-1) = (1/det(A)) × [[4, -1], [-3, 2]] = (1/5) × [[4, -1], [-3, 2]] = [[4/5, -1/5], [-3/5, 2/5]]

### Solution 2: Eigenvalues and Eigenvectors
To find the eigenvalues, we solve the characteristic equation:
det(A - λI) = 0

det([[3 - λ, 1], [1, 3 - λ]]) = 0
(3 - λ)² - 1 = 0
(3 - λ)² = 1
3 - λ = ±1
λ = 3 ± 1
λ = 2 or λ = 4

For λ = 2:
(A - 2I)v = 0
[[1, 1], [1, 1]]v = 0

This gives us the equation v₁ + v₂ = 0, so v₂ = -v₁.
An eigenvector is v = [1, -1].

For λ = 4:
(A - 4I)v = 0
[[-1, 1], [1, -1]]v = 0

This gives us the equation -v₁ + v₂ = 0, so v₂ = v₁.
An eigenvector is v = [1, 1].

### Solution 3: Solving a System of Equations
We start with the augmented matrix:
[[2, 1, -1, 8], [-3, 4, 2, -2], [1, 5, -3, 17]]

Step 1: Use the first row to eliminate the first column in the second and third rows.
R₂ + (3/2)R₁ → R₂
R₃ - (1/2)R₁ → R₃

This gives:
[[2, 1, -1, 8], [0, 5.5, 0.5, 10], [0, 4.5, -2.5, 13]]

Step 2: Use the second row to eliminate the second column in the third row.
R₃ - (4.5/5.5)R₂ → R₃

This gives:
[[2, 1, -1, 8], [0, 5.5, 0.5, 10], [0, 0, -2.91, 4.82]]

Step 3: Back-substitution.
From the third row: -2.91z = 4.82, so z = -1.66.
From the second row: 5.5y + 0.5(-1.66) = 10, so 5.5y = 10 + 0.83 = 10.83, and y = 1.97.
From the first row: 2x + 1(1.97) - 1(-1.66) = 8, so 2x = 8 - 1.97 + 1.66 = 7.69, and x = 3.85.

Therefore, the solution is approximately x = 3.85, y = 1.97, z = -1.66.

### Solution 4: Change of Basis
a) To find the change of basis matrix P from the standard basis to the basis {v₁, v₂}, we need to express the standard basis vectors in terms of v₁ and v₂.

Let's say e₁ = av₁ + bv₂ and e₂ = cv₁ + dv₂.

For e₁ = (1,0):
a(1,1) + b(1,-1) = (1,0)
(a+b, a-b) = (1,0)

This gives us:
a + b = 1
a - b = 0

Solving: a = 0.5, b = 0.5.

For e₂ = (0,1):
c(1,1) + d(1,-1) = (0,1)
(c+d, c-d) = (0,1)

This gives us:
c + d = 0
c - d = 1

Solving: c = 0.5, d = -0.5.

The change of basis matrix is:
P = [[0.5, 0.5], [0.5, -0.5]]

b) To find the coordinates of [3, 2] in the basis {v₁, v₂}, we multiply by P:
P[3, 2]^T = [[0.5, 0.5], [0.5, -0.5]] × [3, 2]^T = [0.5×3 + 0.5×2, 0.5×3 - 0.5×2]^T = [2.5, 0.5]^T

Therefore, the coordinates in the basis {v₁, v₂} are [2.5, 0.5].

### Solution 5: Astronomical Application
The matrix A = [[-1, 0, 0], [0, -4, 0], [0, 0, -9]] is already diagonal, so its eigenvalues are the diagonal entries: λ₁ = -1, λ₂ = -4, λ₃ = -9.

The corresponding eigenvectors are the standard basis vectors: v₁ = (1,0,0), v₂ = (0,1,0), v₃ = (0,0,1).

For oscillatory motion described by d²r/dt² = Ar, the solution has the form:
r(t) = v cos(ωt + φ)

where v is an eigenvector of A and ω² = -λ.

Therefore, the normal modes and their frequencies are:
1. Mode 1: v₁ = (1,0,0) with ω₁ = √(-λ₁) = √1 = 1
2. Mode 2: v₂ = (0,1,0) with ω₂ = √(-λ₂) = √4 = 2
3. Mode 3: v₃ = (0,0,1) with ω₃ = √(-λ₃) = √9 = 3

These represent oscillations along the three coordinate axes with different frequencies.

## Summary and Connections

In this section, we've explored the fundamental concepts of linear algebra and their applications in astronomy. We've learned:

- How vectors and matrices represent physical quantities and transformations
- The operations and properties of matrices, including addition, multiplication, determinants, and inverses
- Methods for solving systems of linear equations
- The properties of vector spaces, including basis, dimension, and orthogonality
- The significance of eigenvalues and eigenvectors in understanding linear transformations
- Techniques for changing between different coordinate systems
- Numerical methods for solving large-scale linear algebra problems
- Applications of linear algebra in orbital dynamics, stellar structure, data analysis, and image processing

Linear algebra provides a powerful framework for solving a wide range of problems in astronomy. It connects with the differential equations we studied in the previous section, as many differential equations can be discretized and solved using linear algebra techniques. It also forms the foundation for the coordinate systems we'll explore in the next section.

As we continue our journey through advanced mathematics for astronomy, remember that linear algebra is not just a collection of abstract concepts, but a practical toolset that astronomers use daily to understand the universe.

## Further Reading

- Strang, G. (2016). *Introduction to Linear Algebra*. Wellesley-Cambridge Press.
- Axler, S. (2015). *Linear Algebra Done Right*. Springer.
- Golub, G. H., & Van Loan, C. F. (2013). *Matrix Computations*. Johns Hopkins University Press.
- Press, W. H., Teukolsky, S. A., Vetterling, W. T., & Flannery, B. P. (2007). *Numerical Recipes: The Art of Scientific Computing*. Cambridge University Press.
- Wall, J. V., & Jenkins, C. R. (2012). *Practical Statistics for Astronomers*. Cambridge University Press.

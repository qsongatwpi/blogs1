---
layout: post
title: "Mathematics in Blog Posts: LaTeX Rendering Demo"
date: 2025-07-07 10:00:00 -0000
categories: [mathematics, tutorial]
tags: [latex, mathjax, math, equations]
---

Welcome to a demonstration of mathematical notation in blog posts! This post showcases how to display beautiful mathematical equations using LaTeX syntax with MathJax.

## Inline Mathematics

You can include math directly in your text. For example, the quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, and Euler's famous identity is $e^{i\pi} + 1 = 0$.

The area of a circle with radius $r$ is $A = \pi r^2$, and the circumference is $C = 2\pi r$.

## Display Mathematics

For more complex equations, we can use display mode:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### Calculus Examples

The fundamental theorem of calculus states that:

$$
\int_a^b f'(x) dx = f(b) - f(a)
$$

Here's the Taylor series expansion of $e^x$:

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
$$

### Linear Algebra

Matrix multiplication example:

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
e & f \\
g & h
\end{pmatrix}
=
\begin{pmatrix}
ae + bg & af + bh \\
ce + dg & cf + dh
\end{pmatrix}
$$

The determinant of a 2×2 matrix:

$$
\det\begin{pmatrix}
a & b \\
c & d
\end{pmatrix} = ad - bc
$$

### Statistics and Probability

The normal distribution probability density function:

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$

Bayes' theorem:

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

### Physics Examples

Einstein's mass-energy equivalence:

$$
E = mc^2
$$

The Schrödinger equation:

$$
i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)
$$

Maxwell's equations in vacuum:

$$
\begin{align}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{align}
$$

### Number Theory

The prime number theorem:

$$
\pi(x) \sim \frac{x}{\ln(x)}
$$

Where $\pi(x)$ is the number of primes less than or equal to $x$.

### Complex Analysis

Euler's formula:

$$
e^{i\theta} = \cos(\theta) + i\sin(\theta)
$$

The Cauchy-Riemann equations:

$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$

## Writing LaTeX in Markdown

To include math in your posts, use these syntaxes:

- **Inline math**: `$your_equation$` or `\\(your_equation\\)`
- **Display math**: `$$your_equation$$` or `\\[your_equation\\]`

### Examples:

```latex
Inline: $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$

Display:
$$
\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
$$
```

Results in:

Inline: $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$

Display:
$$
\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
$$

## Conclusion

With MathJax integration, your blog can now display beautiful mathematical notation! This opens up possibilities for:

- **Educational content** in mathematics, physics, and engineering
- **Research articles** with complex formulas
- **Tutorial posts** explaining mathematical concepts
- **Problem-solving** demonstrations

The combination of Jekyll, GitHub Pages, and MathJax provides a powerful platform for sharing mathematical knowledge with the world.

---

*Have questions about LaTeX syntax or want to see more examples? Feel free to reach out!*

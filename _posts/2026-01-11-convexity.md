---
layout: post
title: "From midpoint convexity to full convexity"
date: 2025-08-10 10:00:00 -0000
categories: [mathematics, analysis]
tags: [convexity, local boundedness, proof]
---

We will prove that midpoint convexity implies full convexity under mild conditions.

First, let's define these terms. We say a function $f:(0,1) \to \mathbb R$ is $\lambda$-convex if
$$
f(\lambda x + (1-\lambda)y) \le \lambda f(x) + (1-\lambda) f(y), \quad
\forall x, y \in (0,1).
$$
If $f$ satisfies this condition for $\lambda = 1/2$, it is called midpoint convex.
If $f$ is $\lambda$-convex for any $\lambda \in (0,1)$, then it is fully convex.


To proceed, we define
the set of **dyadic numbers** (or dyadic rationals), denoted by $\mathbb{D}$, 
as the set of rational numbers of the form:

$$
\mathbb{D} = \cup_{n=0}^\infty \mathbb{D}_n,
$$
where 
$$ \mathbb{D}_n =  \left\{ \frac{k}{2^n} \;\middle|\; k = 0, \ldots, 2^n \right\}.
$$


**Proposition.** *If $f:(0,1) \to \mathbb R$ satisfies midpoint convexity and local upper boundedness, then*

*   *$f$ is locally bounded;*
*   *$f$ is $\lambda$-convex for any dyadic number $\lambda$;*
*   *$f$ is locally Lipschitz;*
*   *$f$ is fully convex.*

**Proof.**
* For local boundedness, it is enough to show that $f$ is locally lower bounded.
Fix arbitrary $x_0 \in (0,1)$, we want to show there exist $\epsilon, M>0$ dependent to $x_0$ such that


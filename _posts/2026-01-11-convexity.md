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

\begin{proposition}
If $f:(0,1)\mapsto \mathbb R$ satisfies midipoint convexity and local upper boundedness, then 
\begin{itemize}
\item $f$ is locally bounded;
\item If $f$ is $\lambda$-convex for $\lambda = \frac{k}{2^n}$ for $n\in \mathbb N$ and $k = 0, \ldots, 2^n$.
\item $f$ is locally Lipschitz;
\item $f$ is fully convex.
\end{itemize}

To be completed ...



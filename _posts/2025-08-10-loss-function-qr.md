---
layout: post
title: "A minimization problem realted to the loss function to quantile regression"
date: 2025-08-10 10:00:00 -0000
categories: [mathematics, machine learning]
tags: [latex, math, quantile regression]
---


In neural networks, the loss function is commonly taken as the MSE (Mean Squared Error), which yields the mean estimator of the regression. 
On the contrary, the quantile regression is the task of estimating a specified percentile output with confidence level $\alpha \in (0,1)$.
For instance, if $\alpha = .5$, then it is the median estimator. It can also be applied to computing Value-At-Risk (VaR) at confidence level $\alpha = .95$ in finance. 
A convergence analysis on Quantile Regression with ReLU Networks is provided in a recent paper, see [this paper]({{site.baseurl}}/assets/pdfs/PTC22_percentile.pdf).

More specifically, the loss function in traditional setting is MSE given by

$$\hat f = \arg\min_{f\in \mathcal F}  \sum_{i=1}^n (y_i - f(x_i))^2,$$

while the loss function associated to the quantile regression with confidence level $\alpha$ is given by

$$
\hat f = \arg\min_{f\in \mathcal F}  \sum_{i=1}^n \rho_\alpha (y_i -f(x_i)),
$$

where $\rho_\alpha$ is

$$\rho_\alpha(x) = \alpha x^+ + (1-\alpha) x^-.$$

In the above, $x^+$ and $x^-$ denote the positive and negative parts of $x$, respectively, i.e., $x^+ = \max(x, 0)$ and $x^- = \max(-x, 0)$.

The loss function is originally proposed in [this paper]({{site.baseurl}}/assets/pdfs/KB78.pdf). The essence of this loss function lies at the following fact:


**Theorem.** Let $Y$ be a random variable with distribution function $F$. Then for any $\alpha \in (0,1)$, the $\alpha$-quantile of $Y$, defined as 
$q_\alpha = \inf(y : F(y) \geq \alpha)$, is the minimizer of the expected loss function:

$$q_\alpha = \arg\min_{q \in \mathbb{R}} \mathbb{E}[\rho_\alpha(Y - q)].$$

**Proof.** Let $g(q) = \mathbb{E}[\rho_\alpha(Y - q)]$. We need to show that $g(q)$ is minimized at $q = q_\alpha$. For simplicity, we assume $F$ is continuous and strictly increasting.

First, we expand the expectation:

$$g(q) = \mathbb{E}[\rho_\alpha(Y - q)] = \alpha \mathbb{E}[(Y - q)^+] + (1-\alpha) \mathbb{E}[(Y - q)^-].$$

We can rewrite this as:

$$g(q) = \alpha \mathbb{E}[(Y - q) \mathbf{1}_{Y \geq q}] + (1-\alpha) \mathbb{E}[(q - Y) \mathbf{1}_{Y < q}],$$

where $\mathbf{1}_{A}$ is the indicator function of event $A$.

Taking the derivative with respect to $q$:

$$g'(q) = -\alpha \mathbb{P}(Y \geq q) + (1-\alpha) \mathbb{P}(Y < q)
=  F(q) - \alpha
.$$

Setting $g'(q) = 0$, we conclude the desired result. $\square$
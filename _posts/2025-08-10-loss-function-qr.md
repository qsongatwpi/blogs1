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
A convergence analysis on Quantile Regression with ReLU Networks is provided in a recent paper, see [this paper]({{ site.baseurl }}/assets/pdfs/PTC22_percentile.pdf)


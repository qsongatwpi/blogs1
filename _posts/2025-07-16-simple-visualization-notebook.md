---
layout: post
title: "Simple Data Visualization with NumPy and Matplotlib"
date: 2025-07-16 14:00:00 -0000
categories: [python, visualization]
tags: [jupyter, numpy, matplotlib, plotting]
---

This post demonstrates a simple data visualization example using NumPy and Matplotlib. You can follow along with the interactive Jupyter notebook.

## 📓 Interactive Notebook

**[📥 Download the Jupyter Notebook]({{ site.baseurl }}/assets/code/nb_test1.ipynb)**

Click the link above to download and run the notebook locally in your Jupyter environment.

## Code Overview

Here's what the notebook covers:

### 1. Import Libraries

```python
import numpy as np
import matplotlib.pyplot as plt
```

### 2. Check NumPy Version

```python
print(np.__version__)
```

### 3. Create and Plot a Sine Curve

```python
x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x)
plt.plot(x, y)
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.title('Sine Curve')
plt.show()
```

This creates a beautiful sine wave plot showing the mathematical function sin(x) over the interval [0, 2π].

## Key Concepts Demonstrated

- **NumPy arrays**: Using `np.linspace()` to create evenly spaced points
- **Mathematical functions**: Computing sine values with `np.sin()`
- **Basic plotting**: Creating line plots with Matplotlib
- **Plot customization**: Adding labels and titles

## Learning Outcomes

After running this notebook, you'll understand:

1. How to import essential scientific Python libraries
2. Creating mathematical data with NumPy
3. Basic plotting techniques with Matplotlib
4. Adding proper labels and titles to your plots

## Next Steps

Try modifying the notebook to:
- Plot other trigonometric functions (cos, tan)
- Change the range or number of points
- Add multiple curves to the same plot
- Experiment with different plot styles and colors

---

**Want to run this yourself?** Download the notebook file and open it in Jupyter Lab or Jupyter Notebook to experiment with the code interactively!

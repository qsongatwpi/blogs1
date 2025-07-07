// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loading animation for external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.addEventListener('click', function() {
    // Add a subtle loading indicator
    this.style.opacity = '0.7';
    setTimeout(() => {
      this.style.opacity = '1';
    }, 200);
  });
});

// Copy code blocks functionality
document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach((block, index) => {
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    copyButton.setAttribute('data-clipboard-target', `#code-block-${index}`);
    
    // Add ID to code block
    block.id = `code-block-${index}`;
    
    // Insert copy button
    const pre = block.parentElement;
    pre.style.position = 'relative';
    pre.appendChild(copyButton);
    
    // Add click event
    copyButton.addEventListener('click', function() {
      const textToCopy = block.textContent;
      
      // Use modern clipboard API if available
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          copyButton.textContent = 'Copied!';
          setTimeout(() => {
            copyButton.textContent = 'Copy';
          }, 2000);
        });
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          copyButton.textContent = 'Copied!';
          setTimeout(() => {
            copyButton.textContent = 'Copy';
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
        document.body.removeChild(textArea);
      }
    });
  });
});

// Reading progress indicator
document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: #0066cc;
    z-index: 9999;
    transition: width 0.3s ease;
  `;
  document.body.appendChild(progressBar);
  
  function updateProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  }
  
  window.addEventListener('scroll', updateProgress);
});

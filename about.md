---
layout: default
title: About
permalink: /about/
---

<div class="about-page">
  <div class="about-content">
    <h1>About Me</h1>
    
    <div class="about-intro">
      <p>Hello! I'm a passionate writer and developer who loves sharing knowledge and experiences through this blog.</p>
    </div>

    <div class="about-details">
      <h2>What I Write About</h2>
      <ul>
        <li><strong>Technology:</strong> Latest trends, tools, and frameworks in the tech world</li>
        <li><strong>Programming:</strong> Code tutorials, best practices, and problem-solving approaches</li>
        <li><strong>Personal Growth:</strong> Lessons learned, productivity tips, and career insights</li>
        <li><strong>Life:</strong> Random thoughts, experiences, and perspectives on various topics</li>
      </ul>

      <h2>My Background</h2>
      <p>I have a background in software development and a passion for continuous learning. I believe in the power of sharing knowledge and helping others grow in their journey.</p>

      <h2>Let's Connect</h2>
      <p>I'd love to hear from you! Feel free to reach out if you have any questions, suggestions, or just want to say hello.</p>
      
      <div class="contact-info">
        {% if site.email %}
          <p><strong>Email:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
        {% endif %}
        
        <div class="social-links">
          {% if site.github_username %}
            <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener" class="social-link">
              GitHub
            </a>
          {% endif %}
          {% if site.twitter_username %}
            <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" rel="noopener" class="social-link">
              Twitter
            </a>
          {% endif %}
          {% if site.linkedin_username %}
            <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener" class="social-link">
              LinkedIn
            </a>
          {% endif %}
        </div>
      </div>
    </div>
  </div>
</div>

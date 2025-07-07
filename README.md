# My Blog

A modern, responsive blog built with Jekyll and hosted on GitHub Pages.

## 🚀 Features

- **Responsive Design**: Works beautifully on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Built-in SEO optimization
- **RSS Feed**: Automatic RSS feed generation
- **Syntax Highlighting**: Code blocks with copy functionality
- **Social Links**: Easy social media integration

## 📝 Getting Started

### Prerequisites

- Ruby 2.7+ (for local development)
- Bundler
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blogs1.git
cd blogs1
```

2. Install dependencies:
```bash
bundle install
```

3. Run the development server:
```bash
bundle exec jekyll serve
```

4. Open your browser to `http://localhost:4000`

### Configuration

Edit `_config.yml` to customize:

- **Site Information**: Title, description, author
- **Social Links**: GitHub, Twitter, LinkedIn
- **Navigation**: Menu items
- **SEO Settings**: Meta tags and descriptions

### Writing Posts

Create new posts in the `_posts` directory with the format:
```
YYYY-MM-DD-title.md
```

Each post should have front matter:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS -0000
categories: [category1, category2]
tags: [tag1, tag2]
---
```

## 🎨 Customization

### Colors and Styling

Edit `assets/css/main.css` to customize:
- Color scheme
- Typography
- Layout
- Animations

### Layout Changes

Modify layouts in the `_layouts` directory:
- `default.html`: Main site layout
- `post.html`: Blog post layout
- `page.html`: Static page layout

## 📦 Deployment

### GitHub Pages

1. Push your changes to the `main` branch
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://yourusername.github.io/blogs1`

### Custom Domain

1. Add a `CNAME` file with your domain name
2. Update DNS settings to point to GitHub Pages
3. Enable HTTPS in repository settings

## 🔧 Advanced Features

### Analytics

Add Google Analytics by including your tracking ID in `_config.yml`:
```yaml
google_analytics: UA-XXXXXX-X
```

### Comments

Integrate comments by adding Disqus configuration:
```yaml
disqus:
  shortname: your-disqus-shortname
```

### Search

Add search functionality using Lunr.js or Algolia.

## 📱 Mobile Optimization

The site is fully responsive and includes:
- Mobile-first design
- Touch-friendly navigation
- Optimized images
- Fast loading on mobile networks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

⭐ If you find this project helpful, please consider giving it a star!
# Personal website

Jekyll + GitHub Pages.

```sh
just install  # Install dependencies
just dev      # Preview at localhost:4000
```

## Edit

- `index.md` — bio
- `_data/timeline.yml` — timeline
- `_config.yml` — contact links and site settings
- `assets/css/main.css` — styling
- `_posts/YYYY-MM-DD-title.md` — blog posts, with `title: ...` in YAML front matter

## Publish

Push to `main`. In GitHub repository settings, set **Pages → Source → GitHub Actions**.

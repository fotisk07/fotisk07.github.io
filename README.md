# Personal website

[Zola](https://www.getzola.org/) + [Serene](https://github.com/isunjn/serene), deployed to GitHub Pages.

## Local development

Install **Zola 0.23.6** and **just**, then run:

```sh
just install  # First time after cloning: download the pinned Serene theme
just dev      # Preview at http://127.0.0.1:1111
```

Other commands:

```sh
just          # List available commands
just build    # Build the site into public/
```

Serene is stored as a Git submodule (a reference to a specific version of the theme's repository). `just install` handles fetching it; no separate Git setup commands are needed.

## Edit

- `content/_index.md` — homepage and recent articles settings
- `content/about/_index.md` — About page
- `content/blog/*.md` — blog posts
- `zola.toml` — site settings, navigation, and contact links
- `templates/_head_extend.html` — colour and name typography overrides

To add a post, create `content/blog/my-post.md`:

```markdown
+++
title = "My post"
date = 2026-10-30
+++

Write in Markdown here.
```

The filename becomes the URL: `/blog/my-post/`. Add `draft = true` to the metadata to keep a post unpublished.

## Publish

Commit and push to `main`. GitHub Actions builds and deploys the site automatically.
GitHub Pages must have **Source → GitHub Actions** selected in the repository settings.

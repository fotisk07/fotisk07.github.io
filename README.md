# Personal website

[Zola](https://www.getzola.org/) + [Serene](https://github.com/isunjn/serene).

## Preview

Install Zola **0.23.6** ([installation guide](https://www.getzola.org/documentation/getting-started/installation/)), then:

```sh
git submodule update --init --recursive
zola serve
```

Open http://127.0.0.1:1111. No Ruby, Node, or package manager needed.

## Edit

- `content/_index.md` — homepage bio
- `content/blog/*.md` — blog posts
- `zola.toml` — site settings and contact links
- `templates/_head_extend.html` — small colour overrides; everything else uses Serene

To publish a post, create `content/blog/my-post.md`:

```markdown
+++
title = "My post"
date = 2026-10-30
+++

Write in Markdown here.
```

The filename becomes the URL: `/blog/my-post/`. Add `draft = true` to the metadata to keep a post unpublished; use `zola serve --drafts` to preview drafts.

## Publish

Push to `main`. GitHub Actions builds the site and deploys `public/` to GitHub Pages.
In repository settings, set **Pages → Source → GitHub Actions**.

The theme is a pinned Git submodule. When cloning, use `git clone --recurse-submodules` or run the submodule command above.

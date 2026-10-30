# Fotis Kapotos — personal website

Small Jekyll site. Static HTML and CSS, no browser JavaScript, no external fonts or theme.

## Preview locally

Requires Ruby, Bundler, and a C/C++ build toolchain for gem dependencies.

```sh
cd ~/10_projects/website
# If bundle isn't installed:
gem install --user-install bundler
# Add the executable directory printed by RubyGems to your PATH if necessary.
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open http://127.0.0.1:4000. Changes rebuild automatically. Restart the server after editing `_config.yml`.

## Where to edit

| File | Contents |
| --- | --- |
| `index.md` | Introductory paragraph |
| `_data/timeline.yml` | Dates, organizations, descriptions, links, logo paths |
| `_config.yml` | Name, description, email, GitHub and LinkedIn links |
| `blog/index.html` | Blog listing and empty-state message |
| `assets/css/main.css` | All styling; colors at the top, mobile rules at the bottom |
| `_layouts/default.html` | Shared header, navigation, footer |
| `_layouts/post.html` | Individual article layout |
| `assets/images/` | Local organization icons |

Timeline descriptions accept Markdown. Keep YAML indentation consistent. Entries appear in the order written.

Email and GitHub links are hidden until their values are filled in. AIT is deliberately not linked until its full identity is confirmed. The organization icons are downloaded site favicons used as first-draft logos; replace them with official logo assets if preferred. No third-party requests occur when a visitor opens the site.

## Write a post

Create `_posts/2026-11-01-my-first-post.md` (create `_posts` if needed):

```markdown
---
title: My first post
description: A short summary for search engines.
---

Write your article here in Markdown.

## A section

Use normal Markdown for links, lists, and fenced code blocks.
```

The date in the filename controls ordering. Future-dated posts are hidden until their date arrives. The Blog tab automatically lists published posts, newest first. No example posts are published in this draft.

For a project write-up, use the same format and link to its repository or demo at the beginning.

## Publish on GitHub Pages

1. Create an empty GitHub repository. For a root site, name it `YOUR_USERNAME.github.io`; any other name creates a project site.
2. Set `url` in `_config.yml` to `https://YOUR_USERNAME.github.io`. For project sites, also set `baseurl` to `/REPOSITORY_NAME` (no trailing slash).
3. Commit and push:

   ```sh
   git add .
   git commit -m "Add personal website"
   git remote add origin git@github.com:YOUR_USERNAME/REPOSITORY_NAME.git
   git push -u origin main
   ```

4. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**.
5. Check the Actions tab. If the initial build ran before enabling Pages, rerun the workflow.

`.github/workflows/pages.yml` builds the site and deploys it on pushes to `main`. It detects the Pages base path automatically. No account credentials or repository URL are embedded in the code.

## Build only

```sh
bundle exec jekyll build
```

Generated output goes in `_site/`, which is not tracked by Git.

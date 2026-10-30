# Include user-installed Bundler without requiring shell profile changes.
export PATH := `ruby -r rubygems -e 'print Gem.user_dir'` + "/bin:" + env_var("PATH")

default:
    @just --list

# Install the site's Ruby dependencies.
install:
    bundle config set --local path vendor/bundle
    bundle install

# Serve locally with automatic rebuilds. Stop with Ctrl+C.
serve port="4000":
    bundle exec jekyll serve --host 127.0.0.1 --port {{port}}

# Alias for the local preview (does not publish to GitHub).
deploy port="4000":
    @just serve {{port}}

# Generate static HTML in _site/.
build:
    bundle exec jekyll build

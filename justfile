export PATH := `ruby -r rubygems -e 'print Gem.user_dir'` + "/bin:" + env_var("PATH")

default:
    @just --list
    
# Preview at localhost:4000. Stop with Ctrl+C.
dev:
    bundle exec jekyll serve --host 127.0.0.1

# Install dependencies (first time only).
install:
    bundle config set --local path vendor/bundle
    bundle install

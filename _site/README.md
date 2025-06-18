echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc
rbenv global 3.1.4
bundler exec jekyll serve
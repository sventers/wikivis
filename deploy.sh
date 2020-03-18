#!/bin/sh
npm run build
cd ./build

git add .
git commit -m 'trial of own build process, took off the for'

# there was a --force in the push command
git push --force git@github.com:sventers:wikivis.git master:wikivis

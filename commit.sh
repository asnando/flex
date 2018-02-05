#!/bin/bash
cd dist/
./dist/minify.sh
cd ../
git add -A
git commit -m "#"
git push

#!/usr/bin/env bash
# Minify src/ → site root.  Edit files in src/, then run: ./build.sh
set -euo pipefail
cd "$(dirname "$0")"

ESBUILD="npx -y esbuild@0.24.0"
HTMLMIN="npx -y html-minifier-terser@7.2.0"

mkdir -p css js

for page in index bd; do
  $ESBUILD "src/css/$page.css" --minify --log-level=warning --outfile="css/$page.css"
  $ESBUILD "src/js/$page.js"   --minify --format=iife --log-level=warning --outfile="js/$page.js"
  $HTMLMIN "src/$page.html" -o "$page.html" \
    --collapse-whitespace --conservative-collapse --remove-comments \
    --remove-redundant-attributes --use-short-doctype --minify-css true --minify-js true
done

wc -c index.html bd.html css/*.css js/*.js

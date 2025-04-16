#!/bin/bash
zola serve &
tailwindcss -i ./static/input.css -o ./static/style.css --watch

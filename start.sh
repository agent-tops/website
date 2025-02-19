#!/bin/sh

# Check if the directory is empty
if [ -z "$(ls -A .)" ]; then
  # Create a new Analog project if the directory is empty
  npm create analog@latest
fi

npm run start

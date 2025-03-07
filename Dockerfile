# Use the official Node.js image as a base
FROM node:22.14.0

# Set the working directory
WORKDIR /app

ENV NG_CLI_ANALYTICS=false

# Install Angular CLI
RUN npm install -g @angular/cli

# Expose the application port
EXPOSE 4200

COPY start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

# Default command
CMD ["start.sh"]

FROM node:8

# Heroku overrides this on staging/production environment
ENV NODE_ENV development

# Create app directory
WORKDIR /usr/app

# For now, only copy package.json, BETTER FOR CACHING
COPY package.json ./

# Install app dependencies
RUN npm install

# Now, it is time to copy the src
COPY . .

# Preparing build for staging/prod
RUN npm run build

# It will be npm run start:production on heroku (see heroku.yml)
CMD ["npm", "run"]

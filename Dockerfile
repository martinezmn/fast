FROM node:14

# Create app directory
WORKDIR /home/app/

# Bundle app source
COPY . ./

# Install app dependencies
RUN npm install

# Create database
RUN yarn sequelize db:create

# Migrate database
RUN yarn sequelize db:migrate

# Seed database
RUN yarn sequelize db:seed:all

EXPOSE 80
CMD [ "npm", "start" ]

FROM node:14

# Create app directory
WORKDIR /home/app/

# Bundle app source
COPY . ./

# Install app dependencies
RUN npm install

# Run migrations
# RUN yarn && yarn sequelize db:migrate

EXPOSE 80
CMD [ "npm", "start" ]

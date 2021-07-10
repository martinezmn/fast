FROM node:14

# Create app directory
WORKDIR /home/app/

# Bundle app source
COPY . ./

# Install app dependencies
RUN npm install

EXPOSE 80
CMD [ "npm", "start" ]

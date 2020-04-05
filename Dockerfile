# build environment
FROM node:8.13.0 AS artifact

# Maintainer
LABEL maintainer="Vmoksha Technologies <devops@vmokshagroup.com>"

#Install Base Packages or dependence softwares of Build and Nginx Proxy
RUN apt-get update && apt-get install -y  \
    build-essential                       \
    libssl-dev                            \
    gcc                                   \
    g++                                   \
    make                                  \
    nano                                  \
    curl                                                             

RUN mkdir -p /usr/app/

WORKDIR /usr/app/

ENV PATH /usr/app/node_modules/.bin:$PATH

# Add Node.js app
COPY . /usr/app/

# Copy default node env file
COPY .env.example .env

# Install Node modules and build the packages
RUN npm install

RUN npm run build

# Expose Nginx port
#EXPOSE 8080

# Run the startup script
#CMD [ "npm", "start" ]
#CMD [ "/bin/sh", "-c", "npm start > deskweb.log 2>&1" ]


# production environment
FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=artifact /usr/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


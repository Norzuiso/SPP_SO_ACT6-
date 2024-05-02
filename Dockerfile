FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install
CMD ["java", "-jar", "act10.jar"]

CMD ["ng", "serve", "--host", "0.0.0.0", "--port=4210"]

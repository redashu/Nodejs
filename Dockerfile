FROM ubuntu
RUN apt-get update && apt-get install git curl  gcc g++ make  -y 
RUN mkdir /setupNode
WORKDIR /setupNode
RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install nodejs 
COPY . . 
RUN npm install 
EXPOSE 3000
CMD ["npm","start"]


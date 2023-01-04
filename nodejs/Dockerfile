FROM node:bullseye
WORKDIR /srv
COPY *.js* ./
RUN ["npm", "install"]
EXPOSE 8083
ENTRYPOINT ["node", "index.js"]


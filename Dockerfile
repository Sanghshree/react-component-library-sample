FROM node:16

WORKDIR /app
COPY . .
RUN npm install -g npm@8.13.0 && \
    npm install --legacy-peer-deps
RUN npm run build-storybook
COPY . .
EXPOSE 6006
CMD ["npm", "start-storybook"]
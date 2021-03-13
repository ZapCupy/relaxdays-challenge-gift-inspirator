FROM node:alpine as build
# Change working directory.
WORKDIR /app
# Install dependencies.
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile
# Copy source files.
COPY ./tsconfig.json /app/
COPY ./src /app/src
COPY ./public /app/public
# Build app.
RUN yarn build


FROM nginx
# Copy app bundle.
COPY --from=build /app/build /usr/share/nginx/html

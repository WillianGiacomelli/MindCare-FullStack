# Build Stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build-time environment variables (passed via --build-arg)
ARG VITE_AUTH_API_URL
ARG VITE_NOTES_API_URL
ARG VITE_SCHEDULE_API_URL

ENV VITE_AUTH_API_URL=$VITE_AUTH_API_URL
ENV VITE_NOTES_API_URL=$VITE_NOTES_API_URL
ENV VITE_SCHEDULE_API_URL=$VITE_SCHEDULE_API_URL

# Build the application
RUN npm run build

# Production Stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

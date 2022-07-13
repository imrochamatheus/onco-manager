FROM node:16.15.1

WORKDIR /app

COPY "package.json" .

COPY prisma ./prisma/

COPY .env ./

COPY . .

RUN yarn

RUN yarn prisma generate

# RUN yarn prisma migrate dev

# CMD ["yarn", "dev"]
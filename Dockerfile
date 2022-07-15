FROM node:16.15.1

ENV PORT=3000

EXPOSE 3000

WORKDIR /app

COPY "package.json" .

COPY prisma ./prisma/

COPY .env .

COPY . .

RUN yarn

RUN yarn prisma generate

RUN yarn prisma migrate dev

CMD ["yarn", "dev"]
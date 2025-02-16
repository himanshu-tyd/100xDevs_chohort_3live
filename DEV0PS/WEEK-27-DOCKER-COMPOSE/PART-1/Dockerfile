
FROM node:20-alpine


WORKDIR /app

COPY ./package.json ./package.json

RUN pnpm install

COPY . .

ENV DATABASE_URL=postgresql://POSTGRES_PASSWORD=mysecreatepassword@localhost:5432/mydb?schema=public

RUN docker run -t user-project

RUN DATABASE_URL=$DATABASE_URL npx prisma generate
RUN  npx prisma generate
RUN pnpm run build

EXPOSE 3001

CMD [ "node" , "start" ]


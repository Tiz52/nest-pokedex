<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute in development mode

1. Clone the repository
2. Execute the following command:
```
yarn install
```
3. U need to has NestJS installed
```
npm i -g @nestjs/cli
```
4. Lift the database
```
docker-compose up -d
```
5. Clone the file __.env.template__ to __.env__
6. Fill the __.env__ file with your credentials
7. Execute the following command:
```
yarn start:dev
```
6. Restart the database
```
http://localhost:3000/api/v2/seed
```

## Stack overview
* MongoDB
* NestJS
* TypeScript
* Docker

# Production Build
1. Create the file ```.env.prod```
2. Fill the values with your credentials for the production environment
3. Create a new image with the command:
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

# Notes
Heroku redeploy without changes
```
git commit --allow-empty -m "Trigger Heroku Deploy"
git push heroku <master|main>
```
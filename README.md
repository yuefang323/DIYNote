# solo-project


# Technologies Used
## Frontend
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%23323330.svg?style=for-the-badge&logo=react&logoColor=%blue)
![Redux](https://img.shields.io/badge/react-purple.svg?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
## Backend
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

# Getting started
1. Clone this repository

   ```git clone git@github.com:yuefang323/solo-project.git```

2. CD into the backend directory and install dependencies

   ```npm install```
    
3. CD into the frontend directory and install dependencies

   ```npm install```
    
4. Create a .env file based on the .env.example given

6. Create a user in psql based on your .env DB_USERNAME

   ```psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"```
  
6. Create the database, migrate, and seed
  
   ```npx dotenv sequelize db:create```
   
   ```npx dotenv sequelize db:migrate```
   
   ```npx dotenv sequelize db:seed:all```
   
7. Open up two terminals and cd into the backend and frontend directories, respectively. Start the server in each by running:

   ```npm start```

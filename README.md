# DIYnote

DIYnote, an [Evernote](https://evernote.com/) clone, is a website where users can take notes and categorize notes by using notebooks. 

Welcome to check out a live version of DIYnote here: [diynote.com](https://diynote.herokuapp.com/)

- [Database Schema](https://github.com/yuefang323/DIYnote/wiki/Database-Schema)

- [MVP Feature List](https://github.com/yuefang323/DIYnote/wiki/MVP-Feature-List)

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

# Features
## Splash Page & User Authentication
A user can sign up or log in with an existing account in this page. Alternatively, a user can explore the web as a Demo user. 

![Splash Page](./imgs/splash.png)
![Demo Login](./imgs/demo-login.png)

## User Home Page
Once a user logged in, he can see two links on the home page main body. One is linked to all his notebooks and the other is linked to all his notes. On the navigation bar, 3 links allow a user to swith the view page among home, notebooks and notes pages. The profile icon shows the user's information. It also has a logout button which allows a user to log out. 

![Home Page](./imgs//home.png)

## User Notebooks Page
A user can read all his notebooks on this page. He can also create, update and delete a specific notebook here. Once he deleted a notebook, all notes included in that notebook would also be deleted. Once he clicked the notebook link, he is able to see all notes in that notebook. Then, he can create, edit and delete a specific note there. 

![MyNotebooks Page](./imgs/my-notebooks.png)
![All Notes in A Notebook Page](./imgs/all-notes-in-a-notebook.png)

## User Notes Page
A user can read all his notes on this page. He can also create, update and delete a specific note on this page. In particular, if he does not want to put a note in a notebook, he can manage that note on this page. 

![MyNotes Page](./imgs/my-notes.png)

## 404 Error Page 
If a user unaccidently accesses a path that is not exist or cannot be accessed because he is not a login user, the 404 Error Page will be rendered. It will automatically redirect the user to the previous page or login page. 

![Page Not Found](./imgs/error-page.png)

# Upcoming Features
- A user friendly home page. 
- Notebook: a user can freely move notes between different notebooks. 
- Tags: CURDs of a tag feature. 

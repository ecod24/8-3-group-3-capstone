# Table for Two  

Group members: Abdullah, Hermanclyde, Edwin, Charlie  

Find your potential partner through your diet!

## Important Links

- [Deployed API Server] (https://table-for-two.onrender.com/)
- [Deployed Frontend] (https://table-for-two.netlify.app/)
- [ERD] (https://drive.google.com/drive/folders/1S2l0gP1wxIgHZh-hbcnVaepB_tTjI9XI?usp=sharing)
- [Wireframes] (https://drive.google.com/drive/folders/11DC6EPNxv3BIedICKvRV54irdkBUtvnw?usp=sharing)
- [Systems Design Diagram](https://drive.google.com/drive/folders/1S9DzbMLmLuV-5K3-BPzRSH-1QX7ARX5G?usp=sharing)

## Overview
Table For Two is an

## Local Setup

If you'd like to run my project locally, please read the following steps:

1. Fork and clone this repository.

### Backend Setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your back-end

- `cd back-end`
- `touch .env`

**.env**

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=capstone
```

- `npm install` - install npm packages listed in `package.json`
- `npm install -g nodemon` - install nodemon to help run the backend
- `npm run db:init` - initialize a new database and create tables
- `npm run db:seed` - seed the table(s) with some data
- `nodemon` - starts running the backendc server and confirm that this is running on port 3333
- Visit http://localhost:3333/users and make sure you see user data in the form of JSON 

### Frontend Setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your front-end

- `cd front-end`
- `touch .env`

**.env**

```
REACT_APP_API_URL=http://localhost:3333
```

- `npm install` - install npm packages listed in `package.json`
- `npm start` - make sure your React app can start

## Inspiration
The inspiration for Table For Two 





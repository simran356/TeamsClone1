# TeamsClone1

SETUP

Start redis server "redis-server"

Backend

npm i 

Create .env file

.env file content (Outside client folder)

PORT = 4000

REDIS_HOST= <YOUR_REDIS_HOST_NAME>
 
REDIS_PORT = <YOUR_REDIS_PORT> 

REDIS_PASSWORD = <YOUR_REDIS_PASSWORD> 

TWILIO_ACCOUNT_SID = <YOUR_TWILIO_ACCOUNT_SID>

 TWILIO_AUTH_TOKEN = <YOUR_TWILIO_AUTH_TOKEN>

ALLOWED_ORIGIN = *

Inside the client folder (react app)

npm i

 create .env file

 create .env.production

.env file content (inside client folder)

REACT_APP_BASE_URL = <YOUR_LOCALHOST_URL>

.env.production file content (inside client folder)

REACT_APP_BASE_URL = <YOUR_HEROKU_URL>

To run in localhost

Open a terminal and write 

node server.js

 Output = "Server is running on port 4000"

Open another terminal simultaneously

Go to client folder

cd client

npm start

Development server starts and you can see the website running on localhost.

Deployed website link :
https://teamsclone1.herokuapp.com

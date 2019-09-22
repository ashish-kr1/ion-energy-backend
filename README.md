# ion-energy-backend
 ## command to run
 clone the repository
 npm install
 npm start 
 ## Note : Don't use nodemon instead use npm start
 ## Multer is used to upload file
 ## uploads folder contain the uploaded file temp0001.
 
 ##Working
 1. Initially i am uploading file through multer in uploads folder.
 2. After 6 second it will navigate to graph page. By default it fetch data from database. if it is present it will load data or message will come to get data first from file.
 3. In this case click on get data from file - It take some second to load.
 4. First feb data will come then march and so.. no..
 5. I am parsing 5000000 data and reading by dividing the data in 400000 till one year data. As again divided into month to get month avarage temperature.
 

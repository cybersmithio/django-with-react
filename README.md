# Start the backend server (using PowerShell)
myenv/Scripts/active
cd backend
python manage.py runserver

# Start the frontend server (using Powershell)
cd backend/frontend
npm start

# Setting environment variables (using Windows Command Line)
set POSTGRESQL_DBNAME=proshop
set POSTGRESQL_USER=postgres
set POSTGRESQL_PORT=5432
set POSTGRESQL_HOST=localhost
set POSTGRESQL_PASSWORD=

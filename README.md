# Getting Started with Todo React App

Clone https://github.com/HamsikaG/ReactToDoList
cd ReactToDoList

## Build and tag the Docker image: 
docker build -t react-todo-app .

## Spin up the container once the build is done:
<pre>
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    react-todo-app
</pre>

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


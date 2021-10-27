# Getting Started with Todo React App

<pre>
Clone https://github.com/HamsikaG/ReactToDoList

cd ReactToDoList
</pre>

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


Images:

![Screen Shot 2021-10-25 at 6 09 10 PM](https://user-images.githubusercontent.com/23443276/138782949-f557b112-4e24-4a77-acc9-6eda1f311910.png)

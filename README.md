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


Images:

![Screen Shot 2021-10-25 at 6 04 34 PM](https://user-images.githubusercontent.com/23443276/138782891-a91877ff-fe17-47d9-b60f-cc932a9f44f1.png)

![Screen Shot 2021-10-25 at 6 04 41 PM](https://user-images.githubusercontent.com/23443276/138782903-4f181a1f-0654-4d06-84fa-f2775e01d112.png)



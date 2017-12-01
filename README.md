# Some App

## Quick start
### Live Demo
Try it here:
https://ellvtr.github.io/[some_app]/

### Run locally
Requires [NodeJS](https://nodejs.org/en/), install if you don't have it.
Then clone this repo. In a terminal, go to this repo directory and type:
```bash
npm install --production
npm run serve
```

If you prefer docker, run this docker image:
```bash
docker run --name some_app -d -p 8080:8080 ellvtr/[some_app]
# Or with this script:
./run_docker.sh
```

The app will run by default on http://localhost:8080/

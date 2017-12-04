# Account Balance
code test, see `assignment.dk` for specifications.

## Run locally
Requires [NodeJS](https://nodejs.org/en/), install if you don't have it.
Then clone this repo. In a terminal, go to the repo directory and type:
```bash
npm install --production
npm run prod
```

The app will run by default on http://localhost:8888/.
The api server runs on port 8080; api requests to 8888
are proxied on to 8080.

## Comments
Frontend components uses:
* Frontend framework [VueJS](https://vuejs.org/) used in 
order to increase productivity. The result is a more responsive
and complete UI/UX because the faster work-flow allows me to 
focus on more functionality.
* CSS framework [Bootstrap 3.3](https://getbootstrap.com/docs/3.3/)
used, also in order to increase productivity and a better 
and more mobile friendly result.
* The [jQuery](http://api.jquery.com/) library is used, partly because Bootstrap relise on it,
partly to handle cross-browser issues regarding ajax calls and DOM 
manipulation.

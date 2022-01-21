## Rps - a web application for displaying Rock Paper Sciccors game results from pre-built API, on which I have no control 

Live: https://lv-rps.web.app/

### 1. My goals

I want to build a web application with:

**A cute live board that**

- Shows ten most recent game.
- If the game is on-going, the game detail shows `?` as played hand
- If the result of the existed game is available, updates the game detail and puts it on top of the list
- Clicking on the player name or its info button redirects the user to that player’s info page

**An info page for each player that**

- Displays the calculated index: most played hand, number of games played, win rate
- Displays a table of the details of the games played. Expected columns: game id, player 1, hands, player 2
- Clicking on the player name or its info button redirects the user to that player’s info pag
- A floating home button

**Data that**

- Is fetched when the apps start
- Is not re-fetched when the user switch between pages
- Is globally accessible.

**The web application layout is set to be responsive to laptop and ipad but not phone screen**
### 2. My principles

- Use the technology that I really understand what it’s doing
- Try to optimize the performance, or at least make the viewer feel the web is fast
- Make the code clean and readable
- Make the component maintainable

### 3. My obstacles and how I overcame

**3.1 CORS policy: No 'Access-Control-Allow-Origin**

As I don’t have the right to control the backend, I chose to use proxy as my workaround. In specific, I host my own [CORS anywhere] (https://github.com/Rob--W/cors-anywhere) on Heroku. The drawback is that it stops working after some time. The long-term solution is the server sides granting the access to the client’s port.

**3.2 How to use web socket**

I was considering between using socket.io and the Javascript’s primary methods. In the end, I went with he Javascript’s ones, because socket.io requires the client side and the server side to adopt the same library for effectiveness.

**3.3 How to memoize data and manage state**

The challenge is: we have to wait for a huge amount of API fetches before we can calculate our player index based on the fetched data. To the best of my knowledge, the common practice is to calculate those indexes at the server side and sent the results to the client via API. I’m working around by fetching and storing my data inside React’s Context API, so that:

- It will start to fetch data immediately when the user opens the web application.
- It will not restart the fetching process when the user switches between pages.
- It will allow global access to the data.

**3.4 Deployment issue** 

At the beginning, I deployed this web application with Heroku. Despite the successful deploy, it could not serve my application because the proxy I used to solve the CORS error is hosted on Heroku too and Heroku refused to do the routing. Thus, I switched my host service to Firebase and the app was live. 

### 4. What can be improved:

- Fix some error from the Material Table library
- Handle web socket reconnection on error in a more elegant way than creating a new socket instance
- Find a better proxy for CORS error if the server side’s solution is still not available

### Avalanche-Game

Avalanche is a simple game of survival! Try to keep sonic from being crushed by the falling rocks for as long as possible.
Your time will be recorded and each time you the game is over you can view your top scores. This game was created using Ruby, Sinatra, JavaScript, AJAX, jQuery, Mousetrap.js, and PostgreSQL. Visit [Avalanche game](jb-avalanchegame.herokuapp.com) to play or clone this repo and run the game locally.

###SETUP

Run the following commands in order to get started:
```
bundle exec install
```
```
rake db:create; rake db:migrate
```
In order to start the server run:
```
be shotgun
```


###TODO:

1. Bug: fix outOfBounds method
2. Implement Timer
3. Create Game-Over page displaying User's top scores


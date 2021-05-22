# Git 
cd ..
git clone https://github.com/ev45ive/lufthansa-react-player.git lufthansa-react-player
cd lufthansa-react-player 
npm i
npm start

## GIT UPDate
git stash -u 
git pull -f 


# Visual Studio Code 
https://code.visualstudio.com/
### Help -> About
code -v 
1.55.0
c185983a683d14c396952dd432459097bc7f757f
x64

## Extensions
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype

# NodeJS
https://nodejs.org/en/
node -v
v14.15.4

npm -v
6.14.6

# GIT
https://git-scm.com/download/win
git --version
git version 2.28.0.windows.1

## Terminal

## Create React App
npx create-react-app 

npm i -g create-react-app 

create-react-app --help
npx create-react-app --help

cd ..
# Visual Studio Code 
https://code.visualstudio.com/
### Help -> About
code -v 
1.55.0
c185983a683d14c396952dd432459097bc7f757f
x64

# NodeJS
https://nodejs.org/en/
node -v
v14.15.4

npm -v
6.14.6

# GIT
https://git-scm.com/download/win
git --version
git version 2.28.0.windows.1

## Terminal

## Create React App
npx create-react-app 

npm i -g create-react-app 

create-react-app --help
npx create-react-app --help

cd ..
npx create-react-app lufthansa --template typescript 

cd lufthansa
npm start 


## NPM
npm install
npm install -ci 

git remote add NAZWA_REPO_MATEUSZA https://github.com/ev45ive/lufthansa-react-player.git
git pull NAZWA_REPO_MATEUSZA master
git pull --set-upstream NAZWA_REPO_MATEUSZA master

git remote add upstream https://github.com/ev45ive/lufthansa-react-player.git
git pull --set-upstream upstream master
git pull

# Playlists 

mkdir -p src/playlists/components
mkdir -p src/playlists/containers

touch src/playlists/components/PlaylistList.tsx
touch src/playlists/components/PlaylistDetails.tsx
touch src/playlists/components/PlaylistEditForm.tsx

touch src/playlists/containers/PlaylistsView.tsx

<!-- touch playlists/containers/MyPlaylistsView.tsx
touch playlists/containers/TopPlaylistsView.tsx
touch playlists/containers/UserPlaylistsView.tsx -->

## Search 
mkdir -p src/music-search/components
mkdir -p src/music-search/containers

touch src/model/Search.tsx

touch src/music-search/containers/MusicSearchView.tsx

touch src/music-search/components/SearchForm.tsx
touch src/music-search/components/AlbumGrid.tsx
touch src/music-search/components/AlbumCard.tsx

<!-- mkdir -p src/core/services -->

## Solid

https://pl.wikipedia.org/wiki/SOLID_(programowanie_obiektowe) 

https://pl.wikipedia.org/wiki/DRY

https://pl.wikipedia.org/wiki/KISS_(regu%C5%82a)

https://pl.wikipedia.org/wiki/YAGNI

## Rest client
https://marketplace.visualstudio.com/items?itemName=humao.rest-client


## Redux - normalizacja stanu
https://github.com/paularmstrong/normalizr
https://github.com/reduxjs/reselect


## Connect + MapStateTo Props
https://react-redux.js.org/tutorials/connect#connecting-the-components


## Async Action Creators 
https://redux.js.org/tutorials/fundamentals/part-4-store#middleware
- middleware
- Interceptor for dispatched actions before reducer

- POWTÓRZYĆ:
- https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Iterators_and_Generators
...


## Projekt JS
- create-react-app (js)
- bootstrap
- json-server
- redux + react-redux
- router
<!-- - styled components (storybook) -->
- jest + testing-library


## Higher ORder  Components
https://github.com/acdlite/recompose
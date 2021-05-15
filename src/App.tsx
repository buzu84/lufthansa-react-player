import React from 'react';
import { PlaylistsView } from './playlists/containers/PlaylistsView';

// npm i bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import { MusicSearchView } from './music-search/containers/MusicSearchView';

// npm i --save-dev @types/react-router
import { Redirect, Route, Switch } from 'react-router'
import { NavBar, UserWidget } from './core/components/NavBar';
import PlaylistTracks from './playlists/containers/PlaylistTracks';
import { PlaylistsReduxView } from './playlists/containers/PlaylistsReduxView';
import { PlaylistTracksHooks } from './playlists/containers/PlaylistTracksHooks';

function App() {
  return (
    <div>
      <NavBar/>
      {/* .container>.row>.col */}
      <div className="container">
        <div className="row">
          <div className="col">

            <Switch>
              <Redirect path="/" exact={true} to="/playlists" />
              <Route path="/playlists/:playlist_id/" component={PlaylistsReduxView} />
              <Route path="/playlists/" component={PlaylistsReduxView} />
              <Route path="/tracks/" component={PlaylistTracksHooks} />
              <Route path="/search" component={MusicSearchView} />
              <Route path="*" render={() => <h1>Page Not Found</h1>} />
            </Switch>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

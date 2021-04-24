import React from 'react';
import { PlaylistsView } from './playlists/containers/PlaylistsView';

// npm i bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import { MusicSearchView } from './music-search/containers/MusicSearchView';
import { AlbumGrid } from './music-search/components/AlbumGrid';

// interface ParentCompProps {
//   childComp?: React.ReactNode;
// }


const App = () => {
  //const { childComp } = props;
  return (
    <div>
      {/* .container>.row>.col */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>MusicApp</h1>

            {/* <PlaylistsView /> */}
            <MusicSearchView resultsComponent={AlbumGrid}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

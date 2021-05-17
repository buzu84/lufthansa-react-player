import React, { useCallback } from 'react'
import { SearchForm } from '../../core/components/SearchForm'
import { SimpleTrack, Track } from '../../model/Search'
import SelectPlaylist from '../components/SelectPlaylist'
import TrackDetails from '../components/TrackDetails'
import TrackForm from '../components/TrackForm'
import TracksList from '../components/TracksList'
import { useDispatch, useSelector } from 'react-redux'
import { selectPlaylist, selectPlaylists, selectSelectedPlaylistTracks, selectSelectedTrack, tracksPlaylistsSelect, tracksSelect, tracksUpdate } from '../../core/reducers/TracksReducer'


interface Props {

}

// TODO:
// - store state
// - store actions
// - select from store
//      - playlists,
//      - selected playlist,
//      - selected plalyist tracks
//      - selected track
// - dispatch to store
//      - load playlists,
//      - select playlist,
//      - select track,
//      - update track
// ???

export const PlaylistTracksHooks = (props: Props) => {
    const dispatch = useDispatch()
    const playlists = useSelector(selectPlaylists)
    const selectedPlaylist = useSelector(selectPlaylist)
    const selectedPlaylistTracks = useSelector(selectSelectedPlaylistTracks)
    const selectedTrack = useSelector(selectSelectedTrack)

    const selectPlaylistById = useCallback((id: string) => { dispatch(tracksPlaylistsSelect(id)) }, [])
    const selectTrackById = useCallback((track: SimpleTrack) => { dispatch(tracksSelect(track.id)) }, [])
    const updateTrack = useCallback((draft: SimpleTrack) => { dispatch(tracksUpdate(draft)) }, [])

    return (

        <div>
            PlaylistTracks
            <div className="row">
                <div className="col">
                    <SelectPlaylist playlists={playlists} onSelect={selectPlaylistById} />
                    <hr />
                    {selectedPlaylist && <TracksList
                        tracks={selectedPlaylistTracks}
                        selected={selectedTrack?.id}
                        onSelect={selectTrackById} />}
                </div>
                <div className="col">
                    {selectedTrack && <TrackDetails track={selectedTrack} />}
                    {selectedTrack && <>
                        <TrackForm track={selectedTrack} onSave={updateTrack} />
                    </>}
                </div>
            </div>
        </div>
    )
}

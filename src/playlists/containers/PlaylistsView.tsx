// tsrafc
import React, { useEffect, useState } from 'react'
import { Playlist } from '../../model/Playlist'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistEditForm } from '../components/PlaylistEditForm'
import { PlaylistList } from '../components/PlaylistList'
import { PlaylistSearchForm } from '../components/PlaylistSearchForm'

interface Props { 
    onSearch: (query: string) => void
    playlistsResults: Playlist[]
}

const data: Playlist[] = [
    {
        id: '123',
        name: 'Playlista 😇',
        public: true,
        description: 'no i co ja dzis polubie?..🤔'
    },
    {
        id: '234',
        name: 'Playlista 😁',
        public: false,
        description: 'moze polubię TypeScript?. 🚀'
    },
    {
        id: '345',
        name: 'Playlista 😆',
        public: true,
        description: 'albo wszystko polubię co mi tam 😅💖'
    },
]

export const PlaylistsView = ({ onSearch, playlistsResults }: Props) => {
    const [selectedId, setSelectedId] = useState<string | undefined>()
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | undefined>()
    const [mode, setMode] = useState<'details' | 'form' | 'create' | 'search'>('details')
    const [playlists, setPlaylists] = useState<Playlist[]>(playlistsResults)

    useEffect(() => {
        setSelectedPlaylist(playlists.find(p => p.id == selectedId))
        console.log('jestem w plView z props:  ', playlistsResults.length)
        setPlaylists(playlistsResults) // prawdopodobna przyczyna - propsy 
        console.log('jestem w plView:  ', playlists.length)
    
    }, [playlistsResults, selectedId])

    /* TODO:
    zad 15.04.21
        - Show "Please select playlist when nothing selected"
        - Remove playlists when X clicked
        - Create new playlist
            - Show Empty form when button [ Create new playlist ] cliked
            - Cancel... go back to details.
            - Save - add new playlist to list and select in in details.
    */

    const edit = () => {
        setMode('form')
    }

    const cancel = () => {
        setMode('details')
    }

    const saveChangedPlaylist = (draft: Playlist) => {
        if (draft.name.length < 3) {
            return [new Error('Too short!')]
        }
        setMode('details')
        setPlaylists(playlists => playlists.map(p => p.id === draft.id ? draft : p))
        return null;
    }

    const saveNewPlaylist = (draft: Playlist) => {
        if (draft.name.length < 3) {
            return [new Error('Too short!')]
        }
        draft.id = (~~(Math.random() * Date.now())).toString()
        setMode('details')
        setPlaylists(playlists => [...playlists, draft])
        setSelectedId(draft.id)
        return null;
    }

    const removePlaylist = (id: Playlist['id']) => {
        setPlaylists(playlists => playlists.filter(p => p.id !== id))
    }

    const changeSelectedPlaylist = (id: Playlist['id']): void => {
        setMode('details')
        setSelectedId(selectedId => selectedId === id ? undefined : id)
    }

    const emptyPlaylist: Playlist = {
        id: '',
        name: '',
        public: false,
        description: ''
    }

    return (
        <div>
            <h4>PlaylistsView</h4>
            {/* .row>.col*2 */}
            <div className="row">
                <div className="col">
                    <PlaylistList
                        onSelected={changeSelectedPlaylist}
                        onRemove={removePlaylist}
                        playlists={playlists}
                        selectedId={selectedId} />

                    <button className="btn btn-info btn-block mt-4" onClick={() => setMode('create')}>Create New Playlist</button>

                    <button className="btn btn-info btn-block mt-4" onClick={() => setMode('search')}>Search Playlist</button>
                </div>
                <div className="col">
                    {selectedPlaylist && mode === 'details' && <PlaylistDetails
                        edit={edit}
                        playlist={selectedPlaylist} />}

                    {selectedPlaylist && mode === 'form' && <PlaylistEditForm
                        save={saveChangedPlaylist}
                        playlist={selectedPlaylist}
                        cancel={cancel} />}

                    {emptyPlaylist && mode === 'create' && <PlaylistEditForm
                        save={saveNewPlaylist}
                        playlist={emptyPlaylist}
                        cancel={cancel} />}

                    {!selectedPlaylist && mode !== 'create' && <div className="alert alert-info">Please select playlist</div>}

                    {mode === 'search' && <PlaylistSearchForm onSearch={onSearch}/>}
                </div>
            </div>
        </div>
    )
}

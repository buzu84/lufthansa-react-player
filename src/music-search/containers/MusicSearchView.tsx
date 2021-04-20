import React, { useState, useEffect } from 'react'
import { Album, AlbumView } from '../../model/Search'
import { AlbumGrid } from '../components/AlbumGrid'
import { SearchForm } from '../components/SearchForm'
import { useSearchAlbums } from '../../core/hooks/useSearchAlbums'
import { useSearchArtists } from '../../core/hooks/useSearchArtists'
import { SearchArtists } from '../components/SearchArtists'
import { ArtistGrid } from '../components/ArtistGrid'
import { PlaylistsView } from '../../playlists/containers/PlaylistsView';


interface Props { }

const albumsMock: AlbumView[] = [
    { id: "123", name: "Album 123", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/300/300" }] },
    { id: "234", name: "Album 234", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/400/400" }] },
    { id: "345", name: "Album 345", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/500/500" }] },
    { id: "456", name: "Album 456", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/600/600" }] },
]

/* TODO:
    - W AppComponent - przelaczane widoki jako zakladki do wyboru - "Szukaj Albumow" i "Szukaj Artystow" 
    ( + opcjonalnie zakladka "Playlisty" z PlaylistView ) https://getbootstrap.com/docs/4.6/components/navs/#tabs
    - Wyszukiwarka Artystow - {"q": "Bon Jovi", "type":"artist"}
    - Wykorzystaj ponownie Formularz wyszukiwania na nowym ekranie!
    - Wyniki w formie Card Grid lub Table lub list... (dowolnie)
    
    // Konto Spotify:
    // holoyis165 @ bulkbye . com
    // placki 777
    
    // Nie zmienamy nic w services / auth.

    - https://developer.spotify.com/documentation/web-api/reference/#endpoint-search
*/

export const MusicSearchView = (props: Props) => {
    const [mode, setMode] = useState<'artists' | 'playlists' | 'albums'>('albums')
    // const { searchAlbums, isLoading, message, results } = useSearchAlbums('http://localhost:3000/data/albums.json')
    const [albumQuery, setAlbumQuery] = useState<string>('')
    

    const {
        searchAlbums,
        isLoading,
        message,
        results
    } = useSearchAlbums('https://api.spotify.com/v1/search')

    const {
        searchArtists,
        isArtistsLoading,
        messageArtists,
        artistsResults
    } = useSearchArtists('https://api.spotify.com/v1/search')

    const setSearchArtists = () => {
        setMode('artists')
    }
    const setSearchAlbums = () => {
        setMode('albums')
    }
    const setSearchPlaylists = () => {
        setMode('playlists')
    }

    return (
        <>

            <nav className="nav justify-content-center">
                <ul className="nav-item">
                    <li className={mode === 'albums' ? "active nav-link" : "nav-link"} onClick={setSearchAlbums}>
                        Search albums
                    </li>
                </ul>

                <ul className="nav-item">
                    <li className={mode === 'artists' ? "active nav-link" : "nav-link"} onClick={setSearchArtists}>
                        Search artists
                    </li>
                </ul>

                <ul className="nav-item">
                    <li className={mode === 'playlists' ? "active nav-link" : "nav-link"} onClick={setSearchPlaylists}>
                        Search playlists
                    </li>
                </ul>
            </nav>

            <section>
                <div className={mode === 'albums' ? "col" : "d-lg-none"}>
                    <SearchForm onSearch={searchAlbums} />
                </div>
                <div className={mode === 'artists' ? "col" : "d-lg-none"}>
                    <SearchArtists onSearch={searchArtists} />
                </div>
                <div className="row">
                    <div className={mode !== 'albums' ? "d-lg-none" : "col"}>
                        {isLoading && <p className="alert alert-info">Loading</p>}
                        {message && <p className="alert alert-danger">{message}</p>}
                        {mode === 'albums' && <AlbumGrid albums={results} />}
                    </div>

                    <div className={mode !== 'artists' ? "d-lg-none" : "col"}>
                        {isArtistsLoading && <p className="alert alert-info">Loading</p>}
                        {messageArtists && <p className="alert alert-danger">{messageArtists}</p>}
                        {mode === 'artists' && <ArtistGrid artists={artistsResults} />}
                    </div>

                    <div className={mode !== 'playlists' ? "d-lg-none" : "col"}>
                        
                        {mode === 'playlists' && <PlaylistsView />}
                    </div>
                </div>
            </section>
        </>




    )
}
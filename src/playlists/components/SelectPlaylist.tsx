import React, { Component } from 'react'
import { Playlist } from '../../model/Playlist'

interface Props {
    playlists: Playlist[]
    onSelect(playlist_id: Playlist['id']): void
}
interface State {

}

export const SelectPlaylist = (props: Props) => {
    const state = {}
    
        return (
            <div>
                <label>SelectPlaylist</label>
                <select className="form-control" onChange={e => {
                    const playlist_id = e.currentTarget.selectedOptions[0].value
                    props.onSelect(playlist_id);
                }}>
                    <option>-- Please select playlist --</option>
                    {props.playlists.map(playlist => <option key={playlist.id} value={playlist.id} 
                     >
                        {playlist.name}
                    </option>)}
                </select>
            </div>
        )
    }


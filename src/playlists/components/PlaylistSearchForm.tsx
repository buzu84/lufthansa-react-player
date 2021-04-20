import React, { ChangeEvent, useEffect, useState } from 'react'
import { Playlist } from '../../model/SearchPlaylists'

interface Props {
  onSearch(query: string): void
}


export const PlaylistSearchForm = ({ onSearch }: Props) => {
    const [query, setQuery] = useState('')

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search"
                    onChange={e => setQuery(e.target.value)}
                    onKeyUp={e => e.code === 'Enter' && onSearch(query)}
                    value={query}
                />

                <button className="btn btn-outline-secondary" type="button" onClick={() => onSearch(query)}>Search</button>
            </div>
        </div>
    )
}
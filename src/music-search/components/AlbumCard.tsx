import React from 'react'
import { AlbumView } from '../../model/Search'
import { useHistory } from 'react-router'
// import { tracksLoad } from '../../core/reducers/TracksReducer'

interface Props {
    album: AlbumView
}


export const AlbumCard = ({ album }: Props) => {
    const { replace } = useHistory()

    return (
        // onclick zmien url(push-history)
        <div className="card h-100" onClick={()=> replace('/albums/' + album.id)}>
            <img src={album.images[0].url} className="card-img-top" alt={album.name} />

            <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
            </div>
        </div>
    )
}

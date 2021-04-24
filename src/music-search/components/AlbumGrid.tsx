import React from 'react'
import { AlbumView } from '../../model/Search'
import { AlbumCard } from './AlbumCard'

interface Props {
    results: AlbumView[]
}

export const AlbumGrid = ({ results }: Props) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-4 no-gutters">
                {results.map(element => <div className="col mb-4" key={element.id}>
                    <AlbumCard album={element} />
                </div>)}
            </div>
        </div>
    )
}

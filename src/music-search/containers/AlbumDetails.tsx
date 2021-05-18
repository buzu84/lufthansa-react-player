import React, { useEffect } from 'react'
import { AlbumCard } from '../components/AlbumCard'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchAlbumById } from '../../core/hooks/usePlaylists'
import { fetchAlbumFailed, fetchAlbumStart, fetchAlbumSuccess, selectAlbumFetchState } from '../../core/reducers/SearchReducer'

interface Props {

}

export const AlbumDetails = (props: Props) => {
    // 5Tby0U5VndHW0SomYO7Id7

    // TODO:
    // Use Fake ID
    // Fetch data from server
    // Dispatch data to reducer
    // Display data + loading + error from reducer
    // Get ID from router

    // najpierw co potrzebuje w stanie komponentu danego i jak to umieszczam w reducerze:
    // -album, loading, message
    // następnie akcje:
    // -pobrac album(FETCH_ALBUM_START(po adresie(id - to bedzie payload)), FETCH_ALBUM_SUCCESS(wynikiem bedzie 1 album - payload), FETCH_ALBUM_FAILED)
    // dopisz case-y i typy dla akcji.

    const dispatch = useDispatch()
    const { album, isLoading, message } = useSelector(selectAlbumFetchState)

    const { album_id } = useParams<{ album_id: string }>()

    useEffect(() => {
        dispatch(fetchAlbumStart(album_id))

        fetchAlbumById(album_id)
            .then(data => { dispatch(fetchAlbumSuccess(data)) })
            .catch(error => { dispatch(fetchAlbumFailed(error)) })
    }, [album_id])

    if (isLoading) { return <Loading /> }

    if (message) {
        return <p className="alert alert-danger">{message}</p>
    }

    // if(!album) { return <p></p> }

    return (
        <div>
            AlbumDetails

            <div className="row">
                <div className="col">
                    <small className="text-muted">{album_id}</small>
                    <h1>{album?.name}</h1>

                </div>
            </div>
            <div className="row">
                <div className="col">
                    {album && <AlbumCard album={album} />}
                </div>
                <div className="col">

                    <dl>
                        <dt>Album name:</dt>
                        <dd>{album?.name}</dd>

                        <dt>Artist:</dt>
                        <dd>{album?.artists[0]?.name}</dd>
                    </dl>

                </div>
            </div>
        </div>
    )
}

export const Loading = () => <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
    </div>
</div>

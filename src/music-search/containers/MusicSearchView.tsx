import React, { useCallback, useEffect, useRef } from 'react'
import { useHistory, useLocation } from 'react-router'
import { SearchForm } from '../../core/components/SearchForm';
import { fetchAlbums } from '../../core/hooks/useSearchAlbums';
import reducer, { initialState, searchFailed, searchStart, searchSuccess } from '../../core/reducers/SearchReducer';
import { AlbumView } from '../../model/Search';
import { AlbumGrid } from '../components/AlbumGrid';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';

interface Props { }

export const MusicSearchView = (props: Props) => {
    // const [{ isLoading, message, results, params: query }, setQuery] = useFetch(fetchAlbums)
    // const [placki, setPlacki] = useState('placki')
    // const [{ isLoading, message, query, results }, dispatch] = useReducer(reducer, initialState)

    const ref = useRef<{ reset(): void } | null>(null)
    const { push, replace } = useHistory()
    const { search: searchParams } = useLocation()

    const dispatch = useDispatch()
    const { 
        isLoading, 
        message, 
        query, 
        results 
    } = useSelector((state: AppState) => state.search)

    useEffect(() => {
        const q = new URLSearchParams(searchParams.slice(1)).get('q')
        if (!q) { return; }
        window.document.title = 'Searching ' + q

        // dispatch(searchStart(q))
        // fetchAlbums(q)
        //     .then(res => dispatch(searchSuccess(res)))
        //     .catch(error => dispatch(searchFailed(error)))

    }, [searchParams])

    const search = useCallback((query) => {
        replace('/search?q=' + query)
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col">
                    {/* <SearchForm onSearch={search} query={query || ''} ref={ref} /> */}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {/* {isLoading && <p className="alert alert-info">Loading</p>}
                    {message && <p className="alert alert-danger">{message}</p>}

                    {results && <div data-testid="search-results">
                        <AlbumGrid albums={results} />
                    </div>} */}
                </div>
            </div>
        </div>
    )
}

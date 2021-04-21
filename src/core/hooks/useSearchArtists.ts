import axios from 'axios';
import { useState } from 'react';
import { ArtistsSearchResponse, ArtistView } from '../../model/SearchArtists';
import { auth } from '../services';


export const useSearchArtists = (api_url: string) => {
    const [results, setResults] = useState<ArtistView[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const searchArtists = async (query: string) => {
        try {
            setResults([]);
            setMessage('');
            setIsLoading(true);

            const response = await axios.get<ArtistsSearchResponse>(api_url, {
                headers: { Authorization: 'Bearer ' + auth.token },
                params: { q: query, type: 'artist' },
            });

            setResults(response.data.artists.items);
        }
        catch (error) { setMessage(error.message); }
        finally { setIsLoading(false); }
    };

    return {
      searchArtists,
      isArtistsLoading: isLoading,
      messageArtists: message,
      artistsResults: results
    };
};

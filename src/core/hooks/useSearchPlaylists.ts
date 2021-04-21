import axios from 'axios';
import { useState } from 'react';
import { PlaylistsSearchResponse } from '../../model/SearchPlaylists';
import { auth } from '../services';
import { Playlist } from '../../model/Playlist';


export const useSearchPlaylists = (api_url: string) => {
    const [playlistsResults, setPlaylistsResults] = useState<Playlist[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const searchPlaylists = async (query: string) => {
        try {
            setPlaylistsResults([]);
            setMessage('');
            setIsLoading(true);

            const response = await axios.get<PlaylistsSearchResponse>(api_url, {
                headers: { Authorization: 'Bearer ' + auth.token },
                params: { q: query, type: 'playlist' },
            });

            setPlaylistsResults(response.data.playlists.items);
            console.log('results in the hook ', playlistsResults.length)
        }
        catch (error) { setMessage(error.message); }
        finally { setIsLoading(false); }
    };

    return {
      searchPlaylists,
      isPlaylistsLoading: isLoading,
      messagePlaylists: message,
      playlistsResults: playlistsResults
    };
};

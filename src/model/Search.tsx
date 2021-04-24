
// Generated by https://quicktype.io

export interface AlbumsResponse {
    albums: Album[];
}

export interface AlbumsSearchResponse {
    albums: PagingObject<Album>;
}

export interface ArtistsSearchResponse {
    artists: PagingObject<Artist>;
}

export type SearchResponse<T>  = {
    [key in keyof 'artists'|'albums']: PagingObject<T>;
}

export interface AlbumView {
    id:                     string;
    images:                 Image[];
    name:                   string;
    type:                   'album';
}

// export interface ArtistView {
//     id:                     string;
//     images:                 Image[];
//     name:                   string;
//     type:                   'artist';
// }

export interface Album {
    id:                     string;
    images:                 Image[];
    name:                   string;
    type:                   'album';
    album_type:             string;
    artists:                Artist[];
    available_markets:      string[];
    copyrights:             Copyright[];
    external_ids:           ExternalIDS;
    external_urls:          ExternalUrls;
    genres:                 any[];
    href:                   string;
    popularity:             number;
    release_date:           string;
    release_date_precision: string;
    tracks:                 PagingObject<Track>;
    uri:                    string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Copyright {
    text: string;
    type: string;
}

export interface ExternalIDS {
    upc: string;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

/* PagingObject<Artist>, PagingObject<Album>, PagingObject<... > */
export interface PagingObject<T> {
    href:     string;
    items:    T[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Track {
    id:                string;
    name:              string;
    type:              'track';
    artists:           Artist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_urls:     ExternalUrls;
    href:              string;
    preview_url:       string;
    track_number:      number;
    uri:               string;
}

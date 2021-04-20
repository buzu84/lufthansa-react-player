import React, { useState } from 'react'

interface Props {
    onSearch(query: string): void
}

export const SearchForm = ({ onSearch }: Props) => {
    const [query, setQuery] = useState('')

    return (
        <div>
            <div className="input-group mb-3">
            {query}
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

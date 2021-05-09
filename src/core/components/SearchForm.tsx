import React, { ForwardedRef, forwardRef, Ref, RefObject, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react'

interface Props {
    query?: string
    onSearch(query: string): void,
}

// export const SearchForm = forwardRef(({ onSearch, query: parentQuery = '' }: Props, formRef: ForwardedRef<HTMLInputElement>) => {
export const SearchForm = forwardRef(({ onSearch, query: parentQuery = '' }: Props, formRef: ForwardedRef<{ reset(): void }>) => {
    const [query, setQuery] = useState(parentQuery)
    const queryRef = useRef<HTMLInputElement>(null)
    // const isFirst = useRef(true)

    useImperativeHandle(formRef, () => ({
        reset() {
            setQuery('')
        },
        focus() {
            (typeof queryRef === 'object') && queryRef?.current?.focus()
        }
    }), [])

    useEffect(() => { setQuery(parentQuery) }, [parentQuery])

    useEffect(() => {
        // if (isFirst.current) { isFirst.current = false; return; }
        if (parentQuery === query) { return }

        const handle = setTimeout(() => {
            onSearch(query)
        }, 500);

        return () => clearTimeout(handle)
    }, [query])

    useEffect(() => {
        if (typeof queryRef === 'object') {
            queryRef?.current?.focus()
        }
    }, [])

    return (
        <div>
            <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="Search" id="query_id"
                    ref={queryRef}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyUp={e => {
                        // console.log(e.currentTarget.value)
                        // https://create-react-app.dev/docs/debugging-tests/
                        e.key === 'Enter' && onSearch(query)
                    }}
                />

                {/* <button className="btn btn-outline-secondary" type="button" onClick={() => onSearch(query)}>Search</button> */}
            </div>
        </div>
    )
})

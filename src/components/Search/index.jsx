import React from 'react'

import PropTypes from 'prop-types'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'
import Hit from './Hit'

import * as S from './styled'

const Search = ({ algolia }) => {
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

  return (
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <SearchBox autoFocus translations={{ placeholder: 'Search...' }} />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return (
                <S.resultsMsg>
                  {nbHits} results found in {timeSpentMs}ms
                </S.resultsMsg>
              )
            }
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.SearchWrapper>
  )
}

Search.propTypes = {
  algolia: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
}

export default Search

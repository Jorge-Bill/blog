import React from 'react'

import { LayoutCustom, Search, Seo } from '@components'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

const SearchPage = () => (
  <LayoutCustom>
    <Seo title="Search" />
    <Search algolia={algolia} />
  </LayoutCustom>
)

export default SearchPage

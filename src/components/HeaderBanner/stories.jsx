import React from 'react'

import HeaderBanner from '.'

export default {
  component: HeaderBanner,
  title: 'Components/HeaderBanner',
  argTypes: {
    title: {
      type: 'string'
    },
    tags: {
      type: 'string'
    },
  },
  args: {
    title: 'Banner',
    tags: 'sky'
  }
}

export const Default = (args) => (
  <>
    <HeaderBanner {...args} />
  </>
)

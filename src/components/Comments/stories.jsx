import React from 'react'

import Comments from '.'

export default {
  component: Comments,
  title: 'Components/Comments',
  argTypes: {
    url: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
  },
  args: {
    url: '/tenha-amor-por-programar-mas-não-apego-ao-código/',
    title: 'Tenha amor por programar mas não apego ao código'
  }
}

export const Default = (args) => (
  <>
    <Comments {...args} />
  </>
)

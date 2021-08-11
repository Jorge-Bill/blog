import React from 'react'

import Card from '.'

export default {
  component: Card,
  title: 'Components/Card',
  argTypes: {
    children: {
      type: 'string'
    },
  },
  args: {
    children: (
      <p>
        Lorem ipsum
      </p>
    )
  }
}

export const Default = (args) => (
  <>
    <Card {...args} />
  </>
)

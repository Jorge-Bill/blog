const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme
  const dark = '#ff0000'
  const light = '#f0f0f3'

  switch (theme) {
    case 'light':
      return light

    case 'dark':
      return dark

    default:
      return dark
  }
}

export default getThemeColor

const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#f0f0f3"
  if (theme === "dark") return "#07b0b8"
}

export default getThemeColor

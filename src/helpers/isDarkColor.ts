function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null
}

export default function (color: string) {
  const rgb = hexToRgb(color)
  if (!rgb) {
    return true
  }
  const o = Math.round((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000)
  return o <= 100 ? true : false
}

export default function (s?: string) {
  if (!s) return ''
  return `${s.slice(0, 6)}...${s.slice(-4)}`
}

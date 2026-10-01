/**
 * Renders official brand SVGs from Simple Icons (https://simpleicons.org).
 * @param {{ title: string, path: string, hex?: string }} icon
 */
export const SimpleBrandIcon = ({
  icon,
  className = 'size-5',
  useBrandColor = false,
}) => {
  if (!icon?.path) return null

  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill={useBrandColor && icon.hex ? `#${icon.hex}` : 'currentColor'}
      aria-hidden='true'
    >
      <path d={icon.path} />
    </svg>
  )
}

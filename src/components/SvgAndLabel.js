export const SvgAndLabel = ({
  iconPlacement,
  label,
  svg,
  customSvgColor,
  customSize,
  customAlignment,
  customFontColor,
}) => {
  const size = customSize ?? 'w-6 md:w-10'
  const color =
    customSvgColor ??
    'fill-primaryLight dark:fill-primaryDark [&_svg]:fill-current'
  const alignment =
    customAlignment ??
    (iconPlacement === 'right'
      ? 'flex w-full items-center justify-end gap-2'
      : 'flex w-full items-center justify-start gap-2')
  const fontColor = customFontColor ?? null

  const iconEl = <span className={`${size} ${color}`}>{svg}</span>
  const labelEl = <span className={fontColor}>{label}</span>

  return (
    <div className={alignment}>
      {iconPlacement === 'left' ? (
        <>
          {iconEl}
          {labelEl}
        </>
      ) : (
        <>
          {labelEl}
          {iconEl}
        </>
      )}
    </div>
  )
}

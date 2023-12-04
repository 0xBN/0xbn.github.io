import React from 'react'

export const SvgAndLabel = ({
  iconPlacement,
  label,
  svg,
  customSvgColor,
  customSize,
  customAlignment,
  customFontColor,
}) => {
  let size = customSize ? customSize : 'w-6 md:w-10'
  let color = customSvgColor
    ? customSvgColor
    : 'fill-primaryLight dark:fill-primaryDark'
  let icon =
    iconPlacement === 'left'
      ? 'flex-row-reverse'
      : iconPlacement === 'center'
      ? 'flex-row items-center'
      : null
  let alignment = customAlignment
    ? customAlignment
    : 'flex w-full items-center justify-end gap-2'
  let fontColor = customFontColor ? customFontColor : null

  return (
    <div className={`${alignment} ${icon}`}>
      <span className={`${fontColor}`}>{label}</span>
      <span className={`${size} ${color}`}>{svg}</span>
    </div>
  )
}

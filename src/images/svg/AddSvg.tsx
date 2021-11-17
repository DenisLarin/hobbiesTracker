import React, { FC } from 'react'
import { ISvg } from '../../core/interfaces/ISvg'
import Svg, { Path } from 'react-native-svg'
import { Colors } from '../../core/Colors'

/**
 * @description - AddSvg component interface.
 * @param color - The color of the icon.
 * @param viewBox - The viewBox of the icon.
 * @param width - The width of the icon.
 * @param height - The height of the icon.
 * @return {JSX.Element}
 * @constructor
 */
export const AddSvg: FC<ISvg> = ({
  color = Colors.white,
  viewBox = '0 0 20 20',
  width = 20,
  height = 20,
}): JSX.Element => {
  return (
    <Svg viewBox={viewBox} width={width} height={height}>
      <Path
        d="M17 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 6V14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 10H14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

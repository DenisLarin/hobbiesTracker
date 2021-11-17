import React, { FC } from 'react'
import { ISvg } from '../../core/interfaces/ISvg'
import Svg, { Path } from 'react-native-svg'
import { Colors } from '../../core/Colors'
/**
 * @description - TrackerSvg component.
 * @param color - The color of the icon.
 * @param viewBox - The viewBox of the icon.
 * @param width - The width of the icon.
 * @param height - The height of the icon.
 * @return {JSX.Element}
 * @constructor
 */
export const TrackerSvg: FC<ISvg> = ({
  color = Colors.white,
  viewBox = '0 0 22 22',
  width = 22,
  height = 22,
}): JSX.Element => {
  return (
    <Svg viewBox={viewBox} width={width} height={height}>
      <Path
        d="M19 1H3C1.89543 1 1 1.89543 1 3V7C1 8.10457 1.89543 9 3 9H19C20.1046 9 21 8.10457 21 7V3C21 1.89543 20.1046 1 19 1Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 13H3C1.89543 13 1 13.8954 1 15V19C1 20.1046 1.89543 21 3 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 5H5.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 17H5.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

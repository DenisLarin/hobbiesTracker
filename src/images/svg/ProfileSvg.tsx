import React, { FC } from 'react'
import { ISvg } from '../../core/interfaces/ISvg'
import Svg, { Circle, Path } from 'react-native-svg'
import { Colors } from '../../core/Colors'

/**
 * @description - ProfileSvg component interface
 * @param color - The color of the icon.
 * @param viewBox - The viewBox of the icon.
 * @param width - The width of the icon.
 * @param height - The height of the icon.
 * @return {JSX.Element}
 * @constructor
 */
export const ProfileSvg: FC<ISvg> = ({
  color = Colors.white,
  viewBox = '0 0 22 22',
  width = 22,
  height = 22,
}): JSX.Element => {
  return (
    <Svg viewBox={viewBox} width={width} height={height}>
      <Circle cx="11" cy="11" r="10" stroke={color} strokeWidth="2" />
      <Path
        d="M17 17.5V16C17 15.2044 16.6839 14.4413 16.1213 13.8787C15.5587 13.3161 14.7956 13 14 13H8C7.20435 13 6.44129 13.3161 5.87868 13.8787C5.31607 14.4413 5 15.2044 5 16V17.5M14 7C14 8.65685 12.6569 10 11 10C9.34315 10 8 8.65685 8 7C8 5.34315 9.34315 4 11 4C12.6569 4 14 5.34315 14 7Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

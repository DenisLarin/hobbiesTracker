import { TrackerSvg } from '../images/svg/TrackerSvg'
import { FC } from 'react'
import { ISvg } from './interfaces/ISvg'
import { AddSvg } from '../images/svg/AddSvg'
import { ProfileSvg } from '../images/svg/ProfileSvg'

export interface ITabBarMenu {
  name: string
  icon: FC<ISvg>
}

interface ITabBarMenus {
  [key: string]: ITabBarMenu
}

export const TabBarMenus: ITabBarMenus = {
  trackers: {
    name: 'Трекеры',
    icon: TrackerSvg,
  },
  add: {
    name: 'Добавить',
    icon: AddSvg,
  },
  profile: {
    name: 'Профиль',
    icon: ProfileSvg,
  },
}

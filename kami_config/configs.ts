import { faGithub, faQq, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'
import {
  faBookOpen,
  faCircleNotch,
  faComment,
  faComments,
  faFeatherAlt,
  faGlasses,
  faHistory,
  faMusic,
  faTv,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { MenuModel, SocialLinkModel } from 'common/store/types'
const menu: MenuModel[] = [
  {
    title: '源',
    path: '/',
    type: 'Home',
    icon: faDotCircle,
    subMenu: [],
  },
  {
    title: '文',
    path: '/posts',
    type: 'Post',
    subMenu: [],
    icon: faGlasses,
  },
  {
    title: '记',
    type: 'Note',
    path: '/notes',
    icon: faFeatherAlt,
  },
  {
    title: '言',
    path: '/says',
    icon: faComments,
  },
  {
    title: '览',
    icon: faHistory,
    path: '/timeline',
    subMenu: [
      {
        title: '生活',
        icon: faFeatherAlt,
        path: '/timeline?type=note',
      },
      {
        title: '博文',
        icon: faBookOpen,
        path: '/timeline?type=post',
      },
      {
        title: '回忆',
        icon: faCircle,
        path: '/timeline?memory=1',
      },
    ],
  },
  {
    title: '友',
    icon: faUserFriends,
    path: '/friends',
  },
  {
    title: '诉',
    icon: faComment,
    path: '/recently',
  },
  {
    title: '',
    icon: faCircleNotch,
    path: '/favorite/music',
    subMenu: [
      {
        title: '音乐',
        icon: faMusic,
        type: 'Music',
        path: '/favorite/music',
      },
      {
        title: '追番',
        icon: faTv,
        type: 'Bangumi',
        path: '/favorite/bangumi',
      },
      // {
      //   title: '项目',
      //   icon: faFlask,
      //   type: 'Project',
      //   path: '/projects',
      // },
    ],
  },
]
const social: SocialLinkModel[] = [
  {
    url: 'https://github.com/wibus-wee',
    title: 'GitHub',
    icon: faGithub,
    color: 'var(--black)',
  },
  {
    url: 'https://jq.qq.com/?_wv=1027&k=iZxOGzDW',
    title: 'QQ',
    icon: faQq,
    color: '#12b7f5',
  },
  {
    url: '#',
    title: 'twitter',
    icon: faTwitter,
    color: '#02A4ED',
  },
]
export default {
  url: 'https://iucky.cn',
  alwaysHTTPS:
    process.env.NODE_ENV === 'development'
      ? false
      : process.env.ALWAYS_HTTPS && parseInt(process.env.ALWAYS_HTTPS) === 1,
  social,
  biliId: 26578164,
  homePage: 'https://iucky.cn', // footer link
  menu,
  icp: {
    name: 'Coding With TypeScript',
    url: '/about',
  },
  travellings: true, // 开往
  donate: '#',
}
/**
 * @param {string} pathname pathname 值
 * @returns {SidebarItem[]} 侧边栏数组
 */
export const getSideBarList = (pathname: string) => {
  if (['/basic', '/core', '/api'].includes(pathname)) {
    return [
      {
        text: '基础篇',
        collapsed: false,
        items: [
          { text: '基础篇', link: '/basic/index' },
          { text: '基础篇1', link: '/basic/basic1' },
          { text: '基础篇2', link: '/basic/basic2' }
        ]
      },
      {
        text: 'API 篇',
        collapsed: true,
        items: [
          { text: 'API篇', link: '/api/index' },
          { text: 'API篇1', link: '/api/api1' },
          { text: 'API篇2', link: '/api/api2' }
        ]
      },
      {
        text: '核心篇',
        collapsed: false,
        items: [
          { text: '核心篇', link: '/core/index' },
          { text: '核心篇1', link: '/core/core1' },
          { text: '核心篇2', link: '/core/core2' }
        ]
      }
    ]
  }
  if (['/tianyaxunzhi'].includes(pathname)) {
    return [
      {
        text: '天涯寻知',
        collapsed: false,
        items: [
          { text: '社会不教，精英不讲', link: '/tianyaxunzhi/index' },
          { text: '一个炒房人的终极预测', link: '/tianyaxunzhi/tianya01' },
          { text: '一百元人民币在泰国能做什么', link: '/tianyaxunzhi/tianya02' },
          { text: '经济的逻辑', link: '/tianyaxunzhi/tianya03' },
          { text: '你所不知道的冰冷的经济真相', link: '/tianyaxunzhi/tianya04' },
          { text: '赚未来十年的钱', link: '/tianyaxunzhi/tianya05' },
          { text: '金融幻象', link: '/tianyaxunzhi/tianya06' },
          { text: '看一个穷人怎样拥有多套房产的？', link: '/tianyaxunzhi/tianya07' },
          { text: '危机十年轮回，新一轮危机悄悄来临', link: '/tianyaxunzhi/tianya08' }
        ]
      }
    ]
  }
  //面试
  if (['/interview'].includes(pathname)) {
    return [
      {
        text: 'Spring篇',
        collapsed: false,
        items: [
          { text: '技术选型', link: '/interview/index' },
          { text: 'Spring面试题和答案', link: '/interview/interview02' }
        ]
      },
      {
        text: 'Mysql篇',
        collapsed: false,
        items: [
          { text: '去BAT面试完的Mysql面试题总结', link: '/interview/mysql01' },
          { text: '一个炒房人的终极预测', link: '/interview/mysql02' }
        ]
      }
    ]
  }

  //快搜
  if (['/shortcutkey','/wallpaper'].includes(pathname)) {
    return [
      {
        text: '快捷键',
        collapsed: false,
        items: [
          { text: 'PS快捷键', link: '/shortcutkey/index' },
          { text: 'PR快捷键', link: '/shortcutkey/PR' },
          { text: 'AE快捷键', link: '/shortcutkey/AE' }
        ]
      },
      {
        text: '素材',
        collapsed: false,
        items: [
          { text: '壁纸', link: '/wallpaper/index' },
          { text: '配色', link: '/wallpaper/color' },
          { text: '图标', link: '/wallpaper/icon' }
        ]
      }
    ]
  }

  return [
    {
      text: '教学篇',
      items: [
        { text: '教学篇', link: '/teach/index' },
        { text: '教学篇1', link: '/teach/teach1' },
        { text: '教学篇2', link: '/teach/teach2' }
      ]
    },
    {
      text: '总结篇',
      items: [
        { text: '总结篇', link: '/summarize/index' },
        { text: '总结篇1', link: '/summarize/summarize1' },
        { text: '总结篇2', link: '/summarize/summarize2' }
      ]
    },
    {
      text: '团队篇',
      items: [
        { text: '团队篇', link: '/team/index' },
        { text: '团队篇1', link: '/team/team1' },
        { text: '团队篇2', link: '/team/team2' }
      ]
    }
  ]
}
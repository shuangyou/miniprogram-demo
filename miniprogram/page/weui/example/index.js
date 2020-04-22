Page({
  data: {
    list: [
      {
        id: 'form',
        name: '表单',
        open: false,
        pages: ['cell', 'slideview', 'form', 'uploader']
      },
      {
        id: 'widget',
        name: '基础组件',
        open: false,
        pages: ['article', 'icons', 'badge', 'flex', 'footer', 'gallery', 'grid', 'loadmore', 'loading', 'panel', 'preview']
      },
      {
        id: 'feedback',
        name: '操作反馈',
        open: false,
        pages: ['dialog', 'msg', 'half-screen-dialog', 'actionsheet', 'toptips']
      },
      {
        id: 'nav',
        name: '导航相关',
        open: false,
        pages: ['navigation', 'tabbar']
      },
      {
        id: 'search',
        name: '搜索相关',
        open: false,
        pages: ['searchbar']
      },
      {
        id: 'extended',
        name: '扩展组件',
        open: false,
        pages: ['emoji', 'video-swiper', 'index-list', 'recycle-view', 'sticky', 'tabs', 'barrage', 'select-text', 'wxml-to-canvas']
      }
    ]
  },
  kindToggle(e) {
    const id = e.currentTarget.id; const
      list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  }
})

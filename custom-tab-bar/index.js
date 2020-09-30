// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list:[{
      pagePath: "/pages/home/home",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "首页"
    },{
      pagePath: "/pages/food/food",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "食疗坊"
    },{
      pagePath: "/pages/about/about",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "关于"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      // console.log(e)
      const data = e.currentTarget.dataset
      wx.switchTab({
        url: data.path,
      })
      this.setData({
        selected: data.index
      })
    }
  }
})

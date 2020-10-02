// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodArray: [],
    items: {
      foodlist: {
        title:'xx',
        image:'',
        desc:"xx",
        readNum:2333
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '食疗坊列表渲染中',
    })
    wx.showNavigationBarLoading()
    wx.request({
      url: 'http://iwenwiki.com:3002/api/foods/list',
      data: {
        city: '北京',
        page: 1
      },
       success: res => {
         console.log(res)
         if(res.data.status === 200) {
          const foodArray = res.data.data.result
          this.setData({
            foodArray
          })
         }

       },
        complete: () => {
          wx.hideLoading()
          wx.hideNavigationBarLoading()
        }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
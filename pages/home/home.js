// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,

    list: []
  },
    /**
   * 页面组件的原型方法
   */
  taphref(e){
    let data = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/indexDetail/indexDetail?itemId=' + data.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://iwenwiki.com:3002/api/banner',
      success: res => {
        // console.log(res)
        // this.banners = res.data.data
        this.setData({
          banners: res.data.data
        })
      }
    })
    wx.showLoading({
      title: '列表加载中...',
    })
    wx.request({
      url: 'http://iwenwiki.com:3002/api/indexlist',
      success: res => {
        // console.log(res.data.data)
        this.setData({
          list: res.data.data
        })
      },
      complete: () => {
        wx.hideLoading()
        wx.showToast({
          title: '数据加载完毕',
          icon: 'success'
        })
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
        selected: 0
      })
    }
    wx.pageScrollTo({
      scrollTop: 0
    })
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
    wx.showToast({
      title: '数据加载完毕',
      icon: 'success'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/links/links.js
const requestUrl = require('../../config').requestUrl +"links/index"
const duration = 2000

Page({
  data: {
    list: [
      {
        id: '0',
        bloger: 'test',
        url: 'blogs',
        description: '原始数据',
        type: '测试'
      }
    ]
  },
  makeRequest: function () {
    var self = this

    self.setData({
      loading: true
    })

    wx.request({
      url: requestUrl,
      data: {
      },
      success: function (result) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: duration
        })
        self.setData({
          loading: false,
          list: result.data
        })
        console.log('request success', result)
      },

      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }
})

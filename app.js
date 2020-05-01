//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: (res) => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            },
          });
        }
      },
    });
  },
  globalData: {
    // playerList: [
    //   {
    //     id: 0,
    //     name: "Alan",
    //     pointHistory: [1, 2, -1, -2, +12],
    //     curTotal: 12,
    //   },
    //   {
    //     id: 1,
    //     name: "Qunnie",
    //     pointHistory: [1, 2, -1, -2, +12],
    //     curTotal: 12,
    //   },
    //   {
    //     id: 2,
    //     name: "Gilbert",
    //     pointHistory: [-1, -2, 1, 2, -12],
    //     curTotal: -12,
    //   },
    //   {
    //     id: 3,
    //     name: "Yvonne",
    //     pointHistory: [-1, -2, 1, 2, -12],
    //     curTotal: -12,
    //   },
    // ],
  },
  updateCurTotal() {
    this.globalData.playerList.forEach((player) => {
      player.curTotal = player.pointHistory.reduce((a, b) => a + b, 0);
    });
  },
});

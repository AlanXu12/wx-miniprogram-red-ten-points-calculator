// pages/history/history.js
let app = getApp();
Page({
  data: {
    selectedPlayer: null,
  },
  onLoad: function (options) {
    this.setData({
      selectedPlayer: app.globalData.playerList[options.selectedPlayer],
    });
  },
});

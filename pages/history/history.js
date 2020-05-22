// pages/history/history.js
Page({
  data: {
    selectedPlayer: null,
  },
  onLoad: function (options) {
    const playerList = wx.getStorageSync("playerList");
    this.setData({
      selectedPlayer: playerList[options.selectedPlayer],
    });
  },
});

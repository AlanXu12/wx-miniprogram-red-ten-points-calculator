// pages/twoPointsWin/twoPointsWin.js
let app = getApp();
Page({
  data: {
    point: 2,
    errorDialogShow: false,
    oneButton: [{ text: "确定" }],
    checked: false,
    selectedList: [],
    isDoublePoints: false,
  },
  onLoad: function (options) {
    this.setData({
      playerList: app.globalData.playerList,
    });
  },

  // error pop-up dialog OK button handler
  tapDialogButton(e) {
    // dismiss error pop-up and reset selection
    this.setData({
      errorDialogShow: false,
      checked: false,
      isDoublePoints: false,
    });
    this.onLoad();
  },

  // record the selection
  twoPointsWinSelectHandler(e) {
    // check selection count
    if (e.detail.value.length > 2) {
      // raise error pop-up dialog
      this.setData({
        errorDialogShow: true,
      });
    } else {
      this.setData({
        selectedList: e.detail.value,
      });
    }
    console.log("current selectedList:", this.data.selectedList);
  },

  // double points checkbox select handler
  doublePointsHandler(e) {
    this.setData({
      isDoublePoints: !this.data.isDoublePoints,
    });
  },

  // record the result of this round of game
  twoPointsWinConfirmHandler(e) {
    // check if the count of selection is valid
    if (this.data.selectedList.length !== 2) {
      // raise error pop-up dialog
      this.setData({
        errorDialogShow: true,
      });
    } else {
      // update players' point histories
      app.globalData.playerList.forEach((player) => {
        // check if the current player is selected
        console.log(
          "selctedList:",
          this.data.selectedList,
          "player.id:",
          player.id
        );

        if (this.data.selectedList.includes(player.id.toString())) {
          player.pointHistory.push(
            this.data.point * (this.data.isDoublePoints ? 2 : 1)
          );
        } else {
          player.pointHistory.push(
            this.data.point * (this.data.isDoublePoints ? -2 : -1)
          );
        }
      });
      // update players' current total points
      app.updateCurTotal();
      // navigate to game page (using reLaunch b/c we want to close all the other pages to avoid invalid backward operation)
      wx.reLaunch({
        url: "../game/game",
      });

      console.log("app.globalData.playerList:", app.globalData.playerList);
    }
  },
});

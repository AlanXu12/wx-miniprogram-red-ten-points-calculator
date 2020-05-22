let app = getApp();
Page({
  data: {
    errorDialogShow: false,
    oneButton: [{ text: "确定" }],
    defaultContent: null,
  },
  // error pop-up dialog OK button handler
  tapDialogButton(e) {
    // dismiss error pop-up and reset selection
    this.setData({
      errorDialogShow: false,
    });
  },

  // start the game with given player names
  startGameHandler(e) {
    // check if every player has a unique name
    const playerNames = e.detail.value;
    const playerNamesList = Object.values(playerNames);
    if (
      playerNames["player0"] === "" ||
      playerNames["player1"] === "" ||
      playerNames["player2"] === "" ||
      playerNames["player3"] === "" ||
      playerNamesList.length !== new Set(playerNamesList).size
    ) {
      // raise error pop-up dialog
      this.setData({
        errorDialogShow: true,
      });
      return;
    }
    // initialize player list
    let playerList = [];
    let id = 0;
    for (const key in playerNames) {
      playerList.push({
        id: id,
        name: playerNames[key],
        pointHistory: [],
        curTotal: 0,
      });
      id++;
    }
    // app.globalData.playerList = playerList;
    wx.setStorageSync("playerList", playerList);
    // navigate to game page
    wx.redirectTo({
      url: "../game/game",
    });
  },
});

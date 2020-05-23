# wx-miniprogram-red-ten-points-calculator

__[中文版文档](#cn)__ / __[English Version Documentation](#en)__

<a name="cn" />

### 文档

这是一款基于微信小程序的计分器。用于线下“红十”游戏的计分，游戏规则基于[嘉兴红十](https://baike.baidu.com/item/嘉兴红十)。

使用本小程序，请使用微信扫描下方二维码:

<img src="https://github.com/AlanXu12/pic-repo/blob/master/red_ten_points_calculator_qr_code.jpg?raw=true" style="zoom:150%;" />

#### 历史版本:

##### V1.0.0:

- 玩家命名

- 固定加/减分规则:

  - 一三名次玩家获胜: 一三名次玩家各 +1分 剩余玩家各 -1分
  - 一二名次玩家获胜: 一二名次玩家各 +2分 剩余玩家各 +1分
  - 双红十玩家获胜: 双红十玩家 +12分 剩余玩家各 -4分
  - 双红十玩家输: 双红十玩家 -12分 剩余玩家各 +4分

  _*注: 以上所有情况如有开局亮牌，所有加/减分翻倍_

- 加/减分历史

- 重新开始游戏

- 使用本地储存游戏数据代替缓存 以解决重启小程序后数据丢失问题



<a name="en" />

### Documentation

This is a points calculator based on Wechat Mini Program for the card game called "Red Ten" using this [rule](https://baike.baidu.com/item/嘉兴红十) as the basis.

For uisng this Mini Program, please scan the QR Code below (required to use the scanner in [Wechat](https://www.wechat.com/en/)):

<img src="https://github.com/AlanXu12/pic-repo/blob/master/red_ten_points_calculator_qr_code.jpg?raw=true" style="zoom:150%;" />

#### Release History:

##### V1.0.0:

 - Customizable player names

 - Fixed points for each winning/losing pattern:

    - Position1 and position3 win:  the winners each +1 Point
    - Position1 and position2 win: the winners each +2 Points
    - Double red ten win: the winner +12 Points
    - Double red ten lose: the loser -12 Points

   _(The rest of the player(s) will add/remove the corresponding points equally)_

   _*Note: Showing identity at the beginning of the game will double the point(s)_

 - Ability to show points history

 - Ability to restart the game

 - Using local storage instead of temperory storage to avoid game data losing after reboot


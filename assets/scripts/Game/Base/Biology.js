/**
 * Created by Administrator on 2017/7/10.
 */

var BaseComponent = require("BaseComponent");
var IQLevel = require("IQLevel");

cc.Class({
    extends: BaseComponent,

    properties: {
        HP:    {default: 0, tooltip: "生命值"},                                // 生命值
        ATK:   {default: 0, tooltip: "攻击力"},                                // 攻击力
        speed: {default: 1, min: 1,  tooltip: "速度"},                         // 速度
        IQ:    {default: IQLevel.ZERO, type: IQLevel, tooltip: "智力"}         // 智力
    },

    ctor: function () {

    },

    onLoad: function () {

    },

    walk: function () {

    },

    run: function () {

    },
    
    die: function () {
        
    }
});
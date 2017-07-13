/**
 * Created by Administrator on 2017/7/11.
 */

var BaseMonster = require("BaseMonster");

var ZombieA100 = cc.Class({
    extends: BaseMonster,

    properties: {},

    onLoad: function () {
        this.node.setNodePool = function () {
            console.log("ZombieA100 setNodePool >>>>>>>>>>>");
        };
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.die.bind(this));
    },

    update: function (dt) {

    },

    setNodePool: function (nodePool) {

    },

    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        this.die();
    },

    die: function () {
        console.log("ZombieA100 die >>>>>>>>>>>");
        this.node.stopAllActions();
        this.creatorFactory.put(this.node);
    }
});
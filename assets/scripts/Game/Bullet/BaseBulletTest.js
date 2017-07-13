/**
 * Created by Administrator on 2017/7/12.
 */
var BaseBullet = require("BaseBullet");

cc.Class({
    extends: BaseBullet,

    properties: {},


    onLoad: function () {
        var manager = cc.director.getCollisionManager();

        manager.enabled = true;
        // manager.enabledDebugDraw = true;
    },

    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        this.node.stopAllActions();
        this.creatorFactory.put(this.node);
    },

    onCollisionExit: function (other, self) {
        console.log('on collision exit');
    }
});
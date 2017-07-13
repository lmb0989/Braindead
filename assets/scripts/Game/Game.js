/**
 * Created by Administrator on 2017/7/12.
 */

var MonsterFactory = require("MonsterFactory");

function randomNToM(min , max) {
    return min + Math.random() * (max - min);
}

cc.Class({
    extends: cc.Component,

    properties: {
        monsterPrefab: [cc.Prefab],
    },

    onLoad: function () {
        var self = this;
        var posArray = [-247, -80, 80, 240];
        var prefab = self.monsterPrefab[0];

        this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            for (var k in posArray) {
                var count = randomNToM(10, 20);
                for (var j = 0; j < count; j ++) {
                    var posY = parseInt(randomNToM(-300, 500));

                    var monster = MonsterFactory.createMonster(prefab);
                    monster.setPosition(posArray[k], posY);
                    self.node.addChild(monster);
                }
            }
        })
    },

    update: function (dt) {

    },

    // 销毁时
    onDestroy: function () {
        // TODO
        // MonsterFactory
        // BulletFactory
    }
});
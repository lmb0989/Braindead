/**
 * Created by Administrator on 2017/7/12.
 */
var BaseWeapon = require("BaseWeapon");
var BulletFactory = require("BulletFactory");

cc.Class({
    extends: BaseWeapon,

    properties: {
        launchInterval: {default: 1, min: 0, displayName: "发射间隔"},
        bulletPrefab: cc.Prefab,
        gameRoot: cc.Node
    },

    onLoad: function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.beginAttack.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_END, this.endAttack.bind(this));
    },

    launch: function () {
        console.log("launch >>>>> ");

        var bullet = BulletFactory.createBullet(this.bulletPrefab);
        bullet.setAnchorPoint(0.5, 0);
        bullet.setPosition(this.node.x, this.node.y + this.node.height / 2);
        this.gameRoot.addChild(bullet);

        bullet.runAction(cc.moveBy(2, 0, 1136));
    },

    beginAttack: function (event) {
        console.log("beginAttack >>> launchInterval: " + this.launchInterval);
        event.stopPropagation();
        this.node.setScale(1.05);
        this.launch();
        this.schedule(this.launch, this.launchInterval);
    },

    endAttack: function () {
        this.node.setScale(1);
        this.unschedule(this.launch);
    },
});
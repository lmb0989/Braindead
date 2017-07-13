/**
 * Created by Administrator on 2017/7/12.
 */
var Factory = require("Factory");

var instance = null;

var BulletFactory = cc.Class({
    extends: Factory,

    statics: {
        createBullet: function (prefab) {
            if (instance === null) {
                instance = new BulletFactory();
            }
            return instance._createBullet(prefab);
        },

        destroy: function () {
            if (!instance) return;
            instance.destroyFactory();
        }
    },

    getFactoryName: function () {
        return "BulletFactory";
    },

    _createBullet: function (prefab) {
        return this.create(prefab);
    }
});
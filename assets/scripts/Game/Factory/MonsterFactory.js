/**
 * Created by Administrator on 2017/7/12.
 */
var Factory = require("Factory");

var instance = null;

var MonsterFactory = cc.Class({
    extends: Factory,

    statics: {
        createMonster: function (prefab) {
            if (instance === null) {
                instance = new MonsterFactory();
            }
            return instance._createMonster(prefab);
        },

        destroy: function () {
            if (!instance) return;
            instance.destroyFactory();
        }
    },

    getFactoryName: function () {
        return "MonsterFactory";
    },

    _createMonster: function (prefab) {
        return this.create(prefab);
    }
});
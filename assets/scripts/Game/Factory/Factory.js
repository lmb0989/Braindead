/**
 * Created by Administrator on 2017/7/13.
 */

const initSize = 10;        // 每个缓冲池初始大小

var Factory = cc.Class({
    properties: {
        prefabList: [cc.Prefab],
        poolList:   [cc.NodePool]
    },

    getFactoryName: function () {
        return "Factory";
    },

    initPool: function (nodePool, prefab) {
        for (var i = 0; i < initSize; i ++) {
            var node = cc.instantiate(prefab);

            if (!node) continue;
            nodePool.put(node);
        }
    },

    getPoolByPrefab: function (prefab) {
        var index = -1;
        for (var i in this.prefabList) {
            if (this.prefabList[i] === prefab) {
                index = i;
                break;
            }
        }

        if (index < 0 || !this.poolList[index]) {
            var pool = new cc.NodePool("BaseComponent");
            this.initPool(pool, prefab);

            this.prefabList.push(prefab);
            this.poolList.push(pool);
            return pool;
        }
        return this.poolList[index];
    },

    create: function (prefab) {
        var nodePool = this.getPoolByPrefab(prefab);
        console.log(this.getFactoryName() + " >>> this.prefabList.len: " + this.prefabList.length + "  this.poolList.len: " + this.poolList.length);
        console.log("prefab ---> pool: size: " + nodePool.size());

        if (nodePool.size() <= 0) {
            var node = cc.instantiate(prefab);
            nodePool.put(node);
        }
        return nodePool.get(nodePool);
    },

    destroyFactory: function () {
        for (k in this.poolList) {
            this.poolList[k].clear();
        }
        this.prefabList = [];
        this.poolList = [];
    }
});
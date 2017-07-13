
cc.Class({
    extends: cc.Component,

    properties: {
        weight : {default: 0, tooltip: "重量"},     // 重量
        pool:    {default: null, visible: false}
    },

    reuse: function (pool) {
        this.creatorFactory = pool;
    },
    
    unuse: function () {
    }
});

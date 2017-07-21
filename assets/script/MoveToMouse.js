cc.Class({
    extends: cc.Component,

    properties: {
        items: [cc.Node],
        ratio: [cc.Float],
        itemOffsets:[cc.Float],      
    },

    // use this for initialization
    onLoad: function () {
        this.itemOffset1 = 100.0;
        this.ratio1 = 10.0;
        var canvas = this.node.getComponent(cc.Canvas);
        // 使用枚举类型来注册
        this.node.on(cc.Node.EventType.MOUSE_MOVE, function (e) {
            console.log('Mouse down'+(e.getLocationX()-canvas.designResolution.width/this.ratio1));

            for(var item in this.items){
                console.log((this.items[item]).x );
                
                this.items[item].x = (e.getLocationX()-canvas.designResolution.width/2 )/this.ratio[item] +this.itemOffsets[item] ;
            }
        }, this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

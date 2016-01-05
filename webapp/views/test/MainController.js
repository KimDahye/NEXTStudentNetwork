

var MainController = function(htOption){
    this.options = htOption || {};
    this.init(htOption);

};

MainController.prototype = {
    init : function(){
        this._initVars();
        this._startApplication();
    },

    _startApplication : function(){
        var aInitData = this.options.aData;
        if(!!aInitData){
            var aShuffled = this._shuffleData(aInitData);
            this.draw(aShuffled);
        }
    },

    _initVars : function(){
        this._elRoot = document.querySelector("#wrapper");
        this._sItemTemplate = document.querySelector("#item_template").innerHTML;
        this._elItemWrapper = this._elRoot.querySelector("._item_wrapper");
    },

    draw : function(aData){
        var sTmpl = this._sItemTemplate;
        var sItems = "";
        aData.forEach(function(data){
            var item = Mustache.render(sTmpl, data);
            sItems += item;
        });
        this._elItemWrapper.innerHTML = sItems;
    },

    _shuffleData : function(aData){
        var n = aData.length;

        var shuffled = [];
        for(var i=0 ; i<n ; i++){
            var target = parseInt(Math.random() * aData.length, 10);
            shuffled.push(aData.splice(target, 1)[0]);
        }

        return shuffled;
    }
};


var PersonalProfile = function(htOption){
    this.options = htOption || {};
    this.init();
};


PersonalProfile.prototype = {

    EMPTY_PHOTO : "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",

    init : function(){
        this._initVars();
        this._attachEvent();
        this._startApplication();
    },

    _startApplication : function(){
        var data = this.options.htData;
        if(!!data){
            this.fillForm(data);
        }
    },

    _initVars : function(){
        this._elAside = document.querySelector("aside");

        this._elMainForm = document.querySelector(".main form");
        this._elPopupForm = document.querySelector(".popup form");
        this._elProfilePhoto = this._elMainForm.querySelector(".photo_set");
    },

    _attachEvent : function(e){
        this._elAside.addEventListener("click", this._onClickAside, false);
    },

    _onClickAside : function(e){
        var type = e.target.getAttribute("data-type");
        console.log(type);
        var doms = document.querySelectorAll(".data");

        for(var i=0 ; i< doms.length ; i++){
            var sDisplay = "none";

            if(doms[i].className.indexOf(type) > -1){
                sDisplay = "block";
            }
            doms[i].style.display = sDisplay;
        }
    },

    fillForm : function(htData){
        this._elMainForm.declaration.value = htData.declaration || "";
        this._elProfilePhoto.querySelector("img").src = htData.photoUrl || this.EMPTY_PHOTO;

        this._elPopupForm.youtubeId.value = htData.youtubeId || "";
        this._elPopupForm.markdownText.value = htData.markdownText || "";
    }
};


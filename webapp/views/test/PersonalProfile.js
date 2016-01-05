

var PersonalProfile = function(htOption){
    this.options = htOption || {};
    this.init();
};


PersonalProfile.prototype = {

    EMPTY_PHOTO : "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",

    init : function(){
        this._initVars();
        this._startApplication();
    },

    _startApplication : function(){
        var data = this.options.htData;
        if(!!data){
            this.fillForm(data);
        }
    },

    _initVars : function(){
        this._elMainForm = document.querySelector("#main_data form");
        this._elPopupForm = document.querySelector("#popup_data form");
        this._elProfilePhoto = this._elMainForm.querySelector(".photo_set");
    },

    fillForm : function(htData){
        this._elMainForm.declaration.value = htData.declaration || "";
        this._elProfilePhoto.querySelector("img").src = htData.photoUrl || this.EMPTY_PHOTO;

        this._elPopupForm.youtubeId.value = htData.youtubeId || "";
        this._elPopupForm.markdownText.value = htData.markdownText || "";
    }
};


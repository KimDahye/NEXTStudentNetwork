use nextin;

var profileData = {
      "photourl": "./peoples/sample.png",
      "moto": "즐겁게 살자",
      "markdown": "###여기에 markdown 형식의 프로필을 넣어 주세요.",
      "movieurl": "youtube url here"
};

var data = [{confirm : true, class : "1", name : "넥스트", password : "$2a$08$NDgrx.08fBmsJZHIVTt6E.gH.IMVag.xUsl8dy5JIMauzgiJweKCS", email : "admin@nextin.me", profile: profileData},
{confirm : false, class : "1", name : "최해커", password : "$2a$08$NDgrx.08fBmsJZHIVTt6E.gH.IMVag.xUsl8dy5JIMauzgiJweKCS", email : "badman@nextin.me", profile: profileData},
{confirm : false, class : "9", name : "정주리", password : "$2a$08$NDgrx.08fBmsJZHIVTt6E.gH.IMVag.xUsl8dy5JIMauzgiJweKCS", email : "jjuri@nextin.me", profile: profileData}];

//if you want to remove all items in table, uncomment this
db.users.remove({});

var bulk = db.users.initializeUnorderedBulkOp();
for (var i = 0; i < data.length; i++) {
	bulk.insert(data[i]);
}

bulk.execute();
db.User.find();

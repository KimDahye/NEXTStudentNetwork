use nextin;

var profileData = {
      "photourl": "./peoples/sample.png",
      "moto": "즐겁게 살자",
      "markdown": "###여기에 markdown 형식의 프로필을 넣어 주세요.",
      "movieurl": "youtube url here"
};

var data = [{confirm : false, class : "1", name : "넥스트", password : "$2a$08$NDgrx.08fBmsJZHIVTt6E.gH.IMVag.xUsl8dy5JIMauzgiJweKCS", email : "admin@nextin.me", profile: profileData},
{confirm : false, class : "1", name : "최해커", password : "$2a$08$NDgrx.08fBmsJZHIVTt6E.gH.IMVag.xUsl8dy5JIMauzgiJweKCS", email : "badman@nextin.me", profile: profileData},
{confirm : true, class : "9", name : "정주리", password : "$2a$08$NDgrx.08fBmsJZHIVTt6E.gH.IMVag.xUsl8dy5JIMauzgiJweKCS", email : "jjuri@nextin.me", profile: profileData},
{confirm : true, class : "2", name : "김개발", password : "$2a$08$NDgrx.08fBmsJZHIVTt6E.gH.IMVag.xUsl8dy5JIMauzgiJweKCS", email : "devone@nextin.me", profile: profileData}];


//if you want to remove all items in table, uncomment this
db.users.remove({});
db.users.insert(data);
db.users.find();


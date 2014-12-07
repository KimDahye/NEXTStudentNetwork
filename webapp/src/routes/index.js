var router = require('express').Router();

// Router starts '/'

router.get('/', function(req, res) {
  res.status(200).render('main.html', {"data":[
  	{"nameKor":"김다혜",
  	"nameEng":"KimDaHye",
  	"majorKor":"웹 서버 전공",
  	"majorEng":"Web server track",
  	"imgName":"http://placehold.it/200x200",
  	"title":"나무처럼 살고픈 김다혜",
  	"vision":"소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.",
  	"movieUrl":"Kd8LDnW9t-k"},
  	{"nameKor":"정희수",
  	"nameEng":"Jung Heesu",
  	"majorKor":"웹 UI 전공",
  	"majorEng":"Web UI track",
  	"imgName":"http://placehold.it/200x200",
  	"title":"테스트용 정희수",
  	"vision":"뉸뉴냔냐",
  	"movieUrl":"tHiUZfgf1WQ"}]});
});

module.exports = router;

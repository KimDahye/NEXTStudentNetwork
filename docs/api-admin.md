# admin page
##profile
### GET /profile
* (참고. 로그인한 사용자에 한해서 보여지는 페이지이다. 로그인하지 않은 사용자는 /login으로 redirect 된다.)
* 로그인한 유저가 해당 API를 요청하면, 프로필을 수정 페이지를 return 해준다.
* 응답형식: inner script 태그 안에 로그인한 유저 데이터를 json형식으로 갖고 있는, 프로필 수정 페이지 html

### PUT /profile
* 유저의 이미지 url(photourl)과 비전선언문(moto)를 업데이트한다. 
* body
  * photourl = "이미지_URL"
  * moto ="비전선언문"
* 응답형식: json (성공할 경우/ 실패할 경우)
```json
{
  "status": "success", 
  "message": ""
} 

{
  "status": "fail", 
  "message": "실패했을 경우 에러 메세지"
} 
```
* 성공, 실패한 user의 email 혹은 id (user를 식별할 수 있는 무언가)를 내려줘야하지 않을까? 이 부분은 아직 잘 모르겠다. 

### PUT /detail
* 유저의 마크다운 소개문(markdown)과 유투브 링크(movieurl)를 업데이트한다. 
* body
  * markdown = "#마크다운 문법의 소개문"
  * movierul ="youtube.com/blabla"
* 응답형식: PUT /profile 과 동일


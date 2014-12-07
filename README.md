# NEXT Student Network 페이지 만들기 프로젝트!!!

## 목적
* 우리가 어떤 비전을 가진 사람들인지 세상에 알린다.

## 어떻게?
* motivation page: http://web.wellesley.edu/thenetwork/#
일단 이 페이지를 [거의 똑같이 따라해보는 것](http://125.209.198.141/)인데요... 후버링 했을 때의 내용이 조금 다른 게 포인트라면 포인트입니다.

* 학생들과 교수님, 또 동참하시는 선생님들의 사진을 모티베이션 페이지 처럼 찍는다.

* 한 사람의 사진 위에 마우스가 올라가면, 짧은 소개글(타이틀, 출신, 비전선언서)을 보여준다.
ex) 나무처럼 살고픈 김다혜 (15자 이내로)/ 
	KAIST 수리과학과 졸업/
	소프트웨어를 통해, 공동체의 가치를 이루고 싶습니다. (30자 이내로)

* 여기서 더 나가자면, 얼굴을 클릭했을 때 짧은 인터뷰 영상을 보여준다.  

## 자원 받습니다
* 사진 찍으실 분, 영상찍으실 분 자원 받습니다.
* 여러분들 소개글을 제가 판 github에 올려주세요.

# Welcome to developers group
## Developers
| Role             | Contributors           | Description           |
|:----------------:| ---------------------- |:--------------------- |
| Product manager  | KimDahye               |                       |
| Design           | Shinyoung Park         | Main logo design      |
| Web engineer     | helloheesu             |                       |
| Android engineer | Jaebong Lee            |                       |
| CI, server infra | cocagolau              | Jenkins, ubuntu 12.04 |
| Data parsing     | cocagolau              | python                |
| Database         | reaperes, cocagolau    | mysql                 |
| Server engineer  | reaperes               | node.js server        |

개발에 참여 하실 분들은 **다혜에게 github 계정을 알려주시고**, **developers group 대화방에
초대해 달라고 요청**하시면 됩니다. 누구든 환영합니다!!

## APIs
* [GET /students?num=[Number]] (#get-student-profiles)

## Error response (status code 400)
		{
			'errors': [{
					'code': 10,
					'message': 'Error text here.'
				},
				...
			]
		}

| Code | Text                                | Description                                                           |
|:----:| ----------------------------------- | --------------------------------------------------------------------- |
| 10   | Required parameter is not defined   | Should define required parameters                                     |
| 20   | Parameter is invalid                | Should correct parameter name                                         |

### Get student profiles

		Request
		GET /students?num=[Number]

		Response
		{
			data: [{
				(nameKor, nameEng, majorKor, majorEng, imgName, title, vision, movieUrl)
			}]
		}
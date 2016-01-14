var constraints = {
  email: {
    presence: {
      message: "이메일을 입력해주세요."
    },
    email:{
      message: "잘못된 이메일 형식입니다."
    }
  },
  name: {
      presence: {
          message: "이름을 입력해주세요"
      },
      format: {
          pattern: "([가-힣]){2,10}",
          message: "잘못된 한글 이름 입니다."
      }
  },
  password: {
    presence: {
      message: "패스워드를 입력해주세요."
    },
    length: {
      minimum: 6,
      message: "잘못된 패스워드 형식입니다."
    }
  },
  confirmPassword: {
    equality: {
        attribute: "password",
        message: "두 패스워드가 같지 않습니다."
    }
  },
  englishName: {
      presence: false,
      format: {
          pattern: "([a-zA-Z ]){1,}",
          message: "영문 이름은 영어로만 작성해주십시요"
      }
  },
  "class": {
      presence: false,
      format: {
          pattern: "[1-9]",
          message: "기수는 숫자로만 입력해주십시요.\n예) 1기인 경우 '1'"
      }
  }
};

function validateForm(){
  var form = document.forms["signup"];
  
  var result = validate({
    "email": form["email"].value,
    "name": form["name"].value,
    "password": form["password"].value,
    "confirmPassword": form["confirm_password"].value,
    "englishName": form["english_name"].value,
    "class": form["class"].value
  }, constraints, {fullMessages: false});
  
  if(!!result){
    // alert only first error message.
    alert(result[Object.keys(result)[0]][0]);
    return false;
  } else {
    return true;
  }
}
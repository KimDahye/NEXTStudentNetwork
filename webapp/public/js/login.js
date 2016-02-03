var constraints = {
  email: {
    presence: {
      message: "이메일을 입력해주세요."
    },
    email:{
      message: "잘못된 이메일 형식입니다."
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
  }
};

function validateForm(){
  var form = document.forms["login"];
  var email = form["email"].value;
  var password = form["password"].value;
  
  var result = validate({
    email: email,
    password: password
  }, constraints, {fullMessages: false});
  
  if(!!result){
    // alert only first error message.
    alert(result[Object.keys(result)[0]][0]);
    return false;
  } else {
    return true;
  }
}
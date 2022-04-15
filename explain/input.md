# Input
## Email
값이 변경될 때 마다 isEmail함수를 통해 이메일 형식에 맞는지 체크합니다.
값이 맞으면 체크 표시를 OK로, 형식에 맞지 않으면 OFF를 유지합니다.

이메일 input창에 focus 유무 상태를 관리하기 위해  emailFocus 상태를 만들어 사용합니다.

만약, input창에서 focus가 빠지게되었을 때 이메일 형식에 맞지 않으면 input창 하단에 Invalid E-mail address. 경고 메세지를 보여준다. 이때, 이메일 input이 빈 경우 즉 “”인 경우에는 해당하지 않도록 email !==“” 조건을 추가해줍니다.

## Password
기본적인 구조와 형식은 Email 그대로 진행됩니다.
대신 검증 조건들이 모두 빠지고 input의 type속성만 변경해주는 방식으로 진행합니다.

passwordVisible 상태를 만들어 On/ Off의 유무를 관리하고 해당 상태 값의 따라 input의 타입을 “password” 또는 “text”로 설정합니다.
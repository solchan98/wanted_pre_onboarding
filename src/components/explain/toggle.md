# Toggle

토글 버튼은 기본적으로 다음의 3개의 요소를 작성하여 구성하였습니다.
- 전체적인 백보드를 구성하는 div요소 - Backboard
- 선택된 아이템으로 이동하는 타원 div요소 - Circle
- 선택이 가능한 아이템 div요소 - Item

### 포지션 및 구성 전략
구성인 기본적으로 전체 타원을 구성하는 Backboard를 두고 해당 요소 안에서 추가됩니다.

Backboard위에는 바로 Item 요소 2개가 display: flex로 나란히 자리합니다.

선택된 Item으로 이동하는 Circle은 position: apsolute를 통해 left속성으로 이동됩니다.
left는 선택된 Item의 index를 통해 분기하여 설정됩니다.



### 선택된 아이템으로 이동하는 Circle
위에서 언급한대로 Circle의 이동은 Backboard를 기준으로 Item의 index에 따라 left값을 계산하여 설정됩니다.

토글 버튼이므로 Item이 단 2개만 존재하기 때문에 0과 1을 통해 분기하여 left값을 계산하도록 작성하였습니다.

Circle의 위치가 이동하는 모습을 보이기 위해 transition속성을 .2s로 주었습니다.

### 선택된 아이템 opacity 설정
선택된 아이템이 현재 선택된 아이템임을 좀 더 부각시키기 위하여 opacity속성을 사용하였습니다.
선택된 아이템의 경우 100%, 미선택 아이템의 경우 30%를 주어 두 아이템의 시각적 차이를 추가로 부여하였습니다.

styled-components를 통해 현재 아이템의 keys와 현재 선택된 아이템의 상태(clicked)의 값이 같은지 비교를 통해 opacity값을 부여하도록 구현하였습니다.


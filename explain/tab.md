# Tab

탭 컴포넌트는 비교적 어렵지 않게 구성할 수 있었습니다.

총 4개의 요소를 통해 구성하였습니다.
- 전체적인 백보드를 구성하는 요소 - TabBar
- 선택 가능한 아이템들을 갖는 요소 - Category
- Category에 포함되는 아이템 요소 - Item
- 현재 선택된 아이템의 위치를 알수있는 컬러바 요소 - SlideBar

총 2개의 상태를 통해 구현하여습니다.
- slide
    -  slideBar의 위치를 margin-left를 주어 이동하도록 구현하였기에 slide 상태는 이곳의 margin-left값에 해당됩니다.
    - Toggle컴포넌트를 작성할 때는 position을 absolute로 주어 left값을 통해 원의 이동을 구현하였으나 이번에는 또 다른 방식은 margin을 주어 구현하였습니다.
- select
    - select 상태는 선택된 아이템과 선택되지 않은 아이템을 시각적으로 추가루 구분하기 위해 글씨의 opacity를 설정하는데 사용됩니다.
    - select은 item의 index가 저장되며 현재 select값과 Item의 index값이 같으면 즉, 선택된 경우라면 opacity가 100%, 선택된 경우라 아니라면 30%로 부여하였습니다.

추가로 동적으로 크기를 설정할 수 있도록 컴포넌트의 간단한 속성 값으로 width, height, fontSize를 받도록 하였으며 기본값이 설정되어 있습니다.
그리고 다음의 형식으로 아이템을 입력받아 탭에 적용합니다.
```json
[
    { id: 0, name: "기린"},
    { id: 1, name: "사슴"},
    { id: 2, name: "고양이"},
]
```
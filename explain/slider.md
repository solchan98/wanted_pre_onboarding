# Slider

슬라이더는 마우스의 이동에따라 실시간으로 반영이 필요합니다. 따라서 마우스의 이벤트에 따른 변화가 렌더링되도록 구현하였습니다.

요소의 구성
- 현재 width의 퍼센트를 보여주는 요소 - Status
- 전체 백 바를 구성하는 요소 - Bar
- 마우스의 움직임에 따라 Bar위로 크기가 조절되는 요소 - ColorBar
- 마우스의 움직임에 따라 Bar위에서 이동하는 요소 - MoveCircle
- Bar의 위에 고정으로 놓아져 있는 원 요소 - Circle
- 고정된 값의 버튼들이 놓아져있는 공간 요소 - ConstantBar
- 클릭 시, 고정된 값으로 width를 변경하는 버튼 요소 - ConstantBtn

우선, 크게 현재 width의 수치를 보여주는 부분과 실제 버튼을 통한 슬라이드가 동작하는 부분 그리고 고정된 값을 갖는 버튼을 클릭하면 width를 변경하는 버튼 이렇게 3개의 부분으로 구성하였습니다.

첫번째 부분은 단순히 텍스트를 보여주는 공간으로 간단하게 구성하였습니다.

두번째 부분은 제일 많은 요소가 사용되는 부분입니다. 우선, 젤 먼저 Bar요소가 자리합니다. 이후 Bar위로 ColorBar가 position을 absolute로 색을 가지어 자리합니다.
Bar요소의 아무곳이나 클릭하는 경우 해당 위치로 curWidth가 계산되어 변경되고 ColorBar 및 MoveCircle의 위치 또한 이동합니다.
ColorBar는 curWidth라는 상태에 의해 길이가 동적으로 조절됩니다. ColorBar와 같은 뎁스로 Circle가 존재합니다. Bar의 display가 flex, justify-content가 space-between이기 때문에 5개의 Circle가 Bar안에서 일정한 간격을 두어 배치됩니다.
각 Circle는 curWidth에 따라 동적으로 색상이 변경됩니다.
Circle과 Bar는 모두 z-index속성을 갖는데 Circle가 Bar보다 앞에 있어야 하기 때문에 Bar는 1, Circle는 2의 값을 부여하였습니다.
각 Circle는 자신의 가로 위치값을 index로 가지며 클릭 이벤트로 curWidth를 index로 변경하는 일을 합니다.

MoveCircle는 Circle과 같은 뎁스로 위치하며 총 4개의 마우스 이벤트를 가지고 있습니다. 
기본적으로 moving이라는 상태를 통해 MoveCircle의 이동을 통제합니다.
4개의 각 마우스 이벤트 핸들러는 MoveCircle의 상태에 따라 동적으로 MoveCircle의 상태와 위치 및 curWidth를 변경합니다.

마지막으로 세번째 부분인 Constant부분은 고정된 값으로 curWidth를 변경할 수 있는 버튼들이 배치되어있는 부분입니다.

이 부분은 Bar와 속성이 매우 비슷한 요소가 기본 뼈대로 자리합니다.
이후, Circle과 비슷한 방식으로 고정된 값을 갖는 curWidth를 변경할 수 있는 버튼들이 배치됩니다.
이 버튼들은 ConstantBar의 display가 flex, justify-content가 space-between에 의해 위 Circlr과 똑같이 배치됩니다.
하지만 각 버튼들의 첫번째 및 마지막 요소는 각각 ConstantBar의 시작점 및 끝점에 붙어 있고, 나머지 버튼들은 해당 Circle의 가운데 위치에 맞혀있습니다.
이 부분을 어떻게 정확이 매치할까 고민하다가 원과 버튼이 총 5개로 고정된다는 가정하에 2, 4번째의 버튼의 margin을 수정하여 위치를 이동하기로 하였습니다.
그 결과 전체 width를 변경하여도 일정한 위치를 유지하는 것을 확인하였습니다.

최종적으로 간단하게 컴포넌트의 크기를 동적으로 적용할 수 있도록 width와 height를 받을수 있도록 구현하였습니다.
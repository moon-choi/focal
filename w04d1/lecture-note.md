Tinyapp: mulitple page application

# Tweeter: single page application

- one landing page
- there is no page refresh.

height: 100vh
flex-wrap: nowrap
flex-flow:column nowrap
order: 1, 2
flex-grow: 1
flex-shrink
flex-basis: auto; <-width 나눠줌.. 스크롤에 상관없이.

align-self: 아이템 하나만 특별히 매치.

padding: 컨텐트 안의 여백
margin: 컨텐트 밖의 여백

border-width
border-style
border-color

div {
display: inline-block
}

span {
display: block;
}

inline: 물건 그 자체
inline-block: 상자인데 한 줄에 여러개 진열
block: 상자인데 한줄에 하나만 진열

position 기본은 static.
position: relative; <- 원래 있어야 돼는 자리에서 상대적 조정
position: absolute < 현재 아이템에서 가장 가까운 박스 안에서 움직임.
position: fixed <- 상자에서 벗어남. 페이지 상에서 움직임.
position: sticky. <-스크롤 할 때 붙어있음.

rem: 어떤페이지에서도 크기가 고정돼있음. relative to ROOT element
em: 제일 상위요소에서 썼을때와 헤더안에서 썼을 때 크기가 다름. relative to PARENT element.

div 는 그냥 일차원 선.
div 는 display:block 속성을 내장함. (줄 전체 다 차지)
float:left 하면 가로로 꽉찬 박스 만들수있음.
float: right 는 우측정렬
float 쓰면 붕뜨기때문에 그 다음 요소가 겹쳐짐.

# 가로정렬법 1.

left {
float: left
}
right {
float: left
}
footer {
clear: both
}
--

# 가로정렬법 2.

left {
display: inline-block
}
right {
display: inline-block
}

# 가운데정렬

display:block (생략가능) //가로행을 전부 차지하게 해주세요.
margin-left: auto
margin-right: auto

# layout 만들 때 container(wrapper)만들고 시작하는게 좋음.

display: block - 가로 한행 다차지 - 글과 안섞임
display: inline-block - 내 크기만큼 차지 - 글과섞임 (대신 박스사이 공백제거가 귀찮음, 안에 글씨쓰면 이상해짐/ vertical-align:top 으로 해결.)
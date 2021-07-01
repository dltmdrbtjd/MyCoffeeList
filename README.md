# MyCoffeeList
- 주소 : http://seunggyulee.shop/
## 프로젝트명 : 나의 커피 목록
- 개요 : 평상시 내가 좋아하던 카페에서 파는 음료들을 음료이름,어떤음료인지,추천하는카페 를 작성하여 원할때 볼 수 있는 프로젝트
- 구성기능 : 원하는 음료에대한 작성, 삭제, 수정 ( 기본적이 CRUD 기능 ) 등이 가능하도록 구성하였다.
- 사용기술 : React , JavaScript
- 상태관리 : Redux
- DB : firebase ( 서버리스로 제작 )
- 기본 페이지 구성 : 게시글 목록을 보는 기본 페이지 , 작성하기 페이지, 상세보기 페이지, 수정하기 페이지

## 기본 컴포넌트 구상
<img width="700" alt="컴포넌트기본구상" src="https://user-images.githubusercontent.com/59644518/124142116-e8da5500-dac4-11eb-8c49-c2bdbab52b8e.jpg">


## 페이지 구성
| 메인페이지 | 상세페이지 | 수정하기 페이지 | 작성하기 페이지 |
| --------- | --------- | -------------- | -------------- |
|<img width="400" alt="메인페이지" src="https://user-images.githubusercontent.com/59644518/124128737-03f29800-dab8-11eb-8310-9594720a3b5d.png">|<img width="400" alt="상세페이지" src="https://user-images.githubusercontent.com/59644518/124128753-0a810f80-dab8-11eb-8bc5-5161b4443f61.png">|<img width="400" alt="수정하기 페이지" src="https://user-images.githubusercontent.com/59644518/124128772-0ead2d00-dab8-11eb-911b-2e563029454b.png">|<img width="400" alt="작성하기" src="https://user-images.githubusercontent.com/59644518/124142817-8897e300-dac5-11eb-828c-ff545df18ed6.png">|
| 설명 | 설명 | 설명 | 설명 |
| 기본적인 리스트 컴포넌트들을 불러와서 리스트들을 볼 수 있는 화면입니다. 작성하기 클릭시 작성하기 페이지로 이동하고 컨텐츠 클릭시 상세페이지로 이동합니다 | 컨텐츠 클릭시 이동한 해당 상세페이지 입니다. 수정하기 버튼 클릭시 수정페이지로 이동하고 삭제하기 클릭시 삭제후 다시 첫 페이지로 돌아갑니다. | 수정하기 페이지입니다. placeholder로 기존에 작성된 정보들을 불러오고 새로 작성후 수정하기 완료버튼을 클릭하면 수정완료후 메인페이지로 돌아갑니다. | 작성하기 페이지입니다. 빈칸없이 모두 작성해야 완료가되고 작성완료시 메인페이지로 돌아갑니다. |

## 개발과정에서 겪은 어려움
- 우선 제일 처음 겪었던 어려움은 Redux로 상태를 관리하기 까지는 성공했는데 firebase와 연동하면서 다시 수정하는 과정에서 어려움을 겪었다. 그 후에는 초창기에는 수정하기 기능을 없이 만들었다가 나중에 수정하기 기능도 추가하여 주었는데 수정하기 기능을 만드는 과정에서 수정버튼 클릭시 메인페이지로 돌아가지만 DB에서는 실시간으로 변경되었지만 뷰에서는 새로고침을 해주어야지 뷰에 그 정보가 반영이 되는 오류가 계속 발생하여서 그 부분을 고치는데 많은 시간이 들었다. 결국 해결은 했다. 이유는 redux에서 reducer 부분에서 해당 정보를 다시 list에 담아줄때 id값을 담지 않아서 발생한 오류였었다. 그리고 해당 뷰가 수정할 부분인지 정확히 확인하고 난 후에 수정이 될 수 있도록 id값을 비교하여 변경될 수 있도록 수정해주었다. ( 처음에는 index값으로 비교해서 다른 게시글이 수정되는 오류 발생했었음 ) 이 부분이 가장 개발하면서 겪었던 큰 어려움이였다.

## 추후 추가하고 싶은 기능
- 무한 스크롤 기능
- 이미지 삽입 기능

## 앞으로 방향
- 우선 개인적으로 카페에서 일도 많이 했고 커피자체를 엄청 좋아하기 때문에 이 프로젝트를 시작하게 되었는데 앞으로 개인적으로 만들어보고 싶은 프로젝트는 카페 및 커피를 좋아하는 사람들을 위한 커뮤니티 사이트를 제작해보고싶다. 우선은 이번에 만들면서 느끼고 배웠던 부분들을 참고하여서 개인 프로젝트로 꾸준하게 카페,커피 관련 커뮤니티 사이트를 제작하고싶다. ( 나중에 개인 카페를 가지고 싶은게 꿈이라서...ㅎㅎㅎ )

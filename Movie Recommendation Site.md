**README.md 파일에 있어야할 내용**

1. 팀원 정보 및 업무 분담 내역
2. 목표 서비스 구현 및 실제 구현 정도
3. 데이터베이스 모델링(ERD)
4. 필수 기능에 대한 설명
5. 배포 서버 URL
6. 기타(느낀점)

# Movie Recommendation Site

## 👩팀원🧑

- 윤세일
  1. 공통기능 및 뼈대: Django
- 전예지
  1. 공통기능 및 뼈대: Vue

## 목표 서비스

> **영화를 좋아하는 사람들이 서로의 의견을 자유롭게 공유하고 친분을 쌓을 수 있는 SNS형 영화 추천 사이트**

**반응형 웹**

1. **관리자 뷰**
   
   - 관리자 권한의 유저만 영화 등록 / 수정 / 삭제 권한
   - 관리자 권한의 유저만 유저 관리 권한
   - 장고에서 기본적으로 제공하는 admin 기능을 이용하여 구현
   
2. **회원 가입 기능**

   - 회원가입/ 로그인/ 로그아웃
   - *(추가) 회원정보 수정(update)/ change_password*

3. **영화 정보**

   - TMDB 영화 레코드 50개 이상(Database Seeding을 활용)
   - 모든 로그인 된 유저는 영화에 대한 평점 등록 / 수정 / 삭제 
     -> **영화상세페이지에서 댓글처럼** 이루어진다. (여기서  평점 등록)

   - *(추가) `보고싶어요` 버튼을 넣어서 누를 수 있으면 좋겠다. (좋아요버튼처럼) ->프로필와 연결*

4. **커뮤니티 (Review)**

   - 영화 정보와 관련된 대화(Review)를 할 수 있는 커뮤니티 기능 -> **review에 영화정보 들고옴/ 페이스북 형식**/ *(추가)무한스크롤*
   - 로그인한 사용자만 글을 조회 / 생성(create) 할 수 있으며 작성자 본인만 글을 수정(update) / 삭제 (delete)
   - 사용자는 작성된 게시글에 댓글을 작성할 수 있어야 하며 작성자 본인만 댓글을 삭제(comment, comment_delete)
   - 각 게시글 및 댓글은 생성 및 수정 시각 정보가 포함 (created. updated)
   - *(추가) 리뷰 좋아요 기능(like)*
   - *(추가) 해쉬태그(가장 해쉬태그가 많이 달린 댓글 best 보여주기) / 검색/ 채팅창*

5. 프로필 (profile)

   - 자신이 글 쓴 내용을 볼 수있다. (커뮤니티에서는 모든 사람이 올린 글을 볼 수 있다.) -> *(추가) 무한스크롤*
   - 팔로우/ 언팔로우(follow)
   - *(추가) 보고싶어요 목록 보여주기*
   - *(추가) 상세프로필 (연애중, 생일, 보고싶은 영화 목록)*
   - *(추가) 알림: 사용자 취향 영화 추가시, 기념일 등*

6. **영화 추천 알고리즘 (Recommendation)**

   - **기분/ 시간/ 날씨 바탕으로 알고리즘 추천**

   - **좋아하는 영화(평점)/ mbti를 기반으로 친구 추천** (너와 잘 맞는 이 친구가 이 영화를 좋아해 라고 보여주기)
     -> mbti 테스트: 회원가입 때는 선택창으로 입력/ mbti테스트 vue 따로 만들기 -> 추천받을때 없으면 여기로 이동

   - 평점을 등록한 유저는 해당 정보를 기반으로 영화를 추천 받을 수 있어야 합니다.
   - 추천 방식은 각 팀별로 자유롭게 선택할 수 있으며 어떠한 방식으로 추천 시 스템을 구성 했는지 설명

7. 기타

   - **디자인은 깔끔**하게(ex 클럽하우스 or 흰바탕에 라이트그레이 적절히 섞어서)
   - *(추가) 세부적인 효과 넣기 (흔들기, 크기 등)*

   - HTTP Method와 상태 코드는 상황에 맞게 적절하게 반환되어야 하며, 필요에 따라 메시지 프레임워크 등을 사용하여 에러 페이지
   - 필요한 경우 Ajax를 활용한 비동기 요청을 통해 사용자 경험을 적절하게 향상



## 구조

### 👻Vue

- **accounts**

  - SignupView.vue

  - LoginView.vue

- **mains**  # 메인 페이지 (영화 리스트)

  - HomeView.vue
  - MovieCard.vue

- **details**  # 상세페이지 (창을 띄울지 고민 -> 나중에 고민)

  - DetailView.vue
  - Comment.vue

- **communities**  # 커뮤니티 페이지

  - CreateReview.vue
  - ReviewView.vue
  - Comment.vue (이건 도전)

- **profiles**  # 프로필

  - ProfileView.vue

- **recommendations**  # 추천 알고리즘 (금 함께)

  - FriendRecommendationView.vue
  - MovieRecommendationView.vue

## IF문

- 로그인/ 안로그인
  - 로그아웃: signup/ login
  - 로그인: mains/ 나머지 다아ㅏ

## Model(ERD)



## 배포서버 URL



## 개발 일지

### 20日 FRI

👧 **YEJI**

- 프로젝트 개발 목적과 목표서비스를 명확하게 기재.
- vue 만들기
  - 회원가입기능
  - 영화정보
  - 커뮤니티

👦 **SEIL**

- 



## 기타

- API

  API_URL = https://api.themoviedb.org/3/

  •‘6b1e9899f17fa92429f5a793999dcb8f’

  API_key = 6b1e9899f17fa92429f5a793999dcb8f

  - https://api.themoviedb.org/3/movie?api_key=6b1e9899f17fa92429f5a793999dcb8f

  https://ji-gwang.tistory.com/54

- API store

  https://www.apistore.co.kr/generalApi/generalApiView.do?general_service_seq=85


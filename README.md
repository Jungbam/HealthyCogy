코리아IT 아카데미 팀 프로젝트

1. 프로젝트명 : 헬시코기(다이어트 플랫폼)
2. 작업기간 : 22.09.06 ~ 10.14 / 약 5주간
3. 개발도구
    - 언어 : JS(HTML/CSS), React
    - 그 외 : Firebase(서버리스), 각종 리액트 라이브러리(React-calendar, React-slick, React-player 등)
    - 협업 툴 : github, notion, discord

4. 개발간 애로사항

    - 개발과정에서 프로젝트를 2번 엎고 다시 시작하게 됨.
    
      ① 프로젝트 시작간 개발환경(버전)에 대한 동기화를 하지 않고 시작함으로써 라이브러리 충돌이 발생.
      
        ☞ 개발환경에 대한 동기화 후 재시작 / 중간과정에서 라이브러리 추가시 라이브러리에 대한 공유
        
      ② github의 사용미숙으로 무절제한 클론개발, 커밋으로 인한 conflict 문제 발생.
      
        ☞ 팀장 컨펌 후 커밋으로 conflict 해결 후 병합이 되도록 절차 수정
      
    - 유튜브API 사용간 정책으로 막혀있는 여러 에러들과 대면.
    
      ① 유튜브 영상 호출간 http → https에 대한 문제
      
      <img width="1280" alt="유튜브 영상 호출 에러" src="https://user-images.githubusercontent.com/108196588/197659630-f65e6f3a-38fc-4e9f-979c-3961c3ca0c59.png">
      
      ② 유튜브 API 할당량 문제
      
      ![유튜브 API를 사용해서 영상을 받아왔을 때 에러-할당량](https://user-images.githubusercontent.com/108196588/197659654-869971ae-3f83-4c64-9e11-c8cdfb94ca82.JPG)

    - Firebase 사용간 테스트 과정에서 할당량 문제 발생
    - 
       ![파베 할당량 오류](https://user-images.githubusercontent.com/108196588/197659801-98a3cc42-9ddc-4235-92d3-09879f1d9179.JPG)
       ![할당량 오류](https://user-images.githubusercontent.com/108196588/197659761-c570bbd3-9b08-4041-a57a-c9c4d459e13f.JPG)
       
      ※ 원인분석 : Firebase를 이용한 채팅기능 구현으로 인하여 채팅량이 증가되었을 때에 할당량 문제가 과부화 됨.
      
          ★ Node.js 와 Socket.io를 이용한 채팅어플 구현을 통하여 개선방향 공부 필요
    
    - 팀원간 동기화 과정으로 개발 지연
    
      ① 처음 프로젝트 시작간 3명으로 시작하였으나 한명의 이탈로 인한 프로젝트 목표 수정을 진행하여야 했으나, 해당과정을 생략하고 진행 → 팀원의 부담을 초래함.
      
      ② 중간 과정에서 github능력 향상을 위한 강의 수강, 리액트 추가 보충 강의 수강으로 능력은 향상되었으나 프로젝트 개발시간에 대한 조정을 하지 않음. → 프로젝트 기간 단축
    
5. 개발 후 느낀점

    - UI / 비지니스 로직의 분리 개발 필요
    - 
    ![image](https://user-images.githubusercontent.com/108196588/197661089-92cae6c7-7f88-4b27-a73c-2572940ec3dc.png)
    
    - 디자인 시스템 개발 후 프로젝트 진행에 대한 필요성
    
    - 테일윈드, ant-design 등 css 라이브러리 사용을 통한 반응형 등 디자인에 할애되는 시간 단축 필요

*** Firebase 할당량 문제로 인하여 배포중단 ☞ 시연영상 개제 
    - on Child를 이용해서 데일리나 시간대별로 데이터를 분산하고 realtime DB에서 firestore로 데이터를 백업해주는 식으로 해결방법 모색도 가능할지도...(feat.태오)

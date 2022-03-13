
# React Mini Project

### 팀원
:balloon:김영애(데이터 구성, ROW 구현)
<br>
:mag:김준태(Slide 구현)
<br>
:sheep:양지현(Cart 구현)

---
## 사전 계획 

![플데강의](https://user-images.githubusercontent.com/97663140/157452978-422c3b6b-6d53-41d4-9b73-c97ad87521ce.png)

취업 특강 수강 신청 사이트입니다. 
슬라이드로 인기가 많은 강의들을 시간 흐름에 따라 볼 수 있습니다. 아래에는 분류된 강의들이 있고 각각의  강의를 신청할 수 있는 기능을 넣으려고 합니다. 마지막으로 장바구니 기능으로 담은 강의를 확인하고 삭제할 수 있습니다. 


---
## 기능 구현 

### 1. firebase Data
![image](https://user-images.githubusercontent.com/97663140/158059726-5be9d0bb-77ec-4863-bc11-1217a7bfa05f.png)

위와 같은 양식으로 데이터를 입력하였습니다. 

### 2. ROW

![image](https://user-images.githubusercontent.com/97663140/158059352-0a1a7200-3bd3-433b-8321-d6792a7a6316.png)


<li>Row를 Frontend, Backend, Data, AI 네 개의 항목으로 구성하였습니다.

<li>키보드로 목록 이동이 가능합니다.

<li>신청버튼을 누르면 강의바구니에 강의를 담을 수 있음

### 3. Slide
  
 ![image](https://user-images.githubusercontent.com/97663140/158084109-b806ff9f-be37-495a-8cee-92b1898eba23.png)


<li>시간 간격에 따라 주력하는 인기 강의 정보를 보여주는 기능입니다.

### 4. Cart 

![image](https://user-images.githubusercontent.com/97663140/158045938-2e225b28-18ed-4529-a414-0bc6bfcb4044.png)

<li>강의를 담으면 강의바구니에 추가가 됩니다.(중복 담기 불가능)
<li>목록의 삭제 버튼을 통해 강의 하나씩 삭제 가능합니다. 
<li>전체 삭제를 통해 담은 강의 한번에 삭제 가능합니다.



--- 
### 아쉬운 점
<li>로그인 기능 없음
<li>ROW 이동 방법이 버튼도 있었으면 좋았을 것 같음
<li>백엔드가 없어서 데이터베이스를 읽어올 수만 있고 업데이트는 할 수 없어서 기능간 연동이 부족한 점

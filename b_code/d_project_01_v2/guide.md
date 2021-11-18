[TOC]

## node를 이용하여 sass 설치 및 실행

1. node.js 설치 및 확인 '$ node -v && npm -v'
2. sass 설치 및 확인 '$ npm istall --global sass', '$ sass --version'

3. scss를 css로 담겠다(실행하고있는 디렉토리-폴더안에서 진행해야함) '$ sass --watch scss:css'



- node.js 
  - js기반의 개발을 하기 위한 세팅 프로그램
  - 개발하는 동안 서포트하는 기능을 가진 환경(런타임)
- npm(npmjs.com) : node.js 내부의 앱 스토어(실행 프로그램 모음)
- sass : 앱



## 기본세팅

- '$ mkdir -p scss/common scss/src scss/page scss/page/main scss/page/common css/common js/src js/common html img media fonts'

- ''$ touch index.html html/main.html'

- '$ vi index.html'하면 깃에서 인덱스 html 작성 가능

  

## 웹페이지 구성시 준비사항

### 기본 자료 

- 변수선언 : 색상, 폰트
- @mixin 세팅 : 폰트, 사이즈, 이미지 설정 등
- reset, common

---

### 이름 부여시

#### html 이름 설정

1. 작성 : 코드를 의미있게 작성할 수 있도록 유의
2. html : ID속성은 유일, label에서 input과 연동, anker 연동이므로 이 의미에 맞게 사용
3. css : 선택자 사용시 3단계까지만 유효(nesting기법에서도, @at-root)
4. 이름 부여시 
   1. body 내부 첫영역은 `#wrap`
   2. id 설정 : camelCase `#WrapBox`
   3. class 설정 : snake_case(under_score) `.box_area`
   4. name 설정 : id이름과 동일하지만 중간에 '_' 언더바 두개(doubleunder__Score) `Wrap__Box`
   5. naming 방식 : BEM(block_element_modifier) - 형태\_의미_수식어
      - element level 구성 : `Box` -> `_area` -> `_inner` ->`_part` -> `_content` -> `_detail`
      - 상태처리(class) : js에서 DOM 선택자 사용시
        - 마우스 올린 상태 : `over`
        - 선택된 상태 : `select`
        - focus : `focus`
        - 자료가 나타난 상태 : `on`
        - error : `err`
        - success : `suc`
        - warning : `warn`
        - 기타 : `act`, `run`, `pause`

#### Directory 구성(개발용) :

> 📂 아이콘은 폴더를 의미하며, 첨부된 형태는 폴더명이며 고정이름
>
> 💼 아이콘은 폴더를 의미하며, 사용이름 또는 한글이름의 폴더는 임의로 변경가능 
>
> 📙 아이콘은 파일을 의미하며, 일부 아이콘 없이 이름으로 처리한 형태도 존재
>
> 📜 아이콘은 파일을 의미하며, 사용자가 임의로 변경가능
>
> 파일명 앞에 '_' 붙은 형태는 암묵적파일의 의미로 해석

```
📚
 |📙 index.html
 |▶(📂css:scss변환처리)
 |▶(📂scss) ➡ (📂common) ➡ 📙_mixin.scss , 📙_variable.scss , 📙reset.scss , 📙common.scss
             ➡ (📂src)    ➡  main.scss  
             ➡ (📂page)   ➡ (📂base) ➡ _headBox.scss, _footBox.scss
           			       ➡ (📂main) ➡ _view.scss, _view_smart.scss, _view_tablet.scss
                           ➡ (📂about)
                           ➡ (📂product)

|▶(📂font)  ➡ (💼사용자폰트폴더), (💼fontawesome사용)

|▶(📂html) ➡ 📙main.html

|▶(📂multi) ➡ (📂img)
             ➡ (📂video)
             ➡ (📂audio)
             
|▶(📂js) ➡ (📂common) - normalize
          ➡ (📂src)
          
|▶(📂data) ➡ (📂csv) ➡ 📜 페이지나기능용도.csv 
            ➡ (📂json) ➡ 📜 페이지나기능용도.json
```



---

#### File naming 기법  :

1. 

---


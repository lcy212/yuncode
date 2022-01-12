// rwd_import_nav.js

{
  const path = '../temp/';
  const path2 = '../dist/rwd/'
  const data = {
    mob : path + 'mobile_rwd_nav.html',
    laptop : path + 'laptop_rwd_nav.html',
    mobJs : path2 + 'mobile_header.js',
    laptopJs : path2 + 'laptop_header.js'
  }
  const elbody = document.querySelector('body');
  const elNav = document.querySelector('#navBox');
  let ckClass;ㅋ

  const fnMKScript = (url, ckClass) => {
    if(!!ckClass){ // .navScript가 있으면 삭제하는 작업
      const elSc = document.querySelector('.navScript');
      elSc.remove();
    }

    // script 태그 및 .navScript 삽입
    const mkScript = document.createElement('script');
    mkScript.setAttribute('src', url);
    mkScript.setAttribute('class', 'navScript');
    elbody.append(mkScript);

  }

  const fnDeviceNav = (type, tScript) => {
    fetch(type)
    .then(response => response.text())
    .then(element => { elNav.innerHTML = element; })
    .then(() => { fnMKScript(tScript, true); })                  // html에 맞는 형식의 script코드 삽입
    .then(() => ckClass = document.querySelector('.navScript'))  // script 코드 삭제 편의성을 위한 선택자 생성
  };

  // fnDeviceNav(data.laptop);
  // 1024기준으로 html 문서 코드 확인 및 처리
  const deviceSize = `screen and (min-width:1024px)`;
  const mediaQuery = window.matchMedia(deviceSize);
  const fnDevice = ()=>{
    (mediaQuery.matches) ? fnDeviceNav(data.laptop, data.laptopJs) : fnDeviceNav(data.mob, data.mobJs);
  }
  fnDevice();
  mediaQuery.addEventListener('change', fnDevice);
}
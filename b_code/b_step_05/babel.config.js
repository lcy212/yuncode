// babel.config.js
module.exports = {                  // nodejs 기능에서 모듈을 사용할 수 있도록 세팅
  presets : [
    ['@babel.preset-env', {         // 변환버전
      targets : { ie:11 },           // 익스플로러 11 기준
      useBuildIns : 'usage',        // 그에 따른 기능
      corejs : { version:2 }
    }]
  ]
}
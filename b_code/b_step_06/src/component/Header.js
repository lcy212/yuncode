// Header.js

import Gnb from "./Gnb";

export default function Header({site, url}){

  const h1Style = { color:'#f50', textTransform:'uppercase' };

  return (
    <header id="headBox">
      <h1 style={h1Style}>
        <a href={url}>{site}</a>
      </h1>
      <Gnb />
    </header>
  );
}

Header.defaultProps = { name : 'web' }; {/* 기본값 설정 */}
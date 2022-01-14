import React, { useState, useEffect} from 'react';
import '../style/ViewBox.scss';

export default function ViewBox(){

  const listData = ["view_01", "view_02", "view_03", "view_04" ];
  const [num, setNum] = useState(0);

  const setStyle = {    
    transition: (num===0) ? null : 'margin 500ms ease' ,
    marginLeft: `${num * -100}%`
  }

  useEffect( ()=>{
    console.log( listData[num] );
  }, [num])

  const fnClassAdd = (i)=>{
    const ON = (i === num) ? '  on' : '';
    const VIEW = 'view_';
    const textNum = '000' + (i+1);
    const VIEW_TEXT = VIEW + textNum.slice(-2);
    return VIEW_TEXT+ ON;
  };

  // const viewData = listData.filter( (list,idx) => idx === num );

  return (
    <article id="viewBox">
      <div className="btn_area">
        <button type="button" className="next" onClick={ () => { setNum (num >= 3 ? 0 : num + 1)}}><span className="blind">next</span></button>
        <button type="button" className="prev" onClick={ () => { setNum (num <= 0 ? 3 : num - 1)}}><span className="blind">prev</span></button>
      </div>
      <div className="indi_area">
        <ul>
          <li className='on'><a href="view_01">indi_1</a></li>
          <li><a href="view_02">indi_2</a></li>
          <li><a href="view_03">indi_3</a></li>
          <li><a href="view_04">indi_4</a></li>
        </ul>
      </div>
      <div className='view_area'>
        <ul style={setStyle}>
          {listData.map( (list, idx) => <li className={fnClassAdd(idx)} key={idx}>{list}</li>)}
        </ul>
      </div>
    </article>
  )
}
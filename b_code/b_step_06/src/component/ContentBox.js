// ContentBox.js

export default function ContentBox(props){

  // const myName = 'web'
  // const = props = {name:'web'}

  return (
    <article id="contentBox">
      <p style={ {color:'#f50'} }>
        {props.name}이란?
      </p>
      <dl>
        <dt>{props.name} 커리큘럼</dt>
        <dd>{props.name} 내용</dd>
      </dl>
    </article>
  );
  
}
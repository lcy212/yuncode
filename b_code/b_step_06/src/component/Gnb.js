// Gnb.js

export default function Gnb(){

  const navLists = ['about', 'product', 'gallery', 'notice'];
  
  return (
    <nav className="gnb">
      <h2>navigation</h2>
      <ul>
        {navLists.map((li, idx)=> { return <li key={idx}>{li}</li> })}
        {/* <li><a href="/about">about</a></li>
            <li><a href="/product">product</a></li>
            <li><a href="/gallery">gallery</a></li>
            <li><a href="/notice">notice</a></li> */}
      </ul>
    </nav>
  )
}
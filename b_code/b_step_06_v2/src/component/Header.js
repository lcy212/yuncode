import Navigation from './Navigation';
import '../style/Header.scss'
import { Link } from 'react-router-dom';

export default function Header(props){
  
  return (
    <header id="headBox">
      <h1><Link to="/">{props.heading}</Link></h1>
      <Navigation />      
    </header>
    )
}
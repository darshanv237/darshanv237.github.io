import {HashLink} from 'react-router-hash-link'
import {handleClick} from '../Logic'
import Links from '../../assets/Data/Links';


const Navbar = ()=>{
    
    
    return(<nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top" id="navbar">
    <div className="container-fluid">
        <ul className="nav nav-pills ml-auto" id="ex1" role="tablist">
            <li className="nav-item">
              <HashLink className="nav-link text-white" id="nav_home" role="tab" aria-controls="home" aria-selected="true"  aria-current="page" to='/#home' onClick={handleClick} style={{backgroundColor: 'none'}}><i className="fa-sharp fa-solid fa-house-chimney"></i></HashLink>
            </li>
          </ul>
          
          <ul className="nav nav-pills ms-auto ">
            {Links.map((links)=>{
              return(<li className="nav-item d-none d-md-block" role="presentation" key={links}>
                <HashLink className="nav-link text-white text-capitalize" id={links+"active"}  to={'/#'+links} onClick={handleClick} style={{backgroundColor: 'none'}} smooth>{links}</HashLink>
              </li>)
            })}
        </ul>
      </div>
  </nav>);
}

export default Navbar;
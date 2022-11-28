import profile from '../../assets/Darshan.jpeg';
import '../../index.css';
import pData from '../../assets/Data/Personalinfo';
import Typed from 'react-typed';
import Socialicons from './Socialicons';
import pdata from '../../assets/Data/Personalinfo';

const Banner = ()=>{
    return(
        <div className="container-fluid mx-auto bg-dark" id="banner">
                <div className="d-flex flex-row justify-content-center text-center">
                    <div className="pt-2">
                        <img src={profile} alt="darshan" className='img-fluid text-center' id='img_profile'/>
                        <h1 id='header' className='m-1'>{pData[0].name}</h1>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="pb-1">
                            <h2 id="tag_line">
                                    I'm a <Typed strings={pData[0].roles} 
                                                typeSpeed={100} 
                                                loop={true} 
                                                smartBackspace={true}
                                                showCursor={true}
                                                cursorChar={'|'}
                                                backSpeed={100} id='typer'/>
                            </h2>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <Socialicons></Socialicons>
                </div>
                <div className="d-flex flex-row justify-content-center pt-2">
                    <div className=" py-3 p-1 text-white" id='header'>Coding Profiles:</div>
                    {pdata[0].profiles.map((profiles)=>{
                        return(
                        <div className="px-2 pt-2 text-white" id='header' key={Math.random()}>
                            <a href={profiles.link} className="nav-link text-white">
                                <img src={profiles.src} className='img-fluid' id='cprofiles' alt="" />
                            </a>
                        </div>)
                    })}
                </div>             
            </div>
            
    );
}

export default Banner;
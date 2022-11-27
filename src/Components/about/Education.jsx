import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pData from '../../assets/Data/Personalinfo';
import Items from '../../assets/Data/Items'

const Education=()=>{
    return( 
        <section id="education" className="education my-2">
            {/* <div className="container-fluid mx-4"> */}
                <div className="row mx-4">
                <h3 className="education-title mt-2">Education</h3>                        
                        <OwlCarousel className="owl-theme" responsive={Items}> 
                                {pData[0].education.map((education)=>{
                                    return(
                                        <div className="col" data-aos="fade-up">
                                            <div className="card h-100  bg-dark mx-2">
                                                <h5 className="card-header p-2">
                                                    <span className="ed_icon p-2"><i className="fa-solid fa-user-graduate fa-1x p-2" id="ed_icons"></i></span>
                                                    {education[0]}
                                                </h5>
                                                <div className="card-body" key={education[3]}>
                                                    <div className="education-item h-100 text-white px-2" key={'education'+education[4]}>
                                                        <p className='px-2 text-white'><strong>{education[1]}</strong></p>
                                                        <p className='px-2 text-white'><strong>Year Of Passing: </strong>{education[3]}</p>
                                                        <h5 className='px-2 mx-2 text-black'>{education[2]}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                    )
                                })}
                                {/* <h4>Master of Fine Arts &amp; Graphic Design</h4>
                                <h5>2015 - 2016</h5>
                                 */}
                        </OwlCarousel>
                    </div>
                {/* </div> */}
        </section>
    )
}

export default Education;
import pData from '../../assets/Data/Personalinfo'

const Quote=()=>{
    return(

    <div className="row justify-content-center mt-4 mx-2">
    <div className="col-md-12 col-lg-8 col-sm-12">
        <i className="fa-sharp fa-solid fa-quote-left text-white"></i>
        <blockquote className='text-white text-center px-2' id="quote">{pData[0].quote}
        </blockquote>
        <i className="fa-sharp fa-solid fa-quote-right float-end text-white"></i>
    </div>
</div>
);
}

export default Quote;
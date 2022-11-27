import pData from '../../assets/Data/Personalinfo'

const Socialicons = ()=>{
    return(
        <div className="p-2 pb-2">
            {pData[0].icons.map((icons)=>{
                return(
                        <a href={icons[1]+' px-2'} key={'icon'+icons[2]} id='social'><i className={icons[0]+' mx-1'} id='socialicons'></i></a>)
            })}
        </div>
    );
}

export default Socialicons;
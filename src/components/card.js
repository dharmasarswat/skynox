import React from 'react';
import UserCard from './userCard';


const Card = ({user , userName , img , textWhite , time , text , bgImg , textbgc="teal"}) =>{
    const style = {
        backgroundImage : `url(${bgImg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "200px"
    }

    const bgc ={
        backgroundColor: `${textbgc}`,
        color: "#fff",
        lineHeight: "18px"
    }

    return(
        <div className="card" style={style}>
            <UserCard user={user} userName={userName} img={img} textWhite={textWhite} />
            <div className="time">{time}</div>
            <div className="bottom-text" style={bgc}>
                {text}
            </div>
        </div>
    )
}

export default Card
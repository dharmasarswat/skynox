import React from 'react';

const UserCard = ({user , userName , img , textWhite}) =>{

    const style={
        display: "flex",
    }

    const ImgStyle = {
        width: "40px",
        height: "40px",
        borderRadius: "15px",
        marginRight: "10px"
    }


    return(
        <div style={style}>
            <div >
                <img src={process.env.PUBLIC_URL+"./images/"+img} alt="User" style={ImgStyle}/>
            </div>
            <div className="notify text-bold" >
                <span className={textWhite && "text-white"} >{user}</span>
                <p className= {textWhite ? "text-white text-small": "text-small text-muted"}>
                    @{userName}
                </p>
            </div>
        </div>
    )
}

export default UserCard
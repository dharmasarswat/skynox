import React from 'react';

const Title = ({bold , muted}) =>{
    return(
        <div className="heading">
            <div>
                <span className="text-bold">{bold} </span>
                <span>{muted}</span>
            </div>
            <i className="fas fa-ellipsis-h text-muted" ></i>
        </div>
    )
}

export default Title
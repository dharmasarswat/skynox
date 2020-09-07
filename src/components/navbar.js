import React from 'react';
import '../css/navBar.css'
import UserCard from './userCard';

const Navbar = () =>{
    return(
        <header>
            <nav>
                <div className="brand">
                    <div className="icon">e</div>
                    <span className="text-bold">Edu</span><span className="text-primary">kated</span>
                </div>
                <div className="box menu">
                    <div className="item active">
                        <i className="fas fa-th-large"></i>Home
                    </div>
                    <div className="item">
                        <i className="fas fa-search"></i>Search
                    </div>
                    <div className="item">
                        <i className="fas fa-comment"></i>Message
                    </div>
                    <div className="item">
                        <i className="fas fa-cog"></i>Setting
                    </div>
                </div>
                <div className="box notification">
                    <div className="item">
                        <div className="img notification-icon">
                            <i className="far fa-lightbulb"></i>
                        </div>
                        <div className="notify text-bold">
                            Updated Course
                            <p className="text-small text-muted">
                                by @karlatuts
                            </p>
                        </div>
                    </div>
                </div>
                <div className="achievements">
                    <div className="box">
                        <i className="fas fa-medal" style={{color:"#88ce89"}}></i>
                        <div className="notify text-bold">
                            1800
                            <p className="text-small text-muted">
                                points
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-chart-line" style={{color:"#cc87a8"}}></i>
                        <div className="notify text-bold">
                            45.3%
                            <p className="text-small text-muted">
                                complete
                            </p>
                        </div>
                    </div>
                   
                </div>
                <div className="box profile">
                    <div className="item">
                        <UserCard user="Alex" userName="alexlearns" img="user.jfif" />
                        <i className="fas fa-ellipsis-v" ></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
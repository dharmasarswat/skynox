import React from 'react';
import Title from '../components/title'
import '../css/advanceSearch.css'
import { useState } from 'react';
import Card from '../components/card'

const AdvanceSearch = () =>{
    const [search,setSearch] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <div className="advance-search">
            <Title bold="Advance" muted="Search" />
            <form className="search-box" onSubmit={handleSubmit}>
                <input
                type="text" 
                name="search"
                placeholder="Start Writing Something"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
                />
                <button>Find</button>
            </form>
            <div className="cards">
                <Title />
                <div className="card-wraper">
                <Card
                    user="Rwds Agency"
                    userName="rwdstuts"
                    img='./stories/7.jfif'
                    textWhite="true"
                    time="64 mins"
                    text="Making a Beautiful Scene with New Presets, Created by Senior Illustator"
                    bgImg="./images/card1.jfif"
                    textbgc="steelblue"
                    id="card1"
                />
                <div className="card-row">   
                    <Card
                        user="Urban Design"
                        userName="urband"
                        img='./stories/8.jfif'
                        textWhite="true"
                        time="49 mins"
                        text="Secret Garden Great Tutorials for Middle Illustator"
                        bgImg="./images/card2.jfif"
                        textbgc="#31410d"
                        id="card2"
                    />
                    <Card
                        user="Urban Design"
                        userName="urband"
                        img='./stories/1.jfif'
                        textWhite="true"
                        time="53 mins"
                        text="Best Tips fom Drawing Some Great Thematic Illustration"
                        bgImg="./images/card3.jfif"
                        textbgc="#306984"
                        id="card3"
                    />
                </div>
                </div>
                <Title bold="Special Offer" />
                <div className="premium-card">
                    <div className="left">
                        <div className="text-primary">50 Days of Premium!</div>
                        <div className="text-blue">Get if Before 01.01.2020</div>
                        <button>Learn More</button>
                    </div>
                    <div className="right">
                        <i className="fas fa-birthday-cake"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdvanceSearch
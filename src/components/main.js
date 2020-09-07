import React from 'react';
import '../css/main.css'
import stories from '../assests/stories'
import Title from './title';
import Card from './card';
import UserCard from '../components/userCard';


const Main = () =>{
    return(
        <main>
            <Title bold="Streaming" muted="Now" />
            <div className="stories">
                <div className="img story">
                    {stories.map((story,i)=>{
                        return(
                        <img 
                        key={i}
                        src={process.env.PUBLIC_URL+ "./images/stories/"+story}
                        alt="Story"/>)
                    })}
                </div>
            </div>
            <Title bold="Polular" muted="This Week" />
            <div className="popular">
                <Card
                    user="Lana Marindana"
                    userName="lanamara"
                    img='./stories/5.jfif'
                    textWhite="true"
                    time="82 mins"
                    text="Learning How To Create Beautiful Scenes In Illustator in 60 minutes"
                    bgImg="./images/card4.jfif"
                    textbgc="purple"
                />
                <Card
                    user="Urban Design"
                    userName="urband"
                    img='./stories/6.jfif'
                    textWhite="true"
                    time="82 mins"
                    text="Creating a Beautiful Potrait Illustration. Learning New Technics and Tricks"
                    bgImg="./images/card5.jfif"
                />
            </div>
            <Title bold="Top" muted="Tutors" />
            <div className="top-tutors">
                <div className="box profile">
                    <div className="item">
                        <UserCard user="Alex" userName="alexlearns" img="./stories/2.jfif" />
                        <i className="fas fa-plus" ></i>
                    </div>
                </div>
                <div className="box profile">
                    <div className="item">
                        <UserCard user="Alex" userName="alexlearns" img="./stories/3.jfif" />
                        <i className="fas fa-plus" ></i>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
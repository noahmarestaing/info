import React, {} from 'react'
import '../css/Shared.css'
import vrImage from '../assets/vrImage.png'
export function TriviaGame () {
    
    return (
        <div id="text">
            <div id="ContentBlock">
                <div id="TextBlockTitle">VR TRIVIA GAME</div>
                <img id="YoutubeVideo" src={vrImage}></img>
                <div id="description">I developed a vr trivia game for my virtual reality class. The goal of the game
                    is to walk through different themed rooms answering questions to unlock new rooms. It was built in Unity
                    with the Oculus Rift SDK. The project files and report can be found <a id="TextBlockLink" href="https://drive.google.com/drive/folders/1sCfVzkKOHvv07MOngisJVIQqjHUeylQM?usp=sharing" target = "_blank" 
                    rel = "noopener noreferrer">here</a>.
                </div>
            </div>
        </div> 
    )

}
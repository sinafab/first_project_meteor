import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Home = () => {
  
  return (
    <div>
        <div class="joke">
        
            <div class="row">
                <div class=".col-sm-6 .col-md-5 .col-lg-6" id="info">
                    <h1 class="joke-title">joke1</h1>
                    <p class="meta">Author: user1</p>
                    <p class="meta">Posted On: 01/03/2023</p>
                </div>
                <div class=".col-sm-6 .col-md-5 .col-md-offset-2 .col-lg-6 .col-lg-offset-0" id="vote">
                    <img src="laugh.png" class="smiley" id="laugh"/>
                    <img src="frown.png" class="smiley" id="frown"/>
                    <img src="puke.png" class="smiley" id="puke"/>
                </div>
                <div class="row" id="score">
                    <h3 class="count red block">12</h3>
                    <h3 class="count yellow block">8</h3>
                    <h3 class="count green block">3</h3>
                </div>
            </div>
            <p class="regular joke-desc">
                "Why did the tomato turn red? Because it saw the salad dressing!"
            </p>
        </div>

        <div class="joke">
        
            <div class="row">
                <div class=".col-sm-6 .col-md-5 .col-lg-6" id="info">
                    <h1 class="joke-title">joke2</h1>
                    <p class="meta">Author: user2</p>
                    <p class="meta">Posted On: 01/03/2023</p>
                </div>
                <div class=".col-sm-6 .col-md-5 .col-md-offset-2 .col-lg-6 .col-lg-offset-0" id="vote">
                    <img src="laugh.png" class="smiley" id="laugh"/>
                    <img src="frown.png" class="smiley" id="frown"/>
                    <img src="puke.png" class="smiley" id="puke"/>
                </div>
                <div class="row" id="score">
                    <h3 class="count red block">12</h3>
                    <h3 class="count yellow block">8</h3>
                    <h3 class="count green block">3</h3>
                </div>
            </div>
            <p class="regular joke-desc">
                "Why couldn't the clown make any friends? Because he was always clowning around."
            </p>
        </div>

        <div class="joke">
        
        <div class="row">
            <div class=".col-sm-6 .col-md-5 .col-lg-6" id="info">
                <h1 class="joke-title">joke2</h1>
                <p class="meta">Author: user2</p>
                <p class="meta">Posted On: 01/03/2023</p>
            </div>
            <div class=".col-sm-6 .col-md-5 .col-md-offset-2 .col-lg-6 .col-lg-offset-0" id="vote">
                <img src="laugh.png" class="smiley" id="laugh"/>
                <img src="frown.png" class="smiley" id="frown"/>
                <img src="puke.png" class="smiley" id="puke"/>
            </div>
            <div class="row" id="score">
                <h3 class="count red block">12</h3>
                <h3 class="count yellow block">8</h3>
                <h3 class="count green block">3</h3>
            </div>
        </div>
        <p class="regular joke-desc">
            "Why couldn't the clown make any friends? Because he was always clowning around."
        </p>
    </div>
    </div>
    
  );
};

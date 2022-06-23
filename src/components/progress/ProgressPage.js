import React from 'react';
import { TopNav } from '../common/Topnav';
import { Chatbar } from '../common/Chatbar';
import { ProgressPageTable } from './ProgressPageTable.js';

class ProgressPage extends React.Component{
    render(){
        return(
            <div className = "progBG">   
                <TopNav />
                <Chatbar />
                <ProgressPageTable />
            </div>
        );
    }
}

export default ProgressPage;

/*
class WelcomePageTable extends React.Component{
    render(){
        return(
            <div className = "progTable">
                <div className = "progRow progTop">
                    <div>
                        <h1 className = "headers"> Order </h1>
                    </div>
                    <div>
                        <h1 className = "headers"> Status </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomePageTable;
*/

/*
<body>
<div>
  <div class=topnav>
    <a class=dropdown href="SecondPage.html">&#9776;</a>
  </div>

  <div class=table>
    <div class="row top">
      <div class=left>
        <h1 class=headers> Order </h1>
      </div>
      <div class=right>
        <h1 class=headers> Status </h1>
      </div>
    </div>

    <div class=row>
        <div class=left>
            <h2 class=prepping> Lorem sed arcu posuere leo elit vulputate cras aenean neq suscipit dis ac Ipsum </h2>
        </div>
        <div class=right>
            <h2 class=prepping> Preparing your order
                <button class=cancel> &#128711; </button> 
            </h2>
        </div>
    </div>
    
    <div class=row>
        <div class=left>
            <h2 class=inProgress> Lorem sed arcu posuere leo elit vulputate cras aenean neq suscipit dis ac Ipsum </h2>
        </div>
        <div class=right>
            <h2 class=inProgress> Cooking your order </h2>
        </div>
    </div>
    <div class=row>
        <div class=left>
            <h2 class=done> Lorem sed arcu posuere leo elit vulputate cras aenean neq suscipit dis ac Ipsum </h2>
        </div>
        <div class=right>
            <h2 class=done> Delivering your order </h2>
        </div>
      </div>
    <div class=row>
        <div class=left>
            <h2 class=delivered> Lorem dis ac Ipsum </h2>
        </div>
        <div class=right>
            <h2 class=delivered> Delivered (Call for plate pickup?) 
              <button class=pickup> &#10004; </button> 
            </h2>
        </div>
    </div>
  </div>
</div>
<div class="chatbar">
    <a href="chatmockup.html">Chat (0)</a>
</div>
</body>

*/
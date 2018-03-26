import React, { Component } from 'react';
import Header from "./components/Header";
import Pictures from "./components/Pictures";
import Scores from "./components/Scores";

class App extends Component {
  //array of 10 cows, 15 pigs, 20 sheep, 25 chickens, 30 rabbits
  state = {
    level: 1,
    picturesArray: [1, 2, 3, 4, 5],
    chosenArray: [],
    levelScore: 0,
    overallScore: 0,
    highScore: 0
  }

  handleThisClick = event => {
      let updateChosenArray = this.state.chosenArray;
      let updatePicturesArray = this.state.picturesArray;
      let currentScore = this.state.overallScore;
      let currentLevelScore = this.state.levelScore;
      //If the clicked picture is not already picked,
      if (!this.state.chosenArray.includes(event.target.textContent))
      {
        //Push it to the array that collects all pictures that have already been pressed
        updateChosenArray.push(event.target.textContent);
        //Increase the score
        currentScore++;
        currentLevelScore++;

        //Update the state with the chosen array and the current score.
        this.setState({
            chosenArray: updateChosenArray,
            overallScore: currentScore,
            levelScore: currentLevelScore
        })
        //I learned how to shuffle arrays here: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
        var j, x, i;
        for (i = updatePicturesArray.length - 1; i > 0; i--)
        {
            j = Math.floor(Math.random() * (i + 1));
            x = updatePicturesArray[i];
            updatePicturesArray[i] = updatePicturesArray[j];
            updatePicturesArray[j] = x;
        }
        console.log(currentLevelScore);

        //If the current score is equal to levelScore
        if (currentLevelScore === updatePicturesArray.length)
        {
          alert("You win!");
          //Update level, change array of pictures
          var updateLevel = this.state.level+1;
          updateChosenArray = [];
          this.setState({
            level: updateLevel,
            chosenArray: updateChosenArray,
            levelScore: 0
          })
        }
      }
      else
      {
          alert("You already pressed this. You lose!");
          if(this.state.highScore < currentScore)
          {
            this.setState({
              highScore: currentScore
            }) 
          }
          currentScore = 0;
          currentLevelScore = 0;
          updateChosenArray = [];
          this.setState({
            level: 1,
            chosenArray: updateChosenArray,
            overallScore: currentScore,
            levelScore: currentLevelScore
          })
      }
      console.log(this.state.chosenArray);
  }
  render() {
    return (
      <div>
        <Header 
        level={this.state.level}
        /> 
        {this.state.picturesArray.map(picture => {
          return(
            <Pictures 
            stuff={picture}
            click={this.handleThisClick}
            />
          )
        })}
        <Scores 
        score= {this.state.overallScore}
        highScore= {this.state.highScore}
        />
      </div>
    );
  }
}

export default App;

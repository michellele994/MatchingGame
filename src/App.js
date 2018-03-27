import React, { Component } from 'react';
import Header from "./components/Header";
import Pictures from "./components/Pictures";
import Scores from "./components/Scores";


var loadPictures = function(typeOfPicture, number)
  {
    let array = [];
    for (var i = 1; i < number+1; i++)
    {
      array.push("./images/"+typeOfPicture+i+".png");
    }
    return array;
  }
//array of 8 cows, 12 pigs, 16 chickens, 20 rabbits, 24 eggs
const cows = loadPictures("cow", 6);
const pigs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const chickens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const rabbits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const eggs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

class App extends Component {

  state = {
    level: 1,
    picturesArray: cows,
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
        //Increase the scores
        currentScore++;
        currentLevelScore++;

        //Update the state with the chosen array and the current score.
        this.setState({
            chosenArray: updateChosenArray,
            overallScore: currentScore,
            levelScore: currentLevelScore
        })

        this.randomizeArray(updatePicturesArray);
        console.log(currentLevelScore);
        console.log(currentScore);

        //If the levels' score is equal to the array length, user has won.
        if (currentLevelScore === updatePicturesArray.length)
        {
          console.log("You win!")
          //Update level, change array of pictures
          var updateLevel = this.state.level+1;
          this.resetGame(updateLevel, currentScore);
        }
      }
      else
      {
          console.log("You already pressed this. You lose!");
          if(this.state.highScore < currentScore)
          {
            this.setState({
              highScore: currentScore
            }) 
          }
          this.resetGame(1, 0);
      }
      console.log(this.state.chosenArray);
  }


  resetGame(level, runningScore)
  {
    let animals = [];
    switch (level)
    {
      case 1:

        animals = cows;
        break; 
      case 2:
        animals = pigs;
        break; 
      case 3:
        animals = chickens;
        break; 
      case 4:
        animals = rabbits;
        break;
      case 5:
        animals = eggs;
        break;  
      default: 
          animals = cows;
    }
    this.setState({
      level: level,
      picturesArray: animals,
      chosenArray: [],
      overallScore: runningScore,
      levelScore: 0
    })
  }


  randomizeArray(array)
  {
    //I learned how to shuffle arrays here: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    var j, x, i;
    for (i = array.length - 1; i > 0; i--)
    {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
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


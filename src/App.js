import React, { Component } from "react";
import CharacterCard from "./components/characters/CharacterCard";
import characters from "./characters.json";
import "./components/characters/characters.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters: characters,
  };

  clickCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(characters => characters.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        {this.state.characters.map(eachCharacter => (
          <CharacterCard
            clickCharacter={this.clickCharacter}
            id={eachCharacter.id}
            key={eachCharacter.id}
            name={eachCharacter.name}
            image={eachCharacter.image}
            occupation={eachCharacter.occupation}
            location={eachCharacter.location}
          />
        ))}
      </div>
      )
  }
}

export default App;

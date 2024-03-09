import React from 'react';
import './App.css';
import jsondict from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
  tid: number;
  cid: number;
  did: number;
  abbrev: string;
  pop: number;
  latitude: number;
  longitude: number;
}

const TeamData = jsondict.teams;

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h2>{oneTeam.school}</h2>
        <h2>{oneTeam.name}</h2>
        <p>
          Location: {oneTeam.city}, {oneTeam.state}
        </p>
      </div>
    );
  }
}

function TeamCards() {
  return (
    <div className="team-cards-container">
      {TeamData.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TeamCards />
    </div>
  );
}

export default App;

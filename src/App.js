import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app" style={{
        backgroundImage: "url('/images/forest-cats-bg.jpg')",
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}>
        <nav className="navbar">
          <h1>미돌이네 고양이 가족</h1>
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/gallery">갤러리</Link></li>
            <li><Link to="/guestbook">방명록</Link></li>
          </ul>
        </nav>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/guestbook" component={Guestbook} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
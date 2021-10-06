import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Inbox from './inbox.jsx';
import All_Inbox from './all_inbox.jsx';
import Top_bar from './top_bar.jsx';




const App = () => {

  
  
  
  
  function x() {

    document.getElementById("head").innerHTML = "S"
    

  }

  return (
    <div className='container'>
      <Header/>
      
      <div className="container-view" style={{}}></div>
      {/* <Inbox/> */}
      <Top_bar/>
      {/* <All_Inbox/> */}
     
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;

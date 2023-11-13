import './App.css';
import logo from './starknet.png'
import { useState } from 'react';
import GithubCorner from 'react-github-corner';


function App() {
  const [list, setList] = useState([]);

  function callMenu(menu) {
    if (menu == 'swap') {
      setList(['mySwap.xyz', 'Fibrous.finance', 'AVNU.fi', 'Jediswap.xyz', 'Sithswap.com', '10kswap.com', 'Nostra.finance'])
    }
    else if (menu == 'nft') {
      setList(['Flexing.gg', 'Pyramid.market'])
    }
    else if(menu == 'other'){
      setList(['Starknet.id', 'Activity Tracker'])
    }
    console.log(menu)
  }

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <body>
        
        <div className='flex-container'>
          <div className='box box1' onClick={() => callMenu('swap')}>
            <h2 className='menu'>SWAP</h2>
          </div>
          <div className='box box2' onClick={() => callMenu('nft')}>
            <h2 className='menu'>NFT</h2>
          </div>
          <div className='box box3' onClick={() => callMenu('other')}>
            <h2 className='menu'>OTHER</h2>
          </div>
        </div>
        <div className='flex-container'>

          {
            list.map(element => {
              return (
                <div className='site' onClick={() => openInNewTab('https://' + (element.startsWith('Activity Tracker') ? 'app.rhino.fi/trackers/STARKNET' : element))}>
                  <h2 className='link'>{element}</h2>
                </div>)
            })
          }


        </div>
        <GithubCorner href="https://github.com/berkaydemir6/starknet-shortcuts" />
      </body>
    </div>
  );
}

export default App;

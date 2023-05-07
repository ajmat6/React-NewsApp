import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import{
  BrowserRouter,
  Routes,
  Route,
  Link
}from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'



const App = () => {
  //to change pagesize easily
  // pagesize = 6;
  const pagesize = 6;

  // apikey = '8b51c3d983c244c7b952fb04c988cbf4';
  // apikey = process.env.REACT_APP_NEWS_API;
  const apikey = process.env.REACT_APP_NEWS_API;

  // state = {
  //   progress: 0
  // }

  const [Progress, setProgress] = useState(0);

  //No need of below function in function based component as we had made above:
  // setProgress = (progress) => {
  //   this.setState({progress: progress});
  // }
  
    return (
      <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar //for loading bar when we swtich during the routing
        color='#f11946'
        height={3} //to increase height of the loading bar

        // progress={this.state.progress} //to change progress
        progress={Progress} //to change progress
        />
        <Routes>
          //key element has to be passed to differentiate that this News component is different from the previous one otherwise it will continue to show previous News component
          <Route path='/' element={<News setProgress={setProgress} apikey={apikey} key='general' pageSize={pagesize} country='in' category="general"/>}/>
          <Route path='/sports' element={<News setProgress={setProgress} apikey={apikey} key='sports' pageSize={pagesize} country='in' category="sports"/>}/>
          <Route path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} key='entertainment' pageSize={pagesize} country='in' category="entertainment"/>}/>
          <Route path='/science' element={<News setProgress={setProgress} apikey={apikey} key='science' pageSize={pagesize} country='in' category="science"/>}/>
          <Route path='/business' element={<News setProgress={setProgress} apikey={apikey} key='business' pageSize={pagesize} country='in' category="business"/>}/>
          <Route path='/health' element={<News setProgress={setProgress} apikey={apikey} key='health' pageSize={pagesize} country='in' category="health"/>}/>
          <Route path='/technology' element={<News setProgress={setProgress} apikey={apikey} key='technology' pageSize={pagesize} country='in' category="technology"/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
}

export default App;
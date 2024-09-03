import './App.css'

import Navigation from './Components/Navigation'
import AfterNavigation from './Components/AfterNavigation'

import HeroSectionAdvertisement from './Components/HeroSectionAdvertisement'
import SmackDownSection from './Components/SmackDownSection'

import Trending from './Components/Trending'
import WWEShows from './Components/WWEShows'


function App() {

  return (
    <>
      <Navigation/>
      <AfterNavigation />
      
      <HeroSectionAdvertisement />
      <SmackDownSection />

      <Trending />
      <WWEShows />
    </>
  );
};

export default App;

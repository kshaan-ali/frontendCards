import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { infoAtomFamily } from './stores/atoms/cardinfo'

function App() {


  return (
    <div className='shadow-2xl rounded-2xl grid grid-cols-3 m-3 bg-slate-600'>
    <RecoilRoot>
      <Suspense fallback="loading..">
      <GetReady id={"kshaan-ali"}></GetReady>
      <GetReady id={"hkirat"}></GetReady>
      <GetReady id={"nwaliaez"}></GetReady>
      <GetReady id={"faizan619"}></GetReady>
      </Suspense>
      
    

    </RecoilRoot>
      
    </div>
  )
}
function GetReady({id}){
  let cardInfo=useRecoilValue(infoAtomFamily(id));
  console.log(cardInfo?.login)
  return <div >
    <Card name={cardInfo.name} username={cardInfo.login} following={cardInfo.following} 
    follower={cardInfo.followers} links={cardInfo.html_url}></Card>
    
  
  </div>
}
export default App

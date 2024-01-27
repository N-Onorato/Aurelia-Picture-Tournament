import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ImageInputGrid from './components/ImageInputGrid'
import './App.css'
import ImageItem from './components/ImageItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ImageInputGrid></ImageInputGrid>
      <ImageItem id="1" src="https://b.thumbs.redditmedia.com/i3u_rkfnO2d4_YjC7mn44cymTLP6EjFlwDR0wYAjq0o.png" />
      <ImageItem id="2" src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg" />
      <ImageItem id="3" src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import React from 'react'
import "./App.css"

function App() {
  //showing navigation bar

  return (
    <>
      <header>
          <div class="header">
              <i class="bi-list" id="bi-list"></i>
              <a href="#"><img src="https://tinyurl.com/37vk7jzm" alt="logo"/></a>
          </div>
          <div class="nav" id="nav">
              <i class="bi-x" id="bi-x"></i>
              <ul>
                  <li>Home</li>
                  <li id="about1">About</li>
                  <li id="power1">Power</li>
                  <li id="services1">Services</li>
                  <li id="partners1">Partners</li>
                  <li id="media">Media</li>
              </ul>
          </div>
        </header>
        <main>
            <div className="home">
                <img src="https://tinyurl.com/bdcwpzjr" alt=""/>
            </div>
            <div className="about">
                <img src="https://tinyurl.com/6byexdaw" alt=""/>
            </div>
            <div className="services">
                <img src="https://tinyurl.com/6byexdaw" alt=""/>
            </div>
            <div className="partners">
                <img src="https://tinyurl.com/6byexdaw" alt=""/>
            </div>
            <div className="blog">
                <img src="https://tinyurl.com/6byexdaw" alt=""/>
            </div>
            <div className=""></div>
            
        </main>
        <footer>
            <img src="https://tinyurl.com/275njx8z"  alt=""/>
        </footer>
    </>
  )
}

export default App
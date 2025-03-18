import React, { Component } from 'react'
import {Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat.jsx'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'

export class App extends Component {
  render() {
    return (
      <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/chat' element={<Chat />}/>
        <Route path='/profile' element={<ProfileUpdate/>}/>
      </Routes>
      </>
    )
  }
}

export default App
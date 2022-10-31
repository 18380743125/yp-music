import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="app">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mime">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <div className="main">
        <Suspense fallback="">{useRoutes(routes)}</Suspense>
      </div>
    </div>
  )
}

export default App

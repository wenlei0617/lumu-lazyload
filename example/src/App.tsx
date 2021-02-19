import React from 'react'
import Lazyload from '@lumu/lazyload'

const Loading = () => {
  return (
    <img
      className="test"
      src={require('./loading.gif')} />
  )
}

const ListItem = () => {
  return (
    <div style={{height: `3.2rem`, width: '3.75rem', overflow: 'hidden', flexShrink: 0}}>
      <p style={{fontSize: '.16rem'}}>这是我的标题</p>
      <img width="100%" src={`https://img01.yzcdn.cn/vant/apple-1.jpg?v=${Math.random()}`} alt="" />
    </div>
  )
}

const App = () => {
  return (
    <React.Fragment>
      {
        new Array(1000).fill(1).map((_, index) => (
          <Lazyload
            scrollContainer={document.getElementById('root') as HTMLDivElement} 
            debounce={500} 
            loading={<Loading/>} 
            key={index}>
            <ListItem key={index}/>
          </Lazyload>
        ))
      }
    </React.Fragment>
  )
}

export default App

import React from 'react'
import Lazyload from '@lumu/lazyload'

const Loading = () => {
  return (
    <img
      className="test"
      alt=""
      src={require('./loading.gif')} />
  )
}


const App = () => {
  return (
    <React.Fragment>
      {
        new Array(100).fill(1).map((_, index) => (
          <Lazyload
            resize
            scrollContainer={document.getElementById('root') as HTMLDivElement} 
            debounce={300} 
            loading={<Loading/>} 
            key={index}>
            <img width="100%" style={{height: '2.95rem'}} src={`https://img01.yzcdn.cn/vant/apple-1.jpg?v=${Math.random()}`} alt="" />
          </Lazyload>
        ))
      }
    </React.Fragment>
  )
}

export default App

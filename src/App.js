/*
 * @Author: 杜康
 * @Date: 2023-05-08 09:40:18
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-09 15:21:21
 * @FilePath: /react-learning/src/App.js
 */
// import React, { createRef } from 'react'
import { useState } from 'react'
import './jsx-css.css'
// const name = '杜康'
// const getAge = () => {
//   return 18
// }
// const flag = true

// const songs = [
//   { id: 0, name: '第一次爱的人' },
//   { id: 1, name: '爱你' }
// ]
// // 使用map做遍历列表，使用number/string的key，提高框架diff性能
// const getHTag = type => {
//   if (type === 1) {
//     return <h1>this is h1</h1>
//   }
//   if (type === 2) {
//     return <h2>this is h2</h2>
//   }
//   if (type === 3) {
//     return <h3>this is h3</h3>
//   }
//   return null
// }

// const twoStyle = {
//   color: 'blue',
//   fontSize: '24px'
// }

// // 函数组建
// // function App () {
// //   return (
// //     <div className="App">
// //       <p>{name}</p>
// //       <p>{getAge()}</p>
// //       <p>{flag ? '真棒' : '真菜'}</p>
// //       --- --- --- --- <br />
// //       <ul>
// //         {songs.map(song => <li key={song.id} > {song.name}</li>)}
// //       </ul>
// //       --- --- --- --- <br />
// //       {flag ? <span>this is a span</span > : null}
// //       <br />
// //       {true && <span>this is another span</span>}
// //       <br />
// //       --- --- --- --- <br />
// //       <p>{getHTag(1)}</p>
// //       <p>{getHTag(2)}</p>
// //       <p>{getHTag(3)}</p>
// //       --- --- --- --- <br />
// //       <p style={{ color: 'red', fontSize: '16px' }}>this is one style</p>
// //       <p style={twoStyle}>this is two style</p>
// //       <p className="jsx-css">this is jsx-css file style</p>
// //       <p className={flag ? 'jsx-css' : ''}>this is jsx-css active style</p>
// //     </div>
// //   )
// // }

// // 类组建
// class HelloComponent extends React.Component {
//   state = {
//     name: ' new comer',
//     counter: 0,
//     message: ''
//   }
//   msgRef = createRef()
//   changeName = (newName) => {
//     this.props.getSonMsg('我是HelloComponent的数据')
//     this.setState({
//       name: newName
//     })
//   }
//   changeCounter = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     })
//   }
//   inputChange = e => {
//     this.setState({
//       message: e.target.value
//     })
//     console.log(this.msgRef.current)
//     console.log(this.msgRef.current.value)
//   }
//   // 获取事件对象e
//   classClickHandler = (e, msg) => {
//     console.log('类数组件中的事件被触发了！', e, msg)
//   }
//   render () {
//     // 增加额外传参
//     return (
//       <div>
//         <div onClick={(e) => this.classClickHandler(e, 'this is msg')}>this is app class component</div>
//         ---- ---- ---- ---- <br />
//         <div>my name is {this.state.name}</div>
//         <br />
//         <button onClick={() => { this.changeName('dukang') }}>change name</button>
//         <br />
//         <button onClick={() => { this.changeCounter() }}>change counter {this.state.counter}</button>
//         ---- ---- ---- ---- <br />
//         {/* 受控组件 */}
//         <input value={this.state.message} onChange={(e) => this.inputChange(e)} ref={this.msgRef} />
//         <p>{this.state.message}</p>
//       </div >
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     message: 'this is father'
//   }
//   getSonMsg = (msg) => {
//     console.log(msg)
//   }
//   render () {
//     return (
//       <div>
//         <HelloComponent getSonMsg={this.getSonMsg} />
//         ---- ---- ---- ---- <br />
//         {Hello()}
//         ---- ---- ---- ---- <br />
//         <HelloSonComponent msg={this.state.message} />
//       </div>
//     )
//   }
// }

// function Hello () {
//   const clickHandler = () => {
//     console.log('函数组件中的事件被触发了！')
//   }
//   return (
//     <div onClick={clickHandler}>hello</div>
//   )
// }

// class HelloSonComponent extends React.Component {
//   render () {
//     return (
//       <p>this is HelloSon, {this.props.msg}</p>
//     )
//   }
// }

const list = [
  {
    name: 'intel',
    hello: 'no'
  },
  {
    name: 'amd',
    hello: 'yes'
  }
]

function Test ({ list }) {
  return (
    <div >
      {list.map(item => (
        <p key={item.name}>{item.hello}</p>
      ))}
    </div>
  )
}

// https://react.docschina.org/reference/react/useState#usestate
// 参考react hook的useState的写法
function Counter () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>{count}</button>
    </div>
  )
}

function App () {
  return (
    // <div>this is p, <Hello>不知道说什么</Hello></div>
    <div>
      <Test list={list}></Test>
      <Counter></Counter>
    </div>
  )
}

// function Hello ({ children }) {
//   return (
//     <div>子组件，{children}</div>
//   )
// }

export default App

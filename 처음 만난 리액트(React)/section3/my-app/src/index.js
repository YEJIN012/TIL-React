import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter_03/Library'
import Clock from './chapter_04/Clock';

// ReactDOM.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Clock/>
    </React.StrictMode>,
    document.getElementById('root')
  )
}, 1000); // 1000ms(=1s) 마다 render함수 실행(돔을 다시 쓴다)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

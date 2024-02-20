import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// function App() {

//   //let name = 'kwleeCoding';

//   //let [name, setName] = useState('kwleeCoding');

//   const [num, setNum] = useState(0);

//   const [numList, setNumList] = useState([]);

//   //setTimeout(() => {setNum(num=num+1)}, 1000);
 
//   //<div style={{color : "red"}}>{num}</div>

//   // <header className="App-header">
       
//   // <div className="number">{num}</div>

//   // </header>

//   function numRecording() {
//     setNumList([...numList, num]);

//     setNum(0);
//   }

//   return (
//     <div className="App">
//       <div>현재 숫자 : {num}</div>
//       <button onClick={() => {setNum(num+1)}}>숫자증가</button>
//       <button onClick={() => {setNum(num-1)}}>숫자감소</button>

//       <button onClick={numRecording}>숫자기록</button>
//       <h1>저장된 숫자</h1>
//       <ul>
//        {numList.map((num) => (
//           <li>{num}</li>
//        ))}
//       </ul>
//     </div>
//   );
// }

// const RecordForm = ({numList, setNumList}) => {

//   const [num, setNum] = useState(0);

//   return (
//     <div>
//       <div>현재 숫자 : {num}</div>
//       <button onClick={() => setNum(num+1)}>숫자 증가</button>
//       <button onClick={() => setNum(num-1)}>숫자 감소</button>
//       <button onClick={() => setNum(0)}>숫자 초기화</button>
//       <hr/>
//       <button onClick={() => setNumList([...numList, num])}>숫자 기록</button>
//       <button onClick={() => setNumList([])}>기록 초기화</button>
//     </div>
//   )
// }

// const RecordList = ({numList}) => {
//   return (
//     <div>
//       <h2>기록된 숫자</h2>
//       {numList.length > 0 ? <div>기록 있음</div> : <div>기록 없음</div>}

//       <ul>
//         {numList.map((num) => (
//             <li>{num}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// const App = () => {
  
//   const [numList, setNumList] = useState([]);

//   return (
//     <div style={{margin : "40px auto", 
//                  width : "800px", 
//                  textAlign : "center",
//                 }}>
//        <RecordForm numList={numList} setNumList={setNumList}/>
//        <RecordList numList={numList}/>
//     </div>
//   )
// }

// const App = () => {

//   const [text, setText] = useState("");
//   const [edit, setEdit] = useState(false);

//   let content = <div>
//                   {text}
//                   <button onClick={() => setEdit(true)}>수정</button>
//                 </div>

//   if(edit){
//     content = 
//     <div>
//         <input type="text" 
//                 value={text} 
//                 onChange={(e) => {
//                   console.log(e.target.value);
//                   setText(e.target.value);
//                 }}
//                 />
//         <button onClick={() => setEdit(false)}>수정</button>
//     </div>
//   }

//   return (
//     <>
//       {content}
//     </>
    
//   )
// }

//axios 설치 : npm install axios


const App = () => {

  const[posts, setPosts] = useState([]);

  useEffect( () => {
    // axios({
    //   method : 'GET',
    //   //url : 'https://jsonplaceholder.typicode.com/posts'
    //   url : 'https://jsonplaceholder.typicode.com/photos'
    // }).then(response => setPosts(response.data))

    axios.get('https://jsonplaceholder.typicode.com/photos')
         .then(response => setPosts(response.data))

    // try{
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    //   setPosts(response.data);
    // }catch(error){
    //   console.log(error);
    // }
    
  })

  return (
    <ul>
      {posts.map(post => (
          <li key={post.id}>
            <div>{post.title}</div>
            <div><img src={post.thumbnailUrl}/></div>
          </li>
      ))}
    </ul>
  )
}

export default App;

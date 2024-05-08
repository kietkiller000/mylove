import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [click, setclick]=useState(false);


  const handleClick = () => {
    const randomNumberx = Math.floor(Math.random() * 500) - 250;
    const randomNumbery = Math.floor(Math.random() * 500) - 250;
    setPosition(pre=> ({x:randomNumberx,y:randomNumbery})


  ); // Di chuyển nút sang phải 200px khi click
  };
  const handleButtonClick = () => {
    setclick(pre=>!pre) // Gọi hàm log khi button được click
  };

  return (
    <div className="App">
       <h1 className='title'>Làm người yêu anh nhá ?</h1>
      <img src="https://media.giphy.com/media/1hqb8LwPS2xCNCpWH8/giphy.gif?cid=790b7611gsmjv2q9v2lptbu371np3od80kqniuzvdeo44yox&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Example GIF" />
    <div>
<button onClick={handleButtonClick} className='button_yes'>
  Cóa
</button>
<button  style={{ transform: `translate(${position.x}px, ${position.y}px)` }} onMouseEnter={handleClick} className='button_no'>
  Khum
</button>
    </div>
    {click && (
        <div className="alert">
          <p className='message'>Anh cũng yêu em nhiều ❤️ </p>
          <img className='gif' src="https://media.giphy.com/media/hpQcDH5EfJRwxm03Uh/giphy.gif?cid=ecf05e47ksd5dikfjkj8eji7ioejc6k13q2ha83n0scd4tcm&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Example GIF" />
          
          
          <p className='message'> Đi chơi với anh không nào </p>
          
          <button className='button_no'  onClick={() =>setclick(false)}>Close</button>

        </div>
      )}
    </div>
  );
}

export default App;

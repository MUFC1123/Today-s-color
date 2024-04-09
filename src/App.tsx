import React, { useState } from 'react';
import './App.css';

// 生成された色を格納するための型を定義
type Color = string;

const App: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [numberOfColors, setNumberOfColors] = useState<number>(0);

  const generateRandomColor = (): Color => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const num = parseInt(event.target.value, 10);
    setNumberOfColors(num);
    const newColors = Array.from({ length: num }, () => generateRandomColor());
    setColors(newColors);
  };

  const changeSingleColor = (index: number): void => {
    setColors(colors.map((color, i) => (i === index ? generateRandomColor() : color)));
  };


  // "Today's color:" の各文字にランダムな色を適用する
  const colorfulTitle = "Today's color:".split('').map((char, index) => (
    <span key={index} style={{ color: generateRandomColor() }}>
      {char}
    </span>
  ));

  return (
    <div className="home" style={{ backgroundColor: 'white' }}>
      <h1 data-testid="colorful-title">{colorfulTitle}</h1>
      <select onChange={handleColorChange} value={numberOfColors.toString()}>
        <option value="0">Select number of colors</option>
        <option value="1">1 Color</option>
        <option value="2">2 Colors</option>
        <option value="3">3 Colors</option>
      </select>
      <div>
        {colors.map((color, index) => (
          <div key={index} style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
            <div style={{ backgroundColor: color, color: '#fff', padding: '10px', width: '550px' , height: '100px', borderRadius:'10px'}}>
              
            </div>
            <button className="change" onClick={() => changeSingleColor(index)}>Change</button>
          </div>
        ))}
      </div>
      {/* <Memo onSave={handleSave}/>
      {/* メモの一覧を表示 */}
      {/* <div className="notes">
        <h2>Saved Notes:</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul> */} */
      {/* </div> */}
    </div>
  );
}

export default App;
// import React, { useState } from 'react';

// type Props = {
//   onSave: (note: string) => void; // 親コンポーネントからの保存処理を呼び出すための関数
// };

// const Memo: React.FC<Props> = ({ onSave }) => {
//   const [note, setNote] = useState<string>('');

//   const handleSave = () => {
//     onSave(note);
//     setNote(''); // メモの内容をクリア
//   };

//   return (
//     <div>
//       <textarea
//         placeholder="この色合わせについてのメモを入力..."
//         value={note}
//         onChange={(e) => setNote(e.target.value)}
//       ></textarea>
//       <button onClick={handleSave}>保存</button>
//     </div>
//   );
// };

// export default Memo;
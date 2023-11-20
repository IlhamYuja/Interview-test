import React, {useState} from "react";

const TableRenderer = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleInput = (e) => {
      const value = e.target.value;
      if (!isNaN(value) && value !== '') {
        setInputValue(value);
        setError('');
      } else {
        setError('Input tidak sesuai');
      }
    }
    
    const handleData = () => {
        if (inputValue !== '') {
            const newData ={
                id : data.length + 1,
                value: parseInt(inputValue)
            }
            setData([ data, newData]);
            setInputValue('')
            setError('')
        } else{
            setError('input harus terisi')
        }
    }

    return (
        <div>
            <input type="text" 
            value={inputValue} 
            onChange={handleInput}
            placeholder="masukan angka"
            />
        <button onClick={handleData}>Tambah</button>
        {error && <p>{error}</p>}
        </div>

    )
  }

  export default TableRenderer;

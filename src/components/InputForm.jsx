

import React, { useContext, useState } from 'react';
import { postlist } from '../store/store_file';

function InputForm() {
  
    const { addpost } = useContext(postlist);

  
    const [good1, setGood1] = useState('');
    const [good2, setGood2] = useState('');
    const [good3, setGood3] = useState('');
    const [bad1, setBad1] = useState('');
    const [bad2, setBad2] = useState('');
    const [bad3, setBad3] = useState('');
    const [bad4, setBad4] = useState('');

   
    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        const formData = {
            good1,
            good2,
            good3,
            bad1,
            bad2,
            bad3,
            bad4,
        };

       
        addpost(formData);
        console.log("data",formData)
    };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
            <form onSubmit={handleSubmit}>
                <h1>Good Things</h1>
                <div className="mb-3">
                    <input
                        type="text"
                        value={good1}
                        placeholder="good1"
                        onChange={(e) => setGood1(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        value={good2}
                        placeholder="good2"
                        onChange={(e) => setGood2(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        value={good3}
                        placeholder="good3"
                        onChange={(e) => setGood3(e.target.value)}
                        className="form-control"
                    />
                </div>

                <h1>Enter Bad Things</h1>
                <div className="mb-3">
                    <input
                        type="text"
                        value={bad1}
                        placeholder="bad1"
                        onChange={(e) => setBad1(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        value={bad2}
                        placeholder="bad2"
                        onChange={(e) => setBad2(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        value={bad3}
                        placeholder="bad3"
                        onChange={(e) => setBad3(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        value={bad4}
                        placeholder="remember Things"
                        onChange={(e) => setBad4(e.target.value)}
                        className="form-control"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default InputForm;

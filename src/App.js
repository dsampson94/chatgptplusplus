import './tailwind.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { fetchChatGPTResponse } from './redux/actions/actions';

function App() {

    const dispatch = useDispatch();

    const [prompt, setPrompt] = useState('');

    const response = useSelector(createSelector([state => state.chatGPT], chatGPT => chatGPT?.response));

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchChatGPTResponse(prompt));
    };

    return (
        <div className="bg-gray-800 min-h-screen text-white flex flex-col justify-center">

            <p className="text-lg md:text-xl lg:text-2xl mx-auto p-4">
                { response?.data?.choices[0]?.text }
            </p>

            <form onSubmit={ handleSubmit }>

                <div className="input-container">
                    <input name="input"
                           className="bg-gray-500 text-white rounded-lg p-2 w-1/2"
                           type="text"
                           value={ prompt }
                           onChange={ e => setPrompt(e.target.value) }
                           autoFocus />
                    <p></p>
                </div>

            </form>
        </div>
    );
}

export default App;

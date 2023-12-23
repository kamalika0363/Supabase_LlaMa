"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { query } from '@/utils/query';

const SummaryBox: React.FC = () => {
    const [inputData, setInputData] = useState<string>('');
    const [output, setOutput] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await query({ inputs: inputData });
                setOutput(result[0] && result[0]?.summary_text);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [inputData]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Additional actions on form submission if needed
    };

    return (
        <div className="sm:w-1/2 bg-black sm:p-6 rounded-xl flex flex-col item-center justify-center md:h-full h-96 border border-[#272728] overflow-auto p-4 ">
            <div className="bg-black p-5 mt-2 sm:mt-0 rounded-xl item-center justify-center w-full h-96 border border-[#27272a] overflow-auto">
                <p className="justify-center mb-2 font-bold text-gray-300">Summarized Data</p>
                <h1 className="text-gray-200">{output}</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex mt-20 space-x-4 rounded-lg">
                <input
                    id="link"
                    name="link"
                    value={inputData}
                    onChange={handleInputChange}
                    className="text-gray-300 rounded-xl p-2 pl-5 w-full border border-[#27272a] bg-black font-semibold"
                    placeholder="Add a link or text"
                />
                <button
                    type="submit"
                    className="text-white rounded-xl p-3 border border-[#27272a]"
                >
                    <img src="Icon.svg" alt="Add" />
                </button>
            </form>
        </div>
    );
};

export default SummaryBox;
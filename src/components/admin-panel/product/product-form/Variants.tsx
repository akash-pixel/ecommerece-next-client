"use client"


import React, { useState } from 'react';
import './styles.css';
import { IProductCreate } from '@/interface/product';

interface IProps {
    product?: IProductCreate
}


const Variants = ({ }: IProps) => {
    const [option, setOption] = useState('');
    const [size, setSize] = useState('');

    const handleOptionChange = (e: any) => {
        setOption(e.target.value);
    };

    const handleSizeChange = (e: any) => {
        setSize(e.target.value);
    };
    console.log("Variant")

    return (
        <div className="variants-container">
            <h3 className="variants-heading">Variants</h3>
            <label className="options-label">OPTIONS</label>
            <div className="variants-form">
                <SelectBox
                    options={['Size', 'Color', 'Material']}
                    value={option}
                    onChange={handleOptionChange}
                />
                <InputBox
                    placeholder="Enter size"
                    value={size}
                    onChange={handleSizeChange}
                />
                <button className="add-option-button">Add another option</button>
            </div>
        </div>
    );
};

const InputBox = ({ placeholder, value, onChange }: any) => {
    return (
        <input
            type="text"
            className="input-box"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};


const SelectBox = ({ options, value, onChange }: any) => {
    return (
        <select className="select-box" value={value} onChange={onChange}>
            {options.map((option: any, index: any) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Variants;


import React, { ChangeEventHandler } from 'react';
import './styles.css';

interface IItem {
    Id: number;
    Name: string;
    // [key: string]: string | number;
}

interface IProps {
    label: string;
    options: IItem[];
    onChange: ChangeEventHandler;
    value: number;
}

const SelectDropdown = ({ label, options, onChange, value }: IProps) => {
    return (
        <div className="select-dropdown">
            <label className="select-label">{label}</label>
            <select
                className="select-input"
                onChange={onChange}
                value={value}
            >
                {options.map((option) => (
                    <option key={option.Id} value={option.Id}>
                        {option.Name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectDropdown;

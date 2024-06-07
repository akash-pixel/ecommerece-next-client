import React from 'react';

interface IProps {
    SetPageNumber: CallableFunction;
    PageNumber: number;
}

const Pagination = ({ SetPageNumber, PageNumber }: IProps) => {

    function next(num = 1) {
        SetPageNumber((x: number) => x + num)
    }

    function previous(num = 1) {

        if (PageNumber <= 1) {
            return;
        }

        SetPageNumber((x: number) => x - num);
    }

    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mt-4">
            <div className="text-sm text-gray-700">Displaying 1 to 7 of 100 entries</div>
            <div className="inline-flex -space-x-px">


                <button onClick={() => previous()} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l hover:bg-gray-100">Previous</button>


                <button onClick={() => SetPageNumber(PageNumber + 1)} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100">{PageNumber + 1}</button>
                <button onClick={() => SetPageNumber(PageNumber + 2)} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100">{PageNumber + 2}</button>
                <button onClick={() => SetPageNumber(PageNumber + 3)} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100">{PageNumber + 3}</button>

                <button onClick={() => next()} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r hover:bg-gray-100">Next</button>
            </div>
        </div>
    );
};

export default Pagination;

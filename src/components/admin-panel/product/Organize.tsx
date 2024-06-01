import { HttpRequest, ICategoryResponse } from '@/app/http.request.service';
import { makeToast } from '@/common/helper';
import { ICategory } from '@/components/category.add.edit.component';
import MyModal from '@/components/category.modal';
import React, { useEffect, useState } from 'react';

const Organize = () => {

    const [categories, setCategories] = useState<ICategoryResponse[]>([]);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (data: ICategory) => {
        const category = await HttpRequest.addCategory(data);

        if (category)
            makeToast("Category added successfully!")
    };

    async function fetchData() {
        const category = await HttpRequest.getCategoryList();

        if (category) {
            setCategories(category);
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-4">Organize</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700">Vendor</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Select Vendor</option>
                        {/* Add vendor options here */}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Category</label>
                    <div className="flex items-center">
                        <select className="w-full p-2 border border-gray-300 rounded mr-2">
                            {
                                categories.map(category => <option key={category.Id}>{category.Name}</option>)
                            }

                        </select>
                        <button onClick={handleOpen} className="text-purple-600">Add new category</button>
                        <MyModal open={open} onClose={handleClose} onSubmit={handleSubmit} />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700">Collection</label>
                    <input type="text" placeholder="Collection" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700">Status</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Published</option>
                        {/* Add other status options here */}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Tags</label>
                    <div className="flex flex-wrap gap-2">
                        {/* Example tags */}
                        <span className="px-2 py-1 bg-gray-200 rounded">Normal</span>
                        <span className="px-2 py-1 bg-gray-200 rounded">Standard</span>
                        <span className="px-2 py-1 bg-gray-200 rounded">Premium</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organize;

import { HttpRequest, ICategoryResponse } from '@/app/http.request.service';
import { makeToast } from '@/common/helper';
import { ICategory } from '@/components/category.add.edit.component';
import MyModal from '@/components/admin-panel/category-modal/category.modal';
import { IProductCreate } from '@/interface/product';
import React, { useEffect, useState } from 'react';
import "./styles.css"

interface IProps {
    Product?: IProductCreate
}


const Organize = ({ }: IProps) => {

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

    const Badge = ({ text }: { text: string }) => {
        return (
            <span className="badge">{text}</span>
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="product-info-container">
            <h3 className="sub-heading">Organize</h3>
            <div className="space-y-4">
                {/* <div>
                    <label className="block text-gray-700">Vendor</label>
                    <select className="w-full p-2 border border-gray-300 rounded text-gray-500 bg-white">
                        <option>Select Vendor</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Category</label>
                    <div className="flex items-center">
                        <select className="w-full p-2 border border-gray-300 rounded mr-2 text-gray-500 bg-white">
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
                    <input type="text" placeholder="Collection" className="w-full p-2 border border-gray-300 rounded text-gray-500 bg-white" />
                </div>
                <div>
                    <label className="block text-gray-700">Status</label>
                    <select className="w-full p-2 border border-gray-300 rounded text-gray-500 bg-white">
                        <option>Published</option>
                    </select>
                </div> */}
                <div className="organize-form-group">
                    <label className="product-info-label">Vendor</label>
                    <select className="organize-form-select">
                        <option>Select Vendor</option>
                        {/* Add vendor options here */}
                    </select>
                </div>
                <div className="organize-form-group">
                    <label className="product-info-label">Category</label>
                    <div className="organize-form-category">
                        <select className="organize-form-select organize-form-select-category">
                            {
                                categories.map(category => <option key={category.Id}>{category.Name}</option>)
                            }
                        </select>
                        <button onClick={handleOpen} className="organize-form-button">Add new category</button>
                        <MyModal open={open} onClose={handleClose} onSubmit={handleSubmit} />
                    </div>
                </div>
                <div className="organize-form-group">
                    <label className="product-info-label">Collection</label>
                    <input type="text" placeholder="Collection" className="organize-form-input" />
                </div>
                <div className="organize-form-group">
                    <label className="product-info-label">Status</label>
                    <select className="organize-form-select">
                        <option>Published</option>
                        {/* Add other status options here */}
                    </select>
                </div>


                <div>
                    <label className="block text-gray-700">Tags</label>
                    <div className="flex flex-wrap gap-2">
                        <Badge text="Normal" />
                        <Badge text="Standard" />
                        <Badge text="Premium" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organize;

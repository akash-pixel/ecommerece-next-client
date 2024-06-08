import { HttpRequest, ICategoryResponse } from '@/app/http.request.service';
import { makeToast } from '@/common/helper';
import { ICategory } from '@/components/category.add.edit.component';
import MyModal from '@/components/admin-panel/category-modal/category.modal';
import { IProductCreate } from '@/interface/product';
import React, { useEffect, useState } from 'react';
import "./styles.css"
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateProductOrganize } from '@/redux/slice/product.slice';

interface IProps {
    Product?: IProductCreate
}


const Organize = ({ }: IProps) => {

    const productOrgnize = useAppSelector((state) => state.product.Organize);
    const dispatch = useAppDispatch();

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

    const handleDropdownSelect = (e: any) => {
        dispatch(updateProductOrganize({ ...productOrgnize, [e.target.name]: e.target.value }));
    }

    const handleTextChange = (e: any) => {
        dispatch(updateProductOrganize({ ...productOrgnize, [e.target.name]: e.target.value }));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="product-info-container">
            <h3 className="sub-heading">Organize</h3>
            <div className="space-y-4">
                <div className="organize-form-group">
                    <label className="product-info-label">Vendor</label>
                    <select className="organize-form-select" name="VendorId" onChange={handleDropdownSelect} >
                        <option>Select Vendor</option>
                    </select>
                </div>
                <div className="organize-form-group">
                    <label className="product-info-label">Category</label>
                    <div className="organize-form-category">
                        <select className="organize-form-select organize-form-select-category" name='CategoryId' onChange={handleDropdownSelect} value={productOrgnize.CategoryId} >
                            {
                                categories.map(category => <option key={category.Id} value={category.Id}>{category.Name}</option>)
                            }
                        </select>
                        <button onClick={handleOpen} className="organize-form-button">Add new category</button>
                        <MyModal open={open} onClose={handleClose} onSubmit={handleSubmit} />
                    </div>
                </div>
                <div className="organize-form-group">
                    <label className="product-info-label">Collection</label>
                    <input type="text" value={productOrgnize.Collection} onChange={handleTextChange} placeholder="Collection" className="organize-form-input" />
                </div>
                <div className="organize-form-group">
                    <label className="product-info-label">Status</label>
                    <select className="organize-form-select" name='StatusId' value={productOrgnize.StatusId} onChange={handleDropdownSelect} >
                        <option>Published</option>
                        <option>Scheduled</option>
                        <option>Inactive</option>
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

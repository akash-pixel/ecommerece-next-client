"use client"
import { IProductCreate } from '@/interface/product';
import React from 'react';
import "./styles.css";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateProductInformation } from '@/redux/slice/product.slice';


interface IProps {
    product?: IProductCreate;

    setProduct?: any;
}

const ProductInformation = ({ }: IProps) => {

    const productInfo = useAppSelector((state) => state.product.Information);
    const dispatch = useAppDispatch();


    const handleTextChange = (e: any) => {
        // setProduct({ ...product, [e.target.name]: e.target.value })
        dispatch(updateProductInformation({ ...productInfo, [e.target.name]: e.target.value }))
    }

    return (
        <div className="product-info-container">
            <h3 className="sub-heading">Product information</h3>
            <div className="product-info-content">

                <div className="product-info-item">
                    <label className="product-info-label">Name</label>
                    <input value={productInfo.Name} name='Name'
                        type="text" placeholder="Product title"
                        className="product-info-input"
                        onChange={handleTextChange} />
                </div>

                <div className="product-info-grid">
                    <div className="product-info-item">
                        <label className="product-info-label">SKU</label>
                        <input type="text" value={productInfo.SKU} name='SKU'
                            placeholder="SKU" className="product-info-input"
                            onChange={handleTextChange} />
                    </div>
                    <div className="product-info-item">
                        <label className="product-info-label">Barcode</label>
                        <input type="text" name="Barcode"
                            value={productInfo.Barcode} placeholder="0123-4567"
                            className="product-info-input"
                            onChange={handleTextChange} />
                    </div>
                </div>
                <div className="product-info-item">
                    <label className="product-info-label">Description (Optional)</label>
                    <textarea placeholder="Product Description"
                        name='Description' value={productInfo.Description}
                        className="product-info-textarea"
                        onChange={handleTextChange}
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;

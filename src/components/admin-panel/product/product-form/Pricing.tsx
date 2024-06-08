import { isPostiveNumber } from '@/common/utils';
import { IProductCreate } from '@/interface/product';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateProductPricing } from '@/redux/slice/product.slice';
import React from 'react';
import { useDispatch } from 'react-redux';

interface IProps {
    Product?: IProductCreate
}

const Pricing = ({ }: IProps) => {

    const productPricing = useAppSelector(state => state.product.Pricing);
    const dispatch = useAppDispatch();


    const handleNumberChange = (e: any) => {

        dispatch(updateProductPricing({ ...productPricing, [e.target.name]: e.target.value }));
    }

    console.log("Pricing")

    return (
        <div className="product-info-container">
            <h3 className="sub-heading">Pricing</h3>
            <div className="space-y-4">
                <div className="product-info-item">
                    <label className="product-info-label">Base Price</label>
                    <input type="number" placeholder="Price"
                        name="BasePrice" className="product-info-input"
                        value={productPricing.BasePrice}
                        onChange={handleNumberChange}
                    />
                </div>
                <div className="product-info-item">
                    <label className="product-info-label">Discounted Price</label>
                    <input type="number" placeholder="Discounted Price"
                        name="DiscountPrice" className="product-info-input"
                        value={productPricing.DiscountPrice}
                        onChange={handleNumberChange} />
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <label className="product-info-label">Charge tax on this product</label>
                </div>
            </div>
        </div>

    );
};

export default Pricing;

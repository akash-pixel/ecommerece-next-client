"use client"

import React from 'react';
import './styles.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProductCreate, IProductSavePayload } from '@/interface/product';
import { HttpRequest } from '@/app/http.request.service';
import { makeToast } from '@/common/helper';
import { TOAST_TYPE } from '@/constant';
import { useRouter } from 'next/navigation';
import { resetProduct } from '@/redux/slice/product.slice';
import { ProductStatusLookup } from '@/data';


const Header = () => {
    const router = useRouter();
    const product = useAppSelector(state => state.product);
    const dispatch = useAppDispatch();

    const handleSubmit = async (saveAsDraft = false) => {

        let savedProduct;
        const saveProductPayload = mapProduct(product, saveAsDraft);
        if (!product.Id) {
            savedProduct = await HttpRequest.saveProduct(saveProductPayload);
        } else {
            savedProduct = await HttpRequest.updateProduct(product.Id, saveProductPayload);
        }

        if (!savedProduct) {
            makeToast("Please check product details", TOAST_TYPE.ERROR);
        } else {
            makeToast("Product saved successfully");
            resetStateAndRedirect();
        }

    };

    function resetStateAndRedirect() {
        dispatch(resetProduct({}))
        router.push('/admin/product')
    }

    function mapProduct(product: IProductCreate, saveAsDraft: boolean): IProductSavePayload {
        return {
            Name: product.Information.Name,
            Description: product.Information.Description,
            SKU: product.Information.SKU,
            Price: product.Pricing.BasePrice,
            Quantity: +product.Inventory.Quantity,
            ProductInventoryId: product.Inventory.Id,
            CategoryId: product.Organize.CategoryId,
            StatusId: saveAsDraft ? ProductStatusLookup.SCEDULED : ProductStatusLookup.PUBLISHED,
        }
    }

    const handleCancel = () => {
        resetStateAndRedirect();
    }

    return (
        <div className="header-container">
            <h2 className="header-title">Add a new Product</h2>
            <div className="header-buttons">
                <button className="header-button discard-button" onClick={handleCancel}>Discard</button>
                <button className="header-button draft-button" onClick={() => handleSubmit(true)} >Save draft</button>
                <button className="header-button publish-button" onClick={() => handleSubmit()} >Publish product</button>
            </div>
        </div>
    );
};

export default Header;


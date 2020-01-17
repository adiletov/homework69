import React from 'react';
import Layout from "../Layout/layout";
import FoodList from "../FoodList/foodList";
import OrderDishes from "../OrderDishes/orderDishes";
import './content.css';

const Content = () => {
    return (
        <div>
            <Layout>
                <div className="block">
                    <FoodList/>
                    <OrderDishes/>
                </div>
            </Layout>
        </div>
    );
};

export default Content;
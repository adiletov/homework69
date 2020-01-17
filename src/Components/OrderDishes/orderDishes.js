import React, {Component} from 'react';
import './orderDishes.css';
import {connect} from "react-redux";
import {removeDish} from "../../Actions/dishesActions";
import {Modal} from "reactstrap";
import {postOrders} from "../../Actions/orderActions";

class OrderDishes extends Component {
    state={
        name: '',
        telephone : '',
        email : '',
        modal: false,
    };
    orderHandler = () => {
        for (const dish in this.props.numberOfDishes) {
            if (this.props.numberOfDishes[dish] === 0){
                delete this.props.numberOfDishes[dish]
            }
        }

        const order = {
            name: this.state.name,
            telephone: this.state.telephone,
            email: this.state.email,
            orders: this.props.numberOfDishes,
        };
        this.props.postOrders(order)
        this.setState({modal: false})
    };

    getValueInput = (e) => {
        this.setState({[e.target.name] : e.target.value})
    };

    btnModalClick = () =>{
        this.setState({modal: true})
    };
    btnModalClose =() => {
        this.setState({modal: false})
    };
    render() {
        return (
            <div className="orderCard">
                {Object.keys(this.props.numberOfDishes).map(d =>
                    <div key={d}>
                        {this.props.numberOfDishes[d] !== 0 ?
                        <div>
                            <p>{d} : {this.props.numberOfDishes[d]}</p>
                            <button onClick={()=>this.props.removeDish(d)}>X</button>
                        </div>: null
                    }
                </div>)}


                {this.props.totalPrice !== 0 ?
                    <div>
                        <p>Цена за доставку : <b>{this.props.delivery}</b> сом</p>
                        <p>Итого: <b>{this.props.delivery + this.props.totalPrice}</b> сом</p>
                        <button onClick={this.btnModalClick}>Сделать заказ</button>
                    </div>: <div>Заказов нет</div>
                }


                <Modal isOpen={this.state.modal}>
                        <div>
                            <input type="text" placeholder="Ваше имя" name="name" onChange={this.getValueInput}/>
                            <input type="text" name="telephone" placeholder="телефон" onChange={this.getValueInput}/>
                            <input type="email" name="email" placeholder="Ваш email" onChange={this.getValueInput}/>
                            <input type="text" disabled value={'К оплате: '  + (this.props.delivery + this.props.totalPrice) + 'сом'}/>
                            <button onClick={()=>this.orderHandler()}>Отправить заказ!</button>
                            <button onClick={this.btnModalClose}>X</button>
                        </div>
                    }
                </Modal>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    numberOfDishes: state.dr.numberOfDishes,
    totalPrice: state.dr.totalPrice,
    delivery: state.dr.delivery,
    dishes: state.dr.dishes,
    loading: state.order.loading
});
const mapDispatchToprops = dispatch => ({
    removeDish: (dish)=> dispatch(removeDish(dish)),
    postOrders: (order) => dispatch(postOrders(order))
});
export default connect(mapStateToProps, mapDispatchToprops)(OrderDishes);


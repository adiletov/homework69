import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDishes} from "../../Actions/orderActions";
import './footList.css';
import {addDish} from "../../Actions/dishesActions";
import {Spinner} from "reactstrap";

class FoodList extends Component {
    componentDidMount() {
        this.props.getDishes();
    }

    render() {
        return (
            <div>
                {this.props.loading ? Object.keys(this.props.dishes).map(id => <div className="cardDish" key={id}>
                    <img className="imgDish" src={this.props.dishes[id].images} alt=""/>
                    <div className="infoDish">
                        <h3>{this.props.dishes[id].dishName}</h3>
                        <p>{this.props.dishes[id].cost} сом</p>
                        <button onClick={()=>this.props.addDish(id)} className="btnOrder">Добавить</button>
                    </div>
                </div>): <div className="spinner"><Spinner/></div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.order.loading,
    dishes : state.dr.dishes
});
const mapDispatchToProps = dispatch => ({
        getDishes: () => dispatch(getDishes()),
        addDish: (dish) => dispatch(addDish(dish))

});
export default connect(mapStateToProps, mapDispatchToProps) (FoodList);
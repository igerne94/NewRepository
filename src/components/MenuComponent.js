import React, { Component} from 'react';
import { Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent.js';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null  
        };
        console.log('menu component constructor is invoked')
    }

    componentDidMount(){
        console.log('menu component didMount is invoked')

    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">

                <Card key={dish.id}
                    onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>

                </div>
            );
        });

        console.log('menu component render is invoked')


        return ( 
            <div className="container">
                <div className="row">
                   {menu}
                </div>
                <div className="row">
                  <Dishdetail selectedDish={this.state.selectedDish} />
                </div>
            </div>
        );
    }
}

export default Menu;
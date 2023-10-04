import React, { Component } from 'react'
import './Product.css'
import MovieIcon from '@mui/icons-material/Movie';
import PaidIcon from '@mui/icons-material/Paid';

export default class Product extends Component {

    clickHandler(id) {
        this.props.onAddProduct(id)
    }

    filter() {

        let filtered = this.state.shoppingCart.filter(product => {
            return product.price > 8
        })

        this.setState({
            shoppingCart: filtered
        })
    }



    render() {

        let { desc, id, title, price, img } = this.props

        return (
            <div class=" parent-shopha">


                <div class="shopha">





                    <div class="icon-title">   <MovieIcon />
                        {title}
                    </div>

                    <img class="shop-item-image " src={img} />
                    <div class="reg-box">
                        <div class="reg">



                            {desc}
                        </div>
                    </div>



                    <span class="shop-item-price">

                        <PaidIcon />

                        {price}

                        تومان
                    </span>

                    <button
                        class=" btn-primary-film shop-item-button"
                        type="button"
                        onClick={this.clickHandler.bind(this, id)}>
                        خرید

                        <img className='shop-delete-image ' src="shop-white.png" />

                    </button>





                </div>

            </div>
        )
    }
}

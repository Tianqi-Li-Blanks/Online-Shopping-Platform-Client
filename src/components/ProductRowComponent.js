import React from "react";
import {Link} from "react-router-dom";
import ProductService from "../services/ProductService";

export default class ProductRowComponent extends React.Component {
    state = {
        product: this.props.product

    }

    render = () => (
        <tr>
            <td>
                <Link to={`/search/${this.state.product.productName}`}>
                    {this.state.product.productName}
                </Link>
            </td>
            <td>{this.state.product.price}</td>
            <td className="d-none d-md-table-cell">{this.state.product.details}</td>
            <td>
                {this.props.type === 'buyer' &&
                    <Link to='/success'>
                        <button className='btn btn-success'>
                            <i className="fa fa-cart-plus" aria-hidden="true"></i>
                        </button>
                    </Link>
                }
                {this.props.type === 'dad' &&
                    <Link to='/login'>
                        <button className='btn btn-success'>
                            <i className="fa fa-cart-plus" aria-hidden="true"></i>
                        </button>
                    </Link>
                }
            </td>

            {/*<td>*/}
            {/*<button onClick={() => {ProductService.deleteProduct(this.state.product.id)}}>*/}
            {/*    delete*/}
            {/*</button>*/}
            {/*</td>*/}

        </tr>
    )
}

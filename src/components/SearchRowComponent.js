import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
export default class SearchRowComponent extends React.Component {
    state = {
        product: this.props.product
    }

    render = () => (
        <tr>
            {console.log(this.props.product)}
            <td>
                <Link to={`/details/${this.state.product.asin}`}>
                    {this.state.product.title}
                </Link>
            </td>
            <td>{this.state.product.price.current_price}</td>
            <td className="d-none d-md-table-cell"><img src = {this.state.product.thumbnail}/></td>

        </tr>
    )
}

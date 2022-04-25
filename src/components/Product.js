import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../contexts/ProductContext'

export default class Product extends Component {

    static contextType = ProductContext;

    render() {
        const myProducts = this.context
        return (

            <div className='container'>
                <div className='row mt-1'>

                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
                                <Link className='link-light' to='/productlist'>Go To Movie List</Link>
                                <span className="navbar"></span>
                            </button>
                        </div>
                    </nav>
                </div>
                <div className='row mt-5 '>
                    <div className="card-group ">
                        {myProducts.map((item, i) => (

                            <div key={item.id} className="card">
                                <img src={item.imageURL} className="card-img-top " alt="..." height="600" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p ></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>













        )
    }
}

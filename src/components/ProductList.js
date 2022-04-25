import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../contexts/ProductContext'

export default class Detail extends Component {

    static contextType = ProductContext;

    render() {
        const myProducts = this.context
        return (
            <div className='container'>
                <div className='row'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Name</th>
                                <th scope="col">Director</th>
                                <th scope="col">Awards</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myProducts.map((item) => (

                                <tr key={item.id} >
                                    <th scope="row"></th>
                                    <td>{item.title} </td>
                                    <td>{item.director}</td>
                                    <td>{item.awards}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className=' bg-dark '><Link className='link-light' to='/'>Turn Back</Link> </button>
                </div>
            </div>


        )
    }
}

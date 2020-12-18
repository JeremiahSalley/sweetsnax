import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./customerOrder.css";
import axios from "axios";
import Receipt from "./Receipt.js";
import { Link, withRouter } from 'react-router-dom'

class customerOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    if (email) {
      axios
        .get(`https://sweetsnaxapi.herokuapp.com/orders/${email}`)
        .then((response) => {
          console.log(response);
          const orders = response.data[0];
          console.log(orders);
          this.props.history.push(`/receipt/${email}`)
        })
        .catch((error) => {
          console.log(error);
        });
    } 
    else {
      alert("Email does not match our systems");
    }
  };
  render() {
    let allOrders = this.state.orders.map((orders, i) => {
      if (orders.email === orders.email) {
        return <Receipt orders={orders} key={i} />;
      }
    });
    return (
      <div className="getOrders">
        <form onSubmit={this.submitHandler} id="form">
          <TextField
            id="email"
            placeholder="Email"
            variant="outlined"
            size="large"
            height="6px"
            style={{ margin: "20px auto" }}
          />
          
            <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                id="butt"
                style={{ margin: "20px auto" }}
            >
                Get Order
            </Button>
          
          
        </form>
        <div className="container">{allOrders}</div>
      </div>
    );
  }
}

export default withRouter(customerOrder);

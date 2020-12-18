import React, { Component } from "react";
import axios from "axios";
import "./order.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 175,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    // transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
class Receipt extends Component {
  constructor(props) {
    super();
    this.state ={
        orders: []
    }
    console.log(props);
  }

  componentDidMount() {
    axios
      .get(`https://sweetsnaxapi.herokuapp.com/orders/${this.props.match.params.email}`)
      .then((response) => {
        console.log(response);
        const orders = response.data[0];
        console.log(orders);
        this.setState({orders: orders})
      })
      .catch((error) => {
        console.log(error);
      });
  }


  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .put(`https://sweetsnaxapi.herokuapp.com/update/${this.props.match.params.email}`, this.state)
      .then((response) => {
        console.log(response);
        alert("Order been placed thank you")
      })
      .catch((error) => {
        console.log(error);
      });
  };






  render(props) {
      console.log(this.state.orders)
    return (
      <div className="cardItems">
        <Card>
          <h1>Place Order</h1>
          <form onSubmit={this.submitHandler}>
            <div className="items">
              <TextField
                // placeholder="Full Name"
                name="name"
                // value={name}
                value={this.state.orders.name}
                variant="outlined"
                onChange={this.changeHandler}
              />
              <TextField
                // placeholder="Email"
                // name="email"
                // value={email}
                value={this.state.orders.email}
                variant="outlined"
                onChange={this.changeHandler}
              />
              <TextField
                // placeholder="336-555-1155"
                // name="phone"
                // value={phone}
                value={this.state.orders.phone}
                variant="outlined"
                onChange={this.changeHandler}
              />
              <TextField
                // placeholder="Event"
                // name="event"
                // value={event}
                value={this.state.orders.event}
                variant="outlined"
                onChange={this.changeHandler}
              />
              <TextField
                // placeholder="Address"
                // name="address"
                // value={address}
                value={this.state.orders.address}
                variant="outlined"
                onChange={this.changeHandler}
              />
              <TextField
                // placeholder="Date"
                // type="date"
                // name="date"
                // value={date}
                value={this.state.orders.date}
                onChange={this.changeHandler}
                variant="outlined"
              />
              <TextField
                // placeholder="Description"
                // name="description"
                // value={props.orders.description}
                onChange={this.changeHandler}
                multiline
                rows={10}
                value={this.state.orders.description}
                variant="outlined"
              />

              <Button variant="outlined" color="primary" type="submit">
                Update Order
              </Button>
              <Button variant="outlined" color="primary" type="submit">
                Delete Order
              </Button>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

export default Receipt;

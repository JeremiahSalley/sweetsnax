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

class ShowOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      event: "",
      address: "",
      date: "",
      description: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://sweetsnaxapi.herokuapp.com/order/new", this.state)
      .then((response) => {
        console.log(response);
        alert("Order have placed")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      name,
      email,
      phone,
      event,
      address,
      date,
      description,
    } = this.state;
    return (
      <div className="cardItems">
        <Card>
          <h1>Place Order</h1>
          <form onSubmit={this.submitHandler}>
            <div className="items">
              <TextField
                placeholder="Full Name"
                name="name"
                value={name}
                variant="outlined"
                onChange={this.changeHandler}
              />
              <TextField
                placeholder="Email"
                name="email"
                value={email}
                variant="outlined"
                onChange={this.changeHandler}
              />
              <TextField
                placeholder="336-555-1155"
                name="phone"
                value={phone}
                variant="outlined"
                onChange={this.changeHandler}
              />
              <TextField
                placeholder="Event"
                name="event"
                value={event}
                variant="outlined"
                onChange={this.changeHandler}
              />
              <TextField
                placeholder="Address"
                name="address"
                value={address}
                variant="outlined"
                onChange={this.changeHandler}
              />
              <TextField
                placeholder="Date"
                type="date"
                name="date"
                value={date}
                onChange={this.changeHandler}
                variant="outlined"
              />
              <TextField
                placeholder="Description"
                name="description"
                value={description}
                onChange={this.changeHandler}
                multiline
                rows={10}
                defaultValue="Default Value"
                variant="outlined"
              />

              <Button variant="outlined" color="primary" type="submit">
                Place Order
              </Button>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

export default ShowOrder;
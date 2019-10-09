import React, { Component } from 'react'
import "../App.css"
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
export default class punkapi extends Component {
    state = {
      data: []
    };
    componentDidMount() {
      const url =
        "https://api.punkapi.com/v2/beers";
  
      fetch(url)
        .then(result => result.json())
        .then(result => {
          this.setState({
            data: result
          });
        });
    }
    render() {
        const { data } = this.state;
        console.log(data);
        const p1 = data.length ? (
          data.map(publish =>{
            console.log(publish.image_url);
            const pp1 = publish.image_url;
            if(pp1.search("keg") ===-1){
              return(
               
                    <Card className="backgrounds" style={{width: "18rem" }}>
                        <img variant="top" src={pp1} className="images"/>
                    </Card>
              )
            }
            return <div />
          } )
        ):(
          <p>Error</p>
        );
      return (
        <div className="wrapper">
            {p1}
        </div>
      )
    }
  }


import React from "react";
import "./css/inbox.css";
import regeneratorRuntime from "regenerator-runtime";




export default class Inbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        calls: null,
        postId: null
        };
        
    }


   async componentDidMount() {
        const response = await fetch("https://aircall-job.herokuapp.com/activities");
        const data = await response.json();
        this.setState({calls: data, loading: false})

        console.log(data)
            

    }
   

    archive(e){
        
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                is_archived: true
              })
        };
        fetch('https://aircall-job.herokuapp.com/activities/'+ e.toString() , requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
            

    }
    


    

    render() {
        
        
            return (


                <div >

                    {this.state.loading || !this.state.calls ? (<div>loading</div>) : (
                    
                    
                    <div style={{border: "3px hidden black", padding: "5px"}}>
        
        
        
                        {this.state.calls.map( item => {
                            if (!item.is_archived) {
                                return (
                                    
                                    <div id="box" style={{border: "2px solid grey", marginTop: "10px", paddingTop: "5px",paddingLeft: "5px"}}>
                                        
                                    <h1 id="head" style={{textAlign: "center", textTransform: "capitalize"}}>  Call {item.call_type}  </h1>  <br/>    
                                    <div id="minidetail" style={{ width: "250px", display: "inline-block"}}>
                                    
                                    <strong>{item.from}</strong> <button id="archive" style={{float: "right"}} onClick={() => this.archive(item.id)}>Archive</button><br/> Called: {item.to}
                                    </div>
                                    
                                <div id="details" style={{display: "inline-block", verticalAlign: "top", width: "100px", textAlign: "center", marginTop: "7px"}}> Details </div>
                                <div id="detailsdrop" style={{ width: "100%"}}>
            
                                <strong>From:</strong> {item.from}<br/>
                                <strong>To:</strong> {item.to}<br/>
                                <strong>Duration:</strong>{item.duration}<br/>
                                <strong>Direction:</strong>{item.direction}
            
                                </div>
                            </div>
            
        
                            )}
                        })}
        
                        
                    </div>
                    
                    
                    
                    )}

                    
                </div>
        
        
        
            );
                
        
        };

    
};

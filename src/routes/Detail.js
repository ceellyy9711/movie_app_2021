import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state == undefined){
            history.push("/");
        }
    }
    render(){   //얘가 먼저 실행됨
        const { location } = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        } else{
            return null;
        }
    }
}

export default Detail;
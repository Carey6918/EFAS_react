var React = require('react');
var ReactDOM = require('react-dom');

// var hello = React.createElement(
//     'input',
//     <style>width:200px</style>
// );
// const eeee = <p>new</p>;

class Welcome extends React.Component{
    constructor(){
        super();
        this.search = this.search.bind(this);
    }
    search(){
        var input = this.props.name;
        fetch("http://106.15.203.173:8080/info?org=1&id=1&seqId=1",{
            method:'GET',
            mode:'cors',
            credentials:'include',
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            //body:"id="+input
        }).then(function(res){
            console.log(res);
            if(res.ok){
                res.json().then(function(obj) {
                    console.log(obj);
                })
            }
        },function (re) {
            console.log(re);
        });
    }
    render(){
        var textStyle = {
            width:'250px',
            height:'27px'
        };
        var buttonStyle = {
            // width:'40px',
            // height:'40px',
            fontSize:40
        };
        return(
            <div>
            <input type="text" id="input" style={textStyle} name={this.props.name}/>
    <input type="button" value={"搜索"} style={buttonStyle} onClick={this.search}/>
    </div>
    )
    }
}
ReactDOM.render(
<Welcome/>,
    document.getElementById("searchDiv")
);
// ReactDOM.render(hello, document.getElementById('searchDiv'));




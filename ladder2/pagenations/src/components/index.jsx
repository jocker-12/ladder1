import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import WillMount from './willMount';
 class App extends Component{
    constructor(props){
        super(props)
        let data = [];
    for(var i=0;i<this.props.data;i++){
            data.push(i);
        }
        this.state={
            data:data,
        }
    }
    render(){

        return (
            <div className='listBox'>
                {
                    this.state.data.map((item,index)=>{
                        return <span key={index}>{item}</span>
                    })
                }
            </div>
        )
    }
}
export default WillMount(App)
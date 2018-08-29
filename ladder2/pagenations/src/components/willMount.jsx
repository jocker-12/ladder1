import React from 'react';
export default (mount)=>{
    return class willMount extends React.Component{
        constructor(props){
            super(props)    
            this.state={...this.state,current:1}
        }
        click(){
        }
        render(){
            return <div>
                 {super.render()}
              </div>
        }
    }

}
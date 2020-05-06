import React from 'react';
import './ArrowControllers.css';
import Up from '../../assets/arrow-up.png';
import Down from '../../assets/arrow-down.png';

interface MyState {
    active: number,
    arr: Array<string>
}
interface MyProps{

}
class ArrowControllers extends React.Component<MyProps, MyState>{
    constructor(props: MyProps){
        super(props);
            this.state = {
                active: 0,
                arr: ['First', 'Second', 'Third', 'Forth','Fifth']
            };
    }
    
    render(){
        return(
            <div className='divs'>
                <div className="arrow-controllers">
                    <div className='up' >
                        {this.state.active >= 1? <img src={Up} alt='up arrow' onClick={(e)=>this.setState({active: this.state.active - 1 })}/> : <div></div>}
                    </div>
                    <div className='seq-number'>
                        {this.state.active + 1 }
                    </div>
                    <div className='down'>
                        {this.state.active !== (this.state.arr.length-1)? <img src={Down} alt='down arrow' onClick={(e)=>this.setState({active: this.state.active + 1 })}/> : <></>}
                    </div>
                    
                </div>
                <div className='div-content'>
                    {this.state.arr.map((content, i) => this.state.active === i? content :<div></div>)}
                    
                </div>
            </div>

        );

    }
}

export default ArrowControllers;
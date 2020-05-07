import React from 'react';
import './ArrowControllers.css';
import Up from '../../assets/arrow-up.png';
import Down from '../../assets/arrow-down.png';

type MyType = {
    id: number,
    name:string,
    bgColor:string
}

interface MyState {
    
    items: MyType[]
}
interface MyProps{
   items: MyType[]
}

export default class FruitList extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
      super(props);
      this.state = {
        items: [
          { id: 1, name: "orange", bgColor: "#f9cb9c" },
          { id: 2, name: "lemon", bgColor: "#fee599" },
          { id: 3, name: "strawberry", bgColor: "#e06666" },
          { id: 4, name: "apple", bgColor: "#b6d7a7" }
        ]
      };
    }
  
    onMoveUp(key: any) {
      if (key === 0) return;
      const {items} = this.props;
      const index = key - 1;
      const itemAbove = items[index];
      items[key - 1] = items[key];
      items[key] = itemAbove;
      this.setState({ items });
    }
  
    onMoveDown(key: any) {
      const { items } = this.props;
      if (key === items.length - 1) return;
      const index = key + 1;
      const itemBelow = items[index];
      items[key + 1] = items[key];
      items[key] = itemBelow;
      this.setState({ items });
    }
  
    render() {
      const { items } = this.state;
      return (
        <div>
          <ul>
            {items.map((item: MyType, key:any) => (
              <li className='divs' key={key} style={{ backgroundColor: item.bgColor }}>
                    <div className='arrow-controllers'>
                        <div className='up'>
                        {(key+1) !== 1? <img src={Up} alt='up arrow' onClick={() => this.onMoveUp(key)}/> : <div></div>}
                        </div>
                        <div className='seq-number'>
                            {key + 1}
                        </div>
                        <div className='down'>
                        {key+1 !== (this.state.items.length)? <img src={Down} alt='down arrow' onClick={() => this.onMoveDown(key)}/> : <></>}
                        </div>
                    
                    </div>
                    <div className='div-content'>
                        {item.name}
                    </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  


// class ArrowControllers extends React.Component<MyProps, MyState>{
//     constructor(props: MyProps){
//         super(props);
//             this.state = {
//                 active: 0,
//                 arr: ['First', 'Second', 'Third', 'Forth','Fifth']
//             };
//     }
    
//     render(){
//         return(
//             <div className='divs'>
//                 <div className="arrow-controllers">
//                     <div className='up' >
//                         {this.state.active >= 1? <img src={Up} alt='up arrow' onClick={(e)=>this.setState({active: this.state.active - 1 })}/> : <div></div>}
//                     </div>
//                     <div className='seq-number'>
//                         {this.state.active + 1 }
//                     </div>
//                     <div className='down'>
//                         {this.state.active !== (this.state.arr.length-1)? <img src={Down} alt='down arrow' onClick={(e)=>this.setState({active: this.state.active + 1 })}/> : <></>}
//                     </div>
                    
//                 </div>
//                 <div className='div-content'>
//                     {this.state.arr.map((content, i) => this.state.active === i? content :<div></div>)}
                    
//                 </div>
//             </div>

//         );

//     }
// }

// export default ArrowControllers;
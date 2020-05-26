import React from 'react';
import './index.css';
import Up from '../../assets/arrow-up.png';
import Down from '../../assets/arrow-down.png';
import QueryCard from '../Cards/QueryCard';
import RadioSelect from '../Cards/SelectOptionCard';
import UploadCard from '../Cards/UploadCard/index';
import DateCard from '../Cards/DateCard/index';
import MediaUpload from '../Cards/MediaUpload/index';
import SignatureUpload from '../Cards/SignatureUpload/index';
import URLCard from '../Cards/URLCard/index';

type MyType = {
  id: number,
  component: React.ReactNode
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
        { id: 1, component: <QueryCard/> },
        { id: 2, component: <RadioSelect isRadio isCheckbox={false}/>},
        { id: 3, component: <RadioSelect isRadio={false} isCheckbox />},
        { id: 4, component: <RadioSelect isRadio={false} isCheckbox={false} /> },
        { id: 5, component: <UploadCard/> },
        { id: 6, component: <DateCard/>},
        { id: 7, component: <MediaUpload/>},
        { id:8, component: <SignatureUpload/>},
        { id:9, component:<URLCard/>}
          
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
            <li className='divs' key={key} >
                <div>
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
                  
                </div>
                  <div className='div-content'>
                    {item.component}
                  </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
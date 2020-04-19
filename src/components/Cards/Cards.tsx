import React from 'react';
import styled from 'styled-components';
import './Cards.css';

type CardsProps = {
    question: string,
    options: string[],
    type: string,
    isOptional: boolean
}

const Cards: React.FC<CardsProps> = ({ question, options, type, isOptional }: CardsProps) => {
    return(
        <div className='question-card'>
            <div className='question'>
                {question}{':'}
            
            </div>

            <div className='options'>
                <div className='type'>
               
                {type=='checkedcircle'?
                    <span className="material-icons">
                        check_circle_outline
                    </span>:
                    <span className="material-icons">
                        check_box_outline_blank
                    </span>}
                
                </div>

                <div className='options-text'>
                    {options}
                </div>

                <div className='close-button'>
                    <span className="material-icons">
                        close
                    </span>
                </div>

            </div>

            <div className='add-new'>
                {"+ Add New Item"}
            </div>

            <div className='optional'>
                {'Optional'}
                <div className='optionalbutton'>
              
                    {isOptional?
                    <span className="material-icons toggle-on">
                            toggle_off
                        </span>:
                    
                            <span className="material-icons toggle-off">
                            toggle_on
                            </span>
                        }
                      
                </div>
            
            </div>
        </div>
    );
}

export default Cards;
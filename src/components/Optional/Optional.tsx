import React from 'react';
import './Optional.css';

type OptionalProps = {
    isOptional: boolean
}
const Optional: React.FC<OptionalProps> = ({ isOptional}:OptionalProps) => {
    return(<div className='optional'>
                <div className='optional-text'>Optional</div>
                    <div className='optional-icon'>
                        {isOptional?
                            <div className='toggle-on'> 
                                <div className='rectangle-toggle-on'>
                                    <div className='circle-toggle-on'>
                                    </div>
                                </div>
            
            
                            </div>
            
                        :
                            <div className='toggle-off'>
                                <div className='rectangle-toggle-off'>
                                    <div className='circle-toggle-off'>
                                    </div>
                                </div>
                            </div>
                            }
            </div>
    </div>);
}
export default Optional;
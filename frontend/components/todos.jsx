import React from 'react';

class Todos extends React.Component { 
      constructor(props) {
            super(props)
      }

      render() {
            let store = window.store.getState().todos;
            return (
                  <div>
                        <ul>
                        {Object.keys(store).map((outerKey, idx) => {
                              return (
                                    <div>
                                          <ul key={idx.toString()}>
                                                      {
                                                            Object.keys(store[outerKey]).map((innerKey, innerIdx) => {
                                                                  return (
                                                                        <li key={idx.toString() + " " + innerIdx.toString()}>
                                                                              {store[outerKey][innerKey]}
                                                                        </li>
                                                                  )
                                                            })
                                                      }
                                                </ul>
                                                <br />
                                    </div>
   
                              )
                        })}
                        </ul>

                  </div>
                  
            )
      }
}

export default Todos;
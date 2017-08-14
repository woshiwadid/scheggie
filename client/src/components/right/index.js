import React from 'react';
import Search from './search';
import Results from './results';


class Right extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (

      <div style={{flexGrow: 2, flexBasis: '67%'}}>
        <Search />
        <Results />
      </div>

    )

  }

} 


export default Right;
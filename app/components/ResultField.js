import React from 'react'
import API from './API'


class ResultField extends React.Component{
    render(){
        return( <div>

            <div> id: <span> {this.props.gitData.id}  </span> </div>
            <div> forks: <span> {this.props.gitData.forks}  </span> </div>

                {this.props.params.query}

            </div>
        )
    }
}
export default ResultField ;


import React from 'react'
import API from './API'
import ResultField from './ResultField'
import {Link} from 'react-router'


class Form extends React.Component{

    render(){
        return( <div>
                   <form>
                       <input onChange={this.props.SearchInputChange} type="text"/>
                      <Link to="/ResultField/" onClick={this.props.SearchSubmit}>
                          <button > Search</button>
                      </Link>


                   </form>
                {this.props.child}
            </div>

        )
    }
}
export default Form;

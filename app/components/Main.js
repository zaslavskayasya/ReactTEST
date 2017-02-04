import React from 'react'
import Header from './Header'
import Form from './Form'
import ResultField from './ResultField';
import {Link} from 'react-router'
import API from './API'


class Main extends React.Component{
    constructor() {
        super();
        this.SearchSubmit = this.SearchSubmit.bind(this);
        this.SearchInputChange = this.SearchInputChange.bind(this);

        this.state = {
            SearchResult: [ ],
            SearchWord: '',
        }
    }
  /*   componentDidMount() {
          API.getGitSearch().then( (dataG) => {
               this.setState({
                   SearchResult: dataG.items,
               })
           })
    }*/

    SearchInputChange = (evt) => {
        this.setState({
            SearchWord: evt.target.value
        })
       /* API.getGitSearch().then( (dataR) => {
            this.setState({
                SearchResult: dataR.items,
                SearchWord: this.state.SearchWord
            })
        })*/
      /*  let qWord = this.state.SearchWord;
        console.log(qWord)
        console.log(this.state.SearchResult)
        return qWord*/
    };

    SearchSubmit(evt) {

        let qw = evt.target.value;
        API.getGitSearch().then( (dataG) => {
            alert('it work!!!')
            this.setState({
                SearchResult: dataG.items,
            })
            alert(this.state.SearchWord)
        })
      /*  API.getGitSearch().then( (dataR) => {
            this.setState({
                SearchResult: dataR.items,
                SearchWord: this.state.SearchWord
            })
        })
        let qWord = this.state.SearchWord;
        alert(qWord)
        alert(this.state.SearchResult)*/
    }

    render(){
        return(
            <div>
                <Header/>
                <form  >
                    <input onChange={this.SearchInputChange} type="text"/>

                    <Link to={"/ResultField/"+ this.state.SearchWord}  >
                        <button onClick={this.SearchSubmit} > rrrrr</button>
                    </Link>
                    {
                        this.state.SearchResult.map((git, index) => {
                            return <ResultField gitData={git} key={index} />
                        })

                    }
                </form>



                {this.props.children}

            </div>
        )
    }
}
export default Main


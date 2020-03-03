import React,{Component} from "react"


import './search.css'


class Search  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchValue:''
         }
    }
    handleOnchange(e){

        this.setState({
            searchValue:e.tartget.value
        })
    }
    handleSubmit(){
        //const info = this.state.searchValue
        // this.props.searchForTeacherList(info)
    }
    render() { 
        const {searchValue} = {...this.state}
        const {searchForTeacherList} = {...this.props}
        return (
            <div className="search">   
                <div className='search-wrapper'>
                    <input 
                    value={searchValue}
                    onChange={this.handleOnchange.bind(this)}
                    className="search-input" 
                    placeholder='搜索教师'/>
                        <button
                        handleSubmit={this.handleSubmit.bind(this)} 
                        className="search-bar-icon"><img src={require('./imgs/search-icon.png')}></img></button>
                </div>
            </div>
         );
    }
}
 
export default Search;
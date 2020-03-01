import React,{Component} from "react"

import styles from './search.module.scss'


class Search  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className= {styles.search}>
                <div className= {styles.searchContent}>
                    <div className={styles.searchContentDiv}>
                        <input placeholder = '搜索教师' className={styles.searchInput} />
                        <button className={styles.searchButton}></button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Search;
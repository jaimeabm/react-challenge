import PropTypes from 'prop-types'

const Search = ({onFilter = f=>f}) =>{
    console.log(onFilter)
    let _searchText;
    
    const submit = e => {
        e.preventDefault()
        onFilter(_searchText.value)
    }

    return (
        <section className="search-area parallax">
            <div className="container text-center">
                <h3 className="text-normal">Top 100 Albums iTunes - Find your album</h3>
                <form className="top-search" onSubmit={submit} >
                    <div className="input-group-md">
                        <div className="input-group-btn search-panel">
                            <button type="button" className="btn btn-lg btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="fas fa-music"></span>
                                <span className="text-label">Album</span> 
                                <span className="fa fa-angle-down"></span>
                            </button>
                            <ul className="dropdown-menu flat" role="menu">
                                <li className="lead text-uppercase">All</li>
                                <li className="lead text-uppercase">Rock</li>
                            </ul>
                        </div>
                        <div className="form-group">
                            <div className="icon-addon addon-lg">
                                <label className="fa fa-search"></label>
                                <input ref={input => _searchText = input} type="text" className="form-control input-lg flat" name="search-location" placeholder="Album Name" />
                            </div>
                        </div>
                        <span className="input-group-btn">
                            <button  className="btn btn-lg btn-secondary animation text-uppercase" type="submit" >Search</button>
                        </span>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Search
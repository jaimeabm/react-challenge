import PropTypes from 'prop-types'

let albumItemStyle = {
    width: "20rem"
};

const AlbumItem = (e = {}) =>
        <li>
            <div className="card text-center" style={albumItemStyle}>
                <div className="img">
                    <img className="card-img-top"  alt="Card picture caption" src={e['im:image'][2].label}/>
                </div>
                <div className="card-block">
                    <h5 className="card-title">{e['im:artist'].label}</h5>
                    <p className="card-text">{e['title'].label}</p>
                    <a href={e.link.attributes.href} className="btn btn-lg btn-secondary animation text-uppercase">
                        Buy for {e['im:price'].label}
                    </a>
                </div>
            </div>
        </li>

export default AlbumItem
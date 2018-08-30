import { createStore, combineReducers } from 'redux'
import { filterBy, feed, hasErrored, isLoading } from './Reducers'

const stateData = {
    "feed": {
        "author": { "name": { "label": "iTunes Store" }, "uri": { "label": "http://www.apple.com/itunes/" } }, "entry": [
            {
                "im:name": { "label": "The Greatest Showman (Original Motion Picture Soundtrack)" }, "im:image": [
                    { "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/55x55bb-85.png", "attributes": { "height": "55" } },
                    { "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/60x60bb-85.png", "attributes": { "height": "60" } },
                    { "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/170x170bb-85.png", "attributes": { "height": "170" } }], "im:itemCount": { "label": "11" }, "im:price": { "label": "$9.99", "attributes": { "amount": "9.99000", "currency": "USD" } }, "im:contentType": { "im:contentType": { "attributes": { "term": "Album", "label": "Album" } }, "attributes": { "term": "Music", "label": "Music" } }, "rights": { "label": "℗ 2017 This compilation Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States. Motion Picture Artwork, Photos, and Fox Trademarks and Logos TM and © 2017 Twentieth Century Fox Film Corporation." }, "title": { "label": "The Greatest Showman (Original Motion Picture Soundtrack) - Various Artists" }, "link": { "attributes": { "rel": "alternate", "type": "text/html", "href": "https://itunes.apple.com/us/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2" } }, "id": { "label": "https://itunes.apple.com/us/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2", "attributes": { "im:id": "1299856714" } }, "im:artist": { "label": "Various Artists" }, "category": { "attributes": { "im:id": "16", "term": "Soundtrack", "scheme": "https://itunes.apple.com/us/genre/music-soundtrack/id16?uo=2", "label": "Soundtrack" } }, "im:releaseDate": { "label": "2017-12-08T00:00:00-07:00", "attributes": { "label": "December 8, 2017" } }
            },
            {
                "im:name": { "label": "Rainier Fog" }, "im:image": [
                    { "label": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/d2/bc/aa/d2bcaa3e-10d6-4734-b5e3-c457ae89b0eb/4050538410280.jpg/55x55bb-85.png", "attributes": { "height": "55" } },
                    { "label": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/d2/bc/aa/d2bcaa3e-10d6-4734-b5e3-c457ae89b0eb/4050538410280.jpg/60x60bb-85.png", "attributes": { "height": "60" } },
                    { "label": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/d2/bc/aa/d2bcaa3e-10d6-4734-b5e3-c457ae89b0eb/4050538410280.jpg/170x170bb-85.png", "attributes": { "height": "170" } }], "im:itemCount": { "label": "10" }, "im:price": { "label": "$9.99", "attributes": { "amount": "9.99000", "currency": "USD" } }, "im:contentType": { "im:contentType": { "attributes": { "term": "Album", "label": "Album" } }, "attributes": { "term": "Music", "label": "Music" } }, "rights": { "label": "℗ 2018 AIC Entertainment, LLC under exclusive license to BMG Rights Management (US) LLC" }, "title": { "label": "Rainier Fog - Alice In Chains" }, "link": { "attributes": { "rel": "alternate", "type": "text/html", "href": "https://itunes.apple.com/us/album/rainier-fog/1399212774?uo=2" } }, "id": { "label": "https://itunes.apple.com/us/album/rainier-fog/1399212774?uo=2", "attributes": { "im:id": "1399212774" } }, "im:artist": { "label": "Alice In Chains", "attributes": { "href": "https://itunes.apple.com/us/artist/alice-in-chains/462221?uo=2" } }, "category": { "attributes": { "im:id": "21", "term": "Rock", "scheme": "https://itunes.apple.com/us/genre/music-rock/id21?uo=2", "label": "Rock" } }, "im:releaseDate": { "label": "2018-08-24T00:00:00-07:00", "attributes": { "label": "August 24, 2018" } }
            },
            {
                "im:name": { "label": "Aura" }, "im:image": [
                    { "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/d7/60/f7/d760f7bf-e2bc-e48e-afcd-b9b562ad4c2f/697691884080.jpg/55x55bb-85.png", "attributes": { "height": "55" } },
                    { "label": "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/d7/60/f7/d760f7bf-e2bc-e48e-afcd-b9b562ad4c2f/697691884080.jpg/60x60bb-85.png", "attributes": { "height": "60" } },
                    { "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/d7/60/f7/d760f7bf-e2bc-e48e-afcd-b9b562ad4c2f/697691884080.jpg/170x170bb-85.png", "attributes": { "height": "170" } }], "im:itemCount": { "label": "20" }, "im:price": { "label": "$9.99", "attributes": { "amount": "9.99000", "currency": "USD" } }, "im:contentType": { "im:contentType": { "attributes": { "term": "Album", "label": "Album" } }, "attributes": { "term": "Music", "label": "Music" } }, "rights": { "label": "℗ 2018 VP Records Corp./Dimelo Vi Dist. by Sony Music Entertainment U.S. Latin LLC" }, "title": { "label": "Aura - Ozuna" }, "link": { "attributes": { "rel": "alternate", "type": "text/html", "href": "https://itunes.apple.com/us/album/aura/1433976640?uo=2" } }, "id": { "label": "https://itunes.apple.com/us/album/aura/1433976640?uo=2", "attributes": { "im:id": "1433976640" } }, "im:artist": { "label": "Ozuna", "attributes": { "href": "https://itunes.apple.com/us/artist/ozuna/283578837?uo=2" } }, "category": { "attributes": { "im:id": "1119", "term": "Latin Urban", "scheme": "https://itunes.apple.com/us/genre/music-latino-urbano-latino/id1119?uo=2", "label": "Urbano latino" } }, "im:releaseDate": { "label": "2018-08-24T00:00:00-07:00", "attributes": { "label": "August 24, 2018" } }
            }]
    },
    "hasErrored": false,
    "isLoading": false,
    "filterBy": ""
}

const storeCreated = createStore(
    combineReducers({ hasErrored, isLoading, filterBy, feed }), 
    stateData)

export default storeCreated

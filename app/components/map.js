/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API =
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/{{@lng}},{{@lat}},{{@zoom}}/{{@width}}x{{@height}}@2x?access_token={{this.token}}';

export default class MapComponent extends Component {
    get src() {
        let { lat, lng, width, height, zoom } = this.args;
        let coordinates = `${lat}, ${lng}, ${zoom}`;
        let dimensions = `${width}*${height}`;
        let accessToken = `access_token=${this.token}`;

        return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
    }

    get token() {
        return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
    }
}

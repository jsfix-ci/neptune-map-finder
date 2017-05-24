/**
 * @copyright 2017 @ NEXLE
 * @author rocachien
 * @create 2017/03/07 14:44
 * @update 2017/03/22 17:18
 * @file common/map/pin-icon-component.js
 */

"use strict";

import React from 'react';
import Icon from '../icon/icon-component';

/**
 * @desc This is Pin Icon component on Map.
 * @example
 *
 *
 * <PinIcon {...this.props.greatPlaceCoords} />
 * <PinIcon lat={this.props.lat} lng={this.props.lng} onClick={this.onClick}/>
 */

export default class PinIcon extends React.Component {
    /**
     * @param {object} props.
     */
    constructor(props) {
        super(props);
    }

    /**
     * @desc This is callback function when click on item
     * @param {object} event - Event of element
     * @param {object} lat - Latitude
     * @param {number} lng - Longitude
     */
    onClick(event, lat=0, lng=0) {
        event.stopPropagation();
        event.preventDefault();

        if(this.props.onClick) return this.props.onClick(lat, lng);


    }

    /**
     *
     * @return {XML}
     */
    render() {
        const onClick = (event) => this.onClick(event, this.props.lat, this.props.lng);

        let srcPin = "data:image/png;base64,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";
        let scr = this.props.srcPin ? this.props.srcPin : srcPin;
        return (
            <div style={{position: "relative", cursor: "pointer"}} onClick={onClick}>
                <Icon src= {scr} style={{position: "absolute", width: "24px"}}/>
            </div>
        );
    }
}

PinIcon.propTypes = {
    onClick: React.PropTypes.func,
    lat: React.PropTypes.number,
    lng: React.PropTypes.number,
    srcPin:  React.PropTypes.string,
};

PinIcon.defaultProps = {
    lat: 59.938043,
    lng: 30.337157
};
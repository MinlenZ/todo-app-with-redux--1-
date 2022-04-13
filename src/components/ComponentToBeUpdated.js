import React from "react";
import { connect } from "react-redux";

const ComponentToBeUpdated = ({ todos }) => (
// jsx here
    <div></div>
);

const mapStateToProps = state => {
// map props here
};

export default connect(mapStateToProps)(ComponentToBeUpdated);
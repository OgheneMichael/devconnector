import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import ProfileGithub from "./ProfileGithub";
import ProfileCreds from "./ProfileCreds";
import ProfileAbout from "./ProfileAbout";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";

class Profile extends Component {
	static propTypes = {
		profile: PropTypes.object.isRequired,
		getProfileByHandle: PropTypes.func.isRequired
	};

	componentDidMount() {
		if (this.props.match.params.handle) {
			this.props.getProfileByHandle(this.props.match.params.handle);
		}
	}

	render() {
		return (
			<div>
				<ProfileHeader />
				<ProfileAbout />
				<ProfileCreds />
				<ProfileGithub />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	profile: state.profile
});

export default connect(
	mapStateToProps,
	{ getProfileByHandle }
)(Profile);


import React, {Fragment , Component} from "react";
import PropTypes from 'prop-types'

import { Icon, JobContainer, JobDesc} from "./Jobs.components";



export default class Jobs extends Component {
    static propTypes = {
        /**
         * Name of the company
         */
        companyName : PropTypes.string.isRequired,
        /**
         * Logo of the company
         */
        logo : PropTypes.object.isRequired,
        /**
         * Job Description usually passed as bullets
         */
        jobDescription : PropTypes.object.isRequired,
        /**
         * Job Title held at company
         */
        jobTitle : PropTypes.string.isRequired,

    }

    render() {
        return (
            <Fragment>
            <JobContainer> <div>{this.props.companyName} | <i>{this.props.jobTitle}</i> </div>
                <div> <Icon src={this.props.logo}/> </div>
                <JobDesc>
                    {this.props.jobDescription}
                </JobDesc>
            </JobContainer>
            </Fragment>
        );
    }
}
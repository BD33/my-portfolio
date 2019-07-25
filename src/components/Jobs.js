
import React, {Fragment , Component} from "react";
import PropTypes from 'prop-types'

import { Icon, JobContainer, JobDesc} from "./Jobs.components";



export default class Jobs extends Component {
    static propTypes = {
        /**
         * Name of the company with job title
         */
        jobName : PropTypes.object.isRequired,
        /**
         * Logo of the company
         */
        logo : PropTypes.object.isRequired,
        /**
         * Job Description usually passed as bullets
         */
        jobDescription : PropTypes.object.isRequired,
    }

    render() {
        return (
            <Fragment>
            <JobContainer>{this.props.jobName}
                <div> <Icon src={this.props.logo}/> </div>
                <JobDesc>
                    {this.props.jobDescription}
                </JobDesc>
            </JobContainer>
            </Fragment>
        );
    }
}
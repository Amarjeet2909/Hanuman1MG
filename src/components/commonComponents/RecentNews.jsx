import React from 'react'
import { Link } from 'react-router-dom'
const RecentNews = () => {
    return (
        <div className="recent-news">
            <div className="recent-background">
                <h2 className="recent-title pt-2">Recent NEWS</h2>
                <p className="recent-information pt-4">In view of the recent surge in Covid-19 cases in Kerala, Delhi, Goa, Gujarat
                    and Karnataka, Union health minister Mansukh Mandaviya on Wednesday chaired a high-level meeting with top officials and chief health secretaries.</p>
                <Link className="recent-information text-decoration-none ">Read More... </Link>
            </div>

        </div>
    )
}

export default RecentNews
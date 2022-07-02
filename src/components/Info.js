import React from "react"
import ProfilePicture from "../images/profile-picture.jpeg"
import IconEmail from "../images/icon-email.png"
import IconLinkedin from "../images/icon-linkedin.png"

export default function Info() {
    return (
        <div className="profile">
            <div className="profile-picture">
                <img src={ProfilePicture}></img>
            </div>
            <div className="description">
                <div className="profile-info">
                    <h3>Santiago Angarita Avila</h3>
                    <h5>Fullstack Developer</h5>
                    <p>santiago.website</p>
                    <div className="profile-buttons">
                        <button>
                            <img src={IconEmail}></img>
                            Email
                        </button>
                        <button className="button-linkedin">
                            <img src={IconLinkedin}></img>
                            Lindekin
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
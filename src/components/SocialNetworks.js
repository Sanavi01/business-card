import React from "react"
import FacebookIcon from "../images/facebook-icon.png"
import GithubIcon from "../images/github-icon.png"
import TwitterIcon from "../images/twitter-icon.png"
import InstagramIcon from "../images/instagram-icon.png"
export default function SocialNetworks(){
    return (
        <div className="socialnetwork">
            <img src={FacebookIcon}></img>
            <img src={GithubIcon}></img>
            <img src={TwitterIcon}></img>
            <img src={InstagramIcon}></img>
        </div>
    )
}
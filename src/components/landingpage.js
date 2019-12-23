import React,{ Component } from 'react';
import { Grid,Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div className="container-fluid">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/hipster-beard-man-white-512.png" 
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Android Developer</h1>
                            <hr/>
                            <p>Java | Dart | Javascript | Android | React Native | Flutter | Node.js | sqlite | Firebase <br></br> Redux | Algorithms | Realm | Data Structures</p>

                            <div className="social-links">
                                <a href="https://github.com/hiashutoshsingh" target="_blank"><i class="fa fa-github-square"></i></a>
                                <a href="https://www.linkedin.com/in/hiashutoshsingh/" target="_blank"><i class="fa fa-linkedin"></i></a>
                                <a href="" target="_blank"><i class="fa fa-envelope-square"></i></a>
                                {/* <a href="" target="_blank"></a> */}
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;
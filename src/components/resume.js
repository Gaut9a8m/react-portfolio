import React,{ Component } from 'react';
import { Grid,Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div className="container-fluid">
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src="https://s3-ap-south-1.amazonaws.com/bot-bkt/prod/16560/maleGenericwebsite-2-e1555067523504.png" style={{height:'200px'}}/>

                        </div>
                        <h2 style={{paddingTop:'.1em'}}>Ashutosh Kumar Singh</h2>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <p>Some random text. Some random textSome random text Some random text Some random text Some random text. Some random text. Some random textSome random text Some random text Some random text Some random text</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <h5>Address</h5>
                        <p>123, some Address, Pincode:-20192</p>
                        <h5>Phone No.</h5>
                        <p>939874633</p>
                        <h5>Email</h5>
                        <p>Something.example.com</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2008}
                            endYear={2010}
                            schoolName="My University1"
                            schoolDescription="Lorem Ipsum some random text
                            Lorem Ipsum some random text Lorem Ipsum some random text Lorem Ipsum some random text"
                        />
                         <Education
                            startYear={2010}
                            endYear={2012}
                            schoolName="My University2"
                            schoolDescription="Lorem Ipsum some random text
                            Lorem Ipsum some random text Lorem Ipsum some random text Lorem Ipsum some random text"
                        />
                         <Education
                            startYear={2012}
                            endYear={2014}
                            schoolName="My University3"
                            schoolDescription="Lorem Ipsum some random text
                            Lorem Ipsum some random text Lorem Ipsum some random text Lorem Ipsum some random text"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                        startYear={2015}
                        endYear={2019}
                        jobName="Developer"
                        jobDescription="Lorem Ipsum some random text Lorem Ipsum some random text Lorem Ipsum some random text
                        Lorem Ipsum some random text Lorem Ipsum some random text Lorem Ipsum some random text"
                        />

                        <Experience 
                        startYear={2019}
                        endYear={2019}
                        jobName="Developer"
                        jobDescription="Lorem Ipsum some random text Lorem Ipsum some random text Lorem Ipsum some random text
                        Lorem Ipsum some random text Lorem Ipsum some random text Lorem Ipsum some random text"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills
                        skill="Android"
                        progress={100}
                        />
                         <Skills
                        skill="React"
                        progress={70}
                        />
                         <Skills
                        skill="Flutter"
                        progress={80}
                        />
                         <Skills
                        skill="Java"
                        progress={90}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;
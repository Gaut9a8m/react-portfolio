import React,{ Component } from 'react';
import { Tab,Tabs,Grid,Cell,Card,CardTitle,CardText,Button,CardMenu,IconButton,CardActions } from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
      
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://s3.amazonaws.com/user-content.stoplight.io/8987/1541019969018) center / cover'}}>Android project 1</CardTitle>
                    <CardText>
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                        {/* <button colored>Github</button> */}
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                  <CardTitle style={{color:'#fff', height:'176px', background:'url(https://s3.amazonaws.com/user-content.stoplight.io/8987/1541019969018) center / cover'}}>Android project #2</CardTitle>
                  <CardText>
                      Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                      Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                  </CardText>
                  <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Live Demo</Button>
                      {/* <button colored>Github</button> */}
                  </CardActions>
                  <CardMenu style={{color:'#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>
            
            <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background:'url(https://s3.amazonaws.com/user-content.stoplight.io/8987/1541019969018) center / cover'}}>Android project #3</CardTitle>
            <CardText>
                Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
                {/* <button colored>Github</button> */}
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
            </CardMenu>
             </Card>
                </div>
                
            )  
          }
         else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://creativetimblog.com/blog/wp-content/uploads/2019/09/cover-0408-FlutterMessangerDemo-Luke_Newsletter-30d5a65064b44f0ef56a801d4811964a-730x410.png) center / cover'}}>Flutter project 1</CardTitle>
                    <CardText>
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                        {/* <button colored>Github</button> */}
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://creativetimblog.com/blog/wp-content/uploads/2019/09/cover-0408-FlutterMessangerDemo-Luke_Newsletter-30d5a65064b44f0ef56a801d4811964a-730x410.png) center / cover'}}>Flutter project 2</CardTitle>
                    <CardText>
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                        {/* <button colored>Github</button> */}
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://creativetimblog.com/blog/wp-content/uploads/2019/09/cover-0408-FlutterMessangerDemo-Luke_Newsletter-30d5a65064b44f0ef56a801d4811964a-730x410.png) center / cover'}}>Flutter project 3</CardTitle>
                    <CardText>
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                        {/* <button colored>Github</button> */}
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    
                </div>
            )  
          }
          else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://koenig-media.raywenderlich.com/uploads/2017/08/ReactNative_update-feature-3.png) center / cover'}}>React Native project 1</CardTitle>
                    <CardText>
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                        {/* <button colored>Github</button> */}
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://koenig-media.raywenderlich.com/uploads/2017/08/ReactNative_update-feature-3.png) center / cover'}}>React Native project 2</CardTitle>
                    <CardText>
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                        {/* <button colored>Github</button> */}
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://koenig-media.raywenderlich.com/uploads/2017/08/ReactNative_update-feature-3.png) center / cover'}}>React Native project 3</CardTitle>
                    <CardText>
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                        Some dummy text here long paragraph.Some dummy text here long paragraph.Some dummy text here long paragraph.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                        {/* <button colored>Github</button> */}
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>
            </div>
            )  
          }
    }
    


    render(){
        return(
         <div className="category-tab">
             <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                <Tab>Android</Tab>
                <Tab>Flutter</Tab>
                <Tab>React Native</Tab>
             </Tabs>


                 <Grid>
                     <Cell col={12}>
                         <div className="content">
                            {this.toggleCategories()}
                         </div>
                     </Cell>
                 </Grid>
                
             
         </div>
        )
    }
}
export default Project;
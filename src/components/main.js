import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Landing from './landingpage';
import Contact from './contact';
import About from './aboutme';
import Resume from './resume';
import Project from './project';
const Main = () =>(
    <Switch>
       
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Project} />
        <Route exact path="/" component={Landing} />
    </Switch>
)

export default Main;
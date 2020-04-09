import React from 'react';
import { Route, Switch, } from 'react-router-dom';

export const ContentRoute = (props) =>
    <Switch>
            <Route exact path='/' component={props.routeList[0].component}/>
            {
                props.routeList.map((item, index) => 
                    <Route exact path={item.path} component={item.component} key={index}/>
                )
            }
    </Switch>

export default ContentRoute;



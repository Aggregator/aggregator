import React, {Component} from 'react'

import {Card, CardHeader, CardTitle, CardText} from 'material-ui'
import {AlertError, AlertWarning, ActionDone} from 'material-ui/lib/svg-icons'
import {Colors} from 'material-ui/lib/styles'

export default class Lanes extends Component {
  render () {
    return (
      <div className='section' id='lanes'>
        <div className='row'>
          <div className='col s2'>
            <h6>Back End</h6>
            <small>NodeJS | MongoDB</small>
          </div>
          <div className='col s10'>
              <div className='col'>
                 <Card>
                  <CardHeader title='DEV' subtitle='version: v1.0.13'>
                    <AlertError color={Colors.redA700} />
                  </CardHeader>
                  <CardTitle subtitle='#develop | build: #110' />
                  <CardText>
                    <small>NodeJS: v5.6.0</small><br/>
                    <small>MongoDB: v3.2.3</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='TEST' subtitle='version: v1.0.1'>
                    <AlertWarning color={Colors.yellowA700} />
                  </CardHeader>
                  <CardTitle subtitle='#develop | build: #101' />
                  <CardText>
                    <small>NodeJS: v4.3.1</small><br/>
                    <small>MongoDB: v3.2.0</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='DEMO' subtitle='version: v1.0.0'>
                    <ActionDone color={Colors.greenA700} />
                  </CardHeader>
                  <CardTitle subtitle='#master | build: #99' />
                  <CardText>
                    <small>NodeJS: v4.2.4</small><br/>
                    <small>MongoDB: v3.1.9</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='LIVE' subtitle='version: v0.14.0'>
                    <ActionDone color={Colors.greenA700} />
                  </CardHeader>
                  <CardTitle subtitle='#master | build: #90' />
                  <CardText>
                    <small>NodeJS: v0.12.7</small><br/>
                    <small>MongoDB: v2.6.11</small>
                  </CardText>
                 </Card>
              </div>
          </div>
        </div>
        <div className='row'>
          <div className='divider'></div>
        </div>
        <div className='row'>
          <div className='col s2'>
            <h6>Front End</h6>
            <small>React | Webpack | NodeJS</small>
          </div>
          <div className='col s10'>
              <div className='col'>
                 <Card>
                  <CardHeader title='DEV' subtitle='version: v2.0.13'>
                    <AlertError color={Colors.redA700} />
                  </CardHeader>
                  <CardTitle subtitle='#develop | build: #50' />
                  <CardText>
                    <small>React: v0.14.7</small><br/>
                    <small>NodeJS: v5.6.0</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='TEST' subtitle='version: v2.0.1'>
                    <AlertWarning color={Colors.yellowA700} />
                  </CardHeader>
                  <CardTitle subtitle='#develop | build: #29' />
                  <CardText>
                    <small>React: v0.14.4</small><br/>
                    <small>NodeJS: v4.3.1</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='DEMO' subtitle='version: v2.0.0'>
                    <AlertError color={Colors.redA700} />
                  </CardHeader>
                  <CardTitle subtitle='#master | build: #24' />
                  <CardText>
                    <small>React: v0.13.3</small><br/>
                    <small>NodeJS: v4.2.5</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='LIVE' subtitle='version: v1.4.0'>
                    <AlertError color={Colors.redA700} />
                  </CardHeader>
                  <CardTitle subtitle='#master | build: #10' />
                  <CardText>
                    <small>React: v0.13.0</small><br/>
                    <small>NodeJS: v0.12.7</small>
                  </CardText>
                 </Card>
              </div>
          </div>
        </div>
        <div className='row'>
          <div className='divider'></div>
        </div>
        <div className='row'>
          <div className='col s2'>
            <h6>Android</h6>
            <small>Java | Android</small>
          </div>
          <div className='col s10'>
              <div className='col'>
                 <Card>
                  <CardHeader title='DEV' subtitle='version: v1.0.13'>
                    <AlertError color={Colors.redA700} />
                  </CardHeader>
                  <CardTitle subtitle='#develop | build: #70' />
                  <CardText>
                    <small>Java SE 8</small><br/>
                    <small>Android: v6.0.1</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='TEST' subtitle='version: v1.0.11'>
                    <AlertWarning color={Colors.yellowA700} />
                  </CardHeader>
                  <CardTitle subtitle='#develop | build: #67' />
                  <CardText>
                    <small>Java SE 8</small><br/>
                    <small>Android: v5.1.1</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='DEMO' subtitle='version: v1.0.10'>
                    <ActionDone color={Colors.greenA700} />
                  </CardHeader>
                  <CardTitle subtitle='#master | build: #55' />
                  <CardText>
                    <small>Java SE 7</small><br/>
                    <small>Android: v4.4.4</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='LIVE' subtitle='version: v0.14.0'>
                    <ActionDone color={Colors.greenA700} />
                  </CardHeader>
                  <CardTitle subtitle='#master | build: #45' />
                  <CardText>
                    <small>Java SE 6</small><br/>
                    <small>Android: v4.0.4</small>
                  </CardText>
                 </Card>
              </div>
          </div>
        </div>
        <div className='row'>
          <div className='divider'></div>
        </div>
        <div className='row'>
          <div className='col s2'>
            <h6>iOS</h6>
            <small>Swift | Objective-C | iOS</small>
          </div>
          <div className='col s10'>
              <div className='col'>
                 <Card>
                  <CardHeader title='DEV' subtitle='version: v1.1.3'>
                    <AlertWarning color={Colors.yellowA700} />
                  </CardHeader>
                  <CardTitle subtitle='#develop | build: #65' />
                  <CardText>
                    <small>Swift 2</small><br/>
                    <small>iOS 9</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='TEST' subtitle='version: v1.1.0'>
                    <ActionDone color={Colors.greenA700} />
                  </CardHeader>
                  <CardTitle subtitle='#develop | build: #47' />
                  <CardText>
                    <small>Swift 1</small><br/>
                    <small>iOS 8</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='DEMO' subtitle='version: v1.0.0'>
                    <ActionDone color={Colors.greenA700} />
                  </CardHeader>
                  <CardTitle subtitle='#master | build: #34' />
                  <CardText>
                    <small>Objective-C</small><br/>
                    <small>iOS 8</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='LIVE' subtitle='version: v0.5.0'>
                    <ActionDone color={Colors.greenA700} />
                  </CardHeader>
                  <CardTitle subtitle='#master | build: #20' />
                  <CardText>
                    <small>Objective-C</small><br/>
                    <small>iOS 7</small>
                  </CardText>
                 </Card>
              </div>
          </div>
        </div>
        <div className='row'>
          <div className='divider'></div>
        </div>
        <div className='row'>
          <div className='col s2'>
            <h6>Hybrid</h6>
            <small>AngularJS | Ionic | Cordova</small>
          </div>
          <div className='col s10'>
              <div className='col'>
                 <Card>
                  <CardHeader title='DEV' subtitle='version: v1.0.13'>
                    <ActionDone color={Colors.greenA700} />
                  </CardHeader>
                  <CardTitle subtitle='#develop | build: #78' />
                  <CardText>
                    <small>AngularJS: 1.5.0</small><br/>
                    <small>Ionic: v2.0.0-beta.1</small><br/>
                    <small>Cordova: v6.0.0</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='TEST' subtitle='version: v1.0.1'>
                    <ActionDone color={Colors.greenA700} />
                  </CardHeader>
                  <CardTitle subtitle='#develop | build: #68' />
                  <CardText>
                    <small>AngularJS: v1.4.8</small><br/>
                    <small>Ionic: v1.2.4</small><br/>
                    <small>Cordova: v5.4.1</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='DEMO' subtitle='version: v1.0.0'>
                    <ActionDone color={Colors.greenA700} />
                  </CardHeader>
                  <CardTitle subtitle='#master | build: #56' />
                  <CardText>
                    <small>AngularJS: v1.4.7</small><br/>
                    <small>Ionic: v1.2.3</small><br/>
                    <small>Cordova: v5.3.3</small>
                  </CardText>
                 </Card>
              </div>
              <div className='col'>
                 <Card>
                  <CardHeader title='LIVE' subtitle='version: v0.14.0'>
                    <ActionDone color={Colors.greenA700} />
                  </CardHeader>
                  <CardTitle subtitle='#master | build: #49' />
                  <CardText>
                    <small>AngularJS: v1.3.20</small><br/>
                    <small>Ionic: v1.0.1</small><br/>
                    <small>Cordova: v4.3.1</small>
                  </CardText>
                 </Card>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

import React from 'react'

import {Card, CardHeader} from 'material-ui'
import {AlertError, AlertWarning, ActionDone} from 'material-ui/lib/svg-icons'
import {Colors} from 'material-ui/lib/styles'

export default class Stages extends React.Component{
  render () {
    return (
      <div className="section" id="stages">
        <div className="row">
          <div className="col s2">
            <h6>Back End</h6>
          </div>
          <div className="col s10">
              <div className="col">
                 <Card>
                   <CardHeader title="DEV" subtitle="version: v1.0.13">
                     <AlertError color={Colors.redA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="TEST" subtitle="version: v1.0.1">
                     <AlertWarning color={Colors.yellowA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="DEMO" subtitle="version: v1.0.0">
                     <ActionDone color={Colors.greenA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="LIVE" subtitle="version: v0.14.0">
                     <ActionDone color={Colors.greenA700} />
                   </CardHeader>
                 </Card>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="divider"></div>
        </div>
        <div className="row">
          <div className="col s2">
            <h6>Front End</h6>
          </div>
          <div className="col s10">
              <div className="col">
                 <Card>
                   <CardHeader title="DEV" subtitle="version: v2.0.13">
                     <AlertError color={Colors.redA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="TEST" subtitle="version: v2.0.1">
                     <AlertWarning color={Colors.yellowA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="DEMO" subtitle="version: v2.0.0">
                     <AlertError color={Colors.redA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="LIVE" subtitle="version: v1.4.0">
                     <AlertError color={Colors.redA700} />
                   </CardHeader>
                 </Card>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="divider"></div>
        </div>
        <div className="row">
          <div className="col s2">
            <h6>Android</h6>
          </div>
          <div className="col s10">
              <div className="col">
                 <Card>
                   <CardHeader title="DEV" subtitle="version: v1.0.13">
                     <AlertError color={Colors.redA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="TEST" subtitle="version: v1.0.11">
                     <AlertWarning color={Colors.yellowA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="DEMO" subtitle="version: v1.0.10">
                     <ActionDone color={Colors.greenA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="LIVE" subtitle="version: v0.14.0">
                     <ActionDone color={Colors.greenA700} />
                   </CardHeader>
                 </Card>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="divider"></div>
        </div>
        <div className="row">
          <div className="col s2">
            <h6>iOS</h6>
          </div>
          <div className="col s10">
              <div className="col">
                 <Card>
                   <CardHeader title="DEV" subtitle="version: v1.1.3">
                     <AlertWarning color={Colors.yellowA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="TEST" subtitle="version: v1.1.0">
                     <ActionDone color={Colors.greenA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="DEMO" subtitle="version: v1.0.0">
                     <ActionDone color={Colors.greenA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="LIVE" subtitle="version: v0.5.0">
                     <ActionDone color={Colors.greenA700} />
                   </CardHeader>
                 </Card>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="divider"></div>
        </div>
        <div className="row">
          <div className="col s2">
            <h6>Hybrid</h6>
          </div>
          <div className="col s10">
              <div className="col">
                 <Card>
                   <CardHeader title="DEV" subtitle="version: v1.0.13">
                     <ActionDone color={Colors.greenA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="TEST" subtitle="version: v1.0.1">
                     <ActionDone color={Colors.greenA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="DEMO" subtitle="version: v1.0.0">
                     <ActionDone color={Colors.greenA700} />
                   </CardHeader>
                 </Card>
              </div>
              <div className="col">
                 <Card>
                   <CardHeader title="LIVE" subtitle="version: v0.14.0">
                     <ActionDone color={Colors.greenA700} />
                   </CardHeader>
                 </Card>
              </div>
          </div>
        </div>
      </div>
    )
  }
}


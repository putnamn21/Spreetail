import React from 'react'
import Card, { CardContent } from 'material-ui/Card'
import PropTypes from 'prop-types'
import Grow from 'material-ui/transitions/Grow'
import { withStyles } from 'material-ui/styles'

const styles = () => ({
  card: {
    margin: '2rem',
    minWidth: '6rem'
  }
})

const CardComponent = ({children, classes, ...props}) => (
  <Grow in={true} timeout={1000}>
    <Card className={classes.card} {...props}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  </Grow>
)

CardComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CardComponent)

import React from 'react'

export default function withImport (promise, Loading = () => (<p>Loading...</p>)) {
  return class Comp extends React.Component {
    constructor (...args) {
      super(...args)
      this.state = { AsyncComponent: null }
    }

    componentDidMount () {
      promise.then((Comp) => {
        this.setState({ AsyncComponent: Comp.default || Comp })
      })
    }

    render () {
      const { AsyncComponent } = this.state
      if (!AsyncComponent) return (<Loading {...this.props} />)

      return <AsyncComponent {...this.props} />
    }
  }
}

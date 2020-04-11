import React from "react";

interface Props {
  compiler: string,
  framework: string,
  library: string,
}

class Root extends React.Component<Props, {}> {
    render() {
        return (
          <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework} and {this.props.library}!</h1>
          </div>
        );
    }
}

export default Root;

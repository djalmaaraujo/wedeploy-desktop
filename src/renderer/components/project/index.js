import React from 'react';

export default class Project extends React.Component {
  render() {
    const { projectId, health } = this.props.data

    return (
      <div className="project">
        <p>{ projectId } - { health }</p>
      </div>
    );
  }
}

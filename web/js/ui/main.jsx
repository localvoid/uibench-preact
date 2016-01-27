import { h, render, Component } from 'preact';
import { Table } from './table';
import { Anim } from './anim';
import { Tree } from './tree';

export class Main extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    var data = this.props.data;
    var location = data.location;

    var section;
    if (location === 'table') {
      section = (<Table data={data.table}></Table>);
    } else if (location === 'anim') {
      section = (<Anim data={data.anim}></Anim>);
    } else if (location === 'tree') {
      section = (<Tree data={data.tree}></Tree>);
    }

    return (<div className="Main">{section}</div>);
  }
}

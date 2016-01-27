import { h, render, Component } from 'preact';

class TreeLeaf extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    return (<li className="TreeLeaf">{this.props.data.id}</li>);
  }
}

class TreeNode extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    var data = this.props.data;
    var children = [];

    for (var i = 0; i < data.children.length; i++) {
      var n = data.children[i];
      if (n.container) {
        children.push((<TreeNode key={n.id} data={n} />));
      } else {
        children.push((<TreeLeaf key={n.id} data={n} />));
      }
    }

    return (<ul className="TreeNode">{children}</ul>);
  }
}

export class Tree extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    return (<div className="Tree"><TreeNode data={this.props.data.root} /></div>);
  }
}

import { Component } from "react";
import Kamera from "./Kamera";
import Lensa from "./Lensa";
class Selector extends Component {
  state = {
    kameraChild: false,
    lensaChild: false,
  };

  changeKameraState = () => {
    this.setState(() => {
      return {
        kameraChild: !this.state.kameraChild,
        lensaChild: false,
      };
    });
  };
  changeLensaState = () => {
    this.setState(() => {
      return {
        kameraChild: false,
        lensaChild: !this.state.lensaChild,
      };
    });
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.changeKameraState}>Kamera</button>
          <button onClick={this.changeLensaState}>Lensa</button>
        </div>
        <div>
          {this.state.kameraChild && <Kamera />}
          {this.state.lensaChild && <Lensa />}
        </div>
      </div>
    );
  }
}
export default Selector;

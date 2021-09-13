import { Component, Fragment } from "react";
import xt200 from "../assets/image/xt200.jpg";
import xt100 from "../assets/image/xt100.jpg";
import xt3 from "../assets/image/xt3.jpg";
import xt4 from "../assets/image/xt4.jpg";
import xt20 from "../assets/image/xt20.jpg";
import xt30 from "../assets/image/xt30.jpg";

class Kamera extends Component {
  constructor(props) {
    super(props);
    this.handleChangeKamera = this.handleChangeKamera.bind(this);
    this.state = {
      kamera: [
        ["Fujifilm X-T100", "80.000", xt100],
        ["Fujifilm X-T200", "100.000", xt200],
        ["Fujifilm X-T20", "120.000", xt20],
        ["Fujifilm X-T30", "150.000", xt30],

        ["Fujifilm X-T3", "200.000", xt3],
        ["Fujifilm X-T4", "250.000", xt4],
      ],
      selection: {
        kamera: "",
        harga: "",
        gambar: "",
      },
    };
  }
  componentDidMount() {
    alert("Pilih kamera kesukaan anda");
  }
  componentWillUnmount() {
    alert("Menu pemilihan kamera akan dihilangkan");
  }
  handleChangeKamera(e) {
    var index = e.target.value;
    this.setState({
      selection: {
        kamera: this.state.kamera[index][0],
        harga: this.state.kamera[index][1],
        gambar: this.state.kamera[index][2],
      },
    });
  }

  render() {
    const { selection, kamera } = this.state;
    return (
      <>
        <div>
          <select id="kameraDropDown" onChange={this.handleChangeKamera}>
            <option name="test" value="0">
              Pilih Kamera
            </option>
            <Fragment>
              {kamera.map((body, index) => {
                return (
                  <option name={body[0]} value={index}>
                    {body[0]}
                  </option>
                );
              })}
            </Fragment>
          </select>
          <div>
            <img
              src={this.state.selection.gambar}
              width="20%"
              height="20%"
            ></img>
          </div>
          <div>
            <p>
              Menyewa {selection.kamera}. Uang yang harus dibayarkan sejumlah
              Rp.{selection.harga}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Kamera;

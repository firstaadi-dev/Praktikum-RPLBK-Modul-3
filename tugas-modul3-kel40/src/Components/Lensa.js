import { Component, Fragment } from "react";
import xf35 from "../assets/image/xf35.jpg";
import xf50 from "../assets/image/xf50.jpg";
import xf1855 from "../assets/image/xf1855.jpg";
import xf33 from "../assets/image/xf33.jpg";

class Lensa extends Component {
  constructor(props) {
    super(props);
    this.handleChangeLensa = this.handleChangeLensa.bind(this);
    this.state = {
      lensa: [
        ["XF 35mm", "100.000", xf35],
        ["XF 50mm", "115.000", xf50],
        ["XF 18-55mm", "75.000", xf1855],
        ["XF 33mm", "150.000", xf33],
      ],
      selection: {
        lensa: "",
        harga: "",
        gambar: "",
      },
    };
  }
  componentDidMount() {
    alert("Pilih lensa kesukaan anda");
  }
  componentWillUnmount(){
    alert("Menu pemilihan lensa akan dihilangkan")
  }
  handleChangeLensa(e) {
    var index = e.target.value;
    this.setState({
      selection: {
        lensa: this.state.lensa[index][0],
        harga: this.state.lensa[index][1],
        gambar: this.state.lensa[index][2],
      },
    });
  }

  render() {
    const { selection, lensa } = this.state;
    return (
      <>
        <div className='kamera'>
          <select id="kameraDropDown" onChange={this.handleChangeLensa}>
            <option name="test" value="0">
              Pilih Lensa
            </option>
            <Fragment>
              {lensa.map((body, index) => {
                return (
                  <option name={body[0]} value={index}>
                    {body[0]}
                  </option>
                );
              })}
            </Fragment>
          </select>
          <div className='gmbr'>
            <img
              src={this.state.selection.gambar}
              width="20%"
              height="20%"
            ></img>
          </div>
          <div className='h2'>
            <p>
              Menyewa {selection.lensa}. Uang yang harus dibayarkan sejumlah Rp.
              {selection.harga}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Lensa;

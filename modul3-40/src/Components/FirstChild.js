import React, { Component } from "react";
class FirstChild extends Component {
  state = {
    angka: 0,
    tulisan: "",
  };
  componentDidMount() {
 alert(`Mount triggered!`)
 }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//  alert(`Component Updates! State angka sebelumnya:
//  ${prevState.angka}`)
//  }
  componentWillUnmount() {
 alert('I will be gone :(')
 }
//   shouldComponentUpdate(nextProps, nextState, nextContext) {
//  return window.confirm('Haruskah Component ini di-Update?');
//  }

  tambahAngka = () => {
    this.setState((state) => {
      return { angka: state.angka + 1 };
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((state) => {
      return {
        [name]: value,
      };
    });
  };
  render() {
    return (
      <>
        <div>
          <p>Aku anak pertama</p>
        </div>
        <button onClick={this.tambahAngka}>Coba Tambah!</button>
        <br />
        <span>{this.state.angka}</span>
        <br />
        <br />
        <br />
        <input
          onChange={this.handleChange}
          name="tulisan"
          value={this.state.tulisan}
        />
        <br />
        <span>{this.state.tulisan}</span>
      </>
    );
  }
}
export default FirstChild;

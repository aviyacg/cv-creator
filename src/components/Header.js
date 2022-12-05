import { Component } from "react";
import JsPDF from 'jspdf';
import '../styles/Header.css';

class Header extends Component{

  exportPDF() {
    const pdf = new JsPDF('portrait','pt','a4');
    pdf.html(document.querySelector('.Preview')).then(() => {
      pdf.save('CV.pdf');
    });
  }

  render(){
    return (
      <div className="Header">
        Create CV
        <button onClick={this.exportPDF}>Export PDF</button>
      </div>
    );
  }
}

export default Header;
import { useRef } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import './App.css'

export default function App() {
  const inputRef = useRef(null)
  const generatePDF = async () => {
    const canvas = await html2canvas(inputRef.current, { scale: 2, logging: true, useCORS: true });
    const imData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = 180;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let x = (pageWidth - imgWidth) / 2;
    let y = (pageHeight - imgHeight) / 2;
    pdf.addImage(imData, 'PNG', x, y, imgWidth, imgHeight);
    pdf.save('document.pdf');
  }
  return (
    <div className="App">
      <div className="invoice" ref={inputRef}>
        <h1>My Document</h1>
        <p>This is a simple document to be converted to PDF.</p>
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  )
}


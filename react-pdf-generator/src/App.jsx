import './App.css';
import Resume from './Resume'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
export default function App() {
  return (
    <div className="app">
      <button className="download-button" disabled={(loading) => loading ? true : false}>
        <PDFDownloadLink document={<Resume />} fileName="resume.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </button>
      <div className="preview">
        <PDFViewer width="50%" height="500">
          <Resume />
        </PDFViewer>
      </div>
    </div>
  )
}

import { createContext, useContext, useState } from 'react';

const PDFContext = createContext();

export const usePDFContext = () => useContext(PDFContext);

export const PDFProvider = ({ children }) => {
    const [pdfData, setPdfData] = useState(null);

    const generatePDF = (data) => {

        console.log('Generating PDF with data:', data);
        setPdfData(data);
    };

    return (
        <PDFContext.Provider value={{ generatePDF, pdfData }}>
            {children}
        </PDFContext.Provider>
    );
};

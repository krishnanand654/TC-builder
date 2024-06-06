import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { usePDF } from 'react-to-pdf';

const generatePDF = async (values) => {
    const styles = `
       .pdf-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%; 
            padding: 20px; 
            box-sizing: border-box;
        }

        .bn-container {
            text-align: center;
            width: 100%;
            margin-top: 600px;
            max-width: 1100px;
            background-color: white;
            padding: 20px;
        }

    `;

    const content = (
        <div className="pdf-container">
            <style>{styles}</style>
            <div className='bn-container'>
                <div className='flex justify-center'>
                    <h1 className="text-[50px] pb-4 border-b-4 border-black w-[730px]">To Whomsoever It May Concern</h1>
                </div>
                <p className='text-[35px] text-justify'>
                    <span className='ml-32'>This</span> is to certify that {values?.name || "krishnanand"} {values?.gender || "S/O"} {values?.parent || "Anil Kumar M"} {values?.address || "Dolore qui id Lorem ad enim anim excepteur cillum voluptate consectetur."} was a bonafide student of this school. He had been studying here from {values?.startedDate || "2024-12"} to {values?.endedDate || "2024-12"}. As per the birth certificate and admission register his date of birth was {values?.dob || "20-10-2021"}.
                </p>
                <p className='mt-[150px] text-[35px] text-right w-full'>Yours Faithfully<br /> Principal</p>
            </div>
        </div>
    );

    const htmlString = renderToStaticMarkup(content);
    const virtualNode = document.createElement('div');
    virtualNode.innerHTML = htmlString;

    const { toPDF } = usePDF({
        filename: `Transfer_certificate_${values?.name}.pdf`,
        scale: 1,
        pageformat: 'a4',
        targetRef: virtualNode,
    });

    await toPDF();
};

export default generatePDF;

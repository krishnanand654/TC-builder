import { usePDF } from 'react-to-pdf';
import { Button } from '@nextui-org/react';
import './previewtctemplate.css';
import { useSelector, useDispatch } from 'react-redux';


const PreviewTcTemplate = ({ values }) => {
    const invoke = useSelector(state => state.invokeStatus)
    const { toPDF, targetRef } = usePDF({
        filename: `Transfer_certificate_${values?.name}.pdf`,
        scale: 1,
        pageformat: 'a4',
        width: '800px',
        height: 'auto',
    });

    const dispatch = useDispatch();

    console.log(invoke);




    return (
        <>
            {invoke ? <>
                <div className='flex gap-2'>
                    <Button color="white" className='w-36 border-blue-500' variant="bordered"> <img className="w-5 h-5" src="preview.png" /><a className='no-underline font-medium' href="#pointer">Preview</a></Button>
                    <Button className='download-btn w-36' color="primary" onClick={() => toPDF()} style={{ fontWeight: '600', }}><img className="w-5 h-5" src="download.png" />Download PDF</Button>
                </div>
            </> : null}


            <div className="pdf-container" ref={targetRef}>
                <div className='bn-container'>
                    <div className='flex justify-center' id="pointer">
                        <h1 className="text-[50px] pb-4 border-b-4 border-black w-[730px]">To Whomsoever It May Concern</h1>
                    </div>
                    <p className=' text-[35px] text-justify'><span className='ml-32'>This</span> is to certify that {values?.name || "<Student>"} {values?.gender || "<S/O or D/O>"} {values?.parent || "<Parent>"} {values?.address || "<Address>"} was a bonafide student of this school. He had been studying here from {values?.startedDate || "<start data>"} to {values?.endedDate || "<end data>"}. As per the birth certificate and admission register his date of birth was {values?.dob || "<DOB>"}.</p>
                    <p className='mt-[150px] text-[35px] text-right w-full'>Yours Faithfully<br /> Principal</p>
                </div>
            </div>

        </>
    );
};

export default PreviewTcTemplate;

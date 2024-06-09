import { Button } from 'antd';
import { useEffect } from 'react';

import './BonafiedTemplate.css'

const BonafiedTemplate = ({ values }) => {


    return (
        <>
            <div>
                <div className='bn-prev-container text-center '>
                    <h1>To Whomsoever It Mav Concern</h1>
                    <p className='w-[500px]'>This is to certify that {values.name} {values.gender} {values.parent} {values.address} was a bonafide student of this school. He had been studying here from {values.startedDate} to {values.endedDate}. As per the birth certificate and admission reisver his date of birth was {values.dob}.</p>
                    <p>Yours Faithfully</p>

                </div>
                {/* <Button type="primary" onClick={invokePdf}>Generate PDF</Button> */}
            </div>

        </>
    )
}

export default BonafiedTemplate
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { usePDF } from 'react-to-pdf';
import { Button } from 'antd';
import './template.css';
const Template = ({ values }) => {
    const { toPDF, targetRef } = usePDF({
        filename: `Transfer_certificate_${values.nameOfPupil}.pdf`,
        scale: 1, // Set a fixed scale value to prevent resizing
        pageformat: 'a4', // Set the page format, you can adjust it as needed
        width: '800px', // Set a fixed width for the PDF content
        height: 'auto', // Allow the height to adjust as needed
    });
    return (
        <div className='test'>

            <div ref={targetRef}>
                <div className='container' >
                    <div className='header' >
                        <div style={{ margin: "40px 0 20px" }}>
                            <h3 className='header-sub'>Form 5</h3>
                            <h2 className='header-title'>TRANSFER CERTIFICATE</h2>
                        </div>
                    </div>
                    <div className='field-body' >
                        <div>
                            <table>
                                <tr>
                                    <td className='col-w'>TC No :</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.tcNo}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Name of School</td>
                                    <td className='dot-w'>:</td>
                                    <td className='content-w'>
                                        <span style={{ width: '500px', display: 'inline-block' }}>Gayathri Vidya Mandir,<br /> Vazhappally, Changanassery,</span><br />
                                        <span style={{ width: '600px', display: 'inline-block' }}>Accredicted Agency of NIOS, OBE Programme</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className='col-w'>whether the school is a recognized School</td>
                                    <td className='dot-w'>:</td>
                                    <td><span style={{ width: '400px', display: 'inline-block' }}>Yes, Recognized By NIOS Accreditation No OB914416</span></td>
                                </tr>

                                <tr>
                                    <td className='col-w'>Name of pupil</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.nameOfPupil}</td>
                                </tr>

                                <tr>
                                    <td className='col-w'>Admission No.</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.admissionNo}</td>
                                </tr>

                                <tr>
                                    <td className='col-w'>Name of parent/guardian and relationship of the pupil to the guardian</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.parentName}</td>
                                </tr>


                                <tr>
                                    <td className='col-w'>Identification marks if any of the pupil</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.identificationMarks}</td>
                                </tr>


                                <tr>
                                    <td className='col-w'>Nationality</td>
                                    <td className='dot-w'>:</td>
                                    <td>Indian</td>
                                </tr>

                                <tr>
                                    <td className='col-w'>Religion</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.religion}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Whether the candidate belongs to SC/ ST or OBC or whether he / she is a convert from the SC/ST</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.caste}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Date of birth according to Admission Register (in words):</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.dob}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Standard in which the pupil was last enrolled (in words):</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.lastEnrolled}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Date of Admission or promotion to that Standard:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.admissionDate}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Whether qualified for promotion to a Higher Standard:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.qualifiedForPromotion}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Whether the pupil has paid all the fees due to School:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.feesPaid}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Whether the pupil was in receipt of the fee concession:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.feeConcession}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Date of the pupil's last attendance at School:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.lastAttendanceDate}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Date on which the name was removed from rolls:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.nameRemovedDate}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Date of Application for Certificate:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.applicationForCertificate}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Date of Issue of the Certificate:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.certificateIssueDate}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Reason for leaving:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.reasonForLeaving}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>School to which the pupil intends proceeding:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.intendsProceeding}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Number of School days unto the date:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.schoolDaysUntoDate}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Number of School days pupil attended:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.schoolDaysAttended}</td>
                                </tr>
                                <tr>
                                    <td className='col-w'>Character and Conduct:</td>
                                    <td className='dot-w'>:</td>
                                    <td>{values.characterAndConduct}</td>
                                </tr>

                            </table>
                            <div className='footer'>
                                <p>PRINCIPAL</p>

                                <p>School Seal</p>
                                <p style={{ lineHeight: "32px" }}>Co-Ordinator NIOS<br /> <span style={{ fontWeight: '600', padding: '30px 0 30px' }}>Gayathri Vidya Mandir</span></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: "center", marginBottom: '100px', marginTop: '30px' }}>
                <Button type="primary" className='download-btn' onClick={() => toPDF()} style={{ fontSize: '24px', padding: '10px', height: '100%', fontWeight: '600' }}>Download PDF</Button >
            </div>
        </div>
    )
}

export default Template;


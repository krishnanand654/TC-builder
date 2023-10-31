/* eslint-disable no-unused-vars */
import { Form, Input, Select, DatePicker, Button, Col } from 'antd';

import Template from '../../Components/Template/Template';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
const { Option } = Select;
function InputForm() {

    const [data, setData] = useState({});


    const [dobDate, setDobDate] = useState(""); // Date of birth
    const [admissionDate, setAdmissionDate] = useState(""); // Admission date
    const [lastAttendanceDate, setLastAttendanceDate] = useState(""); // Last attendance date
    const [nameRemovedDate, setNameRemovedDate] = useState(""); // Date name was removed from rolls
    const [applicationForCertificateDate, setApplicationForCertificateDate] = useState(""); // Application for certificate date
    const [certificateIssueDate, setCertificateIssueDate] = useState(""); // Date of certificate issue


    const onFinish = (values) => {
        console.log('Form values:', values);
        values.dob = dobDate;
        values.admissionDate = admissionDate;
        values.lastAttendanceDate = lastAttendanceDate;
        values.nameRemovedDate = nameRemovedDate;
        values.applicationForCertificate = applicationForCertificateDate;
        values.certificateIssueDate = certificateIssueDate;
        setData(values);
        console.log(Object);

    };

    const onDobDateChange = (date, dateString) => setDobDate(dateString);
    const onAdmissionDateChange = (date, dateString) => setAdmissionDate(dateString);
    const onLastAttendanceDateChange = (date, dateString) => setLastAttendanceDate(dateString);
    const onNameRemovedDateChange = (date, dateString) => setNameRemovedDate(dateString);
    const onApplicationForCertificateDateChange = (date, dateString) => setApplicationForCertificateDate(dateString);
    const onCertificateIssueDateChange = (date, dateString) => setCertificateIssueDate(dateString);

    const user = localStorage.getItem("user");
    return (
        <div>
            {user ? (
                <>
                    < Navbar />
                    <div className='section'>
                        <div>
                            <Form name="custom-form" onFinish={onFinish}>

                                <Form.Item label="TC Number" name="tcNo" rules={[{ required: true, message: 'Please enter the TC number' }]}>
                                    <Input className='custom-input' />
                                </Form.Item>

                                <Form.Item label="Name of pupil" name="nameOfPupil" rules={[{ required: true, message: 'Please enter the name of the pupil' }]}>
                                    <Input className='custom-input' />
                                </Form.Item>

                                <Col span={10}>
                                    <Form.Item label="Admission No." name="admissionNo" rules={[{ required: true, message: 'Please enter the admission number' }]}>
                                        <Input className='custom-input' />
                                    </Form.Item>
                                </Col>


                                <Form.Item label="Name of parent/guardian and relationship to the guardian" name="parentName" rules={[{ required: true, message: 'Please enter the parent/guardian name' }]}>
                                    <Input className='custom-input' />
                                </Form.Item>

                                <Form.Item label="Identification marks if any" name="identificationMarks">
                                    <Input className='custom-input' />
                                </Form.Item>

                                <Form.Item label="Religion" name="religion" rules={[{ required: true, message: 'Please enter the religion' }]}>
                                    <Input className='custom-input' />
                                </Form.Item>

                                <Form.Item name="caste" label={
                                    <span style={{ height: "45px" }}>
                                        Whether the candidate belongs to SC/ST or OBC<br />
                                        or whether he/she is a convert from the SC/ST

                                    </span>

                                } rules={[{ required: true, message: 'Please select an option' }]}>
                                    <Select >
                                        <Option value="SC/ST">SC/ST</Option>
                                        <Option value="OBC">OBC</Option>
                                        <Option value="Convert">Convert</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Date of birth according to Admission Register (in words)" name="dob" rules={[{ required: true, message: 'Please select a date' }]}>
                                    <DatePicker onChange={onDobDateChange} />
                                </Form.Item>

                                <Form.Item label="Standard in which the pupil was last enrolled (in words)" name="lastEnrolled" rules={[{ required: true, message: 'Please enter the standard' }]}>
                                    <Input className='custom-input' />
                                </Form.Item>

                                <Form.Item label="Date of Admission or promotion to that Standard" name="admissionDate" rules={[{ required: true, message: 'Please select a date' }]}>
                                    <DatePicker onChange={onAdmissionDateChange} />
                                </Form.Item>

                                <Form.Item label="Whether qualified for promotion to a Higher Standard" name="qualifiedForPromotion" rules={[{ required: true, message: 'Please select an option' }]}>
                                    <Select>
                                        <Option value="Yes">Yes</Option>
                                        <Option value="No">No</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Whether the pupil has paid all the fees due to School" name="feesPaid" rules={[{ required: true, message: 'Please select an option' }]}>
                                    <Select>
                                        <Option value="Yes">Yes</Option>
                                        <Option value="No">No</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Whether the pupil was in receipt of the fee concession" name="feeConcession" rules={[{ required: true, message: 'Please select an option' }]}>
                                    <Select>
                                        <Option value="Yes">Yes</Option>
                                        <Option value="No">No</Option>
                                    </Select>
                                </Form.Item>


                                <Form.Item label="Date of the pupil's last attendance at School" name="lastAttendanceDate" rules={[{ required: true, message: 'Please select a date' }]}>
                                    <DatePicker onChange={onLastAttendanceDateChange} />
                                </Form.Item>

                                <Form.Item label="Date on which the name was removed from rolls" name="nameRemovedDate" rules={[{ required: true, message: 'Please select a date' }]}>
                                    <DatePicker onChange={onNameRemovedDateChange} />
                                </Form.Item>



                                <Form.Item label="Date of Application for Certificate" name="applicationForCertificate" rules={[{ required: true, message: 'Please select a date' }]}>
                                    <DatePicker onChange={onApplicationForCertificateDateChange} />
                                </Form.Item>

                                <Form.Item label="Date of Issue of the Certificate" name="certificateIssueDate" rules={[{ required: true, message: 'Please select a date' }]}>
                                    <DatePicker onChange={onCertificateIssueDateChange} />
                                </Form.Item>

                                <Form.Item label="Reason for leaving" name="reasonForLeaving">
                                    <Input className='custom-input' />
                                </Form.Item>

                                <Form.Item label="School to which the pupil intends proceeding" name="intendsProceeding">
                                    <Input className='custom-input' />
                                </Form.Item>


                                <Form.Item label="Number of School days unto the date" name="schoolDaysUntoDate" rules={[{ required: true, message: 'Please enter the number of days' }]}>
                                    <Input className='custom-input' />
                                </Form.Item>

                                <Form.Item label="Number of School days pupil attended" name="schoolDaysAttended" rules={[{ required: true, message: 'Please enter the number of days' }]}>
                                    <Input className='custom-input' />
                                </Form.Item>


                                <Form.Item label="Character and Conduct" name="characterAndConduct">
                                    <Input.TextArea />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>

                    </div>
                    <div>
                        <Template values={data} />
                    </div>
                </>) : <p>Please Login</p>}
        </div>

    )
}

export default InputForm
import { useState } from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
} from 'antd';
import moment from 'moment';

import AppNavbar from '../../Components/AppNavbar/AppNavbar';
import PreviewTcTemplate from '../../Components/PreviewTcTemplate/PreviewTcTemplate';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setInvokeStatus } from '../../redux/actions';


const { RangePicker } = DatePicker;

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};


const Bonafied = () => {
    const [dob, setDob] = useState();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [data, setData] = useState({ startedDate: null, endedDate: null });
    const [submit, setSubmit] = useState(false);

    const dispatch = useDispatch();




    const handleDateChange = (dates) => {
        if (dates) {
            const start = moment(dates[0]);
            const end = moment(dates[1]);

            setStartDate(start.format('YYYY MMMM'));
            setEndDate(end.format('YYYY MMMM'));
        } else {
            setStartDate('');
            setEndDate('');
        }
    };
    const onFinish = (values) => {

        setSubmit(true);
        dispatch(setInvokeStatus(true))
        setData(values);

        const updatedData = { ...values, startedDate: startDate, endedDate: endDate, dob: dob }

        setData(updatedData);
    };

    function convertDateFormat(inputDate) {

        var parts = inputDate.split('-');
        var convertedDate = new Date(parts[0], parts[1] - 1, parts[2]);

        var day = convertedDate.getDate();
        var month = convertedDate.getMonth() + 1;
        var year = convertedDate.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return day + '/' + month + '/' + year;
    }

    const onDOBChange = (date, dateString) => setDob(convertDateFormat(dateString));

    const invokeStatus = useSelector(state => state.invokeStatus);

    // const handleSubmit = () => {
    //     if (submit == true) {
    //         dispatch(setInvokeStatus(true))
    //     }
    // }


    return (
        <>
            <AppNavbar />
            <div className='flex flex-col pt-36  align-items-center   w-full gap-10'>
                <Form
                    {...formItemLayout}
                    variant="filled"
                    style={{
                        maxWidth: 900,
                        width: 600
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Enter Student Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Enter Student Name',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Select"
                        name="gender"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Select >
                            <Option value="S/O">S/O</Option>
                            <Option value="D/O">D/O</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Enter Parent Name"
                        name="parent"
                        rules={[
                            {
                                required: true,
                                message: 'Enter Parent Name',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input address',
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        label="Start and End month"

                        rules={[
                            {
                                required: true,
                                message: 'Please input address',
                            },
                        ]}
                    >
                        <RangePicker picker="month" onChange={handleDateChange} />
                    </Form.Item>


                    <Form.Item
                        label="Dob"

                        rules={[
                            {
                                required: true,
                                message: 'Please input address',
                            },
                        ]}
                    >
                        <DatePicker onChange={onDOBChange} />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 6,
                            span: 16,
                        }}
                    >

                    </Form.Item>
                    <div className='flex justify-center '>
                        <Button type="primary" htmlType="submit" className='w-72'>
                            Submit
                        </Button>
                    </div>
                </Form>


                <PreviewTcTemplate values={data} />

            </div>

        </>
    )
};
export default Bonafied;
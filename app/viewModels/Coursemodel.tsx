import React, { useEffect, useState } from 'react';
import CourseScreen from "../views/CourseScreen/CourseScreen";
import { sendGetRequest } from '../network/network'

const CourseModel = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    const getData = async () => {
        try {
            const response = await sendGetRequest('https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1');
            // const json = await response.json();
            setData(response.data);
            // console.log('Data==>', response)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <CourseScreen isloading={isLoading} data={data} />
    )
}

export default CourseModel;
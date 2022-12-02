import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Lowongan = () => {

    const [jobData, setJobData] = useState([]);

    const [fetchStatus, setFetchStatus] = useState(true);

    const fetchData = () => {
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then((res) => {
            console.log(res.data.data)
            setJobData([...res.data.data])
        })
        .catch((error) => {

        });
    }

    useEffect(() => {
        fetchData()  
    }, [])

    return (
        <>
      <div className='ml-72 mt-14 mr-96'>
        <table>
          <tr className='bg-gray-50'>
              <th>ID</th>
              <th>Nama</th>
              <th>Nilai</th>
              <th>Course</th>
              <th>Index Nilai</th>
          </tr>
          { !jobData !== null && jobData.map((res, index) => {
            return(
              <tr className='bg-white dark:border-gray-700 dark:bg-gray-800 ' key={index}>
                  <td className='whitespace-nowrap font-medium text-gray-900 dark:text-white'> {index + 1}</td>
                  <td> {res.title}</td>
                  <td> {res.company_city}</td>
                  <td> {res.company_name}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
      )
}

export default Lowongan
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
      <div>
        <table>
          <tr className='bg-gray-50'>
              <th>Judul</th>
              <th>Kota Perusahaan</th>
              <th>Nama Perusahaan</th>
          </tr>
          { !jobData !== null && jobData.map((res, index) => {
            return(
              <tr key={index}>
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
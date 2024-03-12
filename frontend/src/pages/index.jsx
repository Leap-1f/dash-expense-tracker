import React from 'react'
import Header from './components/Header'
import Card from '@/pages/components/Card'
<<<<<<< HEAD
import BarChart from './components/BarChart'
import DonutChart from './components/DonutChart'
=======






>>>>>>> 490a14230d3ffdf0dc861d6196465d3f2c09d354

const HomePage = () => {
  // const  [data,setData]=useState();

  // const getData=async()=>{
  //   const response=await Axios.get("http:localhost:5000/getData")
  //   setData(response.data);
  // }

  // useEffect(() => {
  //   getData()
  // },[]);
  return (
    <>    
            <div className='flex-1 bg-gray-100 items-center justify-center'>
              <div className='flex bg-white justify-center items-center pt-2 h-20'>
                <Header />
              </div>
                <div className='bg-gray-100 pt-12 items-center justify-center'>
                    <Card />
                </div>
                <div className='bg-gray-100 pt-12 items-center justify-center'>
                      <BarChart />
                </div>
                <div className='bg-gray-100 pt-12 items-center justify-center'>
                </div>
            </div>
    </>
  )
}

export default HomePage

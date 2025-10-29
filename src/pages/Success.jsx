import React, { useEffect,useState } from 'react'
import { PacmanLoader } from 'react-spinners'
const Success = () => {
  // create a use state which is hold how many time the animation show 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);
  return (
    <div className='flex h-screen flex-col justify-center items-center'>
      {loading ? (
        <PacmanLoader
        color="#36d7b7"
        margin={0}
        size={65}
        />
    ) : (
        <div>
          <h2 className='text-3xl font-bold mb-14 text-center'>Order successful !</h2>
          <p>Your order has been successfully placed </p>
        </div>
      )}
    </div>
  )
}

export default Success
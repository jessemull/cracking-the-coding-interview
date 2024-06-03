import axios from 'axios'
import { useState } from 'react'

const Errors = ({ errors = [] }) => {
  return (
    <div className="mt-2 alert alert-danger">
      {errors.map(({ message }) => <li className="my-0" key={message}>{message}</li>)}
    </div>
  )
}

const useRequest = ({ body, method, onSuccess, url }) => {
  const [errors, setErrors] = useState(null)

  const doRequest = async () => {
    setErrors(null)
    try {
      const response = await axios[method](url, body)
      onSuccess(response.data)
    } catch (err) {
      setErrors(<Errors errors={err.response.data} />)
    }
  }

  return {
    doRequest,
    errors
  }
}

export default useRequest
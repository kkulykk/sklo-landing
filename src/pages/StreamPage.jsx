import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./StreamPage.css"

const StreamPage = () => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState();

  useEffect(() => {
    const logged = JSON.parse(sessionStorage.getItem('logged'));
    setLogged(logged)

    if (logged !== 1) {
        navigate("/login")
    }
  }, [])
  return (
    <div>StreamPage
        {logged}
    </div>
  )
}

export default StreamPage
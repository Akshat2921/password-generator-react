import React,{useState} from 'react'

const PasswordGenerator = () => {
    const [Password, setPassword] = React.useState('AJ2921')
  return (
    <span>{Password}</span>
  )
}

export default PasswordGenerator;
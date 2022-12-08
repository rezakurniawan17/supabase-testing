import { useState } from "react"
import { supabase } from "../supabase/config"
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
  // define state
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [nim, setNim] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')

  const [handleError, setHandleError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!name || !age || !nim || !city || !email || !number || !address) {
      setHandleError('Please fill all in the field correctly')
      return
    }

    const { data, error } = await supabase
      .from('data-mahasiswa')
      .insert([
        {
          name,
          age,
          nim,
          city,
          email,
          number,
          address
        }
      ])

      if(error) {
        setHandleError('Please fill all in the field correctly')
      }
      if(!error) {
        setHandleError(null)
        navigate('/')
      }
  }
  return (
    <div>
      <div>
        <h1 className="text-xl font-medium text-gray-700">Form Pengisian Data Mahasiswa</h1>
      </div>
      <form onSubmit={handleSubmit} className="mt-5 space-y-5">
        <div>
          <label htmlFor="name" className="block text-gray-600 mb-1">Nama Mahasiswa</label>
          <input required onChange={(e) => setName(e.target.value)} type="text" id="name" className="block rounded w-full" />
        </div>
        <div>
          <label htmlFor="nim" className="block text-gray-600 mb-1">NIM Mahasiswa</label>
          <input required onChange={(e) => setNim(e.target.value)} type="text" id="nim" className="block rounded w-full" />
        </div>
        <div>
          <label htmlFor="age" className="block text-gray-600 mb-1">Umur</label>
          <input required onChange={(e) => setAge(e.target.value)} type="number" id="age" className="block rounded w-full" />
        </div>
        <div>
          <label htmlFor="city" className="block text-gray-600 mb-1">Kota</label>
          <input required onChange={(e) => setCity(e.target.value)} type="text" id="city" className="block rounded w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
          <input required onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="block rounded w-full" />
        </div>
        <div>
          <label htmlFor="number" className="block text-gray-600 mb-1">Nomor Telefon</label>
          <input required onChange={(e) => setNumber(e.target.value)} type="text" id="number" className="block rounded w-full" />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-600 mb-1">Alamat</label>
          <input required onChange={(e) => setAddress(e.target.value)} type="text" id="address" className="block rounded w-full" />
        </div>
        <div>
          <button type="submit" className="px-5 py-2 rounded shadow-lg bg-blue-500 focus:bg-blue-600 hover:bg-blue-600 text-white">Tambah Data</button>
        </div>
      </form>
      {handleError && <span>{handleError}</span>}
    </div>
  )
}

export default Create
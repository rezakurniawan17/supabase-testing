import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { supabase } from '../supabase/config'

const Detail = () => {
  // define state
  const [fetchError, setFetchError] = useState(null)
  const [mhsData, setMhsData] = useState([])

  // define fetch from supabase
  useEffect(() => {
    const fetchMahasiswa = async () => {
      const {error, data} = await supabase
        .from('data-mahasiswa')
        .select()
        .eq('id', id)
        if(error) {
          setFetchError('Cannot fetch the data from database')
          setMhsData([])
        }
        if(data) {
          setMhsData(data)
          setFetchError(null)
        }
    }
    fetchMahasiswa()
  },[])
  const {id} = useParams()
  return (
    <div>
      {fetchError && <span>{fetchError}</span>}
      {mhsData?.map(mhs => {
        return (
          <div key={mhs.id}>
            <div className="p-4 flex flex-col space-y-2 rounded-lg border-2">
              <span className="text-lg font-medium">{mhs.name}</span>
              <span>{mhs.city}</span>
              <span>{mhs.age}</span>
              <span>{mhs.email}</span>
              <span>{mhs.number}</span>
              <span>{mhs.address}</span>
              <span>{mhs.nim}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Detail
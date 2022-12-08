import { useState, useEffect } from "react"
import { supabase } from "../supabase/config"
import { Link, redirect, useNavigate } from "react-router-dom"

const Home = () => {
  // define state
  const [fetchError, setFetchError] = useState(null)
  const [mhsData, setMhsData] = useState([])

  const navigate = useNavigate()

  // define fetch from supabase
  useEffect(() => {
    const fetchMahasiswa = async () => {
      const {error, data} = await supabase
        .from('data-mahasiswa')
        .select()

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
  }, [])

  const handleDelete = async (id) => {
    const {error } = await supabase
      .from('data-mahasiswa')
      .delete()
      .eq('id', id)

      if(error) {
        console.log('cannot delete the data')
      }
      if(!error) {
        navigate(0)
      }
  }
  return (
    <div>
      {fetchError && <span>{fetchError}</span>}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {mhsData?.map(mhs => {
        return (
          <div key={mhs.id}>
            <div className="p-4 flex flex-col rounded-lg border-2">
              <Link to={`/detail/${mhs.id}`} className="text-base text-gray-700 lg:text-lg font-medium">{mhs.name}</Link>
              <span className="text-gray-600 mt-1">{mhs.city}</span>
              <div className="mt-5 block">
                <button type="button" className="px-4 py-2 text-xs text-white bg-red-500" onClick={() => handleDelete(mhs.id)}>Delete</button>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Home;
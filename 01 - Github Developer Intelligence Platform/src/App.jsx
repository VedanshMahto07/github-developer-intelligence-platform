import React, { useState } from 'react'
import axios from 'axios'
import { FiSearch } from "react-icons/fi";
import Profile from './Components/Profile.jsx';
import Repositories from './Components/Repositories.jsx';
import Analytics from './Components/Analytics.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  const [username, setUsername] = useState("")
  const [userdata, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [error, setError] = useState("")

  const getData = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username")
      return
    }
    try {
      setError("")
      setLoading(true)
      const response = await axios.get(`https://api.github.com/users/${username}`)
      const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`)
      console.log(response.data)
      console.log(repoResponse.data)
      setUserData(response.data)
      setRepos(repoResponse.data)
      setUsername("")
    }
    catch (error) {
      setError("User not found. Please enter a valid GitHub username.")
      console.log(error)

      setUserData(null)
      setRepos([])
    }
    finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">
          Loading...
        </h1>
      </div>
    )
  }

  return (
    <div>
      <div className='flex text-center justify-center'>
        <img className='w-24 h-10 my-10 mx-0 invert' src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
        <h1 className='text-white text-4xl py-10 text-center font-bold'>GitHub Developer Intelligence Platform</h1>
      </div>
      <p className="text-gray-400 text-center text-lg">
        Analyze GitHub Profiles, Repositories & Developer Insights Instantly
      </p>
      <div className=' relative w-[450px] mx-auto mt-10 flex items-center'>
        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
        />
        <input
          type="text"
          placeholder=' Enter GitHub Username...'
          value={username}
          className=' placeholder:text-gray-400 w-full bg-[#1f2937] text-white pl-12 pr-5 py-3 rounded-xl outline-none border border-gray-700 '
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <button
          className='text-white ml-4 bg-blue-800 font-bold text-xl p-3 rounded-2xl cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300'
          onClick={() => {
            getData()
          }}
        >
          Analyze
        </button>
      </div>
      {
        error && (
          <p className='text-red-500 text-center mt-4 font-medium'>
            {error}
          </p>
        )
      }
      {
        userdata && (

          <Profile userdata={userdata} />
        )
      }
      {
        repos.length > 0 && (
          <Analytics repos={repos} />
        )
      }

      {
        repos.length > 0 && (
          <Repositories repos={repos} />
        )
      }
      <Footer />
    </div>
  )
}

export default App

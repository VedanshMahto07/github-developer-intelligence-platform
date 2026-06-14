import React from 'react'

const Profile = ({ userdata }) => {
    return (
        <div>
            <h2 className='max-w-2xl mx-auto mt-4 px-1 text-2xl font-bold text-white'>
                Developer Profile
            </h2>

            <div className='max-w-2xl mx-auto mt-6 bg-[#0d1424] rounded-2xl overflow-hidden border border-[#1e2d45] shadow-2xl hover:border-blue-500 transition-all duration-300'>
                <div className='h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500'></div>
                <div className='p-7'>
                    <div className='flex items-center gap-5 mb-5'>
                        <div className='relative'>
                            <img
                                src={userdata.avatar_url}
                                alt={userdata.login}
                                className='w-20 h-20 rounded-full border-[2.5px] border-blue-500'
                            />
                            <span className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0d1424]'></span>
                        </div>

                        <div>
                            <h1 className='text-xl font-bold text-slate-100'>
                                {userdata.name || userdata.login}
                            </h1>

                            <p className='text-sm text-[#4b6080]'>
                                @{userdata.login}
                            </p>

                            <p className='text-sm text-[#7a90aa] mt-2'>
                                {userdata.bio || "No bio available"}
                            </p>
                        </div>
                    </div>

                    <div className='border-t border-[#1e2d45] mb-5'></div>

                    <div className='grid grid-cols-3 gap-3 mb-5'>

                        <div className='bg-[#111d2e] border border-[#1e2d45] rounded-xl py-3 text-center'>
                            <h2 className='text-xl font-bold text-slate-200'>
                                {userdata.followers}
                            </h2>
                            <p className='text-[11px] text-[#4b6080]'>
                                Followers
                            </p>
                        </div>

                        <div className='bg-[#111d2e] border border-[#1e2d45] rounded-xl py-3 text-center'>
                            <h2 className='text-xl font-bold text-slate-200'>
                                {userdata.following}
                            </h2>
                            <p className='text-[11px] text-[#4b6080]'>
                                Following
                            </p>
                        </div>

                        <div className='bg-[#111d2e] border border-[#1e2d45] rounded-xl py-3 text-center'>
                            <h2 className='text-xl font-bold text-slate-200'>
                                {userdata.public_repos}
                            </h2>
                            <p className='text-[11px] text-[#4b6080]'>
                                Repositories
                            </p>
                        </div>

                    </div>

                    <div className='space-y-2 mb-5 text-sm text-[#6b8299]'>
                        <p>📍 {userdata.location || "Location not specified"}</p>
                        <p>🏢 {userdata.company || "No company"}</p>
                        <p>
                            🗓️ Joined: {new Date(userdata.created_at).toLocaleDateString()}
                        </p>
                    </div>

                    <div className='flex gap-3'>
                        <a
                            href={userdata.html_url}
                            target='_blank'
                            rel='noreferrer'
                            className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all'
                        >
                            View GitHub Profile ↗
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
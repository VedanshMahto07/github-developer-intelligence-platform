import React from 'react'

const Repositories = ({ repos }) => {
  return (
    <div className='max-w-5xl mx-auto mt-8 mb-10 px-4'>

      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-2xl font-bold text-slate-200'>
          Repositories
        </h2>

        <span className='text-sm text-slate-400 bg-[#111d2e] border border-[#1e2d45] rounded-full px-3 py-1'>
          {repos.length} Repositories
        </span>
      </div>

      <div className='flex flex-wrap gap-4'>
        {repos.map((repo) => (
          <div
            key={repo.id}
            className='flex-1 basis-[350px] max-w-[calc(50%-8px)] bg-[#0d1424] border border-[#1e2d45] rounded-2xl p-5 flex flex-col hover:border-blue-500 hover:-translate-y-1 transition-all duration-300'
          >

            <div className='flex items-start justify-between gap-3 mb-3'>
              <h3 className='text-lg font-bold text-slate-200 break-all flex-1'>
                {repo.name}
              </h3>

              <span className='text-sm bg-[#111d2e] text-blue-400 px-3 py-1 rounded-full'>
                {repo.language || 'Unknown'}
              </span>
            </div>

            <p className='text-sm text-slate-400 leading-relaxed min-h-[72px] mb-4'>
              {repo.description || 'No description available'}
            </p>

            <div className='flex items-center gap-5 mb-4'>
              <span className='text-sm text-slate-400'>
                ⭐ {repo.stargazers_count}
              </span>

              <span className='text-sm text-slate-400'>
                🍴 {repo.forks_count}
              </span>
            </div>

            <div className='mt-auto pt-4 border-t border-[#1e2d45] flex items-center justify-between'>
              <span className='text-sm text-slate-500'>
                Updated {new Date(repo.updated_at).toLocaleDateString()}
              </span>

              <a
                href={repo.html_url}
                target='_blank'
                rel='noreferrer'
                className='text-sm font-medium text-blue-400 hover:text-blue-300'
              >
                View ↗
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Repositories
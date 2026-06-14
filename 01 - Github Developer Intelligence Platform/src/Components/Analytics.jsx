import React from 'react'

const Analytics = ({ repos }) => {

  let totalStars = 0
  let totalForks = 0

  repos.forEach((repo) => {
    totalStars += repo.stargazers_count
    totalForks += repo.forks_count
  })

  let languageCount = {}

  repos.forEach((repo) => {
    if (repo.language) {
      if (languageCount[repo.language]) {
        languageCount[repo.language]++
      } else {
        languageCount[repo.language] = 1
      }
    }
  })

  let topLanguage = "N/A"
  let maxCount = 0

  for (let language in languageCount) {
    if (languageCount[language] > maxCount) {
      maxCount = languageCount[language]
      topLanguage = language
    }
  }

  let topRepo = repos[0]

  repos.forEach((repo) => {
    if (repo.stargazers_count > topRepo.stargazers_count) {
      topRepo = repo
    }
  })

  return (
    <div className='max-w-5xl mx-auto mt-8 mb-8 px-4'>

      <h2 className='text-2xl font-bold text-white mb-5'>
        Developer Analytics
      </h2>

      <div className='flex flex-wrap gap-4'>

        <div className='flex-1 min-w-[220px] bg-[#0d1424] border border-[#1e2d45] rounded-2xl p-5 hover:border-blue-500 transition-all duration-300'>
          <h3 className='text-sm text-slate-400 mb-2'>
            Total Repositories
          </h3>

          <p className='text-3xl font-bold text-white'>
            {repos.length}
          </p>
        </div>

        <div className='flex-1 min-w-[220px] bg-[#0d1424] border border-[#1e2d45] rounded-2xl p-5 hover:border-blue-500 transition-all duration-300'>
          <h3 className='text-sm text-slate-400 mb-2'>
            Total Stars
          </h3>

          <p className='text-3xl font-bold text-yellow-400'>
            ⭐ {totalStars}
          </p>
        </div>

        <div className='flex-1 min-w-[220px] bg-[#0d1424] border border-[#1e2d45] rounded-2xl p-5 hover:border-blue-500 transition-all duration-300'>
          <h3 className='text-sm text-slate-400 mb-2'>
            Total Forks
          </h3>

          <p className='text-3xl font-bold text-green-400'>
            🍴 {totalForks}
          </p>
        </div>

        <div className='flex-1 min-w-[220px] bg-[#0d1424] border border-[#1e2d45] rounded-2xl p-5 hover:border-blue-500 transition-all duration-300'>
          <h3 className='text-sm text-slate-400 mb-2'>
            Most Used Language
          </h3>

          <p className='text-3xl font-bold text-blue-400'>
            💻 {topLanguage}
          </p>
        </div>

      </div>

      <div className='flex flex-wrap gap-4 mt-6'>

        <div className='flex-1 min-w-[300px] bg-[#0d1424] border border-[#1e2d45] rounded-2xl p-5 hover:border-blue-500 transition-all duration-300'>
          <h3 className='text-lg font-semibold text-white mb-4'>
            🏆 Top Repository
          </h3>

          <p className='text-xl font-bold text-slate-200'>
            {topRepo.name}
          </p>

          <p className='text-yellow-400 mt-2'>
            ⭐ {topRepo.stargazers_count} Stars
          </p>

          <a
            href={topRepo.html_url}
            target='_blank'
            rel='noreferrer'
            className='inline-block mt-4 text-blue-400 hover:text-blue-300'
          >
            View Repository ↗
          </a>
        </div>

        <div className='flex-1 min-w-[300px] bg-[#0d1424] border border-[#1e2d45] rounded-2xl p-5 hover:border-blue-500 transition-all duration-300'>
          <h3 className='text-lg font-semibold text-white mb-4'>
            📊 Language Breakdown
          </h3>

          {
            Object.entries(languageCount).map(([language, count]) => (
              <div
                key={language}
                className='flex justify-between py-2 border-b border-[#1e2d45] last:border-b-0'
              >
                <span className='text-slate-300'>
                  {language}
                </span>

                <span className='text-blue-400 font-medium'>
                  {count} Repo{count > 1 ? 's' : ''}
                </span>
              </div>
            ))
          }

        </div>

      </div>

    </div>
  )
}

export default Analytics
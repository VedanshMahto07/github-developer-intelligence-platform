const Footer = () => {
  return (
    <footer className='border-t border-[#1e2d45] mt-16 py-10 px-4'>
      <div className='max-w-5xl mx-auto'>

        <div className='flex justify-between gap-10 flex-wrap mb-10'>

          <div>
            <div className='flex items-center gap-3 mb-3'>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className='w-6 h-6 invert'
              />

              <h3 className='text-xl font-semibold text-white'>
                GitHub Developer Intelligence Platform
              </h3>
            </div>

            <p className='text-slate-400 max-w-md leading-7'>
              Transform GitHub profiles into meaningful developer insights,
              repository analytics, and technology breakdowns.
            </p>
          </div>

          <div className='flex gap-16 flex-wrap'>

            <div>
              <h4 className='text-white font-semibold mb-3'>
                Resources
              </h4>

              <div className='flex flex-col gap-2'>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className='text-slate-400 hover:text-blue-400 transition-all'
                >
                  GitHub
                </a>

                <a
                  href="https://docs.github.com/en/rest"
                  target="_blank"
                  rel="noreferrer"
                  className='text-slate-400 hover:text-blue-400 transition-all'
                >
                  GitHub API
                </a>
              </div>
            </div>

            <div>
              <h4 className='text-white font-semibold mb-3'>
                Built With
              </h4>

              <div className='flex flex-col gap-2'>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noreferrer"
                  className='text-slate-400 hover:text-blue-400 transition-all'
                >
                  React
                </a>

                <a
                  href="https://vitejs.dev"
                  target="_blank"
                  rel="noreferrer"
                  className='text-slate-400 hover:text-blue-400 transition-all'
                >
                  Vite
                </a>

                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noreferrer"
                  className='text-slate-400 hover:text-blue-400 transition-all'
                >
                  Tailwind CSS
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className='border-t border-[#1e2d45] pt-6 flex justify-between items-center flex-wrap gap-4'>

          <p className='text-slate-500'>
            Turning GitHub Profiles into Actionable Developer Insights 🚀
          </p>

          <div className='flex gap-2 flex-wrap'>
            <span className='text-xs px-3 py-1 rounded-full bg-[#111d2e] text-blue-400 border border-[#1e2d45]'>
              Open Source
            </span>

            <span className='text-xs px-3 py-1 rounded-full bg-[#111d2e] text-blue-400 border border-[#1e2d45]'>
              Free to Use
            </span>

            <span className='text-xs px-3 py-1 rounded-full bg-[#111d2e] text-blue-400 border border-[#1e2d45]'>
              GitHub API
            </span>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
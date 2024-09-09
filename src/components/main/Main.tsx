import './main.css'

const Main = ({children}:any) => {
  return (
    <main>
        <div className="main-content max-w-[1200px] mx-auto min-h-[60vh] ">
          {children}
        </div>
    </main>
  )
}

export default Main
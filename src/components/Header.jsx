import Btn from './components'

function Header() {
  return (
    <div className='max-w-[80%] lg:max-w-[90%] mx-auto flex  items-center md:justify-between py-4'>
        <img src='./main-logo.png' className='w-[40%] md:w-[25%] '/>

        <div className=' gap-x-[8px] hidden md:flex '>
            <Btn title={"Sign up"}/>
            <Btn title={"Login"}/>
            
        </div>
    </div>
  )
}

export default Header
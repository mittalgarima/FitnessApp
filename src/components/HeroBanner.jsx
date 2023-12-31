import HeroBannerImg from '../assets/images/banner.png'
const HeroBanner = () => {
    return ( 
        <section className='grid grid-cols-4 w-full justify-between pb-5'>
            <div className='grid col-span-4 lg:col-span-2'>
                <div className='flex items-center justify-center flex-col gap-y-7'>
                    <h1 className='font-black text-2xl sm:text-3xl text-primary'>Fitness Club</h1>
                    <h2 className='text-3xl sm:text-4xl font-black text-slate-800 dark:text-slate-300'>Sweat, Smile <br/> And Repeat</h2>
                    <p className='text-center w-11/12 font-medium text-slate-800 dark:text-slate-300'>Check out the most effective exercises personalized to you</p>
                    <div className='relative w-full flex items-center justify-center text-center'>
                    <span className='hidden xl:block absolute mb-9 opacity-10 dark:opacity-20 text-7xl w-full text-secondary font-semibold'>Fitness App</span>
                    <a href="#exercises" className="bg-secondary ring-offset-[#fdf4ff] dark:ring-offset-slate-800 duration-500 text-white mt-7 py-2 px-4 rounded-md ring-2 ring-offset-2 ring-secondary cursor-pointer hover:bg-primary hover:ring-primary z-10">Explore Exercises</a>
                   </div>
                </div>
            </div>
           <div className='col-span-2 hidden lg:grid justify-end'>
                <img src={HeroBannerImg} alt="banner" className='rounded-md overflow-auto' />
           </div>

        </section>
     );
}
 
export default HeroBanner;
